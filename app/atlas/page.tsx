import type { Metadata } from "next";
import Link from "next/link";
import { ATLAS_SECTIONS } from "@/components/atlas-sections";

export const metadata: Metadata = {
  title: "Atlas — Aravind Mutte",
  description:
    "Systems Knowledge Atlas endpoint: curriculum, notes, evidence and source index, in a separate notes style, separate from the portfolio blog.",
};

export default function AtlasHub() {
  const curriculum = ATLAS_SECTIONS.filter((s) => s.kind === "Curriculum");
  const notes = ATLAS_SECTIONS.filter((s) => s.kind === "Notes");
  return (
    <div className="atlas-wrap">
      <p className="atlas-eyebrow">Separate endpoint · Notes style</p>
      <h1 className="atlas-hero">Systems Knowledge Atlas</h1>
      <p className="atlas-lead">
        From human communication to interconnected digital systems. A systems-level
        journey through communications, business, finance, governance, silicon,
        networking, software, interfaces and leadership. The original research
        remains visibly distinct from added explanations.
      </p>
      <div className="atlas-chips">
        <span className="atlas-chip">20 original notebook pages, indexed not embedded</span>
        <span className="atlas-chip">7 curriculum chapters + overview</span>
        <span className="atlas-chip">4 notes: timeline, evidence, engineering, methods</span>
        <span className="atlas-chip">Summaries, not verbatim transcripts</span>
      </div>

      <div className="atlas-panel atlas-original">
        <span className="atlas-tag original">Original sources retained</span>
        <p>
          Handwritten notebook pages are the authoritative source for the curriculum.
          Their chapter assignments are provisional: final assignment requires
          line-by-line source review. No full transcription is claimed.
        </p>
      </div>
      <div className="atlas-panel atlas-enhanced">
        <span className="atlas-tag enhanced">Enhanced study material</span>
        <p>
          Explanations, learning flows and examples added by the assistant are
          labelled as added material, not as original notes.
        </p>
      </div>
      <div className="atlas-panel atlas-verify">
        <span className="atlas-tag verify">Draft · verification pending</span>
        <p>
          Coverage is partial August to November 2025. December 2025 and January 2026
          are unverified. A complete account export would be needed to close those gaps.
          This endpoint is not the portfolio blog, and it does not add Atlas content to it.
        </p>
      </div>

      <h2>Curriculum</h2>
      <div className="atlas-grid">
        {curriculum.map((s) => (
          <Link key={s.slug} className="atlas-card atlas-rich" href={`/atlas/${s.slug}`}>
            {s.image && <img src={s.image} alt="" loading="lazy" />}
            <div className="atlas-rich-body">
              <span className="atlas-tag">{s.kind} · {s.readTime}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2>Notes</h2>
      <div className="atlas-grid">
        {notes.map((s) => (
          <Link key={s.slug} className="atlas-card atlas-rich" href={`/atlas/${s.slug}`}>
            {s.image && <img src={s.image} alt="" loading="lazy" />}
            <div className="atlas-rich-body">
              <span className="atlas-tag">{s.kind} · {s.readTime}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2>In sequence</h2>
      <p>
        The full Atlas, in order, with enhancements and without touching the
        originals: overview, chapters 01–07, era timeline, evidence register,
        engineering notes, methods and safeguards, then the two notebooks in
        page order, then the recovered dated fragments, then the source index.
      </p>
      <div className="atlas-grid">
        <Link className="atlas-card" href="/atlas/notebook">
          <span className="atlas-tag">Sequence · 20 pages</span>
          <h3>Notebook pages 01–20</h3>
          <p>The original 2025 systems notebook, in page order, downscaled copies only.</p>
        </Link>
        <Link className="atlas-card" href="/atlas/study-notes">
          <span className="atlas-tag">Sequence · 129 photos</span>
          <h3>Study notes, 129 photos</h3>
          <p>The second notebook, photographed October 25–26, 2026, in timestamp order.</p>
        </Link>
        <Link className="atlas-card" href="/atlas/recovered-fragments">
          <span className="atlas-tag">Sequence · Aug–Nov 2025</span>
          <h3>Recovered dated fragments</h3>
          <p>The zip-only supplements, in chronological order, privacy items omitted.</p>
        </Link>
      </div>

      <div className="atlas-panel">
        <h2 style={{ marginTop: 0 }}>Source index</h2>
        <p>
          Every Atlas file, accounted for: what it is, whether it is a duplicate,
          whether it is in this endpoint, and what was deliberately left out and why.
        </p>
        <Link href="/atlas/source-index">Open the source index →</Link>
      </div>

      <p style={{ color: "var(--atlas-muted)", fontSize: 13 }}>
        Two learning paths: engineering and interviews (hardware, NIC, drivers, kernel,
        TCP/IP, systems and operations), and history, business and founders (trade and
        finance, communications, institutions, industry supply chains, business strategy).
      </p>
    </div>
  );
}
