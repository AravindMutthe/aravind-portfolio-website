import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Ticker from "@/components/Ticker";

const STATS = [
  { to: 2, prefix: "", label: "Years professional experience" },
  { to: 3, prefix: "", label: "Production systems live" },
  { to: 0, prefix: "$", label: "Monthly infra spend" },
  { to: 2, prefix: "", label: "Cloud certifications" },
];

/** Homepage hero: status pill, headline, CTAs, tech ticker, animated stats. */
export default function HomeHero() {
  return (
    <div className="hero-stage">
      <header className="home-hero">
        <div className="wrap">
          <Reveal>
            <div className="status">
              <span className="dot"></span> Available for immediate joining — freelance &amp; full-time
            </div>
          </Reveal>
          <Reveal delay="d1">
            <h1>
              Infrastructure that <span className="grad">ships fast</span> and{" "}
              <span className="grad">never sleeps.</span>
            </h1>
          </Reveal>
          <Reveal delay="d1">
            <p className="lead">
              I&apos;m <strong>Aravind Mutte</strong>, a Cloud DevOps &amp; Site Reliability Engineer
              with about <strong>2 years</strong> of professional experience across enterprise
              environments in India — plus production systems I&apos;ve designed, built, and run
              myself on <strong>AWS, Azure, and GCP</strong>.
            </p>
          </Reveal>
          <Reveal delay="d2">
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-gold">
                Start a Project
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay="d3">
          <Ticker />
        </Reveal>

        <div className="wrap">
          <Reveal>
            <div className="hero-meta">
              {STATS.map((s) => (
                <div key={s.label} className="hm">
                  <div className="v">
                    {s.prefix}
                    <CountUp to={s.to} />
                  </div>
                  <div className="k">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>
    </div>
  );
}
