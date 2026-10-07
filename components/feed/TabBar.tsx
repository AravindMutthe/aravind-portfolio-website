"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * App-style bottom tab bar for mobile — the "app" half of the
 * fb/insta/x hybrid. Replaces the sticky CTA bar with persistent
 * app navigation; Hire lives in Contact.
 */
const TABS = [
  {
    href: "/",
    label: "Home",
    icon: (
      <path d="M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    href: "/services",
    label: "Services",
    icon: (
      <path d="M4 7h16v13H4zM9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    href: "/projects",
    label: "Work",
    icon: (
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
        strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    href: "/blog",
    label: "Blog",
    icon: (
      <path d="M4 5h16v12H4zM4 17v4h16v-4M8 9h8M8 12h5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    href: "/contact",
    label: "Hire",
    icon: (
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM3 7l9 6 9-6"
        strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function TabBar() {
  const path = usePathname();
  return (
    <nav className="tabbar" aria-label="App navigation">
      {TABS.map((t) => {
        const active = t.href === "/" ? path === "/" : path.startsWith(t.href);
        return (
          <Link key={t.href} href={t.href} className={`tabbar-tab ${active ? "active" : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              {t.icon}
            </svg>
            <span>{t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
