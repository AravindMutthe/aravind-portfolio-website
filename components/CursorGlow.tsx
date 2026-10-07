"use client";

import { useEffect, useRef } from "react";

/**
 * Trailing gold ring cursor — adapted from hellomonday.com's lagging blob
 * cursor. Follows the pointer with a soft lag (GSAP quickTo), grows over
 * interactive elements. Desktop pointers only; never hides the native
 * cursor so forms stay fully usable.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let xTo: ((x: number) => void) | null = null;
    let yTo: ((y: number) => void) | null = null;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled || !ref.current) return;
      gsap.set(el, { xPercent: -50, yPercent: -50, scale: 0 });
      xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
      yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
      gsap.to(el, { scale: 1, duration: 0.4, ease: "power2.out", delay: 0.2 });
    })();

    const move = (e: PointerEvent) => {
      xTo?.(e.clientX);
      yTo?.(e.clientY);
      const t = (e.target as HTMLElement).closest("a,button,.pill,.radio-card");
      el.dataset.hot = t ? "1" : "";
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelled = true;
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
