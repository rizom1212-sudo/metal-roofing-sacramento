import { Phone, Clock, CheckCircle } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import LeadForm from '../components/LeadForm';
import { LICENSE_TEXT, PHONE_DISPLAY, PHONE_SMS } from '../data/site';
import { trackClickToSms } from '../lib/analytics';
import TelLink from '../components/TelLink';

export default function Contact() {
  return (
    <>
      <JsonLd pageName="Contact PRC 13 Roofing" schemaType="ContactPage" />
      {/* MAIN */}
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
                    <p className="text-body text-sm">Call PRC 13 directly</p>
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
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2"><Clock size={13} className="text-gold" /> Monday to Friday</span>
                    <span className="font-medium text-headline">7:00 AM to 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2"><Clock size={13} className="text-gold" /> Saturday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2"><Clock size={13} className="text-gold" /> Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>

              <div className="card-brand bg-white border border-gray-100 p-4">
                <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-2.5">What to Expect</p>
                <ul className="space-y-1.5">
                  {[
                    'Response within 24 hours',
                    'Free, no-obligation inspection',
                    'Clear written quote before any work',
                    'Insurance claim support if needed',
                    'Financing options available',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-body">
                      <CheckCircle size={13} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="contact-form" className="md:col-span-8 card-brand bg-white border border-gray-100 p-6 md:p-8 lg:min-h-[460px] flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-headline mb-2">Request a Roof Inspection</h1>
              <p className="text-body text-sm mb-2">Most Sacramento homeowners receive a response within 24 hours.</p>
              <p className="text-xs text-gray-500 mb-5">{LICENSE_TEXT}</p>
              <LeadForm sourcePage="contact" variant="full" showExtendedFields className="max-w-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
