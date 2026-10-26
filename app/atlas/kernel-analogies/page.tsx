import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kernel analogies: mining & government — Atlas",
  description: "Study notes 001–011 (Oct 25): the second notebook's complete mining-as-kernel analogy, integrated with chapters 02, 03 and 06, memory and Linux datapaths.",
};

const MAP: [string, string, string][] = [
  ["Mines", "Hardware", "008 · Big Picture; 004 · minerals = hardware resources"],
  ["Miners", "Drivers", "008 · Big Picture"],
  ["Minerals, refined", "OS subsystems: file system, I/O stack, memory manager", "004 · refine minerals = OS subsystems"],
  ["Mining industry", "Kernel resource manager", "004 · mining industry = kernel resource manager"],
  ["Kernel", "Digital government", "007 · kernel = digital govt; 006 · govt (compute, seats, policies)"],
  ["Scheduler", "Commissions allocating tenders / CPU time", "006 · scheduler → energy commissions, allocated tenders"],
  ["CPU cycles", "Compute cycles, extracted and allocated", "002 · CPU cycles → power on; 009 · compute cycles"],
  ["Memory & storage", "Non-metallic minerals (limestone, clay, gypsum)", "009 · resource types"],
  ["Interrupts & power", "Fossil fuels (coal, oil, gas)", "009 · fossil → interrupt & power states (reading partial)"],
  ["Outside bodies (US, OPEC, WTO, FCC)", "Global trade rules governing the system", "007 · analogy; 004 · WTO trade rules, OPEC, diamonds"],
  ["Field mines", "Local LANs / subnets", "007 · field mines = local LAN / subnets"],
  ["Shipping ports, export", "I/O ports, NICs", "011 · trade & distribution (outside mine)"],
  ["Customs & borders", "Firewalls, ACLs, namespaces", "011 · borders → firewalls, ACLs, namespaces"],
  ["Traders & corporations", "Middleware, libraries", "011 · corporation → middleware, libraries"],
  ["Exchanges", "User-space services, databases, browsing", "011 · exchanges → user space, DB, browse (reading partial)"],
  ["Stockpiles, saved minerals", "Swap, buffer, cache", "011 · stockpiles → swap, buffer, cache"],
  ["Warehouse, storage depot", "Filesystems: ext4, XFS", "011 · warehouse → ext4, XFS"],
  ["Drill", "Kernel driver, system call", "010 · tools"],
  ["Blast, explosives", "Kernel panic, kill signal", "010 · tools"],
  ["Loaders & trucks, bulk load", "DMA controller", "010 · tools"],
  ["Refinery, smelting", "Compiler / loader subsystem", "010 · tools"],
  ["Pumps, extract fluids", "I/O controller (NIC, disk)", "010 · tools"],
  ["Safety helmets, protection", "Access control, security", "010 · tools"],
];

const SHOTS: [string, string, string][] = [
  ["/atlas/study-notes/001.jpg", "Note 001 · Mining and minerals", "The thread opens with extraction itself and classification by purpose."],
  ["/atlas/study-notes/002.jpg", "Note 002 · Mining design = kernel design", "Mining design for mineral extraction; kernel design for resource allocation."],
  ["/atlas/study-notes/004.jpg", "Note 004 · Governed mining", "Mining governed by government and regulators; minerals as hardware resources."],
  ["/atlas/study-notes/008.jpg", "Note 008 · Big Picture", "The whole system on one page: mines, miners, kernel, markets, government, consumers."],
  ["/atlas/study-notes/010.jpg", "Note 010 · Tools", "Every tool has a kernel twin: drill, blast, trucks, refinery, pumps, helmets."],
  ["/atlas/study-notes/011.jpg", "Note 011 · Trade & distribution", "Outside the mine: ports, borders, traders, exchanges, stockpiles, warehouses."],
];

export default function KernelAnalogies() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas library</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Study notes 001–011 · Oct 25 · Newly integrated, not previously published</p>
      <h1 className="atlas-hero">⛏️ Kernel analogies: a mine, a government, a kernel</h1>
      <p className="atlas-lead">
        The second notebook does not start with computers. It starts with mining,
        and it uses mining to explain the kernel — then uses government to explain
        both. Eleven pages, photographed October 25, form one complete analogy
        system: design, roles, governance, supply chain, resource types, tools,
        and trade. Until now these pages sat in the study-notes sequence as
        reference only. They are integrated here, page by page, with the rest of
        the Atlas cross-linked at every step.
      </p>

      <div className="atlas-diagram">
        <h3>⛏️ The same system, twice</h3>
        <p>Elaboration diagram · the two rows are the same roles in different uniforms. Read down a column, not just across a row.</p>
        <div className="atlas-chain">
          <span className="atlas-chain-node"><span className="atlas-emblem">⛏️</span><b>Raw inputs</b><span>Ore in the ground</span></span>
          <span className="atlas-chain-arrow">→</span>
          <span className="atlas-chain-node"><span className="atlas-emblem">⚒️</span><b>Extraction</b><span>Mines &amp; miners</span></span>
          <span className="atlas-chain-arrow">→</span>
          <span className="atlas-chain-node"><span className="atlas-emblem">🏭</span><b>Refining</b><span>Refineries &amp; smelters</span></span>
          <span className="atlas-chain-arrow">→</span>
          <span className="atlas-chain-node"><span className="atlas-emblem">🚚</span><b>Distribution</b><span>Pipelines &amp; ports</span></span>
          <span className="atlas-chain-arrow">→</span>
          <span className="atlas-chain-node"><span className="atlas-emblem">🏪</span><b>End users</b><span>Industries &amp; consumers</span></span>
        </div>
        <div className="atlas-chain" style={{ marginTop: 10 }}>
          <span className="atlas-chain-node"><span className="atlas-emblem">🔌</span><b>Resources</b><span>CPU · memory · I/O</span></span>
          <span className="atlas-chain-arrow">→</span>
          <span className="atlas-chain-node"><span className="atlas-emblem">🧠</span><b>Kernel</b><span>Scheduler &amp; drivers</span></span>
          <span className="atlas-chain-arrow">→</span>
          <span className="atlas-chain-node"><span className="atlas-emblem">🗂️</span><b>Subsystems</b><span>FS · I/O · memory</span></span>
          <span className="atlas-chain-arrow">→</span>
          <span className="atlas-chain-node"><span className="atlas-emblem">🚪</span><b>Interfaces</b><span>Syscalls · NICs</span></span>
          <span className="atlas-chain-arrow">→</span>
          <span className="atlas-chain-node"><span className="atlas-emblem">💻</span><b>Processes</b><span>Apps &amp; users</span></span>
        </div>
      </div>

      <h2>📖 The mapping, page by page</h2>
      <p>Each row is one mapping the notes actually draw. The right column cites the note so any row can be checked against the original photo.</p>
      <table>
        <thead><tr><th>Mining / government side</th><th>Kernel / systems side</th><th>Note</th></tr></thead>
        <tbody>
          {MAP.map(([a, b, n]) => (
            <tr key={a}><td>{a}</td><td>{b}</td><td>{n}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>🖼️ Illustrations from the notebook itself</h2>
      <p>Downscaled reference copies from the repo, exactly as photographed. The originals in the Atlas folder are untouched.</p>
      <div className="atlas-grid">
        {SHOTS.map(([src, title, cap]) => (
          <figure key={src} className="atlas-card atlas-rich" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={title} loading="lazy" />
            <div className="atlas-rich-body">
              <h3>{title}</h3>
              <p>{cap}</p>
            </div>
          </figure>
        ))}
      </div>

      <h2>🔗 Related across the Atlas</h2>
      <div className="atlas-grid">
        <Link className="atlas-card" href="/atlas/chapter-02-institutions-governance"><span className="atlas-tag">Ch 02</span><h3>🏛️ Institutions &amp; governance</h3><p>The same outside bodies — WTO, OPEC, FCC — governing networks instead of mines.</p></Link>
        <Link className="atlas-card" href="/atlas/chapter-06-scheduling"><span className="atlas-tag">Ch 06</span><h3>📅 Scheduling</h3><p>Tasks plus resources make a schedule — the scheduler as commissions allocating tenders.</p></Link>
        <Link className="atlas-card" href="/atlas/chapter-03-silicon-nic"><span className="atlas-tag">Ch 03</span><h3>🔌 Silicon to NIC</h3><p>Drivers and the kernel stack: the drill and the pipeline, in hardware terms.</p></Link>
        <Link className="atlas-card" href="/atlas/memory-systems"><span className="atlas-tag">B015</span><h3>💾 Memory systems</h3><p>Allocator, swap, buffer and cache — the stockpiles and warehouses, engineered.</p></Link>
        <Link className="atlas-card" href="/atlas/linux-datapaths"><span className="atlas-tag">B012</span><h3>🐧 Linux datapaths</h3><p>Firewalls as borders, namespaces as customs zones, NICs as ports.</p></Link>
        <Link className="atlas-card" href="/atlas/concepts"><span className="atlas-tag">Index</span><h3>🧭 Concepts across the Atlas</h3><p>Kernel, memory, governance, scheduling and resources, each in every place it appears.</p></Link>
      </div>

      <div className="atlas-panel atlas-verify">
        <span className="atlas-tag">Verify · what is not claimed</span>
        <p style={{ margin: "6px 0 0" }}>Notes 012–016 (rest of Oct 25) have not been viewed yet, so this page covers 001–011 only. Three readings above are marked “reading partial” where handwriting in the downscaled copy is ambiguous; they are the most likely readings, not certainties. The mapping table is an editorial arrangement of the notes' own pairings — the notes draw the pairs, the table collects them.</p>
      </div>
    </div>
  );
}
