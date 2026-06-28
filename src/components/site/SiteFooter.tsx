import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <div className="size-8 bg-brand-accent flex items-center justify-center">
              <span className="text-brand-dark font-heading text-base leading-none">EG</span>
            </div>
            <span className="font-heading text-sm tracking-tight text-brand-white">
              EG EVANS AUTO SERVICES LLC
            </span>
          </Link>
          <p className="text-brand-white/50 text-sm leading-relaxed max-w-md">
            General auto repair in Dahlonega, Georgia. Honest diagnostics, straight talk, and quality work for drivers across Lumpkin County and North Georgia.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-brand-white text-xs mb-4 uppercase tracking-widest">
            Visit
          </h4>
          <address className="not-italic text-brand-white/60 text-sm leading-relaxed mb-3">
            321 Waterloo Dr<br />
            Dahlonega, GA 30533
          </address>
          <p className="text-brand-white/60 text-sm">
            <span className="block text-brand-white/40 text-[10px] uppercase tracking-widest mb-1">Phone</span>
            (XXX) XXX-XXXX
          </p>
          <p className="text-brand-white/60 text-sm mt-3">
            <span className="block text-brand-white/40 text-[10px] uppercase tracking-widest mb-1">Email</span>
            hello@egevansauto.com
          </p>
        </div>

        <div>
          <h4 className="font-heading text-brand-white text-xs mb-4 uppercase tracking-widest">
            Sitemap
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="text-brand-white/60 hover:text-brand-accent">Services</Link></li>
            <li><Link to="/projects" className="text-brand-white/60 hover:text-brand-accent">Work</Link></li>
            <li><Link to="/about" className="text-brand-white/60 hover:text-brand-accent">About</Link></li>
            <li><Link to="/contact" className="text-brand-white/60 hover:text-brand-accent">Book Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-brand-white/40 text-xs tracking-wide uppercase">
          &copy; {new Date().getFullYear()} EG Evans Auto Services LLC. All rights reserved.
        </p>
        <p className="text-brand-white/40 text-xs tracking-wide uppercase">
          Dahlonega, GA · Lumpkin County
        </p>
      </div>
    </footer>
  );
}
