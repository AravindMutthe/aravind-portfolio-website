"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  decimals?: number;
}

/** Animated counter — replicates the static site's .count behavior. */
export default function CountUp({ to, decimals = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const fmt = (v: number) => (decimals ? v.toFixed(decimals) : Math.round(v).toString());
    const animate = () => {
      const dur = 1600;
      let t0: number | null = null;
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = fmt(to * eased);
        if (p < 1) raf = requestAnimationFrame(step);
        else el.textContent = fmt(to);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            animate();
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, decimals]);

  return (
    <span ref={ref} className="count">
      0
    </span>
  );
}
