import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import GenArt from "@/components/GenArt";
import PageHero from "@/components/sections/PageHero";
import SkillsPanels from "@/components/sections/SkillsPanels";
import TechShowcase from "@/components/sections/TechShowcase";

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
          <GenArt scene="terrain" label="Generative art: layered waves of navy and gold" />
        </Reveal>
      </div>

      <SkillsPanels />

      <TechShowcase
        eyebrow="Under the hood"
        title={
          <>
            The stack behind <span className="grad">this site.</span>
          </>
        }
        sub="The same modern tools I use for client work — this portfolio is built with them."
      />

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
