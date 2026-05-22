import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Quote — McKinney Plumbing Services LLC" },
      {
        name: "description",
        content:
          "Request a quote from McKinney Plumbing Services LLC. Statewide Pennsylvania plumbing contractor based in Peach Bottom.",
      },
      { property: "og:title", content: "Get a Quote — McKinney Plumbing Services LLC" },
      { property: "og:description", content: "Tell us about your plumbing project anywhere in Pennsylvania." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="py-24 px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <span className="text-brand-accent font-heading font-semibold text-xs tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark mb-6">
            Start a Quote
          </h1>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Share your project details and our estimating team will review and respond. The more specifics you can include (scope, timeline, property type), the faster we can get you a useful answer.
          </p>

          <div className="space-y-6 pt-8 border-t border-black/10">
            <div className="flex items-start gap-4">
              <svg className="size-5 text-brand-accent shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <address className="not-italic text-sm font-medium text-brand-dark leading-relaxed">
                508 Little Britain Church Road<br />
                Peach Bottom, PA 17563
              </address>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-1">
                Service Area
              </p>
              <p className="text-sm text-brand-dark">All of Pennsylvania</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
