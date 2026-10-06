"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/components/data";

/** Testimonials band — renders from TESTIMONIALS in data.ts.
 *  Placeholder entries (real: false) render as an invitation card, never as
 *  a fabricated quote. Add real quotes with real: true once permission is given. */
export default function Testimonials() {
  const real = TESTIMONIALS.filter((t) => t.real);
  return (
    <section className="block">
      <div className="wrap">
        <Reveal>
          <div className="sub-label">Testimonials</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">
            What people <span className="grad">say.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="sec-sub">
            Recommendations from colleagues, mentors, and clients I&apos;ve worked with.
          </p>
        </Reveal>

        <div className="testi-grid">
          {real.map((t, i) => (
            <Reveal key={t.name} delay={i % 2 === 1 ? "d1" : ""}>
              <figure className="testi-card">
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}

          {/* Invitation card — always shown until real quotes arrive */}
          <Reveal delay={real.length % 2 === 1 ? "d1" : ""}>
            <div className="testi-card testi-invite">
              <div className="testi-invite-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5z" />
                </svg>
              </div>
              <h4>Worked with me?</h4>
              <p>
                I&apos;m collecting honest recommendations from people I&apos;ve
                built things with. Yours could be first.
              </p>
              <Link href="/contact" className="btn btn-sm">
                Work with me &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
