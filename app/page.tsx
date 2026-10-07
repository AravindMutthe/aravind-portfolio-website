import type { Metadata } from "next";
import StreamHome from "@/components/stream/StreamHome";

export const metadata: Metadata = {
  title: "Aravind Mutte — Cloud DevOps & SRE Engineer",
  description:
    "Cloud DevOps & Site Reliability Engineer in Hyderabad — pipelines, cloud cost control, and infrastructure that ships fast and never sleeps.",
};

/**
 * Homepage — full-viewport living hero over a magazine stream.
 * Original language throughout: no platform chrome anywhere.
 */
export default function HomePage() {
  return <StreamHome />;
}
