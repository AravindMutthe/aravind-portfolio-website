"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

/**
 * Bio band — the portfolio's handshake. First-time visitors meet the person
 * before the services: photo, name, background, credentials.
 * (Photo placeholder until Aravind supplies his picture.)
 */
export default function BioBand() {
  return (
    <section className="bio-band" aria-label="About Aravind Mutte">
      <div className="wrap bio-inner">
        <Reveal>
          <div className="bio-photo" aria-hidden="true">
            <span>AM</span>
          </div>
        </Reveal>
        <Reveal delay="d1">
          <div className="bio-copy">
            <div className="code-label">{"// hello"}</div>
            <h2>
              I&apos;m <em>Aravind Mutte.</em>
            </h2>
            <p className="bio-role">
              Cloud DevOps &amp; SRE Engineer · Hyderabad, India
            </p>
            <p className="bio-text">
              I build the pipelines, cloud infrastructure, and monitoring that let
              small teams ship like big ones — reliably, observably, and without
              the 2&nbsp;a.m. pages. Master&apos;s in Computer Science from Rivier
              University (USA), certified on Azure and Google Cloud, and running
              production systems on a $0 infrastructure budget.
            </p>
            <div className="bio-facts">
              <span><b>~2 yrs</b> real experience</span>
              <span><b>MS</b> Computer Science, USA</span>
              <span><b>2×</b> cloud certified</span>
            </div>
            <Link href="/about" className="scard-cta">
              Full background <span aria-hidden="true">›</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
