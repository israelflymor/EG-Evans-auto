import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: `Cookie Policy — ${business.legalName}` },
      {
        name: "description",
        content: `Cookie policy for ${business.legalName}.`,
      },
      { name: "robots", content: "index,follow" },
    ],
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
