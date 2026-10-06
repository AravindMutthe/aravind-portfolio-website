/* Shared site data — mirrors the static site's content. */

export const WA_NUMBER = "919885189951";
export const EMAIL = "mutthe.aravind@gmail.com";
export const AXON_API = "https://axon-api-246396716039.us-central1.run.app";
export const RECAPTCHA_KEY = "6LeEg-EtAAAAAP_YI5QwbY2dYINLYWjDSxv48YoL";

export interface Product {
  name: string;
  blurb: string;
  href: string;
  external?: boolean;
  icon: string; // inline SVG path markup
}

export const PRODUCTS: Product[] = [
  {
    name: "Axon Cloud Engine",
    blurb: "Lead-capture API on GCP Cloud Run · $0 spend",
    href: "https://axon-api-246396716039.us-central1.run.app",
    external: true,
    icon: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>',
  },
  {
    name: "GradeSpot Website",
    blurb: "Next.js 15 · Tailwind · IBM Carbon build",
    href: "https://gradespot-site-axonfde.vercel.app",
    external: true,
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  },
  {
    name: "Portfolio Platform",
    blurb: "This site — static + Next.js editions",
    href: "/",
    icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
  },
  {
    name: "GradeSpot Designer",
    blurb: "Penpot plugin for GradeSpot page design",
    href: "https://aravindmutthe.github.io/aravind-mutte/penpot-gradespot-plugin/manifest.json",
    external: true,
    icon: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
  },
  {
    name: "Termux Homelab",
    blurb: "Self-hosted phone lab over Tailscale — ask me",
    href: "/contact",
    icon: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  },
];

export interface SkillTile {
  name: string;
  logo: string;
  alt: string;
}

export type SkillLevel = "Daily driver" | "Production experience" | "Working knowledge";

export interface SkillPanel {
  title: string;
  sub: string;
  /** Honest depth signal — conservative; tier down when in doubt. */
  level: SkillLevel;
  tiles?: SkillTile[];
  also?: string;
  groups?: { label: string; caption: string; tiles: SkillTile[] }[];
}

const W = (f: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}`;
const S = (s: string) => `https://cdn.simpleicons.org/${s}`;

export const SKILL_PANELS: SkillPanel[] = [
  {
    title: "Cloud Platforms", sub: "Where workloads live.",
    level: "Production experience",
    tiles: [
      { name: "AWS", logo: W("Amazon_Web_Services_Logo.svg"), alt: "AWS logo" },
      { name: "Google Cloud", logo: S("googlecloud"), alt: "Google Cloud logo" },
      { name: "Azure", logo: W("Microsoft_Azure_Logo.svg"), alt: "Microsoft Azure logo" },
      { name: "Oracle Cloud", logo: W("Oracle_logo.svg"), alt: "Oracle Cloud logo" },
    ],
  },
  {
    title: "By Service Model", sub: "The same stack, mapped to how it's delivered.",
    level: "Working knowledge",
    groups: [
      { label: "IaaS", caption: "Infrastructure as a Service", tiles: [
        { name: "AWS", logo: W("Amazon_Web_Services_Logo.svg"), alt: "AWS logo" },
        { name: "Azure", logo: W("Microsoft_Azure_Logo.svg"), alt: "Microsoft Azure logo" },
        { name: "Oracle Cloud", logo: W("Oracle_logo.svg"), alt: "Oracle Cloud logo" },
      ]},
      { label: "PaaS", caption: "Platform as a Service", tiles: [
        { name: "Vercel", logo: S("vercel"), alt: "Vercel logo" },
        { name: "Cloud Run", logo: S("googlecloud"), alt: "Google Cloud logo" },
        { name: "App Services", logo: W("Microsoft_Azure_Logo.svg"), alt: "Microsoft Azure logo" },
      ]},
      { label: "SaaS", caption: "Software as a Service", tiles: [
        { name: "Figma", logo: S("figma"), alt: "Figma logo" },
        { name: "n8n Cloud", logo: S("n8n"), alt: "n8n logo" },
        { name: "GitLab", logo: S("gitlab"), alt: "GitLab logo" },
      ]},
      { label: "BaaS", caption: "Backend as a Service", tiles: [
        { name: "Supabase", logo: S("supabase"), alt: "Supabase logo" },
        { name: "Firebase", logo: S("firebase"), alt: "Firebase logo" },
      ]},
    ],
  },
  {
    title: "Containers & Orchestration", sub: "Package once, run anywhere.",
    level: "Production experience",
    tiles: [
      { name: "Docker", logo: S("docker"), alt: "Docker logo" },
      { name: "Kubernetes", logo: S("kubernetes"), alt: "Kubernetes logo" },
      { name: "OpenShift", logo: S("redhatopenshift"), alt: "OpenShift logo" },
      { name: "Helm", logo: S("helm"), alt: "Helm logo" },
    ],
  },
  {
    title: "Infrastructure as Code", sub: "ClickOps is not a strategy.",
    level: "Daily driver",
    tiles: [
      { name: "Terraform", logo: S("terraform"), alt: "Terraform logo" },
      { name: "CloudFormation", logo: W("AWS%20Simple%20Icons%20Deployment%20Management%20AWS%20CloudFormation.svg"), alt: "CloudFormation logo" },
      { name: "ARM Templates", logo: W("Microsoft_Azure_Logo.svg"), alt: "Microsoft Azure logo" },
    ],
    also: "YAML, GitOps workflows",
  },
  {
    title: "CI / CD & Automation", sub: "Ship on every commit.",
    level: "Production experience",
    tiles: [
      { name: "Jenkins", logo: S("jenkins"), alt: "Jenkins logo" },
      { name: "GitHub Actions", logo: S("githubactions"), alt: "GitHub Actions logo" },
      { name: "GitLab CI", logo: S("gitlab"), alt: "GitLab logo" },
      { name: "Azure DevOps", logo: W("Azure%20DevOps%20icon.svg"), alt: "Azure DevOps logo" },
      { name: "Cloud Build", logo: S("googlecloud"), alt: "Google Cloud logo" },
      { name: "Travis CI", logo: S("travisci"), alt: "Travis CI logo" },
    ],
  },
  {
    title: "Languages & Runtimes", sub: "The raw materials.",
    level: "Daily driver",
    tiles: [
      { name: "Python", logo: S("python"), alt: "Python logo" },
      { name: "TypeScript", logo: S("typescript"), alt: "TypeScript logo" },
      { name: "JavaScript", logo: S("javascript"), alt: "JavaScript logo" },
      { name: "Node.js", logo: S("nodedotjs"), alt: "Node.js logo" },
      { name: "Bash", logo: S("gnubash"), alt: "Bash logo" },
    ],
    also: "Java, SQL",
  },
  {
    title: "Modern Web Stack", sub: "What I build sites and apps with.",
    level: "Production experience",
    tiles: [
      { name: "Next.js", logo: S("nextdotjs"), alt: "Next.js logo" },
      { name: "React", logo: S("react"), alt: "React logo" },
      { name: "Tailwind CSS", logo: S("tailwindcss"), alt: "Tailwind CSS logo" },
      { name: "IBM Carbon", logo: W("IBM_logo.svg"), alt: "IBM logo" },
      { name: "Framer Motion", logo: S("framer"), alt: "Framer logo" },
      { name: "Express", logo: S("express"), alt: "Express logo" },
      { name: "Zod", logo: S("zod"), alt: "Zod logo" },
      { name: "Vercel AI SDK", logo: S("vercel"), alt: "Vercel logo" },
    ],
  },
  {
    title: "Data, Messaging & Integration", sub: "Moving data between systems.",
    level: "Working knowledge",
    tiles: [
      { name: "PostgreSQL", logo: S("postgresql"), alt: "PostgreSQL logo" },
      { name: "Supabase", logo: S("supabase"), alt: "Supabase logo" },
      { name: "Kafka", logo: S("apachekafka"), alt: "Kafka logo" },
      { name: "Sterling B2B", logo: W("IBM_logo.svg"), alt: "IBM logo" },
    ],
    also: "EDI (X12 / EDIFACT), AS2, SFTP",
  },
  {
    title: "Observability & AI", sub: "See everything, predict what's next.",
    level: "Working knowledge",
    tiles: [
      { name: "Prometheus", logo: S("prometheus"), alt: "Prometheus logo" },
      { name: "Grafana", logo: S("grafana"), alt: "Grafana logo" },
      { name: "CloudWatch", logo: W("Amazon_Web_Services_Logo.svg"), alt: "AWS logo" },
      { name: "Groq", logo: W("Groq_logo.svg"), alt: "Groq logo" },
      { name: "Gemini API", logo: S("googlegemini"), alt: "Gemini logo" },
    ],
    also: "AI agents, RAG pipelines",
  },
  {
    title: "Platforms & Tooling", sub: "The daily drivers.",
    level: "Daily driver",
    tiles: [
      { name: "Linux", logo: S("linux"), alt: "Linux logo" },
      { name: "Git", logo: S("git"), alt: "Git logo" },
      { name: "Tailscale", logo: S("tailscale"), alt: "Tailscale logo" },
      { name: "Vercel", logo: S("vercel"), alt: "Vercel logo" },
      { name: "n8n", logo: S("n8n"), alt: "n8n logo" },
      { name: "Figma", logo: S("figma"), alt: "Figma logo" },
      { name: "Penpot", logo: S("penpot"), alt: "Penpot logo" },
      { name: "Uptime Kuma", logo: S("uptimekuma"), alt: "Uptime Kuma logo" },
      { name: "Caddy", logo: S("caddy"), alt: "Caddy logo" },
    ],
    also: "KVM / QEMU",
  },
];

export interface ExperienceEntry {
  title: string;
  date: string;
  org: string;
  orgLogo?: string;
  orgLogoAlt?: string;
  monogram?: string;
  proj: string;
  bullets: { html: string }[];
  stack?: SkillTile[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Independent Cloud & Full-Stack Builder",
    date: "2023 – PRESENT",
    org: "Independent · Hyderabad / Remote",
    monogram: "AM",
    proj: "GradeSpot / Axon builds — production systems, zero budget",
    bullets: [
      { html: "Architected and shipped the <strong>Axon lead-capture API</strong> on <strong>GCP Cloud Run</strong> (TypeScript, Zod validation, Cloud Build CI, Artifact Registry) — live with $0 spend and budget guardrails." },
      { html: "Built the <strong>GradeSpot frontend</strong> (Next.js 15, Tailwind CSS v4, IBM Carbon, Framer Motion) and this portfolio — deployed on Vercel and GitHub Pages with GitHub Actions CI." },
      { html: "Run a self-hosted <strong>Termux homelab</strong> over Tailscale plus OCI free-tier tooling — servers, automation, monitoring." },
    ],
    stack: [
      { name: "Next.js", logo: S("nextdotjs"), alt: "Next.js logo" },
      { name: "TypeScript", logo: S("typescript"), alt: "TypeScript logo" },
      { name: "Tailwind", logo: S("tailwindcss"), alt: "Tailwind CSS logo" },
      { name: "IBM Carbon", logo: W("IBM_logo.svg"), alt: "IBM logo" },
      { name: "GCP", logo: S("googlecloud"), alt: "Google Cloud logo" },
      { name: "Vercel", logo: S("vercel"), alt: "Vercel logo" },
      { name: "Supabase", logo: S("supabase"), alt: "Supabase logo" },
      { name: "Docker", logo: S("docker"), alt: "Docker logo" },
      { name: "GitHub Actions", logo: S("githubactions"), alt: "GitHub Actions logo" },
      { name: "Python", logo: S("python"), alt: "Python logo" },
    ],
  },
  {
    title: "Systems Engineer",
    date: "JUN 2022 – FEB 2023",
    org: "Infosys · Bangalore, India",
    orgLogo: W("Infosys%20logo.svg"),
    orgLogoAlt: "Infosys logo",
    proj: "Enterprise IT services",
    bullets: [
      { html: "Supported enterprise application environments on <strong>AWS</strong> and <strong>Linux</strong>." },
      { html: "Automated routine operations with <strong>Bash</strong> scripting; worked in <strong>Git</strong>-based workflows." },
      { html: "Served the full notice period through Feb 2023 — clean exit, relievable." },
    ],
    stack: [
      { name: "AWS", logo: W("Amazon_Web_Services_Logo.svg"), alt: "AWS logo" },
      { name: "Linux", logo: S("linux"), alt: "Linux logo" },
      { name: "Bash", logo: S("gnubash"), alt: "Bash logo" },
      { name: "Git", logo: S("git"), alt: "Git logo" },
    ],
  },
  {
    title: "Junior Developer",
    date: "2022",
    org: "HCL Technologies · India",
    orgLogo: W("HCLTech-new-logo.svg"),
    orgLogoAlt: "HCLTech logo",
    proj: "Brief tenure — offer role: Junior Developer (E1)",
    bullets: [
      { html: "Short stint at HCLTech; moved on within the probation window." },
    ],
  },
  {
    title: "Infrastructure Engineer",
    date: "MAR 2021 – MAR 2022",
    org: "PragmaEdge · Hyderabad, India",
    orgLogo: "https://pragmaedge.com/logo-hd.png",
    orgLogoAlt: "PragmaEdge logo",
    proj: "Enterprise B2B integration — IBM Sterling stack",
    bullets: [
      { html: "Trained and worked on the <strong>IBM Sterling B2B Integrator</strong> stack — business processes, trading partners, file gateways." },
      { html: "Administered <strong>Linux</strong> environments; managed secure transfers (<strong>SFTP / AS2</strong>)." },
      { html: "Automated operations tasks with <strong>Bash</strong> scripting." },
    ],
    stack: [
      { name: "Sterling B2B", logo: W("IBM_logo.svg"), alt: "IBM logo" },
      { name: "Linux", logo: S("linux"), alt: "Linux logo" },
      { name: "Bash", logo: S("gnubash"), alt: "Bash logo" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials — render real quotes here once available.              */
/* TODO: replace the placeholder below with genuine quotes: ask former */
/* colleagues, mentors, or clients for a 1–2 sentence recommendation. */
/* NEVER invent a person's name or quote.                              */
/* ------------------------------------------------------------------ */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** set true only for real, permission-granted quotes */
  real: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    // TODO: replace with a real quote — e.g. ask a former colleague or mentor:
    // quote: "…their words…", name: "Real Name", role: "Role, Company", real: true
    quote:
      "Recommendations from people I've worked with will appear here.",
    name: "Your name could be here",
    role: "Work with me",
    real: false,
  },
];
