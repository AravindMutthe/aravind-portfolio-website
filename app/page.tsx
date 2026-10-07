import type { Metadata } from "next";
import HomeNarrative from "@/components/stream/HomeNarrative";

export const metadata: Metadata = {
  title: "Aravind Mutte — Cloud DevOps & SRE Engineer",
  description:
    "Cloud DevOps & Site Reliability Engineer in Hyderabad — pipelines, cloud cost control, and infrastructure that ships fast and never sleeps.",
};

/** Homepage — the confident linear narrative. */
export default function HomePage() {
  return <HomeNarrative />;
}
