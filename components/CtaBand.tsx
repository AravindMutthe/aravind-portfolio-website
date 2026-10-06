import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface CtaBandProps {
  title: ReactNode;
  sub: string;
  buttons: { href: string; label: string; ghost?: boolean }[];
}

/** Dark contrast CTA band used at the bottom of most pages. */
export default function CtaBand({ title, sub, buttons }: CtaBandProps) {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="cta-band">
            <h2>{title}</h2>
            <p>{sub}</p>
            <div className="cta-row">
              {buttons.map((b) => (
                <Link key={b.label} href={b.href} className={`btn${b.ghost ? " btn-ghost" : ""}`}>
                  {b.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
