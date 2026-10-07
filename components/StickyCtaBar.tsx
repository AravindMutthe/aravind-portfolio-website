"use client";

import Link from "next/link";

/** Sticky bottom call bar on mobile — research shows every section needs
 *  a CTA on mobile. Hidden on desktop where the nav CTA suffices. */
export default function StickyCtaBar() {
  return (
    <div className="sticky-cta" aria-hidden="false">
      <Link href="https://cal.com/aravindmutte/intro-call" className="btn btn-sm">
        📅 Book a free intro call
      </Link>
      <Link href="/contact" className="btn btn-sm btn-ghost">
        Hire me
      </Link>
    </div>
  );
}
