"use client";

import Link from "next/link";
import { EXPERIENCE } from "@/components/data";
import { XPost, X_URL } from "@/components/feed/posts";
import { DoodleDivider } from "@/components/doodles";

/**
 * About page as an X profile — the person, told like a timeline.
 * Experience entries become posts in the thread; education and
 * credentials get their own cards. Honest titles only.
 */
export default function AboutFeed() {
  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <div className="xprofile" style={{ maxWidth: 680, margin: "0 auto" }}>
        <div className="xbanner" aria-hidden="true">
          <span className="xb1" />
          <span className="xb2" />
          <span className="xb3" />
        </div>
        <div className="xprofile-main">
          <div className="xavatar-wrap">
            <img src="/aravind-photo.jpg" alt="Aravind Mutte" className="xavatar" />
            <a className="btn btn-gold xfollow" href={X_URL} target="_blank" rel="noopener">
              Follow on X
            </a>
          </div>
          <div className="xname-lg">Aravind Mutte</div>
          <div className="xhandle-lg">@aravind_mutthe</div>
          <p className="xbio">
            Cloud DevOps & SRE Engineer from Hyderabad. ~2 years of real experience,
            a US master&apos;s, and production systems running at $0/month.
            I make infrastructure boring — in the best way.
          </p>
          <div className="xstats">
            <span><b>2</b> yrs experience</span>
            <span><b>3</b> systems live</span>
            <span><b>2</b> cloud certs</span>
          </div>
          <div className="xlinks">
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Work</Link>
            <Link href="/blog">Writing</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="code-label" style={{ maxWidth: 680, margin: "18px auto 2px" }}>
        {"// experience-thread"}
      </div>

      <div className="xfeed" style={{ maxWidth: 680, margin: "0 auto" }}>
        {EXPERIENCE.map((e) => (
          <XPost key={e.title} meta={e.date}>
            <p className="xlead" style={{ fontSize: 19 }}>
              {e.title} <em>@ {e.org}</em>
            </p>
            {e.proj && <p className="xdesc">{e.proj}</p>}
            <ul className="pain-post-list">
              {e.bullets.slice(0, 3).map((b, i) => (
                <li key={i}>
                  <span className="pain-check" aria-hidden="true">→</span>
                  <span dangerouslySetInnerHTML={{ __html: b.html }} />
                </li>
              ))}
            </ul>
          </XPost>
        ))}
      </div>

      <DoodleDivider />

      <div className="xfeed" style={{ maxWidth: 680, margin: "0 auto" }}>
        <XPost meta="Education" actions={false}>
          <p className="xlead" style={{ fontSize: 19 }}>
            MS, Computer Science — <em>Rivier University, NH, USA</em>
          </p>
          <p className="xdesc">
            B.Tech CSE, JNTU Hyderabad · Diploma in CS, Govt Polytechnic Hyderabad ·
            Azure AZ-900 · GCP Professional Cloud Architect.
          </p>
          <p className="xdesc">
            <Link href="/contact" className="xcta">Work with me →</Link>
          </p>
        </XPost>
      </div>
    </div>
  );
}
