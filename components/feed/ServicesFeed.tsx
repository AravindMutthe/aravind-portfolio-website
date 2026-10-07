"use client";

import Link from "next/link";
import { SERVICES } from "@/components/sections/ServicesGrid";
import { MediumPost } from "@/components/feed/posts";
import { DoodleDivider } from "@/components/doodles";

/**
 * Services page as a Medium reading list — each service is a
 * long-form article card: serif headline, standfirst, checklist
 * as the article body, read-more into the enquiry form.
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
          Read the story, then start a project.
        </p>

        <DoodleDivider />

        <div className="xfeed">
          {SERVICES.map((s) => (
            <div key={s.title}>
              <MediumPost
                href="/contact"
                tag={`Service ${s.num}`}
                title={s.title}
                desc={s.copy}
                readTime="3 min"
              />
              <ul className="pain-post-list" style={{ marginTop: -4 }}>
                {s.checks.map((c) => (
                  <li key={c}>
                    <span className="pain-check" aria-hidden="true">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="ig-foot">
          <Link href="/contact" className="xcta">Start a project →</Link>
        </p>
      </div>
    </div>
  );
}
