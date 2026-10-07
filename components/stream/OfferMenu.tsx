"use client";

import Link from "next/link";

/**
 * Productized offer menu — three fixed-scope engagements.
 * Bento logic: the recommended option is the biggest, brightest card.
 */
export const OFFERS = [
  {
    name: "Infra Audit Sprint",
    scope: "2-week fixed scope",
    desc: "A focused review of your cloud setup — cost leaks, security gaps, CI/CD bottlenecks. A prioritized report with fixes you can act on immediately.",
    points: ["Cost-leak hunt with savings estimate", "Security gap review", "CI/CD bottleneck analysis", "Prioritized fix-it report"],
    cta: "Get my audit",
    featured: false,
  },
  {
    name: "Pipeline Buildout",
    scope: "4-week fixed scope",
    desc: "End-to-end CI/CD and infrastructure as code. Ship with confidence from day one — the full pipeline, handed over documented.",
    points: ["Terraform infrastructure as code", "GitHub Actions CI/CD", "Staging + production environments", "Runbook + handover session"],
    cta: "Get my pipeline",
    featured: true,
  },
  {
    name: "Fractional SRE",
    scope: "Monthly retainer",
    desc: "Ongoing reliability partnership — monitoring, incident response, continuous improvement. A senior SRE without the hire.",
    points: ["Proactive monitoring setup", "Incident response", "Monthly reliability review", "Slack access during business hours"],
    cta: "Get my retainer",
    featured: false,
  },
];

export default function OfferMenu() {
  return (
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
            {o.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}
