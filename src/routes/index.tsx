import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about-team.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EG Evans Auto Services — Auto Repair in Dahlonega, GA" },
      {
        name: "description",
        content:
          "Honest, professional auto repair in Dahlonega, Georgia. General service, diagnostics, brakes, and maintenance for drivers across Lumpkin County.",
      },
      { property: "og:title", content: "EG Evans Auto Services — Dahlonega, GA" },
      {
        property: "og:description",
        content: "General auto repair and diagnostics in Dahlonega, GA.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Diagnostics",
    body: "Check-engine lights, intermittent issues, and pre-purchase inspections. We trace the actual problem before quoting work.",
  },
  {
    title: "General Repair",
    body: "Brakes, suspension, belts, batteries, starters, and the everyday wear-and-tear that keeps your vehicle on the road.",
  },
  {
    title: "Scheduled Maintenance",
    body: "Oil changes, fluid flushes, tune-ups, and manufacturer-interval service to extend the life of your vehicle.",
  },
];

const projects = [
  { img: project1, title: "Engine Service", tag: "Repair", caption: "Precision torque work and engine bay diagnostics." },
  { img: project2, title: "Brake Overhaul", tag: "Safety", caption: "Pad, rotor and caliper replacement done right." },
  { img: project3, title: "OBD Diagnostics", tag: "Diagnostics", caption: "Reading the codes and finding the real cause." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <header className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full flex flex-col justify-end bg-brand-dark overflow-hidden">
        <img
          src={heroImg}
          alt="Vehicle on a hydraulic lift inside EG Evans Auto Services garage in Dahlonega, GA"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/10" />

        <div className="relative max-w-7xl mx-auto px-6 w-full pb-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-accent text-brand-dark font-heading text-[10px] tracking-widest uppercase px-3 py-1.5 mb-6">
              Dahlonega · Lumpkin County
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl text-brand-white leading-none tracking-tighter text-balance mb-8 uppercase">
              Straight Talk.<br />Honest Repair.
            </h1>
            <p className="text-brand-white/70 text-lg max-w-xl mb-10">
              EG Evans Auto Services keeps North Georgia drivers on the road with quality general auto repair, fair diagnostics, and a job done right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-accent text-brand-dark font-heading text-sm px-8 py-4 hover:bg-brand-accent/90 transition-transform active:scale-95 text-center uppercase tracking-wider"
              >
                Book Service
              </Link>
              <Link
                to="/services"
                className="border border-brand-white/30 text-brand-white font-heading text-sm px-8 py-4 hover:bg-white/5 transition-transform active:scale-95 text-center uppercase tracking-wider"
              >
                What We Do
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICE AREA BAND */}
      <div className="bg-brand-accent py-4 overflow-hidden">
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-2 px-6">
          <span className="font-heading text-xs tracking-widest text-brand-dark uppercase">Family Owned</span>
          <span className="size-1.5 rounded-full bg-brand-dark" />
          <span className="font-heading text-xs tracking-widest text-brand-dark uppercase">Honest Quotes</span>
          <span className="size-1.5 rounded-full bg-brand-dark" />
          <span className="font-heading text-xs tracking-widest text-brand-dark uppercase">Dahlonega, GA</span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <span className="text-brand-accent font-heading text-[10px] tracking-widest uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight text-brand-dark text-balance uppercase">
              The work that keeps you moving.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group p-10 ring-1 ring-black/5 hover:bg-brand-dark transition-colors ${
                  i % 2 === 0 ? "bg-zinc-50" : "bg-zinc-100"
                }`}
              >
                <p className="text-brand-accent font-heading text-xs mb-6">0{i + 1}</p>
                <h3 className="font-heading text-xl mb-3 text-brand-dark group-hover:text-brand-white transition-colors uppercase">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-600 group-hover:text-brand-white/70 leading-relaxed transition-colors">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section className="bg-brand-dark py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative">
            <img
              src={aboutImg}
              alt="Elizabeth Evans, owner of EG Evans Auto Services in Dahlonega, GA"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-accent p-8 md:p-12 hidden md:block">
              <p className="font-heading text-5xl text-brand-dark leading-none">GA</p>
              <p className="font-heading text-[10px] tracking-widest text-brand-dark uppercase mt-2">
                North Georgia
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-brand-accent font-heading text-[10px] tracking-widest uppercase mb-6 block">
              About the shop
            </span>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight text-brand-white mb-8 text-balance uppercase">
              Owned and run by Elizabeth Evans.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed max-w-[56ch] mb-10 text-pretty">
              EG Evans Auto Services is an independent, woman-owned auto repair shop on Waterloo Drive in Dahlonega. We do the kind of work you'd want for your own family's vehicle — careful, honest, and explained in plain English.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-brand-white font-heading text-2xl">Local</p>
                <p className="text-brand-white/50 text-[10px] uppercase tracking-widest mt-1">Lumpkin County</p>
              </div>
              <div>
                <p className="text-brand-white font-heading text-2xl">Honest</p>
                <p className="text-brand-white/50 text-[10px] uppercase tracking-widest mt-1">Quotes Up Front</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight text-brand-dark uppercase">
              Recent Work
            </h2>
            <Link
              to="/projects"
              className="flex items-center gap-2 group text-xs font-heading tracking-widest text-brand-dark uppercase"
            >
              View All
              <svg className="size-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="space-y-4">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-accent font-heading mb-1">
                    {p.tag}
                  </p>
                  <h3 className="font-heading text-brand-dark uppercase">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="py-24 px-6 bg-brand-dark text-brand-white border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-brand-white mb-6 uppercase">
            Got a car that needs attention?
          </h2>
          <p className="text-brand-white/60 mb-10 max-w-2xl mx-auto text-lg">
            Tell us what's going on. We'll get back to you with a straightforward next step.
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
