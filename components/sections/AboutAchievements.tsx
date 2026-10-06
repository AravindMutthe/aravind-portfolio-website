import Reveal from "@/components/Reveal";

const ACHIEVEMENTS = [
  { num: "02", text: "Years of professional DevOps & SRE experience" },
  { num: "03", text: "Computing qualifications — diploma to B.Tech to MS" },
  { num: "$0", text: "Monthly infra spend on the Axon API, live on GCP Cloud Run" },
  { num: "03", text: "Production sites & APIs live right now" },
];

const DELAYS = ["", "d1", "d2", "d3"] as const;

/** About page: honest achievement numbers. */
export default function AboutAchievements() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="about-sec" style={{ marginBottom: 0 }}>
          <Reveal>
            <div className="sub-label">Achievements</div>
          </Reveal>
          <Reveal>
            <h2 className="sub-title">
              Numbers that <span className="grad">speak.</span>
            </h2>
          </Reveal>
          <div className="ach-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.num} delay={DELAYS[i % DELAYS.length]}>
                <div className="ach-card">
                  <div className="ach-num">{a.num}</div>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
