import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";
import PageHero from "@/components/sections/PageHero";
import AboutProfile from "@/components/sections/AboutProfile";
import AboutEducation from "@/components/sections/AboutEducation";
import AboutAchievements from "@/components/sections/AboutAchievements";
import AboutProjects from "@/components/sections/AboutProjects";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About — Aravind Mutte",
  description:
    "About Aravind Mutte: Cloud DevOps & SRE Engineer — education, certifications, achievements, projects and social links. Hyderabad, India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        num="04"
        eyebrow="About"
        title={
          <>
            Engineer with a <span className="grad">global perspective.</span>
          </>
        }
        lead="The full picture — background, credentials, wins, selected work, and everywhere you can find me."
      />

      <AboutProfile />

      <div className="wrap">
        <Reveal variant="scale">
          <ParallaxPoster className="poster poster-band tight">
            <img
              src="img/about-visual.jpg"
              alt="Abstract portrait of engineering craft with navy duotone"
              loading="lazy"
            />
          </ParallaxPoster>
        </Reveal>
      </div>

      <AboutEducation />
      <AboutAchievements />
      <AboutProjects />
      <Testimonials />

      <CtaBand
        title={
          <>
            Let&apos;s build something <span className="grad">reliable.</span>
          </>
        }
        sub="Currently accepting freelance projects and full-time opportunities."
        buttons={[{ href: "/contact", label: "Get in Touch" }]}
      />
    </>
  );
}
