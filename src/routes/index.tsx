import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about-team.jpg";
import { business, services, projects } from "@/config/business";
import { PartFinder } from "@/components/site/PartFinder";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${business.legalName} — Coastal Luxury Auto Care · ${business.address.city}, ${business.address.region}` },
      {
        name: "description",
        content: `Concierge-grade auto repair and diagnostics in ${business.address.city}, ${business.address.region}. Find parts and book service for any year/make/model.`,
      },
      { property: "og:title", content: `${business.legalName} — ${business.tagline}` },
      { property: "og:description", content: business.hero.sub },
      { property: "og:url", content: business.siteUrl },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: business.siteUrl }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <header className="relative min-h-[100vh] w-full flex flex-col justify-end bg-brand-midnight overflow-hidden">
        <img
          src={heroImg}
          alt={`Luxury black sports car on a Miami coastal boulevard at sunset — visual mood for ${business.legalName}`}
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/70 to-brand-midnight/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight/80 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 w-full pt-32 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 gradient-sunset" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
                {business.hero.eyebrow}
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-white leading-[0.95] tracking-tighter text-balance mb-8">
              <span>{business.hero.headlineLineOne}</span><br />
              <span className="italic text-gradient-sunset">{business.hero.headlineLineTwo}</span>
            </h1>
            <p className="text-brand-white/75 text-lg max-w-xl mb-10 leading-relaxed">
              {business.hero.sub}
            </p>
          </div>

          {/* Part Finder */}
          <div className="max-w-5xl">
            <PartFinder />
          </div>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="bg-brand-midnight border-y border-white/10 py-5 overflow-hidden">
        <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-3 px-6">
          {business.trustBadges.map((b, i) => (
            <span key={b} className="flex items-center gap-12">
              <span className="font-mono text-[11px] tracking-[0.25em] text-brand-white/70 uppercase">
                {b}
              </span>
              {i < business.trustBadges.length - 1 && (
                <span className="size-1 rounded-full bg-brand-sunset hidden sm:inline-block" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-sunset" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-midnight/60">
                Capabilities
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-brand-midnight text-balance leading-[1.05]">
              Full-service care. <span className="italic text-brand-midnight/50">No shortcuts.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-midnight/10">
            {services.slice(0, 6).map((s, i) => (
              <div
                key={s.title}
                className="group relative p-10 bg-brand-white hover:bg-brand-midnight transition-colors duration-300 cursor-default"
              >
                <p className="font-mono text-[10px] text-brand-sunset tracking-[0.25em] mb-8">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl mb-4 text-brand-midnight group-hover:text-brand-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-midnight/65 group-hover:text-brand-white/65 leading-relaxed transition-colors">
                  {s.body}
                </p>
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full gradient-sunset transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section className="bg-brand-midnight py-28 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <img
                src={aboutImg}
                alt={`Luxury auto service bay at ${business.legalName}`}
                width={1280}
                height={1600}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-8 -right-4 md:-right-8 gradient-sunset p-8 md:p-10 max-w-[280px]">
                <p className="font-display text-4xl text-brand-midnight leading-none">
                  Est. {business.established}
                </p>
                <p className="font-mono text-[10px] tracking-[0.25em] text-brand-midnight/80 uppercase mt-3">
                  {business.serviceArea.primary}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-sunset" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
                The Shop
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-white mb-8 text-balance leading-[1.05]">
              Owned and run by <span className="italic text-gradient-sunset">{business.owner}</span>.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed max-w-[56ch] mb-10 text-pretty">
              An independent, woman-owned shop on Waterloo Drive. The kind of care you'd want for your own family's vehicle — careful, transparent, and explained in plain English.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <Stat label="Service Area" value={business.serviceArea.primary} />
              <Stat label="Pricing" value="Quoted Up Front" />
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-10 font-mono text-[11px] tracking-[0.3em] uppercase text-brand-sunset hover:gap-5 transition-all"
            >
              Our Story
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-28 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-sunset" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-midnight/60">
                  Case Studies
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight text-brand-midnight leading-[1.05]">
                Recent Work
              </h2>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-3 group font-mono text-[11px] tracking-[0.3em] text-brand-midnight uppercase hover:text-brand-sunset-deep transition"
            >
              View All
              <svg className="size-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="font-display text-2xl text-brand-midnight mb-2">{p.title}</h3>
                <p className="text-sm text-brand-midnight/65 leading-relaxed">{p.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials variant="light" />

      {/* CTA */}
      <section className="relative py-28 px-6 bg-brand-midnight overflow-hidden">
        <div className="absolute inset-0 opacity-30 gradient-sunset blur-[120px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-brand-white mb-6 text-balance leading-[1.05]">
            Your vehicle deserves <span className="italic text-gradient-sunset">the standard</span>.
          </h2>
          <p className="text-brand-white/70 mb-12 max-w-2xl mx-auto text-lg">
            Tell us what's going on. We'll get back to you with a straightforward next step — no jargon, no upsell.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 gradient-sunset text-brand-midnight font-display px-12 py-5 hover:brightness-110 transition text-base"
            style={{ boxShadow: "var(--shadow-sunset)" }}
          >
            Book Service
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-brand-white font-display text-2xl">{value}</p>
      <p className="text-brand-white/45 text-[10px] uppercase tracking-[0.25em] font-mono mt-2">
        {label}
      </p>
    </div>
  );
}
