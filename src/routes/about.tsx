import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EG Evans Auto Services, Dahlonega GA" },
      {
        name: "description",
        content:
          "EG Evans Auto Services LLC is a woman-owned auto repair shop in Dahlonega, Georgia, founded by Elizabeth Evans.",
      },
      { property: "og:title", content: "About — EG Evans Auto Services" },
      { property: "og:description", content: "Woman-owned auto repair shop in Dahlonega, GA." },
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
            <span className="text-brand-accent font-heading text-[10px] tracking-widest uppercase mb-6 block">
              About
            </span>
            <h1 className="font-heading text-4xl md:text-6xl tracking-tighter mb-8 text-balance uppercase">
              An honest shop in Dahlonega.
            </h1>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-6">
              EG Evans Auto Services LLC was founded by Elizabeth Evans and operates from 321 Waterloo Drive in Dahlonega, Georgia. We're a small, independent shop focused on doing the right work, charging a fair price, and explaining things in plain English.
            </p>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              We serve drivers across Lumpkin County and North Georgia — from daily commuters to weekend trucks and everything in between.
            </p>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="Elizabeth Evans, owner of EG Evans Auto Services"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { h: "Honest", b: "Straightforward quotes. No upsell games. We tell you what's actually needed." },
            { h: "Careful", b: "Methodical diagnostics before parts replacement — we find the real problem first." },
            { h: "Local", b: "Independent, woman-owned, and rooted in the Dahlonega community." },
          ].map((v, i) => (
            <div
              key={v.h}
              className={`p-10 ring-1 ring-black/5 ${i % 2 === 0 ? "bg-zinc-50" : "bg-zinc-100"}`}
            >
              <p className="text-brand-accent font-heading text-xs mb-4">0{i + 1}</p>
              <h2 className="font-heading text-xl text-brand-dark mb-3 uppercase">{v.h}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-white mb-6 uppercase">
            Ready to bring it in?
          </h2>
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
