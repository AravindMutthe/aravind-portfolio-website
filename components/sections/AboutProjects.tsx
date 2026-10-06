"use client";

import { ClickableTile, Tag } from "@carbon/react";
import Reveal from "@/components/Reveal";

const PROJECTS = [
  {
    title: "Portfolio Platform",
    copy: "This site — rebuilt as a Next.js 15 app with Tailwind CSS, IBM Carbon components and Framer Motion, plus a hand-crafted static edition. Deployed on GitHub Pages with CI.",
    tags: ["Next.js", "Tailwind", "IBM Carbon"],
    link: "https://github.com/AravindMutthe/aravind-portfolio-next",
    linkLabel: "View on GitHub",
    external: true,
  },
  {
    title: "Axon Cloud Engine",
    copy: "Lead-capture API service for GradeSpot running on GCP Cloud Run (free tier) — validated endpoints, Cloud Build CI, Artifact Registry, budget guardrails. Zero spend.",
    tags: ["TypeScript", "GCP Cloud Run", "Zod"],
    link: "https://github.com/AravindMutthe/gradespot-backend-axon-api",
    linkLabel: "View on GitHub",
    external: true,
  },
  {
    title: "Termux Homelab",
    copy: "Self-hosted lab on an Android phone over Tailscale — portfolio & file servers, OCI cloud tooling, automated boot and watchdog scripts. A datacenter in a pocket.",
    tags: ["Linux", "Tailscale", "Bash"],
    link: "/contact",
    linkLabel: "Ask me about it",
    external: false,
  },
];

interface SocCard {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  img?: string;
  imgAlt?: string;
  svg?: string;
}

/** Official brand logos only — original artwork, never recolored or filtered. */
const SOCIALS: SocCard[] = [
  { label: "LinkedIn", value: "/in/aravindmutte", href: "https://linkedin.com/in/aravindmutte", external: true, img: "https://commons.wikimedia.org/wiki/Special:FilePath/LinkedIn_logo_initials.png", imgAlt: "LinkedIn logo" },
  { label: "GitHub", value: "@AravindMutthe", href: "https://github.com/AravindMutthe", external: true, img: "https://cdn.simpleicons.org/github", imgAlt: "GitHub logo" },
  { label: "X", value: "@aravind_mutthe", href: "https://x.com/aravind_mutthe", external: true, img: "https://cdn.simpleicons.org/x", imgAlt: "X logo" },
  { label: "Facebook", value: "Aravind Here", href: "https://www.facebook.com/100006531271507", external: true, img: "https://cdn.simpleicons.org/facebook", imgAlt: "Facebook logo" },
  { label: "Email", value: "mutthe.aravind@gmail.com", href: "mailto:mutthe.aravind@gmail.com", svg: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>' },
  { label: "WhatsApp", value: "+91 98851 89951", href: "https://wa.me/919885189951", external: true, img: "https://cdn.simpleicons.org/whatsapp", imgAlt: "WhatsApp logo" },
  { label: "Phone", value: "+91 98851 89951", href: "tel:+919885189951", svg: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/>' },
  { label: "Hire Me", value: "Start a project →", href: "/contact", svg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' },
];

const DELAYS = ["", "d1", "d2", "d3"] as const;

/** About page: projects (Carbon ClickableTiles) + social cards (deep emerald section). */
export default function AboutProjects() {
  return (
    <section className="block section-dark">
      <div className="wrap">
        <div className="about-sec">
          <Reveal>
            <div className="sub-label">Projects</div>
          </Reveal>
          <Reveal>
            <h2 className="sub-title">
              Things I&apos;ve <span className="grad">built &amp; run.</span>
            </h2>
          </Reveal>
          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={DELAYS[i % DELAYS.length]}>
                <ClickableTile
                  className="proj-carbon-tile"
                  href={p.link}
                  {...(p.external ? { target: "_blank", rel: "noopener" } : {})}
                >
                  <h4>{p.title}</h4>
                  <p>{p.copy}</p>
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <Tag key={t} type="green" size="sm">
                        {t}
                      </Tag>
                    ))}
                  </div>
                  <span className="proj-link">
                    {p.linkLabel} <span className="arr">→</span>
                  </span>
                </ClickableTile>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="about-sec" style={{ marginBottom: 0 }}>
          <Reveal>
            <div className="sub-label">Social</div>
          </Reveal>
          <Reveal>
            <h2 className="sub-title">
              Find me <span className="grad">everywhere.</span>
            </h2>
          </Reveal>
          <div className="soc-grid">
            {SOCIALS.map((s, i) => (
              <Reveal key={s.label} delay={DELAYS[i % DELAYS.length]}>
                <a
                  className="soc-card"
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener" } : {})}
                >
                  {s.img ? (
                    <img src={s.img} alt={s.imgAlt ?? `${s.label} logo`} loading="lazy" />
                  ) : (
                    <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: s.svg ?? "" }} />
                  )}
                  <div>
                    <div className="sl">{s.label}</div>
                    <div className="sv">{s.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
