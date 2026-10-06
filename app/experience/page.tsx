import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { EXPERIENCE } from "@/components/data";

export const metadata: Metadata = {
  title: "Experience — Aravind Mutte",
  description:
    "Professional experience: independent cloud builds, Systems Engineer at Infosys, Junior Developer at HCLTech, Infrastructure Engineer at PragmaEdge.",
};

const DELAYS = ["", "d1", "d2", "d3"] as const;

export default function ExperiencePage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="n">02</span> Experience
            </div>
          </Reveal>
          <Reveal>
            <h1 className="hero-title">
              A track record in <span className="grad">demanding environments.</span>
            </h1>
          </Reveal>
          <Reveal delay="d1">
            <p className="lead">
              From enterprise B2B integration to independent cloud builds — systems that stay up.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="block section-dark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.title} delay={DELAYS[i % DELAYS.length]}>
                <div className="t-item">
                  <div className="t-card">
                    <div className="t-top">
                      <h3>{e.title}</h3>
                      <span className="t-date mono">{e.date}</span>
                    </div>
                    <div className="t-org">
                      {e.orgLogo ? (
                        <img className="t-logo" src={e.orgLogo} alt={e.orgLogoAlt ?? "Company logo"} />
                      ) : (
                        <span className="t-mono">{e.monogram}</span>
                      )}{" "}
                      {e.org}
                    </div>
                    <div className="t-proj">{e.proj}</div>
                    <ul>
                      {e.bullets.map((b, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: b.html }} />
                      ))}
                    </ul>
                    {e.stack && e.stack.length > 0 && (
                      <div className="t-stack">
                        {e.stack.map((t) => (
                          <span key={t.name} className="t-tech">
                            <img src={t.logo} alt={t.alt} />
                            {t.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Want this experience <span className="grad">on your team?</span>
          </>
        }
        sub="Available for immediate joining — freelance, contract, or full-time."
        buttons={[
          { href: "/contact", label: "Get in Touch" },
          { href: "/skills", label: "See My Skills", ghost: true },
        ]}
      />
    </>
  );
}
