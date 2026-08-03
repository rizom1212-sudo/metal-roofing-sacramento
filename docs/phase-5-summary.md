# Phase 5 Summary — Conversion Optimization (CRO)

**Status: COMPLETE**  
**Date:** 2026-08-02  

Phase 5 maximized conversion paths (phone calls, inspection requests, estimates, contact form submissions). No Phase 6 work started. No new service pages or location pages were created. No fabricated reviews, ratings, licenses, warranties, awards, or years-in-business claims were added.

---

## 1. Pages optimized

| Surface | Changes |
|---------|---------|
| Home | TelLink CTAs, SMS tracking on final CTA, `data-final-cta`, hero form retained |
| Roof Repair | Dual hero CTAs + form; mid-page phone; final TelLink + form |
| Roof Replacement | Above-fold trust chips; TelLink + inspection CTA; final form + TelLink |
| Metal Roofing | Hero phone + inspection CTA + form; final TelLink |
| Commercial Roofing | Hero form panel + TelLink + commercial assessment CTA |
| Roof Inspection | Hero form panel + TelLink; softened unverifiable “100% free” badge framing where adjusted earlier |
| Emergency Roof Repair | Via `ServicePageTemplate`: hero dual CTAs + form; final TelLink + form |
| Gutters & Siding | Hero form + TelLink; fascia/soffit service claims removed from conversion copy |
| Contact | Inspection-first H1; extended short form; TelLink + SMS tracking; license line |
| About | TelLink; inspection CTAs; removed unverifiable “most trusted” ranking claim |
| Service area city hubs | Same-page inspection CTA → `#schedule-inspection`; hero trust chips; final TelLink + form |
| City service pages | TelLink on hero/final (analytics); `data-final-cta` |
| Site chrome | Navbar TelLink + sticky mobile call; Footer TelLink; FloatingInspectionCta sitewide |

Also restored Phase 4 topical posts wiring into `blog.ts` (14 articles) so prior SEO routes remain live (sitemap 113 URLs).

---

## 2. CTA improvements

- Centralized labels in `src/data/cta.ts`:
  - **Request a Roof Inspection** (primary)
  - Get a Roofing Estimate
  - Call for Emergency Roof Repair
  - Speak With a Roofing Specialist
  - Request Commercial Assessment
  - Free Gutter Evaluation
- Pattern on commercial pages: **phone CTA + inspection CTA above the fold**, mid-page where natural, **final form + call** before footer.
- Service area hubs no longer bounce primary CTA to `/roof-inspection`; they scroll to the on-page form.
- About secondary CTA changed from “Send a Message” to **Request a Roof Inspection**.

---

## 3. Trust element improvements

**Verified / retained (presentation only):**
- California contractor license **#1087153**
- Licensed & insured copy (`LICENSE_TEXT`)
- Google rating/count constants + reviews link (`site.ts` / existing review components)
- Real project gallery / About project photo
- Existing workmanship-warranty language already present on the site (not newly invented in Phase 5)

**Honesty / friction fixes:**
- Gutters page no longer advertises fascia/soffit repair as a PRC 13 service (aligned with FAQ).
- About copy no longer claims “one of Sacramento’s most trusted” ranking.

---

## 4. Form improvements

- `LeadForm` kept short for heroes (name, phone, optional reason).
- Contact page uses `showExtendedFields`: optional **city** + **preferred contact method** (phone / text / email).
- Reason options include inspection and **Roofing Estimate**.
- Successful submissions fire `generate_lead` (GA4).
- Success/error states include click-to-call fallback via `TelLink`.

---

## 5. Click-to-call improvements

- `TelLink` component wraps `tel:` links and fires `click_to_call` with location labels.
- Phone display uses `PHONE_DISPLAY` / `PHONE_TEL` from `site.ts` (consistent number).
- Visible above the fold on major commercial heroes; sticky mobile Call Now in navbar; footer TelLink.
- SMS links track `click_to_sms` where wired (navbar, contact, home final).

---

## 6. Mobile conversion improvements

- Sticky mobile call bar retained with TelLink tracking.
- Sitewide floating inspection CTA (`FloatingInspectionCta`) → `/contact`.
- Final conversion sections marked `data-final-cta` so the floating chip hides near end-of-page CTAs (Home, service pages, city hubs, template, About).
- Click-to-call works on mobile via `tel:` links throughout commercial surfaces.

---

## 7. Tracking improvements

**Implemented in code (GA4 `G-9WWQLWZGSV`):**

| Event | Trigger |
|-------|---------|
| `click_to_call` | TelLink clicks |
| `click_to_sms` | SMS CTA clicks (wired locations) |
| `generate_lead` | Successful LeadForm submit |
| `click_email` | Helper ready (`trackEmailClick`) — no primary mailto CTAs currently |
| Page views | Existing `GoogleAnalytics` router pageviews |

**Must be configured outside this repo (cannot fabricate):**
1. In **GA4 Admin → Events**, mark `generate_lead`, `click_to_call`, and `click_to_sms` as **key events** (conversions).
2. If using **Google Ads**, import those GA4 key events as conversions (or use call extensions / call-only ads separately).
3. Confirm Airtable / lead backend credentials remain valid for form delivery (`submitLead`).
4. Optional: Call tracking numbers (CallRail, etc.) — not present; document only if owner adds a third-party pool later.
5. Optional: Enhanced conversions / offline conversion import for closed jobs — requires CRM process outside the site.

---

## 8. Remaining conversion opportunities

- Wire `trackEmailClick` if a public email CTA is added later.
- Add mid-page dual CTAs on Metal / Commercial / Inspection (currently rely on hero + final).
- Expand SMS tracking to every SMS instance if more are added.
- A/B test hero form vs phone-first on emergency pages once GA4 conversion volume exists.
- About page still has no embedded form (phone + contact CTA only).
- City service pages could share more of `ServicePageTemplate` to reduce duplication.
- Soft ops claims (“most homes within 24 hours”, “1 to 2 days”) should be validated against real scheduling data over time.

---

## 9. Highest-priority future CRO recommendations

1. **Mark GA4 key events** for call clicks and lead submits, then build a weekly dashboard by `source_page` / `link_location`.
2. **Speed-to-lead SLA** — respond to form leads within minutes during business hours (site copy promises ~24h; ops should beat that).
3. **Emergency landing** — keep phone as the dominant CTA; measure call share vs form share after storms.
4. **Review velocity** — continue collecting real Google reviews; surface newest verified quotes near CTAs (no fabricated stars).
5. **Thank-you / confirmation UX** — post-submit page or clearer next-step copy (“We’ll call this number”) once analytics baselines exist.
6. Do **not** start Phase 6 until this Phase 5 package is approved.

---

## Conversion scorecard

| Page | Primary CTA | Secondary CTA | Trust Elements | Form Present | Conversion Score (/10) | Remaining Opportunities |
|------|-------------|---------------|----------------|--------------|------------------------|-------------------------|
| Home `/` | Request inspection → `/contact` | Call {phone} | License framing, Google reviews, gallery | Yes (hero) | 9 | Validate 24h ops claim; mid-funnel SMS ubiquity |
| Roof Repair | Request assessment (anchor) | Call | Licensed/insured chips, reviews strip | Yes (hero + final) | 9 | Mid-page estimate CTA block |
| Roof Replacement | Request inspection (anchor) | Call | Hero trust chips + gold bar | Yes | 8.5 | Stronger mid-page CTA |
| Metal Roofing | Request inspection (anchor) | Call | Warranty/financing chips (existing) | Yes | 8.5 | Mid-page CTA |
| Commercial Roofing | Commercial assessment | Call | Licensed chips + form | Yes | 8.5 | Mid-page CTA; commercial-specific proof |
| Roof Inspection | Request inspection (anchor) | Call | Free inspection framing | Yes | 9 | Mid-page reminder CTA |
| Emergency Repair | Emergency call | Request inspection | Licensed + urgency copy | Yes | 9 | Storm-season banner testing |
| Gutters & Siding | Gutter evaluation / inspection | Call | Honest no-fascia/soffit scope | Yes | 8 | Keep educational fascia blog links secondary |
| Contact | Request inspection (form) | Call / text | License line, hours | Yes (extended) | 9.5 | Thank-you confirmation page |
| About | Call | Request inspection | License #1087153 | No | 7 | Optional short form |
| Service area hubs | Request inspection (on-page) | Call | License chips in hero | Yes | 8.5 | Per-city review snippets if verified |
| City service pages | Request inspection (anchor) | Call | Licensed chips | Yes | 8 | Align fully with template patterns |
| Gallery | View / contact paths | Call (chrome) | Real project photos | No | 7 | Inline inspection CTA near grids |
| Blog posts | Related service links | Site chrome CTAs | Educational trust | No | 6.5 | Stronger end-of-article inspection CTA |

**Average major commercial score:** ~8.5 / 10

---

## Verification

1. **Build:** `npm run build` succeeded (prerender + sitemap + JSON-LD validation).
2. **Routes:** No commercial routes removed; App routes unchanged; sitemap increased with Phase 4 articles restored (113 URLs).
3. **Links:** Primary CTAs use same-page anchors or existing `/contact` / service paths; phone uses shared `PHONE_*` constants.
4. **Phase 5:** **COMPLETE**.

---

## Stop

Phase 5 is complete. **Await approval before beginning Phase 6.**
