import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

const CANONICAL = `${business.siteUrl}/privacy`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${business.legalName} | ${business.address.city}, ${business.address.region}` },
      {
        name: "description",
        content: `How ${business.legalName} collects, uses, and protects customer information across our website, quote requests, service records, and SMS communications in ${business.address.city}, ${business.address.region}.`,
      },
      {
        name: "keywords",
        content: `${business.legalName} privacy policy, auto repair privacy, ${business.address.city} auto shop privacy, SMS consent, customer data protection`,
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: `Privacy Policy — ${business.legalName}` },
      { property: "og:description", content: `Our commitment to protecting your personal information at ${business.legalName}.` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const site = business.siteUrl;
  const addr = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="July 3, 2026">
      <p>
        <strong>Effective Date:</strong> July 3, 2026
      </p>
      <p>
        {business.legalName} ("Company," "we," "our," or "us") respects your
        privacy and is committed to protecting the information you provide when
        using our website and services.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit {site}, submit inquiries, request
        quotes, receive service, or communicate with us through email, phone, or
        SMS messaging services.
      </p>

      <LegalSection heading="Information We Collect">
        <p>We may collect information that you voluntarily provide, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name (if applicable)</li>
          <li>Vehicle information (year, make, model, VIN)</li>
          <li>Service and repair inquiry details</li>
          <li>Billing and pickup/drop-off information</li>
          <li>Communication preferences</li>
        </ul>
        <p>We may also automatically collect certain technical information including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Website usage statistics</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>We may use your information to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Respond to inquiries and quote requests</li>
          <li>Schedule appointments and process service orders</li>
          <li>Provide customer support</li>
          <li>Send appointment confirmations and status updates</li>
          <li>Notify you regarding parts availability</li>
          <li>Send requested communications</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection heading="SMS Communications">
        <p>
          By providing your mobile phone number and opting into SMS
          communications, you consent to receive text messages from{" "}
          {business.legalName} regarding:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Service and parts inquiries</li>
          <li>Quote requests</li>
          <li>Appointment and repair status updates</li>
          <li>Vehicle pickup notifications</li>
          <li>Customer service communications</li>
          <li>Promotional offers (when applicable)</li>
        </ul>
        <p>Message frequency may vary. Message and data rates may apply.</p>
        <p>
          You may opt out at any time by replying <strong>STOP</strong> to any
          text message. For assistance, reply <strong>HELP</strong> or contact us
          at {business.email}.
        </p>
      </LegalSection>

      <LegalSection heading="Information Sharing and Disclosure">
        <p>We do not sell, rent, or trade your personal information to third parties.</p>
        <p>
          We may share information with trusted service providers who assist us
          in operating our business, including:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Website hosting providers</li>
          <li>Payment processors</li>
          <li>Parts suppliers and shipping carriers</li>
          <li>Customer communication platforms</li>
          <li>Technology and security service providers</li>
        </ul>
        <p>
          These service providers are permitted to use your information only as
          necessary to provide services on our behalf.
        </p>
      </LegalSection>

      <LegalSection heading="SMS Data Protection">
        <p>
          No mobile information will be shared with third parties or affiliates
          for marketing or promotional purposes.
        </p>
        <p>
          Text messaging originator opt-in data and consent information will not
          be shared with any third parties, excluding aggregators and providers
          of the text messaging services necessary to deliver SMS communications.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and Analytics">
        <p>
          Our website may use cookies and similar technologies to improve user
          experience, analyze traffic, and enhance website functionality.
        </p>
        <p>
          You may choose to disable cookies through your browser settings;
          however, some portions of the website may not function properly.
        </p>
      </LegalSection>

      <LegalSection heading="Data Security">
        <p>
          We implement commercially reasonable administrative, technical, and
          physical safeguards designed to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction.
        </p>
        <p>
          While we strive to protect your information, no method of transmission
          over the internet or electronic storage is completely secure.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Websites">
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those websites. We
          encourage users to review the privacy policies of any third-party
          sites they visit.
        </p>
      </LegalSection>

      <LegalSection heading="Children's Privacy">
        <p>
          Our services are not directed toward children under the age of 13. We
          do not knowingly collect personal information from children under 13
          years of age.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights and Choices">
        <p>You may:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Request access to your personal information</li>
          <li>Request corrections to inaccurate information</li>
          <li>Request deletion of your information where permitted by law</li>
          <li>Opt out of marketing communications</li>
          <li>Withdraw SMS consent at any time by replying STOP</li>
        </ul>
        <p>To exercise any of these rights, contact us at {business.email}.</p>
      </LegalSection>

      <LegalSection heading="Changes to This Privacy Policy">
        <p>
          We reserve the right to update this Privacy Policy at any time. Any
          revisions will be posted on this page with an updated effective date.
        </p>
        <p>
          Continued use of our services after changes are posted constitutes
          acceptance of the revised Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>If you have questions regarding this Privacy Policy, please contact:</p>
        <p>
          {business.legalName}
          <br />
          {addr}
          <br />
          Website: {site}
          <br />
          Email: {business.email}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
