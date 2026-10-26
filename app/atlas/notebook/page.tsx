import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas notebook, pages 01–20 — Atlas",
  description:
    "The 20 original handwritten notebook pages, categorized by chapter with deep explanations taken from the pages themselves as reference. Originals untouched in the Atlas folder.",
};

interface Page { n: number; caption: string }
interface Cat { name: string; pages: Page[]; deep: string }

const CATS: Cat[] = [
  { name: "Chapter 01 — Why communication networks emerged", deep: "The notebook starts from a single economic claim: business is exchange, of money and of information, and exchange cannot outrun communication. Before networks, trade moved at the speed of a person, a letter, or a ship. The telegraph and then the telephone cut that delay from days to minutes, and that change is what made modern finance possible: banks and stock markets live on instant prices, and without instant communication, exchange and trading are impossible. Page 01 traces the ladder from oral language and written signals, through fire beacons and drums as mechanical signalling, to the telegraph as the first real data network. Pages 02 and 03 then turn that need into a structure: owners, a board, an executive team and departments, and the speed of business becoming the speed of trading, which is the speed of exchanging information.", pages: [
    { n: 1, caption: "Silicon to layered systems; before networks: oral language, written signals, fire beacons and drums, then the electronic telegraph. Why needed: speed of trade, telegraph and phone cutting days to minutes, finance on instant prices." },
    { n: 2, caption: "Business as exchange of money: visionary, profit-seeking owners, shareholders, board, executive team and C-suite, departments, and the rules of the internet, including market rules, antitrust and privacy. Also Ch02: pages 02–03 are genuinely dual Ch01+Ch02." },
    { n: 3, caption: "Communication to business: speed of business is trading, speed of trading is exchanging information. Regulation, coordination, trust and security, ICANN, and regional coordination appear as the governance layer of that exchange. Also Ch02 (dual chapter); draft pair with page 04." },
  ]},
  { name: "Chapter 02 — Who builds and governs networks", deep: "Governance is the notebook's longest thread, and it is drawn as a hierarchy, not a list. At the top sit global oversight bodies, then international standard bodies such as ISO, IEC, IEEE, IETF and ICANN with the regional registries, then regional regulators, then national enforcement and certification, then industry and sector standards for automotive, electronics, health, cloud and food, and finally the market flow itself: suppliers, vendors, manufacturers, distributors, retailers and consumers. The same hierarchy is repeated for the telephone world: the FCC as the 1934 telecom regulator, spectrum, radio, TV, satellite, wireline and broadband, and for the internet world: DNS, top-level domains, IP allocation, and the directory that replaced the phone book. Market rules sit alongside it: antitrust, net neutrality, privacy law such as GDPR, and the question of who may do what on a device. A government network dealer page shows the other side of the same coin: governments buy routers, switches, firewalls and surveillance gear through manufacturers and vendors, deploy networks through agencies, and regulate the private networks that businesses create. The notebook's four parallel flows tie it together: communication and trade move together, spectrum is technology plus money plus business, cross-flows run physical, informational, financial and rule-based, technology integration maps IoT, blockchain, AI and APIs across those flows, and abstraction carries goods all the way to a full value chain.", pages: [
    { n: 4, caption: "Phone book to exchange of information: ICANN, IP allocation through regional registries, government authority, FCC, identity, DNS, TLDs, TCP/IP and IETF. Draft pair with page 03; small linking words illegible." },
    { n: 5, caption: "Market rules: antitrust, net neutrality, what government can do, the government telephone directory, standards from IETF, IEEE and 3GPP, privacy law, and replacing the phone directory with DNS. Multi-chapter page; second regulator reading “TRAI” is plausible, not certain." },
    { n: 6, caption: "DNS owners and the global web: top-level domains, shareholders, board and executives, the 1934 FCC telecom regulator, spectrum, radio, TV, satellite and broadband, and telecom company decisions. TLD-as-shareholders governance is an analogy, not literal DNS fact." },
    { n: 11, caption: "Dated 27 September: government network dealers — routers, switches, firewalls and radio gear, manufacturers and vendors, government contracts, agencies deploying networks, and private networks reported to government under regulation. Also Ch07." },
    { n: 12, caption: "Universal product, business, network and standards: four parallel flows, spectrum as technology plus money plus business, cross-flows, technology integration into IoT, blockchain, AI and APIs, and abstraction to a full value chain. Multi-chapter page." },
    { n: 13, caption: "Government layer, to control the public: a unifying layer across all flows, global oversight, international bodies, regional regulation, and industry sectors from automotive and electronics to health, cloud and food. Draft pair with page 14 (draft); central box label “ICR” uncertain." },
    { n: 14, caption: "Global oversight in full: UN agencies, international standard bodies, regional regulation, national enforcement and certification, industry standards, and the market flow from suppliers to consumers. Draft pair with page 13 (finished version); also Ch07 and multi-chapter." },
  ]},
  { name: "Chapter 03 — Silicon to a working network interface", deep: "Chapter 03 follows one piece of hardware from the foundry to a working connection. Silicon vendors — Intel, Broadcom and Nvidia in the notes — supply the chips. OEMs such as Dell, HPE, Lenovo and Cisco assemble them into machines. Clouds, telcos and government research labs buy and run them. A network interface card sits at the boundary: a PCI device that a driver, customised in the kernel, turns into a network device that user tools and workloads can use, with TCP/IP on top. Out-of-band management runs alongside it: BMC, IPMI and iLO, with web servers, DNS and APIs above, and process and system state below. The notebook is careful about who controls what: hardware is controlled by software, software is controlled by whoever writes and deploys it, and the same NIC that carries a customer's traffic also carries the management path that can restart the machine. That is why the chapter treats vendors, OEMs, clouds, telcos and governments as one supply chain, not separate industries.", pages: [
    { n: 7, caption: "Product development and the middle: C-suite, administration, kernel work, engineering, operations and marketing, supervisors and team leads, employees and workers, customers, vendors and silicon. Also Ch05; handwritten personal names on this page are never reproduced." },
    { n: 8, caption: "Vendors supplying hardware controlled by software: cloud, OEMs, telcos, TCP/IP connections, assembled devices with NICs integrated, out-of-band management, switches, web servers, DNS and APIs. Draft pair with page 09; device-identifier string never reproduced." },
    { n: 9, caption: "Silicon product to global business supply: Intel, Broadcom and Nvidia as suppliers, end customers, cloud, OEMs, telcos, government research, TCP/IP, IoT and virtualisation, and the NIC sold to customers as a PCI device with a kernel driver. Draft pair with page 08." },
    { n: 10, caption: "NIC path diagram: end customers, interfaces, drivers, kernel stack, net device, TCP/IP, out-of-band and BMC, with core business, shared components and hardware below." },
  ]},
  { name: "Chapter 04 — From telecommunications to modern interfaces", deep: "Interfaces are the notebook's history of how a person meets a machine. Telegraph networks, 1850 to 1900, used Morse keys, teletype and rotary dials, with public and private switchboards, and an architecture that was hardware only. Mainframes and early computing used punch cards and command lines, with terminals as the client. The PC and client-server era brought graphical desktops, X11 and Windows toolkits, event-driven input from mouse and keyboard, multitasking, and vendor lock-in. The web era, 1990 to 2005, brought browsers and interactive sites, W3C standards for HTML, CSS and JavaScript, and client-server architecture that was cross-platform and scriptable. Mobile and cloud brought apps and software as a service, public frameworks such as Bootstrap and Angular, private kits for iOS and Android, component-based front ends, REST, GraphQL and gRPC, and cloud-native back ends. The 5G and modern era, from the 2020s, brings real-time dashboards, XR and AI interfaces, public frameworks from React and Next.js to Carbon Design, mobile frameworks from Flutter to React Native, and attributes the notebook stresses: low latency, AI and machine learning, and multi-device use. Page 18 closes the loop by pairing each interface era with its business model: telegraph by usage and duration, mainframes by accounting and chargeback, client-server by software licence, web services by API and subscription, mobile and cloud by software as a service and usage, and AI by API token.", pages: [
    { n: 15, caption: "UI frameworks evolution: telegraph networks 1850–1900 with Morse keys and switchboards, then mainframe and early computing with punch cards, command lines and terminals." },
    { n: 16, caption: "PC and client-server era: graphical desktops, X11 and Windows toolkits, monolithic UI to client-server, event-driven and multitasking, vendor lock-in. Then the internet and web era 1990–2005: browsers, W3C HTML/CSS/JS, client-server, cross-platform scripting." },
    { n: 17, caption: "Mobile and cloud: apps and software as a service, Bootstrap and Angular, iOS and Android kits, component-based front ends, REST/GraphQL/gRPC, cloud-native back ends, responsive design. Then 5G and modern, 2020s to now: real-time dashboards, XR, AI interfaces, React, Next.js, Carbon, Flutter, SwiftUI, low latency and multi-device. Era count differs from page 18 (5 vs 6); “Carbon Design” reading partial." },
    { n: 18, caption: "Eras summary: telegraph to government PTT, mainframes to corporate IT, client-server to LAN administration, web to ICANN and IETF bodies, mobile and cloud to app stores, 5G and AI to AI pipelines and edge orchestration — each with its business model, from usage to API token. Also Ch05; era count differs from page 17 (6 vs 5)." },
  ]},
  { name: "Chapter 05 — Business control and technology leadership (page 20, corrected)", deep: "Leadership is drawn as three eras, not as a personality trait. The telegraph era is connectivity itself: the core business is establishing communication protocols, with an organisational structure, a technology strategy and a leadership mindset built around that single function. The distribution era, 1980 to 1990, is managing decentralisation: a centralised team distributing into heterogeneous systems, with interoperability protocols as the work, and adaptability — including work-life balance — as the leadership question. The internet, web and cloud era, from 2000, is building hypergrowth. The correction matters: the prototype assigned this page to chapter 06, but the page image itself is headed centralised tech leadership, and its three eras are leadership eras, so it belongs here.", pages: [
    { n: 20, caption: "Centralised tech leadership: telegraph era connectivity and protocol establishment, distribution era managing decentralisation with interoperability protocols, internet/web/cloud era building hypergrowth. “Adaptability = work-life balance” annotation sense unclear." },
  ]},
  { name: "Chapter 06 — Project scheduling and resource allocation (page 19, corrected)", deep: "Scheduling is the notebook's most portable idea, and it is stated as a formula: tasks plus resources make a scheduled project. Electricity makes it concrete: generation flows to consumers, and an independent system operator schedules that flow. Networking is the same shape: routing schedules packets, and an internet provider schedules bandwidth. Business is the same shape again: tasks are jobs, contracts and transactions, resources are money, labour, raw materials and compute, and a scheduler is the entity that allocates those resources fairly and efficiently. Who schedules depends on the domain: system operators for electricity, providers and registries for networks, payment networks for finance, and project, corporate and government schedulers for business projects. The correction matters: the prototype assigned this page to chapter 05, but the page image itself is headed project scheduler and works through that formula, so it belongs here.", pages: [
    { n: 19, caption: "Project scheduler: tasks plus resources make a scheduled project, electricity generation to flow, networking routing to packets, ISP scheduling of bandwidth, and who schedules in each domain." },
  ]},
];

export default function AtlasNotebook() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Sequence · Notebook 1 of 2 · Rich cards, categorized</p>
      <h1 className="atlas-hero">Notebook pages 01–20</h1>
      <p className="atlas-lead">
        The original 2025 systems notebook, categorized by chapter, with a deep
        explanation for each category taken from the pages themselves as
        reference. The original images in the Atlas folder were not touched:
        the cards below use downscaled reference copies only, and no page was
        re-encoded, cropped or overwritten in the original folder. Two
        corrections from viewing the pages: page 19 is scheduling and page 20
        is leadership, reversing the prototype assignment.
      </p>
      <div className="atlas-panel">
        <span className="atlas-tag">Categorization notes · re-verified from the pages themselves</span>
        <p style={{ margin: "6px 0 0" }}>
          Chapter assignments below are <b>provisional</b> — the README states
          there is no exact notebook page-to-chat mapping. Pages 02–03 are
          genuinely dual Ch01+Ch02, and pages 05, 07, 12, 14 and 18 are
          multi-chapter: each card appears once under its primary chapter,
          with cross-chapter notes on the card. <b>Draft pairs, counted
          once:</b> 03↔04 (ICANN/RIR/DNS), 08↔09 (vendor chain), 13↔14
          (governance hierarchy — 13 draft, 14 finished). Page order is
          thematic, not chronological (p01 dated 29 Sep 2025, p11 dated
          27 Sep). Era numbering differs: p17 has 5 eras, p18 has 6. Ch07
          draws on pp11–12 (+14), shown above under Ch02. There is{" "}
          <b>no notebook support for Ch08–11</b> beyond vendor names and the
          NIC — those chapters cite the HTML editions, never this notebook.
          Uncertain readings stay flagged on the cards. Privacy: p07&apos;s
          handwritten personal names and p08&apos;s device-identifier string
          are never reproduced.
        </p>
      </div>
      {CATS.map((cat) => (
        <section key={cat.name} className="atlas-cat">
          <h2>{cat.name}</h2>
          <p className="atlas-deep">{cat.deep}</p>
          <div className="atlas-grid">
            {cat.pages.map((pg) => (
              <figure key={pg.n} className="atlas-card atlas-rich" style={{ margin: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/atlas/notebook/page-${String(pg.n).padStart(2, "0")}.jpg`} alt={`Notebook page ${pg.n}, reference copy`} loading="lazy" />
                <div className="atlas-rich-body">
                  <span className="atlas-tag original">Original · reference copy · Page {String(pg.n).padStart(2, "0")}</span>
                  <p style={{ margin: "8px 0 0", color: "var(--atlas-muted)", fontSize: 14 }}>{pg.caption}</p>
                </div>
              </figure>
            ))}
          </div>
        </section>
      ))}
      <div className="atlas-panel">
        <p>
          Next in sequence: <Link href="/atlas/study-notes">Study notes, 129 photos →</Link>
        </p>
      </div>
    </div>
  );
}
