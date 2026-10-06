"use client";

import { useRef, useState, type FormEvent } from "react";
import { AXON_API, EMAIL, WA_NUMBER } from "./data";

declare global {
  interface Window {
    // reCAPTCHA removed — using honeypot instead for mobile reliability
  }
}

const SERVICES = [
  "Cloud Infrastructure Setup",
  "CI-CD Pipeline",
  "Kubernetes & Containers",
  "Cloud Cost Optimization",
  "Monitoring & Reliability",
  "Something else",
];

const BUDGETS = [
  "Under ₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "Above ₹1,00,000",
  "Not sure yet",
];

const TIMELINES = ["ASAP", "Within a month", "2–3 months", "Flexible"];

const CLOUDS = ["AWS", "Azure", "Google Cloud", "None yet", "Other"];

const TEAM_SIZES = ["Just me", "2–10", "11–50", "50+"];

const REFERRALS = ["Google", "LinkedIn", "X", "Medium", "Referral", "Other"];

const STEP_TITLES = ["About you", "What you need", "Budget & timeline"];
const STEP_SUBS = [
  "Who should I reply to?",
  "What are we building or fixing?",
  "So I can scope this realistically.",
];

const EMAIL_RE = /^\S+@\S+\.\S+$/;

/** Multi-step client intake form — qualifies leads before the first call.
 *  Saves to Supabase via the Axon lead API (reCAPTCHA-checked), emails via
 *  FormSubmit, and hands off to WhatsApp with a structured summary. */
export default function ContactForm() {
  const [step, setStep] = useState(0);
  // Step 1
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  // Step 2
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  // Step 3
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  // Step 4
  const [cloud, setCloud] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [referral, setReferral] = useState("");

  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; html: string } | null>(null);

  const stepHeadRef = useRef<HTMLHeadingElement>(null);
  const formTopRef = useRef<HTMLDivElement>(null);

  const clearErr = (key: string) =>
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  const goStep = (n: number) => {
    setErrors({});
    setStep(n);
    // Scroll to top of form on step change (no programmatic focus — iOS keyboard issues).
    requestAnimationFrame(() => {
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const validateStep = (s: number): Record<string, string> => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!name.trim()) e.name = "Please enter your name.";
      if (!email.trim()) e.email = "Please enter your email.";
      else if (!EMAIL_RE.test(email.trim())) e.email = "That email doesn't look right.";
    } else if (s === 1) {
      if (!service) e.service = "Pick the closest match — you can explain more below.";
      if (!description.trim())
        e.description = "A few sentences about your project helps a lot.";
    } else if (s === 2) {
      if (!budget) e.budget = "Choose a budget range.";
      if (!timeline) e.timeline = "Choose a timeline.";
    }
    return e;
  };

  const focusFirstError = (e: Record<string, string>) => {
    const key = Object.keys(e)[0];
    const el =
      document.getElementById(`cf-${key}`) ||
      document.querySelector(`#cf-${key}-group input, #cf-${key}-group select`);
    (el as HTMLElement | null)?.focus();
  };

  const onContinue = () => {
    const e = validateStep(step);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      goStep(step + 1);
    } else {
      focusFirstError(e);
    }
  };

  const buildSummary = (): string => {
    const org = company.trim();
    const rl = role.trim();
    const who = org && rl ? `${org} (${rl})` : org || rl || "—";
    return (
      `New project enquiry — portfolio site\n` +
      `Company: ${who}\n` +
      `Service: ${service}\n` +
      `Budget: ${budget} | Timeline: ${timeline}\n` +
      `Cloud: ${cloud || "—"} | Team: ${teamSize || "—"} | Found via: ${referral || "—"}\n` +
      `\nProject details:\n${description.trim()}`
    );
  };

  const resetAll = () => {
    setName("");
    setEmail("");
    setCompany("");
    setRole("");
    setService("");
    setDescription("");
    setBudget("");
    setTimeline("");
    setCloud("");
    setTeamSize("");
    setReferral("");
    setHoney("");
    setErrors({});
    setStep(0);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Guard: only submit on the final step. Enter key on earlier steps advances instead.
    if (step !== 2) {
      onContinue();
      return;
    }
    // Final guard: re-validate all required steps.
    const e0 = validateStep(0);
    const e1 = validateStep(1);
    const e2 = validateStep(2);
    const eAll = { ...e0, ...e1, ...e2 };
    if (Object.keys(eAll).length > 0) {
      setErrors(eAll);
      goStep(Object.keys(e0).length ? 0 : Object.keys(e1).length ? 1 : 2);
      return;
    }

    const n = name.trim();
    const em = email.trim();
    const summary = buildSummary();

    setSending(true);
    setStatus(null);

    // 1) Save to Supabase via the Axon lead API (honeypot bot check).
    const apiPromise = (async () => {
      try {
        const res = await fetch(`${AXON_API}/api/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: n,
            email: em,
            message: summary,
            source: "portfolio",
            website: honey, // honeypot — must be empty
          }),
        });
        const j = await res.json().catch(() => null);
        return res.ok && j?.ok === true;
      } catch {
        return false;
      }
    })();

    // 2) Email straight to his inbox (free FormSubmit relay) — instant notify.
    const emailPromise = fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: n,
        email: em,
        company: company.trim(),
        role: role.trim(),
        service,
        budget,
        timeline,
        cloud: cloud || "—",
        teamSize: teamSize || "—",
        referral: referral || "—",
        message: description.trim(),
        _subject: `New project enquiry from ${n} — ${service}`,
        _template: "table",
        _honey: honey,
      }),
    })
      .then(() => true)
      .catch(() => false);

    const [apiOk, emailOk] = await Promise.all([apiPromise, emailPromise]);

    // 3) WhatsApp handoff is manual via the buttons below (auto-open is blocked on iOS).

    setSending(false);

    // If BOTH delivery paths failed, show an error — don't fake a success.
    if (!apiOk && !emailOk) {
      setStatus({
        ok: false,
        html:
          `<strong>Something went wrong.</strong> Your enquiry couldn't be sent. ` +
          `Please try again, or reach me directly via the buttons below.` +
          `<div class="channel-row">` +
          `<a class="ch-btn wa" target="_blank" rel="noopener" href="https://wa.me/${WA_NUMBER}"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5z"/></svg>WhatsApp</a>` +
          `<a class="ch-btn mail" href="mailto:${EMAIL}"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>Email app</a>` +
          `</div>`,
      });
      return;
    }

    const bits: string[] = [];
    if (apiOk) bits.push("saved");
    if (emailOk) bits.push("emailed to me");

    const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(summary)}`;
    const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Project enquiry — ${n} (${service})`
    )}&body=${encodeURIComponent(summary)}`;

    // Escape user input to prevent XSS in the thank-you message.
    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const firstName = esc(n.split(" ")[0]);

    setStatus({
      ok: true,
      html:
        `<strong>Thank you, ${firstName}!</strong> Your enquiry has been ` +
        (bits.length ? bits.join(" and ") : "received") +
        `. I appreciate you reaching out — I'll personally review your project details and get back to you shortly.` +
        `<br><br>Tap <strong>WhatsApp</strong> below — everything's pre-filled, just press send and it lands straight on my phone.` +
        `<div class="channel-row">` +
        `<a class="ch-btn wa" target="_blank" rel="noopener" href="${wa}"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5z"/></svg>WhatsApp</a>` +
        `<a class="ch-btn mail" href="${mail}"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>Email app</a>` +
        `</div>`,
    });

    resetAll();
  };

  const errFor = (key: string) =>
    errors[key] ? (
      <p className="field-err" id={`cf-${key}-err`} role="alert">
        {errors[key]}
      </p>
    ) : null;

  const inputCls = (key: string) => (errors[key] ? "input-err" : "");

  return (
    <div className="cform" id="hireForm" ref={formTopRef}>
      {status?.ok ? (
        <div
          className="form-status ok"
          id="formStatus"
          role="status"
          aria-live="polite"
          dangerouslySetInnerHTML={{ __html: status.html }}
        />
      ) : (
        <form noValidate onSubmit={onSubmit}>
          {/* Progress */}
          <div className="istep-progress" aria-hidden="true">
            <div className="istep-progress-top">
              <span>
                Step {step + 1} of 3
              </span>
              <span>{STEP_TITLES[step]}</span>
            </div>
            <div className="istep-track">
              <div className="istep-fill" style={{ width: `${((step + 1) / 3) * 100}%` }} />
            </div>
          </div>

          <h3 className="istep-title" ref={stepHeadRef} tabIndex={-1}>
            {STEP_TITLES[step]}
          </h3>
          <p className="istep-sub">{STEP_SUBS[step]}</p>

          <div className="istep-body" key={step}>
            {step === 0 && (
              <>
                <div className="frow">
                  <div className="field">
                    <label htmlFor="cf-name">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="cf-name"
                      name="name"
                      placeholder="Jane Sharma"
                      autoComplete="name"
                      required
                      className={inputCls("name")}
                      aria-describedby={errors.name ? "cf-name-err" : undefined}
                      aria-invalid={!!errors.name}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        clearErr("name");
                      }}
                    />
                    {errFor("name")}
                  </div>
                  <div className="field">
                    <label htmlFor="cf-email">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="cf-email"
                      name="email"
                      placeholder="jane@company.com"
                      autoComplete="email"
                      required
                      className={inputCls("email")}
                      aria-describedby={errors.email ? "cf-email-err" : undefined}
                      aria-invalid={!!errors.email}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearErr("email");
                      }}
                    />
                    {errFor("email")}
                  </div>
                </div>
                <div className="frow">
                  <div className="field">
                    <label htmlFor="cf-company">Company / organization</label>
                    <input
                      type="text"
                      id="cf-company"
                      name="company"
                      placeholder="Acme Inc (optional)"
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-role">Your role</label>
                    <input
                      type="text"
                      id="cf-role"
                      name="role"
                      placeholder="e.g. Founder, CTO, Engineering Manager"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <fieldset className="field" id="cf-service-group">
                  <legend>
                    What do you need? <span aria-hidden="true">*</span>
                  </legend>
                  <div
                    className="radio-cards"
                    role="radiogroup"
                    aria-describedby={errors.service ? "cf-service-err" : undefined}
                  >
                    {SERVICES.map((s, i) => {
                      const id = `cf-service-${i}`;
                      return (
                        <span key={s} className="rc-wrap">
                          <input
                            type="radio"
                            id={id}
                            name="service"
                            value={s}
                            checked={service === s}
                            onChange={() => {
                              setService(s);
                              clearErr("service");
                            }}
                          />
                          <label htmlFor={id} className="radio-card">
                            {s}
                          </label>
                        </span>
                      );
                    })}
                  </div>
                  {errFor("service")}
                </fieldset>
                <div className="field">
                  <label htmlFor="cf-desc">
                    Project details <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="cf-desc"
                    name="description"
                    placeholder="Tell me about your project, goals, and pain points…"
                    required
                    className={inputCls("description")}
                    aria-describedby={errors.description ? "cf-description-err" : undefined}
                    aria-invalid={!!errors.description}
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      clearErr("description");
                    }}
                  />
                  {errFor("description")}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <fieldset className="field" id="cf-budget-group">
                  <legend>
                    Budget range <span aria-hidden="true">*</span>
                  </legend>
                  <div className="pills" aria-describedby={errors.budget ? "cf-budget-err" : undefined}>
                    {BUDGETS.map((b, i) => {
                      const id = `cf-budget-${i}`;
                      return (
                        <span key={b} className="rc-wrap">
                          <input
                            type="radio"
                            id={id}
                            name="budget"
                            value={b}
                            checked={budget === b}
                            onChange={() => {
                              setBudget(b);
                              clearErr("budget");
                            }}
                          />
                          <label htmlFor={id} className="pill">
                            {b}
                          </label>
                        </span>
                      );
                    })}
                  </div>
                  {errFor("budget")}
                </fieldset>
                <fieldset className="field" id="cf-timeline-group">
                  <legend>
                    Timeline <span aria-hidden="true">*</span>
                  </legend>
                  <div
                    className="pills"
                    aria-describedby={errors.timeline ? "cf-timeline-err" : undefined}
                  >
                    {TIMELINES.map((t, i) => {
                      const id = `cf-timeline-${i}`;
                      return (
                        <span key={t} className="rc-wrap">
                          <input
                            type="radio"
                            id={id}
                            name="timeline"
                            value={t}
                            checked={timeline === t}
                            onChange={() => {
                              setTimeline(t);
                              clearErr("timeline");
                            }}
                          />
                          <label htmlFor={id} className="pill">
                            {t}
                          </label>
                        </span>
                      );
                    })}
                  </div>
                  {errFor("timeline")}
                </fieldset>
              </>
            )}

            {step === 3 && (
              <>
                <fieldset className="field" id="cf-cloud-group">
                  <legend>Current cloud provider</legend>
                  <div className="pills">
                    {CLOUDS.map((c, i) => {
                      const id = `cf-cloud-${i}`;
                      return (
                        <span key={c} className="rc-wrap">
                          <input
                            type="radio"
                            id={id}
                            name="cloud"
                            value={c}
                            checked={cloud === c}
                            onChange={() => setCloud(c)}
                          />
                          <label htmlFor={id} className="pill">
                            {c}
                          </label>
                        </span>
                      );
                    })}
                  </div>
                </fieldset>
                <div className="frow">
                  <div className="field">
                    <label htmlFor="cf-team">Team size</label>
                    <select
                      id="cf-team"
                      name="teamSize"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                    >
                      <option value="">Select…</option>
                      {TEAM_SIZES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="cf-ref">How did you hear about me?</label>
                    <select
                      id="cf-ref"
                      name="referral"
                      value={referral}
                      onChange={(e) => setReferral(e.target.value)}
                    >
                      <option value="">Select…</option>
                      {REFERRALS.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          <input
            type="text"
            name="_honey"
            className="hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
          />

          <div className="istep-nav">
            {step > 0 && (
              <button type="button" className="btn btn-ghost" onClick={() => goStep(step - 1)}>
                ← Back
              </button>
            )}
            {step < 2 ? (
              <button type="button" className="btn" onClick={onContinue}>
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                className={`btn${sending ? " loading" : ""}`}
                id="hireBtn"
                disabled={sending}
              >
                <span className="spinner"></span>
                <span className="btn-label">{sending ? "Sending…" : "Send Enquiry →"}</span>
              </button>
            )}
          </div>

          {status && !status.ok && (
            <div
              className="form-status err"
              id="formStatus"
              role="status"
              aria-live="polite"
              dangerouslySetInnerHTML={{ __html: status.html }}
            />
          )}
        </form>
      )}
    </div>
  );
}
