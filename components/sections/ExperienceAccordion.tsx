"use client";

import { Tag } from "@carbon/react";
import Reveal from "@/components/Reveal";
import { EXPERIENCE } from "@/components/data";

/** Experience page: open timeline cards, matching the static site's presentation.
 *  Every entry is fully visible (title, date, org logo, project, bullets, tech stack)
 *  — no collapsed accordions. Tech pills use Carbon Tags. All company logos are the
 *  original official artwork, never recolored. */
export default function ExperienceAccordion() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.title} delay={i % 2 === 1 ? "d1" : ""}>
              <div className="t-item">
                <div className="t-card">
                  <div className="t-top">
                    <h3>{e.title}</h3>
                    <span className="t-date mono">{e.date}</span>
                  </div>
                  <div className="t-org">
                    {e.orgLogo ? (
                      <img
                        className="exp-logo"
                        src={e.orgLogo}
                        alt={e.orgLogoAlt ?? "Company logo"}
                        loading="lazy"
                      />
                    ) : (
                      <span className="exp-mono">{e.monogram}</span>
                    )}
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
                        <Tag key={t.name} type="green" size="md" className="exp-tag">
                          <img src={t.logo} alt={t.alt} loading="lazy" />
                          {t.name}
                        </Tag>
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
  );
}
