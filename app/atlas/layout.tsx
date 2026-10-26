import type { Metadata } from "next";
import Link from "next/link";
import AtlasMenu from "@/components/AtlasMenu";
import "./atlas.css";

export const metadata: Metadata = {
  title: "Atlas — Aravind Mutte",
  description:
    "Systems Knowledge Atlas, in its own design and with its own menu: curriculum, notes, evidence and source index, separate from the portfolio.",
};

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="atlas">
      <header className="atlas-header">
        <Link className="atlas-brand" href="/atlas">
          ✦ SYSTEMS / KNOWLEDGE ATLAS
          <small>Aravind · technical knowledge library</small>
        </Link>
        <Link className="atlas-header-btn" href="/atlas/notebook">
          📚 20 originals
        </Link>
      </header>
      <div className="atlas-layout">
        <AtlasMenu />
        <main className="atlas-main">{children}</main>
      </div>
    </div>
  );
}
