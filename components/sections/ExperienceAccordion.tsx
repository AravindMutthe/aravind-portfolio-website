"use client";

import { Accordion, AccordionItem, Tag } from "@carbon/react";
import Reveal from "@/components/Reveal";
import { EXPERIENCE } from "@/components/data";

/** Experience page: career timeline as a Carbon Accordion (deep emerald section).
 *  Each role expands to show the project, achievements, and tech stack as Carbon Tags.
 *  All company logos are the original official artwork, never recolored. */
export default function ExperienceAccordion() {
  return (
    <section className="block section-dark" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <Accordion className="exp-accordion">
            {EXPERIENCE.map((e) => (
              <AccordionItem
                key={e.title}
                title={
                  <span className="exp-head">
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
                    <span className="exp-titles">
                      <strong>{e.title}</strong>
                      <span className="exp-org">{e.org}</span>
                    </span>
                    <span className="exp-date">{e.date}</span>
                  </span>
                }
              >
                <div className="exp-proj">{e.proj}</div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: b.html }} />
                  ))}
                </ul>
                {e.stack && e.stack.length > 0 && (
                  <div className="exp-stack">
                    {e.stack.map((t) => (
                      <Tag key={t.name} type="green" size="md" className="exp-tag">
                        <img src={t.logo} alt={t.alt} loading="lazy" />
                        {t.name}
                      </Tag>
                    ))}
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
