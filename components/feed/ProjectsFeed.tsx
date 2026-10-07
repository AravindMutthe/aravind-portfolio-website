"use client";

import Link from "next/link";
import { CASES } from "@/components/sections/ProjectsCaseStudies";
import StreamCard, { CardFooter } from "@/components/stream/StreamCard";
import { DoodleDivider } from "@/components/doodles";

/**
 * Projects as an original visual stream — case studies with
 * architecture diagrams, trade-offs, and honest impact.
 */
export default function ProjectsFeed() {
  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div className="code-label">{"// selected-work"}</div>
        <h1 className="pin-head" style={{ marginBottom: 8 }}>
          Work that <em>ships.</em>
        </h1>
        <p className="pin-lead">
          Case studies with architecture, trade-offs, and honest impact —
          no vanity metrics.
        </p>

        <DoodleDivider />

        <div className="stream">
          {CASES.map((c) => (
            <StreamCard
              key={c.title}
              kicker={`Case study ${c.num}`}
              title={c.title}
              media={
                <div
                  className="proj-diagram"
                  role="img"
                  aria-label={c.diagramCaption}
                  dangerouslySetInnerHTML={{ __html: c.diagram }}
                />
              }
              footer={<CardFooter meta={c.tagline} />}
            >
              <p className="scard-sub">{c.problem}</p>
              <p className="scard-impact">
                <b>Impact:</b> {c.impact}
              </p>
            </StreamCard>
          ))}
        </div>

        <p className="ig-foot">
          <Link href="/contact" className="scard-cta">Want results like these? Let&apos;s talk →</Link>
        </p>
      </div>
    </div>
  );
}
