"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Masthead from "@/components/stream/Masthead";
import Hero from "@/components/stream/Hero";
import { Chapters, ConversationStarter } from "@/components/stream/Chapters";
import StreamCard, { CardFooter } from "@/components/stream/StreamCard";
import TerminalCard from "@/components/sections/TerminalCard";
import GenArt from "@/components/GenArt";
import { DoodleDivider } from "@/components/doodles";

type Cat = "all" | "insights" | "visuals" | "essays" | "services" | "work";

const FILTERS: { id: Cat; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "insights", label: "Insights" },
  { id: "visuals", label: "Visuals" },
  { id: "essays", label: "Essays" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
];

const INSIGHTS = [
  "Your pipeline should be boring. Boring means it works exactly the same way every single time.",
  "The cheapest incident is the one your monitoring catches at 2pm — not the one your customer catches at 2am.",
  "If only one person knows how deployments work, you don't have a pipeline. You have a person.",
  "Infrastructure as code isn't about code. It's about making 3am changes reviewable.",
  "Nobody ever got paged because a dashboard was beautiful. They got paged because nobody watched the right metric.",
];

const PAINS = [
  "Deploys take all day and everyone holds their breath.",
  "Nobody knows what happens when something breaks at 2am.",
  "The cloud bill keeps growing and nobody can explain why.",
  "Your team ships features but dreads touching infrastructure.",
];

const VISUALS = [
  {
    scene: "pipeline" as const,
    label: "Generative art: CI/CD pipeline stages lighting up in sequence",
    caption: "Every deploy I ship looks like this — code in, confidence out.",
  },
  {
    scene: "network" as const,
    label: "Generative art: a constellation of glowing gold nodes on navy",
    caption: "Your infrastructure is a constellation — every service a star.",
  },
  {
    scene: "orbit" as const,
    label: "Generative art: an orbital system around a glowing gold core",
    caption: "Monitoring, logging, alerting — everything orbits uptime.",
  },
  {
    scene: "terrain" as const,
    label: "Generative art: layered waves of navy and gold",
    caption: "Traffic comes in waves. Good infrastructure surfs them.",
  },
];

const ESSAYS = [
  {
    tag: "Linux",
    title: "System Architecture Planes (Linux Server View)",
    desc: "Control, data, management, and security planes — how a Linux server actually holds together.",
    href: "https://medium.com/@aravind.mutthe/system-architecture-planes-linux-server-view-20ed6f0f2cd1",
    readTime: "8 min read",
  },
  {
    tag: "Operating Systems",
    title: "Kernel Mode vs User Mode in OS",
    desc: "Why your app crashing doesn't take down the whole system — privilege separation explained.",
    href: "https://medium.com/@aravind.mutthe/kernal-mode-vs-user-mode-in-os-ce1f5a0f5921",
    readTime: "6 min read",
  },
  {
    tag: "Networking",
    title: "Network Pipes & Sockets — The Complete Command List",
    desc: "Master TCP/UDP pipes, VPN tunnels, and GRE with the iproute2 suite and diagnostic tools.",
    href: "https://medium.com/@aravind.mutthe/network-pipes-sockets-92ebb17166cc",
    readTime: "10 min read",
  },
  {
    tag: "Linux",
    title: "Internal Pipes / IPC — Anonymous, Named, and Sockets",
    desc: "How processes talk on the same machine: pipes, FIFOs, and Unix domain sockets.",
    href: "https://medium.com/@aravind.mutthe/internal-pipes-or-ipc-31df0cd8f216",
    readTime: "7 min read",
  },
];

const SERVICES = [
  {
    title: "Infra Audit Sprint",
    desc: "A focused review of your cloud setup — cost leaks, security gaps, CI/CD bottlenecks. A prioritized report with fixes you can act on immediately.",
  },
  {
    title: "Pipeline Buildout",
    desc: "End-to-end CI/CD and infrastructure as code — Terraform, GitHub Actions, container orchestration. Ship with confidence from day one.",
  },
  {
    title: "Fractional SRE",
    desc: "Ongoing reliability partnership — on-call support, incident response, continuous improvement. A senior SRE without the hire.",
  },
];

const WORK = [
  {
    title: "Axon Lead API",
    desc: "Production lead-capture API on GCP Cloud Run — Zod validation, reCAPTCHA, Supabase storage.",
    impact: "Serving real enquiries at $0/month infra spend.",
  },
  {
    title: "GradeSpot Frontend",
    desc: "Next.js 15 marketing site with a working admissions enquiry funnel.",
    impact: "Live site + funnel shipped on the free tier.",
  },
  {
    title: "Termux Homelab",
    desc: "An Android phone turned into a 24/7 self-hosted lab over Tailscale.",
    impact: "Always-on services at $0 hardware and hosting cost.",
  },
];

/**
 * Homepage as an original stream — the browsing ease of the best feeds,
 * the trust of the best marketing, the clarity of the best marketplaces,
 * in a visual language that belongs to no platform but this site.
 */
export default function StreamHome() {
  const [cat, setCat] = useState<Cat>("all");
  const show = (c: Cat) => cat === "all" || cat === c;
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { gsap } = await import("gsap");
      if (!rootRef.current) return;
      ctx = gsap.context(() => {
        gsap.from(".stream-anim", {
          y: 28,
          opacity: 0,
          duration: 0.85,
          ease: "expo.out",
          stagger: 0.06,
          clearProps: "all",
          overwrite: "auto",
        });
      }, rootRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <>
      <Hero />
      <div className="wrap" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="stream-app" ref={rootRef}>
          <div className="stream-col">
            <div className="stream-anim">
              <Chapters />
            </div>
            <div className="stream-anim">
              <ConversationStarter />
            </div>

        <div className="code-label">{"// the-stream"}</div>
        <div className="filter-pills" role="tablist" aria-label="Stream filter">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={cat === f.id}
              className={`pill ${cat === f.id ? "active" : ""}`}
              onClick={() => setCat(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="stream">
          {show("insights") &&
            INSIGHTS.map((t, i) => (
              <figure key={i} className="pull-quote stream-anim">
                <blockquote>“{t}”</blockquote>
              </figure>
            ))}

          {show("insights") && (
            <div className="dark-panel stream-anim">
              <span className="sc-kicker">Sound familiar?</span>
              <h3 className="dark-panel-title">
                Infrastructure problems <em>I&apos;ve solved before.</em>
              </h3>
              <ul className="scard-list dark-list">
                {PAINS.map((p) => (
                  <li key={p}>
                    <span className="scard-check" aria-hidden="true">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <CardFooter href="/contact" cta="Let's talk about fixing them" />
            </div>
          )}

          {show("insights") && <DoodleDivider />}

          {show("insights") && (
            <StreamCard kicker="Process" title="What working together looks like.">
              <TerminalCard compact />
            </StreamCard>
          )}

          {show("visuals") &&
            VISUALS.map((v) => (
              <StreamCard
                key={v.scene}
                kicker="Visual"
                title={v.caption}
                media={<GenArt scene={v.scene} label={v.label} />}
                footer={<CardFooter meta="Generative art · PixiJS · rendered live" />}
              >
                <p className="scard-sub">Original artwork from this site&apos;s own engine — no stock, no templates.</p>
              </StreamCard>
            ))}

          {show("essays") &&
            ESSAYS.map((a) => (
              <StreamCard
                key={a.href}
                kicker={`Essay · ${a.tag}`}
                title={
                  <a href={a.href} target="_blank" rel="noopener" className="scard-link">
                    {a.title}
                  </a>
                }
                footer={<CardFooter meta={a.readTime} href={a.href} cta="Read on Medium" />}
              >
                <p className="scard-sub">{a.desc}</p>
              </StreamCard>
            ))}

          {show("services") &&
            SERVICES.map((s) => (
              <StreamCard
                key={s.title}
                kicker="Service"
                title={s.title}
                footer={<CardFooter href="/services" cta="How it works" />}
              >
                <p className="scard-sub">{s.desc}</p>
              </StreamCard>
            ))}

          {show("work") &&
            WORK.map((w) => (
              <StreamCard
                key={w.title}
                kicker="Case study"
                title={w.title}
                footer={<CardFooter href="/projects" cta="Read the case study" />}
              >
                <p className="scard-sub">{w.desc}</p>
                <p className="scard-impact">
                  <b>Impact:</b> {w.impact}
                </p>
              </StreamCard>
            ))}

          {show("insights") && (
            <StreamCard
              kicker="Note"
              title="Worked with me?"
              footer={<CardFooter href="/contact" cta="Tell me about it" />}
            >
              <p className="scard-sub">
                I&apos;m collecting recommendations from colleagues, mentors, and clients.
              </p>
            </StreamCard>
          )}

          <StreamCard
            kicker="Booking"
            title={<>Let&apos;s make your infrastructure <em>boring.</em></>}
            footer={
              <Link className="btn btn-gold" href="/contact" style={{ fontSize: 14, padding: "10px 22px" }}>
                Book a free intro call
              </Link>
            }
          >
            <p className="scard-sub">
              Free 30-minute intro call — we&apos;ll talk about your systems, not sales decks.
            </p>
          </StreamCard>
        </div>
      </div>

      <aside className="stream-side" aria-label="Highlights">
        <div className="side-card">
          <h4>📌 Start here</h4>
          <p>New to my work? The 2-minute version: pipelines, cloud cost control, calm production.</p>
          <Link href="/about" className="scard-cta">About me →</Link>
        </div>
        <div className="side-card">
          <h4>🛠️ Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link href="/services">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="side-card">
          <h4>✉️ Elsewhere</h4>
          <ul>
            <li><a href="https://x.com/aravind_mutthe" target="_blank" rel="noopener">X — @aravind_mutthe</a></li>
            <li><a href="https://medium.com/@aravind.mutthe" target="_blank" rel="noopener">Medium</a></li>
            <li><a href="https://aravindmutthe.substack.com" target="_blank" rel="noopener">Substack</a></li>
            <li><a href="https://www.reddit.com/user/aravindmutte/" target="_blank" rel="noopener">Reddit</a></li>
          </ul>
        </div>
      </aside>
        </div>
      </div>
    </>
  );
}
