"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { AXON_API, RECAPTCHA_KEY } from "@/components/data";

declare global {
  interface Window {
    grecaptcha?: {
      enterprise: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, opts: { action: string }) => Promise<string>;
      };
    };
  }
}

/** Lead magnet band — free "Production Readiness Checklist" PDF in exchange for
 *  name + email. Writes to the same Supabase leads table via the Axon API
 *  with source='lead-magnet'. Same reCAPTCHA pattern as ContactForm. */
export default function LeadMagnet() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getToken = (): Promise<string | null> =>
    new Promise((resolve) => {
      const t0 = Date.now();
      const tryExec = () => {
        if (window.grecaptcha?.enterprise) {
          window.grecaptcha.enterprise.ready(() => {
            window
              .grecaptcha!.enterprise.execute(RECAPTCHA_KEY, { action: "lead_submit" })
              .then((t) => resolve(t))
              .catch(() => resolve(null));
          });
        } else if (Date.now() - t0 < 8000) {
          setTimeout(tryExec, 300);
        } else {
          resolve(null);
        }
      };
      tryExec();
    });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const em = email.trim();
    if (!n || !/^\S+@\S+\.\S+$/.test(em)) {
      setError("Please add your name and a valid email.");
      return;
    }
    setSending(true);
    setError(null);
    try {
      const token = await getToken();
      const res = await fetch(`${AXON_API}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: n,
          email: em,
          message: "Requested: Production Readiness Checklist",
          source: "lead-magnet",
          recaptchaToken: token,
        }),
      });
      const j = await res.json().catch(() => null);
      if (res.ok && j?.ok === true) {
        setDone(true);
      } else {
        // Still give the PDF — capture is best-effort, the asset is free.
        setDone(true);
      }
    } catch {
      setDone(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="block">
      <div className="wrap">
        <Reveal variant="scale">
          <div className="magnet-card">
            <div className="magnet-copy">
              <div className="sub-label" style={{ color: "var(--gold)" }}>
                Free download
              </div>
              <h2>
                The Production Readiness <span className="grad">Checklist.</span>
              </h2>
              <p>
                Fifteen checks I run before anything ships — the same ones that
                catch missing health checks, untested rollbacks, and silent
                failures before your users do.
              </p>
              <ul>
                <li>Health checks, readiness &amp; liveness probes</li>
                <li>Rollback plan, backups &amp; runbook essentials</li>
                <li>Alerts, dashboards &amp; on-call readiness</li>
              </ul>
            </div>
            <div className="magnet-form-wrap">
              {done ? (
                <div className="magnet-form">
                  <p className="magnet-status">
                    <strong>You&apos;re in.</strong> Here&apos;s your checklist:
                  </p>
                  <a
                    className="btn"
                    href="/production-readiness-checklist.pdf"
                    download
                  >
                    Download the PDF &darr;
                  </a>
                  <p className="magnet-status" style={{ fontSize: 13 }}>
                    Want me to run these checks on your bill?{" "}
                    <a href="/contact">Let&apos;s talk &rarr;</a>
                  </p>
                </div>
              ) : (
                <form className="magnet-form" onSubmit={onSubmit}>
                  <label htmlFor="magnet-name">Your name</label>
                  <input
                    id="magnet-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    autoComplete="name"
                  />
                  <label htmlFor="magnet-email">Work email</label>
                  <input
                    id="magnet-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    autoComplete="email"
                  />
                  {error && (
                    <p className="magnet-status" style={{ color: "#b3261e" }}>
                      {error}
                    </p>
                  )}
                  <button className="btn" type="submit" disabled={sending}>
                    {sending ? "Sending…" : "Send me the checklist →"}
                  </button>
                  <p className="magnet-status" style={{ fontSize: 12, opacity: 0.7 }}>
                    No spam — just the PDF, plus the occasional useful note.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
