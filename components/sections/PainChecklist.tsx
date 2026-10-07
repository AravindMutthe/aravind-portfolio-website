"use client";

import Reveal from "@/components/Reveal";
import Link from "next/link";

/**
 * PainChecklist — "Sound familiar?" in the client's own words.
 * Research: problem-first heroes convert; situations, not services.
 */
const PAINS = [
  "Deploys take all day and everyone holds their breath.",
  "Nobody knows what happens when something breaks at 2am.",
  "The cloud bill keeps growing and nobody can explain why.",
  "Your team ships features but dreads touching infrastructure.",
];

export default function PainChecklist() {
  return (
    <section className="block" aria-label="Common infrastructure problems">
      <div className="wrap">
        <Reveal>
          <div className="sub-label">Sound familiar?</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">
            Infrastructure problems <span className="grad">I've solved before.</span>
          </h2>
        </Reveal>
        <div className="pain-grid">
          {PAINS.map((p, i) => (
            <Reveal key={p} delay={i % 2 ? "d1" : undefined}>
              <div className="pain-item">
                <span className="pain-check" aria-hidden="true">
                  ✓
                </span>
                <span>{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p style={{ marginTop: 22, fontSize: 16, color: "var(--muted)" }}>
            If two or more sound like your team,{" "}
            <Link href="/contact" style={{ color: "#8a6d1c", fontWeight: 700 }}>
              let's talk about fixing them →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
