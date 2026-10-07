"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Ticker from "@/components/Ticker";
import { Pip, Squiggle, ArrowDoodle } from "@/components/doodles";

const STATS = [
  { to: 2, prefix: "", label: "Years professional experience" },
  { to: 3, prefix: "", label: "Production systems live" },
  { to: 0, prefix: "$", label: "Monthly infra spend" },
  { to: 2, prefix: "", label: "Cloud certifications" },
];

/**
 * Homepage hero — premium choreographed entrance.
 * Research-backed: GSAP SplitText masked line reveals, expo.out easing,
 * 0.75–1.1s durations, trigger-free load choreography. Pip (editorial
 * line-art mascot) idles beside the headline; annotation arrow points
 * to the primary CTA. No bounce, no elastic, no rotating words.
 */
export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | null = null;
    let split: { revert: () => void; lines: Element[] } | null = null;
    let magneticCleanup: (() => void) | null = null;
    (async () => {
      const { gsap } = await import("gsap");
      const { SplitText } = await import("gsap/SplitText");
      gsap.registerPlugin(SplitText);
      if (!heroRef.current) return;
      ctx = gsap.context(() => {
        // masked line reveal for the headline
        split = new SplitText(".hero-line", { type: "lines", mask: "lines" });        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(".hero-kicker", { y: 24, opacity: 0, duration: 0.8 })
          .from(
            split.lines,
            { yPercent: 110, duration: 1.05, stagger: 0.09 },
            "-=0.45"
          )
          .from(".hero-squiggle", { opacity: 0, duration: 0.5 }, "-=0.5")
          .from(".hero-lead", { y: 28, opacity: 0, duration: 0.9 }, "-=0.7")
          .from(
            ".hero-ctas .btn",
            { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 },
            "-=0.65"
          )
          .from(
            ".hero-pip",
            { opacity: 0, x: 30, duration: 1.1 },
            "-=0.9"
          )
          .from(
            ".hero-arrow",
            { opacity: 0, scale: 0.6, transformOrigin: "top left", duration: 0.7 },
            "-=0.6"
          );

        // magnetic primary CTA — ≤14px pull, expo snapback (research-capped)
        const btn = heroRef.current?.querySelector(".magnetic") as HTMLElement | null;
        if (btn && window.matchMedia("(pointer: fine)").matches) {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
          const onMove = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            const d = Math.hypot(dx, dy);
            if (d < 90) {
              xTo((dx / d) * Math.min(14, d * 0.18));
              yTo((dy / d) * Math.min(14, d * 0.18));
            } else {
              xTo(0);
              yTo(0);
            }
          };
          const onLeave = () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "expo.out" });
          };
          btn.addEventListener("mousemove", onMove);
          btn.addEventListener("mouseleave", onLeave);
          magneticCleanup = () => {
            btn.removeEventListener("mousemove", onMove);
            btn.removeEventListener("mouseleave", onLeave);
          };
        }
      }, heroRef);
    })();
    return () => {
      magneticCleanup?.();
      split?.revert();
      ctx?.revert();
    };
  }, []);

  return (
    <div className="hero-stage">
      <header className="home-hero" ref={heroRef}>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="status hero-kicker">
              <span className="dot"></span> Available for immediate joining — freelance &amp; full-time
            </div>
            <h1 className="hero-line">
              Infrastructure that <span className="grad">ships fast</span> and{" "}
              <span className="grad">never sleeps.</span>
            </h1>
            <Squiggle className="hero-squiggle" />
            <p className="lead hero-lead">
              I&apos;m <strong>Aravind Mutte</strong>, a Cloud DevOps &amp; Site Reliability Engineer
              with about <strong>2 years</strong> of professional experience across enterprise
              environments in India — plus production systems I&apos;ve designed, built, and run
              myself on <strong>AWS, Azure, and GCP</strong>.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-gold magnetic">
                Start a Project
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hero-pip" aria-hidden="true">
            <Pip />
            <ArrowDoodle className="hero-arrow" />
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
