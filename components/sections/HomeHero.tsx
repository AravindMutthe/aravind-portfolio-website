"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Ticker from "@/components/Ticker";
import WordCycler from "@/components/WordCycler";
import { BotMascot, Squiggle, Sparkle } from "@/components/doodles";

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

  /* GSAP entrance: bouncy stagger on mount, hellomonday-style.
   *  Skipped for prefers-reduced-motion so content is simply visible. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { gsap } = await import("gsap");
      if (!heroRef.current) return;
      ctx = gsap.context(() => {
        gsap.from(".gs-in", {
          y: 60,
          opacity: 0,
          scale: 0.92,
          duration: 1,
          ease: "back.out(1.5)",
          stagger: 0.13,
          clearProps: "all",
        });
        /* mascot pops in with an elastic overshoot */
        gsap.from(".gs-mascot", {
          scale: 0,
          rotation: -18,
          duration: 1.1,
          ease: "elastic.out(1, 0.45)",
          delay: 0.55,
          clearProps: "transform",
        });
      }, heroRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <div className="hero-stage">
      <header className="home-hero" ref={heroRef}>
        <PixiHero />
        <BotMascot className="gs-mascot hero-bot" />
        <Sparkle className="doodle-sparkle s1" />
        <Sparkle className="doodle-sparkle s2" />
        <div className="wrap hero-copy">
          {/* Branch: GSAP owns the entrance — no Reveal wrappers here to avoid double animation */}
          <div className="status gs-in">
            <span className="dot"></span> Available for immediate joining — freelance &amp; full-time
          </div>
          <h1 className="gs-in">
            Infrastructure that <span className="grad"><WordCycler /></span>
            <Squiggle className="hero-squiggle" />
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
          <div className="scroll-cue gs-in" aria-hidden="true">
            <span className="cue-dot"></span>
            <span>scroll</span>
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
