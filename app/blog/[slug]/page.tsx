import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, NOTE_POSTS } from "@/components/blog-posts";
import { promises as fs } from "fs";
import path from "path";

export async function generateStaticParams() {
  return NOTE_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} — Aravind Mutte`,
    description: post.desc,
  };
}

/** Minimal markdown → HTML for notes. Handles headings, code blocks,
 *  inline code, bold, lists, blockquotes, and paragraphs. */
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

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const filePath = path.join(process.cwd(), "content", "notes", post.file);
  let md = "";
  try {
    md = await fs.readFile(filePath, "utf-8");
  } catch {
    notFound();
  }
  const html = mdToHtml(md);

  return (
    <article className="blog-post">
      <div className="wrap" style={{ maxWidth: 780 }}>
        <Link href="/blog" className="blog-back">← All articles</Link>
        <span className="blog-tag">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="blog-post-desc">{post.desc}</p>
        <div className="blog-post-meta">
          <span>{post.readTime} read</span>
          <span>·</span>
          <span>From my notes repo</span>
        </div>
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="blog-post-cta">
          <p>Found this useful? I do this kind of work for clients.</p>
          <Link href="/contact" className="btn btn-gold">Start a Project →</Link>
        </div>
      </div>
    </article>
  );
}
