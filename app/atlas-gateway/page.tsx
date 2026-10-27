import type { Metadata } from "next";

/* Curated gateway to the standalone Aravind Systems Atlas (Phase 3 Step 5).
   This page introduces Atlas and links OUT to its canonical routes only.
   It republishes no chapter text, no chapter data, and no original-note
   material. Full articles and chapters live on Aravind Systems Atlas. */

const ATLAS = "https://aravind-systems-atlas.vercel.app";

export const metadata: Metadata = {
  title: "Aravind Systems Atlas — Curated Gateway",
  description:
    "A short introduction to Aravind Systems Atlas, a professional cross-industry technology and economic knowledge hub, with deep links to its library, learning paths, and System Explorer.",
  alternates: {
    canonical: "https://aravind-portfolio-next.vercel.app/atlas-gateway",
  },
};

const ENTRIES = [
  {
    href: `${ATLAS}/`,
    title: "Atlas home",
    desc: "Start at the standalone Atlas hub.",
  },
  {
    href: `${ATLAS}/library/`,
    title: "Library",
    desc: "Browse the full chapter library by topic.",
  },
  {
    href: `${ATLAS}/learning-paths/`,
    title: "Learning Paths",
    desc: "Guided sequences through the chapters, in reading order.",
  },
  {
    href: `${ATLAS}/system-explorer/`,
    title: "System Explorer",
    desc: "A guided teaching model: how a network interface is set up, how an HTTPS request flows, and how to reason through failures.",
  },
];

export default function AtlasGatewayPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <span className="n">Atlas</span> Curated gateway
          </div>
          <h1 className="hero-title">Aravind Systems Atlas</h1>
          <p className="lead">
            Professional Cross-Industry Technology and Economic Knowledge Hub.
            A curated library of cross-industry technology and economic
            knowledge. Its full articles live on the standalone Atlas site;
            this page is only a doorway in.
          </p>
        </div>
      </header>

      <div className="wrap">
        <div className="grid2">
          {ENTRIES.map((entry) => (
            <article className="card" key={entry.href}>
              <h3>
                <a href={entry.href}>{entry.title}</a>
              </h3>
              <p>{entry.desc}</p>
            </article>
          ))}
        </div>

        <p style={{ marginTop: "28px" }}>
          Full articles and chapters live on Aravind Systems Atlas only. This
          gateway does not republish them, and no original-note material is
          copied here. Canonical edition: Release v1-consolidated-001.
        </p>
      </div>
    </>
  );
}
