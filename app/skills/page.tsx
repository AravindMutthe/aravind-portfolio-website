import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";
import { SKILL_PANELS, type SkillTile } from "@/components/data";

export const metadata: Metadata = {
  title: "Skills — Aravind Mutte",
  description:
    "Technical skills: AWS, GCP, Azure, Kubernetes, Terraform, Next.js, React, TypeScript, IBM Carbon, Tailwind CSS, Docker, Python, Linux and more.",
};

function Tile({ tile }: { tile: SkillTile }) {
  return (
    <div className="tile">
      <img src={tile.logo} alt={tile.alt} loading="lazy" />
      <span>{tile.name}</span>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="n">03</span> Toolbox
            </div>
          </Reveal>
          <Reveal>
            <h1 className="hero-title">
              The full stack, <span className="grad">end to end.</span>
            </h1>
          </Reveal>
          <Reveal delay="d1">
            <p className="lead">
              Every platform, language, and tool I&apos;ve actually worked with — cloud, code, and
              everything between.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="wrap">
        <Reveal variant="scale">
          <ParallaxPoster className="poster poster-band tight">
            <img
              src="img/hero-poster.jpg"
              alt="Abstract emerald-toned technology artwork"
              loading="eager"
            />
          </ParallaxPoster>
        </Reveal>
      </div>

      <section className="block section-dark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="skills-cats">
            {SKILL_PANELS.map((panel) => (
              <Reveal key={panel.title}>
                <div className="skill-panel">
                  <h4>{panel.title}</h4>
                  <p className="sp-sub">{panel.sub}</p>

                  {panel.tiles && (
                    <div className="tile-grid">
                      {panel.tiles.map((t) => (
                        <Tile key={t.name} tile={t} />
                      ))}
                    </div>
                  )}

                  {panel.groups && (
                    <div className="model-groups">
                      {panel.groups.map((g) => (
                        <div key={g.label} className="model-group">
                          <div className="model-label">
                            <b>{g.label}</b>
                            <span>{g.caption}</span>
                          </div>
                          <div className="tile-grid">
                            {g.tiles.map((t) => (
                              <Tile key={`${g.label}-${t.name}`} tile={t} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {panel.also && (
                    <p className="sp-also">
                      <b>Also:</b> {panel.also}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Need any of this <span className="grad">done right?</span>
          </>
        }
        sub="From a one-week pipeline fix to a full platform build — let's talk."
        buttons={[{ href: "/contact", label: "Start a Conversation" }]}
      />
    </>
  );
}
