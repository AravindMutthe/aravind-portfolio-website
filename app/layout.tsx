import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ScrollProgress from "@/components/ScrollProgress";

/* Premium consultancy pairing: high-contrast serif display + clean grotesque body */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aravind Mutte — Cloud DevOps & SRE Engineer",
  description:
    "Aravind Mutte — Cloud DevOps & Site Reliability Engineer (AWS, Azure, Kubernetes, Terraform), Hyderabad, India. Available for freelance projects and full-time roles.",
  metadataBase: new URL("https://aravind-portfolio-next.vercel.app"),
  alternates: {
    canonical: "https://aravind-portfolio-next.vercel.app",
  },
  openGraph: {
    title: "Aravind Mutte — Cloud DevOps & SRE Engineer",
    description:
      "Cloud DevOps & Site Reliability Engineer (AWS, Azure, Kubernetes, Terraform), Hyderabad, India. Available for freelance projects and full-time roles.",
    url: "https://aravind-portfolio-next.vercel.app",
    siteName: "Aravind Mutte",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aravind Mutte — Cloud DevOps & SRE Engineer",
    description:
      "Cloud DevOps & Site Reliability Engineer, Hyderabad, India. Available for freelance projects and full-time roles.",
    creator: "@aravind_mutthe",
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aravind Mutte",
  jobTitle: "Cloud DevOps & Site Reliability Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  email: "mailto:mutthe.aravind@gmail.com",
  url: "https://aravind-portfolio-next.vercel.app",
  sameAs: [
    "https://linkedin.com/in/aravindmutte",
    "https://github.com/AravindMutthe",
    "https://x.com/aravind_mutthe",
  ],
  knowsAbout: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker", "CI/CD", "Python", "TypeScript"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Cloudflare Web Analytics — free. */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "baa7f6d5d7b9436ea456597998221bbd"}'
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
