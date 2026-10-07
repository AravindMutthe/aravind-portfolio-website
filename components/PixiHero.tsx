"use client";

import { useEffect, useRef } from "react";

/**
 * PixiJS (MIT, free) particle field behind the hero — the open-source half
 * of hellomonday.com's stack. Gold dust drifting on navy, gently repelled
 * by the pointer. Skipped entirely for prefers-reduced-motion; particle
 * count is cut on small screens to stay smooth on phones.
 *
 * Dynamically imported so the ~1MB pixi bundle never touches the main
 * chunk — this branch only. Not merged to main.
 */
export default function PixiHero() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let destroy: (() => void) | null = null;

    (async () => {
      const PIXI = await import("pixi.js");
      if (cancelled || !hostRef.current) return;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const COUNT = isMobile ? 36 : 80;

      const app = new PIXI.Application();
      await app.init({
        backgroundAlpha: 0,
        antialias: true,
        resolution: Math.min(window.devicePixelRatio || 1, 2),
        resizeTo: host,
      });
      if (cancelled) {
        app.destroy(true);
        return;
      }
      host.appendChild(app.canvas);

      const GOLD = 0xc9a227;
      const parts: {
        g: import("pixi.js").Graphics;
        x: number;
        y: number;
        r: number;
        vy: number;
        sway: number;
        phase: number;
        tw: number;
      }[] = [];

      const w = () => host.clientWidth;
      const h = () => host.clientHeight;

      for (let i = 0; i < COUNT; i++) {
        const r = 1 + Math.random() * 2.6;
        const g = new PIXI.Graphics();
        g.circle(0, 0, r).fill({ color: GOLD, alpha: 0.55 });
        const p = {
          g,
          x: Math.random() * w(),
          y: Math.random() * h(),
          r,
          vy: 0.12 + Math.random() * 0.35,
          sway: 0.3 + Math.random() * 0.9,
          phase: Math.random() * Math.PI * 2,
          tw: 0.6 + Math.random() * 1.4,
        };
        app.stage.addChild(g);
        parts.push(p);
      }

      const mouse = { x: -9999, y: -9999 };
      const onMove = (e: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      let t = 0;
      const tick = () => {
        t += 0.016;
        const W = w();
        const H = h();
        for (const p of parts) {
          p.y -= p.vy;
          p.phase += 0.01 * p.tw;
          const sx = p.x + Math.sin(p.phase) * 14 * p.sway;

          // gentle pointer repel
          const dx = sx - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          let ox = 0;
          let oy = 0;
          if (d2 < 120 * 120 && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = ((120 - d) / 120) * 14;
            ox = (dx / d) * f;
            oy = (dy / d) * f;
          }

          p.g.position.set(sx + ox, p.y + oy);
          p.g.alpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(t * p.tw + p.phase));

          if (p.y < -10) {
            p.y = H + 10;
            p.x = Math.random() * W;
          }
        }
      };
      app.ticker.add(tick);

      destroy = () => {
        window.removeEventListener("pointermove", onMove);
        app.ticker.remove(tick);
        app.destroy(true, { children: true });
      };
    })();

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  return <div ref={hostRef} className="pixi-hero" aria-hidden="true" />;
}
