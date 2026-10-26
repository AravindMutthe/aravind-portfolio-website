/** Blog posts from Aravind's notes repo (AravindMutthe/Aravind-Notes).
 *  Each entry maps to a markdown file in content/notes/. */

export interface BlogPost {
  slug: string;
  title: string;
  desc: string;
  category: string;
  file: string;
  readTime: string;
}

export const NOTE_POSTS: BlogPost[] = [
  {
    slug: "linux-commands",
    title: "Linux Commands — The Complete Reference",
    desc: "Internal vs external commands, file operations, process management, networking, and system administration — every command a DevOps engineer uses daily.",
    category: "Linux",
    file: "Linux-Commands.md",
    readTime: "12 min",
  },
  {
    slug: "linux-file-system",
    title: "Linux File System — Deep Dive",
    desc: "The Filesystem Hierarchy Standard explained: what lives in /etc, /var, /proc, /sys — and why it matters for troubleshooting.",
    category: "Linux",
    file: "Linux-File-System.md",
    readTime: "15 min",
  },
  {
    slug: "memory-management",
    title: "Linux Memory Management",
    desc: "How Linux manages RAM: paging, swap, buffers vs cache, and the commands to see what's actually happening.",
    category: "Linux",
    file: "Memory-Management.md",
    readTime: "6 min",
  },
  {
    slug: "container-images",
    title: "Container Images — How Docker Images Work",
    desc: "Layers, registries, multi-stage builds, and image optimization — what's actually inside a container image.",
    category: "Docker",
    file: "Container-Images.md",
    readTime: "8 min",
  },
  {
    slug: "docker-kubernetes-openshift",
    title: "Docker, Kubernetes & OpenShift Compared",
    desc: "When to use what: the practical differences between Docker, K8s, and OpenShift for real workloads.",
    category: "Kubernetes",
    file: "docker-kub-openshift.md",
    readTime: "8 min",
  },
  {
    slug: "openshift-kubernetes",
    title: "OpenShift & Kubernetes Notes",
    desc: "Deployments, services, routes, and the OpenShift extras on top of vanilla Kubernetes.",
    category: "Kubernetes",
    file: "Openshift-Kubernetees.md",
    readTime: "10 min",
  },
  {
    slug: "git-github-commands",
    title: "Git & GitHub Commands Reference",
    desc: "The commands you actually need: branching, rebasing, stashing, and fixing mistakes without panic.",
    category: "Git",
    file: "Git-Github-commands.md",
    readTime: "7 min",
  },
  {
    slug: "git-github-setup",
    title: "Git & GitHub Setup — Step by Step",
    desc: "From zero to pushing: installing Git, SSH keys, and connecting to GitHub the right way.",
    category: "Git",
    file: "Git-and-GitHubsetup_Process.md",
    readTime: "8 min",
  },
  {
    slug: "oops-java",
    title: "OOP in Java — Complete Notes",
    desc: "Classes, inheritance, polymorphism, abstraction, encapsulation — with examples that actually make sense.",
    category: "Java",
    file: "oops-java.md",
    readTime: "18 min",
  },
  {
    slug: "oops-python",
    title: "OOP in Python — Complete Notes",
    desc: "Python's take on objects: classes, dunder methods, inheritance, and when OOP helps vs hurts.",
    category: "Python",
    file: "oops-python.md",
    readTime: "16 min",
  },
  {
    slug: "python-syntax",
    title: "Python Syntax Quick Reference",
    desc: "The syntax you look up every time — condensed to one page.",
    category: "Python",
    file: "python-syntax.md",
    readTime: "4 min",
  },
  {
    slug: "python-packages",
    title: "Python Packages, Modules & Libraries",
    desc: "What's the difference, how imports actually work, and how to structure your own packages.",
    category: "Python",
    file: "package-module-libray.md",
    readTime: "7 min",
  },
  {
    slug: "java-classes-objects",
    title: "Java Classes, Data Members & Member Functions",
    desc: "How Java organizes code: classes, fields, methods, and access control.",
    category: "Java",
    file: "class-dm+mf.md",
    readTime: "4 min",
  },
  {
    slug: "atlas-overview",
    title: "Systems Knowledge Atlas — Overview",
    desc: "A research notebook turned into a curriculum: how people, businesses and machines coordinate at a distance, and what changes when the medium changes.",
    category: "Atlas",
    file: "Atlas-Overview.md",
    readTime: "4 min",
  },
  {
    slug: "atlas-chapter-01-communication-networks",
    title: "Atlas Chapter 01 — Why Communication Networks Emerged",
    desc: "Trade, finance, telegraph and telephone: speed of trade, business as exchange of information, and the era chain behind it.",
    category: "Atlas",
    file: "Atlas-Chapter-01-Communication-Networks.md",
    readTime: "3 min",
  },
  {
    slug: "atlas-chapter-02-institutions-governance",
    title: "Atlas Chapter 02 — Who Builds and Governs Networks",
    desc: "Standards bodies, regulators, vendors and customers, from telegraph companies to ISPs, cloud providers and hyperscalers.",
    category: "Atlas",
    file: "Atlas-Chapter-02-Institutions-Governance.md",
    readTime: "3 min",
  },
  {
    slug: "atlas-chapter-03-silicon-nic",
    title: "Atlas Chapter 03 — Silicon to a Working Network Interface",
    desc: "NIC, PCIe, drivers, kernel stack, TCP/IP, plus semiconductor notes and the Linux implementation map.",
    category: "Atlas",
    file: "Atlas-Chapter-03-Silicon-NIC.md",
    readTime: "3 min",
  },
  {
    slug: "atlas-chapter-04-interfaces",
    title: "Atlas Chapter 04 — From Telecommunications to Modern Interfaces",
    desc: "Wires and paper slips to switchboards, terminals, web forms, SaaS dashboards and AI virtual front desks, and how identity evolved with them.",
    category: "Atlas",
    file: "Atlas-Chapter-04-Interfaces.md",
    readTime: "3 min",
  },
  {
    slug: "atlas-chapter-05-leadership",
    title: "Atlas Chapter 05 — Business Control and Technology Leadership",
    desc: "Centralized, distributed and coordinated control, and who decides, who is accountable, and who can audit the decision.",
    category: "Atlas",
    file: "Atlas-Chapter-05-Leadership.md",
    readTime: "3 min",
  },
  {
    slug: "atlas-chapter-06-scheduling",
    title: "Atlas Chapter 06 — Project Scheduling and Resource Allocation",
    desc: "Tasks plus resources make a schedule, in electricity, networking, business and operating systems alike.",
    category: "Atlas",
    file: "Atlas-Chapter-06-Scheduling.md",
    readTime: "3 min",
  },
  {
    slug: "atlas-chapter-07-government-business-networks",
    title: "Atlas Chapter 07 — Government, Business and Technical Networks",
    desc: "Three views of the same systems, the network family tree, and why modular versus monolithic is a design choice, not an epoch.",
    category: "Atlas",
    file: "Atlas-Chapter-07-Government-Business-Networks.md",
    readTime: "3 min",
  },
  {
    slug: "atlas-era-timeline",
    title: "Atlas Notes — Era Timeline and Research Threads",
    desc: "The twelve era research threads, September to November 2025, the cross-era questions, and the terminology corrections.",
    category: "Atlas",
    file: "Atlas-Era-Timeline.md",
    readTime: "4 min",
  },
  {
    slug: "atlas-evidence-register",
    title: "Atlas Notes — Dated Evidence Register, August to November 2025",
    desc: "The deduplicated evidence list behind the Atlas: project records, additional dated retrieval, recovered projects and the verification ledger.",
    category: "Atlas",
    file: "Atlas-Evidence-Register.md",
    readTime: "6 min",
  },
  {
    slug: "atlas-engineering-notes",
    title: "Atlas Notes — Engineering Notes from the Atlas",
    desc: "Carbon dashboard migration, monorepo and Git workflows, billing API contracts, Linux remote access, and the web engineering roadmap.",
    category: "Atlas",
    file: "Atlas-Engineering-Notes.md",
    readTime: "4 min",
  },
  {
    slug: "atlas-methods-safeguards",
    title: "Atlas Notes — Research Methods, Ontology and Safeguards",
    desc: "The Atlas method, the deduplication count, what was not published and why, and what a verbatim export would still need.",
    category: "Atlas",
    file: "Atlas-Methods-Safeguards.md",
    readTime: "5 min",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return NOTE_POSTS.find((p) => p.slug === slug);
}
