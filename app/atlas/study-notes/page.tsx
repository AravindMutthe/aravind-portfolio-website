import type { Metadata } from "next";
import Link from "next/link";
import { ATLAS_STUDY_NOTES } from "@/components/atlas-study-notes";

export const metadata: Metadata = {
  title: "Atlas study notes, 129 photos — Atlas",
  description:
    "The second handwritten notebook, photographed October 25–26, 2026, in timestamp order. Downscaled copies only; originals are untouched in the Atlas folder.",
};

const CAPTION: Record<number, string> = {
  1: "Mining and minerals: metallic minerals (iron ore, copper, gold, silver), non-metallic minerals and fossil fuels.",
  65: "Transistors and logic gates: binary switch, 2–4 transistors making logic gates, gates combined into specialised circuits.",
  129: "Data backup and storage: copying data to a secure place, short-term retention on HDD and tape, NAS by SMB/NFS, SAN by iSCSI/FC, cloud by S3 API/REST, DAS, NAS and SAN by how connected.",
};

export default function AtlasStudyNotes() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Sequence · Notebook 2 of 2</p>
      <h1 className="atlas-hero">Study notes, 129 photos</h1>
      <p className="atlas-lead">
        A second handwritten notebook, photographed with a Samsung SM-S721U on
        October 25–26, 2026, in timestamp order. Only three photos were
        individually viewed and captioned (001, 065, 129). The rest are shown
        in sequence, untranscribed, so the set is complete without inventing
        captions. Images are downscaled copies; the originals in the Atlas
        folder were not modified. Note the anomaly: all 129 originals are
        exactly 3,339,914 bytes each, though their contents differ — worth a
        re-export check before they are treated as archival originals.
      </p>
      <div className="atlas-grid">
        {ATLAS_STUDY_NOTES.map((n) => (
          <figure key={n.n} className="atlas-card" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={n.file} alt={`Study note ${n.n}`} loading="lazy" style={{ width: "100%", borderRadius: 8 }} />
            <figcaption style={{ marginTop: 10 }}>
              <span className="atlas-tag">Note {String(n.n).padStart(3, "0")} · {n.taken || "no EXIF date"}</span>
              <p style={{ margin: "6px 0 0", color: "var(--atlas-muted)", fontSize: 14 }}>
                {CAPTION[n.n] ?? "Caption pending review."}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="atlas-panel">
        <p>
          Next in sequence: <Link href="/atlas/recovered-fragments">Recovered dated fragments →</Link>
        </p>
      </div>
    </div>
  );
}
