# PRC 13 Roofing — Technical Architecture (Phases 1–6)

This document describes the production website architecture after the AI-readiness / entity-integrity program (Phases 1–6). It is the primary guide for future developers extending the system **without breaking the canonical entity graph**.

**Live domain:** `https://prc13roofing.com`  
**Stack:** Vite + React + TypeScript, React Router, SSR prerender to static HTML (Vercel)

Related docs:

- [`docs/analytics.md`](./analytics.md) — GA4 events, attribution, PII rules
- [`docs/seo-page-map.md`](./seo-page-map.md) — route / page inventory (if present)
- [`docs/phase-5-summary.md`](./phase-5-summary.md) — Phase 5 content notes (historical)

---

## 1. What Phases 1–6 established

| Phase | Focus | Outcome |
|-------|--------|---------|
| **1** | Technical + entity integrity | Soft-404 / routing honesty; fascia/soffit “not offered” truth; blog data integrity |
| **2** | Canonical SSOT | `site.ts`, `services.ts`, `llms.txt` generation |
| **3** | Structured data / entity graph | Coherent JSON-LD `@graph` from SSOT |
| **4** | Visible information architecture | Nav/footer/LocalSeoLinks/city hubs reinforce the graph |
| **5** | Retrieval-ready content | About as entity page; answer-first service content; softened unsupported claims |
| **6** | Measurement + claim cleanup | Lead/call/SMS attribution; conservative AI referrer detection |

**Hard rules that still apply:**

1. Do **not** invent business facts (address, founding year, awards, prices, warranty lengths, crew size, etc.).
2. There is **one** PRC 13 business entity in schema and copy.
3. Fascia/soffit repair is **not offered** — educational content only.
4. PRC 13 is a **service-area business** — no public storefront `PostalAddress` in schema or marketing that implies a retail walk-in location.
5. Prefer updating SSOT files over scattering new constants through pages.

---

## 2. High-level system diagram

```text
┌─────────────────────────────────────────────────────────────────┐
│ Canonical data (SSOT)                                           │
│  site.ts · services.ts · serviceAreas.ts · domain.ts · assets   │
└───────────────┬─────────────────────────────────────────────────┘
                │
    ┌───────────┼───────────┬──────────────┬──────────────────┐
    ▼           ▼           ▼              ▼                  ▼
  UI chrome   Pages      JSON-LD       llms.txt           Analytics
  Nav/Footer  About/     jsonLdGraph   generate-llms      referralAttribution
  LocalSeo    Services   JsonLd.tsx                       analytics.ts
  City hubs   Blog       validate-jsonld                  GoogleAnalytics
                │
                ▼
         Build: client + SSR + prerender + sitemap + llms + validate:jsonld
                │
                ▼
         dist/ static HTML (crawlable) + SPA hydration
```

---

## 3. Repository layout (architecture-critical paths)

| Path | Role |
|------|------|
| `src/data/domain.ts` | `SITE_URL`, `absoluteUrl()`, `absoluteAssetUrl()` |
| `src/data/site.ts` | Business entity SSOT (name, phone, license, hours, reviews, sameAs, geo, flags) |
| `src/data/services.ts` | Offered / not-offered service catalog + helpers |
| `src/data/serviceAreas.ts` | City hubs (copy + per-city service cards) |
| `src/data/cityHubServices.ts` | Merge catalog into city hubs; preserve city×service deep links |
| `src/data/cityServicePages.ts` | Existing city×service pages only (do not mass-generate) |
| `src/data/routes.ts` / entry-server exports | Public routes for prerender + sitemap |
| `src/data/llms.txt.ts` + `scripts/generate-llms.mjs` | Machine-readable business summary |
| `src/data/internalLinking.ts` | Resource limits, priority SEO cities |
| `src/lib/jsonLdGraph.ts` | Schema.org `@graph` builder |
| `src/components/JsonLd.tsx` | Per-page JSON-LD injection |
| `src/components/LocalSeoLinks.tsx` | Related services + city links |
| `src/components/RetrievalAnswers.tsx` | Answer-first Q→A blocks |
| `src/lib/analytics.ts` | GA4 conversion helpers |
| `src/lib/referralAttribution.ts` | Session + referrer classification |
| `scripts/prerender.mjs` | Static HTML for public routes |
| `scripts/generate-sitemap.mjs` | Canonical sitemap |
| `scripts/validate-jsonld.mjs` | Graph integrity checks on `dist/` |
| `public/robots.txt` | Allows crawl; points to sitemap |
| `public/404.html` + `NotFound.tsx` | Honest 404 (no SPA catch-all rewrite) |

---

## 4. Entity model (canonical business)

### 4.1 Single source of truth: `src/data/site.ts`

All visible trust facts and schema business fields should flow from here:

| Concept | Constants (examples) |
|---------|----------------------|
| Legal / display names | `BUSINESS_ENTITY_NAME`, `BUSINESS_DISPLAY_NAME` |
| Description | `BUSINESS_DESCRIPTION` |
| License | `LICENSE_NUMBER`, `LICENSE_*` formatters |
| Insured | `IS_INSURED` |
| Phone | `PHONE_DISPLAY`, `PHONE_TEL`, `PHONE_E164`, `PHONE_SMS` |
| Hours | `BUSINESS_HOURS`, `BUSINESS_DAYS_CLOSED` |
| Reviews | `GOOGLE_RATING_VALUE`, `GOOGLE_REVIEW_COUNT` (manual sync with GBP) |
| Profiles | `SAME_AS_URLS`, GBP / BBB / social URLs |
| Service-area policy | `IS_SERVICE_AREA_BUSINESS`, `HAS_PUBLIC_STOREFRONT_ADDRESS`, `PUBLIC_STREET_ADDRESS = null` |
| Geo | `GEO_LATITUDE`, `GEO_LONGITUDE` (GBP pin — not a street address) |
| Brand assets | `LOGO_SRC`, `ABOUT_PHOTO_SRC` |

### 4.2 Stable schema `@id` values

Preserve these unless there is a strong technical reason to change them:

| `@id` | Type | Meaning |
|-------|------|---------|
| `https://prc13roofing.com/#business` | `RoofingContractor` | **The** business entity |
| `https://prc13roofing.com/#website` | `WebSite` | Site entity; `publisher` / `about` → business |
| `https://prc13roofing.com/#logo` | `ImageObject` | Logo |
| `https://prc13roofing.com/{service-path}#service` | `Service` | Catalog service (metro pages) |
| `https://prc13roofing.com/{page-path}#webpage` | `WebPage` / `ContactPage` | Page node |
| `{page}#service` | `Service` | Page-local service for city hubs / city×service (not a second business) |

### 4.3 What must never appear for the business

- Fake `PostalAddress` / storefront
- Multiple `LocalBusiness` / `RoofingContractor` nodes for different cities
- Invented `Person` authors, awards, certifications, prices
- Duplicate Organization + RoofingContractor describing the same entity without reason
- License via invented `hasCredential` issuer org/dates — license uses `identifier` `PropertyValue` only

---

## 5. Service catalog

### 5.1 Source: `src/data/services.ts`

**Offered (7):**

1. Roof Replacement → `/roof-replacement`
2. Roof Repair → `/roof-repair`
3. Emergency Roof Repair → `/emergency-roof-repair`
4. Roof Inspection → `/roof-inspection`
5. Metal Roofing → `/metal-roofing`
6. Commercial Roofing → `/commercial-roofing`
7. Gutters & Siding → `/gutters-siding` (one commercial page; schema name “Gutters and siding”)

**Not offered (`SERVICES_NOT_OFFERED`):**

- Fascia repair
- Soffit repair  

Educational blog posts may discuss these topics but must state PRC does not offer them.

### 5.2 Helpers (use these — do not re-hardcode lists)

| Helper | Consumers |
|--------|-----------|
| `getNavServices()` | Navbar |
| `getFooterServices()` | Footer |
| `getLocalSeoLinkServices()` | LocalSeoLinks |
| `getCityHubServices()` | City hub merge |
| `getOfferedServices()` | Schema OfferCatalog, About, llms.txt |
| `getServiceByUrl()` | JSON-LD catalog Service detection |

Flags on each definition (`showInNav`, `showInFooter`, etc.) control surfaces without forking the catalog.

### 5.3 Extending services safely

1. Add or update the row in `SERVICES` or `SERVICES_NOT_OFFERED`.
2. Add a real page/route only if the business actually offers it.
3. Ensure OfferCatalog / nav / footer pick it up via helpers.
4. Update About “What we do” (uses `getOfferedServices()`).
5. Update `llms.txt` generation input (already catalog-driven).
6. Add JSON-LD path coverage via `getServiceByUrl` (canonical URL must match route).
7. **Never** mark fascia/soffit as `offered: true` without a verified business decision.

---

## 6. Geography model

### 6.1 City hubs (`src/data/serviceAreas.ts`)

- One hub per city under `/service-areas/{slug}`.
- Hand-written local copy (hero, FAQs, signals).
- `services[]` cards may deep-link to **existing** city×service URLs.

### 6.2 Catalog merge (`src/data/cityHubServices.ts`)

`resolveCityHubServices(cityName, existing)`:

1. Keeps city-specific titles, descriptions, and city×service hrefs.
2. Appends any missing **offered** catalog services (e.g. Commercial, Gutters).

**Do not** create a `LocalBusiness` per city. City pages describe where the **one** business provides service.

### 6.3 City × service pages (`src/data/cityServicePages.ts`)

Sparse intentional matrix (not 13×7). Examples:

- `/roof-replacement/rocklin`
- `/roof-repair/granite-bay`
- `/emergency-roof-repair/{folsom|orangevale|granite-bay}`

**Phase rule:** do not mass-generate doorway city×service pages. Add only when there is real unique intent/content.

### 6.4 Schema geography

- Business `areaServed`: full footprint as `AdministrativeArea` list.
- Single-city page Service: `areaServed` as `City`.
- No fake offices.

---

## 7. Structured data architecture

### 7.1 Builder: `src/lib/jsonLdGraph.ts`

`buildJsonLdGraph()` emits a single `@graph` per page (serialized by `serializeJsonLd()` with script-breakout escaping).

Typical nodes:

1. Logo `ImageObject`
2. `RoofingContractor` `#business` (description, geo, hours, sameAs, aggregateRating, OfferCatalog, license `identifier`)
3. `WebSite` `#website` (`publisher` / `about` → business; **no SearchAction**)
4. Catalog or page-local `Service` when `schemaType === 'Service'`
5. `WebPage` / `ContactPage` (`isPartOf` → website, `about` → business)
6. `BlogPosting` when applicable (`publisher` → business; optional `about` → Service)
7. `BreadcrumbList` only when UI breadcrumbs exist
8. `FAQPage` only when visible FAQs are passed (must match on-page text)

### 7.2 Consumer: `src/components/JsonLd.tsx`

Pages pass `schemaType`, `faqs`, `breadcrumbs`, `servedAreas`, `primaryImage`, etc. Keep FAQ arrays identical between accordion and `JsonLd`.

### 7.3 Validation: `scripts/validate-jsonld.mjs`

Checks on prerendered HTML include:

- One business entity
- No invented `address`
- WebSite present with business
- OfferCatalog excludes fascia/soffit
- Service.provider references business
- No SearchAction

Run via `npm run build` (includes `validate:jsonld`).

### 7.4 Extending schema safely

| Do | Don’t |
|----|--------|
| Add fields backed by `site.ts` / `services.ts` | Invent founding dates, employees, prices |
| Use `@id` references for publisher/provider | Nest duplicate full `WebSite` objects inside every WebPage |
| Keep FAQ schema = visible FAQ | Dump hidden FAQ spam |
| Stable `#service` IDs for catalog URLs | Multiple conflicting Service entities for the same metro page |

---

## 8. Internal linking architecture (Phase 4)

### Intended user / crawler paths

```text
Home → Service → Supporting articles → Relevant cities → Contact
City hub → Services (catalog + deep links) → Local content → Contact
Article → Primary service → Location (when geographic) → Contact
About → Services / Areas / Gallery → Contact
```

### Key components

| Component / helper | Behavior |
|--------------------|----------|
| Navbar / Footer | Catalog-driven service links |
| `LocalSeoLinks` | All offered services + priority cities (`LOCAL_SEO_PRIORITY_CITY_SLUGS`) |
| `resolveCityHubServices` | Full catalog on hubs without wiping custom cards |
| Service hub resource strips | Curated ≤ `SERVICE_HUB_RESOURCE_LIMIT` (6) |
| Blog `relatedServices` + category CTAs | Article → service |
| Descriptive anchors | Prefer “Roofing services in Folsom” over “Learn more” |

### Extending links safely

- Wire new services through the catalog first.
- Prefer descriptive anchors; avoid footer link farms.
- Do not duplicate giant LocalSeoLinks blocks on every section of a page.
- When adding a city×service page, link it from the city hub card `href` and from the parent service contextual copy.

---

## 9. Content / AI-readiness architecture (Phase 5)

### Patterns

1. **About** = entity page (who / what / where / verify) from SSOT.
2. **AnswerSummary** = “Quick answer” block near the top of service/city pages.
3. **RetrievalAnswers** = standalone H3 + direct answer + optional detail.
4. **FAQs** = direct, factual, schema-synced.
5. **Claim policy** = soften absolute operational guarantees (24 hours, same-day, warranty length, financing) unless verified.

### Extending content safely

- Lead with a clear answer, then explanation, then CTA.
- Do not keyword-stuff city names.
- Do not reintroduce “within 24 hours” / “Financing Available” absolutes without ops verification.
- Keep fascia educational pages honest about non-service status.

---

## 10. Analytics & attribution (Phase 6)

Full detail: [`docs/analytics.md`](./analytics.md).

### Measurement ID

`G-9WWQLWZGSV` in `index.html` (async gtag) + SPA pageviews in `GoogleAnalytics.tsx`.

### Conversion events

| Event | When |
|-------|------|
| `generate_lead` | After successful Airtable lead submit only |
| `click_to_call` | `TelLink` click |
| `click_to_sms` | Explicit SMS handlers |
| `session_attribution` | Once per tab session (first-touch class) |

### Attribution

`src/lib/referralAttribution.ts`:

- `detectReferralSource()` — conservative host classification (google, chatgpt, perplexity, gemini, grok, …)
- Session first-touch in `sessionStorage` (landing path, referrer **hostname**, source)
- Path inference: `service_context`, `city_context`

**Never send PII to GA** (name, phone, email, message, street address, free-text form city).

### AI referral reality

Many AI surfaces do not pass referrers. Treat AI source metrics as **partial**, never complete.

---

## 11. Build, crawl, and deploy pipeline

```bash
npm run build
# → build:client → build:ssr → prerender → sitemap → llms → validate:jsonld
```

| Artifact | Purpose |
|----------|---------|
| `dist/**/index.html` | Prerendered public pages for bots |
| `dist/sitemap.xml` | Canonical URLs via `absoluteUrl()` |
| `dist/llms.txt` (+ `public/llms.txt`) | AI/crawler business summary |
| `public/robots.txt` | Sitemap pointer |
| `public/404.html` | HTTP 404 for unknown paths (no SPA rewrite) |

Unknown client routes → `NotFound` + `noindex` via `PageMeta` where applicable.

---

## 12. How to extend without breaking the entity graph

### Checklist: changing business facts

1. Edit `src/data/site.ts` only (phone, hours, reviews, license, sameAs, description).
2. Confirm About + Contact still import those constants (no hardcoded duplicates).
3. Rebuild; confirm JSON-LD validator still passes.
4. Manually sync Google review constants with live GBP when they change.

### Checklist: adding a service

1. Verified offering? If no → `SERVICES_NOT_OFFERED` or don’t add.
2. Add to `SERVICES` with correct `canonicalUrl` and flags.
3. Create page + route + prerender entry.
4. Confirm nav/footer/LocalSeoLinks/schema/llms/About update via helpers.
5. Add internal links from related services/cities thoughtfully — not sitewide spam.

### Checklist: adding a city hub

1. Add to `serviceAreas.ts` with unique local copy.
2. Rely on `resolveCityHubServices` for catalog completeness.
3. Do **not** invent a city-specific LocalBusiness schema.
4. Add route + prerender; link from service-areas index / LocalSeoLinks as appropriate.

### Checklist: adding a city × service page

1. Justify unique intent (avoid doorway duplicates).
2. Add to `cityServicePages.ts` + routes.
3. Point city hub card `href` at the deep URL for that service.
4. Schema: page-local `#service` + `servedAreas={[city]}` + provider = business.

### Checklist: adding a blog article

1. Use existing cluster patterns; set `relatedServices` to real offered URLs.
2. Category CTA should map to a real service (see `BlogPost.tsx` + `BLOG_CATEGORY_TO_SERVICE_ID` in JSON-LD).
3. If topic is fascia/soffit: state not offered.
4. Prefer Phase 4 link quality over volume; no mass blog expansion required for graph integrity.

### Checklist: analytics changes

1. Never attach PII to events.
2. Fire `generate_lead` only on success.
3. Prefer extending `buildAttributionParams()` over ad-hoc gtag calls.
4. Update `docs/analytics.md`.

---

## 13. Anti-patterns (do not reintroduce)

| Anti-pattern | Why it breaks the system |
|--------------|--------------------------|
| Hardcoding service lists in Navbar/Footer | Diverges from OfferCatalog / llms / About |
| Fake addresses for “Local SEO” | Violates service-area truth + schema rules |
| LocalBusiness per city | Fragments the entity graph |
| Hidden FAQ schema | Mismatch with visible content; risk of spam signals |
| Mass 13×7 city×service generation | Doorway architecture |
| Absolute “within 24 hours” / “guaranteed same-day” without ops proof | Contradicts Phase 5–6 claim policy |
| Inventing authors, awards, warranty year counts | Unverified facts |
| Marking fascia as offered because blogs discuss it | Entity contradiction |
| Sending lead form PII to GA4 | Privacy + policy risk |

---

## 14. Mental model for AI / search systems

The site is designed so retrieval systems can reconstruct:

```text
PRC 13 Roofing Inc. (#business)
  → WebSite (#website)
  → OfferCatalog → Services (#service)
  → areaServed → Sacramento-region places
  → WebPages / BlogPostings about services & cities
  → visible FAQs + AnswerSummary / RetrievalAnswers
  → Contact / phone / license / reviews for verification
```

Visible IA (Phase 4) and content (Phase 5) should tell the same story as JSON-LD (Phase 3) and SSOT (Phase 2). Analytics (Phase 6) measure leads without polluting that story with invented facts.

---

## 15. Quick reference — “where do I change X?”

| Change | Primary file(s) |
|--------|------------------|
| Phone / hours / license / reviews | `src/data/site.ts` |
| Add/remove service | `src/data/services.ts` + page/route |
| City hub copy | `src/data/serviceAreas.ts` |
| City hub missing a catalog service | Usually automatic via `cityHubServices.ts` |
| Schema graph shape | `src/lib/jsonLdGraph.ts` |
| Nav/footer services | Helpers in `services.ts` (flags) |
| Lead tracking | `LeadForm.tsx` + `analytics.ts` |
| AI/referrer classification | `referralAttribution.ts` |
| llms.txt text | `src/data/llmsTxt.ts` |
| Sitemap membership | Public routes in SSR entry / routes data |
| Claim tone (scheduling/financing) | Match Phase 5–6 softened language |

---

## 16. Declaring the foundation “complete”

Phases 1–6 deliver a coherent **entity + crawl + retrieval + measurement** foundation. Ongoing work (content production, CRO, ads, AI receptionist, etc.) should treat this architecture as constraints, not optional suggestions.

When in doubt: **update the SSOT, keep one business entity, don’t invent facts, validate JSON-LD after build.**
