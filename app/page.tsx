import type { Metadata } from "next";
import FeedHome from "@/components/feed/FeedHome";

export const metadata: Metadata = {
  title: "Aravind Mutte — Cloud DevOps & SRE Engineer",
  description:
    "Cloud DevOps & Site Reliability Engineer in Hyderabad — pipelines, cloud cost control, and infrastructure that ships fast and never sleeps.",
};

/** Homepage as a social feed — hybrid of X posts, Instagram visuals,
 *  and Facebook link cards in an app-style shell. */
export default function HomePage() {
  return (
    <div className="wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
      <FeedHome />
    </div>
  );
}
