import type { Metadata } from "next";
import ServicesFeed from "@/components/feed/ServicesFeed";

export const metadata: Metadata = {
  title: "Services — Aravind Mutte",
  description:
    "DevOps & SRE services: cloud architecture, CI/CD pipelines, Kubernetes, reliability & cost optimization. Engagement packages from audit sprints to fractional SRE.",
};

/** Services as a Medium reading list. */
export default function ServicesPage() {
  return <ServicesFeed />;
}
