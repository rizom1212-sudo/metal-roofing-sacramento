import { Phone, CheckCircle, Shield, Award, Users, MapPin, Clock, Building2 } from 'lucide-react';
import TelLink from '../components/TelLink';
import { Link } from 'react-router-dom';
import GoogleReviewsLink from '../components/GoogleReviewsLink';
import JsonLd from '../components/JsonLd';
import OptimizedImage from '../components/OptimizedImage';
import { ASSETS } from '../data/assets';
import {
  ABOUT_PHOTO_ALT,
  ABOUT_PHOTO_SRC,
  BBB_URL,
  BUSINESS_DAYS_CLOSED,
  BUSINESS_DESCRIPTION,
  BUSINESS_DISPLAY_NAME,
  BUSINESS_ENTITY_NAME,
  BUSINESS_HOURS,
  GOOGLE_RATING_VALUE,
  GOOGLE_REVIEW_COUNT,
  IS_INSURED,
  IS_SERVICE_AREA_BUSINESS,
  LICENSE_NUMBER,
  LICENSE_TEXT,
  PHONE_DISPLAY,
} from '../data/site';
import { getOfferedServices, SERVICES_NOT_OFFERED } from '../data/services';
import { serviceAreas } from '../data/serviceAreas';

function formatHourLabel(hhmm: string): string {
  const [hourRaw, minuteRaw] = hhmm.split(':').map(Number);
  const period = hourRaw >= 12 ? 'PM' : 'AM';
  const hour12 = hourRaw % 12 || 12;
  return minuteRaw === 0 ? `${hour12}:00 ${period}` : `${hour12}:${String(minuteRaw).padStart(2, '0')} ${period}`;
}

const weekdayHours = BUSINESS_HOURS[0];
const hoursLabel = `${formatHourLabel(weekdayHours.opens)} to ${formatHourLabel(weekdayHours.closes)}`;

const offeredServices = getOfferedServices();
const notOfferedNotes = SERVICES_NOT_OFFERED.map(service => service.note).filter(
  (note, index, list): note is string => Boolean(note) && list.indexOf(note) === index,
);

const values = [
  {
    icon: CheckCircle,
    title: 'Honesty Over Sales',
    desc: 'We tell you what your roof actually needs. If a repair is enough, we recommend the repair. Referrals come from clear advice and work done right.',
  },
  {
    icon: Users,
    title: 'Responsive Local Team',
    desc: 'When you call PRC 13, you reach a Sacramento-area roofing team focused on clear communication, prompt scheduling, and documented recommendations.',
  },
  {
    icon: Shield,
    title: 'Quality You Can See',
    desc: 'We use quality materials and finish with a walkthrough. We stand behind completed work and explain scope before work begins.',
  },
  {
    icon: Award,
    title: 'Sacramento Is Our Home',
    desc: 'We work across the greater Sacramento region and care about the reputation we build with homeowners and light commercial property owners here.',
  },
];

export default function About() {
  return (
    <>
      <JsonLd pageName="About PRC 13 Roofing" schemaType="WebPage" primaryImage={ABOUT_PHOTO_SRC} />

      {/* WHO */}
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
                <p className="text-white font-semibold">{BUSINESS_ENTITY_NAME}</p>
                <p className="text-gray-400 text-sm">Sacramento-area roofing contractor</p>
              </div>
            </div>

            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
              <h1 className="section-heading mb-5">About {BUSINESS_DISPLAY_NAME}</h1>
              <p className="text-body text-lg font-semibold leading-relaxed mb-4">
                {BUSINESS_DESCRIPTION}
              </p>
              <div className="space-y-3.5 text-body text-sm leading-relaxed">
                <p>
                  {BUSINESS_ENTITY_NAME} is a California licensed roofing contractor (Lic. No. {LICENSE_NUMBER})
                  {IS_INSURED ? ' and is insured' : ''}. Homeowners and light commercial property owners call for clear inspections, written recommendations, and roofing work completed to an agreed scope.
                </p>
                <p>
                  {IS_SERVICE_AREA_BUSINESS
                    ? 'PRC 13 operates as a service-area business across the greater Sacramento region. There is no public retail storefront address on this website—customers schedule inspections and service by phone, text, or the contact form.'
                    : null}
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                <TelLink location="about" className="inline-flex items-center gap-2 btn-gold px-6 py-3 text-sm font-semibold">
                  <Phone size={16} /> Call PRC 13: {PHONE_DISPLAY}
                </TelLink>
                <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal font-semibold px-6 py-3 text-sm hover:bg-charcoal hover:text-white transition-colors">
                  Request a Roof Inspection
                </Link>
                <GoogleReviewsLink variant="button" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFY */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">How to Verify</p>
          <h2 className="section-heading mb-6">License, Reviews, and Contact Facts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-cream border border-gray-100">
              <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Shield size={13} /> License
              </p>
              <p className="text-headline font-semibold text-sm">{LICENSE_TEXT}</p>
              <p className="text-body text-xs mt-1.5 leading-relaxed">California contractor license #{LICENSE_NUMBER}.</p>
            </div>
            <div className="p-4 bg-cream border border-gray-100">
              <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2">Google Reviews</p>
              <p className="text-headline font-semibold text-sm">
                {GOOGLE_RATING_VALUE} rating · {GOOGLE_REVIEW_COUNT} reviews
              </p>
              <p className="text-body text-xs mt-1.5 leading-relaxed">
                <GoogleReviewsLink className="text-gold font-semibold" />
              </p>
            </div>
            <div className="p-4 bg-cream border border-gray-100">
              <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Phone size={13} /> Phone & Hours
              </p>
              <p className="text-headline font-semibold text-sm">{PHONE_DISPLAY}</p>
              <p className="text-body text-xs mt-1.5 leading-relaxed">
                Monday–Friday {hoursLabel}. {BUSINESS_DAYS_CLOSED.join(' & ')} closed.
              </p>
            </div>
            <div className="p-4 bg-cream border border-gray-100">
              <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Building2 size={13} /> Profiles
              </p>
              <p className="text-body text-xs leading-relaxed space-y-1">
                <a href={BBB_URL} target="_blank" rel="noopener noreferrer" className="block text-gold font-semibold hover:underline">
                  BBB profile
                </a>
                <Link to="/gallery" className="block text-gold font-semibold hover:underline">
                  Project gallery
                </Link>
                <Link to="/contact" className="block text-gold font-semibold hover:underline">
                  Contact / inspection request
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section className="bg-cream py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="section-heading mb-3">Roofing and Exterior Services</h2>
          <p className="text-body text-sm leading-relaxed max-w-3xl mb-6">
            PRC 13 offers the services below across its Sacramento-area footprint. Scope is confirmed after inspection—there is no published price list because cost depends on roof size, materials, access, and condition.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {offeredServices.map(service => (
              <Link
                key={service.id}
                to={service.canonicalUrl}
                className="flex items-start gap-2.5 p-4 bg-white border border-gray-100 hover:border-gold/40 transition-colors"
              >
                <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-headline text-sm">{service.name}</p>
                  <p className="text-body text-xs leading-relaxed mt-1">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          {notOfferedNotes.length > 0 && (
            <div className="p-4 bg-white border border-gray-100 max-w-3xl">
              <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2">Not offered</p>
              {notOfferedNotes.map(note => (
                <p key={note} className="text-body text-sm leading-relaxed">
                  {note} Educational articles may still discuss these topics so homeowners understand related roof-edge issues.
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHERE */}
      <section className="bg-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <MapPin size={14} /> Where We Operate
          </p>
          <h2 className="section-heading mb-3">Sacramento-Area Service Cities</h2>
          <p className="text-body text-sm leading-relaxed max-w-3xl mb-6">
            PRC 13 serves homeowners and light commercial properties in {serviceAreas.length} communities across the greater Sacramento region. City pages describe local roofing conditions—not separate storefront offices.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {serviceAreas.map(area => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="px-3 py-1.5 text-sm border border-gray-200 bg-cream text-headline hover:border-gold hover:text-gold transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <Link to="/service-areas" className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:underline">
            Browse all service areas
          </Link>
        </div>
      </section>

      {/* HOURS note */}
      <section className="bg-cream py-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <Clock size={22} className="text-gold flex-shrink-0" aria-hidden />
          <p className="text-body text-sm leading-relaxed">
            <span className="font-semibold text-headline">Business hours:</span> Monday–Friday {hoursLabel}.{' '}
            {BUSINESS_DAYS_CLOSED.join(' and ')} closed. For active leaks, call {PHONE_DISPLAY}—emergency assessment availability depends on weather, routing, and crew capacity.
          </p>
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

      {/* Explore */}
      <section className="bg-cream py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Next Steps</p>
          <h2 className="section-heading mb-4">How We Help Sacramento Homeowners</h2>
          <p className="text-body text-sm leading-relaxed max-w-3xl mb-6">
            Start with a{' '}
            <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              free roof inspection
            </Link>
            , compare{' '}
            <Link to="/roof-repair" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              roof repair
            </Link>{' '}
            and{' '}
            <Link to="/roof-replacement" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              roof replacement
            </Link>
            , review{' '}
            <Link to="/service-areas" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              cities we serve
            </Link>
            , or see recent{' '}
            <Link to="/gallery" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              roofing projects
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-2">
            <Link to="/roof-repair" className="px-4 py-2 text-sm font-semibold border border-gray-200 bg-white text-headline hover:border-gold hover:text-gold transition-colors">
              Roof Repair
            </Link>
            <Link to="/roof-replacement" className="px-4 py-2 text-sm font-semibold border border-gray-200 bg-white text-headline hover:border-gold hover:text-gold transition-colors">
              Roof Replacement
            </Link>
            <Link to="/emergency-roof-repair" className="px-4 py-2 text-sm font-semibold border border-gray-200 bg-white text-headline hover:border-gold hover:text-gold transition-colors">
              Emergency Roof Repair
            </Link>
            <Link to="/service-areas" className="px-4 py-2 text-sm font-semibold border border-gray-200 bg-white text-headline hover:border-gold hover:text-gold transition-colors">
              Service Areas
            </Link>
            <Link to="/gallery" className="px-4 py-2 text-sm font-semibold border border-gray-200 bg-white text-headline hover:border-gold hover:text-gold transition-colors">
              Project Gallery
            </Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-semibold border border-gray-200 bg-white text-headline hover:border-gold hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-final-cta className="bg-white py-9 md:py-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-headline mb-3">
            Need Honest Roofing Advice?
          </h2>
          <p className="text-body mb-5">
            Call or message PRC 13 for clear answers and no-pressure recommendations. {LICENSE_TEXT}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <TelLink location="about-final" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
              <Phone size={18} /> {PHONE_DISPLAY}
            </TelLink>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal font-semibold py-4 px-8 text-base hover:bg-charcoal hover:text-white transition-colors">
              Request a Roof Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
