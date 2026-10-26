import type { Metadata } from "next";
import Link from "next/link";
import DomainEmblem, { DOMAIN_META, type DomainId } from "@/components/DomainEmblem";

export const metadata: Metadata = {
  title: "Atlas by domain — Governance, Business, Finance, Technology, Industries — Atlas",
  description: "The Atlas organized by domain: rich cards with emblems and original images for governance, business, finance, technology, industries, networks and silicon.",
};

interface Card {
  id: DomainId;
  title: string;
  blurb: string;
  img: string;
  imgNote: string;
  links: { href: string; label: string }[];
}

const CARDS: Card[] = [
  {
    id: "governance",
    title: "Governance",
    blurb: "Who builds and governs networks: global oversight, standard bodies, regional registries, national enforcement — and the FCC, spectrum and broadcasting chain the second notebook adds.",
    img: "/atlas/notebook/page-14.jpg",
    imgNote: "Image: notebook p14 — global oversight in full (finished version of the p13 draft).",
    links: [
      { href: "/atlas/chapter-02-institutions-governance", label: "Ch 02 — Institutions & governance" },
      { href: "/atlas/chapter-07-government-business-networks", label: "Ch 07 — Government & business networks" },
      { href: "/atlas/study-notes-categorized", label: "Study notes 039–048, 057–058 — FCC, radio, AS policies" },
    ],
  },
  {
    id: "business",
    title: "Business",
    blurb: "Business is exchange — of money and of information. Exchange cannot outrun communication, and the speed of business became the speed of trading, then the speed of information.",
    img: "/atlas/notebook/page-02.jpg",
    imgNote: "Image: notebook p02 — business as exchange (dual Ch01+Ch02 page).",
    links: [
      { href: "/atlas/chapter-01-communication-networks", label: "Ch 01 — Communication networks" },
      { href: "/atlas/chapter-05-leadership", label: "Ch 05 — Leadership" },
      { href: "/atlas/era-timeline", label: "Era timeline" },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    blurb: "Banks and stock markets live on instant prices. The telegraph and telephone cut trade's delay from days to minutes — and that change is what made modern finance possible.",
    img: "/atlas/notebook/page-01.jpg",
    imgNote: "Image: notebook p01 — before networks: signals to telegraph; finance on instant prices.",
    links: [
      { href: "/atlas/chapter-01-communication-networks", label: "Ch 01 — Communication networks" },
      { href: "/atlas/chapter-06-scheduling", label: "Ch 06 — Scheduling & allocation" },
      { href: "/atlas/concepts", label: "Concepts across the Atlas" },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    blurb: "From transistor to system: gates, circuits, chips, devices, networks, containers, memory, architecture, backup — the second notebook's full stack, in page order.",
    img: "/atlas/study-notes/065.jpg",
    imgNote: "Image: study note 065 — transistors to logic gates (re-verified).",
    links: [
      { href: "/atlas/semiconductors", label: "Semiconductors (Ch 08–11)" },
      { href: "/atlas/study-notes-categorized", label: "Study notes, categorized — all 129" },
      { href: "/atlas/memory-systems", label: "Memory systems" },
    ],
  },
  {
    id: "industries",
    title: "Industries",
    blurb: "Vendors, OEMs, clouds, telcos and government research labs as one supply chain: silicon vendors supply the chips, OEMs assemble the machines, clouds and telcos run them.",
    img: "/atlas/notebook/page-09.jpg",
    imgNote: "Image: notebook p09 — silicon product to global business supply (draft pair with p08).",
    links: [
      { href: "/atlas/chapter-03-silicon-nic", label: "Ch 03 — Silicon to NIC" },
      { href: "/atlas/semiconductors", label: "Semiconductors (Ch 08–11)" },
      { href: "/atlas/notebook", label: "Original notebook, pages 01–20" },
    ],
  },
  {
    id: "networks",
    title: "Networks",
    blurb: "Interfaces, topologies, tiers and virtualization: star, bus, ring, mesh; Tier 1 local to Tier 3 hyperscale; every port a multiplexer; Linux datapaths and Kubernetes networks.",
    img: "/atlas/study-notes/097.jpg",
    imgNote: "Image: study note 097 — common interfaces flow diagram (source of the B012 diagram).",
    links: [
      { href: "/atlas/kubernetes-networks", label: "Kubernetes networks" },
      { href: "/atlas/linux-datapaths", label: "Linux datapaths" },
      { href: "/atlas/chapter-03-silicon-nic", label: "Ch 03 — Silicon to NIC" },
    ],
  },
  {
    id: "silicon",
    title: "Silicon",
    blurb: "Circuits by design, chips by function, core to die to package to motherboard: the taxonomy restated four times across the notebook, harmonized here, never copied from one page as canonical.",
    img: "/atlas/study-notes/072.jpg",
    imgNote: "Image: study note 072 — circuit and integrated circuit, silicon to PCB.",
    links: [
      { href: "/atlas/semiconductors", label: "Semiconductors (Ch 08–11)" },
      { href: "/atlas/study-notes-categorized", label: "Study notes 073–088 — chips taxonomy" },
      { href: "/atlas/chapter-03-silicon-nic", label: "Ch 03 — Silicon to NIC" },
    ],
  },
];

export default function AtlasDomains() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas library</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Atlas · By domain · Cards, emblems &amp; original images</p>
      <h1 className="atlas-hero">The Atlas by domain</h1>
      <p className="atlas-lead">
        Governance, business, finance, technology, industries, networks and
        silicon — each with its own emblem and an original image from the
        notebooks, captioned with its source. Every image below is a
        downscaled reference copy; the originals in the Atlas folder were not
        touched, and no caption is invented: each image note states the photo
        and the topic the categorization verified.
      </p>
      <div className="atlas-grid">
        {CARDS.map((c) => (
          <article key={c.id} className="atlas-card atlas-rich" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="domain-card-img" src={c.img} alt={`${DOMAIN_META[c.id].label} — ${c.imgNote}`} loading="lazy" />
            <div className="atlas-rich-body">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <DomainEmblem id={c.id} />
                <h2 style={{ margin: 0 }}>{c.title}</h2>
              </div>
              <p style={{ margin: "10px 0 0" }}>{c.blurb}</p>
              <p style={{ margin: "8px 0 0", color: "var(--atlas-muted)", fontSize: 13.5 }}>{c.imgNote}</p>
              <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
                {c.links.map((l) => (
                  <li key={l.href + l.label}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p style={{ marginTop: 24 }}>
        <Link href="/atlas">← Back to the Atlas library</Link> ·{" "}
        <Link href="/atlas/study-notes-categorized">Study notes, categorized →</Link>
      </p>
    </div>
  );
}
