import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://aravind-portfolio-next.vercel.app";

const ROUTES = ["", "/services", "/experience", "/projects", "/skills", "/about", "/contact", "/atlas-gateway", "/blog", "/blog/atlas-overview", "/blog/atlas-chapter-01-communication-networks", "/blog/atlas-chapter-02-institutions-governance", "/blog/atlas-chapter-03-silicon-nic", "/blog/atlas-chapter-04-interfaces", "/blog/atlas-chapter-05-leadership", "/blog/atlas-chapter-06-scheduling", "/blog/atlas-chapter-07-government-business-networks", "/blog/atlas-era-timeline", "/blog/atlas-evidence-register", "/blog/atlas-engineering-notes", "/blog/atlas-methods-safeguards"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
