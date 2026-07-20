---
title: "Umesha Shehani Abeywickrama | IT Undergraduate & Full-Stack Developer"
description: "Portfolio of Umesha Shehani Abeywickrama. BSc (Hons) Information Technology undergraduate at SLIIT. Full-stack, mobile, and AI project builder."
author: "Umesha Shehani Abeywickrama"
theme: "dark-neon"
deploy: "vercel"
---

# Umesha Shehani Abeywickrama

> BSc (Hons) Information Technology undergraduate at SLIIT. I build full-stack web platforms, cross-platform mobile apps, and AI-assisted products.

[Email](mailto:umeshashehani23@gmail.com) · [LinkedIn](https://www.linkedin.com/in/Umesha) · [GitHub](https://github.com/AbeywickramaUS)

---

## Design System (Build Specification)

This portfolio is built around a **dark, neon, motion-rich** identity. The notes below are implementation guidance for the developer or AI agent rendering this content into a live site.

### Color Tokens (Dark Theme + Neon Accents)

Use semantic tokens, not raw hex inside components. All foreground and background pairs are checked against WCAG AA (4.5:1 for body text).

| Token | Value | Role |
|---|---|---|
| `--bg-base` | `#0A0A0F` | Page background (near-black, faint blue cast) |
| `--bg-surface` | `#14141F` | Cards, panels, glass layers |
| `--bg-elevated` | `#1C1C2B` | Raised neumorphic elements |
| `--text-primary` | `#EDEDF2` | Headings and body (high contrast) |
| `--text-secondary` | `#A1A1B5` | Captions, meta, helper text |
| `--neon-cyan` | `#2DE2E6` | Primary accent, links, key CTAs, glows |
| `--neon-violet` | `#A855F7` | Secondary accent, gradients, borders |
| `--neon-magenta` | `#FF2E97` | Tertiary accent, used sparingly for highlights |
| `--neon-grad` | `linear-gradient(120deg, #2DE2E6, #A855F7)` | Hero text, buttons, accent strokes |

Accessibility note: neon cyan and the primary text pass contrast on the dark base. Neon violet and magenta are reserved for borders, glows, gradients, and large display text only, never for small body copy.

### Visual Styles

- **Glassmorphism**: apply to the navigation bar, project cards, and the contact panel. Use a translucent surface (`background: rgba(20,20,31,0.55)`), `backdrop-filter: blur(16px)`, a 1px gradient border, and a soft neon outer glow. Keep blur purposeful (sits over the animated background), not purely decorative.
- **Neumorphism**: apply to the skill chips, IDE badges, and the resume download button. Use the elevated surface with dual soft shadows (one dark, one subtle light) to create a tactile, pressed-or-raised feel. Keep contrast high enough that text stays readable on the dark base.
- **Bento grid**: lay out the Featured Projects section as an asymmetric bento grid so screenshots dominate the composition.

### Background Animation (Profession-Based)

A subtle, professional, tech-themed animated background that sits behind all content:

1. An animated **neon particle network** (nodes connected by thin lines) drifting slowly, with cyan and violet nodes.
2. A slow-moving **gradient mesh** glow in the corners that breathes between cyan and violet.
3. Optional faint **grid / circuit lines** for a developer feel.

Performance and accessibility: render on a single canvas, cap to roughly 60 nodes on desktop and fewer on mobile, keep per-frame work light, and fully respect `prefers-reduced-motion` by freezing the animation to a static gradient when requested.

### Motion Guidelines

- Micro-interactions: 150 to 300ms, ease-out on enter, ease-in on exit.
- Project cards: subtle scale (1.02) and intensified neon glow on hover or tap.
- Section reveals: staggered fade-and-rise on scroll, 30 to 50ms per item.
- Never block input during animation, and keep all motion interruptible.

### Typography

- Headings: a geometric or grotesk display face (for example Space Grotesk or Sora).
- Body: a clean, highly legible sans (for example Inter).
- Base body size 16px, line-height 1.6, type scale 12 / 14 / 16 / 18 / 24 / 32 / 48.

---

## About

A responsible, straightforward, and dedicated undergraduate seeking an internship in Information Technology. I treat challenges as opportunities and believe in working smart to get things done.

I am currently pursuing a **BSc (Hons) in Information Technology** at the **Sri Lanka Institute of Information Technology (SLIIT)**, from May 2021 to present. My work spans full-stack web development, cross-platform mobile apps, and AI-assisted product design.

> Design note: render this as a glassmorphic panel beside the portrait image.
> `![Portrait of Umesha Shehani Abeywickrama](./assets/profile/umesha-portrait.jpg)`
>
> Profile photo source: user-provided photo (saved to `public/assets/profile/umesha-portrait.jpg`)

---

## Technical Skills

My stack combines hands-on engineering languages with a structured UI/UX design intelligence layer (skill domains merged from the `ui-ux-pro-max` design system).

### Languages

`C` · `C++` · `Python` · `Java` · `HTML` · `CSS` · `PHP` · `SQL` · `TypeScript` · `Dart`

### Frameworks & Runtimes

`React JS` · `React Native` · `Node.js` · `Flutter` · `Express` · `MongoDB (MERN)`

### UI/UX Design Intelligence

A working command of modern design practice, applied across web and mobile:

- **Visual styles**: glassmorphism, neumorphism, minimalism, bento grid, flat design, and dark mode systems.
- **Accessibility**: WCAG contrast (4.5:1), focus states, keyboard navigation, ARIA and screen-reader labels, reduced-motion support.
- **Touch & interaction**: 44x44 minimum touch targets, press and haptic feedback, gesture-safe layouts.
- **Performance**: image optimization (WebP / AVIF), lazy loading, layout-shift control (CLS), bundle splitting.
- **Layout & responsive**: mobile-first breakpoints, 4 / 8px spacing scale, fluid containers.
- **Typography & color systems**: semantic color tokens, type scales, font pairing, light and dark variants designed together.
- **Animation**: purposeful 150 to 300ms motion, spring physics, staggered reveals, shared-element transitions.
- **Forms & feedback**: visible labels, inline validation, empty states, clear submit feedback.

### Databases

`MongoDB` · `MySQL` · `SQL`

### Tools & Development Environments

- **Google Antigravity IDE** (primary development environment): my main workspace for AI-assisted, agentic full-stack development.
- Visual Studio Code, Git and GitHub, Postman, Figma.

> Design note: render the languages, frameworks, and tool entries as neumorphic chips. Give the **Google Antigravity** badge a distinct neon-cyan glow so it reads as the primary IDE.

---

## Featured Projects

> Layout note: present this section as a bento grid. Every project card leads with a large screenshot placeholder so the section reads as a visual "show and tell", not a wall of text. Each card is glassmorphic with a neon hover glow.

### Moodmate

A context-aware **Flutter** mobile app powered by **explainable AI**. Moodmate reads user context and gives transparent, reasoned suggestions rather than opaque recommendations. The experience centers on a deeply **customized user-preference UI**, including a dedicated **allergy-adding text box** that lets users enter and manage allergy information that the model factors into its suggestions.

**Technologies Used:** Flutter, Dart, Explainable AI (XAI), REST APIs

**UI Screenshots:**
- `![Moodmate home and mood context screen](./assets/projects/moodmate/01-home.png)`
- `![Moodmate customized preference UI with allergy text box](./assets/projects/moodmate/02-preferences-allergy.png)`
- `![Moodmate explainable AI suggestion view](./assets/projects/moodmate/03-xai-explanation.png)`

---

### Antigravity AI

A system-design project focused on **spatial tracking**. The standout feature is spatial tracking **customized for monitoring a meeting room**, mapping presence and movement within the space to drive smart room awareness.

**Technologies Used:** Python, Computer Vision, Spatial Tracking, System Design

**UI Screenshots:**
- `![Antigravity AI system architecture diagram](./assets/projects/antigravity-ai/01-architecture.png)`
- `![Antigravity AI meeting room spatial tracking view](./assets/projects/antigravity-ai/02-room-tracking.png)`

---

### AquaVet

A **cross-platform React Native** application backed by a **robust Python backend**, built to **diagnose fish diseases** and **manage aquarium environments**. AquaVet pairs an accessible mobile front end with a server-side diagnostic engine, giving aquarium owners actionable health and environment guidance.

**Technologies Used:** React Native, Python, REST APIs, Cross-Platform Mobile

**UI Screenshots:**
- `![AquaVet diagnosis flow](./assets/projects/aquavet/01-diagnosis.png)`
- `![AquaVet aquarium environment dashboard](./assets/projects/aquavet/02-environment-dashboard.png)`

---

### Online Tourism Management System

A full-stack **MERN** platform for tourism management, with emphasis on **backend optimization** and **secure user authentication**. Built for reliable booking and management workflows.

**Technologies Used:** MongoDB, Express, React, Node.js, JWT Authentication

**UI Screenshots:**
- `![Tourism platform landing and search](./assets/projects/tourism/01-landing.png)`
- `![Tourism platform booking management dashboard](./assets/projects/tourism/02-dashboard.png)`

---

### E-Commerce Platforms (Meal Dish Shop & Bookwarm)

Full-stack e-commerce builds on **MERN** and **Java**, focused on **backend optimization** and **secure user authentication**. Meal Dish Shop handles food ordering, and Bookwarm is an online bookstore, both with hardened auth and efficient server-side logic.

**Technologies Used:** MongoDB, Express, React, Node.js, Java, Secure Authentication

**UI Screenshots:**
- `![Meal Dish Shop storefront](./assets/projects/ecommerce/01-meal-dish-shop.png)`
- `![Bookwarm bookstore catalog](./assets/projects/ecommerce/02-bookwarm.png)`
- `![Cart and secure checkout flow](./assets/projects/ecommerce/03-checkout.png)`

---

## Professional Experience

### Software Engineer
**Gamage Recruiters (Pvt) Ltd, Panadura** (2024 to 2025)

- Developed and optimized backend systems using the **MERN** stack, directly contributing to core platform functionality.
- Maintained strict code quality and took part in code reviews.
- Debugged and resolved software issues efficiently to keep the platform stable.

---

## Education

### BSc (Hons) in Information Technology
**Sri Lanka Institute of Information Technology (SLIIT)** (May 2021 to present)

---

## Contact

I am open to internship opportunities in Information Technology.

- **Email:** [umeshashehani23@gmail.com](mailto:umeshashehani23@gmail.com)
- **LinkedIn:** [linkedin.com/in/Umesha](https://www.linkedin.com/in/Umesha)

> Design note: render contact as a glassmorphic panel with neon-cyan icon buttons and a neumorphic "Download Resume" button.
>
> Resume file: `Umesha_Abeywickrama_CV.pdf` (copy to `public/assets/Umesha_Abeywickrama_CV.pdf`)

---

## Deployment (Vercel)

This file is the content source for a Vercel-hosted portfolio. Recommended path:

1. Scaffold a **Next.js** app (App Router) styled with **Tailwind CSS** and animated with **Framer Motion**.
2. Render this Markdown through MDX, or map each section to a React component.
3. Place all screenshots under `public/assets/...` matching the paths above.
4. Push to GitHub and import the repo into Vercel. Vercel auto-detects Next.js and deploys on every push.
5. Add a `vercel.json` only if custom routing or headers are needed.

> Replace every `./assets/...` image placeholder with real screenshots before launch, and confirm the exact LinkedIn URL slug.
