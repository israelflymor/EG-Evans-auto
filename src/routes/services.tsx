import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Auto Repair Services — EG Evans Auto Services, Dahlonega GA" },
      {
        name: "description",
        content:
          "General auto repair, diagnostics, brakes, maintenance, and more in Dahlonega, GA. Honest service for drivers across Lumpkin County.",
      },
      { property: "og:title", content: "Auto Repair Services — EG Evans Auto Services" },
      {
        property: "og:description",
        content: "Full-service auto repair in Dahlonega, GA.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Diagnostics",
    body: "OBD-II scanning, check-engine investigations, electrical fault tracing, and pre-purchase inspections.",
  },
  {
    title: "Brakes & Suspension",
    body: "Pads, rotors, calipers, shocks, struts, and alignment-related work. Safety-critical repairs done right.",
  },
  {
    title: "Oil & Maintenance",
    body: "Conventional, synthetic-blend, and full-synthetic oil services. Filters, fluids, and manufacturer-interval upkeep.",
  },
  {
    title: "Engine Repair",
    body: "Belts, hoses, water pumps, sensors, timing components, and gasket service for most makes and models.",
  },
  {
    title: "Heating & A/C",
    body: "A/C recharge, leak detection, blower and compressor service, plus heater core diagnostics.",
  },
  {
    title: "Electrical & Battery",
    body: "Battery testing and replacement, alternator and starter service, and electrical-system troubleshooting.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark text-brand-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-accent font-heading text-[10px] tracking-widest uppercase mb-6 block">
            What We Do
          </span>
          <h1 className="font-heading text-4xl md:text-6xl tracking-tighter mb-6 text-balance uppercase">
            Auto Repair in Dahlonega, GA
          </h1>
          <p className="text-brand-white/70 max-w-2xl text-lg leading-relaxed">
            From routine maintenance to deeper diagnostics, here's the work we take on every day for drivers across Lumpkin County.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`p-10 ring-1 ring-black/5 ${i % 2 === 0 ? "bg-zinc-50" : "bg-zinc-100"}`}
            >
              <p className="text-brand-accent font-heading text-xs mb-4">0{i + 1}</p>
              <h2 className="font-heading text-xl mb-3 text-brand-dark uppercase">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-white mb-6 uppercase">
            Not sure what's wrong?
          </h2>
          <p className="text-brand-white/60 mb-10">
            Describe the symptom and we'll let you know what we'd check first.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-accent text-brand-dark font-heading px-12 py-5 hover:bg-brand-accent/90 transition-colors uppercase tracking-widest text-sm"
          >
            Book Service
          </Link>
        </div>
      </section>
    </>
  );
}
