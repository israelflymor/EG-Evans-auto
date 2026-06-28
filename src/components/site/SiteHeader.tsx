import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Work" },
    { to: "/about", label: "About" },
  ] as const;

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-9 bg-brand-accent flex items-center justify-center">
            <span className="text-brand-dark font-heading text-lg leading-none">EG</span>
          </div>
          <span className="font-heading text-base tracking-tight text-brand-white hidden sm:inline">
            EVANS AUTO
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-white/80">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-brand-white transition-colors uppercase tracking-wider text-xs"
              activeProps={{ className: "text-brand-accent" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-accent text-brand-dark font-heading text-xs uppercase tracking-wider px-5 py-3 hover:bg-brand-accent/90 transition-colors"
          >
            Book Service
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
        <div className="md:hidden absolute top-20 left-0 right-0 bg-brand-dark border-b border-white/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-brand-white/80 hover:text-brand-white text-base uppercase tracking-wider font-heading"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-brand-accent text-base font-heading uppercase tracking-wider"
          >
            Book Service
          </Link>
        </div>
      )}
    </nav>
  );
}
