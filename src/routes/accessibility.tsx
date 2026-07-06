import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

const CANONICAL = `${business.siteUrl}/accessibility`;

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: `Accessibility Statement — ${business.legalName} | ${business.address.city}, ${business.address.region}` },
      {
        name: "description",
        content: `${business.legalName} accessibility statement: our WCAG 2.1 AA commitments, ongoing improvements, and how to report barriers on our ${business.address.city}, ${business.address.region} auto service website.`,
      },
      {
        name: "keywords",
        content: `${business.legalName} accessibility, WCAG 2.1 AA, auto repair accessible website, ${business.address.city} accessibility statement`,
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: `Accessibility Statement — ${business.legalName}` },
      { property: "og:description", content: `${business.legalName} accessibility commitments and how to report barriers.` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Accessibility Statement"
      updated="July 1, 2026"
    >
      <LegalSection heading="1. Our Commitment">
        <p>
          {business.legalName} is committed to making our website accessible to
          the widest possible audience, in line with WCAG 2.1 AA guidelines.
        </p>
      </LegalSection>
      <LegalSection heading="2. Ongoing Effort">
        <p>
          We continually evaluate and improve accessibility across our site,
          including keyboard navigation, color contrast, and screen-reader
          support.
        </p>
      </LegalSection>
      <LegalSection heading="3. Feedback">
        <p>
          If you encounter an accessibility barrier, please email {business.email}{" "}
          so we can address it promptly.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
