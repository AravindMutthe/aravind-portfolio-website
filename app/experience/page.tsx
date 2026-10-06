import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/sections/PageHero";
import ExperienceAccordion from "@/components/sections/ExperienceAccordion";

export const metadata: Metadata = {
  title: "Experience — Aravind Mutte",
  description:
    "Professional experience: independent cloud builds, Systems Engineer at Infosys, Junior Developer at HCLTech, Infrastructure Engineer at PragmaEdge.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        num="02"
        eyebrow="Experience"
        title={
          <>
            A track record in <span className="grad">demanding environments.</span>
          </>
        }
        lead="From enterprise B2B integration to independent cloud builds — systems that stay up."
      />

      <ExperienceAccordion />

      <CtaBand
        title={
          <>
            Want this experience <span className="grad">on your team?</span>
          </>
        }
        sub="Available for immediate joining — freelance, contract, or full-time."
        buttons={[
          { href: "/contact", label: "Get in Touch" },
          { href: "/skills", label: "See My Skills", ghost: true },
        ]}
      />
    </>
  );
}
