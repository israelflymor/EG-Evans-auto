import { createFileRoute, Link } from "@tanstack/react-router";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work — EG Evans Auto Services, Dahlonega GA" },
      {
        name: "description",
        content:
          "A look at recent repair, diagnostics, and maintenance work performed at EG Evans Auto Services in Dahlonega, Georgia.",
      },
      { property: "og:title", content: "Work — EG Evans Auto Services" },
      { property: "og:description", content: "Recent auto repair and diagnostic work." },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: project1 },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    img: project1,
    title: "Engine Bay Service",
    tag: "Repair",
    body: "Belt, hose, and sensor work performed with precision torque and a careful walk-through with the owner before pickup.",
  },
  {
    img: project2,
    title: "Brake System Overhaul",
    tag: "Safety",
    body: "Full pad, rotor, and caliper replacement on a daily-driven SUV — restored stopping power and pedal feel.",
  },
  {
    img: project3,
    title: "OBD-II Diagnostics",
    tag: "Diagnostics",
    body: "Traced an intermittent check-engine light to a failing sensor instead of swapping parts on guesswork.",
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="bg-brand-dark text-brand-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-accent font-heading text-[10px] tracking-widest uppercase mb-6 block">
            Recent Work
          </span>
          <h1 className="font-heading text-4xl md:text-6xl tracking-tighter mb-6 text-balance uppercase">
            What's been in the bay.
          </h1>
          <p className="text-brand-white/70 max-w-2xl text-lg leading-relaxed">
            A small selection of recent jobs from the shop.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h2 className="font-heading text-xl text-brand-dark mb-2 uppercase">{p.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-white mb-6 uppercase">
            Bring us yours.
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
