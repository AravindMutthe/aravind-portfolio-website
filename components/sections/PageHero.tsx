import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

interface PageHeroProps {
  num: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}

/** Shared page hero: eyebrow + serif title + lead paragraph. */
export default function PageHero({ num, eyebrow, title, lead }: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">
            <span className="n">{num}</span> {eyebrow}
          </div>
        </Reveal>
        <Reveal>
          <h1 className="hero-title">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay="d1">
            <p className="lead">{lead}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
