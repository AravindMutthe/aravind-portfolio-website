"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";

const EMAIL = "mutthe.aravind@gmail.com";
const CAL_URL = "https://cal.com/aravindmutte/intro-call";

/**
 * Native book-a-call — Apple/Samsung-style calendar, built entirely in-repo.
 * No embeds, no external widgets. The visitor picks a date + time natively;
 * the request goes through the existing FormSubmit pipeline (same as all
 * other lead forms) so Aravind gets it instantly by email.
 */

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"]; // Monday start

// 30-min slots, 10:00–18:00 IST
const SLOTS: string[] = [];
for (let h = 10; h < 18; h++) {
  SLOTS.push(`${h}:00`, `${h}:30`);
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function fmtDate(d: Date) {
  return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;
}

export default function NativeBookCall() {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [picked, setPicked] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  // month grid cells (Monday-start)
  const cells = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const lead = (first.getDay() + 6) % 7; // Mon=0
    const days = new Date(viewYear, viewMonth + 1, 0).getDate();
    const arr: (Date | null)[] = [];
    for (let i = 0; i < lead; i++) arr.push(null);
    for (let d = 1; d <= days; d++) arr.push(new Date(viewYear, viewMonth, d));
    return arr;
  }, [viewYear, viewMonth]);

  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();
  const shiftMonth = (dir: 1 | -1) => {
    let m = viewMonth + dir, y = viewYear;
    if (m < 0) { m = 11; y--; }
    if (m > 11) { m = 0; y++; }
    setViewMonth(m); setViewYear(y);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!picked || !slot || !name.trim() || !email.trim()) return;
    setSending(true); setError("");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Call booking request — ${fmtDate(picked)} ${slot} IST`,
          _template: "table",
          name: name.trim(),
          email: email.trim(),
          date: fmtDate(picked),
          time: `${slot} IST`,
          type: "30-minute intro call",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setDone(true);
    } catch {
      setError("Couldn't send the request — please try again or use the Cal.com link below.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="block" aria-labelledby="book-call-h">
      <div className="wrap">
        <Reveal>
          <div className="book-card native-book">
            <div className="book-copy">
              <span className="eyebrow">Book a call</span>
              <h2 id="book-call-h">
                Prefer to <span className="grad">talk it through?</span>
              </h2>
              <p>
                Pick a date and time right here — a 30-minute slot on my calendar.
                Good for scoping a project, discussing a role, or a quick DevOps
                consultation. No pitch, just a conversation.
              </p>
              <ul className="book-points">
                <li>30 minutes, video or phone</li>
                <li>Times shown in IST</li>
                <li>Confirmation by email within a day</li>
              </ul>
              <a className="hero-link book-alt" href={CAL_URL} target="_blank" rel="noopener">
                Prefer instant booking? Use Cal.com <span aria-hidden="true">›</span>
              </a>
            </div>

            <div className="book-native">
              {done ? (
                <div className="book-done" role="status">
                  <div className="book-done-tick" aria-hidden="true">✓</div>
                  <h3>Request received.</h3>
                  <p>
                    {fmtDate(picked!)} at {slot} IST — I&apos;ll confirm by email
                    shortly. Talk soon, {name.split(" ")[0]}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="book-form">
                  {/* month */}
                  <div className="cal-head">
                    <button type="button" className="cal-nav" onClick={() => shiftMonth(-1)}
                      disabled={!canGoPrev} aria-label="Previous month">‹</button>
                    <b>{MONTHS[viewMonth]} {viewYear}</b>
                    <button type="button" className="cal-nav" onClick={() => shiftMonth(1)}
                      aria-label="Next month">›</button>
                  </div>
                  <div className="cal-grid" role="grid" aria-label="Choose a date">
                    {WEEKDAYS.map((w, i) => (
                      <span key={i} className="cal-wd">{w}</span>
                    ))}
                    {cells.map((d, i) =>
                      d === null ? (
                        <span key={`x${i}`} className="cal-day empty" />
                      ) : (
                        (() => {
                          const past = d < today;
                          const isToday = sameDay(d, today);
                          const sel = picked !== null && sameDay(d, picked);
                          return (
                            <button
                              key={i}
                              type="button"
                              role="gridcell"
                              disabled={past}
                              aria-selected={sel}
                              aria-label={fmtDate(d)}
                              className={`cal-day${past ? " past" : ""}${isToday ? " today" : ""}${sel ? " sel" : ""}`}
                              onClick={() => { setPicked(d); setSlot(null); }}
                            >
                              {d.getDate()}
                            </button>
                          );
                        })()
                      )
                    )}
                  </div>

                  {/* time slots */}
                  {picked && (
                    <div className="slot-wrap">
                      <p className="slot-label">{fmtDate(picked)} — pick a time (IST)</p>
                      <div className="slot-grid">
                        {SLOTS.map((s) => (
                          <button
                            key={s}
                            type="button"
                            aria-pressed={slot === s}
                            className={`slot${slot === s ? " sel" : ""}`}
                            onClick={() => setSlot(s)}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* details */}
                  {picked && slot && (
                    <div className="book-fields">
                      <label>
                        Your name
                        <input type="text" required value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Sharma" autoComplete="name" />
                      </label>
                      <label>
                        Email
                        <input type="email" required value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com" autoComplete="email" />
                      </label>
                      <input type="text" name="_honey" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                      {error && <p className="book-err" role="alert">{error}</p>}
                      <button type="submit" className="btn btn-gold book-submit" disabled={sending}>
                        {sending ? "Sending…" : `Request ${slot} on ${fmtDate(picked)}`}
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
