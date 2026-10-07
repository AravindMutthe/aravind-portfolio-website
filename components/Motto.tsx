"use client";

import { useEffect, useRef, useId } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Squiggle, Sparkle } from "@/components/doodles";

gsap.registerPlugin(ScrollTrigger);

/**
 * Aravind's motto — "bro, duty is pain but money is medicine".
 * Bricolage Grotesque display type, staggered word pop-in,
 * hand-drawn squiggle underline, coin + sparkle doodles.
 */

function CoinDoodle({ className = "", symbol = "₹" }: { className?: string; symbol?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="30" stroke="#1B2F4B" strokeWidth="5" fill="#FFFDF5" />
      <circle cx="40" cy="40" r="22" stroke="#C9A227" strokeWidth="3" strokeDasharray="6 5" />
      {/* cartoon eyes */}
      <circle cx="31" cy="26" r="3" fill="#1B2F4B" />
      <circle cx="49" cy="26" r="3" fill="#1B2F4B" />
      <circle cx="32.1" cy="24.9" r="1" fill="#fff" />
      <circle cx="50.1" cy="24.9" r="1" fill="#fff" />
      {/* BIG currency symbol — the hero of the coin */}
      <text x="40" y="58" textAnchor="middle" fontSize={symbol.length > 1 ? "24" : "32"} fontWeight="800"
        fill="#1B2F4B" fontFamily="var(--font-motto)">{symbol}</text>
      {/* shine */}
      <ellipse className="coin-shine" cx="28" cy="22" rx="14" ry="8"
        fill="#fff" opacity="0.55" transform="rotate(-24 28 22)" />
      {/* motion ticks */}
      <path d="M8 22 l6 -6 M72 22 l-6 -6" stroke="#C9A227" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

const COINS = [
  { symbol: "₹", code: "INR", line: "home turf" },
  { symbol: "$", code: "USD", line: "the dream" },
  { symbol: "A$", code: "AUD", line: "down under" },
  { symbol: "€", code: "EUR", line: "old continent" },
];

/** Hand-drawn circular flag badge for each currency. */
function FlagBadge({ code }: { code: string }) {
  const uid = useId().replace(/:/g, "");
  const clip = `flagclip-${code}-${uid}`;
  return (
    <svg viewBox="0 0 32 32" className="flag-badge" aria-hidden="true">
      <defs>
        <clipPath id={clip}><circle cx="16" cy="16" r="14" /></clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        {code === "INR" && (<>
          <rect x="0" y="0" width="32" height="11" fill="#FF9933" />
          <rect x="0" y="11" width="32" height="10" fill="#ffffff" />
          <rect x="0" y="21" width="32" height="11" fill="#138808" />
          <circle cx="16" cy="16" r="3.4" fill="none" stroke="#000080" strokeWidth="1.4" />
          <circle cx="16" cy="16" r="0.9" fill="#000080" />
        </>)}
        {code === "USD" && (<>
          <rect width="32" height="32" fill="#ffffff" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="0" y={i * 8} width="32" height="4" fill="#B22234" />
          ))}
          <rect x="0" y="0" width="15" height="17" fill="#3C3B6E" />
          <circle cx="4.5" cy="4.5" r="1.1" fill="#fff" /><circle cx="10" cy="8.5" r="1.1" fill="#fff" />
          <circle cx="4.5" cy="12.5" r="1.1" fill="#fff" /><circle cx="10" cy="4.5" r="1.1" fill="#fff" />
        </>)}
        {code === "AUD" && (<>
          <rect width="32" height="32" fill="#00247D" />
          <path d="M0 0 L15 11 M15 0 L0 11" stroke="#ffffff" strokeWidth="3.4" />
          <path d="M0 0 L15 11 M15 0 L0 11" stroke="#CF142B" strokeWidth="1.4" />
          <path d="M7.5 0 V11 M0 5.5 H15" stroke="#ffffff" strokeWidth="2" />
          <circle cx="24" cy="8" r="1.5" fill="#fff" /><circle cx="27.5" cy="17" r="1.5" fill="#fff" />
          <circle cx="22" cy="23" r="1.5" fill="#fff" /><circle cx="26" cy="27" r="1.1" fill="#fff" />
        </>)}
        {code === "EUR" && (<>
          <rect width="32" height="32" fill="#003399" />
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
            return <circle key={i} cx={16 + 8 * Math.cos(a)} cy={16 + 8 * Math.sin(a)} r="1.4" fill="#FFCC00" />;
          })}
        </>)}
      </g>
      <circle cx="16" cy="16" r="14" fill="none" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="15.2" fill="none" stroke="#1B2F4B" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

const WORDS: { t: string; cls?: string }[] = [
  { t: "bro," },
  { t: "duty" },
  { t: "is" },
  { t: "pain", cls: "w-pain" },
  { t: "but" },
  { t: "money", cls: "w-money" },
  { t: "is" },
  { t: "medicine.", cls: "w-med" },
];

export default function Motto({ compact = false }: { compact?: boolean }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".motto-word",
        { y: 34, opacity: 0, rotate: -4 },
        {
          y: 0, opacity: 1, rotate: 0,
          duration: 0.5, ease: "back.out(1.6)", stagger: 0.07,
          scrollTrigger: { trigger: root.current, start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".motto-squig path",
        { strokeDashoffset: 230, strokeDasharray: 230 },
        {
          strokeDashoffset: 0, duration: 0.7, ease: "power2.out", delay: 0.5,
          scrollTrigger: { trigger: root.current, start: "top 82%" },
        }
      );
      gsap.to(".motto-coin", {
        y: -10, rotate: 8, duration: 1.6, ease: "sine.inOut",
        yoyo: true, repeat: -1, stagger: 0.25,
      });
      // coin toss entrance: 3D flip-in, staggered
      gsap.fromTo(
        ".motto-coin-wrap",
        { rotateY: 90, opacity: 0, y: 26 },
        {
          rotateY: 0, opacity: 1, y: 0,
          duration: 0.7, ease: "back.out(1.4)", stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: "top 82%" },
        }
      );
      // shine sweep across each coin, looping
      gsap.to(".coin-shine", {
        opacity: 0.1, duration: 0.9, ease: "sine.inOut",
        yoyo: true, repeat: -1, stagger: 0.5,
      });
      gsap.to(".motto-spark", {
        scale: 1.25, opacity: 0.6, duration: 1.1, ease: "sine.inOut",
        yoyo: true, repeat: -1, stagger: 0.4,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={`motto${compact ? " motto-compact" : ""}`} aria-label="Bro, duty is pain but money is medicine">
      <div className="motto-coins" role="img" aria-label="Currencies: Indian Rupee, US Dollar, Australian Dollar, Euro">
        {COINS.map((c) => (
          <span key={c.code} className="motto-coin-wrap">
            <span className="motto-coin-flag">
              <CoinDoodle className="motto-coin" symbol={c.symbol} />
              <FlagBadge code={c.code} />
            </span>
            <span className="motto-coin-label"><b>{c.code}</b><span className="motto-coin-sub"> · {c.line}</span></span>
          </span>
        ))}
      </div>
      <p className="motto-line">
        {WORDS.map((w, i) => (
          <span key={i} className={`motto-word${w.cls ? " " + w.cls : ""}`}>{w.t}</span>
        ))}
      </p>
      <Squiggle className="motto-squig" />
      <Sparkle className="motto-spark motto-spark-a" />
      <Sparkle className="motto-spark motto-spark-b" />
    </div>
  );
}
