import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";

export const metadata: Metadata = {
  title: "Services — Aravind Mutte",
  description:
    "Freelance DevOps & SRE services: cloud architecture, CI/CD pipelines, Kubernetes platforms, reliability and cost optimization.",
};

const CHECK = (
  <svg viewBox="0 0 24 24">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

interface Service {
  num: string;
  delay: "" | "d1" | "d2" | "d3";
  icon: string;
  title: string;
  copy: string;
  checks: string[];
}

const SERVICES: Service[] = [
  {
    num: "/ 01",
    delay: "",
    icon: '<path d="M17.5 19a4.5 4.5 0 0 0 .42-8.98 6.5 6.5 0 0 0-12.7 1.61A4 4 0 0 0 6 19h11.5z"/>',
    title: "Cloud Architecture & Migration",
    copy: "Production-grade AWS and Azure environments designed as code from day one — secure, scalable, and ready to grow with your business.",
    checks: [
      "Landing zones, VPC/VNet design, IAM hardening",
      "Zero-downtime workload migrations",
      "Everything in Terraform / CloudFormation",
    ],
  },
  {
    num: "/ 02",
    delay: "d1",
    icon: '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
    title: "CI/CD Pipeline Engineering",
    copy: "Automated build, test, and deployment pipelines that let your team ship safely and often — with release governance baked in.",
    checks: [
      "Jenkins, GitHub Actions, GitLab CI, Azure DevOps",
      "Blue-green & canary deployment strategies",
      "Standardized, auditable release workflows",
    ],
  },
  {
    num: "/ 03",
    delay: "d2",
    icon: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    title: "Kubernetes & Containers",
    copy: "Containerized workloads on EKS and AKS — from first Dockerfile to autoscaling, self-healing production clusters.",
    checks: [
      "EKS / AKS cluster design and operations",
      "Helm charts, GitOps-ready manifests",
      "Day-2 ops: upgrades, scaling, disaster recovery",
    ],
  },
  {
    num: "/ 04",
    delay: "d3",
    icon: '<path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/>',
    title: "Reliability & Cost Optimization",
    copy: "SRE practices and observability that shorten incident recovery — plus rightsizing reviews that cut waste from your cloud bill.",
    checks: [
      "SLOs, alerting, and incident runbooks",
      "Prometheus, Grafana, CloudWatch dashboards",
      "Cloud cost audit with actionable savings plan",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="n">01</span> Services
            </div>
          </Reveal>
          <Reveal>
            <h1 className="hero-title">
              What I can do for <span className="grad">your business.</span>
            </h1>
          </Reveal>
          <Reveal delay="d1">
            <p className="lead">
              Freelance and contract engagements for startups and enterprises — from landing zones to
              fully automated delivery pipelines.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="wrap">
        <Reveal variant="scale">
          <ParallaxPoster className="poster poster-band tight">
            <img
              src="img/services-neon.jpg"
              alt="Vibrant 3D DevOps pipeline — glowing gears, containers and cloud nodes"
              loading="eager"
            />
          </ParallaxPoster>
        </Reveal>
      </div>

      <section className="block section-dark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid2">
            {SERVICES.map((s) => (
              <Reveal key={s.num} delay={s.delay}>
                <TiltCard className="card tilt">
                  <span className="num">{s.num}</span>
                  <div className="iconbox">
                    <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: s.icon }} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                  {s.checks.map((c) => (
                    <div key={c} className="check">
                      {CHECK}
                      {c}
                    </div>
                  ))}
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Have a project <span className="grad">in mind?</span>
          </>
        }
        sub="Describe it in a few lines — I'll tell you honestly whether I'm the right fit and what it would take."
        buttons={[{ href: "/contact", label: "Request a Quote" }]}
      />
    </>
  );
}
