import { createFileRoute, Link } from "@tanstack/react-router";
import { business, services } from "@/config/business";
import { PartFinder } from "@/components/site/PartFinder";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${business.legalName}` },
      {
        name: "description",
        content: `Auto repair, diagnostics, brakes, A/C, electrical and maintenance in ${business.address.city}, ${business.address.region}.`,
      },
      { property: "og:title", content: `Services — ${business.legalName}` },
      { property: "og:description", content: `Full-service auto care in ${business.address.city}, ${business.address.region}.` },
      { property: "og:url", content: `${business.siteUrl}/services` },
    ],
    links: [{ rel: "canonical", href: `${business.siteUrl}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-brand-midnight text-brand-white pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 size-[500px] gradient-sunset opacity-20 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 gradient-sunset" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
              Capabilities
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 text-balance leading-[0.95]">
            Concierge-grade <span className="italic text-gradient-sunset">auto care</span>.
          </h1>
          <p className="text-brand-white/70 max-w-2xl text-lg leading-relaxed">
            From routine maintenance to deeper diagnostics — the full menu of work we take on every day for drivers across {business.serviceArea.secondary}.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-white -mt-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <PartFinder variant="inline" />
        </div>
      </section>

      <section className="pb-28 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-midnight/10">
          {services.map((s, i) => (
            <article key={s.title} className="group p-10 bg-brand-white hover:bg-brand-midnight transition-colors duration-300 relative">
              <p className="font-mono text-[10px] text-brand-sunset tracking-[0.25em] mb-8">
                {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </p>
              <h2 className="font-display text-2xl mb-4 text-brand-midnight group-hover:text-brand-white transition-colors">
                {s.title}
              </h2>
              <p className="text-sm text-brand-midnight/65 group-hover:text-brand-white/65 leading-relaxed transition-colors">
                {s.body}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full gradient-sunset transition-all duration-500" />
            </article>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 bg-brand-midnight border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-brand-white mb-6 text-balance">
            Not sure what's wrong?
          </h2>
          <p className="text-brand-white/60 mb-10 text-lg">
            Describe the symptom and we'll let you know what we'd check first.
          </p>
          <Link
            to="/contact"
            className="inline-block gradient-sunset text-brand-midnight font-display px-12 py-5 hover:brightness-110 transition text-base"
            style={{ boxShadow: "var(--shadow-sunset)" }}
          >
            Book Service
          </Link>
        </div>
      </section>
    </>
  );
}
