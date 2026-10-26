/** Atlas endpoint sections. Separate from the portfolio blog: these pages
 *  render under /atlas with the Atlas notes style, not the blog style.
 *  Each entry maps to a markdown file already in content/notes/. */

export interface AtlasSection {
  slug: string;
  title: string;
  desc: string;
  kind: "Curriculum" | "Notes" | "Source";
  file: string;
  readTime: string;
}

export const ATLAS_SECTIONS: AtlasSection[] = [
  { slug: "overview", title: "Systems Knowledge Atlas — Overview", desc: "The question, the structure, the two learning paths, and what is and is not in this endpoint.", kind: "Curriculum", file: "Atlas-Overview.md", readTime: "4 min" },
  { slug: "chapter-01-communication-networks", title: "Chapter 01 — Why Communication Networks Emerged", desc: "Trade, finance, telegraph and telephone. Source pages 01 to 03, provisionally assigned.", kind: "Curriculum", file: "Atlas-Chapter-01-Communication-Networks.md", readTime: "3 min" },
  { slug: "chapter-02-institutions-governance", title: "Chapter 02 — Who Builds and Governs Networks", desc: "Standards bodies, regulators, vendors and customers. Source pages 02, 03, 04, 05, 06, 11, 12, 13, 14.", kind: "Curriculum", file: "Atlas-Chapter-02-Institutions-Governance.md", readTime: "3 min" },
  { slug: "chapter-03-silicon-nic", title: "Chapter 03 — Silicon to a Working Network Interface", desc: "NIC, PCIe, drivers, kernel stack, TCP/IP, semiconductor notes and the Linux implementation map. Pages 07 to 10.", kind: "Curriculum", file: "Atlas-Chapter-03-Silicon-NIC.md", readTime: "3 min" },
  { slug: "chapter-04-interfaces", title: "Chapter 04 — From Telecommunications to Modern Interfaces", desc: "Wires to switchboards to terminals to web to mobile and cloud to AI interfaces. Pages 15 to 18.", kind: "Curriculum", file: "Atlas-Chapter-04-Interfaces.md", readTime: "3 min" },
  { slug: "chapter-05-leadership", title: "Chapter 05 — Business Control and Technology Leadership", desc: "Centralized, distributed and coordinated control. Page 19.", kind: "Curriculum", file: "Atlas-Chapter-05-Leadership.md", readTime: "3 min" },
  { slug: "chapter-06-scheduling", title: "Chapter 06 — Project Scheduling and Resource Allocation", desc: "Tasks plus resources make a schedule, in electricity, networking, business and operating systems. Page 20.", kind: "Curriculum", file: "Atlas-Chapter-06-Scheduling.md", readTime: "3 min" },
  { slug: "chapter-07-government-business-networks", title: "Chapter 07 — Government, Business and Technical Networks", desc: "Three views of the same systems, the network family tree, and modular versus monolithic as a design choice.", kind: "Curriculum", file: "Atlas-Chapter-07-Government-Business-Networks.md", readTime: "3 min" },
  { slug: "era-timeline", title: "Notes — Era Timeline and Research Threads", desc: "The twelve era research threads, September to November 2025, cross-era questions and terminology corrections.", kind: "Notes", file: "Atlas-Era-Timeline.md", readTime: "4 min" },
  { slug: "evidence-register", title: "Notes — Dated Evidence Register, August to November 2025", desc: "The deduplicated evidence list: project records, additional dated retrieval, recovered projects and the verification ledger.", kind: "Notes", file: "Atlas-Evidence-Register.md", readTime: "6 min" },
  { slug: "engineering-notes", title: "Notes — Engineering Notes from the Atlas", desc: "Carbon dashboard migration, monorepo and Git workflows, billing API contracts, Linux remote access, web roadmap.", kind: "Notes", file: "Atlas-Engineering-Notes.md", readTime: "4 min" },
  { slug: "methods-safeguards", title: "Notes — Research Methods, Ontology and Safeguards", desc: "The Atlas method, the deduplication count, what was not published and why, and what a verbatim export would still need.", kind: "Notes", file: "Atlas-Methods-Safeguards.md", readTime: "5 min" },
];

export function getAtlasSection(slug: string): AtlasSection | undefined {
  return ATLAS_SECTIONS.find((s) => s.slug === slug);
}
