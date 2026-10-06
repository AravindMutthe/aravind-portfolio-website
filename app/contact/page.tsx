import type { Metadata } from "next";
import Script from "next/script";
import Reveal from "@/components/Reveal";
import ParallaxPoster from "@/components/ParallaxPoster";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import BookACall from "@/components/sections/BookACall";
import { RECAPTCHA_KEY } from "@/components/data";

export const metadata: Metadata = {
  title: "Contact — Aravind Mutte",
  description:
    "Contact Aravind Mutte for freelance DevOps projects or full-time roles. Based in Hyderabad, India.",
};

export default function ContactPage() {
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_KEY}`}
        strategy="lazyOnload"
      />

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
            a minute: your details, what you need, budget and timeline, and where you are today.
            It lands straight in my <strong>email and WhatsApp</strong> — plus an instant alert
            on my phone. I usually reply within a day.
          </>
        }
      />

      <div className="wrap">
        <Reveal variant="scale">
          <ParallaxPoster className="poster poster-band tight">
            <img
              src="img/contact-neon.jpg"
              alt="Vibrant network of glowing connections forming a sphere"
              loading="eager"
            />
          </ParallaxPoster>
        </Reveal>
      </div>

      <ContactSection />

      <BookACall />
    </>
  );
}
