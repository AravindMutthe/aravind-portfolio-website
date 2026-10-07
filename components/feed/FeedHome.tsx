"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TerminalCard from "@/components/sections/TerminalCard";
import { XPost, InstaPost, FBCard, X_URL } from "@/components/feed/posts";

type Cat = "all" | "insights" | "visuals" | "services" | "work";

const TABS: { id: Cat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "insights", label: "Insights" },
  { id: "visuals", label: "Visuals" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
];

const INSIGHTS: { meta: string; text: string }[] = [
  {
    meta: "Insight",
    text: "Your pipeline should be boring. Boring means it works exactly the same way every single time.",
  },
  {
    meta: "Insight",
    text: "The cheapest incident is the one your monitoring catches at 2pm — not the one your customer catches at 2am.",
  },
  {
    meta: "Insight",
    text: "If only one person knows how deployments work, you don't have a pipeline. You have a person.",
  },
  {
    meta: "Insight",
    text: "Infrastructure as code isn't about code. It's about making 3am changes reviewable.",
  },
  {
    meta: "Insight",
    text: "Nobody ever got paged because a dashboard was beautiful. They got paged because nobody watched the right metric.",
  },
];

const VISUALS = [
  {
    scene: "pipeline" as const,
    label: "Generative art: CI/CD pipeline stages lighting up in sequence",
    caption: "Every deploy I ship looks like this — code in, confidence out. CI/CD pipeline, visualized.",
    meta: "DevOps art",
  },
  {
    scene: "network" as const,
    label: "Generative art: a constellation of glowing gold nodes on navy",
    caption: "Your infrastructure is a constellation — every service a star, every dependency a line of light.",
    meta: "Cloud art",
  },
  {
    scene: "orbit" as const,
    label: "Generative art: an orbital system around a glowing gold core",
    caption: "Monitoring, logging, alerting — everything orbits the one thing that matters: uptime.",
    meta: "SRE art",
  },
  {
    scene: "terrain" as const,
    label: "Generative art: layered waves of navy and gold",
    caption: "Traffic comes in waves. Good infrastructure surfs them instead of drowning.",
    meta: "Systems art",
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
    impact: "Impact: serving real enquiries at $0/month infra spend.",
  },
  {
    title: "GradeSpot Frontend",
    desc: "Next.js 15 marketing site with a working admissions enquiry funnel.",
    impact: "Impact: live site + funnel shipped on the free tier.",
  },
  {
    title: "Termux Homelab",
    desc: "An Android phone turned into a 24/7 self-hosted lab over Tailscale.",
    impact: "Impact: always-on services at $0 hardware and hosting cost.",
  },
];

function ProfileHeader() {
  return (
    <div className="feed-profile">
      <div className="fp-banner" aria-hidden="true">
        <span className="xb1" />
        <span className="xb2" />
        <span className="xb3" />
      </div>
      <div className="fp-main">
        <img src="/aravind-photo.jpg" alt="Aravind Mutte" className="fp-avatar" />
        <div className="fp-actions">
          <a className="btn btn-ghost fp-btn" href={X_URL} target="_blank" rel="noopener">
            Follow on X
          </a>
          <Link className="btn btn-gold fp-btn" href="/contact">
            Hire Me
          </Link>
        </div>
        <div className="xname-lg">Aravind Mutte</div>
        <div className="xhandle-lg">@aravind_mutthe</div>
        <p className="xbio">
          Cloud DevOps & SRE Engineer · I keep infrastructure boring — in the best way.
          Pipelines, cloud cost control, and systems that never sleep.
        </p>
        <div className="xstats">
          <span><b>2</b> yrs experience</span>
          <span><b>3</b> systems live</span>
          <span><b>$0</b> infra spend</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Homepage as a social feed — hybrid of X posts, Instagram visuals,
 * and Facebook link cards, in an app-style shell. All content is the
 * real portfolio content, presented natively.
 */
export default function FeedHome() {
  const [tab, setTab] = useState<Cat>("all");
  const show = (c: Cat) => tab === "all" || tab === c;

  return (
    <div className="feed-layout">
      <div className="feed-col">
        <Reveal>
          <ProfileHeader />
        </Reveal>

        <div className="xtabs feed-tabs" role="tablist" aria-label="Feed filter">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`xtab ${tab === t.id ? "active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="xfeed">
          {show("insights") && (
            <XPost meta="Pinned" pinned>
              <p className="xlead">
                Infrastructure that <em>ships fast</em> and <em>never sleeps.</em>
              </p>
              <p className="xdesc">
                I&apos;m Aravind — Cloud DevOps & SRE. I build pipelines, tame cloud
                bills, and keep production calm. Scroll the feed, then let&apos;s talk.
              </p>
              <div className="xrow">
                <Link className="btn btn-gold" href="/contact" style={{ fontSize: 14, padding: "10px 22px" }}>
                  Start a Project
                </Link>
                <Link className="xcta" href="/services">
                  Explore services →
                </Link>
              </div>
            </XPost>
          )}

          {show("insights") &&
            INSIGHTS.map((p, i) => (
              <XPost key={i} meta={p.meta}>
                <p className="xtext">{p.text}</p>
              </XPost>
            ))}

          {show("visuals") &&
            VISUALS.map((v) => (
              <InstaPost key={v.scene} scene={v.scene} label={v.label} caption={v.caption} meta={v.meta} />
            ))}

          {show("insights") && (
            <XPost meta="Process">
              <TerminalCard compact />
            </XPost>
          )}

          {show("services") &&
            SERVICES.map((s) => (
              <FBCard
                key={s.title}
                href="/services"
                kicker="Service"
                title={s.title}
                desc={s.desc}
                cta="View service"
              />
            ))}

          {show("work") &&
            WORK.map((w) => (
              <FBCard
                key={w.title}
                href="/projects"
                kicker="Case study"
                title={w.title}
                desc={`${w.desc} ${w.impact}`}
                cta="Read case study"
              />
            ))}

          {show("insights") && (
            <XPost meta="Note" actions={false}>
              <p className="xtext">
                Worked with me? I&apos;m collecting recommendations —{" "}
                <Link href="/contact" className="xcta">
                  tell me about it →
                </Link>
              </p>
            </XPost>
          )}

          <XPost meta="Booking" actions={false}>
            <p className="xlead">Let&apos;s make your infrastructure boring.</p>
            <p className="xdesc">
              Free 30-minute intro call — we&apos;ll talk about your systems, not sales decks.
            </p>
            <div className="xrow">
              <Link className="btn btn-gold" href="/contact" style={{ fontSize: 14, padding: "10px 22px" }}>
                Book a free intro call
              </Link>
            </div>
          </XPost>
        </div>
      </div>

      <aside className="feed-side" aria-label="Highlights">
        <div className="side-card">
          <h4>📌 Start here</h4>
          <p>New to my work? The 2-minute version: pipelines, cloud cost control, calm production.</p>
          <Link href="/about" className="xcta">
            About me →
          </Link>
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
            <li><a href={X_URL} target="_blank" rel="noopener">X — @aravind_mutthe</a></li>
            <li><a href="https://medium.com/@aravind.mutthe" target="_blank" rel="noopener">Medium</a></li>
            <li><a href="https://aravindmutthe.substack.com" target="_blank" rel="noopener">Substack</a></li>
            <li><a href="https://www.reddit.com/user/aravindmutte/" target="_blank" rel="noopener">Reddit</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
