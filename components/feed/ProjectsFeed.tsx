"use client";

import Link from "next/link";
import { CASES } from "@/components/sections/ProjectsCaseStudies";
import { DoodleDivider } from "@/components/doodles";

/**
 * Projects page as an Instagram visual feed — each case study is a
 * visual post: architecture diagram as the "photo", caption with the
 * story, bold Impact line, IG action bar. Research: show, don't tell.
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

        {CASES.map((c, i) => (
          <article key={c.title} className="ipost feed-anim">
            <div className="ipost-head">
              <img src="/aravind-photo.jpg" alt="" className="xavatar-sm" loading="lazy" />
              <div>
                <div className="xname">aravind_mutthe</div>
                <div className="xhandle">Case study {c.num}</div>
              </div>
              <span className="xdots" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
                </svg>
              </span>
            </div>
            <div
              className="proj-diagram"
              role="img"
              aria-label={c.diagramCaption}
              dangerouslySetInnerHTML={{ __html: c.diagram }}
            />
            <div className="ipost-actions" aria-hidden="true">
              <span className="iact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21C7 16.5 3 13 3 8.8A4.8 4.8 0 0 1 7.8 4c1.7 0 3.2.9 4.2 2.3A5.2 5.2 0 0 1 16.2 4 4.8 4.8 0 0 1 21 8.8c0 4.2-4 7.7-9 12.2z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="iact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="iact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="iact iact-save">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <p className="ipost-caption">
              <b>aravind_mutthe</b> {c.tagline}
            </p>
            <p className="ipost-caption" style={{ marginTop: 8 }}>
              <b>Impact:</b> {c.impact}
            </p>
            {i < CASES.length - 1 && <DoodleDivider />}
          </article>
        ))}

        <p className="ig-foot">
          <Link href="/contact" className="xcta">Want results like these? Let&apos;s talk →</Link>
        </p>
      </div>
    </div>
  );
}
