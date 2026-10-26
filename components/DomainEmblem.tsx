export type DomainId = "governance" | "business" | "finance" | "technology" | "industries" | "networks" | "silicon";

export const DOMAIN_META: Record<DomainId, { label: string; color: string }> = {
  governance: { label: "Governance", color: "#176b58" },
  business: { label: "Business", color: "#a67c2e" },
  finance: { label: "Finance", color: "#7a4a21" },
  technology: { label: "Technology", color: "#47617b" },
  industries: { label: "Industries", color: "#a34a28" },
  networks: { label: "Networks", color: "#2a7f7f" },
  silicon: { label: "Silicon", color: "#6b4a5e" },
};

function Paths({ id }: { id: DomainId }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (id) {
    case "governance":
      return (<g {...s}><path d="M12 3 L3 9 h18 Z" /><path d="M6 11 v8 M12 11 v8 M18 11 v8" /><path d="M3 21 h18" /></g>);
    case "business":
      return (<g {...s}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7 V5 a2 2 0 0 1 2-2 h4 a2 2 0 0 1 2 2 v2" /><path d="M3 13 h18" /></g>);
    case "finance":
      return (<g {...s}><path d="M3 19 L8 12 L12 15 L21 6" /><path d="M15 6 h6 v6" /></g>);
    case "technology":
      return (<g {...s}><circle cx="12" cy="12" r="3" /><path d="M12 3 v5 M12 16 v5 M3 12 h5 M16 12 h5" /><circle cx="12" cy="3" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="21" r="1.4" fill="currentColor" stroke="none" /><circle cx="3" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="21" cy="12" r="1.4" fill="currentColor" stroke="none" /></g>);
    case "industries":
      return (<g {...s}><path d="M2 20 V9 l6 4 V9 l6 4 V20 Z" /><path d="M17 20 v-9 h2 v9" /><path d="M2 20 h20" /></g>);
    case "networks":
      return (<g {...s}><path d="M12 7 L5 17 L19 17 Z" /><circle cx="12" cy="7" r="2.4" /><circle cx="5" cy="17" r="2.4" /><circle cx="19" cy="17" r="2.4" /></g>);
    case "silicon":
      return (<g {...s}><rect x="5" y="5" width="14" height="14" rx="2" /><circle cx="12" cy="12" r="3.4" /><path d="M9 5 V2 M15 5 V2 M9 22 v-3 M15 22 v-3 M5 9 H2 M5 15 H2 M22 9 h-3 M22 15 h-3" /></g>);
  }
}

export default function DomainEmblem({ id, size = 48 }: { id: DomainId; size?: number }) {
  const meta = DOMAIN_META[id];
  return (
    <span
      aria-label={`${meta.label} emblem`}
      title={meta.label}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: size, height: size, borderRadius: "50%", flexShrink: 0,
        background: "var(--atlas-paper, #faf8f2)", color: meta.color,
        border: `2px solid ${meta.color}`,
      }}
    >
      <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 24 24" aria-hidden="true">
        <Paths id={id} />
      </svg>
    </span>
  );
}
