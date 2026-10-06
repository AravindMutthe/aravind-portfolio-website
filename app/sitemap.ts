import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://aravind-portfolio-next.vercel.app";

const ROUTES = ["", "/services", "/experience", "/projects", "/skills", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
