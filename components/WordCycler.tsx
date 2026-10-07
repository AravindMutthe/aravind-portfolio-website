"use client";

import { useEffect, useState } from "react";

/**
 * Rotating hero word — adapted from hellomonday.com's headline word cycler.
 * Cross-fades through outcome words; pure CSS, works everywhere, and
 * freezes on the first word for prefers-reduced-motion.
 */
const WORDS = ["ships fast", "scales smart", "stays secure", "never sleeps"];

export default function WordCycler() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="word-cycler" aria-live="polite">
      {WORDS.map((w, idx) => (
        <span key={w} className={`wc-word${idx === i ? " on" : ""}`} aria-hidden={idx !== i}>
          {w}
        </span>
      ))}
      {/* SEO / no-JS: first word always in the DOM statically */}
      <span className="wc-static">{WORDS[0]}</span>
    </span>
  );
}
