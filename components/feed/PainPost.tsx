"use client";

import Link from "next/link";
import { XPost } from "@/components/feed/posts";

/**
 * "Sound familiar?" — the research-backed pain checklist,
 * as a Facebook-style post. Problem-first, in the client's own words.
 */
const PAINS = [
  "Deploys take all day and everyone holds their breath.",
  "Nobody knows what happens when something breaks at 2am.",
  "The cloud bill keeps growing and nobody can explain why.",
  "Your team ships features but dreads touching infrastructure.",
];

export default function PainPost() {
  return (
    <XPost meta="Sound familiar?">
      <p className="xlead">
        Infrastructure problems <em>I&apos;ve solved before.</em>
      </p>
      <ul className="pain-post-list">
        {PAINS.map((p) => (
          <li key={p}>
            <span className="pain-check" aria-hidden="true">✓</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className="xdesc">
        If two or more sound like your team,{" "}
        <Link href="/contact" className="xcta">
          let&apos;s talk about fixing them →
        </Link>
      </p>
    </XPost>
  );
}
