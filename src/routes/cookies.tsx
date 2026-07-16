import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

const CANONICAL = `${business.siteUrl}/cookies`;

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: `Cookie Policy — ${business.legalName} | ${business.address.city}, ${business.address.region}` },
      {
        name: "description",
        content: `How ${business.legalName} uses cookies and similar technologies on our ${business.address.city}, ${business.address.region} auto service website, and how you can manage them.`,
      },
      {
        name: "keywords",
        content: `${business.legalName} cookie policy, auto repair website cookies, ${business.address.city} auto shop cookies, tracking preferences`,
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: `Cookie Policy — ${business.legalName}` },
      { property: "og:description", content: `How we use cookies on the ${business.legalName} website.` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Cookie Policy" updated="July 1, 2026">
      <LegalSection heading="1. What Are Cookies">
        <p>
          Cookies are small text files stored on your device to help websites
          remember information about your visit.
        </p>
      </LegalSection>
      <LegalSection heading="2. How We Use Cookies">
        <p>
          We use cookies for essential site functionality, analytics, and to
          improve the user experience. We do not use cookies for third-party
          advertising.
        </p>
      </LegalSection>
      <LegalSection heading="3. Managing Cookies">
        <p>
          You can control or disable cookies through your browser settings.
          Disabling cookies may limit some site functionality.
        </p>
      </LegalSection>
      <LegalSection heading="4. Contact">
        <p>Questions? Email {business.email}.</p>
      </LegalSection>
    </LegalLayout>
  );
}
