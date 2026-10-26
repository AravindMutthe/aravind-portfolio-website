"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

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
          <Link href="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
          <Link href="/services" className={isActive("/services") ? "active" : ""}>
            Services
          </Link>
          <Link href="/projects" className={isActive("/projects") ? "active" : ""}>
            Projects
          </Link>
          <Link href="/experience" className={isActive("/experience") ? "active" : ""}>
            Experience
          </Link>
          <Link href="/skills" className={isActive("/skills") ? "active" : ""}>
            Skills
          </Link>
          <Link href="/blog" className={isActive("/blog") ? "active" : ""}>
            Blog
          </Link>
          <Link href="/atlas" className={pathname.startsWith("/atlas") ? "active" : ""}>
            Notes
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
