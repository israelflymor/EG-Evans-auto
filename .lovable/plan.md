# Phase 1 — Technical Audit & Premium Modernization Blueprint

Scope: diagnostic only. No code changes in this phase.

---

## [Part 1: Code Mapping & Functional Status]

### Configuration & data

- `src/config/business.ts` — single source of truth (identity, contact, categories, testimonials, projects, workshop tools, part-finder Y/M/M data). **[DEGRADED]** — `phoneDisplay: "(XXX) XXX-XXXX"` and `phoneHref: "tel:+10000000000"` are placeholders; live in header, footer, contact, and JSON-LD.
- `src/lib/analytics.ts` — dataLayer + CustomEvent wrapper for `part_finder_submit`, `quote_form_submit`, `phone_click`, `email_click`, `cta_click`. **[STABLE]**

### Routes

- `src/routes/__root.tsx` — root shell, fonts, schema.org `AutoPartsStore`, aggregate reviews, providers. **[STABLE]**
- `src/routes/index.tsx` — hero + PartFinder, trust strip, categories grid, about split, projects grid, testimonials, CTA. **[STABLE]**
- `src/routes/categories.tsx` — full catalog grid, links to `/category/$slug`. **[LEGACY/UNOPTIMIZED]** — child cards use `absolute bottom-0` underline but parent has no `relative`; the sunset underline never anchors.
- `src/routes/category.$slug.tsx` — dynamic detail with loader + notFound. **[STABLE]**
- `src/routes/about.tsx` — story, 3-value grid, WorkshopGallery, testimonials, CTA. **[STABLE]**
- `src/routes/projects.tsx` — recent orders grid + CTA. **[STABLE]**
- `src/routes/contact.tsx` — info column + QuoteForm; wired to analytics phone/email clicks. **[STABLE]**
- `src/routes/privacy|terms|cookies|accessibility.tsx` — legal shells via `LegalLayout`. **[STABLE]** (copy is placeholder by design).

### Components

- `SiteHeader.tsx` — sticky nav, scroll blur, mobile drawer, CTA analytics. **[STABLE]** — minor: locks body scroll but drawer is not focus-trapped, no `Esc` close.
- `SiteFooter.tsx` — 4-column footer with contact analytics. **[STABLE]**
- `PartFinder.tsx` — Y/M/M selects → navigate to `/contact` with vehicle search param, tracked. **[STABLE]** — model list falls back to `["Other / Not Listed"]` for unlisted makes (works, but silently limits UX).
- `QuoteForm.tsx` — client-only form; on submit sets local "submitted" state and fires `quote_form_submit`. **[DEGRADED/BUGGY]** — no server delivery. Success copy still says "Connect Lovable Cloud to start delivering submissions." No email is sent to `info@crotteauautoparts.com` despite earlier work adding the Supabase client scaffolding.
- `Testimonials.tsx` — light/dark grid with review schema microdata. **[STABLE]**
- `WorkshopGallery.tsx` — bento (8/4 split + stacked side), stats row. **[LEGACY/UNOPTIMIZED]** — "Book Service" CTA is a service-shop leftover; should read "Request a Quote" for a parts business. Copy references "diagnostic technology / maintain your vehicle" — service-shop tone, not parts-desk.
- `LegalLayout.tsx` — hero + prose layout. **[STABLE]**

### Assets & SEO plumbing

- `public/sitemap.xml`, `public/robots.txt`. **[STABLE]** — need re-verification after any route add.
- Hero/about/project/workshop JPGs under `src/assets/`. **[STABLE]**

### Known cross-cutting issues

1. Contact form does not deliver email (server function not wired).
2. Placeholder phone in every surface, including JSON-LD.
3. Category card underline anchor broken (missing `relative`).
4. Mobile menu missing focus trap / Esc-to-close (accessibility).
5. WorkshopGallery CTA + copy mismatched to parts business.
6. No skip-to-content link; no `prefers-reduced-motion` guard on scale/pulse animations.
7. Fonts loaded via Google Fonts `<link>` — fine, but no `font-display: swap` control on our side; acceptable.

---

## [Part 2: Premium Agency Recommendations]

### Bug fixes (must-do)

- **Quote form delivery**: implement a `createServerFn` (`sendQuote`) that emails `info@crotteauautoparts.com` via Resend (or Lovable AI email), validated with Zod. Update success copy.
- **Replace placeholder phone** in `business.ts` with the real line (or hide the phone block until known).
- **Category card underline**: add `relative` to each `<Link>` so `absolute` decorations anchor.
- **WorkshopGallery re-copy**: replace "Book Service" → "Request a Quote"; rewrite intro to warehouse/fitment tone.
- **A11y**: add skip link, Esc-to-close on mobile drawer, focus-visible outlines, `motion-safe:` gating for `animate-pulse` and `duration-700 scale-105`.

### Premium 2026 layout upgrades

- **Bento hero + KPI band**: replace flat hero → 12-col bento (hero image tile, PartFinder card tile, live "in-stock this week" stat tile, hours/pickup tile). Preserve current `PartFinder` component.
- **Barely-there surfaces**: introduce two extra tokens — `--brand-fog` (very light neutral card) and `--brand-hairline` (1px `oklch(...)` border) — for whisper-thin cards. Retire heavy shadows on light sections; keep `--shadow-sunset` for the single primary CTA only.
- **Typographic system**: keep Space Grotesk / Inter / JetBrains Mono; introduce a display "kicker" scale (10/11/12px mono uppercase) as reusable class and tighten section titles to `text-5xl md:text-7xl` with `-tracking-[0.03em]`.
- **Category bento**: rework `/categories` from uniform 3-col to asymmetric bento (1 wide + 2 tall + 4 square) to signal editorial curation. Cards use hairline borders, hover lifts to `translate-y-[-2px]` with orange rule-in.
- **Micro-interactions** (all `motion-safe`, ≤200ms, GPU-only):
  - Header CTA magnetic hover (2px cursor-follow).
  - PartFinder select focus → hairline glow, not full ring.
  - Category card: kicker slides left 4px on hover; underline draws L→R.
  - CTA arrow: continuous 6px slide on hover, no bounce.
  - Section scroll-in: fade + 8px rise via `IntersectionObserver`, one-shot.
- **Testimonials**: convert to snap-scroll marquee on mobile; retain grid on desktop; add a mono "verified · location" chip.
- **Workshop bento**: keep 8/4 shape but add a small overlaid "spec card" (chip list) and a caption metric per tile.
- **Dark/light rhythm**: preserve alternating midnight/paper sections; add one true "light-on-light" section (paper → fog) mid-page so the eye rests.
- **AI-readable semantics**: audit for one `<h1>` per route, ensure `<section aria-labelledby>` pairs, add `itemScope` on `Organization` block in footer, add `Product` schema fragments per category page.

### SEO / performance polish

- Preload hero image (`<link rel="preload" as="image">`).
- Add `Product`/`OfferCatalog` JSON-LD on `/category/$slug`.
- Add breadcrumb JSON-LD on all deep routes.
- Verify LCP < 2.0s on 4G by sizing hero at max 1600w.

---

## [Part 3: Non-Destructive Step-by-Step Build Plan]

Each phase is isolated so [STABLE] elements from Part 1 remain untouched until later phases explicitly opt-in. No phase modifies a component that a later phase depends on without a compatibility shim.

### Phase A — Data & bugs (zero visual change)

A

1. Fix `business.ts` phone placeholder (or ask user for real number).

A

2. Add `relative` to category card `<Link>` in `/categories`.

A

3. WorkshopGallery: copy + CTA target only. No layout change.

A

4. Mobile drawer Esc/focus-trap + skip link. Accessible only, no visual regression.

Risk: none. Touches strings, one class, one keydown listener.

### Phase B — Contact form delivery (backend only)

B

1. Create `src/lib/quote.functions.ts` with `sendQuote` `createServerFn` (Zod-validated).

B

2. Configure Resend secret (or Lovable email) targeting `info@crotteauautoparts.com`.

B

3. Wire `QuoteForm.tsx` to call `useServerFn(sendQuote)`, keep analytics event, update success copy.

B

4. Add anti-spam: honeypot field + 3s min-time.

Risk: contained to QuoteForm + one new server fn. Form UI unchanged.

### Phase C — Design token expansion (additive)

C

1. Add `--brand-fog`, `--brand-hairline`, `--ease-luxe` in `styles.css`. Register in `@theme inline`.

C

2. Add utilities: `hairline`, `kicker`, `bento-tile`. All new classes — no existing class overwritten.

Risk: purely additive; nothing renders differently until Phase D uses them.

### Phase D — Bento reflow, page by page (opt-in per route)

D

1. `/` hero → bento hero. Keep `<PartFinder />` as-is (its API is stable).

D

2. `/categories` → asymmetric bento grid. Underlying `categories` data unchanged.

D

3. `/about` WorkshopGallery tile refinements (chip cards).

D

4. `/projects` → editorial 8/4 lead + row grid.

Each sub-step is its own PR-sized commit; the previous look is available in git history.

### Phase E — Micro-interactions (motion-safe)

E

1. `IntersectionObserver` fade/rise hook `useReveal()` in `src/hooks/`.

E

2. Apply to section headers only (no images/CTAs) to preserve LCP.

E

3. Magnetic header CTA and card hover polish.

Guarded by `motion-safe:` variants; users with reduced-motion see identical Phase D look.

### Phase F — SEO / schema hardening

F

1. Product / OfferCatalog JSON-LD on `/category/$slug`.

F

2. Breadcrumb JSON-LD on `/about`, `/projects`, `/categories`, `/category/$slug`, `/contact`.

F

3. Hero `<link rel=preload>` + image size audit.

F

4. Regenerate `sitemap.xml`.

### Phase G — Verification

G

1. Typecheck + build.

G

2. Playwright pass: home, categories, one category detail, contact submit (mocked), mobile drawer a11y.

G

3. Lighthouse: LCP, CLS, TBT, a11y.

G

4. Publish.

### Dependency map (proves non-destruction)

```text
A ── B (independent)
│
C ── D ── E
     │
     └── F (uses D's structure but not E's motion)

G verifies everything.
```

- Phase A/B do not touch styles.
- Phase C is additive — Phase D is the first phase that *renders* differently, and only where opted in.
- Phase E only augments Phase D via `motion-safe:`; disabling it restores Phase D.

Phase F is metadata only.