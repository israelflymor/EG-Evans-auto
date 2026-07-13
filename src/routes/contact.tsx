import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/QuoteForm";
import { business, hasPhone } from "@/config/business";
import { trackContactClick } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Request a Quote — ${business.legalName}` },
      {
        name: "description",
        content: `Request a parts quote from ${business.legalName} in ${business.address.city}, ${business.address.region}. Tell us your year, make, model, and what you need and we'll check fitment and pricing.`,
      },
      { property: "og:title", content: `Request a Quote — ${business.legalName}` },
      { property: "og:description", content: `Parts quote requests for drivers and fleets in ${business.serviceArea.secondary}.` },
      { property: "og:url", content: `${business.siteUrl}/contact` },
    ],
    links: [{ rel: "canonical", href: `${business.siteUrl}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-brand-midnight text-brand-white pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 size-[500px] gradient-sunset opacity-20 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 gradient-sunset" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
              Contact
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl tracking-tighter mb-6 text-balance leading-[0.95]">
            Let's find your <span className="italic text-gradient-sunset">part</span>.
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-paper">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <p className="text-brand-midnight/65 mb-10 leading-relaxed">
              Tell us your year, make, model, and what you're looking for. The more detail you give (part number, symptoms, brand preference), the faster we can check fitment and pricing.
            </p>

            <div className="space-y-8 pt-8 border-t border-brand-midnight/10">
              <InfoBlock label="Visit">
                <address className="not-italic text-sm font-medium text-brand-midnight leading-relaxed">
                  {business.address.street}<br />
                  {business.address.city}, {business.address.region} {business.address.postalCode}
                </address>
              </InfoBlock>
              {hasPhone && (
                <InfoBlock label="Phone">
                  <a
                    href={business.phoneHref}
                    onClick={() => trackContactClick("phone", business.phoneDisplay)}
                    className="text-sm text-brand-midnight hover:text-brand-sunset-deep transition"
                  >
                    {business.phoneDisplay}
                  </a>
                </InfoBlock>
              )}
              <InfoBlock label="Email">
                <a
                  href={`mailto:${business.email}`}
                  onClick={() => trackContactClick("email", business.email)}
                  className="text-sm text-brand-midnight hover:text-brand-sunset-deep transition"
                >
                  {business.email}
                </a>
              </InfoBlock>
              <InfoBlock label="Hours">
                <ul className="space-y-1.5 text-sm text-brand-midnight">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span className="text-brand-midnight/50">{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoBlock>
              <InfoBlock label="Service Area">
                <p className="text-sm text-brand-midnight">{business.serviceArea.primary} · {business.serviceArea.secondary}</p>
              </InfoBlock>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-brand-midnight/50 mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}
