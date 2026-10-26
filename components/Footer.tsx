"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const PAGE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PROJECT_LINKS = [
  { href: "/projects", label: "Axon Lead-Capture API" },
  { href: "/projects", label: "GradeSpot Frontend" },
  { href: "/projects", label: "Termux Homelab" },
];

const CONNECT_LINKS = [
  { href: "https://linkedin.com/in/aravindmutte", label: "LinkedIn", external: true },
  { href: "https://github.com/AravindMutthe", label: "GitHub", external: true },
  { href: "https://x.com/aravind_mutthe", label: "X", external: true },
  { href: "https://medium.com/@aravind.mutthe", label: "Medium", external: true },
  { href: "https://www.reddit.com/user/aravindmutte/", label: "Reddit", external: true },
  { href: "mailto:mutthe.aravind@gmail.com", label: "Email" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/atlas")) return null;
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/" aria-label="Home">
              <span className="brand-mark">AM</span> Aravind Mutte
            </Link>
            <p>
              Cloud DevOps &amp; SRE Engineer — building automated, observable
              cloud platforms on AWS, Azure, and GCP. Hyderabad, India.
            </p>
          </div>
          <div className="foot-col">
            <h5>Pages</h5>
            {PAGE_LINKS.map((l) => (
              <Link key={l.href + l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h5>Projects</h5>
            {PROJECT_LINKS.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            {CONNECT_LINKS.map((l) =>
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 Aravind Mutte · Hyderabad, India</span>
          <span>Built with Next.js, Tailwind &amp; IBM Carbon</span>
        </div>
      </div>
    </footer>
  );
}
