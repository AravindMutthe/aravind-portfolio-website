import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";
import PageHero from "@/components/sections/PageHero";
import SkillsPanels from "@/components/sections/SkillsPanels";

export const metadata: Metadata = {
  title: "Skills — Aravind Mutte",
  description:
    "Technical skills: AWS, GCP, Azure, Kubernetes, Terraform, Next.js, React, TypeScript, IBM Carbon, Tailwind CSS, Docker, Python, Linux and more.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHero
        num="03"
        eyebrow="Toolbox"
        title={
          <>
            The full stack, <span className="grad">end to end.</span>
          </>
        }
        lead="Every platform, language, and tool I've actually worked with — cloud, code, and everything between."
      />

      <div className="wrap">
        <Reveal variant="scale">
          <ParallaxPoster className="poster poster-band tight">
            <img
              src="img/hero-poster.jpg"
              alt="Abstract technology artwork with orange duotone"
              loading="eager"
            />
          </ParallaxPoster>
        </Reveal>
      </div>

      <SkillsPanels />

      <CtaBand
        title={
          <>
            Need any of this <span className="grad">done right?</span>
          </>
        }
        sub="From a one-week pipeline fix to a full platform build — let's talk."
        buttons={[{ href: "/contact", label: "Start a Conversation" }]}
      />
    </>
  );
}
