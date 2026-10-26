/** Elaboration drawings, drawn from the README and the original notes —
 *  they are teaching diagrams, NOT original notebook art. Each diagram
 *  restates a path the source notes describe, in Atlas colours. */

type Node = { emoji: string; title: string; sub: string };

const CHAINS: Record<string, { title: string; note: string; nodes: Node[] }> = {
  signal: {
    title: "🔆 Signal path: from a sensor reading to an action",
    note: "Elaboration diagram · restates the Ch 08 path in the fullest Atlas edition.",
    nodes: [
      { emoji: "🌡️", title: "Sensor", sub: "Physical quantity" },
      { emoji: "〰️", title: "Condition", sub: "Amplify · filter" },
      { emoji: "🔢", title: "ADC", sub: "Analog → digital" },
      { emoji: "🧠", title: "MCU / SoC", sub: "Decide · interrupt" },
      { emoji: "💻", title: "Driver + app", sub: "Kernel → user space" },
      { emoji: "⚙️", title: "Actuator", sub: "DAC / PWM out" },
    ],
  },
  packet: {
    title: "📦 Packet journey: laptop to application Pod",
    note: "Elaboration diagram · restates the B011 / B012 packet trace, with its limits kept in the text.",
    nodes: [
      { emoji: "💻", title: "Laptop", sub: "App → socket" },
      { emoji: "📶", title: "Access point", sub: "Wi-Fi → wired" },
      { emoji: "🔀", title: "Switch", sub: "Local forwarding" },
      { emoji: "🛡️", title: "Firewall", sub: "Policy check" },
      { emoji: "⚖️", title: "Load balancer", sub: "Pick a backend" },
      { emoji: "🚪", title: "Ingress", sub: "Route by host/path" },
      { emoji: "🎯", title: "Service", sub: "Stable endpoint" },
      { emoji: "📦", title: "Pod", sub: "Container answers" },
    ],
  },
  nic: {
    title: "🔌 NIC path: application to wire",
    note: "Elaboration diagram · restates the Ch 03 NIC page: interfaces → drivers → kernel stack → net device.",
    nodes: [
      { emoji: "💻", title: "Application", sub: "Sends bytes" },
      { emoji: "🧱", title: "Kernel stack", sub: "TCP / IP" },
      { emoji: "🔧", title: "Driver", sub: "PCI device driver" },
      { emoji: "🔌", title: "NIC", sub: "Frames on the wire" },
      { emoji: "🌐", title: "Network", sub: "Switches · routers" },
    ],
  },
};

const PYRAMID: { title: string; sub: string; width: string; bg: string }[] = [
  { title: "⚡ Registers", sub: "Fastest · smallest · inside the CPU", width: "42%", bg: "#e7eee6" },
  { title: "🧠 L1 / L2 / L3 cache", sub: "SRAM · nanoseconds", width: "58%", bg: "#d8ebe2" },
  { title: "💾 DRAM · main memory", sub: "Gigabytes · ~100 ns · volatile", width: "74%", bg: "#cfe8f5" },
  { title: "💿 NVMe SSD", sub: "Terabytes · microseconds · persistent", width: "88%", bg: "#f7ead0" },
  { title: "📼 Disk / tape archive", sub: "Slowest · cheapest per byte · cold storage", width: "100%", bg: "#eee8dc" },
];

export default function AtlasDiagram({ variant }: { variant: "signal" | "packet" | "nic" | "memory" }) {
  if (variant === "memory") {
    return (
      <div className="atlas-diagram">
        <h3>🗼 Memory hierarchy: fast and small at the top, slow and vast at the bottom</h3>
        <p>Elaboration diagram · restates the B015 hierarchy. Speed and size trade off at every step — that trade-off is the whole point.</p>
        <div className="atlas-pyramid">
          {PYRAMID.map((row) => (
            <div key={row.title} className="atlas-pyramid-row" style={{ width: row.width, background: row.bg }}>
              {row.title}<small>{row.sub}</small>
            </div>
          ))}
        </div>
      </div>
    );
  }
  const chain = CHAINS[variant];
  return (
    <div className="atlas-diagram">
      <h3>{chain.title}</h3>
      <p>{chain.note}</p>
      <div className="atlas-chain">
        {chain.nodes.map((node, i) => (
          <span key={node.title} style={{ display: "contents" }}>
            <span className="atlas-chain-node">
              <span className="atlas-emblem">{node.emoji}</span>
              <b>{node.title}</b><span>{node.sub}</span>
            </span>
            {i < chain.nodes.length - 1 && <span className="atlas-chain-arrow">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
