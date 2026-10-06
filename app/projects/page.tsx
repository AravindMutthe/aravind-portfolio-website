import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/sections/PageHero";
import ProjectsCaseStudies from "@/components/sections/ProjectsCaseStudies";
import GithubStrip from "@/components/sections/GithubStrip";

export const metadata: Metadata = {
  title: "Projects — Aravind Mutte",
  description:
    "Case studies: Axon lead-capture API on GCP Cloud Run, GradeSpot Next.js frontend, and a self-hosted Termux homelab — real builds, zero infrastructure spend.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        num="06"
        eyebrow="Projects"
        title={
          <>
            Built, shipped, <span className="grad">running.</span>
          </>
        }
        lead="Real systems in production — the problem, the approach, and the honest outcome for each."
      />

      <ProjectsCaseStudies />
      <GithubStrip />

      <CtaBand
        title={
          <>
            Want something like this <span className="grad">built for you?</span>
          </>
        }
        sub="Tell me about your project — I'll give you an honest take on scope and timeline."
        buttons={[{ href: "/contact", label: "Start a Project" }]}
      />
    </>
  );
}
