/** Step-by-step system view, as in the Atlas prototype: nodes with a role
 *  and an example, connected by ↓ arrows. A teaching sequence, not a claim
 *  of historical causation or literal execution. */
export interface AtlasStep { emoji: string; title: string; text: string; example?: string }

export default function AtlasFlow({ steps }: { steps: AtlasStep[] }) {
  return (
    <div style={{ display: "grid", gap: 6, maxWidth: 760, margin: "20px auto" }}>
      {steps.map((step, i) => (
        <div key={step.title}>
          <div className="atlas-panel" style={{ margin: 0 }}>
            <b style={{ fontSize: 15 }}>{step.emoji} {i + 1} · {step.title}</b>
            <p style={{ margin: "3px 0", fontSize: 13 }}>{step.text}</p>
            {step.example && <p style={{ margin: "3px 0", fontSize: 12, color: "var(--accent)" }}>💡 {step.example}</p>}
          </div>
          {i < steps.length - 1 && <div style={{ textAlign: "center", color: "var(--accent)", fontSize: 22 }}>↓</div>}
        </div>
      ))}
    </div>
  );
}
