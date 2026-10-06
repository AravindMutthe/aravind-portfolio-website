"use client";

import { useState, type FormEvent } from "react";
import { AXON_API, EMAIL, RECAPTCHA_KEY, WA_NUMBER } from "./data";

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

const BUDGETS = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Full-time role (salary)",
];

/** Hire/enquiry form — saves to Supabase via the Axon lead API (reCAPTCHA-checked),
 *  emails via FormSubmit, and hands off to WhatsApp — same as the static site. */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; html: string } | null>(null);

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
          // reCAPTCHA script still loading — poll briefly.
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
    const msg = message.trim();

    if (!n || !em || !msg || !/^\S+@\S+\.\S+$/.test(em)) {
      setStatus({
        ok: false,
        html: "<strong>Almost there.</strong> Please add your name, a valid email, and a few words about the project.",
      });
      return;
    }

    const summary =
      "New project enquiry — portfolio site\n" +
      "Name: " + n +
      "\nEmail: " + em +
      (phone.trim() ? "\nPhone: " + phone.trim() : "") +
      (budget ? "\nBudget: " + budget : "") +
      "\n\n" + msg;

    // Normalize phone to a 10-digit Indian mobile for the API (optional field).
    let digits = phone.replace(/\D/g, "");
    if (digits.length === 12 && digits.indexOf("91") === 0) digits = digits.slice(2);
    if (digits.length === 11 && digits.charAt(0) === "0") digits = digits.slice(1);
    const cleanPhone = /^[6-9]\d{9}$/.test(digits) ? digits : undefined;

    setSending(true);
    setStatus(null);

    // 1) Save to Supabase via the Axon lead API (bot-checked with reCAPTCHA).
    const apiPromise = (async () => {
      const token = await getToken();
      if (!token) return false;
      try {
        const res = await fetch(`${AXON_API}/api/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: n,
            email: em,
            ...(cleanPhone ? { phone: cleanPhone } : {}),
            message: (budget ? `Budget: ${budget}\n\n` : "") + msg,
            source: "portfolio",
            recaptchaToken: token,
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
        phone: phone.trim(),
        budget,
        message: msg,
        _subject: `New project enquiry from ${n}`,
        _template: "table",
        _honey: honey,
      }),
    })
      .then(() => true)
      .catch(() => false);

    const [apiOk, emailOk] = await Promise.all([apiPromise, emailPromise]);

    // 3) Open WhatsApp with the enquiry pre-filled — one tap sends it to him.
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(summary)}`, "_blank");

    setSending(false);
    const bits: string[] = [];
    if (apiOk) bits.push("saved");
    if (emailOk) bits.push("emailed to me");

    const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(summary)}`;
    const sms = `sms:+91${WA_NUMBER.slice(2)}?&body=${encodeURIComponent(summary)}`;
    const mail = `mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry — " + n)}&body=${encodeURIComponent(summary)}`;

    setStatus({
      ok: true,
      html:
        `<strong>Done!</strong> Your enquiry was ` +
        (bits.length ? bits.join(" and ") : "received") +
        `. I opened <strong>WhatsApp</strong> with everything pre-filled: just press send there and it lands straight on my phone.` +
        `<div class="channel-row">` +
        `<a class="ch-btn wa" target="_blank" rel="noopener" href="${wa}"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5z"/></svg>WhatsApp</a>` +
        `<a class="ch-btn sms" href="${sms}"><svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>SMS</a>` +
        `<a class="ch-btn mail" href="${mail}"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>Email app</a>` +
        `</div>` +
        `<div style="margin-top:12px;font-size:13px;opacity:.75">Prefer another way? Use SMS or your email app above.</div>`,
    });

    setName("");
    setEmail("");
    setPhone("");
    setBudget("");
    setMessage("");
    setHoney("");
  };

  return (
    <form className="cform" id="hireForm" noValidate onSubmit={onSubmit}>
      <div className="frow">
        <div className="field">
          <label htmlFor="cf-name">Your name *</label>
          <input
            type="text"
            id="cf-name"
            name="name"
            placeholder="Jane Sharma"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Your email *</label>
          <input
            type="email"
            id="cf-email"
            name="email"
            placeholder="jane@company.com"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="frow">
        <div className="field">
          <label htmlFor="cf-phone">Phone / WhatsApp</label>
          <input
            type="tel"
            id="cf-phone"
            name="phone"
            placeholder="+91 …"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-budget">Project budget</label>
          <select id="cf-budget" name="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">Select a range…</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Project details *</label>
        <textarea
          id="cf-msg"
          name="message"
          placeholder="What are you building? Timeline? Current stack?…"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
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
      <button type="submit" className={`btn${sending ? " loading" : ""}`} id="hireBtn" disabled={sending}>
        <span className="spinner"></span>
        <span className="btn-label">{sending ? "Sending…" : "Send Enquiry →"}</span>
      </button>
      {status && (
        <div
          className={`form-status ${status.ok ? "ok" : "err"}`}
          id="formStatus"
          role="status"
          aria-live="polite"
          dangerouslySetInnerHTML={{ __html: status.html }}
        />
      )}
    </form>
  );
}
