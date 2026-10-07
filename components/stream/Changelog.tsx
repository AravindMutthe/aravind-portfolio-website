"use client";

import StreamCard from "@/components/stream/StreamCard";

/**
 * Signature device: the public changelog.
 * A DevOps consultant's site should behave like software —
 * versioned, dated, honest about what changed.
 */
const ENTRIES = [
  {
    v: "v4.2",
    date: "2026-10-07",
    text: "Living hero — the PixiJS pipeline renders in real time behind the headline. Magazine rhythm below.",
  },
  {
    v: "v4.0",
    date: "2026-10-07",
    text: "Original stream language — one editorial card system, no platform chrome. Research-backed throughout.",
  },
  {
    v: "v3.0",
    date: "2026-10-07",
    text: "Social-feed experiments — X/IG/FB/Medium hybrids. Retired: looked like everyone else.",
  },
  {
    v: "v2.0",
    date: "2026-10-07",
    text: "Blog rebuilt as an X-style feed. 13 notes, 4 articles, honest metadata.",
  },
  {
    v: "v1.0",
    date: "2026-10-06",
    text: "Business site ships — navy/gold, FormSubmit leads, Cal.com booking, keyword chatbot.",
  },
];

export default function Changelog() {
  return (
    <StreamCard kicker="Changelog" title="This site is software.">
      <ol className="changelog">
        {ENTRIES.map((e) => (
          <li key={e.v}>
            <span className="chg-v">{e.v}</span>
            <span className="chg-date">{e.date}</span>
            <span className="chg-text">{e.text}</span>
          </li>
        ))}
      </ol>
      <p className="scard-sub" style={{ marginTop: 12 }}>
        Deploys on every commit via GitHub Actions → Vercel. Your infrastructure
        gets the same treatment.
      </p>
    </StreamCard>
  );
}
