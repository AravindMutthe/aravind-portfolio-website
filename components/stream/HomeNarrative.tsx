"use client";

import Link from "next/link";
import Hero from "@/components/stream/Hero";
import OfferMenu from "@/components/stream/OfferMenu";
import { DoodleDivider } from "@/components/doodles";

/**
 * Homepage — the billionaire narrative. Radical restraint:
 * hero → proof → services → work → writing → one CTA.
 * No feed, no pills, no mascot antics. Confidence is the design.
 */

const PROOF = [
  { n: "2", label: "years of real experience" },
  { n: "3", label: "production systems live" },
  { n: "$0", label: "monthly infra spend" },
];

const WORK = [
  {
    title: "Axon Lead API",
    challenge: "GradeSpot needed reliable enquiry capture with zero backend budget.",
    fix: "TypeScript API on GCP Cloud Run free tier — Zod validation, reCAPTCHA Enterprise, Supabase.",
    numbers: "$0/month infra · live in production",
  },
  {
    title: "GradeSpot Frontend",
    challenge: "A training institute needed a marketing site that actually captures admissions.",
    fix: "Next.js 15 + Tailwind v4 + IBM Carbon, enquiry funnel wired end to end.",
    numbers: "Live site + working funnel · free tier",
  },
  {
    title: "Termux Homelab",
    challenge: "Always-on services with no hardware and no hosting budget.",
    fix: "Android phone as a 24/7 lab — Termux, Tailscale mesh, wake-locked services.",
    numbers: "$0 hardware · $0 hosting",
  },
];

const ESSAYS = [
  {
    title: "System Architecture Planes (Linux Server View)",
    meta: "Linux · 8 min read",
    href: "https://medium.com/@aravind.mutthe/system-architecture-planes-linux-server-view-20ed6f0f2cd1",
  },
  {
    title: "Kernel Mode vs User Mode in OS",
    meta: "Operating Systems · 6 min read",
    href: "https://medium.com/@aravind.mutthe/kernal-mode-vs-user-mode-in-os-ce1f5a0f5921",
  },
  {
    title: "Network Pipes & Sockets — The Complete Command List",
    meta: "Networking · 10 min read",
    href: "https://medium.com/@aravind.mutthe/network-pipes-sockets-92ebb17166cc",
  },
];

export default function HomeNarrative() {
  return (
    <>
      <Hero />

      {/* proof */}
      <section className="proof-strip" aria-label="Proof">
        <div className="wrap proof-inner">
          {PROOF.map((p) => (
            <div key={p.label} className="proof-item">
              <b>{p.n}</b>
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* services */}
      <section className="narr-section" aria-label="Services">
        <div className="wrap">
          <div className="code-label">{"// services"}</div>
          <h2 className="narr-title">
            Pick your <em>engagement.</em>
          </h2>
          <p className="narr-lead">
            Three fixed-scope ways to work together. No hourly billing —
            you always know what you get.
          </p>
          <OfferMenu />
        </div>
      </section>

      <DoodleDivider />

      {/* work — dark band */}
      <section className="narr-section dark-band" aria-label="Selected work">
        <div className="wrap">
          <div className="code-label">{"// selected-work"}</div>
          <h2 className="narr-title">
            Work that <em>ships.</em>
          </h2>
          <div className="work-list">
            {WORK.map((w) => (
              <article key={w.title} className="work-row">
                <h3>{w.title}</h3>
                <dl className="cfn">
                  <div><dt>The challenge</dt><dd>{w.challenge}</dd></div>
                  <div><dt>The fix</dt><dd>{w.fix}</dd></div>
                  <div><dt>The numbers</dt><dd>{w.numbers}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <Link href="/projects" className="scard-cta">All case studies <span aria-hidden="true">›</span></Link>
        </div>
      </section>

      <DoodleDivider />

      {/* writing */}
      <section className="narr-section" aria-label="Writing">
        <div className="wrap">
          <div className="code-label">{"// writing"}</div>
          <h2 className="narr-title">
            Thinking, <em>published.</em>
          </h2>
          <div className="essay-rows">
            {ESSAYS.map((e) => (
              <a key={e.href} href={e.href} target="_blank" rel="noopener" className="essay-row">
                <span className="essay-title">{e.title}</span>
                <span className="essay-meta">{e.meta}</span>
                <span className="essay-arrow" aria-hidden="true">›</span>
              </a>
            ))}
          </div>
          <Link href="/blog" className="scard-cta">All writing <span aria-hidden="true">›</span></Link>
        </div>
      </section>

      {/* final CTA */}
      <section className="final-cta" aria-label="Contact">
        <div className="wrap final-cta-inner">
          <h2>
            Let&apos;s make your infrastructure <em>boring.</em>
          </h2>
          <p>Boring means it works. Every deploy, every night, no pages.</p>
          <Link className="btn btn-gold magnetic" href="/contact">
            Book my discovery call
          </Link>
          <p className="risk">NDA-friendly · fixed scope · no retainer required to start</p>
        </div>
      </section>
    </>
  );
}
