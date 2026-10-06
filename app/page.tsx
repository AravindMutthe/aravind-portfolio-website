import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ParallaxPoster from "@/components/ParallaxPoster";
import HomeHero from "@/components/sections/HomeHero";
import HomeFeatures from "@/components/sections/HomeFeatures";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal variant="scale">
            <ParallaxPoster className="poster">
              <img
                src="img/contact-neon.jpg"
                alt="Vibrant network of glowing connections forming a sphere"
                loading="lazy"
              />
            </ParallaxPoster>
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
