import { Link } from "@tanstack/react-router";
import { workshopTools, workshopStats } from "@/config/business";

const workshops = workshopTools;

export function WorkshopGallery() {
  return (
    <section className="py-28 px-6 bg-brand-midnight text-brand-white relative overflow-hidden">
      <div className="absolute top-0 right-0 size-[400px] gradient-sunset opacity-10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 gradient-sunset" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
                Workshop Excellence
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none text-balance">
              Inside the <span className="italic text-gradient-sunset">Laboratory</span>
            </h2>
          </div>
          <p className="max-w-sm text-brand-white/60 text-sm leading-relaxed border-l border-brand-white/10 pl-6">
            Our facility pairs heritage craftsmanship with modern diagnostic technology. We use precision instrumentation to maintain your vehicle to the highest standard.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[650px]">
          {/* Large Feature */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-sm bg-brand-onyx border border-white/5">
            <img
              src={workshops[0].img}
              alt={workshops[0].title}
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <span className="font-mono text-brand-sunset text-[10px] tracking-[0.3em] uppercase mb-2 block">
                {workshops[0].system}
              </span>
              <h3 className="font-display text-3xl mb-4">{workshops[0].title}</h3>
              <div className="flex flex-wrap gap-3">
                {workshops[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-white/10 text-[10px] text-brand-white/60 uppercase tracking-widest font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Side Stack */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {workshops.slice(1).map((item, idx) => (
              <div
                key={item.title}
                className="flex-1 relative group overflow-hidden rounded-sm bg-brand-onyx border border-white/5 min-h-[260px]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
                  <div>
                    <span className="font-mono text-brand-sunset text-[10px] tracking-[0.3em] uppercase mb-1 block">
                      {item.system}
                    </span>
                    <h4 className="font-display text-xl">{item.title}</h4>
                  </div>
                  <div className="text-brand-white/20 text-3xl font-display italic">
                    {String(idx + 2).padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Footer */}
        <div className="mt-8 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex flex-wrap gap-12">
            {business.workshopStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-mono text-[10px] text-brand-white/40 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
                <p className="text-brand-white text-sm font-medium">{stat.value}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-4 text-xs font-display tracking-[0.3em] uppercase text-brand-white hover:text-brand-sunset transition-colors"
          >
            Book Service
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
