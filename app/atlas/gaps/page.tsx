import type { Metadata } from "next";
import Link from "next/link";
import AtlasArticle from "@/components/AtlasArticle";

export const metadata: Metadata = {
  title: "What the Atlas does not yet contain — Atlas",
  description: "Labelled gaps from the README mapping: topics with no page, evidence that is genuinely missing, and material excluded by policy — stated, never filled.",
};

const GAPS: [string, string, string][] = [
  ["AI agents in business and network operations", "Who develops, owns, sells and consumes agents, and how they are governed. The era thread names the question; no page answers it.", "Would need editorial synthesis from the 09-29 era thread, labelled as such."],
  ["ERP / pre-ERP thread", "Telegraph ledgers → MRP → MRP II → ERP → cloud/AI. The 09-27 enterprise thread and 22:17 retrieval point at it; no page walks it.", "Would need editorial synthesis from those two threads, labelled as such."],
  ["Historical employment and business eras", "Agrarian → feudal → merchant → chartered-company → industrial → telegraph → digital → cloud/AI employment taxonomy (09-29 23:26 retrieval).", "Would need editorial synthesis from that retrieval, labelled as such."],
  ["Cross-era framework", "Including Indian liberalization and digitization periods (09-30 14:11 retrieval). No page covers the framework or those periods specifically.", "Would need editorial synthesis from that retrieval, labelled as such."],
  ["NIC ecosystem as a dedicated topic", "From ARPANET to AI clusters: ESnet, WLCG, IBTA/RoCE, suppliers, AI clusters (09-26 evidence row). Partially in Ch 03 and semiconductors; no dedicated page.", "Would need editorial synthesis from that evidence row, labelled as such."],
  ["Reverse-engineering framing", "Tracing AI networks backward to telegraph (routing, namespaces, NICs, security zones, trade analogies). Forward direction is covered in Linux datapaths and Kubernetes networks; the backward method has no page.", "Would need a new editorial page carrying the README caveat: analogies are not literal equivalents."],
  ["Open-source network-AI business integration", "Connecting open-source, AI services, and business/government vocabulary (10-02 thread). Closest is engineering notes; no page connects all three.", "Would need editorial synthesis from that thread, labelled as such."],
  ["Tern engineering, item by item", "WB-437/438, the Cursor/Figma multi-file workflow, the web roadmap stack, repo-setup specifics. Engineering notes cover only the themes.", "Would need the underlying work records, which are not in the recovered evidence."],
  ["“Conscious System Architecture”", "A title in the 10-05 evidence row, with a synopsis only. There is nothing more to publish.", "Nothing — a title is not a topic. Listed here so it is not mistaken for one."],
  ["Nuclear / autonomous systems, UAV, industrial autonomy", "Named in the 09-29 evidence row. No page, no further recovered text.", "Would need recovered evidence that does not exist in the Atlas folder."],
  ["Technology-evaluation methodology", "Currently a line in engineering notes and methods. No dedicated methodology page.", "Would need editorial synthesis from the 11-03 evaluation thread, labelled as such."],
  ["Tern project record", "A structured page: repo, packages, work items. Engineering notes cover themes; the record structure is not published.", "Would need the project records themselves."],
  ["Ontology: the AI distinction", "AI traffic over ordinary networks vs AI-managed operations vs communication among AI agents, with human approval and auditing. No concepts entry covers it.", "Would need a new concepts entry, labelled editorial."],
];

export default function Gaps() {
  return (
    <AtlasArticle
      eyebrow="Reference · From the README mapping · Labelled gaps, never filled"
      title="What the Atlas does not yet contain"
      byline="Aravind · Systems Knowledge Atlas · Mapped from README (3).md, the superset README · Gaps are statements, not content"
      related={[
        { href: "/atlas/methods-safeguards", label: "Methods & safeguards — why these gaps stay open" },
        { href: "/atlas/evidence-register", label: "Evidence register — what is actually evidenced" },
        { href: "/atlas/source-index", label: "Source index — trace any claim to its file" },
        { href: "/atlas", label: "Atlas library — back to the shelves" },
      ]}
    >
      <p>
        A library that hides its gaps lies about its coverage. This page lists
        what the README mapping found with <em>no live page</em>, what evidence
        is genuinely missing, and what is excluded by policy. Nothing below is
        filled in, summarized into existence, or softened: each gap states what
        would actually close it, and several can only be closed by evidence
        that does not exist in the Atlas folder.
      </p>
      <div className="atlas-divider" aria-hidden="true">✦ ✦ ✦</div>
      <h2>Topics with no page</h2>
      {GAPS.map(([title, what, closes]) => (
        <div key={title} className="atlas-panel">
          <h3 style={{ marginBottom: 6 }}>{title}</h3>
          <p style={{ margin: "4px 0" }}>{what}</p>
          <p style={{ margin: "4px 0", fontSize: 13.5, color: "var(--accent)" }}><b>What would close it:</b> {closes}</p>
        </div>
      ))}
      <h2>Evidence that is genuinely missing</h2>
      <div className="atlas-panel atlas-verify">
        <span className="atlas-tag">Missing, not withheld</span>
        <p style={{ margin: "6px 0 0" }}>
          Full August 2025 coverage; all of December 2025 and January 2026;
          original attachments, diagrams, code and repository snapshots;
          per-message IDs, timestamps and roles; traceability from each item
          to a conversation ID and source file; any notebook page-to-chat
          mapping; and the original <code>conversations.json</code> export
          itself. Until a genuine account export is supplied, no
          exhaustive-coverage claim is warranted — the README says so, and
          this page repeats it.
        </p>
      </div>
      <h2>Excluded by policy — never “closed” by publishing</h2>
      <div className="atlas-panel atlas-original">
        <span className="atlas-tag">Policy exclusion</span>
        <p style={{ margin: "6px 0 0" }}>
          Email-derived private employment material (including the 09-02
          internship communication and 09-03 onboarding items), India–US
          company-structure rows, and visa discussion are excluded by the
          README's own privacy rule. Their absence here is not an oversight
          to fix; publishing them would break the boundary the Atlas itself
          sets. Likewise, notebook page 07's handwritten personal names and
          page 08's device-identifier string are never reproduced.
        </p>
      </div>
      <h2>Two source systems, kept separate</h2>
      <p>
        The README sources 2025 evidence. The 129 study photos were taken in
        October 2026 and are entirely outside README scope. The categorized
        design keeps their provenance visibly separate — README/2025-evidence
        versus October 2026 photos — with the concepts index as the bridge,
        never a merged timeline. README citations are never used to support
        second-notebook claims, and photo evidence is never used to support
        README claims.
      </p>
      <p>
        <Link href="/atlas">← Back to the Atlas library</Link>
      </p>
    </AtlasArticle>
  );
}
