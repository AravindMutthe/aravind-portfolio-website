"use client";

import Link from "next/link";

/**
 * Chapters — glanceable doorway to every part of the site.
 * The stories pattern, rebuilt in the site's own voice:
 * navy medallions, gold rings, serif initials.
 */
const CHAPTERS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Chapters() {
  return (
    <nav className="chapters" aria-label="Site chapters">
      {CHAPTERS.map((c) => (
        <Link key={c.label} href={c.href} className="chapter">
          <span className="chapter-ring" aria-hidden="true">
            <span className="chapter-inner">{c.label.slice(0, 1)}</span>
          </span>
          <span className="chapter-label">{c.label}</span>
        </Link>
      ))}
    </nav>
  );
}

/**
 * Conversation starter — the composer pattern, honest.
 * One tap opens a real conversation with the site's assistant.
 */
export function ConversationStarter() {
  const open = () => window.dispatchEvent(new Event("open-chatbot"));
  return (
    <div className="conv-card">
      <img src="/aravind-photo.jpg" alt="" className="conv-avatar" loading="lazy" />
      <div className="conv-text">
        <b>Something on your mind?</b>
        <span>Ask about services, pricing, timelines — I answer instantly.</span>
      </div>
      <button className="btn btn-gold conv-btn" onClick={open}>
        Ask away
      </button>
    </div>
  );
}
