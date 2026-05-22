import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — McKinney Plumbing Services LLC" },
      {
        name: "description",
        content:
          "McKinney Plumbing Services LLC is a Pennsylvania-based plumbing contractor headquartered in Peach Bottom, serving the entire Commonwealth.",
      },
      { property: "og:title", content: "About — McKinney Plumbing Services LLC" },
      { property: "og:description", content: "Pennsylvania-based plumbing contractor serving the Commonwealth." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: aboutImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark text-brand-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-accent font-heading font-semibold text-xs tracking-widest uppercase mb-6 block">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-balance">
              Rooted in Peach Bottom. Serving the Commonwealth.
            </h1>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-6">
              McKinney Plumbing Services LLC is a Pennsylvania-based plumbing contractor. We operate from 508 Little Britain Church Road in Peach Bottom, PA and take on residential and commercial work across the state.
            </p>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              The standards are the same on every job: precise execution, clean job sites, and clear communication from the first call through final walkthrough.
            </p>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="McKinney Plumbing Services professional"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { h: "Statewide", b: "Mobilized across all 67 Pennsylvania counties." },
            { h: "Disciplined", b: "Code-compliant installations. Clean job sites. Honest scopes." },
            { h: "Responsive", b: "Rapid dispatch for emergency work — minimal downtime." },
          ].map((v, i) => (
            <div
              key={v.h}
              className={`p-10 ring-1 ring-black/5 ${i % 2 === 0 ? "bg-zinc-50" : "bg-zinc-100"}`}
            >
              <h2 className="font-heading text-xl font-semibold text-brand-dark mb-3">{v.h}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-white border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-6">
            Ready to talk about your project?
          </h2>
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
