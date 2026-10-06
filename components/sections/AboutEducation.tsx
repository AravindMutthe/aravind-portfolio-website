import Reveal from "@/components/Reveal";

const CERTS = [
  {
    icon: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    title: "Google Cloud Certified",
    sub: "Professional Cloud Architect · Issued Jun 2024",
    verifyUrl: "https://ude.my/UC-b4742e8b-ea8c-42d9-bc05-ccdb2987a385",
  },
  {
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    title: "Microsoft Certified",
    sub: "Azure Fundamentals (AZ-900) · Issued Jun 2022",
    verifyUrl: "https://www.credly.com/badges/99cf10a0-5907-49e8-883e-2616a0a00517",
  },
  {
    icon: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
    title: "Linux Command-Line & Shell Scripting",
    sub: "Udemy · Issued May 2024",
    verifyUrl: "https://ude.my/UC-46ac4fac-bfda-4e51-907e-ed4f166eab20",
  },
];

const DELAYS = ["", "d1", "d2", "d3"] as const;

/** About page: education (official university logos) + certifications . */
export default function AboutEducation() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="about-sec">
          <Reveal>
            <div className="sub-label">Education</div>
          </Reveal>
          <Reveal>
            <h2 className="sub-title">
              Built on strong <span className="grad">foundations.</span>
            </h2>
          </Reveal>
          <div className="edu-grid">
            <Reveal>
              <div className="edu-card">
                <img
                  className="edu-logo"
                  src="/logos/rivier.svg"
                  alt="Rivier University logo"
                />
                <span className="edu-date">Completed May 2025</span>
                <h4>MS, Computer Science</h4>
                <p>Rivier University, Nashua, NH, USA · GPA 3.8/4.0</p>
              </div>
            </Reveal>
            <Reveal delay="d1">
              <div className="edu-card">
                <img
                  className="edu-logo"
                  src="/logos/jntu.png"
                  alt="JNTU Hyderabad logo"
                />
                <span className="edu-date">2017 – 2020</span>
                <h4>B.Tech, Computer Science</h4>
                <p>JNTU Hyderabad · Lateral Entry</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="about-sec" style={{ marginBottom: 0 }}>
          <Reveal>
            <div className="sub-label">Certifications</div>
          </Reveal>
          <Reveal>
            <h2 className="sub-title">
              Credentials that <span className="grad">count.</span>
            </h2>
          </Reveal>
          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <Reveal key={c.title} delay={DELAYS[i % DELAYS.length]}>
                <div className="cert-card">
                  <div className="cert-badge">
                    <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: c.icon }} />
                  </div>
                  <h4>{c.title}</h4>
                  <p>{c.sub}</p>
                  {c.verifyUrl && (
                    <a
                      className="cert-verify"
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      Verify &rarr;
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
