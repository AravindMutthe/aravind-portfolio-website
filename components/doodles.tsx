"use client";

import { useEffect, useRef } from "react";

/**
 * Original hand-drawn doodle SVG set — hellomonday-style playfulness,
 * drawn from scratch in the portfolio's navy/gold palette. Wobbly strokes,
 * round caps, and sketchy double-lines for the doodle feel. No copied artwork.
 */

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 22" fill="none" aria-hidden="true">
      <path
        d="M4 14 C 30 4, 55 20, 82 11 S 135 5, 160 13 S 200 18, 216 8"
        stroke="#C9A227"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M10 18 C 40 10, 70 22, 100 14 S 160 10, 210 14"
        stroke="#C9A227"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Starburst({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <path
        d="M60 4 L70 28 L96 20 L88 46 L114 52 L92 66 L108 88 L82 86 L76 112 L60 92 L44 112 L38 86 L12 88 L28 66 L6 52 L32 46 L24 20 L50 28 Z"
        fill="#C9A227"
        stroke="#1B2F4B"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WavyDivider({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 36" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 18 Q 75 4, 150 18 T 300 18 T 450 18 T 600 18 T 750 18 T 900 18 T 1050 18 T 1200 18"
        fill="none"
        stroke="#C9A227"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M0 26 Q 75 14, 150 26 T 300 26 T 450 26 T 600 26 T 750 26 T 900 26 T 1050 26 T 1200 26"
        fill="none"
        stroke="#1B2F4B"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M20 2 C 22 12, 26 16, 38 20 C 26 24, 22 28, 20 38 C 18 28, 14 24, 2 20 C 14 16, 18 12, 20 2 Z"
        fill="#C9A227"
        stroke="#1B2F4B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Pip — an original little DevOps bot mascot. Navy server-body, gold eyes
 * that blink AND follow your cursor, antenna with a blinking light, tiny
 * arms. Bobs gently.
 */
export function BotMascot({ className = "" }: { className?: string }) {
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
      tx = (px / m) * cl * 7;
      ty = (py / m) * cl * 5;
    };
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
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
    <div className={`bot-mascot ${className}`} aria-hidden="true">
      <svg viewBox="0 0 140 160" fill="none">
        {/* antenna */}
        <line x1="70" y1="26" x2="70" y2="10" stroke="#1B2F4B" strokeWidth="5" strokeLinecap="round" />
        <circle className="bot-light" cx="70" cy="8" r="6" fill="#C9A227" stroke="#1B2F4B" strokeWidth="3" />
        {/* arms */}
        <path d="M28 84 Q 14 92, 18 108" stroke="#1B2F4B" strokeWidth="6" strokeLinecap="round" />
        <path className="bot-wave" d="M112 84 Q 126 92, 122 108" stroke="#1B2F4B" strokeWidth="6" strokeLinecap="round" />
        {/* body */}
        <rect x="28" y="26" width="84" height="96" rx="26" fill="#1B2F4B" stroke="#1B2F4B" strokeWidth="4" />
        {/* face screen */}
        <rect x="40" y="40" width="60" height="52" rx="14" fill="#FAFAF7" />
        {/* pupils follow the cursor; blink via CSS scaleY */}
        <g ref={pupilsRef}>
          <g className="bot-eyes">
            <circle cx="58" cy="64" r="6.5" fill="#1B2F4B" />
            <circle cx="82" cy="64" r="6.5" fill="#1B2F4B" />
            <circle cx="60" cy="62" r="2" fill="#FAFAF7" />
            <circle cx="84" cy="62" r="2" fill="#FAFAF7" />
          </g>
        </g>
        {/* smile */}
        <path d="M58 82 Q 70 90, 82 82" stroke="#1B2F4B" strokeWidth="4" strokeLinecap="round" />
        {/* belly lights */}
        <circle cx="58" cy="106" r="4" fill="#C9A227" />
        <circle cx="70" cy="106" r="4" fill="#C9A227" opacity="0.5" />
        <circle cx="82" cy="106" r="4" fill="#C9A227" opacity="0.25" />
        {/* feet */}
        <ellipse cx="52" cy="130" rx="14" ry="9" fill="#1B2F4B" />
        <ellipse cx="88" cy="130" rx="14" ry="9" fill="#1B2F4B" />
      </svg>
    </div>
  );
}

/** Doodle cloud — puffs along behind section titles. */
export function DoodleCloud({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 90" fill="none" aria-hidden="true">
      <path
        d="M30 70 C 10 70, 8 48, 26 44 C 24 28, 44 20, 56 30 C 62 14, 88 12, 96 28 C 114 22, 132 34, 128 50 C 144 54, 140 70, 124 70 Z"
        fill="#fff"
        stroke="#1B2F4B"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="62" cy="52" r="3.5" fill="#1B2F4B" />
      <circle cx="80" cy="52" r="3.5" fill="#1B2F4B" />
      <path d="M64 62 Q 71 67, 78 62" stroke="#1B2F4B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
