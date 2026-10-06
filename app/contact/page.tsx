import type { Metadata } from "next";
import Script from "next/script";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ParallaxPoster from "@/components/ParallaxPoster";
import { RECAPTCHA_KEY } from "@/components/data";

export const metadata: Metadata = {
  title: "Contact — Aravind Mutte",
  description:
    "Contact Aravind Mutte for freelance DevOps projects or full-time roles. Based in Hyderabad, India.",
};

const METHODS = [
  {
    label: "Email",
    value: "mutthe.aravind@gmail.com",
    href: "mailto:mutthe.aravind@gmail.com",
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  },
  {
    label: "Phone",
    value: "+91 98851 89951",
    href: "tel:+919885189951",
    icon: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/>',
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aravindmutte",
    href: "https://linkedin.com/in/aravindmutte",
    external: true,
    icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  },
  {
    label: "GitHub",
    value: "github.com/AravindMutthe",
    href: "https://github.com/AravindMutthe",
    external: true,
    icon: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2.5 5 2.5 5 2.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  },
];

export default function ContactPage() {
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_KEY}`}
        strategy="lazyOnload"
      />

      <header className="page-hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">
              <span className="n">05</span> Contact
            </div>
          </Reveal>
          <Reveal>
            <h1 className="hero-title">
              Let&apos;s build something <span className="grad">reliable.</span>
            </h1>
          </Reveal>
          <Reveal delay="d1">
            <p className="lead">
              Have a cloud project, a pipeline that needs fixing, or a full-time role to fill? Fill
              this in — it lands straight in my <strong>email, WhatsApp and SMS</strong>. I usually
              reply within a day.
            </p>
          </Reveal>
        </div>
      </header>

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

      <section className="block section-dark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="contact-grid">
              {METHODS.map((m) => (
                <a
                  key={m.label}
                  className="method"
                  href={m.href}
                  {...(m.external ? { target: "_blank", rel: "noopener" } : {})}
                >
                  <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: m.icon }} />
                  <div>
                    <div className="ml">{m.label}</div>
                    <div className="mv">{m.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
