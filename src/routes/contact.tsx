import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Service — EG Evans Auto Services, Dahlonega GA" },
      {
        name: "description",
        content:
          "Request service or a quote from EG Evans Auto Services in Dahlonega, GA. Tell us about your vehicle and we'll get back to you.",
      },
      { property: "og:title", content: "Book Service — EG Evans Auto Services" },
      { property: "og:description", content: "Auto repair requests for drivers in Dahlonega and Lumpkin County, GA." },
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
          <span className="text-brand-accent font-heading text-[10px] tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h1 className="font-heading text-4xl md:text-5xl tracking-tight text-brand-dark mb-6 uppercase">
            Book a Service
          </h1>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Tell us about your vehicle and what's going on. The more detail you can give (year, make, model, symptoms), the faster we can give you a useful answer.
          </p>

          <div className="space-y-6 pt-8 border-t border-black/10">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Visit</p>
              <address className="not-italic text-sm font-medium text-brand-dark leading-relaxed">
                321 Waterloo Dr<br />
                Dahlonega, GA 30533
              </address>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Phone</p>
              <p className="text-sm text-brand-dark">(XXX) XXX-XXXX</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Email</p>
              <p className="text-sm text-brand-dark">hello@egevansauto.com</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Service Area</p>
              <p className="text-sm text-brand-dark">Dahlonega, Lumpkin County & North Georgia</p>
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
