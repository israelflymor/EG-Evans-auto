import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { business, testimonials } from "@/config/business";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-midnight px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-gradient-sunset">404</h1>
        <h2 className="mt-4 text-xl font-display text-brand-white">Page not found</h2>
        <p className="mt-2 text-sm text-brand-white/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center gradient-sunset px-6 py-3 text-sm font-display text-brand-midnight hover:brightness-110 transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-midnight px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display text-brand-white">This page didn't load</h1>
        <p className="mt-2 text-sm text-brand-white/60">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center gradient-sunset px-6 py-3 text-sm font-display text-brand-midnight hover:brightness-110 transition"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-white/20 bg-transparent px-6 py-3 text-sm font-display text-brand-white hover:bg-white/5 transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${business.legalName} — Coastal Luxury Auto Care · ${business.address.city}, ${business.address.region}` },
      {
        name: "description",
        content: `${business.legalName} delivers concierge-grade auto repair, diagnostics, and maintenance in ${business.address.city}, ${business.address.region}. Serving ${business.serviceArea.secondary}.`,
      },
      { name: "theme-color", content: "#0A0A14" },
      { property: "og:site_name", content: business.legalName },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(business.googleSiteVerification
        ? [{ name: "google-site-verification", content: business.googleSiteVerification }]
        : []),
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "- Service Success Plan builds agency-grade, deployable lead-generation websites for local service businesses." },
      { property: "og:description", content: "- Service Success Plan builds agency-grade, deployable lead-generation websites for local service businesses." },
      { name: "twitter:description", content: "- Service Success Plan builds agency-grade, deployable lead-generation websites for local service businesses." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa18d2aa-b08e-4e34-ac67-448e41dcac63/id-preview-15a63a56--1f2bfc3c-770c-4437-951b-9611c648b72a.lovable.app-1784649445172.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa18d2aa-b08e-4e34-ac67-448e41dcac63/id-preview-15a63a56--1f2bfc3c-770c-4437-951b-9611c648b72a.lovable.app-1784649445172.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: business.legalName,
          founder: business.owner,
          telephone: business.phoneDisplay,
          email: business.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            addressLocality: business.address.city,
            addressRegion: business.address.region,
            postalCode: business.address.postalCode,
            addressCountry: business.address.country,
          },
          areaServed: business.serviceArea.cities.map((c) => ({
            "@type": "City",
            name: c,
          })),
          url: business.siteUrl,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (
              testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length
            ).toFixed(1),
            reviewCount: testimonials.length,
            bestRating: 5,
            worstRating: 1,
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.name },
            datePublished: t.date,
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: 5,
            },
            reviewBody: t.quote,
          })),
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-brand-white text-foreground font-body">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
