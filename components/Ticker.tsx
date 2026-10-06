const PILLS = [
  "Next.js 15",
  "TypeScript",
  "GCP Cloud Run",
  "Supabase",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Docker",
  "n8n",
  "Vercel AI SDK",
  "Prometheus",
  "Grafana",
  "Linux",
  "Bash",
  "GitOps",
  "AI Agents",
];

/**
 * Seamless ticker — the row is rendered twice inside .ticker-track so the
 * CSS `tick` animation (translateX -50%) loops without a gap.
 */
export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {PILLS.map((p) => (
          <span key={p} className="tick-pill">
            {p}
          </span>
        ))}
        {PILLS.map((p) => (
          <span key={`dup-${p}`} className="tick-pill">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
