"use client";

import Reveal from "@/components/Reveal";

/** "Open source & builds" strip — pinned repos.
 *  Private repos are marked honestly: link the live site/profile instead of code. */
const REPOS = [
  {
    name: "aravind-portfolio-next",
    desc: "This site — Next.js 15, Tailwind, IBM Carbon, navy/gold theme.",
    tech: ["Next.js", "TypeScript", "Carbon"],
    href: "https://aravind-portfolio.vercel.app",
    linkLabel: "Live site →",
    private: true,
  },
  {
    name: "gradespot-frontend-website",
    desc: "GradeSpot marketing site — courses, admissions, enquiry flows.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    href: "https://gradespot-site-axonfde.vercel.app",
    linkLabel: "Live site →",
    private: true,
  },
  {
    name: "gradespot-backend-axon-api",
    desc: "Axon lead-capture API — TypeScript, Zod, reCAPTCHA, Supabase on Cloud Run.",
    tech: ["TypeScript", "GCP", "Supabase"],
    href: "https://github.com/AravindMutthe",
    linkLabel: "GitHub profile →",
    private: true,
  },
];

export default function GithubStrip() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="sub-label">Open source &amp; builds</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">
            Code that <span className="grad">ships.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="sec-sub">
            Selected builds — some repos are private, so I link the live result instead.
          </p>
        </Reveal>
        <div className="gh-strip">
          {REPOS.map((r, i) => (
            <Reveal key={r.name} delay={i === 1 ? "d1" : i === 2 ? "d2" : ""}>
              <div className="gh-card">
                <div className="gh-meta">
                  <span className="gh-private">Private repo</span>
                </div>
                <h4>{r.name}</h4>
                <p>{r.desc}</p>
                <div className="gh-meta">
                  {r.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a href={r.href} target="_blank" rel="noopener" className="proj-link">
                  {r.linkLabel}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
