import type { Metadata } from "next";
import Link from "next/link";
import AtlasTabs from "@/components/AtlasTabs";
import AtlasFlow from "@/components/AtlasFlow";
import AtlasDiagram from "@/components/AtlasDiagram";

export const metadata: Metadata = {
  title: "⚡ Semiconductors — Atlas",
  description:
    "Chapters 08–11 of the fullest Atlas edition: electric signals to silicon, processing engines, memory hierarchy, embedded to cloud, and source-by-source semiconductor notes.",
};

export default function Semiconductors() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Chapters 08–11 · From the fullest Atlas edition</p>
      <h1 className="atlas-hero">⚡ Semiconductors</h1>
      <p className="atlas-lead">
        Read the signal path before the chip catalog: electricity → analog
        conditioning → digital logic → state → conversion → computation and I/O.
        These sections were in the large Atlas editions but not yet in the
        earlier Atlas posts. They are integrated here, with the prototype's own
        labels: original, editorial, AI explanation and verify.
      </p>

      <AtlasTabs tabs={[
        { label: "✍️ Original", content: <p>The source notes cover circuits, processing, memory and devices, page by page, with technical expansions and qualifications attached to each source page. The handwritten pages themselves are the authority; everything below is a structured reading of them, not a verbatim transcription.</p> },
        { label: "🧭 Editorial", content: <p>Four circuit families, five device classes, and the memory hierarchy below are the editorial synthesis. They organize the notes so a reader can move from a sensor reading to a software event, and from a file on an NVMe SSD to a CPU instruction, without confusing a function with a package.</p> },
        { label: "✨ AI explanations", content: <p>Worked paths: sensor → transducer → amplifier/filter → ADC → MCU/SoC peripheral → interrupt or DMA → driver → application → decision → DAC/PWM/actuator. And: application → syscall/VFS → filesystem → block layer → NVMe driver → PCIe → SSD controller → NAND flash, returning to DRAM by DMA.</p> },
        { label: "✅ Verify", content: <p>Corrections kept separate: a memory controller manages DRAM, a storage controller manages device commands and flash translation, a cache controller maintains cache state — the chipset does not universally control all traffic in modern SoCs. PCIe is an interconnect, NVMe is a storage protocol over PCIe, USB is a peripheral interconnect — interfaces are not devices.</p> },
      ]} />

      <AtlasDiagram variant="signal" />

      <h2>⚡ Chapter 08 · From electric signals to functional silicon</h2>
      <AtlasFlow steps={[
        { emoji: "〰️", title: "Analog", text: "Continuous-valued voltages and currents: amplifiers, oscillators, filters and sensor conditioning. Real analog systems have noise, bandwidth and nonlinearity." },
        { emoji: "🔢", title: "Digital", text: "Logic levels interpreted as discrete states. Combinational circuits produce outputs from current inputs; sequential circuits hold state with latches, flip-flops and registers." },
        { emoji: "🔀", title: "Mixed signal", text: "ADC turns sampled analog input into digital codes; DAC reconstructs an analog output. Clocking, reference voltage and quantization matter." },
        { emoji: "🔌", title: "Power electronics", text: "Switching regulators, MOSFET power stages and power-distribution networks convert, control and protect electrical energy." },
      ]} />
      <p>Function versus packaging: CPU, memory, radio, PMIC, Ethernet PHY and FPGA describe functions or implementation styles. IC, package, module, PCB and SoC describe physical integration levels. A SoC can combine CPU cores, GPU, memory controllers and peripherals, but external DRAM, storage and power components may still be required.</p>

      <h2>🧠 Chapter 09 · Processing engines, instruction sets and configurable logic</h2>
      <div className="atlas-grid">
        {[
          ["🖥️ CPU", "General-purpose instruction execution, OS and applications. Not always fastest for massively parallel work."],
          ["🎮 GPU", "Highly parallel graphics and compute. Host/device transfers and divergent workloads can limit gains."],
          ["📟 MCU", "Embedded control with CPU, on-chip memory and peripherals. May run bare metal or an RTOS; not synonymous with an ARM core."],
          ["📡 DSP", "Signal processing and arithmetic pipelines, optimized for certain numerical patterns."],
          ["🤖 NPU / TPU", "Machine-learning tensor operations. Support depends on model operators, precision and toolchain."],
          ["🔧 ASIC", "Purpose-built circuitry for a defined workload. Functionality largely fixed after fabrication."],
          ["🧩 FPGA", "Reconfigurable digital logic fabric. Design complexity and resource/power constraints."],
          ["💠 SoC", "Integration of multiple functions on one chip. Not a processor instruction-set category."],
        ].map(([t, d]) => (
          <div key={t} className="atlas-card"><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
      <p>ISA versus microarchitecture: an ISA specifies the software-visible interface — instructions, registers, exceptions and memory model. A microarchitecture is the internal implementation — pipelines, caches, predictors and execution units. RISC and CISC are broad historical traditions, not predictions of energy or speed. x86-64 is used by Intel and AMD; Arm and RISC-V are distinct ISAs. From source code to transistors: source → compiler/assembler → ISA instructions → OS loader → CPU fetch/decode/execute → cache and memory transactions → buses → devices. An FPGA instead goes RTL → synthesis → place-and-route → configuration bitstream.</p>

      <h2>🗃️ Chapter 10 · Memory hierarchy, storage and motherboard controllers</h2>
      <div className="atlas-grid">
        {[
          ["⚡ SRAM", "Static, volatile, typically CPU caches and small on-chip buffers. No DRAM-style refresh, more area per bit."],
          ["💾 DRAM / DDR / LPDDR", "Dense, volatile working memory requiring refresh. DDR generations specify interfaces; LPDDR is power-optimized."],
          ["🚀 HBM / GDDR", "High-bandwidth memory for GPUs and accelerators. HBM stacks DRAM dies with wide interfaces; GDDR is a different high-bandwidth family."],
          ["💿 NAND / NOR / EEPROM", "Nonvolatile. NAND for dense mass storage; NOR and EEPROM often for firmware or configuration. Access granularity, endurance and erase behavior differ."],
        ].map(([t, d]) => (
          <div key={t} className="atlas-card"><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
      <p>Power path: adapter/battery → regulators and PMIC → voltage rails → processor, memory, radio and peripherals. Clock sources, PLLs and timers coordinate timing; they do not replace software scheduling.</p>

      <h2>🌐 Chapter 11 · From embedded devices to NICs, switches and cloud systems</h2>
      <div className="atlas-grid">
        {[
          ["📟 Micro / standalone", "Trackers, wearables, sensors, headphones: MCU/SoC, on-chip RAM/flash, radios, battery management, tight energy constraints."],
          ["💻 Personal computing", "Phones and laptops: CPU/SoC, DRAM, flash or SSD, GPU, wireless modem, display/audio controllers, OS services."],
          ["🏭 Edge and industrial", "Smart intersections, cameras, vehicles: real-time constraints, rugged interfaces, accelerators, watchdogs, security and safety engineering."],
          ["☁️ Cloud / data center", "Servers and accelerators: many cores, ECC DRAM, NVMe, high-speed NICs, redundancy, orchestration, observability."],
          ["🏛️ Mainframe / HPC", "Mainframes emphasize transaction integrity, virtualization and availability; supercomputers emphasize distributed numerical throughput. Not the same architecture."],
        ].map(([t, d]) => (
          <div key={t} className="atlas-card"><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
      <p>Who moves bits? Ethernet: application → TCP/UDP/IP stack → NIC driver → NIC MAC → Ethernet PHY → copper/fiber medium → switch/router. Wireless: stack → Wi-Fi/Bluetooth/cellular controller and baseband → RF front end → antenna → air interface. Fiber: a transceiver converts electrical to optical signals; switches and routers make forwarding decisions, not the optical module.</p>

      <h2>🔬 Source-by-source semiconductor notes</h2>
      <p>Fifteen annotated source pages, each with what the source page covers and a technical expansion with qualifications: interface and programmable-logic chips; classification of circuits by design; integrated circuits by function; micro and personal computing devices; edge, data center and cloud devices; mainframes and distributed supercomputing; processing, memory and wired/wireless buses; IC directory and integration placement; memory chips and hierarchy; PMIC, VRM and motherboard controllers; processing chips as system coordinators; five functional chip families; processing design philosophies; RISC, CISC, ASIC and FPGA deployment; connectivity chips and network interfaces. Plus three worked paths: from a sensor to a cloud dashboard, from an NVMe file to a CPU instruction, and inside a Linux network packet — and eight distinctions that prevent conceptual confusion, such as function versus package and interface versus device.</p>
      <div className="atlas-panel"><p>Next: <Link href="/atlas/kubernetes-networks">☸️ Physical networks, Kubernetes networking →</Link></p></div>
    </div>
  );
}
