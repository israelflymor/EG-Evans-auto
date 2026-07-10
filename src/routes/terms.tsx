import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

const CANONICAL = `${business.siteUrl}/terms`;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `SMS Terms of Service — ${business.legalName} | ${business.address.city}, ${business.address.region}` },
      {
        name: "description",
        content: `SMS Terms of Service for ${business.legalName}: consent, opt-out (STOP), HELP instructions, carrier disclaimers, and messaging rates for our ${business.address.city}, ${business.address.region} auto parts texts.`,
      },
      {
        name: "keywords",
        content: `${business.legalName} terms, SMS terms of service, auto parts terms, ${business.address.city} auto parts terms, message and data rates, STOP opt out`,
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: `SMS Terms of Service — ${business.legalName}` },
      { property: "og:description", content: `Terms governing SMS communications and parts inquiries with ${business.legalName}.` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const site = business.siteUrl;

  return (
    <LegalLayout
      eyebrow="Legal"
      title="SMS Terms of Service"
      updated="July 3, 2026"
    >
      <p>
        {business.legalName} provides alerts and updates to subscribers regarding
        parts inquiries, order updates, quote requests, parts
        availability, pickup notifications, customer support communications,
        promotional offers, and related automotive parts services.
      </p>

      <LegalSection heading="1. SMS Consent">
        <p>
          When you opt in to our SMS messaging service, we will send you a text
          message to confirm your subscription. By subscribing, you agree to
          receive recurring automated and non-automated text messages from{" "}
          {business.legalName}.
        </p>
      </LegalSection>

      <LegalSection heading="2. Opt-Out Instructions">
        <p>
          You can cancel the SMS service at any time by texting <strong>STOP</strong>{" "}
          to our messaging number.
        </p>
        <p>
          After you send the SMS message "STOP" to us, we will send a
          confirmation message indicating that you have been unsubscribed. After
          this, you will no longer receive SMS messages from us.
        </p>
        <p>
          If you wish to rejoin, simply opt in again through our website or
          other approved enrollment methods, and we will resume sending SMS
          messages to you.
        </p>
      </LegalSection>

      <LegalSection heading="3. Help Instructions">
        <p>
          If at any time you need assistance, text <strong>HELP</strong> to our
          messaging number.
        </p>
        <p>
          After you send the SMS message "HELP," we will respond with
          instructions on how to use our service and how to unsubscribe.
        </p>
        <p>You may also contact our support team at:</p>
        <p>
          Email: {business.email}
          <br />
          Website: {site}
        </p>
      </LegalSection>

      <LegalSection heading="4. Carrier Disclaimer">
        <p>Participating carriers include major U.S. wireless carriers.</p>
        <p>Carriers are not liable for delayed or undelivered messages.</p>
        <p>
          Message delivery may be subject to effective transmission from your
          mobile service provider and is not guaranteed by {business.legalName}.
        </p>
      </LegalSection>

      <LegalSection heading="5. Message and Data Rates">
        <p>
          Message and data rates may apply for any messages sent to you from us
          and to us from you.
        </p>
        <p>
          Message frequency varies depending on your interaction with our
          services, quote requests, order status updates, customer support
          communications, and promotional preferences.
        </p>
        <p>
          For questions regarding your text messaging or data plan, please
          contact your wireless carrier.
        </p>
      </LegalSection>

      <LegalSection heading="6. Privacy">
        <p>Your privacy is important to us.</p>
        <p>
          Information collected through our SMS program is subject to our
          Privacy Policy. We do not sell, rent, or share your mobile phone
          number with third parties for their marketing purposes.
        </p>
      </LegalSection>

      <LegalSection heading="7. Contact Information">
        <p>
          {business.legalName}
          <br />
          Website: {site}
          <br />
          Email: {business.email}
        </p>
        <p>
          For all questions regarding our SMS messaging services, please contact
          us at {business.email}.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to Terms">
        <p>
          {business.legalName} reserves the right to modify these Terms of
          Service at any time. Any updates will be posted on this page with an
          updated effective date.
        </p>
        <p>
          By subscribing to our SMS services, you acknowledge and agree to these
          Terms of Service.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
