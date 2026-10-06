"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FAB_LINKS } from "./data";

/** Floating contact widget — bottom-right on every page. */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div ref={wrapRef} className={`fab-wrap${open ? " open" : ""}`} id="fabWrap">
      <div className="fab-panel" id="fabPanel" role="menu" aria-label="Contact options">
        {FAB_LINKS.map((l) => (
          <a
            key={l.label}
            className="fab-opt"
            href={l.href}
            {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
          >
            {l.img ? (
              <img src={l.img} alt={l.imgAlt ?? `${l.label} logo`} loading="lazy" />
            ) : (
              <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: l.svg ?? "" }} />
            )}
            {l.label}
          </a>
        ))}
        <Link className="fab-opt fab-cta" href="/contact">
          Send enquiry &rarr;
        </Link>
      </div>
      <button
        className="fab"
        id="fabBtn"
        aria-label="Contact options"
        aria-expanded={open ? "true" : "false"}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  );
}
