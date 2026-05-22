import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="size-6 bg-brand-white/10 rounded-sm flex items-center justify-center">
              <span className="text-brand-white font-heading font-black text-sm leading-none">M</span>
            </div>
            <span className="font-heading font-semibold text-sm tracking-tight text-brand-white">
              McKINNEY PLUMBING SERVICES LLC
            </span>
          </Link>
          <p className="text-brand-white/50 text-sm leading-relaxed max-w-sm">
            A Pennsylvania-based plumbing contractor serving residential and commercial clients across the Commonwealth.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-brand-white text-sm mb-4 uppercase tracking-widest">
            Sitemap
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="text-brand-white/60 hover:text-brand-white">Services</Link></li>
            <li><Link to="/projects" className="text-brand-white/60 hover:text-brand-white">Projects</Link></li>
            <li><Link to="/about" className="text-brand-white/60 hover:text-brand-white">About</Link></li>
            <li><Link to="/contact" className="text-brand-white/60 hover:text-brand-white">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-brand-white text-sm mb-4 uppercase tracking-widest">
            Visit
          </h4>
          <address className="not-italic text-brand-white/60 text-sm leading-relaxed">
            508 Little Britain Church Road<br />
            Peach Bottom, PA 17563
          </address>
          <p className="text-brand-white/60 text-sm mt-3">
            Serving all of Pennsylvania
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-brand-white/40 text-xs tracking-wide uppercase">
          &copy; {new Date().getFullYear()} McKinney Plumbing Services LLC. All rights reserved.
        </p>
        <p className="text-brand-white/40 text-xs tracking-wide uppercase">
          Statewide Mechanical Contracting
        </p>
      </div>
    </footer>
  );
}
