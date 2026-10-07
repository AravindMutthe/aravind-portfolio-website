import type { Metadata } from "next";
import AboutFeed from "@/components/feed/AboutFeed";

export const metadata: Metadata = {
  title: "About — Aravind Mutte",
  description:
    "About Aravind Mutte: Cloud DevOps & SRE Engineer — education, certifications, achievements, projects and social links. Hyderabad, India.",
};

/** About as an X profile — the person, told like a timeline. */
export default function AboutPage() {
  return <AboutFeed />;
}
