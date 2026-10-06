"use client";

import Reveal from "@/components/Reveal";

/**
 * Book a call — Cal.com embed.
 * TODO: replace https://cal.com/aravindmutte/30min with the real Cal.com
 * event link after the Cal.com account is set up.
 */
const CAL_URL = "https://cal.com/aravindmutte/30min";

export default function BookACall() {
  return (
    <section className="block" aria-labelledby="book-call-h">
      <div className="wrap">
        <Reveal>
          <div className="book-card">
            <div className="book-copy">
              <span className="eyebrow">Book a call</span>
              <h2 id="book-call-h">
                Prefer to <span className="grad">talk it through?</span>
              </h2>
              <p>
                Grab a 30-minute slot on my calendar — good for scoping a project,
                discussing a role, or a quick DevOps consultation. No pitch, just
                a conversation.
              </p>
              {/* TODO: replace with real Cal.com link after account setup */}
              <a
                className="btn"
                href={CAL_URL}
                target="_blank"
                rel="noopener"
              >
                Book 30 minutes &rarr;
              </a>
            </div>
            <div className="book-embed">
              {/* TODO: replace with real Cal.com link after account setup */}
              <iframe
                title="Book a call with Aravind Mutte"
                src={CAL_URL}
                loading="lazy"
                style={{ border: 0, width: "100%", minHeight: 560 }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
