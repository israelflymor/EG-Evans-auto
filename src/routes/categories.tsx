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
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="bg-brand-paper">
      <section className="pt-40 pb-16 px-6 bg-brand-midnight text-brand-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 gradient-sunset" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
              Catalog
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight text-balance leading-[1.05]">
            Parts by category
          </h1>
          <p className="mt-6 text-brand-white/60 text-lg max-w-2xl">
            OEM-quality and aftermarket parts for cars, trucks, SUVs, and fleet vehicles. Can't find what you need? Request a quote and we'll source it.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-midnight/10">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group block p-10 bg-brand-white hover:bg-brand-midnight transition-colors duration-300"
            >
              <p className="font-mono text-[10px] text-brand-sunset tracking-[0.25em] mb-8">
                {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
              </p>
              <h2 className="font-display text-2xl mb-4 text-brand-midnight group-hover:text-brand-white transition-colors">
                {c.title}
              </h2>
              <p className="text-sm text-brand-midnight/65 group-hover:text-brand-white/65 leading-relaxed transition-colors">
                {c.body}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full gradient-sunset transition-all duration-500" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
