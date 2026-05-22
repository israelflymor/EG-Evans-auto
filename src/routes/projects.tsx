import { createFileRoute, Link } from "@tanstack/react-router";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — McKinney Plumbing Services LLC" },
      {
        name: "description",
        content:
          "Recent residential and commercial plumbing projects completed by McKinney Plumbing Services across Pennsylvania.",
      },
      { property: "og:title", content: "Projects — McKinney Plumbing Services LLC" },
      { property: "og:description", content: "Recent plumbing projects across Pennsylvania." },
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
    title: "Harrisburg Logistics Hub",
    tag: "Industrial Retrofit",
    body: "Complete main-line repiping across a multi-bay logistics facility, including supply, drainage, and high-volume fixture replacement.",
  },
  {
    img: project2,
    title: "The Point Multi-Family",
    tag: "Residential Complex",
    body: "220-unit fixture deployment and rough-in coordination for a new-construction multi-family development.",
  },
  {
    img: project3,
    title: "Lancaster Health Center",
    tag: "Critical Response",
    body: "Emergency boiler restoration and hot-water system overhaul executed without interrupting clinical operations.",
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="bg-brand-dark text-brand-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-accent font-heading font-semibold text-xs tracking-widest uppercase mb-6 block">
            Recent Operations
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-balance">
            Projects We've Delivered
          </h1>
          <p className="text-brand-white/70 max-w-2xl text-lg leading-relaxed">
            A sample of recent residential and commercial work across the Commonwealth of Pennsylvania.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h2 className="font-heading text-xl font-semibold text-brand-dark mb-2">{p.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-white border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-6">
            Bring us your project.
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
