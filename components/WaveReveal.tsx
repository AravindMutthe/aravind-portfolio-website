"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Liquid wave image reveal — adapted from hellomonday.com's signature
 * wavy-mask image reveals. The image fades/slides in on scroll while a
 * double SVG wave drifts continuously along its top edge.
 */
export default function WaveReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`wave-reveal ${className}`}>
      <svg className="wave-top" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="w1"
          d="M0,20 Q150,38 300,20 T600,20 T900,20 T1200,20 L1200,0 L0,0 Z"
        />
        <path
          className="w2"
          d="M0,22 Q150,6 300,22 T600,22 T900,22 T1200,22 L1200,0 L0,0 Z"
        />
      </svg>
      <div className="wave-body">{children}</div>
    </div>
  );
}
