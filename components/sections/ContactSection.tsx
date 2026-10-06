import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

interface Method {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  img?: string;
  imgAlt?: string;
  svg?: string;
}

/** Contact methods — brand channels use the ORIGINAL official logos. */
const METHODS: Method[] = [
  {
    label: "Email",
    value: "mutthe.aravind@gmail.com",
    href: "mailto:mutthe.aravind@gmail.com",
    svg: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  },
  {
    label: "Phone",
    value: "+91 98851 89951",
    href: "tel:+919885189951",
    svg: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/>',
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aravindmutte",
    href: "https://linkedin.com/in/aravindmutte",
    external: true,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/LinkedIn_logo_initials.png",
    imgAlt: "LinkedIn logo",
  },
  {
    label: "GitHub",
    value: "github.com/AravindMutthe",
    href: "https://github.com/AravindMutthe",
    external: true,
    img: "https://cdn.simpleicons.org/github",
    imgAlt: "GitHub logo",
  },
];

/** Contact page: method cards + the Supabase-wired enquiry form (deep emerald section). */
export default function ContactSection() {
  return (
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
                {m.img ? (
                  <img className="method-logo" src={m.img} alt={m.imgAlt ?? `${m.label} logo`} loading="lazy" />
                ) : (
                  <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: m.svg ?? "" }} />
                )}
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
  );
}
