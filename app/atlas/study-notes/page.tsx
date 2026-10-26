import type { Metadata } from "next";
import Link from "next/link";
import { ATLAS_STUDY_NOTES } from "@/components/atlas-study-notes";

export const metadata: Metadata = {
  title: "Atlas study notes, 129 photos — Atlas",
  description:
    "The second handwritten notebook, categorized: three verified topics with deep explanations, then the full sequence by date. Originals untouched; reference copies only.",
};

const FEATURED = [
  { n: 1, title: "Mining and minerals", deep: "The notebook opens its science thread with extraction itself: mining is the taking of materials from the earth, and the materials divide by use. Metallic minerals — iron ore, copper, gold and silver in the note — are valued for the metals they yield and for the industries those metals feed. Non-metallic minerals serve a different economy, and fossil fuels serve energy. The deep point is classification by purpose, not just by chemistry: what a mineral is for decides how it is extracted, processed and traded. That same classification habit runs through the whole second notebook, which sorts things by what they do before it sorts them by what they are." },
  { n: 65, title: "Transistors and logic gates", deep: "A transistor is first a switch, and the notebook treats that switch as the brain of a decision: on or off, one bit, one choice. Two to four transistors combine into logic gates — AND, OR, NOT, NAND, NOR and XOR in the wider notes — and gates combine into specialised circuits. Adders do arithmetic, multiplexers route data, and memory holds a bit. The deep point is composition: a computer is not one clever device, it is millions and billions of identical switches arranged so that their combined decisions become calculation, routing and storage. Every higher layer in the Atlas, from drivers to cloud services, rests on that composition, and the notebook's transistor page is the bottom of that stack." },
  { n: 129, title: "Data backup and storage", deep: "Backup is defined by its purpose, not its device: copying data to a secure place so it survives loss. Archive is its slower sibling: data that is indexed and searchable but inactive, kept long-term. Storage then divides three ways, and the notebook keeps all three divisions at once. By how it connects: direct-attached storage plugged into a server, network-attached storage as a file server on a LAN, and a storage area network as its own fabric. By protocol: SMB and NFS for file sharing, iSCSI and Fibre Channel for block storage, S3 APIs and REST for cloud. By data model: file, block and object. Short-term retention lives on hard drives and tape; the medium matters less than the classification, because the classification decides what survives, what can be found, and what can be restored." },
];

function Card({ n, taken }: { n: number; taken: string }) {
  const f = FEATURED.find((x) => x.n === n);
  return (
    <figure key={n} className="atlas-card atlas-rich" style={{ margin: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/atlas/study-notes/${String(n).padStart(3, "0")}.jpg`} alt={`Study note ${n}, reference copy`} loading="lazy" />
      <div className="atlas-rich-body">
        <span className="atlas-tag">{f ? "Verified topic" : "Reference only"} · Note {String(n).padStart(3, "0")} · {taken || "no EXIF date"}</span>
        <h3 style={{ margin: "8px 0" }}>{f ? f.title : "Caption pending review"}</h3>
        <p style={{ margin: 0, color: "var(--atlas-muted)", fontSize: 14 }}>
          {f ? f.deep.slice(0, 220) + "…" : "Shown in sequence as reference. Topic not yet transcribed, so no caption is invented."}
        </p>
      </div>
    </figure>
  );
}

export default function AtlasStudyNotes() {
  const oct25 = ATLAS_STUDY_NOTES.filter((x) => x.taken.startsWith("2026:10:25"));
  const oct26 = ATLAS_STUDY_NOTES.filter((x) => x.taken.startsWith("2026:10:26"));
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Sequence · Notebook 2 of 2 · Rich cards, categorized</p>
      <h1 className="atlas-hero">Study notes, 129 photos</h1>
      <p className="atlas-lead">
        A second handwritten notebook, photographed with a Samsung SM-S721U on
        October 25–26, 2026. The original images were not touched: the cards
        below use downscaled reference copies only, and the originals in the
        Atlas folder remain exactly as photographed. Three topics were
        individually viewed and are explained in depth below. The rest are
        shown in full sequence, by date, as reference only, so the set is
        complete without inventing captions.
      </p>

      <section className="atlas-cat">
        <h2>Verified topics — deep explanation</h2>
        {FEATURED.map((f) => (
          <div key={f.n} className="atlas-panel" style={{ display: "grid", gridTemplateColumns: "minmax(0, 240px) 1fr", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/atlas/study-notes/${String(f.n).padStart(3, "0")}.jpg`} alt={`${f.title}, reference copy`} loading="lazy" style={{ width: "100%", borderRadius: 8 }} />
            <div>
              <span className="atlas-tag original">Note {String(f.n).padStart(3, "0")} · Verified</span>
              <h3 style={{ margin: "8px 0" }}>{f.title}</h3>
              <p>{f.deep}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="atlas-cat">
        <h2>October 25, 2026 — {oct25.length} photos</h2>
        <p className="atlas-deep">The first day of photographing this notebook, starting at 11:44. The opening note is mining and minerals; the rest of the day's notes are shown in order as reference, pending transcription.</p>
        <div className="atlas-grid">
          {oct25.map((x) => <Card key={x.n} n={x.n} taken={x.taken} />)}
        </div>
      </section>

      <section className="atlas-cat">
        <h2>October 26, 2026 — {oct26.length} photos</h2>
        <p className="atlas-deep">The second day, from morning to midday. It includes the transistor and logic-gate note at 11:04 and closes with data backup and storage at 12:00. Between those two verified points, the notes are shown in order as reference, pending transcription.</p>
        <div className="atlas-grid">
          {oct26.map((x) => <Card key={x.n} n={x.n} taken={x.taken} />)}
        </div>
      </section>

      <div className="atlas-panel">
        <p>
          Next in sequence: <Link href="/atlas/recovered-fragments">Recovered dated fragments →</Link>
        </p>
      </div>
    </div>
  );
}
