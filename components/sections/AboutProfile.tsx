import Reveal from "@/components/Reveal";

/** About page: profile intro with photo placeholder and social buttons.
 *  Social icons use the ORIGINAL official brand logos. */
export default function AboutProfile() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="profile-grid">
          <Reveal>
            <div className="photo-frame">
              <img className="photo-img" src="/aravind-photo.jpg" alt="Aravind Mutte — Cloud DevOps & SRE Engineer" />
              <div className="photo-meta">
                <strong>Aravind Mutte</strong>
                <span>Cloud DevOps &amp; SRE Engineer · Hyderabad, India</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay="d1">
            <div className="profile-copy">
              <div className="sub-label">Profile</div>
              <h2 className="sub-title">
                I keep critical systems <span className="grad">running calm.</span>
              </h2>
              <p>
                I&apos;m a <strong>Cloud DevOps &amp; Site Reliability Engineer</strong> based in{" "}
                <strong>Hyderabad, India</strong>, with a Master&apos;s in Computer Science from{" "}
                <strong>Rivier University (USA)</strong> and about two years of professional experience
                — from startup infrastructure to enterprise IT platforms.
              </p>
              <p>
                My sweet spot is the intersection of <strong>development velocity and operational calm</strong>:
                pipelines that deploy in minutes, infrastructure defined entirely as code, and monitoring
                that pages you before customers notice.
              </p>
              <p>
                I&apos;m currently <strong>available for immediate joining</strong> — open to freelance
                and contract engagements as well as full-time DevOps / SRE / Platform Engineering roles.
              </p>
              <div className="fact-row">
                <span className="fact">
                  <b>●</b> Available immediately
                </span>
                <span className="fact">Hyderabad, India</span>
                <span className="fact">~2 yrs experience</span>
                <span className="fact">English · Telugu · Hindi</span>
              </div>
              <div className="social-row">
                <a
                  className="sbtn"
                  href="https://linkedin.com/in/aravindmutte"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/LinkedIn_logo_initials.png"
                    alt="LinkedIn logo"
                  />
                  LinkedIn
                </a>
                <a
                  className="sbtn"
                  href="https://github.com/AravindMutthe"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="https://cdn.simpleicons.org/github" alt="GitHub logo" />
                  GitHub
                </a>
                <a className="sbtn" href="https://x.com/aravind_mutthe" target="_blank" rel="noopener">
                  <img src="https://cdn.simpleicons.org/x" alt="X logo" />X
                </a>
                <a className="sbtn" href="mailto:mutthe.aravind@gmail.com">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  Email
                </a>
                <a className="sbtn sbtn-resume" href="/Aravind-Mutte-Resume.pdf" download>
                  <svg viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
