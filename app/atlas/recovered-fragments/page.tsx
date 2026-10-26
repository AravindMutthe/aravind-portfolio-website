import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recovered dated fragments — Atlas",
  description:
    "The zip-only supplements, in chronological sequence: newly recovered fragments, additional verified history and additional history context, August to November 2025.",
};

const FRAGMENTS: { date: string; items: string[] }[] = [
  { date: "2025-08-28 — IBM AI Agents-inspired Tern redesign", items: [
    "React/Tailwind IBM AI Agents redesign, a single-file React component, with AI, governance and AI-agent platform highlights.",
    "A prior assistant diagnosed extra closing div tags in the footer and provided a correction.",
  ]},
  { date: "2025-09-06 — WB-431, IBM Carbon dashboard migration", items: [
    "Requirement: transform My Tern Dashboard to IBM Carbon, light theme, Carbon tables, buttons, links and grid, responsive, preserving Tern branding, data logic, sorting, handlers and navigation.",
    "Scope and build steps recorded: Carbon Grid, DataTable, Button and Link, yarn build:common, target files in packages/web, commit message for WB-431.",
  ]},
  { date: "2025-09-07 — Git, development environment and Figma-to-Carbon", items: [
    "Tern Firebase Studio AI Website, Next.js, Node v22.19.0, dev ports recorded.",
    "Cursor Agent with Carbon rules, Figma JPEG plus exported CSS and React/JS as migration inputs, clone and upstream sync, branch feature/WB-431-my-tern-carbon.",
  ]},
  { date: "2025-09-25 — WB-416, pricing architecture", items: [
    "Jira WB-416, branch bugfix/WB-416-monthly-pricing-toggle.",
    "Pricing API by interval month|year, monthly and yearly price IDs, controlled Carbon toggle, PricingTable refetch per interval, API 200 acceptance for both cycles.",
  ]},
  { date: "2025-09-26 — Research scope and ownership", items: [
    "Pre-telegraph history, packet switching (Baran/Davies), DARPA to ARPANET to TCP/IP, DOE ESnet, CERN/WLCG, public-private partnerships, tenders and the NIC ecosystem.",
    "Assistant drafts and mappings: ARPANET/TCP-IP 1969–1983, ESnet from 1986, InfiniBand/RoCE, value chain, procurement lifecycle, KPIs and lab test plan; NSFNET, ESnet, CERN/WLCG, NIC suppliers, Linux drivers and OEM/ODM/cloud ecosystem.",
    "Communications history: packet switching, 1969 ARPANET, January 1983 TCP/IP transition, pre-agency telegraph, telephone and radio, Army Signal Corps, GPO and ITU, terminal tools.",
    "Network ownership: ARPANET research governance contrasted with corporate/cloud ownership, IETF, IEEE, 3GPP, ICANN, privacy and cybersecurity regulation.",
    "User scope also covered DARPA to ARPANET, standards, governance, business networks, semiconductor supply chain, Linux, Carbon, Tern and GradeSpot.",
  ]},
  { date: "2025-09-27 — NIC drivers and public-network architectures", items: [
    "NIC drivers (ice, ixgbe, mlx5, ena), hyperscalers, OEMs, telcos, research labs and government, with a stock-market analogy.",
    "Public-network architectures, smallest to largest, across telegraph/telephone, early computing, Internet, mobile, cloud and satellite eras.",
  ]},
  { date: "2025-09-28 — Ownership history", items: [
    "Western Union/AT&T, ARPANET, ISPs, hyperscalers and AI-market ownership; equity and IP depend on contracts.",
    "Telegraph business-network attributes: Morse code, wires, operators, leased circuits, office codes, privacy and Western Union. The historical first-network framing requires qualification.",
  ]},
  { date: "2025-09-29 — Master structure and architecture comparison", items: [
    "Constraint preserved: all historical network eras from telegraph to AI, plus nuclear and autonomous systems evaluation.",
    "Master structure: telegraph; telephone/radio; mainframe; PC/client-server; Internet/Web; cloud/mobile; AI/Zero Trust; speculative quantum/BCI, with business, finance, governance and hardware/software dimensions.",
    "Architecture comparison across telegraph, telephone/radio, mainframe/ARPANET, PC/client-server, Internet/BGP, cloud/mobile, AI/Zero Trust and possible future networks.",
    "Ancient agrarian through medieval, merchant, chartered-company, industrial, telegraph, telephone, postwar, PC, Internet and cloud/AI eras, with employer, employee and finance fields.",
  ]},
  { date: "2025-09-30 — Kernel architectures", items: [
    "Bare-metal/batch, monolithic UNIX/Linux, microkernel Mach/QNX/Minix, hybrid Windows NT/XNU, unikernels and exokernels.",
  ]},
  { date: "2025-10-02 — Analogies, family tree and Linux paths", items: [
    "Business-to-kernel analogies involving network namespaces, NICs, veth, routing, qdisc, cgroups and LSM/AppArmor. Analogies only, not identities.",
    "Network-family-tree artifact: telegraph, telephone, radio, TV, ARPANET, Internet, mobile, satellite, cloud, social media, IoT, AI/6G/quantum.",
    "Linux paths recorded: drivers/tty, net/ipv4, net/ipv6, drivers/net/wwan, kernel/bpf, drivers/accel, with era mapping.",
  ]},
  { date: "2025-10-03 — Unified scope", items: [
    "Chronological README from pre-telegraph through industrial/electricity, ARPANET, Linux, 4G/5G, cloud, AI and quantum, with governance, IPC, NIC, finance and trade.",
  ]},
  { date: "2025-10-05 — Kernel network research", items: [
    "Kernel-level network design, private cooperative networks, government communication paths, telegraph-to-TCP/IP and storage networks.",
    "Proposed title recorded: kernel-level thinking and network design expertise for national infrastructure and AI communication systems.",
  ]},
  { date: "2025-10-14 — Devices and case study", items: [
    "Exact devices and technologies from pre-telegraph communications through AI networks.",
    "Global business communication case study: devices, systems, companies, affiliated networks and modern descendants.",
  ]},
  { date: "2025-10-31 — How Internet Works origins", items: [
    "Research foundation How Internet Works, studied computing, telecom and OS layers, research started September 2025.",
    "One bachelor's notebook; networks learned over two months, computer technologies studied since 2015.",
  ]},
  { date: "2025-11-02–03 — Research scope and methods", items: [
    "Independent How the Internet Works research began September 2025, covering ARPANET to AI Internet, devices, supply chains, operating systems, users and kernel subsystems.",
    "Ongoing deep evaluation of Internet architecture, kernel subsystems, networks and cross-industry software opportunities.",
    "Project corroboration, not transcripts: Tern Jira WB-431, WB-437 and WB-438 on 2025-09-22, and Tern onboarding/task communication on 2025-09-02–03.",
  ]},
];

export default function RecoveredFragments() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Sequence · Recovered fragments</p>
      <h1 className="atlas-hero">Recovered dated fragments</h1>
      <p className="atlas-lead">
        The supplements that existed only inside the zip archives, now in
        chronological sequence. These are retrieved fragments and summaries,
        not verbatim transcripts. Two items from the source files were
        deliberately omitted here: company-formation and immigration/visa
        material, which stays out of this endpoint on the same privacy rule as
        before. December 2025 and January 2026 remain unverified gaps.
      </p>
      {FRAGMENTS.map((f) => (
        <div key={f.date} className="atlas-panel">
          <h2 style={{ marginTop: 0 }}>{f.date}</h2>
          <ul>
            {f.items.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
      ))}
      <div className="atlas-panel">
        <p>
          End of the sequence: <Link href="/atlas/source-index">Source index →</Link>
        </p>
      </div>
    </div>
  );
}
