"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { AXON_API, RECAPTCHA_KEY } from "./data";

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

interface Msg {
  id: number;
  from: "bot" | "user";
  text: string;
  chips?: string[];
}

interface Rule {
  keys: string[];
  reply: string;
}

const CAL_URL = "https://cal.com/aravindmutte/intro-call";
const EMAIL = "mutthe.aravind@gmail.com";
const WA_URL = "https://wa.me/919885189951";

const GREETING =
  "Hi! I'm Aravind's assistant. Ask me about his services, experience, or booking a call 👇";
const GREET_CHIPS = ["Services", "Book a call", "Experience", "Contact"];
const FALLBACK = `Good question — that's best answered by Aravind directly. You can [book a call](${CAL_URL}) or [send him a message](/contact).`;
const LEAD_ASK =
  "Want Aravind to follow up personally? Just drop your **email** here and he'll reach out.";
const LEAD_DONE = "Thanks! He'll be in touch shortly.";
const LEAD_FAIL = `Noted — and you can always reach him directly at **${EMAIL}**.`;

const RULES: Rule[] = [
  {
    keys: ["thank", "thanks", "great", "awesome"],
    reply: "You're welcome! Anything else I can help with?",
  },
  {
    keys: ["price", "prices", "pricing", "cost", "charge", "rates", "budget", "fee"],
    reply: `Pricing depends on scope — a CI/CD pipeline build and a full platform engagement are different conversations. The fastest way to get a number: [book a free intro call](${CAL_URL}) and describe what you need.`,
  },
  {
    keys: ["book", "call", "meeting", "schedule", "appointment"],
    reply: `You can grab a **30-minute intro call** here: [cal.com/aravindmutte/intro-call](${CAL_URL}). Pick a time that suits you — no prep needed.`,
  },
  {
    keys: ["contact", "email", "mail", "whatsapp", "reach"],
    reply: `Fastest routes: **${EMAIL}**, [WhatsApp chat](${WA_URL}), or the [contact form](/contact) — enquiries land straight in his inbox.`,
  },
  {
    keys: ["resume", "cv"],
    reply:
      "Grab his one-page résumé here: [Aravind-Mutte-Resume.pdf](/Aravind-Mutte-Resume.pdf).",
  },
  {
    keys: ["project", "projects", "portfolio", "built", "case study"],
    reply: `Recent builds: the **Axon lead API** (Cloud Run + Supabase), the **GradeSpot frontend** (Next.js + TypeScript), and a **Termux homelab** — all running at near-zero cost. Full case studies on the [projects page](/projects).`,
  },
  {
    keys: ["experience", "background", "career", "worked", "years"],
    reply: `Aravind is a **Cloud DevOps & SRE engineer** (~2 years) with stints at PragmaEdge, HCLTech, and Infosys — plus independent cloud builds. Full timeline on the [experience page](/experience).`,
  },
  {
    keys: [
      "tech",
      "stack",
      "skills",
      "tools",
      "aws",
      "azure",
      "gcp",
      "kubernetes",
      "k8s",
      "terraform",
      "docker",
      "jenkins",
      "python",
    ],
    reply: `Daily drivers: **AWS, Terraform, Docker, Kubernetes, GitHub Actions, Python & Bash** — plus **Azure, GCP**, Jenkins, and Prometheus/Grafana. Full breakdown on the [skills page](/skills).`,
  },
  {
    keys: ["service", "services", "offer", "help", "freelance", "devops", "sre"],
    reply: `Aravind builds cloud infrastructure and automation: **landing zones** on AWS/Azure/GCP, **CI/CD pipelines**, **Kubernetes** platforms, and day-2 ops (monitoring, cost control). Full list on the [services page](/services).`,
  },
  {
    keys: [
      "available",
      "availability",
      "joining",
      "hire",
      "hiring",
      "full time",
      "job",
      "role",
    ],
    reply: `He's **available for immediate joining** — freelance projects and full-time roles. [Book an intro call](${CAL_URL}) to discuss timing.`,
  },
  {
    keys: ["where", "location", "based", "hyderabad", "india"],
    reply: "He's based in **Hyderabad, India** (IST) and works with clients remotely.",
  },
  {
    keys: ["who is", "about aravind", "introduce"],
    reply: `Aravind Mutte is a **Cloud DevOps & SRE engineer** in Hyderabad — he builds automated, observable cloud platforms. More on the [about page](/about).`,
  },
  {
    keys: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
    reply:
      "Hey! Ask me about Aravind's **services**, **experience**, **tech stack**, or **booking a call** — or tap a suggestion above.",
  },
];

/** Keyword brain — word-boundary matching so "hi" doesn't fire inside "which". */
function brain(raw: string): string {
  const t = raw.toLowerCase().replace(/-/g, " ");
  const words = new Set(t.split(/[^a-z0-9+#]+/).filter(Boolean));
  const hit = (keys: string[]) =>
    keys.some((k) => (k.includes(" ") ? t.includes(k) : words.has(k)));
  for (const r of RULES) {
    if (hit(r.keys)) return r.reply;
  }
  return FALLBACK;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Tiny markdown: **bold**, [text](url), line breaks. HTML is escaped first. */
function md(src: string): string {
  let out = escapeHtml(src);
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_m, t: string, u: string) =>
      `<a href="${u}"${
        u.startsWith("/") ? "" : ' target="_blank" rel="noopener"'
      }>${t}</a>`
  );
  out = out.replace(/\n/g, "<br>");
  return out;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Floating chatbot — curated keyword brain, zero API cost. Replaces the old
 *  floating contact widget on every page. */
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [busy, setBusy] = useState(false);

  const idRef = useRef(1);
  const greetedRef = useRef(false);
  const exchangesRef = useRef(0);
  const leadAskedRef = useRef(false);
  const leadDoneRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgsRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Restore open state (session only — history stays fresh each page load).
  useEffect(() => {
    try {
      if (sessionStorage.getItem("cb-open") === "1") setOpen(true);
    } catch {
      /* storage unavailable — ignore */
    }
  }, []);

  const pushBot = (text: string, chips?: string[]) => {
    const id = idRef.current++;
    setMsgs((m) => [...m, { id, from: "bot", text, chips }]);
  };
  const pushUser = (text: string) => {
    const id = idRef.current++;
    setMsgs((m) => [...m, { id, from: "user", text }]);
  };

  // Greet once per page load + focus the input when the panel opens.
  useEffect(() => {
    if (!open) return;
    if (!greetedRef.current) {
      greetedRef.current = true;
      pushBot(GREETING, GREET_CHIPS);
    }
    const t = window.setTimeout(() => inputRef.current?.focus(), 350);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open ]);

  // Keep the latest message in view.
  useEffect(() => {
    const el = msgsRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing]);

  // Escape closes; clicking outside closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDoc);
    };
  }, [open ]);

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

  const captureLead = async (email: string) => {
    setBusy(true);
    setTyping(true);
    try {
      const token = await getToken();
      const res = await fetch(`${AXON_API}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "Chatbot visitor",
          email,
          message: "Requested follow-up via site chatbot",
          source: "chatbot",
          recaptchaToken: token,
        }),
      });
      const j = await res.json().catch(() => null);
      pushBot(res.ok && j && j.ok === true ? LEAD_DONE : LEAD_FAIL);
    } catch {
      pushBot(LEAD_FAIL);
    } finally {
      leadDoneRef.current = true;
      leadAskedRef.current = false;
      setTyping(false);
      setBusy(false);
    }
  };

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;
    pushUser(text);
    setInput("");
    // Lead-capture path: they answered the follow-up ask with an email.
    if (
      leadAskedRef.current &&
      !leadDoneRef.current &&
      EMAIL_RE.test(text)
    ) {
      void captureLead(text);
      return;
    }
    setBusy(true);
    setTyping(true);
    window.setTimeout(() => {
      pushBot(brain(text));
      exchangesRef.current += 1;
      setTyping(false);
      setBusy(false);
      // After 3 exchanges, ask once for an email (never again this session).
      if (
        exchangesRef.current >= 3 &&
        !leadAskedRef.current &&
        !leadDoneRef.current
      ) {
        window.setTimeout(() => {
          pushBot(LEAD_ASK);
          leadAskedRef.current = true;
        }, 900);
      }
    }, 600);
  };

  const toggle = (e: ReactMouseEvent) => {
    e.stopPropagation();
    const n = !open;
    setOpen(n);
    try {
      sessionStorage.setItem("cb-open", n ? "1" : "0");
    } catch {
      /* storage unavailable — ignore */
    }
  };

  return (
    <div ref={wrapRef} className={`cb-wrap${open ? " open" : ""}`}>
      <div
        className="cb-panel"
        role="dialog"
        aria-label="Chat with Aravind's assistant"
        aria-hidden={open ? undefined : true}
      >
        <div className="cb-head">
          <span className="cb-dot" aria-hidden="true" />
          <div>
            <span className="cb-title">Ask Aravind&apos;s assistant</span>
            <span className="cb-sub">Typically replies instantly</span>
          </div>
          <button
            className="cb-close"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <div
          className="cb-msgs"
          ref={msgsRef}
          aria-live="polite"
          aria-label="Chat messages"
        >
          {msgs.map((m) => (
            <div key={m.id}>
              <div
                className={`cb-msg ${m.from}`}
                dangerouslySetInnerHTML={{
                  __html: m.from === "bot" ? md(m.text) : escapeHtml(m.text),
                }}
              />
              {m.from === "bot" && m.chips && (
                <div className="cb-chips">
                  {m.chips.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className="cb-chip"
                      onClick={() => send(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="cb-msg bot" aria-label="Assistant is typing">
              <span className="cb-typing" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
          )}
        </div>
        <form
          className="cb-input"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about services, pricing…"
            aria-label="Type your message"
            autoComplete="off"
          />
          <button
            className="cb-send"
            type="submit"
            aria-label="Send message"
            disabled={busy || !input.trim()}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4z" />
            </svg>
          </button>
        </form>
      </div>
      <button
        className="cb-fab"
        aria-label={open ? "Close chat" : "Open chat with Aravind's assistant"}
        aria-expanded={open}
        onClick={toggle}
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 9h8M8 12h5" />
          </svg>
        )}
      </button>
    </div>
  );
}
