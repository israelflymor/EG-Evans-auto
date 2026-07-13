import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { business } from "@/config/business";
import { trackEvent } from "@/lib/analytics";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navLinks = [
    { to: "/categories", label: "Catalog" },
    { to: "/projects", label: "Orders" },
    { to: "/about", label: "About" },
  ] as const;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 ${
        scrolled
          ? "bg-brand-midnight/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative size-10 flex items-center justify-center">
            <div className="absolute inset-0 gradient-sunset" />
            <span className="relative text-brand-white font-display text-lg leading-none">
              {business.initials}
            </span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base text-brand-white tracking-tight">
              {business.shortName}
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-white/50">
              {business.address.city}, {business.address.region}
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[12px] font-mono tracking-[0.2em] uppercase text-brand-white/70 hover:text-brand-sunset transition-colors"
              activeProps={{ className: "text-brand-sunset" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => trackEvent("cta_click", { source: "header", label: "Request a Quote" })}
            className="gradient-sunset text-brand-white font-display text-sm px-6 py-3 hover:brightness-110 transition"
          >
            Request a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-brand-white p-2"
        >
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-brand-midnight border-b border-white/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-brand-white/80 hover:text-brand-sunset text-base font-mono tracking-[0.2em] uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="gradient-sunset text-brand-white font-display text-base px-6 py-4 text-center"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
