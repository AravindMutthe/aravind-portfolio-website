import type { Metadata } from "next";
import Link from "next/link";
import AtlasArticle from "@/components/AtlasArticle";

export const metadata: Metadata = {
  title: "Study notes, categorized — Atlas",
  description: "All 129 October 2026 study photos categorized by topic, with relations, corrections and flags — plus the October 2025 mining system they follow.",
};

export default function StudyNotesCategorized() {
  return (
    <AtlasArticle
      eyebrow="Atlas · Categorized study notes · All 129 photos + the 2025 system"
      title="Study notes, categorized"
      byline="Aravind · Systems Knowledge Atlas · Every photo mapped from the originals; illegible or uncertain readings are flagged, never invented"
      related={[
        { href: "/atlas/study-notes", label: "Study notes — the photo gallery" },
        { href: "/atlas/kernel-analogies", label: "Kernel analogies — notes 001–016 in full" },
        { href: "/atlas/notebook", label: "Original notebook — the 20 pages" },
        { href: "/atlas/gaps", label: "What the Atlas does not contain" },
        { href: "/atlas", label: "Atlas library — back to the shelves" },
      ]}
    >
      <p>
        This is the categorized index of the second notebook: 129 study photos
        taken in October 2026, organized by what they actually contain. Each
        entry gives the photo's topic in one line. Where the downscaled copy
        was too faint for row-level certainty, the entry says so — those rows
        need a full-resolution re-read before any detailed quotation.
      </p>
      <div className="atlas-panel atlas-original">
        <span className="atlas-tag">Provenance, kept separate</span>
        <p style={{ margin: "6px 0 0" }}>
          These photos are <b>not</b> README evidence. The README sources 2025
          material; these photos were taken in October 2026 and are entirely
          outside README scope. The two source systems are never merged into
          one timeline here. Likewise, the mining↔kernel analogy of October
          2025 is a teaching device: it is dropped once the subject turns
          technical, and the categorized pages say so rather than forcing the
          later notes into kernel categories.
        </p>
      </div>
      <h2>How to read the flags</h2>
      <ul>
        <li><b>Draft pair, count once</b> — two photos are a draft and its finished version of the same topic.</li>
        <li><b>Recap</b> — the page deliberately restates earlier pages; it is the notebook's own summarization step, not new content.</li>
        <li><b>Flagged, not asserted</b> — a reading is uncertain or unresolved. It is never published as a claim.</li>
        <li><b>Correction</b> — the note states something imprecise; the correction is given and the note is never repeated as stated.</li>
      </ul>

      <div className="atlas-divider" aria-hidden="true">✦ ✦ ✦</div>
      <h2>001–016 — The mining↔kernel system (October 2025)</h2>
      <p>
        The first sixteen notes are one complete analogy system, published in
        full at <Link href="/atlas/kernel-analogies">Kernel analogies</Link>:
        mines → hardware, miners → drivers, kernel → digital government,
        scheduler → commissions allocating tenders, firewalls → borders and
        customs, filesystems (ext4/XFS) → warehouses, DMA → bulk trucks,
        syscall → drill, kernel panic → blast, swap/buffer/cache → stockpiles.
        Note 012 gives the government's full role, including currency
        standards and the system clock as timestamp. Notes 013–016 then drop
        the analogy and treat mining on its own terms:
      </p>
      <ul>
        <li><b>013</b> — Process definition.</li>
        <li><b>014</b> — Ore = the proportion minable at a profit; the limit is set by the profit target.</li>
        <li><b>015</b> — Surface methods: contour/area strip, open-pit, auger, quarrying ornamental stone.</li>
        <li><b>016</b> — Underground mining (higher cost per ton, smaller equipment, limited access) with five choice factors: rock strength, ore-body size, shape, orientation, mineral grade.</li>
      </ul>

      <h2>017–044 — The diagram notebook: governance, eras, radio</h2>
      <p>
        A style break: a white spiral-bound diagram notebook, replacing the
        yellow lined pad of October 2025. The mining↔kernel thread ends at
        016 and is absent from 017–044 by design — these notes re-draw the
        curriculum as diagrams. Governance is the batch's spine: one
        governance stack across business, DNS, hardware and broadcasting.
      </p>
      <ul>
        <li><b>017–019, 022, 027–029, 031, 038</b> — Business, trade and governance diagrams, including regulation as the top external factor in employer–employee relations (038, whose “special report” is unnamed and is never attributed).</li>
        <li><b>019–021</b> — DNS and internet governance, technical. <b>Flagged:</b> 020's IETF-vs-IETE abbreviation is ambiguous — do not publish as IETF without a full-resolution re-check.</li>
        <li><b>023–026</b> — The silicon/NIC chain; 026 near-directly restates notebook page 10, confirming it.</li>
        <li><b>030, 032–035</b> — Interface eras; 032–034 are working drafts, 035 the summary, ending at API token = notebook page 18. <b>Draft pair, count once:</b> 030 ↔ 034 (mobile/cloud). 032's telegraph “1850–1960” is the note's own periodization, quoted as such, not “corrected”.</li>
        <li><b>036</b> — Scheduling, restating notebook page 19. <b>037</b> — Leadership eras, the page-20 arc.</li>
        <li><b>039–044 — New deep thread: radio, spectrum, FCC.</b> FCC history and 1934, spectrum, public vs commercial vs NCE broadcasting, licensing. No counterpart in the 20 notebook pages; filed under Ch 02 governance/spectrum with a scope-open flag, not a new chapter. <b>Draft pair, count once:</b> 041 ↔ 044 (radio broadcasters). <b>Flagged:</b> 039's marginal “June 15” is a probable writing date, not an FCC date; <b>040's detail is largely illegible at downscaled resolution</b> — nothing beyond “radio/broadcasting systems” may be quoted from it without a full-resolution re-read. 028's “Thin Ethernet” heading is an ambiguous reading, never a category label.</li>
      </ul>
      <div className="atlas-divider" aria-hidden="true">✦ ✦ ✦</div>
      <h2>045–072 — Broadcasting, tiers, segmentation, circuits to CPU</h2>
      <p>
        The batch's organizing habit is hierarchical decomposition — tiers,
        AS → NIC, die → package → motherboard, transistor → die — the same
        method as the notebook's governance hierarchy, at every scale. The
        physical/virtual mirror (same function, two implementations) is the
        Atlas's deepest recurring move. Oct 26 mirrors the notebook's chapter
        order: a re-study, not a new subject.
      </p>
      <ul>
        <li><b>045</b> — Broadcasting: electronic distribution → radio casting → netcasting. Spine certain; branch labels illegible.</li>
        <li><b>046</b> — The FCC under the Communications Act: radio, television, wire, satellite, cable. <b>Flagged, unresolved:</b> a marginal date reading “2023, June 15/17” against the notebook's FCC 1934 — most likely a note-taking date; do not publish as a claim.</li>
        <li><b>047</b> — Radio broadcasting through the air, then satellites: Earth orbit, Kepler's laws. New material with no notebook counterpart.</li>
        <li><b>048</b> — US broadcasting regulation chain: Congress → FCC Act → broadcasting; NPR, call signs, public vs commercial, fees.</li>
        <li><b>049</b> — Semiconductor ecosystem value chain, with government research/standards as the explicit first step — the bridge from governance to silicon.</li>
        <li><b>050</b> — Topologies: star, bus, ring, mesh; client–server and peer-to-peer; guided vs unguided media. The clearest handwriting in the batch.</li>
        <li><b>051</b> — Four-view framework: shapes, architecture, interfaces, media. Right column illegible; only the four headings are claimed.</li>
        <li><b>052</b> — Tier 1: standalone and local networks, star topology. <b>Flagged:</b> one word reads “WAR” and is almost certainly “LAN” misread — not asserted.</li>
        <li><b>053</b> — Tier 2: enterprise data centres and private clouds; leaf–spine, virtualization clusters, veth/SR-IOV, containers.</li>
        <li><b>054</b> — Tier 3: distributed / hyperscale public clouds; mesh and service mesh.</li>
        <li><b>055</b> — Physical vs virtual network elements: port, plug, cable, interface, link and their virtual twins. Grouping differs from B012's seven mappings — said explicitly, not a contradiction.</li>
        <li><b>056</b> — Logical vs physical table with Linux tools: ethtool, ip route, eth0/wlan0/tun/br, VLAN/VPN.</li>
        <li><b>057</b> — Autonomous Systems: definition, ASN, IANA/RIR, types. <b>Flagged:</b> the third AS type is illegible — “stub” is <em>not</em> asserted.</li>
        <li><b>058</b> — AS policies over BGP: transit for a fee, provider–customer, peering for free. Governance as business.</li>
        <li><b>059</b> — Segmentation (2)–(5): LAN/WAN, subnet, broadcast domain, collision domain. Numbering starts at (2) — (1) belongs before 059; do not renumber. Collision domain is the classical definition; modern switched networks largely eliminate collisions.</li>
        <li><b>060</b> — Micro-segment, end devices, port/socket (6).</li>
        <li><b>061</b> — Segmentation hierarchy as two flowcharts: AS → … → NIC. Intermediate labels are best-guess readings.</li>
        <li><b>062</b> — One identifier per level: ASN, VLAN ID, MAC/UUID, PID/UID/IP/port. Identifier column faint; only VLAN ID and MAC/UUID are asserted.</li>
        <li><b>063</b> — Communication matrix: package level (code-to-code: RMI, RPC/gRPC, sockets) vs server level (microservices, APIs, cloud, P2P).</li>
        <li><b>064</b> — User → kernel → device stack beside a circuit-components box (active/passive). The hinge of the batch: the kernel stack without the mining analogy.</li>
        <li><b>065</b> — Transistors → logic gates → specialized circuits. Re-verified exactly. “2–4 transistors per gate” is an approximation; Ch 08 states the precise composition.</li>
        <li><b>066</b> — Architecture blocks → core → die → package.</li>
        <li><b>067 — Recap:</b> CPU fetch–decode–execute, restating 065–066 in one place.</li>
        <li><b>068 — Recap:</b> CPU package, processing chain, components table; adds the DRAM-array link toward memory systems.</li>
        <li><b>069</b> — Three levels: inside the die, on the package, on the motherboard.</li>
        <li><b>070</b> — CPU core and multi-core die; ring bus / mesh. Page faint; several words are guesses.</li>
        <li><b>071</b> — Computer chip taxonomy: CPU, MCU, memory, DSP, GPU, ASIC, FPGA, SoC. Simplified: SoC and MCU are both glossed “all in one”, and NPU is absent — Ch 09's distinction is kept, the note is not a correction to Ch 09.</li>
        <li><b>072</b> — Circuit and integrated circuit: silicon to PCB definition, grounding the whole thread.</li>
      </ul>
      <div className="atlas-divider" aria-hidden="true">✦ ✦ ✦</div>
      <h2>073–100 — One bottom-up stack: circuits to Kubernetes</h2>
      <p>
        This range is a single curriculum in page order, starting where 065
        left off: circuits → chips → device classes → network devices →
        media → topology → Linux/virtual mappings → Kubernetes equivalents.
        It also identifies the handwritten sources behind live deep-dive
        pages: 097 is the source of the B012 end-to-end interfaces diagram,
        100 of the B012 seven mappings, 093 of the B011 analogy table,
        090–092 of the B011 topology and media sections, and 073–088 of
        Ch 08–11. The chip taxonomy appears four times (073/076/080/081)
        with variant groupings — harmonized here, never copied from one
        page as canonical.
      </p>
      <ul>
        <li><b>073</b> — Types of circuit by design + main IC types by function. GPU/MCU descriptor words faint.</li>
        <li><b>074</b> — Interface/comm chips + programmable logic. Left column certain; <b>right column illegible — no caption for it.</b></li>
        <li><b>075</b> — Classification of circuits by design, in fuller form; the ADC/DAC line seeds the Ch 08 signal path.</li>
        <li><b>076</b> — Classification of ICs by function: logic/processing, memory, power, comm/interface.</li>
        <li><b>077</b> — Devices (1): micro + personal. <b>078</b> — Devices (2): edge + cloud; the Smart NIC line leads into 089–090. <b>079</b> — Devices (3): mainframes / distributed supercomputing (IBM Z).</li>
        <li><b>080</b> — Processing chips + memory chips + comm chips/protocols.</li>
        <li><b>081</b> — Directory of IC: an index restating 076/080, not a fourth independent taxonomy.</li>
        <li><b>082</b> — Memory chips in depth: SRAM, DRAM, HBM, NAND Flash, EEPROM/NOR.</li>
        <li><b>083</b> — Power-management IC (PMIC).</li>
        <li><b>084</b> — Chipset = traffic controller on the motherboard. <b>Era-labelled:</b> the classic chipset view and the site's modern-SoC correction are both right in their eras; neither overrides the other.</li>
        <li><b>085</b> — Logic &amp; processing chips as “root + organs”: the Oct 25 analogy method applied to a circuit board as a body.</li>
        <li><b>086</b> — Every digital device has these chips: a checklist; the fifth class (synchronization/timing) term is ambiguous.</li>
        <li><b>087</b> — Design philosophies: CISC/RISC, ASIC/FPGA; consistent with Ch 09's ISA-vs-microarchitecture distinction.</li>
        <li><b>088</b> — RISC vs CISC vs ASIC vs FPGA devices.</li>
        <li><b>089</b> — Comm &amp; connectivity chips: modem/RFFE, PHY, server NICs. Ch 03 bridge.</li>
        <li><b>090</b> — Network devices catalogue, with a virtual-media tail bridging to 091–092.</li>
        <li><b>091</b> — Physical &amp; virtual media per device. <b>Rows need a full-resolution re-check before publication.</b></li>
        <li><b>092</b> — Network-device assignments continued, devices 6–12+. <b>Rows need a full-resolution re-check.</b></li>
        <li><b>093</b> — Kubernetes equivalents. <b>Rows need a full-resolution re-check; the site's analogy limits are labelled editorial additions</b> — the photo itself was not confirmed to state any limits.</li>
        <li><b>094</b> — iSCSI/FCoE, CSI, load balancer (ADC) with DPDK/PMD. <b>Nuance, not flat correction:</b> DPDK accelerates packet processing and is a real ADC implementation choice, but it is not a requirement for an ADC.</li>
        <li><b>095</b> — Device definitions: router, switch, firewall, access point, modem, NIC/HBA. <b>Some clauses need a full-resolution re-check.</b></li>
        <li><b>096</b> — Topology: modem → firewall → core → distribution → access. <b>Order variant vs 097</b> (edge router → firewall → core) — minor, both place the firewall at the edge before the core; harmonized with a footnote.</li>
        <li><b>097</b> — Common interfaces flow diagram: ISP backbone → OLT → modem → edge router → firewall → core → distribution → access → AP/NICs. The clearest page in this range.</li>
        <li><b>098</b> — Linux implementation mapping fragments: iptables/nftables, ip route, netfilter, bridge.</li>
        <li><b>099</b> — “Every port is a multiplexer”: cable/radio is the substrate, VLAN/VPN are logical overlays, one port equals many logical networks. The cleanest statement of virtualization in either notebook.</li>
        <li><b>100</b> — Physical device → virtual mapping table: server → VM, NIC → eth0/vNIC, switch → vSwitch/bridge, router → vRouter, firewall → security group, load balancer → VIP, storage → volume/LUN/PVC.</li>
      </ul>
      <div className="atlas-divider" aria-hidden="true">✦ ✦ ✦</div>
      <h2>101–129 — Systems internals: chips to backup</h2>
      <p>
        A second, self-contained course: chips → networks/virtualization →
        containers/processes → memory → architecture → backup. The Oct 25
        analogy is cashed out here in mechanism. Memory is the spine, in
        seven treatments from cell to architecture to backup. Notes 112–117
        match the published memory-systems page almost point for point;
        104/110 match the datapaths page; 105/108 match the Kubernetes page
        — these notes are the handwritten source layer beneath those deep
        dives. Nothing here revisits governance, interface eras, or trade
        history, and the integration does not pretend otherwise.
      </p>
      <ul>
        <li><b>101</b> — Chips, categories 1–2: processing vs memory/storage. “Data = values” circled.</li>
        <li><b>102</b> — Power-management chips as electrical gatekeepers. Right side faint.</li>
        <li><b>103</b> — Data types (instructions, values) + comm/interface chips: guided (PCIe, PCB traces) vs unguided (display, Ethernet/PHY, USB, modem, Wi-Fi, Bluetooth).</li>
        <li><b>104</b> — Network layer / virtual switching: switch ports, router ports, Tun/Tap. Rotated and faint; fragments only, no invented filler.</li>
        <li><b>105</b> — Containers = namespaces + cgroups + capabilities + overlays; namespace = isolation, cgroup limits = resource boundaries.</li>
        <li><b>106</b> — Process = program + memory + resources; VM layout: code, data, BSS, heap, shared libraries, stack, kernel context.</li>
        <li><b>107</b> — Node (physical execution provider, not a real machine) + kernel objects in /sys. Left text faint; two labels guessed.</li>
        <li><b>108 — Spine page:</b> thread → process → pod → VM → node → cluster → distributed system. <b>Conceptual ladder, not literal nesting</b> — a pod does not contain a VM; VMs host nodes that host pods.</li>
        <li><b>109</b> — Compute kernels vs storage kernels: monolithic/microkernel/hypervisor; FreeBSD/ZFS, Ceph, SPDK, ONTAP.</li>
        <li><b>110</b> — Control plane, data plane, engines: Linux stack, SDN (OVS, VPP), DPDK, eBPF; KVM/VSA/bridge as compute/storage/network engines. DPDK and eBPF are both data-plane tools but different mechanisms — DPDK is userspace bypass, eBPF runs in-kernel.</li>
        <li><b>111</b> — Engine → controller → firmware table: compute/storage/network/I/O. Right column faint.</li>
        <li><b>112</b> — Kernel → memory structure: pages, segments, nodes, zones. <b>Correction:</b> the note's “data: read-only” is wrong — the data segment is writable; read-only data is <code>.rodata</code>. Never repeated as stated.</li>
        <li><b>113</b> — RAM + page allocator: 4 KB frames, page struct, allocation on demand. “RAM understands only 2 operations” is a teaching simplification — DRAM also requires refresh.</li>
        <li><b>114</b> — Dynamic vs static storage; live workspace and backups vs permanent retention.</li>
        <li><b>115</b> — Backups + RAM as transit hub; tmpfs, memdump/dd as RAM extraction (a different use from backup-tool dd).</li>
        <li><b>116</b> — Virtual memory architectures: linear, segmented, paged, hybrid. Modern systems use the hybrid.</li>
        <li><b>117</b> — UMA / NUMA / distributed / shared + SMP / MPP.</li>
        <li><b>118</b> — Memory + CPU architecture recap. <b>Flagged, not asserted:</b> one row's equal-access property reads under a NUMA-like label, but that property belongs to UMA (per 117 and 122) — most likely a slip or a misreading.</li>
        <li><b>119</b> — Hardware/system architecture in detail: Von Neumann/Harvard/modified Harvard, RISC/CISC, Flynn, deployment models. Flynn's SIMD line is faint.</li>
        <li><b>120</b> — System architecture summary, <b>resolving 119</b>: SIMD = parallel data processing, MISD separate. Integrate 120's version; footnote 119's ambiguity.</li>
        <li><b>121</b> — Three architectures distinguished: memory (organization) vs CPU (execution) vs hardware (overall design).</li>
        <li><b>122</b> — Defaults in a physical server or VM: paging + virtual memory, cache, UMA equal access, x86/ARM choice.</li>
        <li><b>123</b> — Advanced: NUMA placement and CPU-affinity, distributed memory (Hadoop/Kubernetes/Spark), shared-memory tuning.</li>
        <li><b>124</b> — Architecture: by default vs needs tuning (shared memory, cache, swap, NUMA).</li>
        <li><b>125</b> — Architecture: must design/configure manually (clusters, microservices, client-server, P2P, load balancing: NGINX, HAProxy, ELB).</li>
        <li><b>126</b> — Process types in an OS: foreground, background, batch, interactive, real-time.</li>
        <li><b>127</b> — System/user processes, threaded processes, real-time (hard vs soft deadlines).</li>
        <li><b>128 — Keep strictly separate from 126–127:</b> general process types in management/business — core, support, management. Same word, different domain; the notebook's own trap and lesson.</li>
        <li><b>129</b> — Data backup vs archive; storage taxonomy: DAS/NAS/SAN by connection, SMB/NFS/iSCSI/FC/S3 by protocol, SSD/HDD/tape by media.</li>
      </ul>

      <div className="atlas-divider" aria-hidden="true">✦ ✦ ✦</div>
      <h2>Relations, contradictions, and what changes on live pages</h2>
      <ul>
        <li><b>Method shift, stated:</b> Oct 25 explains by analogy (minerals, mines, government); Oct 26 classifies by engineering taxonomy. No fact conflicts — but a reader will wonder where the mine went unless the integration says so.</li>
        <li><b>Chapters 01–11 are not README chapters.</b> Ch 01–07 come from the notebook and the fullest HTML edition, Ch 08–11 from the fullest edition. The README is never cited as their source.</li>
        <li><b>Notebook chapter assignments stay “provisional”.</b> The README states there is no exact notebook page-to-chat mapping; dropping the qualifier would contradict the source.</li>
        <li><b>Draft pairs are shown as pairs</b> (p08↔p09, p13↔p14, p03↔p04; 030↔034, 041↔044), never as separate topics; categories allow multi-chapter pages with a primary chapter.</li>
        <li><b>Verify notes to reword, not delete:</b> B011's ADC/DPDK note (DPDK is an implementation choice, not a requirement) and the chipset/SoC note (classic vs modern, era-labelled). The K8s analogy limits stay as labelled editorial additions.</li>
        <li><b>Full-resolution re-reads still owed before row-level publication:</b> 020 (IETF/IETE), 040 (radio detail), 091, 092, 093, 095, and 074's right column (no caption at all).</li>
      </ul>
      <p>
        <Link href="/atlas/study-notes">Photo gallery →</Link> ·{" "}
        <Link href="/atlas/gaps">Labelled gaps →</Link> ·{" "}
        <Link href="/atlas">Back to the Atlas library</Link>
      </p>
    </AtlasArticle>
  );
}
