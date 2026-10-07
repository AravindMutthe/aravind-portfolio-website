"use client";

import { useEffect, useRef } from "react";

export type ArtScene = "network" | "pipeline" | "orbit" | "terrain";

const NAVY = 0x1b2f4b;
const GOLD = 0xc9a227;
const PAPER = 0xfafaf7;

/**
 * GenerativeArt — original animated artwork rendered live with PixiJS,
 * replacing the stock photos. Four scenes, one per page context:
 *  network  — drifting constellation of nodes (home, contact)
 *  pipeline — CI/CD stages lighting up in sequence (services, features)
 *  orbit    — orbital system around a glowing core (about)
 *  terrain  — layered animated wave bands (skills)
 *
 * Pointer-reactive, resolution-capped, reduced-motion renders one static
 * frame. The component is code-split by Next dynamic() at call sites so
 * pixi never lands in the main bundle.
 */
export default function GenerativeArt({
  scene,
  className = "",
  label,
}: {
  scene: ArtScene;
  className?: string;
  label: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = hostRef.current;
    if (!host) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    let cancelled = false;
    let destroy: (() => void) | null = null;

    (async () => {
      const PIXI = await import("pixi.js");
      if (cancelled || !hostRef.current) return;

      const app = new PIXI.Application();
      await app.init({
        background: NAVY,
        antialias: true,
        resolution: Math.min(window.devicePixelRatio || 1, 2),
        resizeTo: host,
      });
      if (cancelled) {
        app.destroy(true);
        return;
      }
      host.appendChild(app.canvas);

      const W = () => host.clientWidth;
      const H = () => host.clientHeight;
      const rnd = (a: number, b: number) => a + Math.random() * (b - a);

      const mouse = { x: -9999, y: -9999 };
      const onMove = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      let tick: (() => void) | null = null;

      /* ---------------- network: constellation ---------------- */
      if (scene === "network") {
        const N = isMobile ? 26 : 44;
        const nodes = Array.from({ length: N }, () => ({
          x: rnd(0, W()),
          y: rnd(0, H()),
          vx: rnd(-0.35, 0.35),
          vy: rnd(-0.35, 0.35),
          r: rnd(1.6, 3.4),
          gold: Math.random() < 0.35,
        }));
        const g = new PIXI.Graphics();
        app.stage.addChild(g);
        let pulse = { x: 0, y: 0, r: 0, on: false };
        let pt = 0;
        tick = () => {
          const w = W();
          const h = H();
          pt += 0.016;
          g.clear();
          for (const n of nodes) {
            n.x += n.vx;
            n.y += n.vy;
            // pointer repel
            const dx = n.x - mouse.x;
            const dy = n.y - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 130 * 130 && d2 > 1) {
              const d = Math.sqrt(d2);
              n.x += (dx / d) * 1.1;
              n.y += (dy / d) * 1.1;
            }
            if (n.x < 0 || n.x > w) n.vx *= -1;
            if (n.y < 0 || n.y > h) n.vy *= -1;
            n.x = Math.max(0, Math.min(w, n.x));
            n.y = Math.max(0, Math.min(h, n.y));
          }
          // links
          for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
              const a = nodes[i];
              const b = nodes[j];
              const d = Math.hypot(a.x - b.x, a.y - b.y);
              if (d < 120) {
                g.moveTo(a.x, a.y)
                  .lineTo(b.x, b.y)
                  .stroke({ color: PAPER, width: 1, alpha: (1 - d / 120) * 0.28 });
              }
            }
          }
          // pulse ring
          if (!pulse.on && Math.random() < 0.008) {
            const n = nodes[(Math.random() * nodes.length) | 0];
            pulse = { x: n.x, y: n.y, r: 4, on: true };
          }
          if (pulse.on) {
            pulse.r += 1.6;
            g.circle(pulse.x, pulse.y, pulse.r).stroke({ color: GOLD, width: 2, alpha: Math.max(0, 1 - pulse.r / 70) });
            if (pulse.r > 70) pulse.on = false;
          }
          // nodes
          for (const n of nodes) {
            g.circle(n.x, n.y, n.r).fill({ color: n.gold ? GOLD : PAPER, alpha: n.gold ? 0.9 : 0.55 });
          }
        };
      }

      /* ---------------- pipeline: CI/CD stages ---------------- */
      if (scene === "pipeline") {
        const stages = ["code", "build", "test", "deploy"];
        const g = new PIXI.Graphics();
        const dots: import("pixi.js").Graphics[] = [];
        const labels: import("pixi.js").Text[] = [];
        app.stage.addChild(g);
        for (let i = 0; i < 6; i++) {
          const d = new PIXI.Graphics();
          d.circle(0, 0, 3).fill({ color: GOLD });
          app.stage.addChild(d);
          dots.push(d);
        }
        for (const s of stages) {
          const t = new PIXI.Text({
            text: s,
            style: { fontFamily: "Inter, sans-serif", fontSize: 13, fill: PAPER, fontWeight: "600" },
          });
          t.anchor.set(0.5, 0);
          app.stage.addChild(t);
          labels.push(t);
        }
        let t = 0;
        const stageX = (i: number, w: number) => (w * (i + 0.5)) / 4;
        tick = () => {
          t += 0.016;
          const w = W();
          const h = H();
          const cy = h / 2 - 8;
          g.clear();
          // pipes
          for (let i = 0; i < 3; i++) {
            const x1 = stageX(i, w);
            const x2 = stageX(i + 1, w);
            g.moveTo(x1, cy)
              .lineTo(x2, cy)
              .stroke({ color: PAPER, width: 7, alpha: 0.22, cap: "round" });
          }
          // stages light up in sequence
          for (let i = 0; i < 4; i++) {
            const x = stageX(i, w);
            const glow = 0.5 + 0.5 * Math.sin(t * 1.6 - i * 1.1);
            g.circle(x, cy, 15 + glow * 4).fill({ color: NAVY, alpha: 1 });
            g.circle(x, cy, 15 + glow * 4).stroke({ color: GOLD, width: 3, alpha: 0.35 + glow * 0.65 });
            g.circle(x, cy, 5).fill({ color: GOLD, alpha: 0.4 + glow * 0.6 });
            labels[i].position.set(x, cy + 30);
          }
          // travelling packets
          dots.forEach((d, k) => {
            const p = ((t * 0.22 + k / dots.length) % 1) * 3;
            const seg = Math.min(2, Math.floor(p));
            const f = p - seg;
            const x = stageX(seg, w) + (stageX(seg + 1, w) - stageX(seg, w)) * f;
            d.position.set(x, cy);
            d.alpha = 0.55 + 0.45 * Math.sin(t * 6 + k);
          });
        };
      }

      /* ---------------- orbit: system around a core ---------------- */
      if (scene === "orbit") {
        const stars = Array.from({ length: isMobile ? 40 : 80 }, () => ({
          x: Math.random(),
          y: Math.random(),
          r: rnd(0.8, 2),
          tw: rnd(0.5, 2),
          ph: rnd(0, 6.28),
        }));
        const g = new PIXI.Graphics();
        app.stage.addChild(g);
        let t = 0;
        tick = () => {
          t += 0.016;
          const w = W();
          const h = H();
          const cx = w / 2;
          const cy = h / 2;
          const R = Math.min(w, h);
          g.clear();
          for (const s of stars) {
            g.circle(s.x * w, s.y * h, s.r).fill({
              color: PAPER,
              alpha: 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(t * s.tw + s.ph)),
            });
          }
          // rings + satellites
          const rings = [0.2, 0.3, 0.4];
          rings.forEach((rr, ri) => {
            const rad = R * rr;
            g.circle(cx, cy, rad).stroke({ color: PAPER, width: 1.5, alpha: 0.3 });
            const sats = ri + 2;
            for (let s = 0; s < sats; s++) {
              const a = t * (0.5 - ri * 0.1) * (ri % 2 === 0 ? 1 : -1) + (s * 6.28) / sats + ri;
              const sx = cx + Math.cos(a) * rad;
              const sy = cy + Math.sin(a) * rad * 0.62;
              g.circle(sx, sy, ri === 1 ? 5 : 3.5).fill({ color: ri === 1 ? GOLD : PAPER, alpha: 0.95 });
            }
          });
          // core
          const pulse = 1 + 0.06 * Math.sin(t * 2);
          g.circle(cx, cy, 30 * pulse).fill({ color: GOLD, alpha: 0.25 });
          g.circle(cx, cy, 20 * pulse).fill({ color: GOLD, alpha: 0.9 });
          g.circle(cx, cy, 20 * pulse).stroke({ color: PAPER, width: 2, alpha: 0.6 });
        };
      }

      /* ---------------- terrain: wave bands ---------------- */
      if (scene === "terrain") {
        const bands = [
          { color: PAPER, alpha: 0.1, amp: 26, speed: 0.5, yOff: 0.62 },
          { color: GOLD, alpha: 0.28, amp: 32, speed: 0.35, yOff: 0.7 },
          { color: PAPER, alpha: 0.16, amp: 22, speed: 0.65, yOff: 0.78 },
          { color: GOLD, alpha: 0.5, amp: 28, speed: 0.45, yOff: 0.86 },
        ];
        const g = new PIXI.Graphics();
        const dots = new PIXI.Graphics();
        app.stage.addChild(g);
        app.stage.addChild(dots);
        const motes = Array.from({ length: isMobile ? 14 : 24 }, () => ({
          x: Math.random(),
          y: rnd(0.1, 0.6),
          r: rnd(1.5, 3),
          vy: rnd(0.0004, 0.0012),
        }));
        let t = 0;
        tick = () => {
          t += 0.016;
          const w = W();
          const h = H();
          g.clear();
          bands.forEach((b, bi) => {
            const baseY = h * b.yOff;
            g.moveTo(0, h);
            for (let x = 0; x <= w; x += 8) {
              const y = baseY + Math.sin(x / 130 + t * b.speed + bi * 1.7) * b.amp;
              g.lineTo(x, y);
            }
            g.lineTo(w, h).lineTo(0, h);
            g.fill({ color: b.color, alpha: b.alpha });
          });
          dots.clear();
          for (const m of motes) {
            m.y -= m.vy;
            if (m.y < 0.02) m.y = 0.6;
            dots.circle(m.x * w, m.y * h, m.r).fill({ color: GOLD, alpha: 0.7 });
          }
        };
      }

      if (reduced) {
        // one static frame for reduced motion
        tick?.();
      } else if (tick) {
        app.ticker.add(tick);
      }

      destroy = () => {
        window.removeEventListener("pointermove", onMove);
        if (tick) app.ticker.remove(tick);
        app.destroy(true, { children: true });
      };
    })();

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, [scene]);

  return <div ref={hostRef} className={`gen-art ${className}`} role="img" aria-label={label} />;
}
