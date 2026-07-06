import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${business.legalName}` },
      {
        name: "description",
        content: `Terms and conditions governing use of the ${business.legalName} website and services.`,
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="July 1, 2026"
    >
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By accessing or using the {business.legalName} website, you agree to
          these Terms & Conditions. If you do not agree, please discontinue use
          of the site.
        </p>
      </LegalSection>
      <LegalSection heading="2. Services">
        <p>
          Information presented on this site is for general reference. All service
          work is subject to written estimate, vehicle inspection, and mutual
          agreement prior to work being performed.
        </p>
      </LegalSection>
      <LegalSection heading="3. Quotes & Estimates">
        <p>
          Online quote requests are not binding contracts. Final pricing is
          confirmed after diagnostic inspection.
        </p>
      </LegalSection>
      <LegalSection heading="4. Warranties">
        <p>
          Warranty terms on parts and labor are provided per service and per
          manufacturer. Warranty details will be documented on your service
          invoice.
        </p>
      </LegalSection>
      <LegalSection heading="5. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, {business.legalName} is not
          liable for indirect, incidental, or consequential damages arising from
          use of this website.
        </p>
      </LegalSection>
      <LegalSection heading="6. Intellectual Property">
        <p>
          All content, imagery, and branding on this site is the property of{" "}
          {business.legalName} and may not be reproduced without written
          permission.
        </p>
      </LegalSection>
      <LegalSection heading="7. Governing Law">
        <p>
          These terms are governed by the laws of the State of{" "}
          {business.address.region === "GA" ? "Georgia" : business.address.region}
          , United States.
        </p>
      </LegalSection>
      <LegalSection heading="8. Contact">
        <p>Questions? Email {business.email}.</p>
      </LegalSection>
    </LegalLayout>
  );
}
