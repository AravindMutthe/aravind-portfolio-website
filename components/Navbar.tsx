"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRODUCTS } from "./data";

function ProductCard({ name, blurb, href, external, icon }: (typeof PRODUCTS)[number]) {
  const inner = (
    <>
      <span className="mc-ic">
        <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} />
      </span>
      <span>
        <b>{name}</b>
        <i>{blurb}</i>
      </span>
    </>
  );
  const cls = "mega-card";
  return external ? (
    <a className={cls} href={href} target="_blank" rel="noopener">
      {inner}
    </a>
  ) : (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu / mega accordion whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  const toggleMega = (e: React.MouseEvent) => {
    e.preventDefault();
    setMegaOpen((v) => !v);
  };

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="Home">
          <span className="brand-mark">AM</span> Aravind Mutte
        </Link>

        <div className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link href="/services" className={isActive("/services") ? "active" : ""}>
            Services
          </Link>

          <div className={`has-mega${megaOpen ? " open" : ""}`}>
            <a
              href="#"
              className="mega-toggle"
              aria-expanded={megaOpen ? "true" : "false"}
              aria-haspopup="true"
              onClick={toggleMega}
            >
              Products{" "}
              <svg className="chev" viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="mega" role="menu" aria-label="Products and tools">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
              <div className="mega-foot">
                Building something new? <Link href="/contact">Let&rsquo;s talk &rarr;</Link>
              </div>
            </div>
          </div>

          <Link href="/experience" className={isActive("/experience") ? "active" : ""}>
            Experience
          </Link>
          <Link href="/skills" className={isActive("/skills") ? "active" : ""}>
            Skills
          </Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
        </div>

        <Link href="/contact" className="btn btn-sm nav-cta">
          Hire Me
        </Link>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          id="hamburger"
          aria-label="Menu"
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
