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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-heading text-brand-dark">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-brand-dark">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand-accent px-6 py-3 text-sm font-heading text-brand-dark tracking-widest uppercase hover:bg-brand-accent/90 transition-colors"
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
    <div className="flex min-h-screen items-center justify-center bg-brand-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-heading tracking-tight text-brand-dark">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-brand-accent px-6 py-3 text-sm font-heading text-brand-dark tracking-widest uppercase hover:bg-brand-accent/90 transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-brand-dark/20 bg-transparent px-6 py-3 text-sm font-heading text-brand-dark tracking-widest uppercase hover:bg-brand-dark/5 transition-colors"
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
      { title: "EG Evans Auto Services LLC — Auto Repair in Dahlonega, GA" },
      {
        name: "description",
        content:
          "EG Evans Auto Services LLC — general auto repair and diagnostics in Dahlonega, Georgia, serving Lumpkin County and North Georgia.",
      },
      { name: "theme-color", content: "#1a1a1a" },
      { property: "og:site_name", content: "EG Evans Auto Services LLC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "EG Evans Auto Services LLC",
          founder: "Elizabeth Evans",
          address: {
            "@type": "PostalAddress",
            streetAddress: "321 Waterloo Dr",
            addressLocality: "Dahlonega",
            addressRegion: "GA",
            postalCode: "30533",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "City", name: "Dahlonega" },
            { "@type": "AdministrativeArea", name: "Lumpkin County" },
          ],
          url: "https://egevansauto.lovable.app/",
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
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
