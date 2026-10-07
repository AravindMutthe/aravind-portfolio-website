"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

/** Named engagement packages — research shows named fixed-scope offers
 *  convert better than hourly menus. Pricing anchors are honest ranges,
 *  not fabricated client claims. */
const PACKAGES = [
  {
    name: "Infra Audit Sprint",
    tag: "2 weeks",
    desc: "A focused review of your cloud setup — cost leaks, security gaps, CI/CD bottlenecks. You get a prioritized report with fixes you can act on immediately.",
    points: ["Cost & security audit", "CI/CD pipeline review", "Prioritized action plan"],
    cta: "Book an audit",
  },
  {
    name: "Pipeline Buildout",
    tag: "4–6 weeks",
    desc: "End-to-end CI/CD and infrastructure as code — Terraform, GitHub Actions, container orchestration. Ship with confidence from day one.",
    points: ["Terraform IaC from scratch", "Automated CI/CD pipelines", "Monitoring & alerting wired up"],
    cta: "Start a buildout",
    featured: true,
  },
  {
    name: "Fractional SRE",
    tag: "Monthly",
    desc: "Ongoing reliability partnership — on-call support, incident response, continuous improvement. Like having a senior SRE on your team without the hire.",
    points: ["SLA-backed support", "Proactive monitoring", "Monthly reliability reviews"],
    cta: "Discuss retainer",
  },
];

export default function EngagementModels() {
  return (
    <section className="block">
      <div className="wrap">
        <Reveal>
          <div className="sub-label">Engagement models</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">
            Pick the way <span className="grad">we work.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="sec-sub">
            Fixed-scope packages with clear outcomes — no hourly billing surprises.
            Every engagement starts with a free intro call.
          </p>
        </Reveal>
        <div className="pkg-grid">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i === 1 ? "d1" : i === 2 ? "d2" : ""}>
              <div className={`pkg-card${p.featured ? " pkg-featured" : ""}`}>
                {p.featured && <span className="pkg-badge">Most popular</span>}
                <span className="pkg-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>✓ {pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn${p.featured ? "" : " btn-ghost"}`}>
                  {p.cta} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
