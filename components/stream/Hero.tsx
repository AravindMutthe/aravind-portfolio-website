"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import GenArt from "@/components/GenArt";
import CountUp from "@/components/CountUp";

/**
 * Full-viewport living hero — PixiJS pipeline art, alive behind
 * a SplitText headline. Research directives: [Outcome] without [Pain],
 * specific availability, ONE first-person CTA, live status as proof
 * the site is a demo of the craft it sells.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | null = null;
    let split: { revert: () => void; lines: Element[] } | null = null;
    let magneticCleanup: (() => void) | null = null;
    (async () => {
      const { gsap } = await import("gsap");
      const { SplitText } = await import("gsap/SplitText");
      gsap.registerPlugin(SplitText);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        split = new SplitText(".hero-line", { type: "lines", mask: "lines" });
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(".hero-art", { opacity: 0, scale: 1.06, duration: 1.6, ease: "expo.out" }, 0)
          .from(".hero-status", { y: 18, opacity: 0, duration: 0.7 }, 0.35)
          .from(split.lines, { yPercent: 115, duration: 1.1, stagger: 0.1 }, 0.45)
          .from(".hero-sub", { y: 26, opacity: 0, duration: 0.9 }, 1.0)
          .from(".hero-ctas .btn", { y: 22, opacity: 0, duration: 0.8, stagger: 0.1 }, 1.15)
          .from(".hero-stats .stat", { y: 18, opacity: 0, duration: 0.7, stagger: 0.08 }, 1.3);

        const btn = ref.current?.querySelector(".magnetic") as HTMLElement | null;
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
          const onLeave = () => { xTo(0); yTo(0); };
          btn.addEventListener("mousemove", onMove);
          btn.addEventListener("mouseleave", onLeave);
          magneticCleanup = () => {
            btn.removeEventListener("mousemove", onMove);
            btn.removeEventListener("mouseleave", onLeave);
          };
        }
      }, ref);
    })();
    return () => {
      magneticCleanup?.();
      split?.revert();
      ctx?.revert();
    };
  }, []);

  return (
    <section className="hero-vp" ref={ref} aria-label="Introduction">
      <div className="hero-art" aria-hidden="true">
        <GenArt scene="pipeline" label="Living generative art: CI/CD pipeline stages" />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-content">
        <div className="hero-status">
          <span className="mh-dot" aria-hidden="true" />
          Now booking — new projects
        </div>
        <h1 className="hero-title">
          <span className="hero-line">Ship daily</span>
          <span className="hero-line hero-line-italic">without the <em>2 a.m. pages.</em></span>
        </h1>
        <p className="hero-sub">
          I&apos;m Aravind Mutte — Cloud DevOps & SRE. I build the pipelines,
          cloud setups, and monitoring that let small teams ship like big ones.
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-gold magnetic" href="/contact">
            Book my discovery call
          </Link>
        </div>
        <p className="hero-proof">
          <span className="hero-live-dot" aria-hidden="true" /> All systems operational
          <span className="hero-sep">·</span> this site deploys on every commit
          <span className="hero-sep">·</span> NDA-friendly, fixed scope
        </p>
        <div className="hero-stats">
          <div className="stat"><b><CountUp to={2} /></b><span>yrs experience</span></div>
          <div className="stat"><b><CountUp to={3} /></b><span>systems live</span></div>
          <div className="stat"><b>$<CountUp to={0} /></b><span>infra spend</span></div>
          <div className="stat"><b><CountUp to={18} /></b><span>tools mastered</span></div>
        </div>
      </div>
    </section>
  );
}
