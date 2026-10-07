"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Route splash transition — adapted from hellomonday.com's signature
 * per-project color splash. On every client-side navigation a navy wipe
 * with a gold wave edge sweeps up, revealing the new page. Pure CSS,
 * 700ms, skipped for prefers-reduced-motion.
 */
export default function RouteSplash() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  const first = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShow(true);
    timer.current = setTimeout(() => setShow(false), 750);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [path]);

  if (!show) return null;
  return (
    <div className="route-splash" aria-hidden="true">
      <div className="rs-wipe">
        <svg className="rs-wave" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path
            d="M0,20 Q150,38 300,20 T600,20 T900,20 T1200,20 L1200,40 L0,40 Z"
            fill="#C9A227"
          />
        </svg>
        <span className="rs-word">aravind.dev</span>
      </div>
    </div>
  );
}
