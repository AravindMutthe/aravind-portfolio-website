import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import { NOTE_POSTS } from "@/components/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Aravind Mutte",
  description:
    "Technical writing on Linux, DevOps, cloud infrastructure, and systems — from Medium, Substack, and Reddit.",
};

const PLATFORMS = [
  {
    name: "Medium",
    handle: "@aravind.mutthe",
    desc: "Deep dives on Linux internals, system architecture, and networking — the planes, pipes, and switches series.",
    href: "https://medium.com/@aravind.mutthe",
    logo: "/logos/medium.svg",
    cta: "Read on Medium",
  },
  {
    name: "Substack",
    handle: "Aravind's newsletter",
    desc: "Longer-form notes on DevOps practice, homelab experiments, and what I'm learning in production.",
    href: "https://aravindmutthe.substack.com",
    logo: "/logos/substack.svg",
    cta: "Read on Substack",
  },
  {
    name: "Reddit",
    handle: "u/aravindmutte",
    desc: "Discussions, answers, and notes shared with the DevOps and sysadmin communities.",
    href: "https://www.reddit.com/user/aravindmutte/",
    logo: "/logos/reddit.svg",
    cta: "Read on Reddit",
  },
];

const FEATURED = [
  {
    title: "System Architecture Planes (Linux Server View)",
    desc: "Control, data, management, and security planes — how a Linux server actually holds together.",
    href: "https://medium.com/@aravind.mutthe/system-architecture-planes-linux-server-view-20ed6f0f2cd1",
    tag: "Linux",
  },
  {
    title: "Kernel Mode vs User Mode in OS",
    desc: "Why your app crashing doesn't take down the whole system — privilege separation explained.",
    href: "https://medium.com/@aravind.mutthe/kernal-mode-vs-user-mode-in-os-ce1f5a0f5921",
    tag: "Operating Systems",
  },
  {
    title: "Network Pipes & Sockets — The Complete Command List",
    desc: "Master TCP/UDP pipes, VPN tunnels, and GRE with the iproute2 suite and diagnostic tools.",
    href: "https://medium.com/@aravind.mutthe/network-pipes-sockets-92ebb17166cc",
    tag: "Networking",
  },
  {
    title: "Internal Pipes / IPC — Anonymous, Named, and Sockets",
    desc: "How processes talk on the same machine: pipes, FIFOs, and Unix domain sockets.",
    href: "https://medium.com/@aravind.mutthe/internal-pipes-or-ipc-31df0cd8f216",
    tag: "Linux",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        num="06"
        eyebrow="Blog"
        title={
          <>
            Writing about <span className="grad">systems.</span>
          </>
        }
        lead={
          <>
            I write about Linux internals, DevOps practice, and cloud infrastructure —
            the things I learn running real systems. Find me on these platforms.
          </>
        }
      />

      <section className="block">
        <div className="wrap">
          <Reveal>
            <div className="blog-platforms">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  className="blog-platform"
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                >
                  <img src={p.logo} alt={`${p.name} logo`} className="blog-platform-logo" loading="lazy" />
                  <div>
                    <div className="bp-name">{p.name}</div>
                    <div className="bp-handle">{p.handle}</div>
                    <p className="bp-desc">{p.desc}</p>
                    <span className="bp-cta">{p.cta} →</span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Reveal>
            <h2 className="section-title">From my notes</h2>
            <p className="section-lead">
              Technical reference notes from my GitHub — Linux, Docker, Kubernetes,
              Git, Java, and Python. The stuff I actually look up.
            </p>
            <div className="blog-grid">
              {NOTE_POSTS.map((p) => (
                <Link key={p.slug} className="blog-card" href={`/blog/${p.slug}`}>
                  <span className="blog-tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="blog-read">{p.readTime} read →</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Reveal>
            <h2 className="section-title">Featured articles</h2>
            <div className="blog-grid">
              {FEATURED.map((a) => (
                <a key={a.href} className="blog-card" href={a.href} target="_blank" rel="noopener">
                  <span className="blog-tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className="blog-read">Read on Medium →</span>
                </a>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a
                className="btn btn-gold"
                href="https://medium.com/@aravind.mutthe"
                target="_blank"
                rel="noopener"
              >
                All articles on Medium →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
