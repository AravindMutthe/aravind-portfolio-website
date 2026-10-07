"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import CountUp from "@/components/CountUp";
import { Pip, Squiggle, ArrowDoodle } from "@/components/doodles";

/**
 * Masthead — the site's own identity block. Not a platform profile:
 * an editorial masthead with a marketplace availability signal.
 * Big serif name, honest stats, one clear action.
 */
export default function Masthead() {
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
        split = new SplitText(".mh-line", { type: "lines", mask: "lines" });
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(".mh-status", { y: 16, opacity: 0, duration: 0.7 })
          .from(split.lines, { yPercent: 110, duration: 1.0, stagger: 0.09 }, "-=0.4")
          .from(".mh-squiggle", { opacity: 0, duration: 0.5 }, "-=0.5")
          .from(".mh-bio", { y: 24, opacity: 0, duration: 0.85 }, "-=0.65")
          .from(".mh-stats .stat", { y: 18, opacity: 0, duration: 0.7, stagger: 0.08 }, "-=0.6")
          .from(".mh-actions .btn", { y: 20, opacity: 0, duration: 0.75, stagger: 0.1 }, "-=0.6")
          .from(".mh-pip", { opacity: 0, x: 24, duration: 1.0 }, "-=0.85")
          .from(".mh-arrow", { opacity: 0, scale: 0.6, transformOrigin: "top left", duration: 0.65 }, "-=0.6");

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
    <header className="masthead" ref={ref}>
      <div className="mh-status">
        <span className="mh-dot" aria-hidden="true" />
        Available for new projects
      </div>
      <h1 className="mh-name">
        <span className="mh-line">Aravind Mutte</span>
        <span className="mh-line mh-line-italic">builds infrastructure that <em>never sleeps.</em></span>
      </h1>
      <Squiggle className="mh-squiggle" />
      <p className="mh-bio">
        Cloud DevOps & SRE Engineer from Hyderabad. I design pipelines, tame cloud
        bills, and keep production calm — for teams who&apos;d rather ship features
        than fight servers.
      </p>
      <div className="mh-stats">
        <div className="stat">
          <b><CountUp to={2} /></b>
          <span>yrs experience</span>
        </div>
        <div className="stat">
          <b><CountUp to={3} /></b>
          <span>systems live</span>
        </div>
        <div className="stat">
          <b>$<CountUp to={0} /></b>
          <span>infra spend</span>
        </div>
        <div className="stat">
          <b><CountUp to={18} /></b>
          <span>tools mastered</span>
        </div>
      </div>
      <div className="mh-actions">
        <Link className="btn btn-gold magnetic" href="/contact">
          Start a Project
        </Link>
        <Link className="scard-cta mh-explore" href="/services">
          Explore services →
        </Link>
      </div>
      <ArrowDoodle className="mh-arrow" />
      <Pip className="mh-pip" />
    </header>
  );
}
