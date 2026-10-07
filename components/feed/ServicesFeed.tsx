"use client";

import Link from "next/link";
import OfferMenu from "@/components/stream/OfferMenu";
import { DoodleDivider } from "@/components/doodles";

/** Services — the productized menu. */
export default function ServicesFeed() {
  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div className="code-label">{"// services"}</div>
        <h1 className="pin-head" style={{ marginBottom: 8 }}>
          Pick your <em>engagement.</em>
        </h1>
        <p className="pin-lead">
          Three fixed-scope ways to work together. No hourly billing, no open-ended
          retainers to start — you always know what you get.
        </p>

        <DoodleDivider />

        <OfferMenu />

        <p className="ig-foot">
          Need something custom? <Link href="/contact" className="scard-cta">Tell me about it →</Link>
        </p>
      </div>
    </div>
  );
}
