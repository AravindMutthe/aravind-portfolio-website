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
        <Link className="brand" href="/" aria-label="Aravind Mutte — home and about">
          <span className="brand-mark">AM</span> Aravind Mutte
        </Link>

        <div className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
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
          <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
        </div>

        <button
          className="copy-email"
          onClick={() => {
            navigator.clipboard?.writeText("mutthe.aravind@gmail.com").catch(() => {});
            const el = document.querySelector(".copy-email");
            if (el) {
              el.classList.add("copied");
              setTimeout(() => el.classList.remove("copied"), 1600);
            }
          }}
          aria-label="Copy email address"
          title="Copy email"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" strokeLinecap="round" />
          </svg>
          <span className="copy-label">Copy email</span>
          <span className="copied-label">Copied!</span>
        </button>
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
