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
        <h1 className="text-7xl font-heading font-black text-brand-dark">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-brand-dark">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand-dark px-6 py-3 text-sm font-heading font-semibold text-brand-white tracking-widest uppercase hover:bg-brand-mid transition-colors"
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
        <h1 className="text-xl font-heading font-semibold tracking-tight text-brand-dark">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-brand-dark px-6 py-3 text-sm font-heading font-semibold text-brand-white tracking-widest uppercase hover:bg-brand-mid transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-brand-dark/20 bg-transparent px-6 py-3 text-sm font-heading font-semibold text-brand-dark tracking-widest uppercase hover:bg-brand-dark/5 transition-colors"
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
      { title: "McKinney Plumbing Services LLC — Pennsylvania Plumbing Contractor" },
      {
        name: "description",
        content:
          "McKinney Plumbing Services LLC. Residential and commercial plumbing across Pennsylvania, based in Peach Bottom.",
      },
      { name: "theme-color", content: "#0f1b3d" },
      { property: "og:site_name", content: "McKinney Plumbing Services LLC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: "McKinney Plumbing Services LLC",
          address: {
            "@type": "PostalAddress",
            streetAddress: "508 Little Britain Church Road",
            addressLocality: "Peach Bottom",
            addressRegion: "PA",
            postalCode: "17563",
            addressCountry: "US",
          },
          areaServed: { "@type": "State", name: "Pennsylvania" },
          url: "/",
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
