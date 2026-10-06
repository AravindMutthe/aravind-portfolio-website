import Reveal from "@/components/Reveal";

const S = (s: string) => `/logos/${s}.svg`;

const STEPS = [
  {
    num: "01",
    title: "Define",
    copy: "Everything as code — infrastructure, pipelines, policy. No snowflakes, no click-ops.",
  },
  {
    num: "02",
    title: "Automate",
    copy: "CI/CD on every commit — tested, gated, and shipped without ceremony.",
  },
  {
    num: "03",
    title: "Run",
    copy: "Containers on managed cloud — self-healing by design, scaled on demand.",
  },
  {
    num: "04",
    title: "Observe",
    copy: "Metrics, logs, and alerts — so issues surface before customers notice.",
  },
];

const PIPE = [
  { name: "Git", logo: S("git"), alt: "Git logo" },
  { name: "GitHub Actions", logo: S("githubactions"), alt: "GitHub Actions logo" },
  { name: "Docker", logo: S("docker"), alt: "Docker logo" },
  { name: "Kubernetes", logo: S("kubernetes"), alt: "Kubernetes logo" },
  { name: "Prometheus", logo: S("prometheus"), alt: "Prometheus logo" },
];

/** "How I work" band — methodology steps + an animated logo pipeline strip. */
export default function HowIWork() {
  return (
    <section className="block how-block">
      <div className="wrap">
        <Reveal>
          <div className="sec-label">How I work</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">
            From commit to <span className="grad">calm production.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="sec-sub">
            A simple, repeatable way of shipping — boring in all the right ways.
          </p>
        </Reveal>

        <div className="how-grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={(["", "d1", "d2", "d3"] as const)[i]}>
              <div className="how-step">
                <div className="how-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="pipe" aria-label="Delivery pipeline">
            {PIPE.map((p, i) => (
              <span key={p.name} className="pipe-item">
                {i > 0 && (
                  <span className="pipe-arrow" aria-hidden="true">
                    →
                  </span>
                )}
                <span className="pipe-node">
                  <img src={p.logo} alt={p.alt} loading="lazy" />
                  <span>{p.name}</span>
                </span>
              </span>
            ))}
          </div>
          <p className="pipe-cap">THE PIPELINE I SHIP WITH</p>
        </Reveal>
      </div>
    </section>
  );
}
