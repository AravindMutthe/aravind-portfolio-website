import type { Metadata } from "next";
import { ATLAS_SECTIONS } from "@/components/atlas-sections";
import AtlasLibrary, { type LibraryItem } from "@/components/AtlasLibrary";

export const metadata: Metadata = {
  title: "Atlas — Aravind Mutte",
  description: "Aravind's personal library for the Systems Knowledge Atlas: curriculum, deep dives, original notebooks and reference notes, searchable by concept.",
};

const CONCEPTS: Record<string, string[]> = {
  "overview": ["Systems thinking"],
  "chapter-01-communication-networks": ["Networks", "History", "Leadership"],
  "chapter-02-institutions-governance": ["Governance", "Networks", "History"],
  "chapter-03-silicon-nic": ["Silicon", "Networks", "Kernel"],
  "chapter-04-interfaces": ["Interfaces", "History"],
  "chapter-05-leadership": ["Leadership", "Governance"],
  "chapter-06-scheduling": ["Scheduling", "Kernel", "Resources"],
  "chapter-07-government-business-networks": ["Governance", "Networks"],
  "era-timeline": ["History"],
  "evidence-register": ["Methods"],
  "engineering-notes": ["Kernel", "Networks"],
  "methods-safeguards": ["Methods"],
};

const EXTRAS: LibraryItem[] = [
  { href: "/atlas/concepts", title: "🧭 Concepts across the Atlas", desc: "One concept, every place it appears: notebook pages, study notes, deep dives and reference notes, cross-linked instead of isolated.", tag: "Cross-reference index", shelf: "Reference", concepts: ["Kernel", "Memory", "Networks", "Silicon", "Governance", "Scheduling", "Resources", "Interfaces", "Leadership", "History", "Methods"], image: "/atlas/notebook/page-12.jpg" },
  { href: "/atlas/kernel-analogies", title: "⛏️ Kernel analogies: a mine, a government, a kernel", desc: "Study notes 001–016 (Oct 25 complete), newly integrated: mining and government as the kernel, mapped page by page with the original photos, plus mining on its own terms.", tag: "Deep dive · Study notes 001–016", shelf: "Deep dives", concepts: ["Kernel", "Resources", "Scheduling", "Governance"], image: "/atlas/study-notes/008.jpg" },
  { href: "/atlas/semiconductors", title: "⚡ Semiconductors · Chapters 08–11", desc: "Signals to silicon, processing engines and ISAs, memory hierarchy, embedded to cloud, and source-by-source notes.", tag: "Deep dive · Ch 08–11", shelf: "Deep dives", concepts: ["Silicon", "Memory", "Kernel"], image: "/atlas/notebook/page-08.jpg" },
  { href: "/atlas/kubernetes-networks", title: "☸️ Kubernetes networking · B011", desc: "Physical enterprise topology, the Kubernetes path with its analogy limits, ADC, SAN/CSI, media, packet trace and labs.", tag: "Deep dive · B011", shelf: "Deep dives", concepts: ["Networks", "Kernel", "Scheduling"], image: "/atlas/notebook/page-10.jpg" },
  { href: "/atlas/memory-systems", title: "💾 Memory systems · B015", desc: "Hierarchy, allocator, volatile vs nonvolatile, backup, architectures, UMA/NUMA, CPU locality and the web-request path.", tag: "Deep dive · B015", shelf: "Deep dives", concepts: ["Memory", "Kernel", "Resources"], image: "/atlas/study-notes/009.jpg" },
  { href: "/atlas/linux-datapaths", title: "🐧 Linux datapaths · B012", desc: "Interfaces and the end-to-end diagram, Linux routing, firewall and switching, devices and media, seven mappings, request journey.", tag: "Deep dive · B012", shelf: "Deep dives", concepts: ["Networks", "Kernel"], image: "/atlas/notebook/page-10.jpg" },
  { href: "/atlas/notebook", title: "🗂️ All original scans · 20 pages", desc: "The original 2025 systems notebook, in page order, downscaled copies only. Originals untouched.", tag: "Originals · 20 pages", shelf: "Original notebooks", concepts: ["Originals"], image: "/atlas/notebook/page-01.jpg" },
  { href: "/atlas/study-notes", title: "📓 Study notes · 129 photos", desc: "The second notebook, photographed October 25–26, in timestamp order. Notes 001–011 now integrated as kernel analogies.", tag: "Originals · 129 photos", shelf: "Original notebooks", concepts: ["Originals", "Kernel", "Resources"], image: "/atlas/study-notes/001.jpg" },
  { href: "/atlas/recovered-fragments", title: "🧩 Recovered dated fragments", desc: "The zip-only supplements, in chronological order, privacy items omitted.", tag: "Originals · Aug–Nov 2025", shelf: "Original notebooks", concepts: ["Originals", "History", "Methods"], image: "/atlas/notebook/page-18.jpg" },
  { href: "/atlas/source-index", title: "📚 Source index", desc: "Every source, its edition and its duplicates, so any claim can be traced back to a file.", tag: "Reference", shelf: "Reference", concepts: ["Methods"], image: "/atlas/notebook/page-14.jpg" },
];

export default function AtlasHub() {
  const items: LibraryItem[] = [
    ...ATLAS_SECTIONS.map((s) => ({
      href: `/atlas/${s.slug}`,
      title: s.title,
      desc: s.desc,
      tag: `${s.kind} · ${s.readTime}`,
      image: s.image,
      shelf: s.kind === "Curriculum" ? "Curriculum" : "Reference",
      concepts: CONCEPTS[s.slug] ?? ["History"],
    })),
    ...EXTRAS,
  ];
  return (
    <div className="atlas-wrap">
      <p className="atlas-eyebrow">📚 Personal library · Separate endpoint · Notes style</p>
      <h1 className="atlas-hero">Systems Knowledge Atlas</h1>
      <p className="atlas-lead">
        Aravind's personal library of systems knowledge: from human communication
        to interconnected digital systems. Browse by shelf, search the catalogue,
        or follow one concept — kernel, memory, governance, scheduling — across
        every notebook, note and deep dive it appears in. The original research
        remains visibly distinct from added explanations.
      </p>
      <div className="atlas-panel atlas-enhanced">
        <span className="atlas-tag enhanced">Curated gateway</span>
        <p style={{ margin: "6px 0 0" }}>
          The standalone Aravind Systems Atlas is the canonical full library.{" "}
          <a href="/atlas-gateway">Browse the curated gateway</a> for a short
          introduction and deep links to its library, learning paths, and System Explorer.
        </p>
      </div>
      <div className="atlas-statrow">
        <div className="atlas-stat"><b>20</b><span>original notebook pages, viewed as reference</span></div>
        <div className="atlas-stat"><b>129</b><span>study-note photos, Oct 25–26</span></div>
        <div className="atlas-stat"><b>11</b><span>chapters, 01–11 in the fullest edition</span></div>
        <div className="atlas-stat"><b>14</b><span>unique source texts among 35 HTML files</span></div>
      </div>

      <div className="atlas-panel atlas-original">
        <span className="atlas-tag original">Original sources retained</span>
        <p style={{ margin: "6px 0 0" }}>
          Handwritten notebook pages are the authoritative source for the curriculum.
          Their chapter assignments are provisional: final assignment requires
          line-by-line source review. No full transcription is claimed.
        </p>
      </div>
      <div className="atlas-panel atlas-enhanced">
        <span className="atlas-tag enhanced">Enhanced study material</span>
        <p style={{ margin: "6px 0 0" }}>
          Explanations, learning flows, diagrams and concept groupings added by the
          assistant are labelled as added material, not as original notes.
        </p>
      </div>
      <div className="atlas-panel atlas-verify">
        <span className="atlas-tag verify">Draft · verification pending</span>
        <p style={{ margin: "6px 0 0" }}>
          Coverage is partial August to November 2025. December 2025 and January 2026
          are unverified. A complete account export would be needed to close those gaps.
          This endpoint is not the portfolio blog, and it does not add Atlas content to it.
        </p>
      </div>

      <AtlasLibrary items={items} />

      <h2>Choose your learning path</h2>
      <div className="atlas-grid">
        <div className="atlas-card">
          <h3>🛠️ Engineering &amp; interviews</h3>
          <p>Hardware, NIC, drivers, kernel, TCP/IP, semiconductors, Kubernetes networking, memory, Linux datapaths, systems and operations.</p>
        </div>
        <div className="atlas-card">
          <h3>🌐 History, business &amp; founders</h3>
          <p>Trade and finance, communications, institutions, industry supply chains, business strategy, governance and leadership.</p>
        </div>
      </div>

      <h2>What is original, and what is added?</h2>
      <p>
        The prototype's own legend, kept on every new page: ✍️ Original sources
        are the handwritten notes, unchanged. 🧭 Editorial reading is a
        structured summary. ✨ AI explanations add worked examples and context.
        🟢 New diagrams are teaching redraws, not original diagrams. ✅ Verify
        marks corrections and limits. Nothing here is presented as a verbatim
        transcription.
      </p>
    </div>
  );
}
