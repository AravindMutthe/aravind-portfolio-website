import type { Metadata } from "next";
import ProjectsFeed from "@/components/feed/ProjectsFeed";

export const metadata: Metadata = {
  title: "Projects — Aravind Mutte",
  description:
    "Case studies: Axon lead-capture API on GCP, GradeSpot frontend, Termux homelab — architecture, trade-offs, and honest impact.",
};

/** Projects as an Instagram visual feed. */
export default function ProjectsPage() {
  return <ProjectsFeed />;
}
