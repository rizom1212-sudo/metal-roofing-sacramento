import { Phone, Clock, CheckCircle, MapPin } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import LeadForm from '../components/LeadForm';
import {
  BUSINESS_DAYS_CLOSED,
  BUSINESS_DISPLAY_NAME,
  BUSINESS_ENTITY_NAME,
  BUSINESS_HOURS,
  IS_SERVICE_AREA_BUSINESS,
  LICENSE_TEXT,
  OPERATOR_DISCLOSURE,
  PHONE_DISPLAY,
  PHONE_SMS,
} from '../data/site';
import { PRIMARY_CTA } from '../data/cta';
import { trackClickToSms } from '../lib/analytics';
import TelLink from '../components/TelLink';
import { Link } from 'react-router-dom';

function formatHourLabel(hhmm: string): string {
  const [hourRaw, minuteRaw] = hhmm.split(':').map(Number);
  const period = hourRaw >= 12 ? 'PM' : 'AM';
  const hour12 = hourRaw % 12 || 12;
  return minuteRaw === 0 ? `${hour12}:00 ${period}` : `${hour12}:${String(minuteRaw).padStart(2, '0')} ${period}`;
}

const weekdayHours = BUSINESS_HOURS[0];
const hoursRange = `${formatHourLabel(weekdayHours.opens)} to ${formatHourLabel(weekdayHours.closes)}`;

export default function Contact() {
  return (
    <>
      <JsonLd pageName={`Contact ${BUSINESS_DISPLAY_NAME}`} schemaType="ContactPage" />
      <section className="bg-cream py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            <div className="md:col-span-4 space-y-5">
              <div>
                <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2">Call or Text</p>
                <TelLink location="contact-sidebar" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center flex-shrink-0 rounded-brand">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-headline group-hover:text-gold transition-colors">{PHONE_DISPLAY}</p>
                    <p className="text-body text-sm">Call {BUSINESS_DISPLAY_NAME} directly</p>
                  </div>
                </TelLink>
                <a
                  href={PHONE_SMS}
                  onClick={() => trackClickToSms('contact-sidebar')}
                  className="inline-block text-sm text-gold font-semibold hover:text-gold-dark transition-colors mt-2"
                >
                  Or send a text message →
                </a>
              </div>

              <div className="pt-1 pb-2">
                <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2.5">Business Hours</p>
                <div className="space-y-1.5 text-sm text-body">
                  <div className="flex justify-between gap-3">
                    <span className="flex items-center gap-2"><Clock size={13} className="text-gold" /> Monday to Friday</span>
                    <span className="font-medium text-headline text-right">{hoursRange}</span>
                  </div>
                  {BUSINESS_DAYS_CLOSED.map(day => (
                    <div key={day} className="flex justify-between gap-3">
                      <span className="flex items-center gap-2"><Clock size={13} className="text-gold" /> {day}</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  ))}
                </div>
              </div>

              {IS_SERVICE_AREA_BUSINESS && (
                <div className="card-brand bg-white border border-gray-100 p-4">
                  <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <MapPin size={13} /> Service-Area Business
                  </p>
                  <p className="text-body text-sm leading-relaxed">
                    {BUSINESS_ENTITY_NAME} schedules metal roof inspections and metal-roofing work across the greater Sacramento region. There is no public retail storefront address listed on this site.
                  </p>
                  <Link to="/service-areas" className="inline-block text-gold font-semibold text-sm mt-2 hover:underline">
                    View service areas
                  </Link>
                </div>
              )}

              <div className="card-brand bg-white border border-gray-100 p-4">
                <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2.5">What to Expect</p>
                <ul className="space-y-1.5">
                  {[
                    'Metal roof installation, replacement, and repair',
                    'Standing seam, residential, and commercial metal roofs',
                    'Free residential metal roof inspection with written findings',
                    'Insurance documentation support when storm damage is involved — no coverage guarantee',
                    'Financing may be available on qualifying projects',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-body">
                      <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="contact-form" className="md:col-span-8 card-brand bg-white border border-gray-100 p-6 md:p-8 lg:min-h-[460px] flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-headline mb-2">{PRIMARY_CTA}</h1>
              <p className="text-body text-sm mb-2">
                Tell us what is going on with your metal roof. We aim to respond quickly during Monday through Friday business hours ({hoursRange}).
              </p>
              <p className="text-xs text-gray-500 mb-2">{OPERATOR_DISCLOSURE}</p>
              <p className="text-xs text-gray-500 mb-5">{LICENSE_TEXT}</p>
              <LeadForm sourcePage="contact" variant="full" showExtendedFields className="max-w-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
