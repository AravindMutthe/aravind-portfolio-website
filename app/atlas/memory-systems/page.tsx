import type { Metadata } from "next";
import Link from "next/link";
import AtlasTabs from "@/components/AtlasTabs";
import AtlasFlow from "@/components/AtlasFlow";

export const metadata: Metadata = {
  title: "💾 Memory systems — Atlas",
  description:
    "B015: memory from physical cells to processes, NUMA and durable data, in seven pages, with connections to hardware, Linux, containers and Kubernetes.",
};

export default function MemorySystems() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>B015 · Seven pages</p>
      <h1 className="atlas-hero">💾 Memory: from physical cells to processes</h1>
      <p className="atlas-lead">
        This chapter deepens earlier chapters on hardware, Linux processes,
        containers, storage and distributed systems. Original notes are shown
        unaltered in the source edition; editorial corrections are separate.
        Reading path: CPU request → virtual address → page tables / TLB →
        physical frame → NUMA locality → storage and recoverability.
      </p>
      <AtlasTabs tabs={[
        { label: "✍️ Original", content: <p>Seven handwritten pages: memory hierarchy and Linux allocation; RAM, page allocator, page structs and tmpfs; volatile RAM versus nonvolatile storage; backup and recovery paths; physical memory architectures; UMA, NUMA, shared and distributed memory; CPU architecture and locality.</p> },
        { label: "🧭 Editorial", content: <p>Pages, process segments, NUMA nodes and physical memory zones describe different concerns — not four levels of one hierarchy. Pages are fixed-size virtual-memory units; frames are physical RAM units; segments are logical regions such as text, data, heap and stack; NUMA nodes group memory by locality; zones express allocation constraints.</p> },
        { label: "✨ AI explanations", content: <p>Applied path below: a web request and memory, from NIC packet buffers through virtual addresses, MMU translation, caches and NUMA locality, to database or filesystem writes and separate backups.</p> },
        { label: "✅ Verify", content: <p>tmpfs is a memory-backed filesystem with possible swap backing, not a general-purpose page allocator. NVMe is a storage interface/protocol, not a memory technology. Redis persistence and tmpfs are not interchangeable with durable backup systems. A remote NUMA node is not the same as remote RAM across a network.</p> },
      ]} />
      <AtlasFlow steps={[
        { emoji: "🖥️", title: "CPU request", text: "A process accesses a virtual address." },
        { emoji: "🗺️", title: "Page tables / TLB", text: "The MMU translates virtual addresses to physical frames; translation caches speed it up." },
        { emoji: "📍", title: "NUMA locality", text: "Local versus remote memory accesses differ in latency within shared-memory machines." },
        { emoji: "💾", title: "Storage and recoverability", text: "Database or filesystem writes persist to storage; separate backups enable recovery." },
      ]} />
      <div className="atlas-grid">
        {[
          ["📄 Page 1 · Hierarchy and Linux allocation", "Pages, segments, NUMA nodes and zones are different concerns. Do not stack them as one hierarchy."],
          ["🧠 Page 2 · RAM, allocator, page structs, tmpfs", "DRAM stores volatile bytes. Linux tracks frames through struct page metadata and newer folio abstractions, allocating with the buddy allocator. The page cache accelerates file I/O."],
          ["⚡ Page 3 · Volatile vs nonvolatile", "RAM holds active working data; NAND flash and NVMe SSDs retain data without power. A backup must be an independently recoverable copy, not merely a live RAM workspace."],
          ["💾 Page 4 · Backup and recovery", "rsync copies/synchronizes files, tar archives, gzip/zstd compress, dd copies raw blocks — each a different role. Verify restoration, retention and off-site copies."],
          ["🏛️ Page 5 · Physical memory architectures", "Linear addressing, segmentation, paging and segmentation-plus-paging are translation and organization mechanisms. Modern x86-64 Linux primarily uses paging with a largely flat segmentation model."],
          ["🌐 Page 6 · UMA, NUMA, shared, distributed", "UMA and NUMA describe latency within shared-memory multiprocessors. Distributed-memory nodes have separate address spaces and communicate explicitly, usually over a network. SMP and MPP are architecture labels, not synonyms."],
          ["⚙️ Page 7 · CPU architecture and locality", "ISA names (x86-64, ARM, RISC-V) are distinct from memory architecture. Cache coherence and locality affect multicore performance. SIMD/vector is instruction/data parallelism; MIMD is multiple independent instruction streams. NUMA-aware placement helps when workloads and memory stay local."],
        ].map(([t, d]) => (
          <div key={t} className="atlas-card"><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
      <h2>🔗 Connections to the whole Atlas</h2>
      <p>Earlier hardware and chip chapters: DRAM cells, controllers, PCIe and NVMe explain the hardware behind page frames and persistent storage. Linux process chapter: text, data, BSS, heap and stack are virtual-memory mappings of a process. Containers: cgroups account and limit memory; namespaces isolate views but do not create private physical RAM. Kubernetes: scheduler requests and limits are resource policies; Linux enforces memory accounting and OOM behavior on nodes. Networks and distributed systems: a remote NUMA node is not the same as remote RAM across a network; distributed memory requires explicit communication or specialized software.</p>
      <h2>🌐 Applied path: a web request and memory</h2>
      <p>NIC receives packet → kernel networking allocates buffers → application process accesses virtual addresses → CPU MMU translates addresses to physical frames → caches and NUMA locality affect latency → database or filesystem writes eventually persist to storage → separate backups enable recovery. These steps are a conceptual path, not a guarantee that every packet follows precisely the same allocation sequence.</p>
      <div className="atlas-panel"><p>Next: <Link href="/atlas/linux-datapaths">🐧 Interfaces, Linux datapaths →</Link></p></div>
    </div>
  );
}
