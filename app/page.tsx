import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Ticker from "@/components/Ticker";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";

export default function HomePage() {
  return (
    <>
      <div className="hero-stage">
        {/* NOTE: the static site's hero video is display:none — omitted here (zero visual effect). */}
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
                <Link href="/contact" className="btn">
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
                <div className="hm">
                  <div className="v">
                    <CountUp to={2} />
                  </div>
                  <div className="k">Years professional experience</div>
                </div>
                <div className="hm">
                  <div className="v">
                    <CountUp to={3} />
                  </div>
                  <div className="k">Production systems live</div>
                </div>
                <div className="hm">
                  <div className="v">
                    $<CountUp to={0} />
                  </div>
                  <div className="k">Monthly infra spend</div>
                </div>
                <div className="hm">
                  <div className="v">
                    <CountUp to={2} />
                  </div>
                  <div className="k">Cloud certifications</div>
                </div>
              </div>
            </Reveal>
          </div>
        </header>
      </div>

      <section className="block section-dark">
        <div className="wrap">
          <Reveal>
            <div className="sec-label">What I do</div>
          </Reveal>
          <Reveal>
            <h2 className="sec-title">
              Two ways to <span className="grad">work together</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="sec-sub">
              Whether you need a platform built from scratch or an existing one made boring — in the best
              way.
            </p>
          </Reveal>

          <Reveal variant="l">
            <div className="feature">
              <div className="f-copy">
                <h3>For businesses — freelance DevOps</h3>
                <p>
                  Cloud infrastructure, CI/CD pipelines, Kubernetes platforms, and cost optimization —
                  delivered as fixed-scope engagements. You get senior-level DevOps without the hiring cycle.
                </p>
                <Link className="link-arrow" href="/services">
                  See all services <span className="arr">→</span>
                </Link>
              </div>
              <div className="f-visual">
                <img
                  src="img/services-neon.jpg"
                  alt="Vibrant 3D illustration of a DevOps pipeline — gears, containers and cloud nodes"
                  loading="lazy"
                />
                <span className="big">01</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="r">
            <div className="feature">
              <div className="f-copy">
                <h3>For employers — full-time roles</h3>
                <p>
                  Two years across Infosys and PragmaEdge — enterprise B2B integration and production
                  Linux — plus independent cloud builds I run myself on modern platforms.
                </p>
                <Link className="link-arrow" href="/experience">
                  See experience <span className="arr">→</span>
                </Link>
              </div>
              <div className="f-visual">
                <img
                  src="img/about-neon.jpg"
                  alt="Neon-lit futuristic data center corridor"
                  loading="lazy"
                />
                <span className="big">02</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal variant="scale">
            <ParallaxPoster className="poster">
              <img
                src="img/contact-neon.jpg"
                alt="Vibrant network of glowing connections forming a sphere"
                loading="lazy"
              />
            </ParallaxPoster>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Have a system that needs to <span className="grad">just work?</span>
          </>
        }
        sub="Tell me about your project or role — I usually reply within a day."
        buttons={[
          { href: "/contact", label: "Get in Touch" },
          { href: "/about", label: "More About Me", ghost: true },
        ]}
      />
    </>
  );
}
