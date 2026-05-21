# PRC 13 Roofing: Frontend Implementation Plan

This document tracks all frontend-only improvements identified in the site review. Use the checklists to mark progress as you go.

**Scope:** UI, UX, content presentation, performance, accessibility, and frontend SEO (meta, JSON-LD). No backend/API work unless noted as optional wiring only.

**Legend**
- [ ] Not started
- [x] Done

---

## How to use this plan

1. Work **top to bottom by priority** (P0 to P4) unless a quick win is blocking something else.
2. Check off items when complete; add notes under a section if you defer or split work.
3. After each phase, smoke-test on **mobile + desktop** and run `npm run build` before deploy.

---

## Phase 0: Critical trust & conversion (P0)

**Goal:** Fix credibility gaps and intent routing before polish.

### P0.1 Credibility & social proof

- [x] Replace About page stock Pexels image with a real PRC 13 project photo (on-site preferred)
- [x] Add alt text and caption consistent with brand (“PRC 13 Roofing team member on a Sacramento roofing project”)
- [x] Add prominent **“Read our Google reviews”** link/button (opens Google Business Profile in new tab)
- [x] Place Google reviews link on: Home (reviews section), Footer, Contact, About
- [x] Align review attribution: either name + area or consistent “Sacramento homeowner” style
- [x] Remove or justify **“Verified Review”** badge (only if tied to real Google verification)

### P0.2 Intent routing

- [x] Update **Storm Damage** problem card to link to `/emergency-roof-repair` (not `/roof-repair`)
- [x] Audit other problem/service links for intent match (Leak → repair, Old roof → replacement, Metal → metal)

### P0.3 Hero form visibility (tablet / small laptop)

- [x] Below `lg`: show hero lead form **below CTAs** (stacked), not only `lg:absolute`
- [x] Verify form is visible without scroll on common tablet widths (768px to 1023px)
- [x] Confirm mobile bottom bar does not obscure hero form submit button

**Phase 0 exit criteria:** Real PRC 13 project photo live; Google link works; storm card correct; form visible on tablet.

- [x] Real PRC 13 project photo live
- [x] Google link works
- [x] Storm card correct
- [x] Form visible on tablet

---

## Phase 1: High-impact conversion & SEO basics (P1)

**Goal:** Extend homepage funnel patterns to service pages; fix discoverability and sharing metadata.

### P1.1 Service page hero forms

- [x] Add hero lead form to `ServicePageTemplate` (mirror Home: form right on `lg+`, stacked below on smaller)
- [x] Pass `sourcePage` per service route for lead attribution
- [x] Keep bottom `#cta` section; ensure anchor scroll still works with new hero layout
- [x] Spot-check: Roof Replacement, Emergency, Metal Roofing, Contact

### P1.2 Per-route titles & meta (SPA)

- [x] Add route-level `document.title` (or `react-helmet-async`) for every page
- [x] Add unique meta `description` per route (Home, each service, About, Contact, Gallery, Blog, Blog post)
- [x] Replace `index.html` default title (“High-Converting Website”) with production title
- [x] Replace OG/Twitter image (remove bolt.new default); use branded local photo
- [x] Set `og:title`, `og:description`, `og:url` per main routes where feasible

### P1.3 Favicon & brand assets

- [x] Replace `vite.svg` favicon with PRC 13 mark (ICO + PNG sizes)
- [x] Add `apple-touch-icon` in `index.html`
- [x] Export proper **white/light logo** asset (SVG preferred); remove CSS `filter: invert` on logo in Navbar + Footer

**Phase 1 exit criteria:** Service pages have hero forms; every route has sensible title; OG/favicon fixed; logo asset clean.

---

## Phase 2: Homepage structure & navigation (P2)

**Goal:** Reduce scroll fatigue; improve IA and wayfinding.

### P2.1 Homepage length & section consolidation

- [x] Merge **Service Areas + Google Map** into one “Local to Sacramento” section (or tabs)
- [x] Reduce homepage reviews grid from 6 to **3 cards** + link to Google reviews
- [x] Reduce blog preview from 3 to **2 posts** on home (full list on `/blog`)
- [x] Optional: add desktop **floating “Free Inspection”** CTA after scroll (does not duplicate mobile bottom bar awkwardly)

### P2.2 Navigation & IA

- [x] Add **Blog** (or “Resources”) to main desktop + mobile nav
- [x] Consider consolidating **Services + More** into one mega-menu OR promote Emergency + Replacement as top-level links
- [x] Add **active route styling** to nav links (current page highlight)
- [x] Add **breadcrumbs** to service pages: Home › Service Name

### P2.3 Emergency visibility

- [x] Add subtle **“Emergency leak?”** strip or link in nav/header context (links to `/emergency-roof-repair`)
- [x] Optional: show emergency strip on Home + Repair pages during storm season (static, no backend)

### P2.4 CTA copy consistency

- [x] Pick one primary CTA phrase site-wide (recommend: **“Free Roof Inspection”**)
- [x] Replace mixed strings: “Free Estimate”, “Claim My Free Inspection”, etc., except where “estimate” is legally/semantically required
- [x] Update button labels in: Navbar, Home hero, LeadForm, Service template, Contact, mobile bottom bar

**Phase 2 exit criteria:** Homepage feels shorter; blog findable; nav shows current page; CTAs consistent.

---

## Phase 3: Visual design & brand polish (P2 to P3)

**Goal:** Unified visual language; more premium, less template-y.

### P3.1 Icons

- [x] Replace emoji on Home problem cards with **Lucide** icons (match rest of site)
- [x] Ensure icon size/color aligns with gold accent system

### P3.2 Color consistency

- [x] Restyle Google reviews badge on Home: gold/neutral palette instead of green/yellow
- [x] Audit other off-brand accents (yellow stars, green borders) for consistency

### P3.3 Shape language (border radius)

- [x] Decide: **sharp** (tradesman) vs **soft** (8px on cards/inputs)
- [x] Apply decision consistently: cards, buttons, inputs, map container, form fields

### P3.4 Typography (optional refresh)

- [x] Keep Inter for body OR add display font for `h1`/`h2` only
- [x] Load fonts with `font-display: swap`; subset weights actually used (400, 600, 700)

**Phase 3 exit criteria:** No emoji in UI; review section on-brand; radius/typography consistent.

---

## Phase 4: Gallery & proof of work (P3)

**Goal:** Help visitors find relevant project proof faster.

### P4.1 Gallery filters

- [x] Add filter UI on `/gallery` (Replacement, Repair, Metal, Commercial, etc., matching `gallery` data categories)
- [x] Filter is client-side only (no backend)
- [x] Update empty state when filter has no images

### P4.2 Homepage gallery preview

- [x] Optional: show filtered subset on Home (e.g. Replacement only) or keep mixed with clearer captions

### P4.3 Before / after

- [x] Add 2 to 3 before/after pairs (slider or side-by-side component)
- [x] Place on Home and/or Gallery; use real project photos

### P4.4 Lightbox enhancements

- [x] Show **service type tag + city** in lightbox when data exists
- [x] Keyboard: Escape close, arrow keys prev/next (verify Gallery.tsx)

**Phase 4 exit criteria:** Gallery filterable; at least one before/after live; lightbox shows richer context.

---

## Phase 5: Forms UX (frontend only) (P2 to P3)

**Goal:** Better qualification and submission confidence without backend changes.

### P5.1 LeadForm fields & copy

- [x] Add optional **email** field on `full` variant
- [x] Add **reason dropdown** on hero variant (Leak / Storm / Replacement / Inspection / Other)
- [x] Map dropdown value into submitted payload (`message` prefix or dedicated field if schema allows)
- [x] Add privacy microcopy under submit: “We won’t share your info…”
- [x] Improve phone field: `type="tel"`, placeholder format hint, basic required validation feedback

### P5.2 Loading & success states

- [x] Clear loading state on button (disabled + label)
- [x] Success state: reinforce next step (“We’ll call within 24 hours”) + phone link
- [x] Error state: keep fallback phone number prominent

### P5.3 Duplicate form strategy (Home)

- [x] Decide: keep hero + bottom form OR bottom = phone-only CTA
- [x] Implement chosen approach to reduce form fatigue

**Phase 5 exit criteria:** Forms collect reason/email; states clear; home duplicate strategy resolved.

---

## Phase 6: Mobile experience (P2 to P3)

**Goal:** Optimize for thumb-first local traffic.

### P6.1 Layout & safe areas

- [x] Reduce hero `min-h` on small screens (e.g. 70vh) so primary CTA is above fold
- [x] Verify bottom bar spacer (`h-16`) + iOS safe-area padding on sticky bar
- [x] Test last section (FAQ, final CTA) not hidden behind bottom bar

### P6.2 Contact options

- [x] Add **SMS / Text** link alongside `tel:` where appropriate (Contact, Footer, mobile bar optional)

**Phase 6 exit criteria:** Primary CTA visible on mobile without scroll; no overlap with fixed bars.

---

## Phase 7: Performance & assets (P3)

**Goal:** Faster LCP and stable layout without backend.

### P7.1 Images

- [ ] Add `width` / `height` (or aspect-ratio) on images to reduce CLS
- [ ] Generate WebP (or AVIF) variants for hero, gallery, service heroes
- [ ] Add `srcset` / `sizes` for responsive hero and gallery images
- [ ] Set `fetchpriority="high"` on LCP hero image only
- [ ] Keep `loading="lazy"` on below-fold images

### P7.2 Fonts

- [ ] Self-host Inter OR use Google Fonts with `display=swap` only
- [ ] Remove unused font weights from import

### P7.3 Asset paths (deploy safety)

- [ ] Normalize paths: `/Asset/` → `/assets/` (lowercase, no spaces)
- [ ] Rename folders with spaces (e.g. `Emergency Repair Page Image`) to kebab-case
- [ ] Update all references in pages/data/components
- [ ] Verify `npm run build` + preview serves all images

**Phase 7 exit criteria:** Lighthouse mobile LCP improved; no 404 images in production build.

---

## Phase 8: Accessibility (P3)

**Goal:** WCAG-minded polish for keyboard and screen reader users.

### P8.1 Focus & keyboard

- [ ] Add visible `focus-visible` styles (gold ring) on links, buttons, inputs, nav dropdowns
- [ ] FAQ accordion: `aria-controls` + matching panel `id`
- [ ] FAQ: consider allowing only one open vs multiple (document choice)

### P8.2 Skip link & landmarks

- [ ] Add **“Skip to main content”** link (visible on focus)
- [ ] Ensure `<main>` wraps page content in Layout

### P8.3 Reduced motion

- [ ] Respect `prefers-reduced-motion`: disable FAQ height animation and gallery hover scale
- [ ] Test with OS “Reduce motion” enabled

**Phase 8 exit criteria:** Tab through nav, forms, FAQ, gallery lightbox without traps; skip link works.

---

## Phase 9: Frontend SEO & local discovery (P3 to P4)

**Goal:** Better snippets and local relevance; still no backend.

### P9.1 Structured data (JSON-LD)

- [ ] Add `LocalBusiness` / `RoofingContractor` schema on Home (static JSON-LD in HTML or injected per route)
- [ ] Add `FAQPage` schema on Home + service pages with FAQs
- [ ] Add aggregate `Review` rating markup aligned with real Google data (keep in sync manually)

### P9.2 Service areas

- [ ] Create static **“Areas We Serve”** page OR individual city section anchors
- [ ] Optional: one page per top city (Sacramento, Roseville, Folsom...), frontend routes only
- [ ] Link city chips to relevant page/anchor (replace inert spans where useful)

### P9.3 Blog & internal linking

- [ ] Cross-link blog posts to matching service pages
- [ ] Add related services footer on blog posts

**Phase 9 exit criteria:** Rich results validate in Google Rich Results Test; service areas not dead-end UI.

---

## Phase 10: Content blocks & delight (P4)

**Goal:** Lower priority enhancements after core funnel is solid.

### P10.1 Process & financing

- [ ] Add Home **3-step process** strip: Inspect → Quote → Install (with timeline copy)
- [ ] Add financing explainer section or modal (static bullets; “Ask us for options”)

### P10.2 Metal vs shingles

- [ ] Add comparison table on `/metal-roofing` (extract from existing blog content)

### P10.3 Optional enhancements

- [ ] Seasonal dismissible banner (localStorage; rain/heat season copy)
- [ ] Static “We respond within 24 hours” trust line near forms
- [ ] Print-friendly PDF checklist in `/public/` (optional)

**Phase 10 exit criteria:** Nice-to-have items only shipped if P0 to P3 are complete.

---

## Cross-cutting QA checklist

Run before marking a phase complete:

### Devices & browsers
- [ ] iPhone Safari (bottom bar + form)
- [ ] Android Chrome
- [ ] Desktop Chrome / Safari
- [ ] Tablet landscape (768 to 1024px)

### Pages to spot-check every phase
- [x] `/` Home
- [ ] `/roof-replacement`
- [ ] `/emergency-roof-repair`
- [ ] `/metal-roofing`
- [x] `/contact`
- [ ] `/gallery`
- [x] `/about`
- [ ] `/blog` + one `/blog/:slug`

### Functional
- [ ] All `tel:` links dial correct number
- [ ] Lead forms still submit (success/error UI)
- [ ] Nav dropdowns open/close on hover and click
- [x] Route change scrolls to top
- [ ] No console errors on navigation

### Build & deploy
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [x] `npm run build` succeeds
- [ ] `npm run preview` confirms all images and fonts load

---

## File / area reference

| Area | Primary files |
|------|----------------|
| Home | `src/pages/Home.tsx` |
| Service pages | `src/components/ServicePageTemplate.tsx`, `src/pages/*.tsx` |
| Nav / layout | `src/components/Navbar.tsx`, `src/components/Layout.tsx` |
| Footer | `src/components/Footer.tsx` |
| Forms | `src/components/LeadForm.tsx` |
| Gallery | `src/pages/Gallery.tsx`, `src/data/gallery.ts` |
| FAQ | `src/components/FaqAccordion.tsx` |
| About | `src/pages/About.tsx` |
| Global styles | `src/index.css`, `tailwind.config.js` |
| Meta / HTML | `index.html` |
| Assets | `/Asset/`, `/Emergency Repair Page Image/` → normalize in Phase 7 |

---

## Progress summary

| Phase | Focus | Status |
|-------|--------|--------|
| 0 | Trust, routing, tablet form | [x] Complete |
| 1 | Service forms, meta, favicon, logo | [x] Complete |
| 2 | Home structure, nav, CTAs | [x] Complete |
| 3 | Visual polish | [x] Complete |
| 4 | Gallery & proof | [x] Complete |
| 5 | Forms UX | [x] Complete |
| 6 | Mobile | [x] Complete |
| 7 | Performance & assets | [ ] Not started |
| 8 | Accessibility | [ ] Not started |
| 9 | SEO & local | [ ] Not started |
| 10 | Delight / optional | [ ] Not started |

**Overall project status:** [ ] Not started · [x] In progress · [ ] Complete

---

## Notes & decisions log

Use this space while implementing:

| Date | Decision / note |
|------|-----------------|
| 2026-05-20 | Phase 0 complete: on-site PRC 13 project photo, Google reviews link (`src/data/site.ts`), storm → emergency, hero form stacked below lg, removed unverified badge |
| 2026-05-20 | Phases 1 to 3: PageMeta, hero forms, nav/IA, soft 8px radius, Lucide problem cards, PRIMARY_CTA = Free Roof Inspection |
| 2026-05-20 | Phases 4 to 6: gallery filters/lightbox, before/after, LeadForm UX, home phone-only footer CTA, SMS links, mobile safe-area padding |
| | Primary CTA phrase chosen: **Free Roof Inspection** |
| | Border radius approach: **soft (8px)** via `rounded-brand` |
| | Home bottom form strategy: **phone-only** (hero form only) |
| | Display font selected (if any): _______________ |

---

*Last updated: 2026-05-20: Phases 0 to 6 complete; Phases 7+ not started.*
