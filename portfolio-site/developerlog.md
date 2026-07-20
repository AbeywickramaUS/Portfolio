# Developer Log — Portfolio Site

> A chronological record of every update made to this portfolio project.
> Use this log to track changes, understand decisions, and roll back if a new feature breaks things.

---

## How to Roll Back

Since the project uses Git, you can roll back to any point using:

```bash
# View all commits
git log --oneline

# Roll back to a specific commit (keeps changes as unstaged)
git reset <commit-hash>

# Hard roll back (discards all changes after that commit — use with caution)
git reset --hard <commit-hash>

# Undo only the last commit (keeps files intact)
git reset --soft HEAD~1
```

> **Tip:** Commit after each update below so each entry has a matching Git hash you can revert to.

---

## Change Log

### v1.0.0 — Initial Portfolio Launch
- **Date:** 2026-07-01
- **Commit:** `78038ef`
- **Description:** Built and deployed the full portfolio site from scratch.
- **Tech Stack:** Next.js 15, Tailwind CSS v4, Framer Motion, TypeScript
- **Files Created:**
  - `app/layout.tsx` — Root layout with Inter + Space Grotesk fonts, SEO metadata
  - `app/page.tsx` — Main page composing all sections
  - `app/globals.css` — Design tokens (dark neon theme), glassmorphism, neumorphism, glow effects
  - `components/AnimatedBackground.tsx` — Canvas particle background
  - `components/Navbar.tsx` — Fixed navbar with scroll-spy and mobile menu
  - `components/HeroSection.tsx` — Hero with profile image, tagline, social links
  - `components/AboutSection.tsx` — Bio card with portrait and quick stats
  - `components/SkillsGrid.tsx` — Skills organized by category
  - `components/ProjectBento.tsx` — Bento grid project showcase
  - `components/ExperienceSection.tsx` — Timeline for work experience & education
  - `components/ContactPanel.tsx` — Contact links + resume download
  - `components/Footer.tsx` — Copyright footer
  - `components/GlassCard.tsx` — Reusable glassmorphism card
  - `components/NeumorphicChip.tsx` — Reusable neumorphic chip
  - `next.config.ts` — Image optimization config (WebP/AVIF)

---

### v1.1.0 — Profile Photo Added
- **Date:** 2026-07-01
- **Description:** Replaced the SVG placeholder with the real JPEG profile photo.
- **Files Modified:**
  - `components/HeroSection.tsx` — Changed `src` from `/assets/profile/umesha-portrait.svg` → `/assets/profile/profile photo.jpeg`
  - `components/AboutSection.tsx` — Same image source change
- **Rollback:** Revert both `src` values back to `/assets/profile/umesha-portrait.svg`

---

### v1.1.1 — LinkedIn URL Corrected
- **Date:** 2026-07-01
- **Description:** Fixed the LinkedIn URL across all components to the correct profile.
- **Files Modified:**
  - `components/HeroSection.tsx` (line ~91) — `href` updated to `https://www.linkedin.com/in/umesha-abeywickrama-759333218/`
  - `components/ContactPanel.tsx` (line ~55) — `href` updated to the same URL
  - `components/ContactPanel.tsx` (line ~67) — Display text updated to `linkedin.com/in/umesha-abeywickrama`
- **Rollback:** Revert the three `href` / text values back to the old URL

---

### v1.1.2 — Removed Antigravity AI Project
- **Date:** 2026-07-01
- **Description:** Removed the "Antigravity AI" project from the Featured Projects bento grid since it was not personally developed.
- **Files Modified:**
  - `components/ProjectBento.tsx` — Deleted the Antigravity AI entry object from the `projects` array
- **Rollback:** Re-add the following entry to the `projects` array after the Moodmate entry:
  ```ts
  {
    title: "Antigravity AI",
    description: "A system-design project focused on spatial tracking customized for monitoring a meeting room, mapping presence and movement within the space.",
    tech: ["Python", "Computer Vision", "Spatial Tracking"],
    image: "/assets/projects/antigravity-ai/01-architecture.png",
    imageAlt: "Antigravity AI spatial tracking dashboard",
    span: "md:col-span-1",
  },
  ```

---

### v1.1.3 — Resume Download Fixed
- **Date:** 2026-07-01
- **Description:** The "Download Resume" button was downloading an unknown/unnamed file. Fixed by replacing `<motion.a>` with a standard `<a>` tag and adding explicit `download` filename and `type` attributes.
- **Root Cause:** Framer Motion's `<motion.a>` was not properly forwarding the `download` attribute to the DOM.
- **Files Modified:**
  - `components/ContactPanel.tsx` (lines ~93–114):
    - Changed `<motion.a>` → `<a>`
    - Added `download="Umesha_Abeywickrama_CV.pdf"`
    - Added `type="application/pdf"`
    - Replaced Framer Motion hover/tap animations with CSS `hover:scale-105 active:scale-95`
- **Rollback:** Revert `<a>` back to `<motion.a>` with `whileHover` and `whileTap` props, and remove `type` attribute

---

### v1.2.0 — Blog Section (Added & Removed)
- **Date:** 2026-07-01
- **Description:** A Dev Blog section was created with timeline layout, expandable glass cards, and color-coded tags. It was subsequently removed per user preference.
- **Files Created (then deleted):**
  - `components/BlogSection.tsx` — Timeline blog component
  - `components/blogData.ts` — Blog entry data
- **Files Modified (then reverted):**
  - `app/page.tsx` — BlogSection import and render (reverted)
  - `components/Navbar.tsx` — Blog nav link (reverted)
- **Status:** ❌ Removed — no traces remain in codebase
- **Rollback:** N/A (already removed)

---

### v1.3.0 — Glass Gallery Section Added
- **Date:** 2026-07-01
- **Description:** Added a glass-themed gallery/portfolio viewer section with filterable grid, hover overlays, and a full-screen lightbox modal.
- **Features:**
  - Category filter tabs (All / Mobile App / Web App)
  - Glass cards with image hover zoom + overlay
  - Click-to-expand lightbox with spring animation
  - Fully responsive grid (1→2→3 columns)
  - Easy to extend — just add entries to the `galleryItems` array
- **Files Created:**
  - `components/GlassGallery.tsx` — Gallery component with lightbox
- **Files Modified:**
  - `app/page.tsx` — Added `<GlassGallery />` between Projects and Experience
  - `components/Navbar.tsx` — Added "Gallery" nav link
- **Rollback:** Remove `GlassGallery` import/render from `page.tsx`, remove nav link from `Navbar.tsx`, delete `GlassGallery.tsx`

---

### v1.4.0 — Custom Developer-Themed Cursors
- **Date:** 2026-07-20
- **Description:** Replaced the default browser cursor with custom SVG cursors that match the dark neon theme. The default cursor is an arrow with a `</>` code-bracket accent and neon cyan glow. Interactive elements (links, buttons) use a neon-gradient hand pointer.
- **Features:**
  - Default cursor: Arrow pointer with `</>` code accent and cyan glow border
  - Pointer cursor: Hand icon with neon cyan-to-violet gradient stroke and glow
  - Applied globally via CSS `cursor` property with SVG `url()` references
  - Covers all interactive elements: `a`, `button`, `[role="button"]`, `select`, `label[for]`, `input[type="submit"]`, `input[type="button"]`
- **Files Created:**
  - `public/assets/cursors/cursor-default.svg` — Default arrow cursor with code bracket accent
  - `public/assets/cursors/cursor-pointer.svg` — Hand pointer cursor with neon gradient
- **Files Modified:**
  - `app/globals.css` — Added `cursor` rule on `body` and a new `/* Custom Cursors */` block for interactive elements
- **Rollback:** Remove the `cursor:` line from `body`, delete the `/* Custom Cursors */` CSS block, and delete the `public/assets/cursors/` directory

---

### v1.5.0 — 3D Scroll-Driven Tunnel Background
- **Date:** 2026-07-20
- **Description:** Replaced the flat 2D particle canvas with a 3D starfield tunnel that responds to scroll. The mouse wheel acts as forward momentum, flying the camera through a neon wireframe corridor filled with stars and floating code symbols.
- **Features:**
  - 500 3D-positioned stars (250 on mobile) with perspective projection
  - Wireframe tunnel corridor rings receding into the distance (neon cyan)
  - Floating code glyphs (`</>`, `{ }`, `()`, `=>`, `fn`, `&&`, `++`, `::`) in 3D space
  - Scroll-driven camera Z advancement (scroll = fly forward)
  - Mouse parallax camera tilt for immersion
  - Auto-drift so the tunnel stays alive even without scrolling
  - Star streak effect for nearby stars (hyperspace/warp look)
  - Depth fog and vignette for cinematic feel
  - All objects recycle when they pass behind the camera (performance)
  - `prefers-reduced-motion` fallback preserved (static gradient)
- **Files Modified:**
  - `components/AnimatedBackground.tsx` — Complete rewrite: 2D particles → 3D tunnel renderer with stars, rings, glyphs, scroll binding, and mouse parallax
- **Files Unchanged:**
  - `app/page.tsx`, `app/globals.css`, `components/Navbar.tsx`, all section components — no changes needed
- **Rollback:** Revert `AnimatedBackground.tsx` to the previous 2D particle version (see git history)

---

### v1.5.1 — Dev Symbols Refinement
- **Date:** 2026-07-20
- **Description:** Replaced the floating text-based code glyphs (`</>`, `{ }`, etc.) with small wireframe geometric shapes that evoke software development without interfering with content readability. Reduced count from 18 to 14 and lowered opacity for subtlety.
- **Shapes:** Hexagons (modules), gears (settings), diamonds, triangles, terminal windows, network nodes, angle brackets, and circuit traces
- **Files Modified:**
  - `components/AnimatedBackground.tsx` — Replaced `text`-based glyph type with `shape` enum; added 8 canvas shape-drawing functions; reduced glyph size (3–6px base, ×35 projection), count (14), and opacity (max 0.35)

---

### v1.6.0 — Scroll-to-Top Button
- **Date:** 2026-07-20
- **Description:** Added a floating "scroll to top" button that appears after scrolling 400px. Glass-styled circle with a neon cyan upward arrow, with Framer Motion fade/scale animation on enter/exit.
- **Files Created:**
  - `components/ScrollToTop.tsx` — Floating button component with scroll listener and smooth scroll-to-top
- **Files Modified:**
  - `app/page.tsx` — Imported and rendered `<ScrollToTop />` after `<Footer />`
- **Rollback:** Remove `ScrollToTop` import/render from `page.tsx`, delete `ScrollToTop.tsx`

---

## Current File Structure

```
portfolio-site/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Design tokens & utility classes
│   ├── layout.tsx           # Root layout, fonts, SEO metadata
│   └── page.tsx             # Main page (all sections)
├── components/
│   ├── AboutSection.tsx     # About me + portrait + stats
│   ├── AnimatedBackground.tsx # 3D scroll-driven tunnel background
│   ├── ContactPanel.tsx     # Contact links + resume download
│   ├── ExperienceSection.tsx # Work & education timeline
│   ├── Footer.tsx           # Copyright footer
│   ├── GlassCard.tsx        # Reusable glass card
│   ├── GlassGallery.tsx     # Glass-themed gallery with lightbox
│   ├── HeroSection.tsx      # Hero banner + social links
│   ├── Navbar.tsx           # Fixed nav with scroll-spy
│   ├── NeumorphicChip.tsx   # Reusable neumorphic chip
│   ├── ProjectBento.tsx     # Bento grid project showcase
│   ├── ScrollToTop.tsx      # Floating scroll-to-top button
│   └── SkillsGrid.tsx       # Skills by category
├── public/
│   └── assets/
│       ├── cursors/
│       │   ├── cursor-default.svg   # Custom default cursor (arrow + </> accent)
│       │   └── cursor-pointer.svg   # Custom pointer cursor (neon hand)
│       ├── profile/
│       │   ├── profile photo.jpeg
│       │   └── umesha-portrait.svg
│       └── Umesha_Abeywickrama_CV.pdf
├── next.config.ts
├── package.json
├── tsconfig.json
└── developerlog.md          # ← This file
```

---

*Last updated: 2026-07-20*

