"use client";

import { Accordion, AccordionItem } from "@carbon/react";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope. Fixed-scope engagements are quoted up front after a short scoping call — the contact form's budget ranges (under ₹25k, ₹25–75k, ₹75k–2L, ₹2L+) give a starting point. You'll get a written quote before any work begins, and I only take on work I'm confident I can deliver well.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Three: freelance fixed-scope projects (best for a defined outcome like a pipeline or cloud setup), contract engagements (ongoing DevOps support, monthly), and full-time roles (I'm available for immediate joining in Hyderabad or remote).",
  },
  {
    q: "How long does a typical project take?",
    a: "A CI/CD pipeline or cloud landing zone typically takes 2–6 weeks depending on complexity. Larger platform builds are scoped in phases so you see progress early. Timelines are agreed in writing before we start.",
  },
  {
    q: "How do we start?",
    a: "Fill the contact form or book a call. We'll have a 30-minute conversation about what you need. If it's a fit, I send a short proposal with scope, timeline, and fixed pricing. No obligation until you approve it.",
  },
  {
    q: "What do you need from me to begin?",
    a: "Access to the relevant cloud accounts and repositories, a point of contact who can answer questions, and clarity on what 'done' looks like. I handle the rest — architecture, implementation, documentation, and handover.",
  },
  {
    q: "Are you available right now?",
    a: "Yes — I'm available for immediate joining, both for freelance/contract engagements and full-time DevOps / SRE / Platform Engineering roles. I usually reply within a day.",
  },
];

/** Services page: FAQ accordion (Carbon) with honest answers — no invented numbers. */
export default function ServicesFaq() {
  return (
    <section className="block" aria-labelledby="faq-h">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-h" className="sec-title">
            Questions, <span className="grad">answered.</span>
          </h2>
        </Reveal>
        <Reveal delay="d1">
          <Accordion className="faq-accordion">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} title={f.q}>
                <p>{f.a}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
