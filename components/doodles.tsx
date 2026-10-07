"use client";

import { useEffect, useRef } from "react";

/**
 * Editorial line-illustration system.
 * Research-backed rules: ONE stroke-width family (5px, round caps),
 * navy ink + gold accent only, placed on margins/annotations/dividers,
 * max 1–3 accents per viewport. Imperfection drawn once, not random.
 */

const INK = "#1B2F4B";
const GOLD = "#C9A227";

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 22" fill="none" aria-hidden="true">
      <path
        d="M4 14 C 30 4, 55 20, 82 11 S 135 5, 160 13 S 200 18, 216 8"
        stroke={GOLD}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 4 C 22 13, 25 16, 36 20 C 25 24, 22 27, 20 36 C 18 27, 15 24, 4 20 C 15 16, 18 13, 20 4 Z"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="3" fill={GOLD} />
    </svg>
  );
}

/** Hand-drawn arrow for annotations (e.g. pointing at a CTA). */
export function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <path
        d="M8 12 C 40 16, 72 30, 96 58"
        stroke={GOLD}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M78 52 L 98 60 L 84 74"
        stroke={GOLD}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Pip — editorial line-art server bot. Single 5px stroke family, navy ink,
 * gold reserved for the eyes and antenna light. Idle: breathe + blink.
 * Pupils drift subtly toward the cursor (calm, not googly).
 * Placed at hero only — character earns attention, product earns trust.
 */
export function Pip({ className = "" }: { className?: string }) {
  const pupilsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const pupils = pupilsRef.current;
    if (!pupils) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    const onMove = (e: PointerEvent) => {
      const svg = pupils.ownerSVGElement;
      if (!svg) return;
      const r = svg.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / r.width;
      const py = (e.clientY - (r.top + r.height / 2)) / r.height;
      const m = Math.hypot(px, py) || 1;
      const cl = Math.min(m, 1);
      tx = (px / m) * cl * 4;
      ty = (py / m) * cl * 3;
    };
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      pupils.setAttribute("transform", `translate(${cx.toFixed(2)} ${cy.toFixed(2)})`);
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`pip ${className}`} aria-hidden="true">
      <svg viewBox="0 0 160 180" fill="none">
        {/* antenna */}
        <line x1="80" y1="30" x2="80" y2="12" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <circle className="pip-light" cx="80" cy="10" r="5" fill={GOLD} />
        {/* arms rest */}
        <path d="M34 96 Q 20 104, 24 120" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d="M126 96 Q 140 104, 136 120" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {/* body — single confident outline */}
        <rect x="34" y="30" width="92" height="108" rx="30" stroke={INK} strokeWidth="5" />
        {/* face */}
        <g ref={pupilsRef}>
          <g className="pip-eyes">
            <circle cx="66" cy="72" r="6" fill={GOLD} />
            <circle cx="94" cy="72" r="6" fill={GOLD} />
          </g>
        </g>
        <path d="M68 92 Q 80 100, 92 92" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {/* chest detail — three status ticks */}
        <line x1="62" y1="116" x2="72" y2="116" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <line x1="78" y1="116" x2="88" y2="116" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
        <line x1="94" y1="116" x2="104" y2="116" stroke={INK} strokeWidth="5" strokeLinecap="round" opacity="0.35" />
        {/* feet */}
        <path d="M58 138 L 58 152" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d="M102 138 L 102 152" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d="M46 154 H 70" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d="M90 154 H 114" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/** Doodle divider — squiggle draws itself on scroll, sparkles at the ends. */
export function DoodleDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("draw");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("draw");
            io.disconnect();
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`doodle-divider ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 36" preserveAspectRatio="none">
        <path
          className="dd-line"
          d="M0 18 Q 75 4, 150 18 T 300 18 T 450 18 T 600 18 T 750 18 T 900 18 T 1050 18 T 1200 18"
          fill="none"
          stroke={GOLD}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <Sparkle className="dd-spark left" />
      <Sparkle className="dd-spark right" />
    </div>
  );
}
