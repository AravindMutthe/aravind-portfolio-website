"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { NOTE_POSTS } from "@/components/blog-posts";

const FEATURED = [
  {
    title: "System Architecture Planes (Linux Server View)",
    desc: "Control, data, management, and security planes — how a Linux server actually holds together.",
    href: "https://medium.com/@aravind.mutthe/system-architecture-planes-linux-server-view-20ed6f0f2cd1",
    tag: "Linux",
  },
  {
    title: "Kernel Mode vs User Mode in OS",
    desc: "Why your app crashing doesn't take down the whole system — privilege separation explained.",
    href: "https://medium.com/@aravind.mutthe/kernal-mode-vs-user-mode-in-os-ce1f5a0f5921",
    tag: "Operating Systems",
  },
  {
    title: "Network Pipes & Sockets — The Complete Command List",
    desc: "Master TCP/UDP pipes, VPN tunnels, and GRE with the iproute2 suite and diagnostic tools.",
    href: "https://medium.com/@aravind.mutthe/network-pipes-sockets-92ebb17166cc",
    tag: "Networking",
  },
  {
    title: "Internal Pipes / IPC — Anonymous, Named, and Sockets",
    desc: "How processes talk on the same machine: pipes, FIFOs, and Unix domain sockets.",
    href: "https://medium.com/@aravind.mutthe/internal-pipes-or-ipc-31df0cd8f216",
    tag: "Linux",
  },
];

const X_HANDLE = "aravind_mutthe";
const X_URL = `https://x.com/${X_HANDLE}`;

/** X-style action icons — decorative, no fabricated counts. */
function XActions() {
  const icon = "xact";
  return (
    <div className="xactions" aria-hidden="true">
      <span className="xact-wrap">
        <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="xact-wrap">
        <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M17 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" />
          <path d="M7 22l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" />
        </svg>
      </span>
      <span className="xact-wrap">
        <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21C7 16.5 3 13 3 8.8A4.8 4.8 0 0 1 7.8 4c1.7 0 3.2.9 4.2 2.3A5.2 5.2 0 0 1 16.2 4 4.8 4.8 0 0 1 21 8.8c0 4.2-4 7.7-9 12.2z" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="xact-wrap">
        <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="xact-wrap xact-right">
        <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z" strokeLinejoin="round" />
        </svg>
        <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 15V3M7 8l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 12v8h14v-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

function Tweet({
  href,
  external,
  title,
  desc,
  meta,
  tag,
  cta,
}: {
  href: string;
  external?: boolean;
  title: string;
  desc: string;
  meta: string;
  tag: string;
  cta: string;
}) {
  const inner = (
    <>
      <img src="/aravind-photo.jpg" alt="" className="xavatar-sm" loading="lazy" />
      <div className="xbody">
        <div className="xmeta">
          <span className="xname">Aravind Mutte</span>
          <span className="xhandle">@{X_HANDLE} · {meta}</span>
          <span className="xdots" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </span>
        </div>
        <div className="xtitle">{title}</div>
        <p className="xdesc">{desc}</p>
        <div className="xrow">
          <span className="xtag">{tag}</span>
          <span className="xcta">{cta} →</span>
        </div>
        <XActions />
      </div>
    </>
  );
  return external ? (
    <a className="xtweet" href={href} target="_blank" rel="noopener">
      {inner}
    </a>
  ) : (
    <Link className="xtweet" href={href}>
      {inner}
    </Link>
  );
}

/**
 * Blog as an X-style feed — the format the user asked for.
 * Profile header (real @aravind_mutthe link) + tabbed feed of notes
 * and Medium articles, each rendered like a post with honest metadata.
 */
export default function BlogFeed() {
  const [tab, setTab] = useState<"notes" | "articles">("notes");
  return (
    <div className="xfeed-wrap">
      <Reveal>
        <div className="xprofile">
          <div className="xprofile-banner" aria-hidden="true">
            <span className="xb1" />
            <span className="xb2" />
            <span className="xb3" />
          </div>
          <div className="xprofile-main">
            <img src="/aravind-photo.jpg" alt="Aravind Mutte" className="xavatar" />
            <a className="btn btn-gold xfollow" href={X_URL} target="_blank" rel="noopener">
              Follow on X
            </a>
            <div className="xname-lg">Aravind Mutte</div>
            <div className="xhandle-lg">@{X_HANDLE}</div>
            <p className="xbio">
              Cloud DevOps & SRE — I write about Linux internals, pipelines, and cloud
              infrastructure. The things I learn running real systems.
            </p>
            <div className="xstats">
              <span><b>{NOTE_POSTS.length}</b> Notes</span>
              <span><b>{FEATURED.length}</b> Articles</span>
              <span>
                <b>Elsewhere:</b>{" "}
                <a href="https://medium.com/@aravind.mutthe" target="_blank" rel="noopener">Medium</a>
                {" · "}
                {" · "}
                <a href="https://www.reddit.com/user/aravindmutte/" target="_blank" rel="noopener">Reddit</a>
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="xtabs" role="tablist" aria-label="Blog feed">
        {(["notes", "articles"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`xtab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t === "notes" ? "Notes" : "Articles"}
          </button>
        ))}
      </div>

      <div className="xfeed">
        {tab === "notes"
          ? NOTE_POSTS.map((p) => (
              <Tweet
                key={p.slug}
                href={`/blog/${p.slug}`}
                title={p.title}
                desc={p.desc}
                meta={`${p.category} · ${p.readTime} read`}
                tag={p.category}
                cta="Read note"
              />
            ))
          : FEATURED.map((a) => (
              <Tweet
                key={a.href}
                href={a.href}
                external
                title={a.title}
                desc={a.desc}
                meta={`Medium · ${a.tag}`}
                tag={a.tag}
                cta="Read on Medium"
              />
            ))}
      </div>
    </div>
  );
}
