# Aravind Mutte — Portfolio Web App

A production portfolio **web application** for Aravind Mutte, Cloud DevOps & Site Reliability Engineer based in Hyderabad, India. Built with Next.js 15, TypeScript, Tailwind CSS, and IBM Carbon — statically exported and deployed on Vercel.

**Live:** https://aravind-portfolio-next.vercel.app

---

## Is this a web app?

Yes. While it reads like a classic portfolio *site*, it is built and behaves as a **web application**:

- **App architecture** — Next.js App Router with six routed pages (`/`, `/services`, `/experience`, `/skills`, `/about`, `/contact`), each composed from modular, reusable section components (`components/sections/`).
- **Component system** — IBM Carbon design-system components (`Tile`, `Tag`, `Accordion`, `ClickableTile`) restyled to a custom navy/gold theme, plus bespoke interactive components (animated counters, reveal-on-scroll, logo marquee ticker, tilt cards, floating contact widget, scroll progress).
- **Live data flow** — the contact form is a real application workflow: it fetches a reCAPTCHA Enterprise token, POSTs the enquiry to a backend API (Axon lead-capture API on GCP Cloud Run), which validates the token and persists the lead to Supabase (Postgres). In parallel it sends an instant email notification via FormSubmit and opens WhatsApp with the enquiry pre-filled.
- **Client-side interactivity** — mobile navigation, products mega-menu, form validation and state, animated pipeline diagrams — all running as a React SPA in the browser.

It is statically exported (`output: "export"`) so it deploys as fast, cacheable static files — but the codebase, component model, and data integrations make it a web app, not a set of hand-written HTML pages.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS (`app/globals.css`) |
| Design system | IBM Carbon (`@carbon/react`) — Tiles, Tags, Accordions, Clickable Tiles |
| Fonts | Fraunces (display serif) + Inter (body), via `next/font` |
| Backend | Axon lead-capture API — GCP Cloud Run (TypeScript, Zod validation) |
| Database | Supabase (Postgres, `leads` table) |
| Bot protection | reCAPTCHA Enterprise (`lead_submit` action) |
| Email notify | FormSubmit (free relay) |
| Messaging | WhatsApp deep-link handoff (prefilled, visitor taps send) |
| Hosting | Vercel (production) |

---

## Pages

| Route | Content |
|---|---|
| `/` | Hero, tech ticker, stats, "What I do" (freelance vs full-time), 18-tech showcase, "How I work" pipeline band, CTA |
| `/services` | Cloud architecture & migration, CI/CD pipelines, Kubernetes & containers, DevOps consulting |
| `/experience` | Open timeline cards: Independent Cloud Builder (2023–present), Infosys Systems Engineer, HCLTech Junior Developer, PragmaEdge Infrastructure Engineer |
| `/skills` | 10 categorized panels (cloud, IaC, CI/CD, languages, web stack…) with official tech logos |
| `/about` | Profile, education (Rivier University, JNTUH), certifications, achievements, projects, socials |
| `/contact` | Contact methods + working enquiry form (Supabase + email + WhatsApp) |

---

## Design

- **Theme:** navy `#1B2F4B` + gold `#C9A227` on warm paper `#FAFAF7` — a classy, professional business look.
- **Go-signals:** green `#16a34a`/`#22c55e` for availability and hire CTAs.
- **Brand rule:** every third-party logo (tech, companies, universities, social) is the **original official artwork in official colors** — never recolored, filtered, or tinted. Logos on dark surfaces sit on white tiles; the artwork itself is never altered.
- **Responsive:** mobile / tablet / desktop breakpoints throughout.

---

## Contact form data flow

```
Visitor fills form
  → reCAPTCHA Enterprise token (action: lead_submit)
  → POST https://axon-api-246396716039.us-central1.run.app/api/leads
      { fullName, email, phone?, message, source: "portfolio", recaptchaToken }
  → API validates token → inserts into Supabase `leads` table
  ∥  FormSubmit email to mutthe.aravind@gmail.com (instant notify)
  → WhatsApp opens with enquiry pre-filled (visitor taps Send)
```

`source: "portfolio"` distinguishes these leads from other Axon sources.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

No environment variables are required to build or run the frontend — the reCAPTCHA site key and API URL are public client-side values.

---

## Deployment

Pushing to `main` triggers Vercel's auto-deploy. **Note:** the production alias (`aravind-portfolio-next.vercel.app`) stays pinned to the deployment it was manually assigned to — after an auto-deploy, move the alias to the new deployment via the Vercel API and verify the live CSS reflects the change.

---

## Repository

Private. Built from the static portfolio at [aravindmutthe.github.io/aravind-mutte](https://aravindmutthe.github.io/aravind-mutte/) — same content, rebuilt as a Next.js web app.

© 2026 Aravind Mutte · Hyderabad, India
