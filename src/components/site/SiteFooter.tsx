import { Link } from "@tanstack/react-router";
import { business } from "@/config/business";
import { trackContactClick } from "@/lib/analytics";

export function SiteFooter() {
  return (
    <footer className="bg-brand-midnight py-20 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute -top-px left-0 right-0 h-px gradient-sunset opacity-60" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="relative size-10 flex items-center justify-center">
              <div className="absolute inset-0 gradient-sunset" />
              <span className="relative text-brand-midnight font-display text-lg leading-none">
                {business.initials}
              </span>
            </div>
            <span className="font-display text-base tracking-tight text-brand-white uppercase">
              {business.legalName}
            </span>
          </Link>
          <p className="text-brand-white/55 text-sm leading-relaxed max-w-md">
            {business.tagline} Concierge-grade auto care for {business.serviceArea.secondary}.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-brand-sunset text-[10px] mb-5 uppercase tracking-[0.25em]">
            Visit
          </h4>
          <address className="not-italic text-brand-white/65 text-sm leading-relaxed mb-4">
            {business.address.street}<br />
            {business.address.city}, {business.address.region} {business.address.postalCode}
          </address>
          <a
            href={business.phoneHref}
            onClick={() => trackContactClick("phone", business.phoneDisplay)}
            className="block text-brand-white hover:text-brand-sunset text-sm transition"
          >
            <span className="block text-brand-white/40 text-[10px] uppercase tracking-[0.25em] mb-1 font-mono">Phone</span>
            {business.phoneDisplay}
          </a>
          <a
            href={`mailto:${business.email}`}
            onClick={() => trackContactClick("email", business.email)}
            className="block mt-3 text-brand-white hover:text-brand-sunset text-sm transition"
          >
            <span className="block text-brand-white/40 text-[10px] uppercase tracking-[0.25em] mb-1 font-mono">Email</span>
            {business.email}
          </a>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-mono text-brand-sunset text-[10px] mb-5 uppercase tracking-[0.25em]">
            Sitemap
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="text-brand-white/65 hover:text-brand-sunset transition">Services</Link></li>
            <li><Link to="/projects" className="text-brand-white/65 hover:text-brand-sunset transition">Work</Link></li>
            <li><Link to="/about" className="text-brand-white/65 hover:text-brand-sunset transition">About</Link></li>
            <li><Link to="/contact" className="text-brand-white/65 hover:text-brand-sunset transition">Book Service</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-mono text-brand-sunset text-[10px] mb-5 uppercase tracking-[0.25em]">
            Hours
          </h4>
          <ul className="space-y-2 text-sm">
            {business.hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span className="text-brand-white/40 text-[10px] uppercase tracking-widest font-mono">{h.day}</span>
                <span className="text-brand-white/80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-brand-white/40 text-[11px] tracking-widest uppercase font-mono">
          &copy; {new Date().getFullYear()} {business.legalName}
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] tracking-widest uppercase font-mono">
          <li><Link to="/privacy" className="text-brand-white/40 hover:text-brand-sunset transition">Privacy</Link></li>
          <li><Link to="/terms" className="text-brand-white/40 hover:text-brand-sunset transition">Terms</Link></li>
          <li><Link to="/cookies" className="text-brand-white/40 hover:text-brand-sunset transition">Cookies</Link></li>
          <li><Link to="/accessibility" className="text-brand-white/40 hover:text-brand-sunset transition">Accessibility</Link></li>
        </ul>
      </div>
    </footer>
  );
}
