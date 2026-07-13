import { createFileRoute, Link } from "@tanstack/react-router";
import { business, categories } from "@/config/business";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: `Parts Catalog — ${business.shortName}` },
      {
        name: "description",
        content: `Browse OEM and aftermarket auto parts categories at ${business.legalName} in ${business.address.city}, ${business.address.region}. Brakes, suspension, engine, electrical, filters, fluids, A/C, and accessories.`,
      },
      { property: "og:title", content: `Parts Catalog — ${business.shortName}` },
      {
        property: "og:description",
        content: `OEM and aftermarket auto parts in ${business.address.city}, ${business.address.region}.`,
      },
      { property: "og:url", content: `${business.siteUrl}/categories` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${business.siteUrl}/categories` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: business.siteUrl },
            { "@type": "ListItem", position: 2, name: "Catalog", item: `${business.siteUrl}/categories` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: `${business.shortName} — Parts Catalog`,
          url: `${business.siteUrl}/categories`,
          itemListElement: categories.map((c, i) => ({
            "@type": "OfferCatalog",
            position: i + 1,
            name: c.title,
            url: `${business.siteUrl}/category/${c.slug}`,
            description: c.body,
          })),
        }),
      },
    ],
  }),
  component: CategoriesPage,
});

// Bento layout weights — each category tile gets a col-span/row-span shape.
// Pattern: wide lead, two tall verticals, three squares, one wide footer.
const BENTO_SPANS = [
  "md:col-span-8 md:row-span-2", // 0 — lead
  "md:col-span-4 md:row-span-2", // 1 — tall
  "md:col-span-4",               // 2
  "md:col-span-4",               // 3
  "md:col-span-4",               // 4
  "md:col-span-6",               // 5 — wide
  "md:col-span-6",               // 6 — wide
] as const;

function CategoriesPage() {
  return (
    <div className="bg-brand-paper">
      {/* HERO */}
      <section
        className="pt-40 pb-20 px-6 bg-brand-midnight text-brand-white relative overflow-hidden"
        aria-labelledby="catalog-heading"
      >
        <div className="absolute -top-40 -right-40 size-[500px] gradient-sunset opacity-15 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 gradient-sunset" />
              <span className="kicker text-brand-sunset">
                Catalog · {String(categories.length).padStart(2, "0")} Systems
              </span>
            </div>
            <h1
              id="catalog-heading"
              className="font-display text-5xl md:text-7xl tracking-tighter text-balance leading-[0.95]"
            >
              Parts by <span className="italic text-gradient-sunset">system</span>.
            </h1>
            <p className="mt-6 text-brand-white/60 text-lg max-w-2xl">
              OEM-quality and aftermarket parts for cars, trucks, SUVs, and fleet vehicles across {business.serviceArea.secondary}. Can't find what you need? Request a quote and we'll source it.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 gradient-sunset text-brand-white font-display px-7 py-4 hover:brightness-110 transition text-sm"
              style={{ boxShadow: "var(--shadow-sunset)" }}
            >
              Request a Quote
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="py-24 px-6" aria-label="Parts categories">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[220px] gap-4">
            {categories.map((c, i) => {
              const span = BENTO_SPANS[i] ?? "md:col-span-4";
              const isLead = i === 0;
              return (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className={`bento-tile group flex flex-col justify-between p-8 md:p-10 ${span}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="kicker text-brand-sunset transition-transform duration-300 group-hover:-translate-x-1">
                      {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                    </span>
                    <svg
                      className="size-4 text-brand-midnight/30 group-hover:text-brand-sunset group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </div>
                  <div>
                    <h2
                      className={`font-display tracking-tight text-brand-midnight mb-3 text-balance ${
                        isLead ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                      }`}
                    >
                      {c.title}
                    </h2>
                    <p
                      className={`text-brand-midnight/60 leading-relaxed text-pretty ${
                        isLead ? "text-base max-w-md" : "text-sm"
                      }`}
                    >
                      {c.body}
                    </p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full gradient-sunset transition-all duration-500" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-brand-midnight py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="kicker text-brand-sunset mb-4">Don't see it?</p>
          <h2 className="font-display text-3xl md:text-5xl text-brand-white text-balance leading-tight mb-8">
            We source parts nationwide. Tell us the year, make, and model.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 gradient-sunset text-brand-white font-display px-10 py-4 hover:brightness-110 transition"
            style={{ boxShadow: "var(--shadow-sunset)" }}
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
