import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services — McKinney Plumbing Services LLC" },
      {
        name: "description",
        content:
          "Residential, commercial, and emergency plumbing services across Pennsylvania — repiping, water heaters, drain cleaning, and 24/7 response.",
      },
      { property: "og:title", content: "Plumbing Services — McKinney Plumbing Services LLC" },
      {
        property: "og:description",
        content: "Full-service plumbing for homes and businesses across Pennsylvania.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Residential Plumbing",
    body: "Installations, repairs, and remodels for single-family homes and multi-family residences. Fixtures, drains, supply lines, and full-system upgrades.",
  },
  {
    title: "Commercial Plumbing",
    body: "Mechanical infrastructure for retail, office, hospitality, and industrial facilities. Code-compliant installations and scheduled maintenance.",
  },
  {
    title: "Emergency Service",
    body: "Burst pipes, blockages, and major leaks. Rapid mobilization across Pennsylvania to minimize downtime and water damage.",
  },
  {
    title: "Water Heaters & Boilers",
    body: "Tank, tankless, and high-efficiency commercial boiler installation, replacement, and service.",
  },
  {
    title: "Drain & Sewer",
    body: "Camera inspection, hydro-jetting, and pipe restoration for residential and commercial drain systems.",
  },
  {
    title: "Repiping & Replacement",
    body: "Whole-house or whole-building repiping with modern materials. Phased work plans to keep occupants comfortable.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark text-brand-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-accent font-heading font-semibold text-xs tracking-widest uppercase mb-6 block">
            What We Do
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-balance">
            Plumbing Services Across Pennsylvania
          </h1>
          <p className="text-brand-white/70 max-w-2xl text-lg leading-relaxed">
            A full discipline list for property owners, facility managers, and general contractors working anywhere in the Commonwealth.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`p-10 ring-1 ring-black/5 ${i % 2 === 0 ? "bg-zinc-50" : "bg-zinc-100"}`}
            >
              <h2 className="font-heading text-xl font-semibold mb-3 text-brand-dark">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-white border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-muted-foreground mb-10">
            Describe the project and we'll route you to the right team.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-dark text-brand-white font-heading font-semibold px-12 py-5 hover:bg-brand-mid transition-colors uppercase tracking-widest text-sm"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
