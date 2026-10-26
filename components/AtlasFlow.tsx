/** Step-by-step system view, as in the Atlas prototype: numbered rail,
 *  nodes with a role and an example. A teaching sequence, not a claim
 *  of historical causation or literal execution. */
export interface AtlasStep { emoji: string; title: string; text: string; example?: string }

export default function AtlasFlow({ steps }: { steps: AtlasStep[] }) {
  return (
    <div className="atlas-flow">
      {steps.map((step, i) => (
        <div key={step.title} className="atlas-flow-step">
          <span className="atlas-flow-num">{i + 1}</span>
          <div className="atlas-panel">
            <b style={{ fontSize: 16 }}>{step.emoji} {step.title}</b>
            <p style={{ margin: "4px 0", fontSize: 14 }}>{step.text}</p>
            {step.example && <p style={{ margin: "4px 0", fontSize: 12.5, color: "var(--accent)" }}>💡 {step.example}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
