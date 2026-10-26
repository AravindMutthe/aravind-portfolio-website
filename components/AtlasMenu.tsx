"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Atlas's own menu, in the Atlas prototype's sidebar style.
 *  This is separate from the portfolio menu, which is hidden on /atlas pages. */
const ITEMS = [
  { href: "/atlas", label: "🏠 Overview" },
  { href: "/atlas/chapter-01-communication-networks", label: "🕰️ 01 · Communication, trade & the first networks" },
  { href: "/atlas/chapter-02-institutions-governance", label: "🌍 02 · Institutions, standards & global supply chains" },
  { href: "/atlas/chapter-03-silicon-nic", label: "🔌 03 · From silicon to a working NIC" },
  { href: "/atlas/chapter-04-interfaces", label: "💻 04 · The evolution of human–computer interfaces" },
  { href: "/atlas/chapter-05-leadership", label: "🏛️ 05 · Technology leadership & business models" },
  { href: "/atlas/chapter-06-scheduling", label: "📅 06 · Scheduling resources and operational systems" },
  { href: "/atlas/chapter-07-government-business-networks", label: "🗂️ 07 · Government, business & technical networks" },
  { href: "/atlas/era-timeline", label: "⏳ Era timeline" },
  { href: "/atlas/evidence-register", label: "📋 Evidence register" },
  { href: "/atlas/engineering-notes", label: "🛠️ Engineering notes" },
  { href: "/atlas/methods-safeguards", label: "🔍 Methods & safeguards" },
  { href: "/atlas/notebook", label: "🗂️ All original scans" },
  { href: "/atlas/study-notes", label: "📓 Study notes, 129 photos" },
  { href: "/atlas/recovered-fragments", label: "🧩 Recovered fragments" },
  { href: "/atlas/source-index", label: "📚 Source index" },
];

export default function AtlasMenu() {
  const pathname = usePathname();
  return (
    <aside className="atlas-aside">
      {ITEMS.map((item) => (
        <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
          {item.label}
        </Link>
      ))}
      <div className="atlas-aside-back">
        <Link href="/">← Back to portfolio</Link>
      </div>
    </aside>
  );
}
