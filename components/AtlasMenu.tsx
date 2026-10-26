"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Atlas's own menu, grouped so the 20+ pages stay scannable.
 *  Separate from the portfolio menu, which is hidden on /atlas pages. */
const GROUPS: { label: string; items: { href: string; label: string }[] }[] = [
  { label: "Curriculum", items: [
    { href: "/atlas/chapter-01-communication-networks", label: "🕰️ 01 · Communication, trade & first networks" },
    { href: "/atlas/chapter-02-institutions-governance", label: "🌍 02 · Institutions, standards & supply chains" },
    { href: "/atlas/chapter-03-silicon-nic", label: "🔌 03 · From silicon to a working NIC" },
    { href: "/atlas/chapter-04-interfaces", label: "💻 04 · Evolution of human–computer interfaces" },
    { href: "/atlas/chapter-05-leadership", label: "🏛️ 05 · Technology leadership & business models" },
    { href: "/atlas/chapter-06-scheduling", label: "📅 06 · Scheduling resources & operations" },
    { href: "/atlas/chapter-07-government-business-networks", label: "🗂️ 07 · Government, business & technical networks" },
  ]},
  { label: "Deep dives · new", items: [
    { href: "/atlas/kernel-analogies", label: "⛏️ Kernel analogies"},
    { href: "/atlas/semiconductors", label: "⚡ Semiconductors · Ch 08–11" },
    { href: "/atlas/kubernetes-networks", label: "☸️ Kubernetes networking · B011" },
    { href: "/atlas/memory-systems", label: "💾 Memory systems · B015" },
    { href: "/atlas/linux-datapaths", label: "🐧 Linux datapaths · B012" },
  ]},
  { label: "Originals", items: [
    { href: "/atlas/notebook", label: "🗂️ All original scans · 20 pages" },
    { href: "/atlas/study-notes", label: "📓 Study notes · 129 photos" },
    { href: "/atlas/recovered-fragments", label: "🧩 Recovered fragments" },
  ]},
  { label: "Reference", items: [
    { href: "/atlas/concepts", label: "🧭 Concepts across the Atlas" },
    { href: "/atlas/gaps", label: "🚧 What the Atlas does not contain" },
    { href: "/atlas/study-notes-categorized", label: "🗂️ Study notes, categorized" },
    { href: "/atlas/era-timeline", label: "⏳ Era timeline" },
    { href: "/atlas/evidence-register", label: "📋 Evidence register" },
    { href: "/atlas/engineering-notes", label: "🛠️ Engineering notes" },
    { href: "/atlas/methods-safeguards", label: "🔍 Methods & safeguards" },
    { href: "/atlas/source-index", label: "📚 Source index" },
  ]},
];

export default function AtlasMenu() {
  const pathname = usePathname();
  return (
    <aside className="atlas-aside">
      <Link href="/atlas" className={pathname === "/atlas" ? "active" : ""}>🏠 Overview</Link>
      {GROUPS.map((group) => (
        <div key={group.label}>
          <div className="atlas-aside-group">{group.label}</div>
          {group.items.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </div>
      ))}
      <div className="atlas-aside-back">
        <Link href="/">← Back to portfolio</Link>
      </div>
    </aside>
  );
}
