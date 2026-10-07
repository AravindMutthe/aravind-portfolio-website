"use client";

import Link from "next/link";

/**
 * Instagram-style stories row — the missing IG signature.
 * Each story links to a real page; gold rings match the brand.
 */
const STORIES = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Stories() {
  return (
    <div className="stories" aria-label="Highlights">
      {STORIES.map((s) => (
        <Link key={s.label} href={s.href} className="story">
          <span className="story-ring" aria-hidden="true">
            <span className="story-inner">{s.label.slice(0, 1)}</span>
          </span>
          <span className="story-label">{s.label}</span>
        </Link>
      ))}
    </div>
  );
}

/**
 * Facebook-style composer — "Ask Aravind anything" opens the real
 * AI chatbot. A composer that actually does something.
 */
export function Composer() {
  const open = () => window.dispatchEvent(new Event("open-chatbot"));
  return (
    <div className="composer">
      <img src="/aravind-photo.jpg" alt="" className="xavatar-sm" loading="lazy" />
      <button className="composer-input" onClick={open}>
        Ask Aravind anything…
      </button>
    </div>
  );
}
