# Antigravity Build Prompt (Claude Opus)

Paste the block below into Google Antigravity. It is written as an agentic, end-to-end build instruction with a clear role, constraints, design system, project data, and acceptance criteria.

---

## ROLE

You are a senior frontend engineer, UI/UX designer, and technical copywriter. You build production-grade, accessible, visually striking personal portfolio sites and deploy them to Vercel.

## OBJECTIVE

Build and structure a complete, deployable personal portfolio website for **Umesha Shehani Abeywickrama** from the content and design system provided below. Output real, runnable project files, not a description.

## SKILL TO INVOKE

Use the **ui-ux-pro-max** design-intelligence skill throughout. Apply its priority order: Accessibility and Touch first, then Performance, Style Selection, Layout, Typography and Color, Animation, and Forms. Treat its rules as hard constraints, not suggestions.

## TECH STACK (REQUIRED)

- Next.js (App Router) + TypeScript
- Tailwind CSS for styling with semantic design tokens (no raw hex in components)
- Framer Motion for animation
- MDX or component-mapped sections for content
- Optimized for Vercel zero-config deployment

## DESIGN SYSTEM (NON-NEGOTIABLE)

Theme: dark, neon, motion-rich, professional.

Color tokens:
- `--bg-base: #0A0A0F`, `--bg-surface: #14141F`, `--bg-elevated: #1C1C2B`
- `--text-primary: #EDEDF2`, `--text-secondary: #A1A1B5`
- `--neon-cyan: #2DE2E6` (primary), `--neon-violet: #A855F7` (secondary), `--neon-magenta: #FF2E97` (sparing accent)
- accent gradient: `linear-gradient(120deg, #2DE2E6, #A855F7)`

Color rules:
- All body text and background pairs must pass WCAG AA (4.5:1). Verify with a contrast check.
- Cyan and primary text are the only colors allowed for small text. Violet and magenta are restricted to gradients, borders, glows, and large display headings.

Visual styles (apply exactly where named):
- Glassmorphism: navbar, project cards, contact panel. Translucent surface, `backdrop-filter: blur(16px)`, 1px gradient border, soft neon outer glow. Blur must be purposeful over the animated background.
- Neumorphism: skill chips, IDE badges, resume button. Dual soft shadows on the elevated surface, with readable contrast.
- Bento grid: the Featured Projects section, asymmetric, screenshot-dominant.

Background animation (profession-based, single canvas behind all content):
- A drifting neon particle network (cyan and violet nodes joined by thin lines).
- A slow breathing gradient-mesh glow in the corners.
- Optional faint circuit or grid lines for a developer feel.
- Cap node count (about 60 desktop, fewer on mobile), keep frames light, and FULLY honor `prefers-reduced-motion` by falling back to a static gradient.

Motion:
- 150 to 300ms micro-interactions, ease-out enter, ease-in exit.
- Project cards scale to 1.02 with intensified glow on hover or tap.
- Staggered scroll reveals at 30 to 50ms per item.
- All motion interruptible, never blocking input.

Typography:
- Headings: Space Grotesk or Sora. Body: Inter.
- Base 16px, line-height 1.6, scale 12 / 14 / 16 / 18 / 24 / 32 / 48.

## CONTENT

### Identity
- Name: Umesha Shehani Abeywickrama
- Status: BSc (Hons) Information Technology undergraduate at SLIIT (May 2021 to present)
- Bio: A responsible, straightforward, and dedicated undergraduate seeking an internship in Information Technology. Treats challenges as opportunities and believes in working smart to get things done.
- Email: umeshashehani23@gmail.com
- LinkedIn: https://www.linkedin.com/in/Umesha

### Skills (merge into a single skills section)
- Languages: C, C++, Python, Java, HTML, CSS, PHP, SQL, TypeScript, Dart
- Frameworks and runtimes: React JS, React Native, Node.js, Flutter, Express, MERN
- Databases: MongoDB, MySQL, SQL
- UI/UX design intelligence (from ui-ux-pro-max): glassmorphism, neumorphism, minimalism, bento grid, dark mode, accessibility and WCAG, responsive and mobile-first layout, semantic color and typography systems, purposeful animation, forms and feedback patterns.
- IDEs and tools: Google Antigravity IDE (PRIMARY, give it a distinct neon-cyan highlighted badge), VS Code, Git and GitHub, Postman, Figma.

### Featured Projects (each as a bento card leading with a screenshot placeholder, a brief technical description, and a Technologies Used line)
1. Moodmate: context-aware Flutter app powered by explainable AI. Highlight the customized user-preference UI and specifically the allergy-adding text box. Tech: Flutter, Dart, Explainable AI, REST APIs.
2. Antigravity AI: system design with spatial tracking, customized for monitoring a meeting room. Tech: Python, Computer Vision, Spatial Tracking, System Design.
3. AquaVet: cross-platform React Native app with a robust Python backend for diagnosing fish diseases and managing aquarium environments. Tech: React Native, Python, REST APIs.
4. Online Tourism Management System: full-stack MERN platform, focus on backend optimization and secure user authentication. Tech: MongoDB, Express, React, Node.js, JWT.
5. E-Commerce Platforms (Meal Dish Shop and Bookwarm): full-stack MERN and Java builds, focus on backend optimization and secure authentication. Tech: MERN, Java, Secure Authentication.

### Experience
- Software Engineer, Gamage Recruiters (Pvt) Ltd, Panadura (2024 to 2025). Developed and optimized MERN backend systems contributing to core platform functionality. Maintained code quality, joined code reviews, and debugged issues efficiently.

## IMAGE HANDLING

Use clearly labeled placeholder images under `public/assets/...` with descriptive alt text and reserved width and height (aspect-ratio) to prevent layout shift. Make every project screenshot a prominent visual focal point.

## DELIVERABLES

1. A complete Next.js project structure (app directory, components, lib, public assets).
2. A `globals.css` or theme file defining the color tokens above.
3. Reusable components: AnimatedBackground, GlassCard, NeumorphicChip, ProjectBento, SkillsGrid, ContactPanel, Navbar.
4. A README with local run and Vercel deploy steps.

## ACCEPTANCE CRITERIA (self-check before finishing)

- Lighthouse Accessibility and Best Practices both target 95+.
- All text and background pairs pass 4.5:1 contrast.
- `prefers-reduced-motion` disables the canvas animation.
- No raw hex inside components, tokens only.
- Project section is screenshot-led and reads as a visual showcase.
- Google Antigravity is visibly marked as the primary IDE.
- Builds clean with `next build` and deploys to Vercel with zero extra config.

Produce the files now.
