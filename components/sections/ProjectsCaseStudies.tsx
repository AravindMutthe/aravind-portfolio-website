"use client";

import { Tag } from "@carbon/react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

/* Logo URL helpers — official brand artwork, never recolored or filtered. */
const S = (s: string) => `/logos/${s}.svg`;
const W_MAP: Record<string, string> = {
  "Amazon_Web_Services_Logo.svg": "/logos/aws.svg",
  "IBM_logo.svg": "/logos/ibm.svg",
  "Microsoft_Azure_Logo.svg": "/logos/azure.svg",
  "Oracle_logo.svg": "/logos/oracle.svg",
};
const W = (f: string) => W_MAP[f] ?? `/logos/${f}`;

interface StackItem { name: string; logo: string; alt: string }
export interface CaseStudy {
  num: string;
  delay: "" | "d1" | "d2";
  title: string;
  tagline: string;
  problem: string;
  approach: string[];
  outcome: string[];
  impact: string;
  stack: StackItem[];
  link?: string;
  linkLabel?: string;
  /** inline SVG architecture diagram (navy/gold, no external assets) */
  diagram: string;
  diagramCaption: string;
  /** honest trade-offs — what I'd do differently */
  tradeoffs: string;
}

/* Simple architecture diagrams — boxes + arrows, navy/gold, pure SVG. */
const DIAGRAM_AXON = `<svg viewBox="0 0 560 150" role="img" aria-label="Axon API architecture: form to Cloud Run to Supabase">
<defs><marker id="ah1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#1B2F4B"/></marker></defs>
<rect x="8" y="45" width="120" height="60" rx="10" fill="#fff" stroke="#1B2F4B" stroke-width="2"/><text x="68" y="72" text-anchor="middle" font-size="13" font-weight="600" fill="#1B2F4B">Portfolio</text><text x="68" y="90" text-anchor="middle" font-size="13" fill="#1B2F4B">form</text>
<line x1="128" y1="75" x2="172" y2="75" stroke="#1B2F4B" stroke-width="2" marker-end="url(#ah1)"/>
<rect x="172" y="45" width="130" height="60" rx="10" fill="#1B2F4B"/><text x="237" y="72" text-anchor="middle" font-size="13" font-weight="600" fill="#fff">Cloud Run</text><text x="237" y="90" text-anchor="middle" font-size="13" fill="#C9A227">Axon API</text>
<line x1="302" y1="75" x2="346" y2="75" stroke="#1B2F4B" stroke-width="2" marker-end="url(#ah1)"/>
<rect x="346" y="45" width="120" height="60" rx="10" fill="#fff" stroke="#1B2F4B" stroke-width="2"/><text x="406" y="72" text-anchor="middle" font-size="13" font-weight="600" fill="#1B2F4B">reCAPTCHA</text><text x="406" y="90" text-anchor="middle" font-size="13" fill="#1B2F4B">verify</text>
<line x1="466" y1="75" x2="500" y2="75" stroke="#1B2F4B" stroke-width="2" marker-end="url(#ah1)"/>
<rect x="500" y="45" width="52" height="60" rx="10" fill="#fff" stroke="#C9A227" stroke-width="2"/><text x="526" y="72" text-anchor="middle" font-size="11" font-weight="600" fill="#1B2F4B">Supa-</text><text x="526" y="88" text-anchor="middle" font-size="11" font-weight="600" fill="#1B2F4B">base</text>
</svg>`;

const DIAGRAM_GRADESPOT = `<svg viewBox="0 0 560 150" role="img" aria-label="GradeSpot architecture: browser to Vercel to Axon API">
<defs><marker id="ah2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#1B2F4B"/></marker></defs>
<rect x="8" y="45" width="120" height="60" rx="10" fill="#fff" stroke="#1B2F4B" stroke-width="2"/><text x="68" y="72" text-anchor="middle" font-size="13" font-weight="600" fill="#1B2F4B">Visitor</text><text x="68" y="90" text-anchor="middle" font-size="13" fill="#1B2F4B">browser</text>
<line x1="128" y1="75" x2="172" y2="75" stroke="#1B2F4B" stroke-width="2" marker-end="url(#ah2)"/>
<rect x="172" y="45" width="130" height="60" rx="10" fill="#1B2F4B"/><text x="237" y="72" text-anchor="middle" font-size="13" font-weight="600" fill="#fff">Vercel</text><text x="237" y="90" text-anchor="middle" font-size="13" fill="#C9A227">Next.js 15</text>
<line x1="302" y1="75" x2="346" y2="75" stroke="#1B2F4B" stroke-width="2" marker-end="url(#ah2)"/>
<rect x="346" y="45" width="120" height="60" rx="10" fill="#fff" stroke="#1B2F4B" stroke-width="2"/><text x="406" y="72" text-anchor="middle" font-size="13" font-weight="600" fill="#1B2F4B">Axon API</text><text x="406" y="90" text-anchor="middle" font-size="13" fill="#1B2F4B">leads</text>
<line x1="466" y1="75" x2="500" y2="75" stroke="#1B2F4B" stroke-width="2" marker-end="url(#ah2)"/>
<rect x="500" y="45" width="52" height="60" rx="10" fill="#fff" stroke="#C9A227" stroke-width="2"/><text x="526" y="72" text-anchor="middle" font-size="11" font-weight="600" fill="#1B2F4B">Supa-</text><text x="526" y="88" text-anchor="middle" font-size="11" font-weight="600" fill="#1B2F4B">base</text>
</svg>`;

const DIAGRAM_HOMELAB = `<svg viewBox="0 0 560 150" role="img" aria-label="Homelab architecture: phone over Tailscale serving apps">
<defs><marker id="ah3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#1B2F4B"/></marker></defs>
<rect x="8" y="45" width="130" height="60" rx="10" fill="#1B2F4B"/><text x="73" y="72" text-anchor="middle" font-size="13" font-weight="600" fill="#fff">Android</text><text x="73" y="90" text-anchor="middle" font-size="13" fill="#C9A227">Termux</text>
<line x1="138" y1="75" x2="182" y2="75" stroke="#1B2F4B" stroke-width="2" marker-end="url(#ah3)"/>
<rect x="182" y="45" width="120" height="60" rx="10" fill="#fff" stroke="#1B2F4B" stroke-width="2"/><text x="242" y="72" text-anchor="middle" font-size="13" font-weight="600" fill="#1B2F4B">Tailscale</text><text x="242" y="90" text-anchor="middle" font-size="13" fill="#1B2F4B">mesh VPN</text>
<line x1="302" y1="75" x2="346" y2="75" stroke="#1B2F4B" stroke-width="2" marker-end="url(#ah3)"/>
<rect x="346" y="20" width="206" height="46" rx="10" fill="#fff" stroke="#C9A227" stroke-width="2"/><text x="449" y="48" text-anchor="middle" font-size="13" font-weight="600" fill="#1B2F4B">Portfolio mirror :8123</text>
<rect x="346" y="84" width="206" height="46" rx="10" fill="#fff" stroke="#C9A227" stroke-width="2"/><text x="449" y="112" text-anchor="middle" font-size="13" font-weight="600" fill="#1B2F4B">File server :8080</text>
</svg>`;

export const CASES: CaseStudy[] = [
  {
    num: "/ 01",
    delay: "",
    title: "Axon Lead-Capture API",
    tagline: "Serverless lead API on GCP — production, zero spend.",
    problem:
      "GradeSpot needed a reliable way to capture website enquiries and store them durably — without paying for backend infrastructure.",
    approach: [
      "Built a TypeScript API on GCP Cloud Run (free tier) with Zod schema validation on every payload.",
      "reCAPTCHA Enterprise bot protection on the lead_submit action; Supabase (Postgres) for durable storage.",
      "Cloud Build CI pipeline with Artifact Registry; budget guardrails on the GCP project.",
    ],
    outcome: [
      "Live at axon-api-246396716039.us-central1.run.app — powers the contact forms on this portfolio and GradeSpot.",
      "$0/month infrastructure spend (GCP free tier).",
    ],
    impact: "Production lead API serving real enquiries — at $0/month infra spend.",
    stack: [
      { name: "TypeScript", logo: S("typescript"), alt: "TypeScript logo" },
      { name: "GCP Cloud Run", logo: S("googlecloud"), alt: "Google Cloud logo" },
      { name: "Zod", logo: S("zod"), alt: "Zod logo" },
      { name: "Supabase", logo: S("supabase"), alt: "Supabase logo" },
      { name: "Docker", logo: S("docker"), alt: "Docker logo" },
    ],
    link: "https://axon-api-246396716039.us-central1.run.app/api/health",
    linkLabel: "Check API health",
    diagram: DIAGRAM_AXON,
    diagramCaption: "Enquiry flow: portfolio form → Cloud Run API → reCAPTCHA check → Supabase.",
    tradeoffs:
      "I chose serverless over a VM to keep costs at zero, which means cold starts on the free tier — acceptable for a lead form, wrong for latency-sensitive APIs. If traffic grew, I'd add a Redis cache for reCAPTCHA assessments and move to min-instances=1.",
  },
  {
    num: "/ 02",
    delay: "d1",
    title: "GradeSpot Frontend",
    tagline: "Modern marketing site — Next.js 15, Carbon design system.",
    problem:
      "GradeSpot needed a fast, modern website to present courses and capture admissions interest.",
    approach: [
      "Next.js 15 App Router with TypeScript end to end; Tailwind CSS v4 for styling.",
      "IBM Carbon design-system components for consistent, accessible UI; Framer Motion for motion.",
      "Deployed on Vercel with preview deployments per branch.",
    ],
    outcome: [
      "Live at gradespot-site-axonfde.vercel.app.",
      "Real course catalog, admissions enquiry flow wired to the Axon API.",
    ],
    impact: "Live marketing site with a working admissions funnel — shipped on the free tier.",
    stack: [
      { name: "Next.js 15", logo: S("nextdotjs"), alt: "Next.js logo" },
      { name: "React", logo: S("react"), alt: "React logo" },
      { name: "Tailwind CSS", logo: S("tailwindcss"), alt: "Tailwind CSS logo" },
      { name: "IBM Carbon", logo: W("IBM_logo.svg"), alt: "IBM logo" },
      { name: "Vercel", logo: S("vercel"), alt: "Vercel logo" },
    ],
    link: "https://gradespot-site-axonfde.vercel.app",
    linkLabel: "Visit live site",
    diagram: DIAGRAM_GRADESPOT,
    diagramCaption: "Site flow: visitor → Vercel-hosted Next.js → Axon lead API → Supabase.",
    tradeoffs:
      "I kept content in typed data files instead of a CMS to ship fast with zero cost — the trade-off is that non-technical editors can't update copy themselves. If the business grows, I'd add a headless CMS like Sanity behind the same components.",
  },
  {
    num: "/ 03",
    delay: "d2",
    title: "Termux Homelab",
    tagline: "A datacenter in a pocket — self-hosted on a phone.",
    problem:
      "Wanted always-on servers, automation and monitoring without paying for a VPS.",
    approach: [
      "Turned an Android phone into a self-hosted lab: Termux, OpenSSH server, reachable over Tailscale.",
      "Hosts portfolio and file servers; OCI free-tier tooling for cloud experiments.",
      "Boot automation and watchdog scripts keep services alive across reboots.",
    ],
    outcome: [
      "Runs 24/7 — portfolio mirror and file server served from the phone.",
      "$0 cost — existing hardware plus free tiers only.",
    ],
    impact: "24/7 self-hosted services from a phone in a pocket — $0 hardware and hosting cost.",
    stack: [
      { name: "Linux", logo: S("linux"), alt: "Linux logo" },
      { name: "Tailscale", logo: S("tailscale"), alt: "Tailscale logo" },
      { name: "Bash", logo: S("gnubash"), alt: "Bash logo" },
      { name: "Oracle Cloud", logo: W("Oracle_logo.svg"), alt: "Oracle logo" },
      { name: "GitHub Actions", logo: S("githubactions"), alt: "GitHub Actions logo" },
    ],
    diagram: DIAGRAM_HOMELAB,
    diagramCaption: "Phone (Termux) exposes services over the Tailscale mesh \u2014 no public IP needed.",
    tradeoffs:
      "A phone is not a server: battery, thermals, and Android killing background processes are real constraints. It works because the workloads are light and stateless. For anything stateful or critical I\u2019d move to the Oracle free-tier VM instead.",
  },
];

/** Projects page: three detailed case studies — problem, approach, stack, outcome.
 *  Only verifiable facts: live URLs, real tech, $0 spend. No invented metrics.
 *  All logos are original official artwork, never recolored or filtered. */
export default function ProjectsCaseStudies() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="proj-list">
          {CASES.map((c) => (
            <Reveal key={c.num} delay={c.delay}>
              <TiltCard className="card tilt proj-card">
                <span className="num">{c.num}</span>
                <h3>{c.title}</h3>
                <p className="proj-tagline">{c.tagline}</p>

                <h4 className="proj-h">The problem</h4>
                <p>{c.problem}</p>

                <h4 className="proj-h">The approach</h4>
                <ul className="proj-list-ul">
                  {c.approach.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>

                <h4 className="proj-h">The outcome</h4>
                <div className="impact-line">
                  <strong>Impact:</strong> {c.impact}
                </div>
                <ul className="proj-list-ul">
                  {c.outcome.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>

                <div className="proj-stack">
                  {c.stack.map((t) => (
                    <Tag key={t.name} type="green" size="md" className="exp-tag">
                      <img src={t.logo} alt={t.alt} loading="lazy" />
                      {t.name}
                    </Tag>
                  ))}
                </div>

                <div
                  className="arch-diagram"
                  dangerouslySetInnerHTML={{ __html: c.diagram }}
                />
                <p className="arch-note">{c.diagramCaption}</p>

                <div className="tradeoffs">
                  <h5>Trade-offs / what I&apos;d do differently</h5>
                  <p>{c.tradeoffs}</p>
                </div>

                {c.link && (
                  <div className="proj-links">
                    <a
                      className="proj-link"
                      href={c.link}
                      target="_blank"
                      rel="noopener"
                    >
                      {c.linkLabel} &rarr;
                    </a>
                  </div>
                )}
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
