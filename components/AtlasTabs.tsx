"use client";

import { useState, type ReactNode } from "react";

export interface AtlasTab { label: string; content: ReactNode }

/** Advanced Atlas UI: layered reading, as in the prototype's own legend.
 *  ✍️ Original = what the source notes say. 🧭 Editorial = structured reading.
 *  ✨ AI explanations = worked examples and context. ✅ Verify = corrections and limits. */
export default function AtlasTabs({ tabs }: { tabs: AtlasTab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "16px 0" }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            style={{
              border: "1px solid var(--line)", borderRadius: 30, padding: "8px 14px",
              fontSize: 13, cursor: "pointer",
              background: active === i ? "var(--hero)" : "var(--surface)",
              color: "var(--ink)", fontWeight: active === i ? 800 : 400,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="atlas-panel" style={{ marginTop: 0 }}>{tabs[active].content}</div>
    </div>
  );
}
