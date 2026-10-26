import type { Metadata } from "next";
import "./atlas.css";

export const metadata: Metadata = {
  title: "Atlas — Aravind Mutte",
  description:
    "Systems Knowledge Atlas, in its own endpoint with its own notes style: curriculum, notes, evidence and source index, separate from the portfolio blog.",
};

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  return <div className="atlas">{children}</div>;
}
