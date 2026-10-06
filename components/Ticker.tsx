const S = (s: string) => `/logos/${s}.svg`;

const ITEMS = [
  { name: "Next.js 15", logo: S("nextdotjs"), alt: "Next.js logo" },
  { name: "TypeScript", logo: S("typescript"), alt: "TypeScript logo" },
  { name: "GCP Cloud Run", logo: S("googlecloud"), alt: "Google Cloud logo" },
  { name: "Supabase", logo: S("supabase"), alt: "Supabase logo" },
  { name: "Kubernetes", logo: S("kubernetes"), alt: "Kubernetes logo" },
  { name: "Terraform", logo: S("terraform"), alt: "Terraform logo" },
  { name: "GitHub Actions", logo: S("githubactions"), alt: "GitHub Actions logo" },
  { name: "Docker", logo: S("docker"), alt: "Docker logo" },
  { name: "n8n", logo: S("n8n"), alt: "n8n logo" },
  { name: "Vercel AI SDK", logo: S("vercel"), alt: "Vercel logo" },
  { name: "Prometheus", logo: S("prometheus"), alt: "Prometheus logo" },
  { name: "Grafana", logo: S("grafana"), alt: "Grafana logo" },
  { name: "Linux", logo: S("linux"), alt: "Linux logo" },
  { name: "Python", logo: S("python"), alt: "Python logo" },
  { name: "Git", logo: S("git"), alt: "Git logo" },
  { name: "PostgreSQL", logo: S("postgresql"), alt: "PostgreSQL logo" },
];

/**
 * Seamless logo marquee — the row is rendered twice inside .ticker-track so the
 * CSS `tick` animation (translateX -50%) loops without a gap.
 * Logos are the original brand artwork, never recolored or filtered.
 */
export default function Ticker() {
  const row = (dup: boolean) => (
    <>
      {ITEMS.map((p) => (
        <span key={`${dup ? "dup-" : ""}${p.name}`} className="tick-pill">
          <img src={p.logo} alt={p.alt} loading="lazy" />
          {p.name}
        </span>
      ))}
    </>
  );
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
