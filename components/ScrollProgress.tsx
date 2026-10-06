"use client";

import { useEffect, useRef } from "react";

/** Thin orange scroll-progress bar fixed to the top of the viewport. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onProg = () => {
      const el = ref.current;
      if (!el) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      el.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onProg, { passive: true });
    onProg();
    return () => window.removeEventListener("scroll", onProg);
  }, []);

  return <div id="progress" ref={ref} />;
}
