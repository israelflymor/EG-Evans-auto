- Plan: Reuse the EG Evans Auto strategy for a new auto parts company site

## Goal

Build a second website — an auto parts company — using the same technical foundation, quality standards, SEO discipline, and conversion-tracking patterns from the current project, but with a fresh brand identity:

Name: Crotteau Auto parts Limited Liability Company

 Address:   28200 Bermont Road, Unit 16B,

City & State:   Punta Gorda, Fl,

Zip Code:   33982appropriate to an industrial parts business.

## What we will reuse


| Asset / Pattern                    | How it transfers                                                                                                          |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **TanStack Start + Lovable Cloud** | Same router, server functions, and backend model. No new framework decisions.                                             |
| **Single-source config**           | A new `src/config/business.ts` drives all copy, contact info, services, testimonials, and catalog data.                   |
| **Component architecture**         | Reuse `SiteHeader`, `SiteFooter`, `Testimonials`, lead form, legal layout, and gallery patterns; restyle where needed.    |
| **SEO Auto parts**                 | Per-route `head()` metadata, canonical links, `sitemap.xml`, `robots.txt`, schema.org JSON-LD in `__root.tsx`.            |
| **Analytics layer**                | Reuse `src/lib/analytics.ts` and wire the same events: form submit, phone/email click, CTA click, part search.            |
| **Legal pages**                    | Reuse `LegalLayout.tsx` and the Privacy / Terms / Cookies / Accessibility page shells; rewrite copy for the new business. |


## What will change

- **Brand identity**: New name, logo mark, color palette, and typography. The current site is "coastal luxury"; the new site should feel **precision industrial** — gunmetal, crisp grey paper, safety orange or electric blue accent, and a strong sans-serif headline font.
- **Business model**: Lead-generation auto repair → **auto parts discovery and quote requests**. The hero becomes a parts search/configurator instead of a service booking pitch.
- **Catalog data**: Replace the service list with a parts category structure (e.g., Brakes, Suspension, Engine, Electrical, Filters, Fluids, A/C, Accessories).
- **Imagery**: Generate industrial parts photography and warehouse/tooling visuals instead of service-bay lifestyle shots.

## Proposed site structure

```
/                  Home + parts search/configurator + featured categories + testimonials
/categories        Browse all part categories
/category/$slug    Category detail with relevant parts / brands
/about             Company story, warehouse/quality standards, team
/contact           Quote / parts request form with analytics tracking
/privacy           Privacy policy
/terms             Terms of service
/cookies           Cookie policy
/accessibility     Accessibility statement
/sitemap.xml       Auto-generated list of all routes
/robots.txt        Crawler instructions
```

## Visual direction

- **Background paper**: `#F3F4F6` cool light grey (respects the "crisp grey instead of white" preference).
- **Primary dark**: `#111827` near-black gunmetal.
- **Secondary surface**: `#1F2937` charcoal for cards/headers.
- **Accent**: `#F97316` safety orange or `#2563EB` electric blue — pick one and use it for CTAs, underline highlights, and iconography.
- **Headlines**: Bold geometric sans-serif (e.g., `Outfit` or `Space Grotesk`).
- **Body**: Clean sans-serif (e.g., `Inter` or `DM Sans`).
- **Mono / labels**: `JetBrains Mono` for part numbers, SKU labels, and technical metadata.
- **Mood**: Clean, technical, trustworthy, fast-shipping warehouse — not boutique luxury.

## Implementation steps

1. **Bootstrap the new project**
  - Remix the current project in Lovable OR create a fresh TanStack Start project and copy over the reusable files (`src/lib/analytics.ts`, `src/components/site/LegalLayout.tsx`, header/footer patterns, `public/sitemap.xml`, `public/robots.txt`, `src/router.tsx`, `src/start.ts`).
2. **Define the new business config**
  - Create a new `src/config/business.ts` with: company name, address, email, phone, hours, part categories, featured products/testimonials, and site URL.
3. **Build the design system**
  - Update `src/styles.css` with the new palette and font tokens.
  - Install chosen font packages and import them in the root.
  - Keep the same Tailwind v4 / CSS-variable pattern.
4. **Create page routes**
  - `src/routes/index.tsx`: hero with parts search/configurator, category grid, testimonials, CTA.
  - `src/routes/categories.tsx`: all categories.
  - `src/routes/category.$slug.tsx`: category detail.
  - `src/routes/about.tsx`: company story + warehouse gallery.
  - `src/routes/contact.tsx`: parts quote form.
  - Legal routes: privacy, terms, cookies, accessibility (reuse shells, rewrite copy).
5. **Adapt reusable components**
  - `SiteHeader` / `SiteFooter`: swap logo, nav links, and contact info from new config.
  - `Testimonials`: reuse the component; feed new testimonials from config.
  - Lead form: reuse quote-form pattern; retitle it as "Parts Quote Request".
  - Build a new `PartSearch` / `PartFinder` component for the hero.
6. **Generate new visuals**
  - Hero image: warehouse / organized parts shelves / close-up precision parts.
  - Category images: one per main part category.
  - About gallery: warehouse, quality-check, shipping/packing visuals.
7. **Wire analytics**
  - Reuse `src/lib/analytics.ts`.
  - Track: parts search submit, category click, quote form submit, phone/email clicks, CTA clicks.
8. **SEO + legal**
  - Write unique `head()` metadata for every route.
  - Update `public/sitemap.xml` with the new route list.
  - Verify `robots.txt` allows all public routes.
  - Add schema.org `Organization` / `AutoPartsStore` JSON-LD in `__root.tsx`.
9. **Email setup**
  - Connect Lovable Cloud email domain for the new business domain.
  - Scaffold the contact-form email route so quote requests reach the configured inbox.
10. **Test and publish**
  - Run typecheck/build.
    - Validate all routes, forms, analytics events, and legal links.
    - Publish and submit the new sitemap to Google Search Console.

## Deliverables

- Fully working auto parts company website.
- Reusable component library ready for future sites.
- SEO-ready pages with sitemap and robots.txt.
- Analytics event tracking for key conversions.
- Working contact/quote form email delivery.

## Next decision needed

Choose the final accent color and headline font so the design direction can be locked before implementation:

- Accent: **safety orange** (`#F97316`) or **electric blue** (`#2563EB`)?
- Headline font: **Outfit** or **Space Grotesk**?

Once you confirm, I can start building the new site.