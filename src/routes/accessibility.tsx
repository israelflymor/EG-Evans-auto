import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: `Accessibility Statement — ${business.legalName}` },
      {
        name: "description",
        content: `${business.legalName} accessibility statement and commitments.`,
      },
      { name: "robots", content: "index,follow" },
    ],
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
