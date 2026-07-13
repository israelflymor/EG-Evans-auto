import { createFileRoute, Link } from "@tanstack/react-router";
import { business, categories, type CategorySlug } from "@/config/business";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ params, loaderData }) => {
    const category = loaderData?.category;
    const title = category
      ? `${category.title} — Parts Catalog · ${business.shortName}`
      : `Category — ${business.shortName}`;
    const description = category
      ? `${category.title} parts at ${business.legalName} in ${business.address.city}, ${business.address.region}. ${category.body}`
      : `Browse auto parts categories at ${business.legalName}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `${business.siteUrl}/category/${params.slug as CategorySlug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `${business.siteUrl}/category/${params.slug as CategorySlug}` }],
      scripts: category
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: business.siteUrl },
                  { "@type": "ListItem", position: 2, name: "Catalog", item: `${business.siteUrl}/categories` },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: category.title,
                    item: `${business.siteUrl}/category/${category.slug}`,
                  },
                ],
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "OfferCatalog",
                name: `${category.title} — ${business.shortName}`,
                url: `${business.siteUrl}/category/${category.slug}`,
                description: category.body,
                provider: {
                  "@type": "AutoPartsStore",
                  name: business.legalName,
                  url: business.siteUrl,
                },
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: CategoryNotFound,
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <div className="bg-brand-paper">
      <section className="pt-40 pb-16 px-6 bg-brand-midnight text-brand-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 gradient-sunset" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
              {category.title}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight text-balance leading-[1.05]">
            {category.title} parts
          </h1>
          <p className="mt-6 text-brand-white/60 text-lg max-w-2xl">{category.body}</p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 gradient-sunset text-brand-white font-display px-8 py-4 hover:brightness-110 transition"
            >
              Request a quote
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-brand-midnight mb-6">How it works</h2>
          <ol className="space-y-6 text-brand-midnight/80">
            <li className="flex gap-4">
              <span className="font-mono text-brand-sunset">01</span>
              <span>Tell us your year, make, and model.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-brand-sunset">02</span>
              <span>We cross-reference OEM and aftermarket options for {category.title.toLowerCase()}.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-brand-sunset">03</span>
              <span>You get availability, pricing, and pickup or delivery options.</span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

function CategoryNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="bg-brand-paper min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-4xl text-brand-midnight mb-4">Category not found</h1>
      <p className="text-brand-midnight/60 mb-8">We couldn't find a category for &quot;{slug}&quot;.</p>
      <Link to="/categories" className="gradient-sunset text-brand-white font-display px-8 py-4 hover:brightness-110 transition">
        Browse categories
      </Link>
    </div>
  );
}
