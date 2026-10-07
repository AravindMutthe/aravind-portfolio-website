import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";
import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesFaq from "@/components/sections/ServicesFaq";
import EngagementModels from "@/components/sections/EngagementModels";

export const metadata: Metadata = {
  title: "Services — Aravind Mutte",
  description:
    "Freelance DevOps & SRE services: cloud architecture, CI/CD pipelines, Kubernetes platforms, reliability and cost optimization.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a project cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fixed-scope engagements are quoted up front after a short scoping call. You'll get a written quote before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What engagement models do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelance fixed-scope projects, contract engagements (ongoing DevOps support), and full-time roles in Hyderabad or remote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CI/CD pipeline or cloud landing zone typically takes 2–6 weeks. Larger builds are scoped in phases.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — available for immediate joining, both freelance/contract and full-time DevOps / SRE / Platform Engineering roles.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
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

      <EngagementModels />

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
