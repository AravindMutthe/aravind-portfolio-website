"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export interface LibraryItem {
  href: string; title: string; desc: string; tag: string;
  image?: string; shelf: string; concepts: string[];
}

const CONCEPTS = ["All", "Kernel", "Memory", "Networks", "Silicon", "Governance", "Scheduling", "Resources", "Interfaces", "Leadership", "History", "Methods", "Originals"];
const SHELVES = ["Curriculum", "Deep dives", "Original notebooks", "Reference"];

/** A proper personal library for the Atlas home: search the catalogue,
 *  filter by concept, and browse by shelf. Every card is one volume;
 *  concept tags are the cross-references that tie the shelves together. */
export default function AtlasLibrary({ items }: { items: LibraryItem[] }) {
  const [query, setQuery] = useState("");
  const [concept, setConcept] = useState("All");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) =>
      (concept === "All" || item.concepts.includes(concept)) &&
      (q === "" || `${item.title} ${item.desc} ${item.concepts.join(" ")}`.toLowerCase().includes(q))
    );
  }, [items, query, concept]);
  return (
    <div>
      <div className="atlas-panel" style={{ marginBottom: 24 }}>
        <label className="atlas-tag" htmlFor="atlas-search">🔍 Search the library catalogue</label>
        <input
          id="atlas-search"
          className="atlas-search"
          type="search"
          placeholder="Try: kernel, memory, NIC, governance, scheduling…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="atlas-concept-chips">
          {CONCEPTS.map((c) => (
            <button key={c} onClick={() => setConcept(c)} className={`atlas-concept-btn${concept === c ? " active" : ""}`}>
              {c}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)", margin: "12px 0 0" }}>
          {filtered.length} of {items.length} volumes match{concept !== "All" ? ` · concept: ${concept}` : ""}{query ? ` · search: “${query}”` : ""}. Concept tags are cross-references, not original labels.
        </p>
      </div>
      {SHELVES.map((shelf) => {
        const shelfItems = filtered.filter((item) => item.shelf === shelf);
        if (shelfItems.length === 0) return null;
        return (
          <div key={shelf}>
            <h2>📚 {shelf} <span style={{ fontSize: 14, color: "var(--muted)", fontFamily: "system-ui" }}>· {shelfItems.length} volumes</span></h2>
            <div className="atlas-grid">
              {shelfItems.map((item) => (
                <Link key={item.href} className="atlas-card atlas-rich" href={item.href}>
                  {item.image && <img src={item.image} alt="" loading="lazy" />}
                  <div className="atlas-rich-body">
                    <span className="atlas-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <p style={{ marginTop: 10 }}>{item.concepts.map((c) => <span key={c} className="atlas-chip">{c}</span>)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
      {filtered.length === 0 && (
        <div className="atlas-panel atlas-verify">
          <span className="atlas-tag">No match in the catalogue</span>
          <p style={{ margin: "6px 0 0" }}>Try a broader concept, or clear the search. Nothing is invented to fill a gap — an empty shelf stays empty until a source is reviewed.</p>
        </div>
      )}
    </div>
  );
}
