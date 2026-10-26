import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas notebook, pages 01–20 — Atlas",
  description:
    "The 20 original handwritten notebook pages, in sequence, with their provisional chapter assignments. Downscaled copies only; originals are untouched in the Atlas folder.",
};

const CHAPTER: Record<number, string> = {
  1: "Chapter 01 (provisional)", 2: "Chapters 01–02 (provisional, overlapping)",
  3: "Chapters 01–02 (provisional, overlapping)", 4: "Chapter 02 (provisional)",
  5: "Chapter 02 (provisional)", 6: "Chapter 02 (provisional)",
  7: "Chapter 03 (provisional)", 8: "Chapter 03 (provisional)",
  9: "Chapter 03 (provisional)", 10: "Chapter 03 (provisional)",
  11: "Chapter 02 (provisional)", 12: "Chapter 02 (provisional)",
  13: "Chapter 02 (provisional)", 14: "Chapter 02 (provisional)",
  15: "Chapter 04 (provisional)", 16: "Chapter 04 (provisional)",
  17: "Chapter 04 (provisional)", 18: "Chapter 04 (provisional)",
  19: "Chapter 05 (provisional)", 20: "Chapter 06 (provisional)",
};

const CAPTION: Record<number, string> = {
  1: "Why networks emerged: trade, telegraph and phone cutting days to minutes, banks and stock markets on instant prices.",
  10: "NIC path diagram: end customers, interfaces, drivers, kernel stack, net device, TCP/IP, OOB and BMC.",
};

export default function AtlasNotebook() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Sequence · Notebook 1 of 2</p>
      <h1 className="atlas-hero">Notebook pages 01–20</h1>
      <p className="atlas-lead">
        The original 2025 systems notebook, in page order. Images below are
        downscaled copies made for this page only. The originals in the Atlas
        folder were not modified, moved or re-encoded. Chapter assignments are
        provisional, from the Atlas prototype, and pages 02 and 03 are assigned
        to both chapters 01 and 02 there — that overlap is unresolved, not hidden.
        No full transcription is claimed; captions exist only where a page was
        individually viewed.
      </p>
      <div className="atlas-grid">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
          <figure key={n} className="atlas-card" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/atlas/notebook/page-${String(n).padStart(2, "0")}.jpg`} alt={`Notebook page ${n}`} loading="lazy" style={{ width: "100%", borderRadius: 8 }} />
            <figcaption style={{ marginTop: 10 }}>
              <span className="atlas-tag">Page {String(n).padStart(2, "0")} · {CHAPTER[n]}</span>
              <p style={{ margin: "6px 0 0", color: "var(--atlas-muted)", fontSize: 14 }}>
                {CAPTION[n] ?? "Caption pending line-by-line review."}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="atlas-panel">
        <p>
          Next in sequence: <Link href="/atlas/study-notes">Study notes, 129 photos →</Link>
        </p>
      </div>
    </div>
  );
}
