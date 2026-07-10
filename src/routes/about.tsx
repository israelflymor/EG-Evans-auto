import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-team.jpg";
import { business } from "@/config/business";
import { Testimonials } from "@/components/site/Testimonials";
import { WorkshopGallery } from "@/components/site/WorkshopGallery";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${business.legalName}` },
      {
        name: "description",
        content: `${business.legalName} is an auto parts supplier in ${business.address.city}, ${business.address.region}. OEM and aftermarket parts, fitment verification, and fast local pickup.`,
      },
      { property: "og:title", content: `About — ${business.legalName}` },
      { property: "og:description", content: `Auto parts supplier in ${business.address.city}, ${business.address.region}.` },
      { property: "og:url", content: `${business.siteUrl}/about` },
      { property: "og:image", content: aboutImg },
    ],
    links: [{ rel: "canonical", href: `${business.siteUrl}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-brand-midnight text-brand-white pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 size-[500px] gradient-sunset opacity-20 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 gradient-sunset" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
                The Story
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter mb-8 text-balance leading-[0.95]">
              Precision parts, <span className="italic text-gradient-sunset">local speed</span>.
            </h1>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-6">
              {business.legalName} operates from {business.address.street} in {business.address.city}, {business.address.region}. We source OEM and aftermarket parts, verify fitment, and help everyone from DIYers to fleet managers get the right components fast.
            </p>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              We serve {business.serviceArea.secondary} with a focus on accuracy, fair pricing, and getting you back on the road.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutImg}
              alt={`Interior of ${business.legalName}`}
              width={1280}
              height={1600}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-brand-paper">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-midnight/10">
          {[
            { h: "Accurate", b: "We cross-reference OEM numbers and verify fitment before you buy — no guesswork parts swaps." },
            { h: "Fast", b: "Local stock when possible, nationwide sourcing when needed. Straightforward pickup and delivery options." },
            { h: "Local", b: `Rooted in ${business.address.city} and serving ${business.serviceArea.secondary} with personal service.` },
          ].map((v, i) => (
            <div key={v.h} className="group p-12 bg-brand-white hover:bg-brand-midnight transition-colors duration-300 relative">
              <p className="font-mono text-[10px] text-brand-sunset tracking-[0.25em] mb-8">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-3xl text-brand-midnight group-hover:text-brand-white mb-4 transition-colors">{v.h}</h2>
              <p className="text-sm text-brand-midnight/65 group-hover:text-brand-white/65 leading-relaxed transition-colors">{v.b}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full gradient-sunset transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      <WorkshopGallery />

      <Testimonials variant="light" />

      <section className="py-28 px-6 bg-brand-midnight border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-brand-white mb-8 text-balance">
            Need a part?
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
