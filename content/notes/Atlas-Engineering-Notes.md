# Atlas Notes — Engineering Notes from the Atlas

These are the practical engineering notes that sit behind the curriculum. They are dated summaries, not a repository snapshot or a verified code audit.

## Design systems: Carbon dashboard migration

- Transform a dashboard to the IBM Carbon Design System while preserving responsiveness, data logic, sorting, click handlers, navigation, branding and tables.
- Use Carbon Grid, DataTable, Button, Link, Tile and Loading components, with Carbon typography and footer.
- Edit layout, global styles and dashboard page together. Editing only the dashboard page was explicitly rejected in the original request, because layout and styles carry the system.
- Watch for duplicate Carbon CSS, fragile table cell lookups and grid spacing. An audit in the recovered notes flagged exactly those risks, with no build or test evidence recovered to confirm a fix.
- Presentation layer only: existing products, news and learning data were supplied by the backend. No new database, authentication or AI work was required for this migration.

## Monorepo and Git workflows

- Monorepo packages: api, common, simulator, tidal, web.
- Upstream and personal fork model, with develop and feature branches. A typical flow in the notes: fetch upstream, check out develop, pull upstream develop, then branch for a feature.
- Build order matters: install dependencies, build the common package, then run the web dev server.
- Recorded runtime in the notes: Node 22, Yarn 1, with a missing React dependency and duplicate port flags observed at the time. These are reconstructed commands from summaries, not a verified repository state.
- Design-to-code: Figma images and exported CSS and React code were used with an AI editor to implement across multiple files at once, with a request to keep layout, styles and page in sync.

## Billing and API contracts

- Pricing toggle: monthly versus yearly billing, frontend state, API interval month or year, display per month or per year.
- Related work items in the same project: subscription thank-you page and downloads page.
- The lesson the Atlas preserves is about contracts, not just UI: the frontend toggle, the API interval parameter and the price IDs must agree, or the toggle will load the wrong price. Acceptance tests were mentioned in the recovered notes, but no test evidence was recovered.

## Linux and secure remote access

- SSH is the client command. sshd is the remote server daemon.
- SSH commonly runs over TCP port 22, with encrypted authentication and transport.
- Concepts in the notes: pseudo-terminals, port forwarding, and running a command without a shell session.
- Kernel-level networking in the Atlas connects to: TCP/IP, storage and disk networks, government communication paths, and telegraph-to-modern communication systems as a historical frame, not as a claim about any private network.

## Web engineering roadmap

The roadmap recorded in September 2025, in order:

- HTML, CSS and JavaScript, then React, Next.js and Tailwind.
- Node APIs, databases and Prisma, Git and GitHub and Jira.
- CI and CD, deployment, and Figma and design-to-code.

This roadmap is useful as a learning sequence. It is not a claim about any employer, role or verified employment history, and the Atlas itself says career-profile claims in the recovered drafts are not accepted as verified employment facts.

## AI agents interface, as an engineering note

- A React and Tailwind agent interface component: navigation, hero, features, use cases, call to action, footer.
- The recovered bug was mundane and instructive: extra closing tags in the footer broke JSX compilation, and balancing the footer structure fixed it.
- The engineering lesson is not about AI agents in the abstract. It is about component composition: a large page component fails in exactly the place where its structure is hardest to see, the footer.

## What is deliberately not in these notes

- No private employment communication, no offer-letter details, no contact names from onboarding emails.
- No company-formation, immigration or visa material, which the Atlas inclusion criteria exclude from this public set.
- No repository snapshot, no Figma assets, no source images or code that were not recovered.
