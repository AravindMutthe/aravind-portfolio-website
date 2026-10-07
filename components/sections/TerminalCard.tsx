"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

/**
 * TerminalCard — animated deploy transcript. Adapted from the
 * terminal-install CTA pattern (supabase/posthog): developers trust
 * terminals. Types itself on scroll into view; static when reduced motion.
 * Every line is honest — it describes the engagement process, not a fake log.
 */
const LINES: { text: string; cls?: string }[] = [
  { text: "$ aravind ship --env production", cls: "p" },
  { text: "✓ scope locked · fixed price agreed", cls: "ok" },
  { text: "✓ terraform plan — 0 surprises", cls: "ok" },
  { text: "✓ pipeline green on first run", cls: "ok" },
  { text: "✓ monitoring + alerts wired up", cls: "ok" },
  { text: "→ handover docs + walkthrough call", cls: "" },
];

export default function TerminalCard({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(LINES.length);
      return;
    }
    let timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.disconnect();
            LINES.forEach((_, i) => {
              timers.push(setTimeout(() => setN(i + 1), 420 * (i + 1)));
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const card = (
    <div ref={ref} className="terminal-card" role="img" aria-label="Terminal showing the engagement process: scope, plan, green pipeline, monitoring, handover">
      <div className="term-bar">
        <span className="term-dot" style={{ background: "#E06C5B" }} />
        <span className="term-dot" style={{ background: "#C9A227" }} />
        <span className="term-dot" style={{ background: "#7FB069" }} />
        <span className="term-title">aravind — engagement.sh</span>
      </div>
      <div className="term-body">
        {LINES.slice(0, n).map((l, i) => (
          <div key={i} className={l.cls}>
            {l.text}
          </div>
        ))}
        {n < LINES.length && <span className="term-cursor" />}
      </div>
    </div>
  );

  if (compact) return card;

  return (
    <section className="block" aria-label="How an engagement runs">
      <div className="wrap">
        <Reveal>
          <div className="sub-label">The process</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">
            What working together <span className="grad">looks like.</span>
          </h2>
        </Reveal>
        <Reveal delay="d1">{card}</Reveal>
      </div>
    </section>
  );
}
