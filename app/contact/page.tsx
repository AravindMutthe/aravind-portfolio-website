import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GenArt from "@/components/GenArt";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import NativeBookCall from "@/components/sections/NativeBookCall";

export const metadata: Metadata = {
  title: "Contact — Aravind Mutte",
  description:
    "Contact Aravind Mutte for freelance DevOps projects or full-time roles. Based in Hyderabad, India.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        num="05"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="grad">reliable.</span>
          </>
        }
        lead={
          <>
            Tell me about your project — the more detail, the better I can help. It takes about
            a minute: your details, what you need, and your budget and timeline.
            It lands straight in my <strong>email and WhatsApp</strong> — plus an instant alert
            on my phone. I usually reply within a day.
          </>
        }
      />

      <div className="wrap">
        <Reveal variant="scale">
          <GenArt scene="network" label="Generative art: a constellation of glowing gold nodes on navy" />
        </Reveal>
      </div>

      <ContactSection />

      <NativeBookCall />
    </>
  );
}
