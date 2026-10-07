"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Ticker from "@/components/Ticker";

/* Branch-only: pixi canvas is code-split and client-only so the main
 * bundle stays untouched by the ~1MB WebGL lib. */
const PixiHero = dynamic(() => import("@/components/PixiHero"), { ssr: false });

const STATS = [
  { to: 2, prefix: "", label: "Years professional experience" },
  { to: 3, prefix: "", label: "Production systems live" },
  { to: 0, prefix: "$", label: "Monthly infra spend" },
  { to: 2, prefix: "", label: "Cloud certifications" },
];

/** Homepage hero: status pill, headline, CTAs, tech ticker, animated stats.
 *  lab/pixi-gsap branch: GSAP (free) entrance timeline + PixiJS particle
 *  canvas — the open-source half of hellomonday.com's stack. */
export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  /* GSAP entrance: stagger the hero lines on mount. Skipped for
   * prefers-reduced-motion so content is simply visible. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { gsap } = await import("gsap");
      if (!heroRef.current) return;
      ctx = gsap.context(() => {
        gsap.from(".gs-in", {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          clearProps: "all",
        });
      }, heroRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <div className="hero-stage">
      <header className="home-hero" ref={heroRef}>
        <PixiHero />
        <div className="wrap hero-copy">
          {/* Branch: GSAP owns the entrance — no Reveal wrappers here to avoid double animation */}
          <div className="status gs-in">
            <span className="dot"></span> Available for immediate joining — freelance &amp; full-time
          </div>
          <h1 className="gs-in">
            Infrastructure that <span className="grad">ships fast</span> and{" "}
            <span className="grad">never sleeps.</span>
          </h1>
          <p className="lead gs-in">
            I&apos;m <strong>Aravind Mutte</strong>, a Cloud DevOps &amp; Site Reliability Engineer
            with about <strong>2 years</strong> of professional experience across enterprise
            environments in India — plus production systems I&apos;ve designed, built, and run
            myself on <strong>AWS, Azure, and GCP</strong>.
          </p>
          <div className="hero-ctas gs-in">
            <Link href="/contact" className="btn btn-gold">
              Start a Project
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Explore Services
            </Link>
          </div>
        </div>

        <Reveal delay="d3">
          <Ticker />
        </Reveal>

        <div className="wrap">
          <Reveal>
            <div className="hero-meta">
              {STATS.map((s) => (
                <div key={s.label} className="hm">
                  <div className="v">
                    {s.prefix}
                    <CountUp to={s.to} />
                  </div>
                  <div className="k">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>
    </div>
  );
}
