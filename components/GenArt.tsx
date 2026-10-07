"use client";

import dynamic from "next/dynamic";
import type { ArtScene } from "./GenerativeArt";

/**
 * Code-split wrapper: pixi.js only loads when a generative artwork
 * scrolls into use, never in the main bundle.
 */
const Art = dynamic(() => import("./GenerativeArt"), {
  ssr: false,
  loading: () => <div className="gen-art gen-loading" aria-hidden="true" />,
});

export default function GenArt({
  scene,
  className = "",
  label,
}: {
  scene: ArtScene;
  className?: string;
  label: string;
}) {
  return <Art scene={scene} className={className} label={label} />;
}
