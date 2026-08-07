import { useId, useState } from 'react';
import { Phone } from 'lucide-react';
import { submitLead } from '../lib/airtable';
import { trackGenerateLead } from '../lib/analytics';
import { PRIMARY_CTA } from '../data/cta';
import { PHONE_DISPLAY } from '../data/site';
import TelLink from './TelLink';
import TrustResponseLine from './TrustResponseLine';

const REASON_OPTIONS = [
  { value: '', label: 'What do you need help with?' },
  { value: 'leak', label: 'Leak / Active Problem' },
  { value: 'storm', label: 'Storm Damage' },
  { value: 'replacement', label: 'Roof Replacement' },
  { value: 'inspection', label: 'Free Inspection' },
  { value: 'estimate', label: 'Roofing Estimate' },
  { value: 'other', label: 'Other' },
] as const;

const CONTACT_METHOD_OPTIONS = [
  { value: '', label: 'Preferred contact method (optional)' },
  { value: 'phone', label: 'Phone call' },
  { value: 'text', label: 'Text message' },
  { value: 'email', label: 'Email' },
] as const;

const PRIVACY_COPY = 'We won\'t share your info. A PRC 13 team member will contact you about your roof.';

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="sr-only">
      {children}
    </label>
  );
}

function normalizePhone(value: string): string {
  return value.replace(/\D/g, '');
}

function isValidPhone(value: string): boolean {
  const digits = normalizePhone(value);
  return digits.length >= 10 && digits.length <= 11;
}

interface LeadFormProps {
  sourcePage: string;
  variant?: 'hero' | 'inline' | 'full';
  className?: string;
  compact?: boolean;
  hideEmail?: boolean;
  hideReason?: boolean;
  compactSpacing?: boolean;
  submitLabel?: string;
  /** Optional city + preferred contact (Contact page). */
  showExtendedFields?: boolean;
}

export default function LeadForm({
  sourcePage,
  variant = 'inline',
  className = '',
  compact = false,
  hideEmail = false,
  hideReason = false,
  compactSpacing = false,
  submitLabel,
  showExtendedFields = false,
}: LeadFormProps) {
  const fieldId = useId();
  const ids = {
    name: `${fieldId}-name`,
    phone: `${fieldId}-phone`,
    email: `${fieldId}-email`,
    reason: `${fieldId}-reason`,
    city: `${fieldId}-city`,
    contactMethod: `${fieldId}-contact-method`,
    message: `${fieldId}-message`,
  };
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    city: '',
    contactMethod: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState({ name: false, phone: false, reason: false });

  const phoneInvalid = touched.phone && form.phone.trim() !== '' && !isValidPhone(form.phone);
  const reasonOptions = compact
    ? REASON_OPTIONS.map(opt => (opt.value === '' ? { ...opt, label: 'What do you need help with? (optional)' } : opt))
    : REASON_OPTIONS;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const buildPayload = () => {
    const reasonLabel = form.reason ? REASON_OPTIONS.find(o => o.value === form.reason)?.label : undefined;
    const methodLabel = form.contactMethod
      ? CONTACT_METHOD_OPTIONS.find(o => o.value === form.contactMethod)?.label
      : undefined;
    const parts = [
      reasonLabel ? `[${reasonLabel}]` : '',
      form.city.trim() ? `City: ${form.city.trim()}` : '',
      methodLabel ? `Preferred contact: ${methodLabel}` : '',
      form.message.trim(),
    ].filter(Boolean);
    return {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      service: form.reason || undefined,
      message: parts.join(' — ') || reasonLabel || 'General Inquiry',
      source_page: sourcePage,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, reason: true });

    if (!form.name.trim() || !form.phone.trim() || !isValidPhone(form.phone)) return;

    setStatus('loading');
    const result = await submitLead(buildPayload());
    if (result.success) {
      trackGenerateLead({
        sourcePage,
        formVariant: variant,
        formLocation: `lead-form:${sourcePage}:${variant}`,
        service: form.reason || undefined,
      });
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  const inputErrorClass = (invalid: boolean) =>
    invalid ? 'border-red-400 focus:border-red-400' : '';

  if (status === 'success') {
    return (
      <div className={`card-brand bg-charcoal-dark border border-gold/40 p-6 text-center ${className}`}>
        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold text-lg">Request received!</p>
        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
          We&apos;ll contact you shortly to schedule your inspection.
        </p>
        <TelLink
          location={`form-success-${sourcePage}`}
          className="inline-flex items-center justify-center gap-2 mt-4 text-gold font-semibold hover:text-gold-light transition-colors"
        >
          <Phone size={16} />
          Or call now: {PHONE_DISPLAY}
        </TelLink>
      </div>
    );
  }

  const errorBlock = (
    <div className={`rounded-brand p-3 text-sm ${variant === 'full' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-red-500/15 text-red-200 border border-red-400/30'}`}>
      <p className="font-medium">Something went wrong.</p>
      <p className="mt-1">
        Please call us directly:{' '}
        <TelLink location={`form-error-${sourcePage}`} className="font-semibold underline hover:no-underline">
          {PHONE_DISPLAY}
        </TelLink>
      </p>
    </div>
  );

  const privacy = (
    <p className={`text-xs leading-relaxed ${variant === 'full' ? 'text-gray-400' : 'text-gray-400/90'}`}>
      {PRIVACY_COPY}
    </p>
  );
  const fullFieldPadding = compact || compactSpacing ? 'py-3' : 'py-3.5';
  const fullButtonPadding = compact || compactSpacing ? 'py-3.5' : 'py-4';
  const messageRows = compactSpacing ? 2 : 3;

  if (variant === 'full') {
    return (
      <form onSubmit={handleSubmit} className={`${compact || compactSpacing ? 'space-y-2.5' : 'space-y-3'} ${className}`} noValidate>
        <div>
          <FieldLabel htmlFor={ids.name}>Your name (required)</FieldLabel>
          <input
            id={ids.name}
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={() => setTouched(t => ({ ...t, name: true }))}
            placeholder="Your Name *"
            required
            autoComplete="name"
            aria-invalid={touched.name && !form.name.trim()}
            className={`input-brand w-full px-4 ${fullFieldPadding} bg-white border border-gray-200 text-headline placeholder-gray-400 focus:outline-none focus:border-gold transition-colors ${touched.name && !form.name.trim() ? 'border-red-400' : ''}`}
          />
          {touched.name && !form.name.trim() && (
            <p className="text-red-500 text-xs mt-1">Please enter your name.</p>
          )}
        </div>
        <div>
          <FieldLabel htmlFor={ids.phone}>Phone number (required)</FieldLabel>
          <input
            id={ids.phone}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={() => setTouched(t => ({ ...t, phone: true }))}
            placeholder="(916) 555-1234 *"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={phoneInvalid}
            className={`input-brand w-full px-4 ${fullFieldPadding} bg-white border border-gray-200 text-headline placeholder-gray-400 focus:outline-none focus:border-gold transition-colors ${inputErrorClass(phoneInvalid)}`}
          />
          {phoneInvalid && (
            <p className="text-red-500 text-xs mt-1">Enter a valid 10-digit phone number.</p>
          )}
        </div>
        {!compact && !hideEmail && (
          <>
            <FieldLabel htmlFor={ids.email}>Email (optional)</FieldLabel>
            <input
              id={ids.email}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email (optional)"
              type="email"
              autoComplete="email"
              className={`input-brand w-full px-4 ${fullFieldPadding} bg-white border border-gray-200 text-headline placeholder-gray-400 focus:outline-none focus:border-gold transition-colors`}
            />
          </>
        )}
        {showExtendedFields && (
          <>
            <FieldLabel htmlFor={ids.city}>City (optional)</FieldLabel>
            <input
              id={ids.city}
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City (optional)"
              autoComplete="address-level2"
              className={`input-brand w-full px-4 ${fullFieldPadding} bg-white border border-gray-200 text-headline placeholder-gray-400 focus:outline-none focus:border-gold transition-colors`}
            />
          </>
        )}
        {!hideReason && (
          <>
            <FieldLabel htmlFor={ids.reason}>What do you need help with?</FieldLabel>
            <select
              id={ids.reason}
              name="reason"
              value={form.reason}
              onChange={handleChange}
              onBlur={() => setTouched(t => ({ ...t, reason: true }))}
              className={`input-brand w-full px-4 ${fullFieldPadding} bg-white border border-gray-200 focus:outline-none focus:border-gold transition-colors ${
                compact && !form.reason ? 'text-sm text-gray-400' : 'text-headline'
              }`}
            >
              {reasonOptions.map(opt => (
                <option key={opt.value || 'default'} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </>
        )}
        {showExtendedFields && (
          <>
            <FieldLabel htmlFor={ids.contactMethod}>Preferred contact method</FieldLabel>
            <select
              id={ids.contactMethod}
              name="contactMethod"
              value={form.contactMethod}
              onChange={handleChange}
              className={`input-brand w-full px-4 ${fullFieldPadding} bg-white border border-gray-200 text-headline focus:outline-none focus:border-gold transition-colors`}
            >
              {CONTACT_METHOD_OPTIONS.map(opt => (
                <option key={opt.value || 'default'} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </>
        )}
        {!compact && (
          <>
            <FieldLabel htmlFor={ids.message}>Message about your roof (optional)</FieldLabel>
            <textarea
              id={ids.message}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's going on with your roof? (optional)"
              rows={messageRows}
              className={`input-brand w-full px-4 ${fullFieldPadding} bg-white border border-gray-200 text-headline placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none`}
            />
          </>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full btn-gold ${fullButtonPadding} text-base font-semibold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {status === 'loading' ? 'Sending…' : submitLabel ?? PRIMARY_CTA}
        </button>
        {status === 'error' && errorBlock}
        {!compact && (
          <>
            {privacy}
            <TrustResponseLine className="mt-3 text-gray-500" />
          </>
        )}
      </form>
    );
  }

  const isHero = variant === 'hero';

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="flex flex-col gap-2.5">
        <div>
          <FieldLabel htmlFor={ids.name}>Your name (required)</FieldLabel>
          <input
            id={ids.name}
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={() => setTouched(t => ({ ...t, name: true }))}
            placeholder="Your Name *"
            required
            autoComplete="name"
            aria-invalid={touched.name && !form.name.trim()}
            className={`input-brand w-full px-4 py-3 bg-white/10 border border-white/25 text-white placeholder-white/55 focus:outline-none focus:border-gold focus:bg-white/15 transition-colors text-sm ${touched.name && !form.name.trim() ? 'border-red-400' : ''}`}
          />
        </div>
        <div>
          <FieldLabel htmlFor={ids.phone}>Phone number (required)</FieldLabel>
          <input
            id={ids.phone}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={() => setTouched(t => ({ ...t, phone: true }))}
            placeholder="(916) 555-1234 *"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={phoneInvalid}
            className={`input-brand w-full px-4 py-3 bg-white/10 border border-white/25 text-white placeholder-white/55 focus:outline-none focus:border-gold focus:bg-white/15 transition-colors text-sm ${inputErrorClass(phoneInvalid)}`}
          />
          {phoneInvalid && <p className="text-red-300 text-xs mt-1">Enter a valid 10-digit number.</p>}
        </div>
        {isHero && (
          <div>
            <FieldLabel htmlFor={ids.reason}>What do you need help with?</FieldLabel>
            <select
              id={ids.reason}
              name="reason"
              value={form.reason}
              onChange={handleChange}
              onBlur={() => setTouched(t => ({ ...t, reason: true }))}
              className="input-brand w-full px-4 py-3 bg-white/10 border border-white/25 text-white focus:outline-none focus:border-gold focus:bg-white/15 transition-colors text-sm"
              style={{ colorScheme: 'dark' }}
            >
              {reasonOptions.map(opt => (
                <option key={opt.value || 'default'} value={opt.value} className="text-headline bg-charcoal-dark">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-brand bg-[#F5A623] hover:bg-[#ffb739] active:bg-gold-dark text-white font-bold py-4 text-sm tracking-wide transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(245,166,35,0.30)] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed mt-0.5"
          style={{ letterSpacing: '0.02em' }}
        >
          {status === 'loading' ? 'Sending…' : submitLabel ?? PRIMARY_CTA}
        </button>
      </div>
      {status === 'error' && <div className="mt-3">{errorBlock}</div>}
      <div className="mt-3">{privacy}</div>
    </form>
  );
}
