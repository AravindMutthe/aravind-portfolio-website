"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Pip, Squiggle, ArrowDoodle } from "@/components/doodles";

/**
 * Pinned post — the research-backed hero, in X-post clothing.
 * GSAP SplitText masked line reveals, expo.out, magnetic primary CTA,
 * Pip idling beside the headline, doodle arrow pointing at the CTA.
 * No bounce, no elastic, no rotating words.
 */
export default function PinnedPost() {
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
        split = new SplitText(".pin-line", { type: "lines", mask: "lines" });
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(".pin-kicker", { y: 18, opacity: 0, duration: 0.7 })
          .from(split.lines, { yPercent: 110, duration: 1.0, stagger: 0.09 }, "-=0.4")
          .from(".pin-squiggle", { opacity: 0, duration: 0.5 }, "-=0.5")
          .from(".pin-lead", { y: 24, opacity: 0, duration: 0.85 }, "-=0.65")
          .from(".pin-ctas .btn", { y: 20, opacity: 0, duration: 0.75, stagger: 0.1 }, "-=0.6")
          .from(".pin-pip", { opacity: 0, x: 24, duration: 1.0 }, "-=0.85")
          .from(".pin-arrow", { opacity: 0, scale: 0.6, transformOrigin: "top left", duration: 0.65 }, "-=0.6");

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
    <article className="xtweet feed-anim pin-post" ref={ref}>
      <img src="/aravind-photo.jpg" alt="" className="xavatar-sm" loading="lazy" />
      <div className="xbody">
        <div className="xpinned">📌 Pinned</div>
        <div className="xmeta">
          <span className="xname">Aravind Mutte</span>
          <span className="xhandle">@aravind_mutthe</span>
        </div>
        <div className="pin-wrap">
          <div className="pin-kicker">{"// hello-world"}</div>
          <h1 className="pin-head">
            <span className="pin-line">Infrastructure that</span>
            <span className="pin-line"><em>ships fast</em> and <em>never sleeps.</em></span>
          </h1>
          <Squiggle className="pin-squiggle" />
          <p className="pin-lead">
            I&apos;m Aravind — Cloud DevOps & SRE. I build pipelines, tame cloud
            bills, and keep production calm. Scroll the feed, then let&apos;s talk.
          </p>
          <div className="pin-ctas">
            <Link className="btn btn-gold magnetic" href="/contact">
              Start a Project
            </Link>
            <Link className="xcta" href="/services">
              Explore services →
            </Link>
          </div>
          <ArrowDoodle className="pin-arrow" />
          <Pip className="pin-pip" />
        </div>
      </div>
    </article>
  );
}
