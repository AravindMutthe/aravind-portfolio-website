import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

const S = (s: string) => `https://cdn.simpleicons.org/${s}`;
const W = (f: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}`;

export interface StackItem {
  name: string;
  logo: string;
  alt: string;
  note: string;
}

/** Trending, honest tech — every item is actually used in Aravind's builds. */
export const STACK: StackItem[] = [
  { name: "Next.js 15", logo: S("nextdotjs"), alt: "Next.js logo", note: "This site's framework · GradeSpot frontend" },
  { name: "React", logo: S("react"), alt: "React logo", note: "Component UI throughout" },
  { name: "TypeScript", logo: S("typescript"), alt: "TypeScript logo", note: "Type-safe code, end to end" },
  { name: "Tailwind CSS", logo: S("tailwindcss"), alt: "Tailwind CSS logo", note: "Utility-first styling" },
  { name: "IBM Carbon", logo: W("IBM_logo.svg"), alt: "IBM logo", note: "Design-system components" },
  { name: "Vercel AI SDK", logo: S("vercel"), alt: "Vercel logo", note: "AI chat in GradeSpot" },
  { name: "Supabase", logo: S("supabase"), alt: "Supabase logo", note: "Lead storage · Postgres BaaS" },
  { name: "n8n", logo: S("n8n"), alt: "n8n logo", note: "Workflow automation" },
  { name: "Docker", logo: S("docker"), alt: "Docker logo", note: "Containerized deploys" },
  { name: "Kubernetes", logo: S("kubernetes"), alt: "Kubernetes logo", note: "EKS / AKS orchestration" },
  { name: "Terraform", logo: S("terraform"), alt: "Terraform logo", note: "Infrastructure as code" },
  { name: "AWS", logo: W("Amazon_Web_Services_Logo.svg"), alt: "AWS logo", note: "Primary cloud platform" },
  { name: "Google Cloud", logo: S("googlecloud"), alt: "Google Cloud logo", note: "Cloud Run · Axon API" },
  { name: "Azure", logo: W("Microsoft_Azure_Logo.svg"), alt: "Microsoft Azure logo", note: "AKS · DevOps pipelines" },
  { name: "GitHub Actions", logo: S("githubactions"), alt: "GitHub Actions logo", note: "CI/CD on every push" },
  { name: "Python", logo: S("python"), alt: "Python logo", note: "Automation & scripting" },
  { name: "Node.js", logo: S("nodedotjs"), alt: "Node.js logo", note: "API runtime" },
  { name: "PostgreSQL", logo: S("postgresql"), alt: "PostgreSQL logo", note: "Relational data store" },
];

const DELAYS = ["", "d1", "d2", "d3"] as const;

interface TechShowcaseProps {
  eyebrow: string;
  title: ReactNode;
  sub: string;
}

/**
 * "Built with modern tech" — rich official-logo buttons with staggered entrances.
 * Logos are always the original brand artwork, never recolored or filtered.
 */
export default function TechShowcase({ eyebrow, title, sub }: TechShowcaseProps) {
  return (
    <section className="block stack-block">
      <div className="wrap">
        <Reveal>
          <div className="sec-label">{eyebrow}</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">{title}</h2>
        </Reveal>
        <Reveal>
          <p className="sec-sub">{sub}</p>
        </Reveal>

        <div className="stack-grid">
          {STACK.map((t, i) => (
            <Reveal key={t.name} delay={DELAYS[i % 4]}>
              <div className="stack-card">
                <div className="sc-logo">
                  <img src={t.logo} alt={t.alt} loading="lazy" />
                </div>
                <div className="sc-name">{t.name}</div>
                <div className="sc-note">{t.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
