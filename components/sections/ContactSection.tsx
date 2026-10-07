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
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/919885189951",
    external: true,
    img: "/logos/whatsapp.svg",
    imgAlt: "WhatsApp logo",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aravindmutte",
    href: "https://linkedin.com/in/aravindmutte",
    external: true,
    img: "/logos/linkedin.png",
    imgAlt: "LinkedIn logo",
  },
  {
    label: "GitHub",
    value: "github.com/AravindMutthe",
    href: "https://github.com/AravindMutthe",
    external: true,
    img: "/logos/github.svg",
    imgAlt: "GitHub logo",
  },
];

/** Contact page: method cards + the Supabase-wired enquiry form . */
export default function ContactSection() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
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

        <ContactForm />
      </div>
    </section>
  );
}
