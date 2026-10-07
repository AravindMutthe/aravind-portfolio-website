import type { Metadata } from "next";
import StreamHome from "@/components/stream/StreamHome";

export const metadata: Metadata = {
  title: "Aravind Mutte — Cloud DevOps & SRE Engineer",
  description:
    "Cloud DevOps & Site Reliability Engineer in Hyderabad — pipelines, cloud cost control, and infrastructure that ships fast and never sleeps.",
};

/**
 * Homepage as an original stream — the browsing ease of the best feeds,
 * the trust of the best marketing, the clarity of the best marketplaces,
 * in a visual language that belongs to no platform but this site.
 */
export default function HomePage() {
  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <StreamHome />
    </div>
  );
}
