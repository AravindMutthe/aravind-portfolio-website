"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import GenArt from "@/components/GenArt";
import type { ArtScene } from "@/components/GenerativeArt";

const AVATAR = "/aravind-photo.jpg";
const X_URL = "https://x.com/aravind_mutthe";

/** Shared X-style action bar — decorative icons, no fabricated counts. */
export function XActions() {
  const c = "currentColor";
  return (
    <div className="xactions" aria-hidden="true">
      <span className="xact-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8">
          <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="xact-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8">
          <path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="xact-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8">
          <path d="M12 21C7 16.5 3 13 3 8.8A4.8 4.8 0 0 1 7.8 4c1.7 0 3.2.9 4.2 2.3A5.2 5.2 0 0 1 16.2 4 4.8 4.8 0 0 1 21 8.8c0 4.2-4 7.7-9 12.2z"
            strokeLinejoin="round" />
        </svg>
      </span>
      <span className="xact-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8">
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="xact-wrap xact-right">
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8">
          <path d="M6 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z" strokeLinejoin="round" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8">
          <path d="M12 15V3M7 8l5-5 5 5M5 12v8h14v-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

function PostHead({ meta, pinned }: { meta: string; pinned?: boolean }) {
  return (
    <div className="xmeta">
      <span className="xname">Aravind Mutte</span>
      <span className="xhandle">@aravind_mutthe · {meta}</span>
      <span className="xdots" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
        </svg>
      </span>
    </div>
  );
}

/** X-style text post. */
export function XPost({
  meta,
  pinned,
  children,
  actions = true,
}: {
  meta: string;
  pinned?: boolean;
  children: ReactNode;
  actions?: boolean;
}) {
  return (
    <article className="xtweet feed-anim">
      <img src={AVATAR} alt="" className="xavatar-sm" loading="lazy" />
      <div className="xbody">
        {pinned && <div className="xpinned">📌 Pinned</div>}
        <PostHead meta={meta} />
        <div className="xpost-body">{children}</div>
        {actions && <XActions />}
      </div>
    </article>
  );
}

/** Instagram-style visual post — generative art with IG action bar. */
export function InstaPost({
  scene,
  label,
  caption,
  meta,
}: {
  scene: ArtScene;
  label: string;
  caption: string;
  meta: string;
}) {
  return (
    <article className="ipost feed-anim">
      <div className="ipost-head">
        <img src={AVATAR} alt="" className="xavatar-sm" loading="lazy" />
        <div>
          <div className="xname">aravind_mutthe</div>
          <div className="xhandle">{meta}</div>
        </div>
        <span className="xdots" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
          </svg>
        </span>
      </div>
      <GenArt scene={scene} label={label} />
      <div className="ipost-actions" aria-hidden="true">
        <span className="iact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21C7 16.5 3 13 3 8.8A4.8 4.8 0 0 1 7.8 4c1.7 0 3.2.9 4.2 2.3A5.2 5.2 0 0 1 16.2 4 4.8 4.8 0 0 1 21 8.8c0 4.2-4 7.7-9 12.2z" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="iact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="iact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="iact iact-save">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <p className="ipost-caption">
        <b>aravind_mutthe</b> {caption}
      </p>
    </article>
  );
}

/** Facebook-style link preview card. */
export function FBCard({
  href,
  kicker,
  title,
  desc,
  cta,
}: {
  href: string;
  kicker: string;
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <article className="xtweet feed-anim">
      <img src={AVATAR} alt="" className="xavatar-sm" loading="lazy" />
      <div className="xbody">
        <PostHead meta={kicker} />
        <Link className="fbcard" href={href}>
          <div className="fbcard-top">{kicker}</div>
          <div className="fbcard-title">{title}</div>
          <p className="fbcard-desc">{desc}</p>
          <span className="fbcard-cta">{cta} →</span>
        </Link>
        <XActions />
      </div>
    </article>
  );
}

/** Medium-style article card — big serif headline, excerpt, author meta row.
 *  The fourth voice in the hybrid: FB + IG + X + Medium. */
export function MediumPost({
  href,
  tag,
  title,
  desc,
  readTime,
}: {
  href: string;
  tag: string;
  title: string;
  desc: string;
  readTime: string;
}) {
  return (
    <article className="xtweet feed-anim">
      <img src={AVATAR} alt="" className="xavatar-sm" loading="lazy" />
      <div className="xbody">
        <PostHead meta={`Medium · ${tag}`} />
        <a className="mpost" href={href} target="_blank" rel="noopener">
          <div className="mpost-kicker">Featured article</div>
          <h3 className="mpost-title">{title}</h3>
          <p className="mpost-desc">{desc}</p>
          <div className="mpost-meta">
            <span>Aravind Mutte</span>
            <span className="mdot">·</span>
            <span>{readTime} read</span>
            <span className="mpost-icons" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 11v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7M7 11l-2 7m4-11l4 7 4-7-2-4H9L7 7z"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </a>
        <XActions />
      </div>
    </article>
  );
}

export { X_URL };
