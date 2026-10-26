import type { Metadata } from "next";
import Link from "next/link";
import { V1_SECTIONS, V1_META } from "@/components/atlas-v1-data";

export const metadata: Metadata = {
  title: "Atlas V1 — Hybrid & Research Editions — Atlas",
  description: "Aravind Systems Knowledge Atlas V1 in Next.js: 30 sections, 165 embedded original images, in Hybrid and Research & Strategy editions.",
};

function blurb(sec: (typeof V1_SECTIONS)[number]): string {
  for (const b of sec.blocks) {
    if (b.paras.length > 0) return b.paras[0].slice(0, 170);
    for (const s of b.subs) {
      if (s.paras.length > 0) return s.paras[0].slice(0, 170);
    }
  }
  return "";
}

export default function AtlasV1Hub() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas library</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Atlas · V1 · Advanced Next.js edition</p>
      <h1 className="atlas-hero">Atlas V1: Hybrid &amp; Research Editions</h1>
      <p className="atlas-lead">
        The two self-contained Atlas books downloaded on 27 October 2026 —
        rebuilt as a routed Next.js reading experience: 30 sections, 165
        embedded original images, chapter navigation, and a research lens.
        The original 110&nbsp;MB HTML files stay untouched in the Atlas folder
        as the source of truth; the text below is their content, presented
        section by section.
      </p>
      <div className="atlas-grid">
        <article className="atlas-card" style={{ margin: 0 }}>
          <h3>📕 Hybrid Edition</h3>
          <p>
            Read as a story, inspect as an engineer. Historical path
            (communication needs → governance → supply chains → leadership)
            and career path (silicon → kernel → cloud → scheduling) through
            the same 30 sections.
          </p>
          <p style={{ marginTop: 10 }}>
            <Link href="/atlas/v1/from-human-communication-to-interconnected-digital-systems">Start from the introduction →</Link>
          </p>
        </article>
        <article className="atlas-card" style={{ margin: 0 }}>
          <h3>🔬 Research &amp; Strategy Edition</h3>
          <p>
            The same 29 sections with a different introduction: architecture
            of power, markets &amp; technology; different systems, recurring
            problems; power is not a metaphor for a CPU; research pathways.
            Research validation remains in progress, per its own manifest.
          </p>
          <p style={{ marginTop: 10 }}>
            <Link href="/atlas/v1/from-human-communication-to-interconnected-digital-systems#research-edition">Read the research introduction →</Link>
          </p>
        </article>
      </div>
      <div className="atlas-panel atlas-verify" style={{ marginTop: 20 }}>
        <span className="atlas-tag">Honesty note — from the V1 manifest itself</span>
        <p style={{ margin: "6px 0 0" }}>
          V1 states it is <b>not</b> a certification that every prior
          conversation was recovered verbatim or every historical correction
          audited. This Next.js edition keeps that qualifier attached: text is
          presented as the books present it, with the Atlas safeguards
          (analogies are teaching models, not identities) carried on the
          categorized pages.
        </p>
      </div>
      <h2>All {V1_META.sections} sections</h2>
      <div className="atlas-grid">
        {V1_SECTIONS.map((sec, i) => (
          <Link key={sec.slug} href={`/atlas/v1/${sec.slug}`} className="atlas-card" style={{ margin: 0 }}>
            <span className="atlas-tag">Section {String(i + 1).padStart(2, "0")} · {sec.imgs} original images</span>
            <h3 style={{ marginTop: 8 }}>{sec.title}</h3>
            <p>{blurb(sec)}</p>
          </Link>
        ))}
      </div>
      <p style={{ marginTop: 24 }}>
        Original images live in the source books; browse the photo galleries:{" "}
        <Link href="/atlas/study-notes">Study notes gallery</Link> ·{" "}
        <Link href="/atlas/notebook">Original notebook</Link> ·{" "}
        <Link href="/atlas/study-notes-categorized">Categorized study notes</Link>
      </p>
    </div>
  );
}
