import { Phone, CheckCircle, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleReviewsLink from '../components/GoogleReviewsLink';
import JsonLd from '../components/JsonLd';
import OptimizedImage from '../components/OptimizedImage';
import { ASSETS } from '../data/assets';
import { ABOUT_PHOTO_ALT, ABOUT_PHOTO_SRC } from '../data/site';

const values = [
  {
    icon: CheckCircle,
    title: 'Honesty Over Sales',
    desc: "We tell you what your roof actually needs. If a repair is enough, we'll do the repair. We built this business on referrals, and referrals come from doing right by people.",
  },
  {
    icon: Users,
    title: 'Responsive Local Team',
    desc: "When you call PRC 13, you reach a Sacramento-area roofing team focused on clear communication, prompt scheduling, and work we stand behind.",
  },
  {
    icon: Shield,
    title: 'Quality You Can See',
    desc: "We use quality materials and we don't cut corners. Our work is meant to last, and we stand behind it with a workmanship warranty on every project.",
  },
  {
    icon: Award,
    title: 'Sacramento Is Our Home',
    desc: 'We live here. We work here. We care about the reputation we build in this community. Every roof we replace is a neighbor\'s home.',
  },
];

export default function About() {
  return (
    <>
      <JsonLd pageName="About PRC 13 Roofing" schemaType="WebPage" />
      {/* COMPANY STORY */}
      <section className="bg-cream py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="relative">
              <OptimizedImage
                src={ABOUT_PHOTO_SRC}
                webpSrc={ASSETS.brand.ownerPhotoWebp}
                alt={ABOUT_PHOTO_ALT}
                width={800}
                height={460}
                className="h-[380px] md:h-[460px] object-cover object-[center_30%]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-charcoal-dark/90 p-4">
                <p className="text-white font-semibold">{ABOUT_PHOTO_ALT}</p>
                <p className="text-gray-400 text-sm">Sacramento, CA</p>
              </div>
            </div>

            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h1 className="section-heading mb-5">About PRC 13 Roofing</h1>
              <p className="text-body text-lg font-semibold leading-relaxed mb-4">
                Built on the belief that Sacramento homeowners deserve better roofing advice, clearer communication, and work done right the first time.
              </p>
              <div className="space-y-3.5 text-body text-sm leading-relaxed">
                <p>
                  PRC 13 Roofing was built around a simple standard: homeowners deserve clear answers, quality materials, and roofing work that is done right the first time.
                </p>
                <p>
                  Since then, PRC 13 has become one of Sacramento's most trusted residential roofing teams through referrals, not marketing. Homeowners call back or send a neighbor because the work was done right and the experience was straightforward.
                </p>
                <p>
                  Every project is handled with clear communication, documented recommendations, and a team that stands behind the finished work.
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                <a href="tel:9167613866" className="inline-flex items-center gap-2 btn-gold px-6 py-3 text-sm font-semibold">
                  <Phone size={16} /> Call PRC 13: 916-761-3866
                </a>
                <GoogleReviewsLink variant="button" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <Shield size={22} className="text-gold flex-shrink-0" aria-hidden />
              <p className="text-headline font-semibold text-sm sm:text-base">
                California Contractor License #1087153
              </p>
            </div>
            <p className="text-body text-sm leading-relaxed max-w-2xl">
              PRC 13 Roofing is a licensed and insured Sacramento-area roofing contractor. Every project is handled with clear communication and work we stand behind.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
          <h2 className="section-heading mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map(v => (
              <div key={v.title} className="flex gap-3.5 p-4 bg-cream border border-gray-100">
                <v.icon size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-headline text-base mb-1.5">{v.title}</h3>
                  <p className="text-body text-sm leading-snug">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-9 md:py-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-headline mb-3">
            Need Honest Roofing Advice?
          </h2>
          <p className="text-body mb-5">
            Call or message our Sacramento roofing team for clear answers and no-pressure recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:9167613866" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
              <Phone size={18} /> 916-761-3866
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal font-semibold py-4 px-8 text-base hover:bg-charcoal hover:text-white transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
