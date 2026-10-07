"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * X-style left nav rail for desktop — completes the 3-column app shell.
 * Slim icon rail, sticky; gold Hire button at the bottom.
 */
const ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: <path d="M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    href: "/services",
    label: "Services",
    icon: <path d="M4 7h16v13H4zM9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    href: "/projects",
    label: "Work",
    icon: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: <path d="M4 5h16v12H4zM4 17v4h16v-4M8 9h8M8 12h5" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

export default function NavRail() {
  const path = usePathname();
  return (
    <nav className="navrail" aria-label="App navigation">
      <Link href="/" className="navrail-logo" aria-label="Home">
        AM
      </Link>
      {ITEMS.map((it) => {
        const active = it.href === "/" ? path === "/" : path.startsWith(it.href);
        return (
          <Link key={it.href} href={it.href} className={`navrail-item ${active ? "active" : ""}`} aria-label={it.label}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              {it.icon}
            </svg>
          </Link>
        );
      })}
      <Link href="/contact" className="navrail-hire" aria-label="Hire me">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </Link>
    </nav>
  );
}
