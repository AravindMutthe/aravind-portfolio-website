"use client";

import { useState } from "react";
import { STACK } from "@/components/sections/TechShowcase";
import { DoodleDivider } from "@/components/doodles";

/**
 * Skills page as an Instagram profile grid — the toolbox,
 * presented the way IG presents a body of work.
 * Tap a tile to see what it's for.
 */
export default function SkillsGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <div className="ig-profile">
        <div className="ig-profile-top">
          <span className="story-ring ig-avatar-ring" aria-hidden="true">
            <span className="story-inner">A</span>
          </span>
          <div className="ig-counts">
            <span><b>{STACK.length}</b> tools</span>
            <span><b>4</b> clouds</span>
            <span><b>∞</b> curiosity</span>
          </div>
        </div>
        <div className="xname-lg">aravind_mutthe</div>
        <p className="xbio">
          {"// toolbox"} — every platform, language, and tool I&apos;ve actually
          worked with. Tap any tile for the story behind it.
        </p>
      </div>

      <DoodleDivider />

      <div className="ig-grid" role="list">
        {STACK.map((s) => (
          <button
            key={s.name}
            role="listitem"
            className="ig-tile"
            onClick={() => setOpen(open === s.name ? null : s.name)}
            aria-expanded={open === s.name}
          >
            <img src={s.logo} alt={s.alt} loading="lazy" />
            <span className={`ig-tile-note ${open === s.name ? "show" : ""}`}>
              <b>{s.name}</b>
              {s.note}
            </span>
          </button>
        ))}
      </div>

      <p className="ig-foot">
        All logos are the official marks of their owners, shown in original colours —{" "}
        <a href="/contact" className="xcta">put them to work →</a>
      </p>
    </div>
  );
}
