import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas source index — Atlas",
  description:
    "Every file in the Atlas folder, accounted for: duplicates, unique sources, what is in this endpoint and what was left out.",
};

export default function AtlasSourceIndex() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>Source index · 2026-10-26 scan</p>
      <h1 className="atlas-hero">Atlas source index</h1>
      <p className="atlas-lead">
        The Atlas folder holds 238 loose files, 1.5 GB. By content hash there are
        191 unique files and 47 extra copies. Nothing was silently dropped: this
        page says, for each group, whether it is in this endpoint, a duplicate,
        or deliberately left out.
      </p>

      <h2>README scan — one superset, four redundant variants</h2>
      <p>
        Five README variants were compared heading by heading.{" "}
        <strong>README (3).md is the superset</strong>: it contains every heading
        in README.md, README-1.md, README (1).md and README (2).md, plus a final
        section, &quot;Additional recovered dated conversations&quot;. No earlier
        variant holds a heading that README (3).md lacks. The four earlier
        variants are therefore redundant and can be removed from the working set
        without losing content — keep README (3).md plus the zip-only supplements
        it points to.
      </p>
      <table>
        <thead><tr><th>File</th><th>Headings</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>README (3).md</td><td>59</td><td>Keep — superset</td></tr>
          <tr><td>README-1.md</td><td>58</td><td>Redundant — subset of (3)</td></tr>
          <tr><td>README (2).md</td><td>56</td><td>Redundant — subset of (3)</td></tr>
          <tr><td>README (1).md</td><td>54</td><td>Redundant — subset of (3)</td></tr>
          <tr><td>README.md</td><td>53</td><td>Redundant — subset of (3)</td></tr>
          <tr><td>ERA_TIMELINE_README.md = atlas-timeline.md</td><td>—</td><td>Duplicate pair — keep one copy</td></tr>
        </tbody>
      </table>

      <h2>Image scan — two notebook sets, not one</h2>
      <p>
        Sample pages were viewed at full thumbnail resolution on 2026-10-26.
        Page 01 (dated 29 Sep) covers why networks emerged: trade, telegraph and
        phone cutting days to minutes, banks and stock markets on instant prices.
        Page 10 diagrams the NIC path: end customers, interfaces, drivers, kernel
        stack, net device, TCP/IP, OOB and BMC. Both match their provisional
        chapter assignments. They are legible, but no line-by-line transcription
        is claimed yet.
      </p>
      <table>
        <thead><tr><th>Image set</th><th>Count</th><th>What it is</th><th>In this endpoint</th></tr></thead>
        <tbody>
          <tr>
            <td>Notebook pages 01–20, 1152×1536, no EXIF</td>
            <td>20 unique, ×3 locations = 60 files</td>
            <td>2025 systems Atlas notebook, chapters 01–06 provisional mapping</td>
            <td>Indexed and summarised; scans themselves not embedded pending transcription review</td>
          </tr>
          <tr>
            <td>Timestamp photos image-*.jpg, 1440×1080, Samsung SM-S721U</td>
            <td>129 files, Oct 25 11:44 to Oct 26 ~12:00</td>
            <td>A second, unindexed handwritten notebook: mining and minerals, transistors and logic gates, data backup and storage (DAS, NAS, SAN)</td>
            <td>Not yet — unindexed, no transcription, no chapter mapping. Needs its own index before any publication</td>
          </tr>
        </tbody>
      </table>
      <p style={{ color: "var(--atlas-muted)", fontSize: 14 }}>
        Anomaly, reported not explained: all 129 timestamp photos are exactly
        3,339,914 bytes each, though their compressed-image hashes are all
        distinct. Identical size across 129 different photos is unusual and
        worth a re-export check before any of them are treated as archival originals.
      </p>

      <h2>Large HTML exports — same text, different image bundles</h2>
      <p>
        Twelve large HTML files (32–87 MB each) carry near-identical chapter text
        wrapped around embedded base64 images. They are not twelve different books.
        Keep one canonical export, archive the rest as duplicates.
      </p>

      <h2>Zip archives — repackaging, not new content</h2>
      <p>
        Twelve zips mostly repackage the same small text files, the same large
        HTML, or the same 20 notebook pages. The one zip worth keeping separately
        is the conversations zip, which holds the only copies of the 2026-10-26
        supplements: newly recovered dated fragments, additional verified history,
        additional history context and recovered message evidence.
      </p>

      <h2>Deliberately left out of this endpoint</h2>
      <ul>
        <li>Private employment communication, including internship and onboarding details and contact names.</li>
        <li>Company-formation, immigration and visa material.</li>
        <li>The 129 unindexed timestamp photos, until they are transcribed and mapped.</li>
        <li>Duplicate exports, duplicate notebook copies and zip archives.</li>
        <li>Download-test files, which contain no content.</li>
      </ul>

      <div className="atlas-panel atlas-verify">
        <span className="atlas-tag verify">Draft · verification pending</span>
        <p style={{ margin: "8px 0 0" }}>
          Gaps that only a genuine account export can close: December 2025 to
          January 2026, and August 1–27, 2025. Nothing in this endpoint presents
          summaries as verbatim transcripts.
        </p>
      </div>
      <p><Link href="/atlas">Back to the Atlas index →</Link></p>
    </div>
  );
}
