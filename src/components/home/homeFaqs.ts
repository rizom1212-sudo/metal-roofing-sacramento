import type { FaqItem } from '../FaqAccordion';
import { LICENSE_SHORT, OPERATOR_DISCLOSURE } from '../../data/site';

/** Homepage FAQ copy — visible UI and JSON-LD FAQPage must stay in sync. */
export const homeFaqs: FaqItem[] = [
  {
    question: 'How much does a metal roof cost in Sacramento?',
    answer:
      'Cost depends on roof size, pitch, tear-off, flashing complexity, and the metal system — standing seam usually costs more than exposed-fastener panels. PRC 13 quotes after inspection rather than publishing a price list. The [metal roofing cost guide](/blog/metal-roofing-cost-sacramento) explains what drives the number.',
  },
  {
    question: 'Is standing seam worth the additional cost?',
    answer:
      'Standing seam conceals fasteners under raised seams and reads as a finished architectural surface. Corrugated and ribbed exposed-fastener systems can still be the right metal roof when budget or building type points that way. Worth is a project decision, not a universal rule.',
  },
  {
    question: 'Can a metal roof go over shingles?',
    answer:
      'Sometimes, when the deck, structure, and product requirements allow. Full tear-off so the deck can be inspected is the usual approach. Overlay is only considered after inspection — not as a default shortcut.',
  },
  {
    question: 'How long does metal roof installation take?',
    answer:
      'Many Sacramento residential metal jobs finish in about two to three days once work starts. Larger roofs, steep pitches, complex flashing, and weather add time. The inspection sets a realistic schedule for your building.',
  },
  {
    question: 'Does a metal roof make a home hotter?',
    answer:
      'Metal reflects solar energy compared with dark, worn shingles. Comfort still depends on the full assembly — underlayment, ventilation, and insulation — not the panel alone. It is not a guarantee about indoor temperature or energy bills.',
  },
  {
    question: 'Can an existing metal roof be repaired?',
    answer:
      'Yes, when the rest of the system is sound. Localized seam, flashing, panel, fastener, and penetration problems can be repaired. If the covering is at the end of its service, replacement is the honest path.',
  },
  {
    question: 'Who is the licensed contractor behind Metal Roofing Sacramento?',
    answer: `${OPERATOR_DISCLOSURE} Google reviews and the Google Business Profile belong to PRC 13 Roofing Inc. There is not a separate Metal Roofing Sacramento contractor license.`,
  },
  {
    question: 'What metal roofing services are available in Sacramento?',
    answer:
      'Metal Roofing Sacramento covers metal roof installation, replacement, repair, standing seam systems, residential and commercial metal roofs, and metal roof inspections. Compare them on the [metal roofing services](/metal-roofing) page.',
  },
  {
    question: 'What areas around Sacramento are served?',
    answer:
      'The greater Sacramento region, including Roseville, Rocklin, Folsom, Rancho Cordova, Elk Grove, Granite Bay, El Dorado Hills, Orangevale, Lincoln, Woodland, Davis, Florin, and Colfax. See [Sacramento neighborhoods](/service-areas/sacramento) for city-level context. PRC 13 is a service-area contractor with no public storefront on this site.',
  },
  {
    question: 'Are metal roof inspections free?',
    answer:
      `Standard residential metal roof inspections are free with written findings and no obligation. Commercial metal inspections are scheduled when you contact us. ${LICENSE_SHORT}.`,
  },
];

