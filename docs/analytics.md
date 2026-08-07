# Analytics & Attribution (Phase 6)

Internal reference for PRC 13 Roofing GA4 events, lead attribution, and AI-referral limitations.

Measurement ID in code: `G-9WWQLWZGSV` (`index.html` + `GoogleAnalytics.tsx`).

---

## Events

### `page_view` (via `gtag config`)

| | |
|---|---|
| **Trigger** | Initial page load (`index.html`); SPA navigations (`GoogleAnalytics` on React Router change) |
| **Parameters** | `page_path` |
| **Purpose** | Traffic & engagement |
| **Key event?** | No |

First SPA render skips a duplicate `config` call because the HTML bootstrap already sent the landing pageview.

---

### `session_attribution`

| | |
|---|---|
| **Trigger** | Once per browser tab session when `GoogleAnalytics` mounts |
| **Parameters** | `detected_source`, `landing_page` |
| **Purpose** | Lightweight exploration of first-touch source classification |
| **Key event?** | No (optional exploration event) |

---

### `generate_lead`

| | |
|---|---|
| **Trigger** | **Only after successful** Airtable lead API response in `LeadForm` — not on button click |
| **Parameters** | See table below |
| **Purpose** | Primary conversion: completed inspection / estimate request |
| **Key event?** | **Yes — mark as a GA4 key event / conversion** |

---

### `click_to_call`

| | |
|---|---|
| **Trigger** | Click on `TelLink` (or any caller of `trackClickToCall`) |
| **Parameters** | See table below |
| **Purpose** | Phone CTA engagement |
| **Key event?** | Optional — useful if phone leads matter as much as forms |

---

### `click_to_sms`

| | |
|---|---|
| **Trigger** | Click handlers calling `trackClickToSms` (nav, contact, home, etc.) |
| **Parameters** | See table below |
| **Purpose** | SMS CTA engagement |
| **Key event?** | Optional |

---

### `click_email`

| | |
|---|---|
| **Trigger** | Mailto clicks via `trackEmailClick` (if used) |
| **Key event?** | No / optional |

---

## Shared attribution parameters

Attached automatically via `buildAttributionParams()` (no PII):

| Parameter | Meaning |
|-----------|---------|
| `page_path` | Current path + query |
| `landing_page` | First path in this tab session |
| `detected_source` | Conservative source class (see below) |
| `initial_referrer_host` | Hostname only from first referrer (if any) |
| `service_context` | Inferred from URL (`roof-repair`, etc.) when present |
| `city_context` | Inferred from `/service-areas/{slug}` or city×service paths |
| `link_location` / `form_location` | CTA or form placement label |
| `source_page` | LeadForm `sourcePage` prop |
| `form_variant` | `hero` / `inline` / `full` |
| `service_needed` | Coarse form reason code (`leak`, `replacement`, …) — not free text |
| `cta_type` | `phone` / `sms` / `lead_form` / `email` |

### Never sent to GA4

- Name, phone, email, message body, street address, free-text city field from the form

---

## `detected_source` values

From `detectReferralSource()` using **document.referrer only**:

| Value | When |
|-------|------|
| `chatgpt` | chat.openai.com / chatgpt.com / openai.com |
| `perplexity` | perplexity.ai |
| `gemini` | gemini.google.com / bard.google.com |
| `grok` | grok.x.ai / grok.com |
| `copilot` | copilot.microsoft.com (and related) |
| `google` | Google search hosts |
| `bing` | Bing hosts |
| `yahoo` / `duckduckgo` | Those engines |
| `direct` | Empty referrer or same-site |
| `referral` | Other external host |
| `unknown` | Unparseable |

**AI attribution is incomplete.** Many ChatGPT / Gemini / Grok surfaces do not pass a usable referrer. Do not treat “AI leads” as a complete count.

---

## Session storage (privacy-safe)

Keys under `sessionStorage` (tab-scoped):

- `prc13_attr_landing`
- `prc13_attr_referrer` (hostname only)
- `prc13_attr_source`
- `prc13_attr_captured`

No cookies added for this layer. No third-party scripts beyond existing gtag + Clarity.

---

## Search Console / sitemap

| Item | Status |
|------|--------|
| `public/robots.txt` | `Sitemap: https://prc13roofing.com/sitemap.xml` |
| Sitemap generation | `npm run sitemap` → `dist/sitemap.xml` from `publicRoutes` + `absoluteUrl()` |
| GSC HTML/meta token in repo | **Not found** — verification is likely DNS or Search Console property settings outside this codebase |
| Bing / other meta tokens in repo | **Not found** |

Do not invent verification tokens in code.

---

## Manual GA4 configuration checklist

1. Confirm property `G-9WWQLWZGSV` receives realtime events.
2. Mark **`generate_lead`** as a **key event**.
3. Optionally mark `click_to_call` and `click_to_sms` as key events.
4. Register custom dimensions for important params if you want Explore reports (`detected_source`, `landing_page`, `source_page`, `service_context`, `city_context`, `form_location`).
5. Verify Google Search Console property ownership (DNS or other method) and submit `https://prc13roofing.com/sitemap.xml` if not already submitted.
6. Do **not** build dashboards that imply 100% AI-traffic visibility.

---

## Later CRO (not Phase 6)

Optional form question: “How did you hear about us?” (Google / ChatGPT or AI search / Referral / Social / Other). Not added in this phase.
