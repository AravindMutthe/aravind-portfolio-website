import type { ReactNode } from "react";
import Link from "next/link";

/**
 * StreamCard — the ONE original card for the whole site.
 * Not X, not IG, not FB, not Medium: an editorial card in Aravind's
 * own language — Fraunces headlines, gold kicker pills, navy ink,
 * generous whitespace. Content types differ by kicker, not by costume.
 */
export function Kicker({ children }: { children: ReactNode }) {
  return <span className="sc-kicker">{children}</span>;
}

export default function StreamCard({
  kicker,
  title,
  children,
  media,
  footer,
  className = "",
}: {
  kicker: string;
  title?: ReactNode;
  children: ReactNode;
  media?: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <article className={`scard ${className}`}>
      <Kicker>{kicker}</Kicker>
      {title && <h3 className="scard-title">{title}</h3>}
      <div className="scard-body">{children}</div>
      {media && <div className="scard-media">{media}</div>}
      {footer && <div className="scard-footer">{footer}</div>}
    </article>
  );
}

/** Honest meta + real CTA — the footer every card earns. */
export function CardFooter({
  meta,
  href,
  cta,
}: {
  meta?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <>
      {meta && <span className="scard-meta">{meta}</span>}
      {href && cta && (
        <Link href={href} className="scard-cta">
          {cta} →
        </Link>
      )}
    </>
  );
}
