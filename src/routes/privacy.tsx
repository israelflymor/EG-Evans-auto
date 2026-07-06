import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${business.legalName}` },
      {
        name: "description",
        content: `Privacy policy for ${business.legalName}, explaining how we collect, use, and protect information.`,
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="July 1, 2026">
      <LegalSection heading="1. Overview">
        <p>
          {business.legalName} ("we", "us", or "our") respects your privacy. This
          policy describes what information we collect when you interact with our
          website and services, and how we use it.
        </p>
      </LegalSection>
      <LegalSection heading="2. Information We Collect">
        <p>
          We collect information you provide directly — such as your name, email,
          phone number, and vehicle details — when you submit a quote request or
          contact form. We also collect limited technical data (browser type,
          pages viewed) via standard analytics.
        </p>
      </LegalSection>
      <LegalSection heading="3. How We Use Information">
        <p>
          We use your information to respond to service inquiries, schedule
          appointments, and improve our website. We do not sell your personal
          information.
        </p>
      </LegalSection>
      <LegalSection heading="4. Cookies & Analytics">
        <p>
          Our site may use cookies and analytics tools to understand traffic and
          improve the user experience. You may disable cookies in your browser
          settings.
        </p>
      </LegalSection>
      <LegalSection heading="5. Data Retention">
        <p>
          We retain contact submissions for as long as reasonably necessary to
          service the request and to comply with legal obligations.
        </p>
      </LegalSection>
      <LegalSection heading="6. Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal
          information by contacting us at {business.email}.
        </p>
      </LegalSection>
      <LegalSection heading="7. Contact">
        <p>
          Questions about this policy? Email {business.email} or write to us at{" "}
          {business.address.street}, {business.address.city},{" "}
          {business.address.region} {business.address.postalCode}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
