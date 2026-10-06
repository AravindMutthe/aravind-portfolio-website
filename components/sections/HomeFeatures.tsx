import Link from "next/link";
import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    variant: "l" as const,
    title: "For businesses — freelance DevOps",
    copy: "Cloud infrastructure, CI/CD pipelines, Kubernetes platforms, and cost optimization — delivered as fixed-scope engagements. You get senior-level DevOps without the hiring cycle.",
    href: "/services",
    linkLabel: "See all services",
    img: "img/services-neon.jpg",
    imgAlt: "Vibrant 3D illustration of a DevOps pipeline — gears, containers and cloud nodes",
    num: "01",
  },
  {
    variant: "r" as const,
    title: "For employers — full-time roles",
    copy: "Two years across Infosys and PragmaEdge — enterprise B2B integration and production Linux — plus independent cloud builds I run myself on modern platforms.",
    href: "/experience",
    linkLabel: "See experience",
    img: "img/about-neon.jpg",
    imgAlt: "Neon-lit futuristic data center corridor",
    num: "02",
  },
];

/** Homepage "Two ways to work together" feature rows . */
export default function HomeFeatures() {
  return (
    <section className="block">
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

        {FEATURES.map((f) => (
          <Reveal key={f.num} variant={f.variant}>
            <div className="feature">
              <div className="f-copy">
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
                <Link className="link-arrow" href={f.href}>
                  {f.linkLabel} <span className="arr">→</span>
                </Link>
              </div>
              <div className="f-visual">
                <img src={f.img} alt={f.imgAlt} loading="lazy" />
                <span className="big">{f.num}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
