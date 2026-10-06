"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** "l" | "r" | "scale" — maps to reveal-l / reveal-r / reveal-scale */
  variant?: "" | "l" | "r" | "scale";
  /** "d1" | "d2" | "d3" stagger delay */
  delay?: "" | "d1" | "d2" | "d3";
  className?: string;
}

/** Scroll-reveal wrapper — replicates the static site's .reveal + IntersectionObserver. */
export default function Reveal({ children, variant = "", delay = "", className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fallback: if IntersectionObserver doesn't fire (iOS quirks), reveal after 1.2s.
    const fallback = setTimeout(() => {
      el.classList.add("in");
    }, 1200);
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            clearTimeout(fallback);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  const cls = `reveal${variant ? `-${variant}` : ""}${delay ? ` ${delay}` : ""}${className ? ` ${className}` : ""}`;
  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
