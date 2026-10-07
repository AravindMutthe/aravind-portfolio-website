import type { Metadata } from "next";
import BlogFeed from "@/components/sections/BlogFeed";

export const metadata: Metadata = {
  title: "Blog — Aravind Mutte",
  description:
    "Technical writing on Linux, DevOps, cloud infrastructure, and systems — notes and articles by Aravind Mutte.",
};

export default function BlogPage() {
  return (
    <div className="wrap" style={{ paddingTop: 120 }}>
      <BlogFeed />
    </div>
  );
}
