import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAtlasSection, ATLAS_SECTIONS } from "@/components/atlas-sections";
import { promises as fs } from "fs";
import path from "path";

export async function generateStaticParams() {
  return ATLAS_SECTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const section = getAtlasSection(slug);
  if (!section) return { title: "Not found" };
  return { title: `${section.title} — Atlas`, description: section.desc };
}

/** Minimal markdown to HTML, same scope as the blog renderer: headings,
 *  code blocks, inline code, bold, lists, blockquotes, paragraphs. */
function mdToHtml(md: string): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const lines = md.split("\n");
  let html = "";
  let inCode = false;
  let inList = false;
  const inline = (s: string) => {
    let t = esc(s);
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return t;
  };
  for (const raw of lines) {
    const line = raw;
    if (line.trim().startsWith("```")) {
      if (inCode) { html += "</code></pre>"; inCode = false; }
      else { if (inList) { html += "</ul>"; inList = false; } html += "<pre><code>"; inCode = true; }
      continue;
    }
    if (inCode) { html += esc(line) + "\n"; continue; }
    const t = line.trim();
    if (!t) { if (inList) { html += "</ul>"; inList = false; } continue; }
    if (t.startsWith("##### ")) { if (inList) { html += "</ul>"; inList = false; } html += `<h5>${inline(t.slice(6))}</h5>`; continue; }
    if (t.startsWith("#### ")) { if (inList) { html += "</ul>"; inList = false; } html += `<h4>${inline(t.slice(5))}</h4>`; continue; }
    if (t.startsWith("### ")) { if (inList) { html += "</ul>"; inList = false; } html += `<h3>${inline(t.slice(4))}</h3>`; continue; }
    if (t.startsWith("## ")) { if (inList) { html += "</ul>"; inList = false; } html += `<h2>${inline(t.slice(3))}</h2>`; continue; }
    if (t.startsWith("# ")) { if (inList) { html += "</ul>"; inList = false; } html += `<h1>${inline(t.slice(2))}</h1>`; continue; }
    if (t.startsWith("> ")) { if (inList) { html += "</ul>"; inList = false; } html += `<blockquote>${inline(t.slice(2))}</blockquote>`; continue; }
    if (/^[-*] /.test(t)) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${inline(t.slice(2))}</li>`; continue;
    }
    if (/^\d+\. /.test(t)) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${inline(t.replace(/^\d+\. /, ""))}</li>`; continue;
    }
    if (inList) { html += "</ul>"; inList = false; }
    html += `<p>${inline(t)}</p>`;
  }
  if (inList) html += "</ul>";
  if (inCode) html += "</code></pre>";
  return html;
}

export default async function AtlasSectionPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const section = getAtlasSection(slug);
  if (!section) notFound();
  const filePath = path.join(process.cwd(), "content", "notes", section.file);
  let md = "";
  try {
    md = await fs.readFile(filePath, "utf-8");
  } catch {
    notFound();
  }
  const html = mdToHtml(md);
  return (
    <article className="atlas-body">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>
        {section.kind} · {section.readTime} read · Atlas notes style
      </p>
      <h1>{section.title}</h1>
      <p className="atlas-lead">{section.desc}</p>
      <div className="atlas-panel atlas-verify">
        <span className="atlas-tag verify">Draft · verification pending</span>
        <p style={{ margin: "8px 0 0" }}>
          Topic-level summary, not a verbatim transcript. Original notes, where
          referenced, remain the authoritative source.
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="atlas-panel">
        <p>
          Back to the <Link href="/atlas">Atlas index</Link>, or the{" "}
          <Link href="/atlas/source-index">source index</Link> for what was and
          was not included from the Atlas folder.
        </p>
      </div>
    </article>
  );
}
