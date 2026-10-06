import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";
import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesFaq from "@/components/sections/ServicesFaq";

export const metadata: Metadata = {
  title: "Services — Aravind Mutte",
  description:
    "Freelance DevOps & SRE services: cloud architecture, CI/CD pipelines, Kubernetes platforms, reliability and cost optimization.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        num="01"
        eyebrow="Services"
        title={
          <>
            What I can do for <span className="grad">your business.</span>
          </>
        }
        lead="Freelance and contract engagements for startups and enterprises — from landing zones to fully automated delivery pipelines."
      />

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

      <ServicesGrid />

      <ServicesFaq />

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
