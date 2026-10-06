"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxPosterProps {
  children: ReactNode;
  className?: string;
}

/** Subtle scroll parallax for poster blocks — mirrors the static site. */
export default function ParallaxPoster({ children, className = "" }: ParallaxPosterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const parallax = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const off = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5
      el.style.transform = `translateY(${(off * -46).toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    parallax();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className={className} data-parallax>
      {children}
    </div>
  );
}
