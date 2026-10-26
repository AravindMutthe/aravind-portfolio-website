import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concepts across the Atlas — Atlas",
  description: "One concept, every place it appears: notebook pages, study notes, deep dives and reference notes, cross-linked instead of isolated.",
};

const CONCEPTS: { emoji: string; title: string; about: string; pages: [string, string][]; evidence: string; image: string }[] = [
  { emoji: "🧠", title: "Kernel", about: "The resource manager at the centre of the Atlas: it allocates CPU, memory and I/O, schedules work, and enforces policy — the digital government of the machine, and the mining company's head office in the second notebook.", pages: [["/atlas/kernel-analogies", "Kernel analogies · mining & government"], ["/atlas/chapter-06-scheduling", "Ch 06 · Scheduling"], ["/atlas/linux-datapaths", "Linux datapaths · B012"], ["/atlas/memory-systems", "Memory systems · B015"]], evidence: "Study notes 001–011 (Oct 25) build the whole analogy; notebook p10 draws the NIC path through the kernel.", image: "/atlas/study-notes/008.jpg" },
  { emoji: "💾", title: "Memory", about: "From registers to tape: the hierarchy is a trade-off, not a ranking. The same trade-off appears in silicon (Ch 10), in the buddy allocator (B015), and in the second notebook's resource taxonomy, where non-metallic minerals map to memory and storage.", pages: [["/atlas/memory-systems", "Memory systems · B015"], ["/atlas/semiconductors", "Semiconductors · Ch 10"], ["/atlas/kernel-analogies", "Kernel analogies · resource types"]], evidence: "Study note 009 sorts resources into compute, memory/storage and energy; B015 gives the allocator and NUMA detail.", image: "/atlas/study-notes/009.jpg" },
  { emoji: "🌐", title: "Networks", about: "Why networks emerged at all (trade and finance needing faster messages), how they are governed, and how a packet actually travels — from the telegraph to a Kubernetes Pod, the same journey at different scales.", pages: [["/atlas/chapter-01-communication-networks", "Ch 01 · Why networks emerged"], ["/atlas/kubernetes-networks", "Kubernetes networking · B011"], ["/atlas/linux-datapaths", "Linux datapaths · B012"], ["/atlas/chapter-03-silicon-nic", "Ch 03 · Silicon to NIC"]], evidence: "Notebook p01 (why networks), p10 (NIC diagram), p12 (four parallel flows).", image: "/atlas/notebook/page-10.jpg" },
  { emoji: "🏛️", title: "Governance", about: "Every system in the Atlas is governed twice: once by its own rules (scheduler, firewall, kernel policy) and once by outside bodies (ICANN, RIRs, FCC, WTO, OPEC). The hierarchy runs global → standard bodies → regional → national → sector → market.", pages: [["/atlas/chapter-02-institutions-governance", "Ch 02 · Institutions & governance"], ["/atlas/chapter-07-government-business-networks", "Ch 07 · Government, business & technical networks"], ["/atlas/kernel-analogies", "Kernel analogies · governed mining"]], evidence: "Notebook p04–06, p11, p13–14; study notes 004 and 007 name the same outside bodies.", image: "/atlas/notebook/page-13.jpg" },
  { emoji: "📅", title: "Scheduling", about: "Tasks plus resources make a schedule — in electricity, in networking, in business projects, and in operating systems. The Atlas treats the scheduler as the same idea wearing different uniforms.", pages: [["/atlas/chapter-06-scheduling", "Ch 06 · Scheduling"], ["/atlas/kernel-analogies", "Kernel analogies · the scheduler"], ["/atlas/kubernetes-networks", "Kubernetes networking · B011"]], evidence: "Notebook p19 is scheduling (corrected from the page image itself); study note 006 maps the scheduler to commissions allocating tenders.", image: "/atlas/notebook/page-19.jpg" },
  { emoji: "⛏️", title: "Resources", about: "What a system has, what it spends, and what it protects. The second notebook's resource taxonomy — metallic, non-metallic, fossil — is the Atlas method in miniature: classify by purpose, then by mechanism.", pages: [["/atlas/kernel-analogies", "Kernel analogies · resource types & tools"], ["/atlas/memory-systems", "Memory systems · B015"], ["/atlas/chapter-06-scheduling", "Ch 06 · Scheduling"]], evidence: "Study notes 001–003, 009–010; notebook p02–03 on business as exchange of resources.", image: "/atlas/study-notes/001.jpg" },
  { emoji: "⚡", title: "Silicon", about: "Signals become logic, logic becomes processors, processors become devices. The chain runs sensor → ADC → MCU/SoC → driver → application → actuator, and the same chain appears in Ch 03, Ch 08–11 and the transistor study note.", pages: [["/atlas/semiconductors", "Semiconductors · Ch 08–11"], ["/atlas/chapter-03-silicon-nic", "Ch 03 · Silicon to NIC"], ["/atlas/study-notes", "Study note 065 · transistors"]], evidence: "Study note 065 (transistors and logic gates); notebook p07–10 (vendors, NIC, drivers).", image: "/atlas/notebook/page-08.jpg" },
  { emoji: "💻", title: "Interfaces", about: "Each era changes who talks to the machine and how: telegraph key, switchboard, terminal, web page, phone, cloud API, AI prompt. The interface eras are the Atlas's spine for Ch 04 and for the whole timeline.", pages: [["/atlas/chapter-04-interfaces", "Ch 04 · Interface eras"], ["/atlas/era-timeline", "Era timeline"], ["/atlas/semiconductors", "Semiconductors · devices"]], evidence: "Notebook p15–17 (UI framework eras); p18 summarises the eras with their business models.", image: "/atlas/notebook/page-15.jpg" },
  { emoji: "🏢", title: "Leadership", about: "Centralised, distributed and coordinated control — of companies, of networks, and of kernels. Leadership in the Atlas is a systems choice, not a personality trait, and it recurs in business models from usage billing to API tokens.", pages: [["/atlas/chapter-05-leadership", "Ch 05 · Leadership & business models"], ["/atlas/chapter-01-communication-networks", "Ch 01 · Trade & business"], ["/atlas/kernel-analogies", "Kernel analogies · the digital government"]], evidence: "Notebook p20 is leadership (corrected from the page image itself); p18 lists the per-era business models.", image: "/atlas/notebook/page-20.jpg" },
];

export default function Concepts() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas library</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Cross-reference index · Elaboration, not original labels</p>
      <h1 className="atlas-hero">🧭 Concepts across the Atlas</h1>
      <p className="atlas-lead">
        The Atlas was written as separate notes, but its ideas repeat: the kernel
        reappears as a mine and as a government, memory reappears as a mineral
        class and as a hierarchy, a packet reappears at every scale. This index
        gathers each concept in one place, with the original evidence cited and
        the elaboration kept visibly separate from it.
      </p>
      <div className="atlas-grid">
        {CONCEPTS.map((c) => (
          <div key={c.title} className="atlas-card atlas-rich" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt="" loading="lazy" />
            <div className="atlas-rich-body">
              <span className="atlas-tag">Concept</span>
              <h3>{c.emoji} {c.title}</h3>
              <p>{c.about}</p>
              <p style={{ marginTop: 12 }}><b>Appears in:</b><br />{c.pages.map(([href, label]) => (
                <span key={href}><Link href={href}>{label}</Link><br /></span>
              ))}</p>
              <p style={{ marginTop: 10, fontSize: 12.5 }}><b>Original evidence:</b> {c.evidence}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="atlas-panel atlas-verify">
        <span className="atlas-tag">Verify</span>
        <p style={{ margin: "6px 0 0" }}>Concept groupings are editorial. The original notes never used these nine headings together; the headings organise the notes, they do not replace them. Where a handwriting reading is uncertain, the kernel-analogies page says so instead of asserting it.</p>
      </div>
    </div>
  );
}
