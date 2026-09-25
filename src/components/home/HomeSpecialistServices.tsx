import { Link } from 'react-router-dom';

const primary = [
  {
    href: '/metal-roof-installation',
    code: 'Install',
    title: 'Metal Roof Installation',
    copy: 'For new construction or properties moving to a metal roofing system.',
  },
  {
    href: '/metal-roof-replacement',
    code: 'Replace',
    title: 'Metal Roof Replacement',
    copy: 'For aging or failing roofs that need a complete new covering.',
  },
  {
    href: '/metal-roof-repair',
    code: 'Repair',
    title: 'Metal Roof Repair',
    copy: 'For leaks, damaged panels, flashing, and localized metal-roof problems.',
  },
] as const;

const secondary = [
  { href: '/standing-seam-metal-roofing', label: 'Standing Seam' },
  { href: '/residential-metal-roofing', label: 'Residential' },
  { href: '/commercial-metal-roofing', label: 'Commercial' },
  { href: '/metal-roof-inspection', label: 'Inspection' },
  { href: '/metal-roofing', label: 'All metal roofing services' },
] as const;

export default function HomeSpecialistServices() {
  return (
    <section className="bg-[color:var(--home-paper)] py-10 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[22rem] md:max-w-[34rem] mb-6 md:mb-7">
          <p className="home-kicker">Metal roofing</p>
          <h2 className="home-display">
            We do metal roofing.
            <span className="block">These are the ways we can help.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-black/15">
          {primary.map(item => (
            <Link
              key={item.href}
              to={item.href}
              className="home-pathway group py-5 md:py-6 md:pr-8"
            >
              <p className="home-spec mb-3">{item.code}</p>
              <h3 className="text-[1.35rem] md:text-[1.55rem] font-bold tracking-tight text-headline mb-2 group-hover:text-gold-dark transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-body leading-relaxed max-w-[22rem] mb-3">{item.copy}</p>
              <span className="home-cta min-h-11">
                Learn more <span className="home-cta-arrow" aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        <nav aria-label="More metal roofing services" className="mt-3 md:mt-4 border-t border-black/10 pt-3">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {secondary.map(item => (
              <li key={item.href}>
                <Link to={item.href} className="home-cta min-h-12 items-center">
                  {item.label}
                  <span className="home-cta-arrow" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
