import type { ReactNode } from "react";
import { business } from "@/config/business";

type Props = {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({ eyebrow, title, updated, children }: Props) {
  return (
    <div className="bg-brand-paper">
      <section className="pt-40 pb-16 px-6 bg-brand-midnight text-brand-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 gradient-sunset" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-sunset">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight text-balance leading-[1.05]">
            {title}
          </h1>
          <p className="mt-6 font-mono text-[11px] tracking-[0.25em] uppercase text-brand-white/50">
            Last updated · {updated}
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <article className="max-w-3xl mx-auto prose-legal font-body text-brand-midnight/80 text-[15px] leading-relaxed space-y-8">
          <p className="text-brand-midnight/60 italic border-l-2 border-brand-sunset pl-4">
            This is placeholder content for {business.legalName}. It is provided as
            a starting draft and should be reviewed and replaced with legally
            reviewed language before public release.
          </p>
          {children}
        </article>
      </section>
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-2xl md:text-3xl text-brand-midnight tracking-tight">
        {heading}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
