"use client";

import Link from "next/link";
import { EXPERIENCE } from "@/components/data";
import StreamCard, { CardFooter } from "@/components/stream/StreamCard";
import { DoodleDivider } from "@/components/doodles";

/**
 * About as an original profile — masthead identity, experience
 * as a chronological stream, education as a closing chapter.
 */
export default function AboutFeed() {
  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div className="masthead" style={{ marginBottom: 22 }}>
          <div className="mh-status">
            <span className="mh-dot" aria-hidden="true" />
            Open to opportunities
          </div>
          <h1 className="mh-name" style={{ fontSize: "clamp(34px,5vw,50px)" }}>
            Aravind Mutte
          </h1>
          <p className="mh-bio">
            Cloud DevOps & SRE Engineer from Hyderabad. ~2 years of real experience,
            a US master&apos;s, and production systems running at $0/month.
            I make infrastructure boring — in the best way.
          </p>
          <div className="mh-stats">
            <div className="stat"><b>2</b><span>yrs experience</span></div>
            <div className="stat"><b>3</b><span>systems live</span></div>
            <div className="stat"><b>2</b><span>cloud certs</span></div>
          </div>
          <div className="mh-actions">
            <Link className="btn btn-gold" href="/contact">Work with me</Link>
            <a className="scard-cta" href="https://x.com/aravind_mutthe" target="_blank" rel="noopener">
              Follow on X →
            </a>
          </div>
        </div>

        <div className="code-label">{"// experience"}</div>

        <div className="stream">
          {EXPERIENCE.map((e) => (
            <StreamCard
              key={e.title}
              kicker={e.date}
              title={<>{e.title} <em style={{ color: "#8a6d1c" }}>@ {e.org}</em></>}
              footer={e.proj ? <CardFooter meta={e.proj} /> : undefined}
            >
              <ul className="scard-list">
                {e.bullets.slice(0, 3).map((b, i) => (
                  <li key={i}>
                    <span className="scard-check" aria-hidden="true">→</span>
                    <span dangerouslySetInnerHTML={{ __html: b.html }} />
                  </li>
                ))}
              </ul>
            </StreamCard>
          ))}

          <DoodleDivider />

          <StreamCard
            kicker="Education"
            title="MS, Computer Science"
            footer={<CardFooter href="/contact" cta="Work with me" />}
          >
            <p className="scard-sub">
              Rivier University, NH, USA · B.Tech CSE, JNTU Hyderabad ·
              Diploma in CS, Govt Polytechnic Hyderabad.
            </p>
            <p className="scard-sub" style={{ marginTop: 8 }}>
              Azure AZ-900 · GCP Professional Cloud Architect.
            </p>
          </StreamCard>
        </div>
      </div>
    </div>
  );
}
