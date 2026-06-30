import { testimonials } from "@/config/business";

type Props = {
  variant?: "light" | "dark";
  limit?: number;
};

export function Testimonials({ variant = "light", limit }: Props) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  const isDark = variant === "dark";

  return (
    <section
      className={`py-28 px-6 ${isDark ? "bg-brand-midnight" : "bg-brand-paper"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 gradient-sunset" />
            <span
              className={`font-mono text-[10px] tracking-[0.3em] uppercase ${
                isDark ? "text-brand-sunset" : "text-brand-midnight/60"
              }`}
            >
              Owner Reviews
            </span>
          </div>
          <h2
            className={`font-display text-4xl md:text-6xl tracking-tight text-balance leading-[1.05] ${
              isDark ? "text-brand-white" : "text-brand-midnight"
            }`}
          >
            What drivers <span className="italic text-gradient-sunset">are saying</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-midnight/10">
          {items.map((t) => (
            <figure
              key={t.name + t.date}
              className={`p-10 flex flex-col ${
                isDark ? "bg-brand-onyx" : "bg-brand-paper"
              }`}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < t.rating} />
                ))}
                <meta itemProp="reviewRating" content={String(t.rating)} />
              </div>
              <blockquote
                itemProp="reviewBody"
                className={`font-display text-xl leading-snug mb-8 flex-1 text-pretty ${
                  isDark ? "text-brand-white" : "text-brand-midnight"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption
                className={`border-t pt-5 ${
                  isDark ? "border-white/10" : "border-brand-midnight/10"
                }`}
              >
                <p
                  itemProp="author"
                  className={`font-display text-base ${
                    isDark ? "text-brand-white" : "text-brand-midnight"
                  }`}
                >
                  {t.name}
                </p>
                <p
                  className={`font-mono text-[10px] tracking-[0.2em] uppercase mt-1 ${
                    isDark ? "text-brand-white/50" : "text-brand-midnight/50"
                  }`}
                >
                  {t.vehicle} · {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`size-4 ${filled ? "text-brand-sunset-deep" : "text-brand-midnight/15"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.2 1.3 6L10 14.9l-5.4 3 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
    </svg>
  );
}
