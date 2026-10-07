import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import HomeHero from "@/components/sections/HomeHero";
import HomeFeatures from "@/components/sections/HomeFeatures";
import HowIWork from "@/components/sections/HowIWork";
import TechShowcase from "@/components/sections/TechShowcase";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Testimonials from "@/components/sections/Testimonials";
import WaveReveal from "@/components/WaveReveal";
import GenArt from "@/components/GenArt";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HowIWork />
      <TechShowcase
        eyebrow="Tech stack"
        title={
          <>
            Built with <span className="grad">modern tech.</span>
          </>
        }
        sub="The trending tools behind this site and the production systems I ship — every logo the real thing."
      />
      <LeadMagnet />
      <Testimonials />

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal variant="scale">
            <WaveReveal>
              <GenArt scene="network" label="Generative art: a constellation of glowing gold nodes on navy" />
            </WaveReveal>
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
