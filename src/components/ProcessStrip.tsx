import { ClipboardCheck, FileText, Hammer } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Inspect',
    timeline: 'Day 1',
    desc: 'Free roof inspection on site. You receive a written inspection report documenting roof condition and whether repair or replacement makes the most sense.',
  },
  {
    icon: FileText,
    title: 'Quote',
    timeline: 'After inspection',
    desc: 'Clear written quote with line items. Insurance claim documentation available for storm-related damage.',
  },
  {
    icon: Hammer,
    title: 'Install',
    timeline: 'Timeline confirmed before work',
    desc: 'Many Sacramento residential replacements finish in about one to two days; larger or complex roofs can take longer. Final walkthrough when done.',
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
            Every project starts with a free inspection and a written inspection report, so you know where your roof stands before any work begins.
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
