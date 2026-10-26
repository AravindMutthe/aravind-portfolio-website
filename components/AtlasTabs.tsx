"use client";

import { useState, type ReactNode } from "react";

export interface AtlasTab { label: string; content: ReactNode }

/** Layered reading, as in the prototype's own legend.
 *  ✍️ Original = what the source notes say. 🧭 Editorial = structured reading.
 *  ✨ AI explanations = worked examples and context. ✅ Verify = corrections and limits. */
export default function AtlasTabs({ tabs }: { tabs: AtlasTab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="atlas-tabs" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`atlas-tab-btn${active === i ? " active" : ""}`}
            aria-selected={active === i}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="atlas-panel" style={{ marginTop: 0 }}>{tabs[active].content}</div>
    </div>
  );
}
