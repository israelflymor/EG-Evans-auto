import { createFileRoute, Link } from "@tanstack/react-router";
import { business, projects } from "@/config/business";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Recent Orders — ${business.legalName}` },
      {
        name: "description",
        content: `Recent parts orders and fitment work from ${business.legalName} in ${business.address.city}, ${business.address.region}. Brakes, suspension, engine, electrical, and more.`,
      },
      { property: "og:title", content: `Recent Orders — ${business.legalName}` },
      { property: "og:description", content: "Recent parts sourcing and fitment case studies." },
      { property: "og:url", content: `${business.siteUrl}/projects` },
      { property: "og:image", content: projects[0].img },
    ],
    links: [{ rel: "canonical", href: `${business.siteUrl}/projects` }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="bg-brand-midnight text-brand-white pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 size-[500px] gradient-sunset opacity-20 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 gradient-sunset" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
              Recent Orders
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 text-balance leading-[0.95]">
            Parts that <span className="italic text-gradient-sunset">keep moving</span>.
          </h1>
          <p className="text-brand-white/70 max-w-2xl text-lg leading-relaxed">
            A small selection of recent sourcing and fitment work from the warehouse.
          </p>
        </div>
      </section>

      <section className="py-28 px-6 bg-brand-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden mb-5">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-sunset-deep mb-2">
                {p.tag}
              </p>
              <h2 className="font-display text-2xl text-brand-midnight mb-2">{p.title}</h2>
              <p className="text-sm text-brand-midnight/65 leading-relaxed">{p.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 bg-brand-midnight border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-brand-white mb-8 text-balance">
            Tell us what you need
          </h2>
          <Link
            to="/contact"
            className="inline-block gradient-sunset text-brand-white font-display px-12 py-5 hover:brightness-110 transition text-base"
            style={{ boxShadow: "var(--shadow-sunset)" }}
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
