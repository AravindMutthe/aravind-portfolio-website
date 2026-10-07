"use client";

import Link from "next/link";
import { SERVICES } from "@/components/sections/ServicesGrid";
import StreamCard, { CardFooter } from "@/components/stream/StreamCard";
import { DoodleDivider } from "@/components/doodles";

/**
 * Services as an original reading stream — each service a chapter
 * with its discipline, checklist, and a way to start.
 */
export default function ServicesFeed() {
  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div className="code-label">{"// services"}</div>
        <h1 className="pin-head" style={{ marginBottom: 8 }}>
          What I <em>do.</em>
        </h1>
        <p className="pin-lead">
          Four services, each one a discipline I&apos;ve practiced in production.
        </p>

        <DoodleDivider />

        <div className="stream">
          {SERVICES.map((s) => (
            <StreamCard
              key={s.title}
              kicker={`Service ${s.num}`}
              title={s.title}
              footer={<CardFooter href="/contact" cta="Start a project" />}
            >
              <p className="scard-sub">{s.copy}</p>
              <ul className="scard-list" style={{ marginTop: 12 }}>
                {s.checks.map((c) => (
                  <li key={c}>
                    <span className="scard-check" aria-hidden="true">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </StreamCard>
          ))}
        </div>

        <p className="ig-foot">
          <Link href="/contact" className="scard-cta">Start a project →</Link>
        </p>
      </div>
    </div>
  );
}
