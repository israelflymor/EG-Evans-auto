import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about-team.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "McKinney Plumbing Services LLC — Pennsylvania Plumbing Contractor" },
      {
        name: "description",
        content:
          "Residential & commercial plumbing across Pennsylvania. Based in Peach Bottom, McKinney Plumbing Services LLC serves the entire Commonwealth.",
      },
      { property: "og:title", content: "McKinney Plumbing Services LLC" },
      {
        property: "og:description",
        content: "Statewide Pennsylvania plumbing contractor. Residential, commercial, and emergency service.",
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
    title: "Commercial Infrastructure",
    body: "Large-scale mechanical systems for industrial parks, retail centers, and multi-tenant facilities across PA.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: "Residential Systems",
    body: "Full-scale installations, repairs, and maintenance for homes and multi-family housing.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    title: "Emergency Response",
    body: "Rapid deployment for critical system failures, burst pipes, and large-scale leaks.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

const projects = [
  { img: project1, title: "Harrisburg Logistics Hub", tag: "Industrial Retrofit", caption: "Complete main-line repiping" },
  { img: project2, title: "The Point Multi-Family", tag: "Residential Complex", caption: "220-unit fixture deployment" },
  { img: project3, title: "Lancaster Health Center", tag: "Critical Response", caption: "Emergency boiler restoration" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <header className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full flex flex-col justify-end bg-brand-dark overflow-hidden">
        <img
          src={heroImg}
          alt="Industrial copper plumbing pipes in a Pennsylvania mechanical room"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/20" />

        <div className="relative max-w-7xl mx-auto px-6 w-full pb-24">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-semibold text-brand-white leading-none tracking-tighter text-balance mb-8">
              THE STANDARD<br />IN KEYSTONE<br />PLUMBING.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-accent text-brand-dark font-heading font-semibold text-sm px-8 py-4 ring-1 ring-brand-accent hover:bg-brand-accent/90 transition-transform active:scale-95 text-center uppercase tracking-wider"
              >
                Start a Project
              </Link>
              <Link
                to="/services"
                className="border border-brand-white/30 text-brand-white font-heading font-semibold text-sm px-8 py-4 hover:bg-white/5 transition-transform active:scale-95 text-center uppercase tracking-wider"
              >
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-white to-transparent" />
        </div>
      </header>

      {/* SERVICE AREA BAND */}
      <div className="bg-brand-accent py-4 overflow-hidden whitespace-nowrap border-y border-black/5">
        <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-2 px-6">
          <span className="font-heading font-bold text-sm tracking-widest text-brand-dark uppercase">Serving all of Pennsylvania</span>
          <span className="size-1.5 rounded-full bg-brand-dark" />
          <span className="font-heading font-bold text-sm tracking-widest text-brand-dark uppercase">Peach Bottom Based</span>
          <span className="size-1.5 rounded-full bg-brand-dark" />
          <span className="font-heading font-bold text-sm tracking-widest text-brand-dark uppercase">Full-State Mobile Units</span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-brand-dark mb-4 text-balance">
              Core Disciplines
            </h2>
            <p className="text-muted-foreground max-w-[56ch] text-pretty">
              High-capacity mechanical solutions for residential complexes, commercial developments, and emergency statewide response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group p-10 ring-1 ring-black/5 hover:bg-brand-dark transition-colors ${
                  i % 2 === 0 ? "bg-zinc-50" : "bg-zinc-100"
                }`}
              >
                <div className="text-brand-accent mb-6 shrink-0">
                  <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-brand-dark group-hover:text-brand-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-500 group-hover:text-brand-white/60 leading-relaxed transition-colors">
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
              alt="McKinney Plumbing Services professional in front of service van"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-accent p-8 md:p-12 hidden md:block">
              <p className="font-heading font-black text-6xl text-brand-dark leading-none">PA</p>
              <p className="font-heading font-semibold text-xs tracking-widest text-brand-dark uppercase mt-2">
                Statewide Force
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-brand-accent font-heading font-semibold text-xs tracking-widest uppercase mb-6 block">
              Our Pedigree
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-brand-white mb-8 text-balance">
              Rooted in Peach Bottom. Serving the Commonwealth.
            </h2>
            <p className="text-brand-white/60 text-lg leading-relaxed max-w-[56ch] mb-10 text-pretty">
              McKinney Plumbing Services LLC moves with the speed of a local shop and carries the logistical weight of a statewide contractor. From single-home repairs to large commercial systems, we bring the same disciplined craftsmanship to every job.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-brand-white font-heading font-semibold text-2xl">67</p>
                <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">Counties Covered</p>
              </div>
              <div>
                <p className="text-brand-white font-heading font-semibold text-2xl">Rapid</p>
                <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">Dispatch Protocol</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-brand-dark">
              Recent Operations
            </h2>
            <Link
              to="/projects"
              className="flex items-center gap-2 group text-sm font-heading font-semibold tracking-wide text-brand-dark uppercase"
            >
              View All Case Studies
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
                  className="w-full aspect-[4/3] object-cover rounded-sm"
                />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-accent font-bold mb-1">
                    {p.tag}
                  </p>
                  <h3 className="font-heading font-semibold text-brand-dark">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="py-24 px-6 bg-brand-white border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark mb-6">
            Have a project in Pennsylvania?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            Tell us about the scope. Our estimating team will review your specs and respond with a clear next step.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-dark text-brand-white font-heading font-semibold px-12 py-5 hover:bg-brand-mid transition-colors uppercase tracking-widest text-sm"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
