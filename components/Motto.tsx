"use client";

import { useEffect, useRef } from "react";
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
      {/* cartoon face */}
      <circle cx="32" cy="30" r="3.2" fill="#1B2F4B" />
      <circle cx="48" cy="30" r="3.2" fill="#1B2F4B" />
      <circle cx="33.2" cy="28.8" r="1.1" fill="#fff" />
      <circle cx="49.2" cy="28.8" r="1.1" fill="#fff" />
      <path d="M31 52 Q 40 60, 49 52" stroke="#1B2F4B" strokeWidth="3.5"
        strokeLinecap="round" fill="none" />
      {/* currency symbol as a forehead stamp */}
      <text x="40" y="20" textAnchor="middle" fontSize="13" fontWeight="800"
        fill="#8a6d1c" fontFamily="var(--font-motto)">{symbol}</text>
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
            <CoinDoodle className="motto-coin" symbol={c.symbol} />
            <span className="motto-coin-label"><b>{c.code}</b> · {c.line}</span>
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
