import Link from "next/link";
import type { ReactNode } from "react";

/** Substack/Medium-style reading layout, in Atlas's own identity:
 *  centered serif long-form column, byline, captioned figures, and a
 *  related-stories footer. Used by categorized pages, where each original
 *  image appears as a figure with its caption, category, relations and
 *  contradictions beside it — not as decoration. */
export default function AtlasArticle({
  eyebrow, title, byline, children, related,
}: {
  eyebrow: string;
  title: string;
  byline: string;
  children: ReactNode;
  related?: { href: string; label: string }[];
}) {
  return (
    <article className="atlas-article">
      <p className="atlas-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="atlas-byline">{byline}</p>
      <div className="atlas-divider" aria-hidden="true">✦ ✦ ✦</div>
      {children}
      {related && related.length > 0 && (
        <footer className="atlas-related">
          <h2>Related in the Atlas</h2>
          <ul>
            {related.map((r) => (
              <li key={r.href}><Link href={r.href}>{r.label}</Link></li>
            ))}
          </ul>
        </footer>
      )}
    </article>
  );
}
