import { ClipboardCheck, FileText, Hammer } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Inspect',
    timeline: 'Day 1',
    desc: 'Our roofing team inspects your roof, walks you through findings, and gives an honest recommendation with no pressure.',
  },
  {
    icon: FileText,
    title: 'Quote',
    timeline: 'Within 24 hrs',
    desc: 'Clear written quote with line items. Insurance documentation available for storm damage.',
  },
  {
    icon: Hammer,
    title: 'Install',
    timeline: '1 to 2 days typical',
    desc: 'Most Sacramento replacements complete in one to two days. Final walkthrough when done.',
  },
];

export default function ProcessStrip() {
  return (
    <section className="bg-white py-10 md:py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-7">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">How It Works</p>
          <h2 className="section-heading mb-2">Simple Process. Clear Timeline.</h2>
          <p className="section-subheading max-w-xl mx-auto">
            From first call to completed roof, the steps stay straightforward with no surprises.
          </p>
        </div>
        <div className="relative grid md:grid-cols-3 gap-4">
          <div className="hidden md:block absolute left-[16.5%] right-[16.5%] top-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden />
          {steps.map((step, index) => (
            <div
              key={step.title}
              data-stagger-item
              className="card-brand relative bg-cream border border-gray-100 p-5 text-center md:text-left"
            >
              <div className="relative z-10 mx-auto md:mx-0 mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gold/20 shadow-[0_8px_20px_rgba(15,20,28,0.07)]">
                <step.icon size={24} className="text-gold" strokeWidth={1.75} aria-hidden />
              </div>
              <span className="sr-only">Step {index + 1}</span>
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">{step.timeline}</p>
              <h3 className="font-bold text-headline text-lg mb-1.5">{step.title}</h3>
              <p className="text-body text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
