"use client";

import Link from "next/link";
import { DoodleDivider } from "@/components/doodles";

/**
 * Services as a productized menu — three fixed-scope offers.
 * Research: the visitor chooses *how*, not *if*. Bento logic:
 * the recommended option is the biggest, brightest card.
 */
const OFFERS = [
  {
    name: "Infra Audit Sprint",
    scope: "2-week fixed scope",
    desc: "A focused review of your cloud setup — cost leaks, security gaps, CI/CD bottlenecks. You get a prioritized report with fixes you can act on immediately.",
    points: ["Cost-leak hunt with savings estimate", "Security gap review", "CI/CD bottleneck analysis", "Prioritized fix-it report"],
    featured: false,
  },
  {
    name: "Pipeline Buildout",
    scope: "4-week fixed scope",
    desc: "End-to-end CI/CD and infrastructure as code. Ship with confidence from day one — the full pipeline, handed over documented.",
    points: ["Terraform infrastructure as code", "GitHub Actions CI/CD", "Staging + production environments", "Runbook + handover session"],
    featured: true,
  },
  {
    name: "Fractional SRE",
    scope: "Monthly retainer",
    desc: "Ongoing reliability partnership — monitoring, incident response, continuous improvement. A senior SRE without the hire.",
    points: ["Proactive monitoring setup", "Incident response", "Monthly reliability review", "Slack access during business hours"],
    featured: false,
  },
];

export default function ServicesFeed() {
  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div className="code-label">{"// services"}</div>
        <h1 className="pin-head" style={{ marginBottom: 8 }}>
          Pick your <em>engagement.</em>
        </h1>
        <p className="pin-lead">
          Three fixed-scope ways to work together. No hourly billing, no open-ended
          retainers to start — you always know what you get.
        </p>

        <DoodleDivider />

        <div className="offer-menu">
          {OFFERS.map((o) => (
            <article key={o.name} className={`offer-card ${o.featured ? "featured" : ""}`}>
              {o.featured && <span className="offer-badge">Most chosen</span>}
              <div className="offer-scope">{o.scope}</div>
              <h3>{o.name}</h3>
              <p>{o.desc}</p>
              <ul>
                {o.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link className={`btn ${o.featured ? "btn-gold" : "btn-ghost"}`} href="/contact">
                Get my {o.name.toLowerCase().includes("sre") ? "retainer" : "audit"}
              </Link>
            </article>
          ))}
        </div>

        <p className="ig-foot">
          Need something custom? <Link href="/contact" className="scard-cta">Tell me about it →</Link>
        </p>
      </div>
    </div>
  );
}
