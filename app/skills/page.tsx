import type { Metadata } from "next";
import SkillsGrid from "@/components/feed/SkillsGrid";

export const metadata: Metadata = {
  title: "Skills — Aravind Mutte",
  description:
    "Technical skills: AWS, GCP, Azure, Kubernetes, Terraform, Next.js, React, TypeScript, IBM Carbon, Tailwind CSS, Docker, Python, Linux and more.",
};

/** Skills as an Instagram profile grid. */
export default function SkillsPage() {
  return <SkillsGrid />;
}
