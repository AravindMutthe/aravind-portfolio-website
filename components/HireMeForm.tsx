"use client";

import { useRef, useState, type FormEvent } from "react";
import { EMAIL, WA_NUMBER } from "./data";
import CountrySelect from "./CountrySelect";

const JOB_TYPES = ["Full-time", "Contract", "Contract-to-hire"];
const WORK_MODES = ["Remote", "Hybrid", "On-site"];
const EXP_LEVELS = ["1–2 years", "2–4 years", "4–6 years", "6+ years"];
const NOTICE_PERIODS = ["Immediate", "15 days", "30 days", "60 days", "90 days", "Serving notice"];
const SALARY_RANGES = [
  "Under ₹8 LPA",
  "₹8–12 LPA",
  "₹12–18 LPA",
  "₹18–25 LPA",
  "₹25–40 LPA",
  "Above ₹40 LPA",
  "Competitive / Discuss",
];

const STEP_TITLES = ["Your details", "The role", "Compensation & next steps"];
const EMAIL_RE = /^\S+@\S+\.\S+$/;

/** Hire-Me intake — for recruiters and hiring managers.
 *  Collects genuine hiring data: who you are, the role, comp range.
 *  Self-contained: FormSubmit email only. */
export default function HireMeForm() {
  const [step, setStep] = useState(0);
  // Step 1 — recruiter
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [recruiterRole, setRecruiterRole] = useState("");
  // Step 2 — role
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [expLevel, setExpLevel] = useState("");
  const [techStack, setTechStack] = useState("");
  // Step 3 — comp & process
  const [salary, setSalary] = useState("");
  const [notice, setNotice] = useState("");
  const [jdLink, setJdLink] = useState("");
  const [notes, setNotes] = useState("");

  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; html: string } | null>(null);
  const formTopRef = useRef<HTMLDivElement>(null);

  const goStep = (n: number) => {
    setErrors({});
    setStep(n);
    formTopRef.current?.scrollIntoView({ block: "start" });
  };

  const validateStep = (s: number): Record<string, string> => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!name.trim()) e.name = "Please enter your name.";
      if (!email.trim()) e.email = "Please enter your work email.";
      else if (!EMAIL_RE.test(email.trim())) e.email = "That email doesn't look right.";
      if (!company.trim()) e.company = "Which company is hiring?";
    } else if (s === 1) {
      if (!jobTitle.trim()) e.jobTitle = "What's the job title?";
      if (!jobType) e.jobType = "Select employment type.";
      if (!workMode) e.workMode = "Select work mode.";
      if (!country) e.country = "Select the job country.";
      if (!expLevel) e.expLevel = "Select experience range.";
    } else if (s === 2) {
      if (!salary) e.salary = "Select a salary range — it saves us both time.";
    }
    return e;
  };

  const onContinue = () => {
    const e = validateStep(step);
    setErrors(e);
    if (Object.keys(e).length === 0) goStep(step + 1);
  };

  const buildSummary = () =>
    `New HIRE-ME enquiry — portfolio site\n` +
    `Recruiter: ${name.trim()} (${recruiterRole.trim() || "—"}) — ${company.trim()}\n` +
    `Email: ${email.trim()} | Phone: ${phone.trim() || "—"}\n` +
    `Role: ${jobTitle.trim()} | Type: ${jobType} | Mode: ${workMode}\n` +
    `Location: ${city.trim() || "—"}, ${country}\n` +
    `Experience: ${expLevel} | Stack: ${techStack.trim() || "—"}\n` +
    `Salary: ${salary} | Notice: ${notice || "—"}\n` +
    `JD: ${jdLink.trim() || "—"}\n\nNotes:\n${notes.trim() || "—"}`;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validateStep(2);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const n = name.trim();
    const em = email.trim();
    const summary = buildSummary();
    setSending(true);
    setStatus(null);

    let ok = false;
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: n,
          email: em,
          phone: phone.trim(),
          company: company.trim(),
          recruiterRole: recruiterRole.trim(),
          jobTitle: jobTitle.trim(),
          jobType,
          workMode,
          country,
          city: city.trim(),
          expLevel,
          techStack: techStack.trim(),
          salary,
          notice,
          jdLink: jdLink.trim(),
          notes: notes.trim(),
          _subject: `Hire-me: ${jobTitle.trim()} at ${company.trim()} — ${n}`,
          _template: "table",
          _honey: honey,
        }),
      });
      ok = res.ok;
    } catch {
      ok = false;
    }
    setSending(false);

    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const firstName = esc(n.split(" ")[0]);
    const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(summary)}`;

    if (!ok) {
      setStatus({
        ok: false,
        html:
          `<strong>Something went wrong.</strong> Your enquiry couldn't be sent. ` +
          `Please reach me directly:<div class="channel-row">` +
          `<a class="ch-btn wa" target="_blank" rel="noopener" href="https://wa.me/${WA_NUMBER}">WhatsApp</a>` +
          `<a class="ch-btn mail" href="mailto:${EMAIL}">Email app</a></div>`,
      });
      return;
    }

    setStatus({
      ok: true,
      html:
        `<strong>Thank you, ${firstName}!</strong> Your hiring enquiry has been emailed to me. ` +
        `I'll review the role and get back to you shortly.` +
        `<br><br>Prefer WhatsApp? Tap below — the role summary is pre-filled.` +
        `<div class="channel-row">` +
        `<a class="ch-btn wa" target="_blank" rel="noopener" href="${wa}">WhatsApp</a>` +
        `<a class="ch-btn mail" href="mailto:${EMAIL}?subject=${encodeURIComponent(`Re: ${jobTitle.trim()} at ${company.trim()}`)}">Email app</a>` +
        `</div>`,
    });
  };

  const err = (k: string) => errors[k] && <span className="ferr">{errors[k]}</span>;
  const pill = (group: string, value: string, opts: string[], set: (v: string) => void) => (
    <div className="pills" role="radiogroup" aria-label={group}>
      {opts.map((o) => (
        <label key={o} className="rc-wrap">
          <input
            type="radio"
            name={group}
            value={o}
            checked={value === o}
            onChange={() => set(o)}
          />
          <span className="pill">{o}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="cform hire-form" ref={formTopRef}>
      {status?.ok ? (
        <div className="form-status ok" role="status" aria-live="polite"
          dangerouslySetInnerHTML={{ __html: status.html }} />
      ) : (
        <form noValidate onSubmit={onSubmit}>
          <div className="istep-progress" aria-hidden="true">
            <div className="istep-progress-top">
              <span>Step {step + 1} of 3</span>
              <span>{STEP_TITLES[step]}</span>
            </div>
            <div className="istep-bar">
              <div className="istep-fill" style={{ width: `${((step + 1) / 3) * 100}%` }} />
            </div>
          </div>

          {step === 0 && (
            <div className="istep">
              <h3>Your details</h3>
              <p className="istep-sub">Who's hiring?</p>
              <div className="field">
                <label htmlFor="hm-name">Full name *</label>
                <input id="hm-name" type="text" value={name} autoComplete="name"
                  onChange={(e) => setName(e.target.value)} placeholder="Priya Sharma" />
                {err("name")}
              </div>
              <div className="field">
                <label htmlFor="hm-email">Work email *</label>
                <input id="hm-email" type="email" value={email} autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} placeholder="priya@company.com" />
                {err("email")}
              </div>
              <div className="frow">
                <div className="field">
                  <label htmlFor="hm-phone">Phone / WhatsApp</label>
                  <input id="hm-phone" type="tel" value={phone} autoComplete="tel"
                    onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" />
                </div>
                <div className="field">
                  <label htmlFor="hm-company">Company *</label>
                  <input id="hm-company" type="text" value={company} autoComplete="organization"
                    onChange={(e) => setCompany(e.target.value)} placeholder="Acme Corp" />
                  {err("company")}
                </div>
              </div>
              <div className="field">
                <label htmlFor="hm-rrole">Your role</label>
                <input id="hm-rrole" type="text" value={recruiterRole}
                  onChange={(e) => setRecruiterRole(e.target.value)}
                  placeholder="Technical Recruiter, Hiring Manager…" />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="istep">
              <h3>The role</h3>
              <p className="istep-sub">What are you hiring for?</p>
              <div className="field">
                <label htmlFor="hm-title">Job title *</label>
                <input id="hm-title" type="text" value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Senior DevOps Engineer" />
                {err("jobTitle")}
              </div>
              <div className="field">
                <label>Employment type *</label>
                {pill("hm-jtype", jobType, JOB_TYPES, setJobType)}
                {err("jobType")}
              </div>
              <div className="field">
                <label>Work mode *</label>
                {pill("hm-wmode", workMode, WORK_MODES, setWorkMode)}
                {err("workMode")}
              </div>
              <div className="frow">
                <CountrySelect id="hm-country" label="Job country" required
                  value={country} onChange={setCountry} />
                <div className="field">
                  <label htmlFor="hm-city">City</label>
                  <input id="hm-city" type="text" value={city}
                    onChange={(e) => setCity(e.target.value)} placeholder="Hyderabad" />
                </div>
              </div>
              {err("country")}
              <div className="field">
                <label>Experience required *</label>
                {pill("hm-exp", expLevel, EXP_LEVELS, setExpLevel)}
                {err("expLevel")}
              </div>
              <div className="field">
                <label htmlFor="hm-stack">Key tech stack</label>
                <textarea id="hm-stack" value={techStack} rows={2}
                  onChange={(e) => setTechStack(e.target.value)}
                  placeholder="AWS, Kubernetes, Terraform, CI/CD…" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="istep">
              <h3>Compensation & next steps</h3>
              <p className="istep-sub">So we don't waste each other's time.</p>
              <div className="field">
                <label>Salary range (CTC) *</label>
                {pill("hm-sal", salary, SALARY_RANGES, setSalary)}
                {err("salary")}
              </div>
              <div className="field">
                <label>Notice period / availability</label>
                {pill("hm-notice", notice, NOTICE_PERIODS, setNotice)}
              </div>
              <div className="field">
                <label htmlFor="hm-jd">Job description link</label>
                <input id="hm-jd" type="url" value={jdLink}
                  onChange={(e) => setJdLink(e.target.value)}
                  placeholder="https://…" inputMode="url" />
              </div>
              <div className="field">
                <label htmlFor="hm-notes">Anything else</label>
                <textarea id="hm-notes" value={notes} rows={3}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Interview rounds, team size, must-haves…" />
              </div>
              <input type="text" name="_honey" value={honey}
                onChange={(e) => setHoney(e.target.value)}
                className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            </div>
          )}

          <div className="istep-nav">
            {step > 0 ? (
              <button type="button" className="btn btn-gold-outline" onClick={() => goStep(step - 1)}>
                ← Back
              </button>
            ) : <span />}
            {step < 2 ? (
              <button type="button" className="btn btn-gold" onClick={onContinue}>
                Continue →
              </button>
            ) : (
              <button type="submit" className={`btn btn-gold${sending ? " loading" : ""}`} disabled={sending}>
                <span className="spinner"></span>
                <span className="btn-label">{sending ? "Sending…" : "Send Enquiry →"}</span>
              </button>
            )}
          </div>

          {status && !status.ok && (
            <div className="form-status err" role="status" aria-live="polite"
              dangerouslySetInnerHTML={{ __html: status.html }} />
          )}
        </form>
      )}

      <noscript>
        <form action={`https://formsubmit.co/${EMAIL}`} method="POST">
          <input type="hidden" name="_subject" value="Hire-me enquiry (no-JS fallback)" />
          <input type="hidden" name="_template" value="table" />
          <div className="field">
            <label htmlFor="hmf-name">Full name</label>
            <input id="hmf-name" name="name" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="hmf-email">Work email</label>
            <input id="hmf-email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="hmf-msg">Role details</label>
            <textarea id="hmf-msg" name="message" required
              placeholder="Job title, company, location, salary range…" />
          </div>
          <button className="btn btn-gold" type="submit">Send Enquiry →</button>
        </form>
      </noscript>
    </div>
  );
}
