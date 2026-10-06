"use client";

import { Tag } from "@carbon/react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

/* Logo URL helpers — official brand artwork, never recolored or filtered. */
const S = (s: string) => `https://cdn.simpleicons.org/${s}`;
const W = (f: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}`;

interface StackItem { name: string; logo: string; alt: string }
interface CaseStudy {
  num: string;
  delay: "" | "d1" | "d2";
  title: string;
  tagline: string;
  problem: string;
  approach: string[];
  outcome: string[];
  stack: StackItem[];
  link?: string;
  linkLabel?: string;
}

const CASES: CaseStudy[] = [
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
    stack: [
      { name: "TypeScript", logo: S("typescript"), alt: "TypeScript logo" },
      { name: "GCP Cloud Run", logo: S("googlecloud"), alt: "Google Cloud logo" },
      { name: "Zod", logo: S("zod"), alt: "Zod logo" },
      { name: "Supabase", logo: S("supabase"), alt: "Supabase logo" },
      { name: "Docker", logo: S("docker"), alt: "Docker logo" },
    ],
    link: "https://axon-api-246396716039.us-central1.run.app/api/health",
    linkLabel: "Check API health",
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
    stack: [
      { name: "Next.js 15", logo: S("nextdotjs"), alt: "Next.js logo" },
      { name: "React", logo: S("react"), alt: "React logo" },
      { name: "Tailwind CSS", logo: S("tailwindcss"), alt: "Tailwind CSS logo" },
      { name: "IBM Carbon", logo: W("IBM_logo.svg"), alt: "IBM logo" },
      { name: "Vercel", logo: S("vercel"), alt: "Vercel logo" },
    ],
    link: "https://gradespot-site-axonfde.vercel.app",
    linkLabel: "Visit live site",
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
    stack: [
      { name: "Linux", logo: S("linux"), alt: "Linux logo" },
      { name: "Tailscale", logo: S("tailscale"), alt: "Tailscale logo" },
      { name: "Bash", logo: S("gnubash"), alt: "Bash logo" },
      { name: "Oracle Cloud", logo: W("Oracle_logo.svg"), alt: "Oracle logo" },
      { name: "GitHub Actions", logo: S("githubactions"), alt: "GitHub Actions logo" },
    ],
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

                {c.link && (
                  <a
                    className="proj-link"
                    href={c.link}
                    target="_blank"
                    rel="noopener"
                  >
                    {c.linkLabel} &rarr;
                  </a>
                )}
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
