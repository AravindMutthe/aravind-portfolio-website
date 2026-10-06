import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";

export const metadata: Metadata = {
  title: "About — Aravind Mutte",
  description:
    "About Aravind Mutte: Cloud DevOps & SRE Engineer — education, certifications, achievements, projects and social links. Hyderabad, India.",
};

const CERTS = [
  {
    icon: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    title: "Google Cloud Certified",
    sub: "Professional Cloud Architect",
  },
  {
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    title: "Microsoft Azure",
    sub: "AZ-900: Azure Fundamentals",
  },
  {
    icon: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
    title: "Linux & Shell Scripting",
    sub: "Systems automation coursework",
  },
];

const ACHIEVEMENTS = [
  { num: "02", text: "Years of professional DevOps & SRE experience" },
  { num: "03", text: "Computing qualifications — diploma to B.Tech to MS" },
  { num: "$0", text: "Monthly infra spend on the Axon API, live on GCP Cloud Run" },
  { num: "03", text: "Production sites & APIs live right now" },
];

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

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="n">04</span> About
            </div>
          </Reveal>
          <Reveal>
            <h1 className="hero-title">
              Engineer with a <span className="grad">global perspective.</span>
            </h1>
          </Reveal>
          <Reveal delay="d1">
            <p className="lead">
              The full picture — background, credentials, wins, selected work, and everywhere you can
              find me.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="profile-grid">
            <Reveal>
              <div className="photo-frame">
                <div className="photo-ph">AM</div>
                <div className="photo-meta">
                  <strong>Aravind Mutte</strong>
                  <span>Cloud DevOps &amp; SRE Engineer · Hyderabad, India</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay="d1">
              <div className="profile-copy">
                <div className="sub-label">Profile</div>
                <h2 className="sub-title">
                  I keep critical systems <span className="grad">running calm.</span>
                </h2>
                <p>
                  I&apos;m a <strong>Cloud DevOps &amp; Site Reliability Engineer</strong> based in{" "}
                  <strong>Hyderabad, India</strong>, with a Master&apos;s in Computer Science from{" "}
                  <strong>Rivier University (USA)</strong> and about two years of professional experience
                  — from startup infrastructure to enterprise IT platforms.
                </p>
                <p>
                  My sweet spot is the intersection of <strong>development velocity and operational calm</strong>:
                  pipelines that deploy in minutes, infrastructure defined entirely as code, and monitoring
                  that pages you before customers notice.
                </p>
                <p>
                  I&apos;m currently <strong>available for immediate joining</strong> — open to freelance
                  and contract engagements as well as full-time DevOps / SRE / Platform Engineering roles.
                </p>
                <div className="fact-row">
                  <span className="fact">
                    <b>●</b> Available immediately
                  </span>
                  <span className="fact">Hyderabad, India</span>
                  <span className="fact">~2 yrs experience</span>
                  <span className="fact">English · Telugu · Hindi</span>
                </div>
                <div className="social-row">
                  <a
                    className="sbtn"
                    href="https://linkedin.com/in/aravindmutte"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="https://commons.wikimedia.org/wiki/Special:FilePath/LinkedIn_logo_initials.png"
                      alt="LinkedIn logo"
                    />
                    LinkedIn
                  </a>
                  <a
                    className="sbtn"
                    href="https://github.com/AravindMutthe"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src="https://cdn.simpleicons.org/github" alt="GitHub logo" />
                    GitHub
                  </a>
                  <a className="sbtn" href="https://x.com/aravind_mutthe" target="_blank" rel="noopener">
                    <img src="https://cdn.simpleicons.org/x" alt="X logo" />X
                  </a>
                  <a className="sbtn" href="mailto:mutthe.aravind@gmail.com">
                    <svg viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <div className="wrap">
        <Reveal variant="scale">
          <ParallaxPoster className="poster poster-band tight">
            <img
              src="img/about-visual.jpg"
              alt="Emerald-toned abstract portrait of engineering craft"
              loading="lazy"
            />
          </ParallaxPoster>
        </Reveal>
      </div>

      <section className="block section-dark">
        <div className="wrap">
          <div className="about-sec">
            <Reveal>
              <div className="sub-label">Education</div>
            </Reveal>
            <Reveal>
              <h2 className="sub-title">
                Built on strong <span className="grad">foundations.</span>
              </h2>
            </Reveal>
            <div className="edu-grid">
              <Reveal>
                <div className="edu-card">
                  <img
                    className="edu-logo"
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Rivier%20University%2C%20Logo%2C%20Nashua%20NH.svg"
                    alt="Rivier University logo"
                  />
                  <span className="edu-date">Completed May 2025</span>
                  <h4>MS, Computer Science</h4>
                  <p>Rivier University, Nashua, NH, USA · GPA 3.8/4.0</p>
                </div>
              </Reveal>
              <Reveal delay="d1">
                <div className="edu-card">
                  <img
                    className="edu-logo"
                    src="https://en.wikipedia.org/wiki/Special:FilePath/JNTU%20Hyderabad%20logo.png"
                    alt="JNTU Hyderabad logo"
                  />
                  <span className="edu-date">2017 – 2020</span>
                  <h4>B.Tech, Computer Science</h4>
                  <p>JNTU Hyderabad · Lateral Entry</p>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="about-sec" style={{ marginBottom: 0 }}>
            <Reveal>
              <div className="sub-label">Certifications</div>
            </Reveal>
            <Reveal>
              <h2 className="sub-title">
                Credentials that <span className="grad">count.</span>
              </h2>
            </Reveal>
            <div className="cert-grid">
              {CERTS.map((c, i) => (
                <Reveal key={c.title} delay={DELAYS[i % DELAYS.length]}>
                  <div className="cert-card">
                    <div className="cert-badge">
                      <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: c.icon }} />
                    </div>
                    <h4>{c.title}</h4>
                    <p>{c.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="about-sec" style={{ marginBottom: 0 }}>
            <Reveal>
              <div className="sub-label">Achievements</div>
            </Reveal>
            <Reveal>
              <h2 className="sub-title">
                Numbers that <span className="grad">speak.</span>
              </h2>
            </Reveal>
            <div className="ach-grid">
              {ACHIEVEMENTS.map((a, i) => (
                <Reveal key={a.num} delay={DELAYS[i % DELAYS.length]}>
                  <div className="ach-card">
                    <div className="ach-num">{a.num}</div>
                    <p>{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                  <div className="proj-card">
                    <h4>{p.title}</h4>
                    <p>{p.copy}</p>
                    <div className="proj-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="ptag">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.external ? (
                      <a className="proj-link" href={p.link} target="_blank" rel="noopener">
                        {p.linkLabel} <span className="arr">→</span>
                      </a>
                    ) : (
                      <a className="proj-link" href={p.link}>
                        {p.linkLabel} <span className="arr">→</span>
                      </a>
                    )}
                  </div>
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
                      <img src={s.img} alt={s.imgAlt ?? `${s.label} logo`} />
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

      <CtaBand
        title={
          <>
            Let&apos;s build something <span className="grad">reliable.</span>
          </>
        }
        sub="Currently accepting freelance projects and full-time opportunities."
        buttons={[{ href: "/contact", label: "Get in Touch" }]}
      />
    </>
  );
}
