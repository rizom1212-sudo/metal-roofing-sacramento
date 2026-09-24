import type { BlogPost, BlogRelatedService } from './blog';
import { ASSETS } from './assets';
import { serviceAreaFeaturedPrograms } from './serviceAreaFeaturedPrograms';

import { COLFAX_CLUSTER_CATEGORY } from './blogCategories';
import { COLFAX_HOME_HARDENING_SLUG, COLFAX_INSPECTION_FORM_ID } from './blogColfaxConstants';

export { COLFAX_CLUSTER_CATEGORY };
export { COLFAX_HOME_HARDENING_SLUG, COLFAX_INSPECTION_FORM_ID };

export const COLFAX_CITY_PROGRAM_URL = 'https://colfax-ca.gov/homehardening/';

export const COLFAX_CALFIRE_HARDENING_URL =
  'https://www.readyforwildfire.org/prepare-for-wildfire/hardening-your-home/';

const colfaxProgram = serviceAreaFeaturedPrograms.colfax;

/** Conversion hero 90% statement. Does not mean every roof is 90% funded. */
export const COLFAX_NINETY_PERCENT_HERO =
  'Colfax homeowners may qualify for assistance covering up to 90% of eligible home-hardening and defensible-space improvements through the City\'s current program.';

/** Canonical program cost-share wording aligned with the Colfax hub SSOT. */
export const COLFAX_NINETY_PERCENT_CLAIM = colfaxProgram.costShareStatement;

export const COLFAX_FIVE_PERCENT_OFFER = colfaxProgram.offerStatement;

export const COLFAX_FIVE_PERCENT_SEPARATION = colfaxProgram.offerSeparationNote;

const COVER = ASSETS.blog('035dfafc-8416-46bd-b5ab-f8c6b6b4eff9.webp');

const coreServices = (): BlogRelatedService[] => [
  { label: 'Colfax Roofing Services', href: '/service-areas/colfax' },
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Roof Inspection', href: '/roof-inspection' },
  { label: 'Metal Roofing', href: '/metal-roofing' },
  { label: 'Contact PRC 13', href: '/contact' },
];

export const colfaxRoofingClusterPosts: BlogPost[] = [
  {
    slug: COLFAX_HOME_HARDENING_SLUG,
    title:
      'Colfax Home Hardening Program 2026: What Homeowners Should Know About Roofing and Wildfire Protection',
    seoTitle: 'Colfax Home Hardening Program 2026 | Roofing & Wildfire Protection | PRC 13',
    excerpt:
      'Learn how the Colfax Home Hardening Program 2026 works, what up to 90% covers for eligible improvements, and how Class A roofing and PRC 13\'s independent 5% Colfax offer fit.',
    date: 'August 13, 2026',
    updatedDate: 'August 14, 2026',
    readTime: '12 min read',
    category: COLFAX_CLUSTER_CATEGORY,
    coverImage: COVER,
    coverImageAlt:
      'Roofing on a California foothill home, used to illustrate Colfax home hardening and wildfire-minded roof planning',
    relatedServices: coreServices(),
    relatedArticles: [
      { label: 'Metal roof repair vs replacement', href: '/blog/metal-roof-repair-vs-replacement' },
      { label: 'Metal roofing cost Sacramento', href: '/blog/metal-roofing-cost-sacramento' },
    ],
    faqs: [
      {
        question: 'Do I need to contact the City before getting a roofing estimate?',
        answer:
          'No. You can request a PRC 13 roof inspection and estimate while you review the City program. Eligibility and covered improvements are still decided through the official program, not by a contractor estimate.',
      },
      {
        question: 'Can PRC 13 inspect my roof before I know whether I qualify?',
        answer:
          'Yes. A PRC 13 inspection documents roof condition and roofing options. It does not determine City program eligibility or apply for the program.',
      },
      {
        question: 'Does a Class A roof make a home wildfire-proof?',
        answer:
          'No. Class A rates the roof assembly\'s fire performance under standardized testing. Walls, vents, decks, vegetation, and other openings still affect wildfire risk.',
      },
      {
        question: 'What should I ask the program administrator about roofing?',
        answer:
          'Ask whether any roofing work can be included for your property, what documentation is required, and what cost share might apply in your case rather than assuming the "up to 90%" maximum. Confirm current rules on the City\'s official Home Hardening page.',
      },
      {
        question: 'What should I have ready before requesting a roofing estimate?',
        answer:
          'Note any leaks, missing materials, or interior stains, and share photos if you have them. A PRC 13 inspection can still start from a phone request if you are unsure what to look for.',
      },
      {
        question: 'Can roof repair be considered instead of full replacement?',
        answer:
          'Sometimes. PRC 13 can explain whether repair or replacement is the more durable path for the roof itself. Whether any of that work is eligible for City assistance is decided by the program administrator.',
      },
      {
        question: 'Does PRC 13\'s 5% Colfax offer depend on City program approval?',
        answer:
          'No. PRC 13 independently offers Colfax homeowners an additional 5% off qualifying roofing work. The promotion is separate from City program eligibility and approval.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'The **City of Colfax** operates a **Home Hardening and Defensible Space Program** for residential properties within city limits. Colfax is a city in **Placer County, California**. **PRC 13 Roofing** provides roof inspection, roof repair, and roof replacement services to homeowners in Colfax.',
      },
      {
        type: 'paragraph',
        content:
          `${COLFAX_NINETY_PERCENT_CLAIM} That statement does **not** mean every roof receives 90% funding.`,
      },
      {
        type: 'paragraph',
        content:
          'This guide is current for 2026 and was last updated in August 2026. Program rules can change. Always verify details on the [official City of Colfax Home Hardening page](https://colfax-ca.gov/homehardening/).',
      },
      {
        type: 'heading',
        content: 'What is the City of Colfax Home Hardening Program?',
      },
      {
        type: 'paragraph',
        content:
          'The City of Colfax Home Hardening and Defensible Space Program is a **city government program** intended to reduce wildfire risk for qualifying residential properties within Colfax city limits. Recommended measures can differ from home to home after program review.',
      },
      {
        type: 'paragraph',
        content:
          'Home hardening and defensible space are related but not identical. Home hardening usually refers to the building itself: roofing, vents, edges, and other ember-vulnerable details. Defensible space usually refers to vegetation and combustibles around the home. The City program addresses both categories for eligible properties.',
      },
      {
        type: 'heading',
        content: 'How much can the Colfax Home Hardening Program cover?',
      },
      {
        type: 'paragraph',
        content:
          'City of Colfax program information currently states that assistance **may cover up to 90% of eligible home-hardening and defensible-space costs**.',
      },
      {
        type: 'paragraph',
        content:
          '**"Up to 90%" is a ceiling, not a coupon.** It describes a possible cost share for improvements the program later treats as eligible. It is not a promise that every homeowner receives 90% of a contractor invoice, and it is not a promise that a full roof replacement is the eligible item.',
      },
      {
        type: 'list',
        content: '',
        items: [
          'The percentage applies to **eligible** home-hardening and defensible-space improvements, as determined through the program.',
          'A property can receive different recommended measures than a neighbor\'s property.',
          'Covered costs, required homeowner share, and documentation rules belong to the program, not to a roofing estimate.',
          'Always confirm current figures on the [official City of Colfax Home Hardening page](https://colfax-ca.gov/homehardening/).',
        ],
      },
      {
        type: 'heading',
        content: 'Does the government pay 90% for a new roof in Colfax?',
      },
      {
        type: 'paragraph',
        content:
          '**No.** The City\'s "up to 90%" statement applies to eligible home-hardening and defensible-space improvements. It does **not** mean every homeowner automatically receives 90% funding for an entire roof replacement.',
      },
      {
        type: 'paragraph',
        content:
          'A government program decision and a roofing contractor estimate are separate documents. The program decides whether a property is eligible and which improvements qualify. A contractor estimate describes roofing scope, materials, and price.',
      },
      {
        type: 'heading',
        content: 'Does the Colfax Home Hardening Program cover roofing?',
      },
      {
        type: 'paragraph',
        content:
          'Roofing **may** be considered when it aligns with program-approved measures for that property. Coverage is **not automatic** for every roof repair or replacement in Colfax.',
      },
      {
        type: 'paragraph',
        content:
          'That is why roof condition still matters during home-hardening planning. If underlayment is worn, flashing is open, or covering materials are at the end of service life, a homeowner needs a clear picture of repair versus replacement **before** assuming the City program will fund a reroof.',
      },
      {
        type: 'paragraph',
        content:
          'Ask the program administrator which roofing-related items, if any, are eligible for the property. Ask a roofing contractor what the roof actually needs.',
      },
      {
        type: 'heading',
        content: 'Is there an income limit for the Colfax program?',
      },
      {
        type: 'paragraph',
        content:
          'The City currently states that the program is available to Colfax homeowners **without an income limit**.',
      },
      {
        type: 'paragraph',
        content:
          'No income limit is not the same as guaranteed eligibility. Location within city limits, property type, inspection findings, and the list of approved measures still matter. Confirm those points with the official program.',
      },
      {
        type: 'heading',
        content: 'Why does roofing matter for wildfire protection?',
      },
      {
        type: 'paragraph',
        content:
          'Colfax sits in the **Placer County** foothills, where wildfire and ember exposure are practical homeowner concerns. Roofs are one of the building surfaces flying embers can reach.',
      },
      {
        type: 'paragraph',
        content:
          'Embers can land in debris, ignite aged covering materials, or find openings at edges, vents, chimneys, and roof-to-wall transitions. Gutter debris can hold fuel at the roof edge. Those are roofing and drainage issues as well as wildfire-readiness issues.',
      },
      {
        type: 'paragraph',
        content:
          '[CAL FIRE\'s Ready for Wildfire home-hardening guidance](https://www.readyforwildfire.org/prepare-for-wildfire/hardening-your-home/) treats the home itself, including roofing, as part of reducing ignition risk, alongside defensible space. That statewide guidance is not the Colfax City program, and it does not approve Colfax funding.',
      },
      {
        type: 'heading',
        content: 'What is Class A roofing?',
      },
      {
        type: 'paragraph',
        content:
          '**Class A** describes a roof assembly\'s fire-performance rating under standardized testing. It is about the **installed system**: covering, underlayment, and how the assembly is put together, not only a product name on a brochure.',
      },
      {
        type: 'paragraph',
        content:
          'A Class A rating is **not** a claim that an entire house is wildfire-proof. Walls, vents, decks, vegetation, and ember-exposed openings still matter. Class A roofing can be a meaningful home-hardening choice and still leave other vulnerabilities in place.',
      },
      {
        type: 'paragraph',
        content:
          'When comparing [roof replacement](/roof-replacement) or [metal roofing](/metal-roofing) options, ask which assembly rating applies and how edges, underlayment, and penetrations will be detailed.',
      },
      {
        type: 'cta',
        content: 'Not Sure Whether Your Roof Needs Attention?',
        heading: 'Not Sure Whether Your Roof Needs Attention?',
        statement:
          'PRC 13 Roofing can inspect your roof and explain repair, replacement, and wildfire-resistant roofing considerations for your property.',
        ctaLabel: 'Request a Free Colfax Roof Inspection',
        ctaHref: `#${COLFAX_INSPECTION_FORM_ID}`,
      },
      {
        type: 'heading',
        content: 'Does PRC 13 Roofing serve Colfax?',
      },
      {
        type: 'paragraph',
        content:
          '**Yes.** PRC 13 Roofing provides roof inspection, roof repair, and roof replacement services to homeowners in **Colfax, California**. See the [Colfax roofing service-area page](/service-areas/colfax) for local service details.',
      },
      {
        type: 'paragraph',
        content:
          'PRC 13 is a licensed California roofing contractor. A free roof inspection documents condition and helps you compare repair, replacement, and fire-resistant assemblies.',
      },
      {
        type: 'heading',
        content: 'Is PRC 13 Roofing part of the City program?',
      },
      {
        type: 'paragraph',
        content:
          '**No.** PRC 13 Roofing is a roofing contractor that serves Colfax homeowners. It is not the City of Colfax, FEMA, CAL FIRE, Cal OES, or the program administrator. Official program rules come from the City. Roofing guidance and pricing on this page come from PRC 13.',
      },
      {
        type: 'heading',
        content: 'What homeowners should ask before combining program planning and roofing work',
      },
      {
        type: 'heading',
        content: 'Questions for the program administrator',
        level: 3,
      },
      {
        type: 'list',
        content: '',
        items: [
          'Is this property within Colfax city limits and currently eligible to apply?',
          'Which home-hardening or defensible-space measures are recommended for this address?',
          'Can any roofing work be included, and under what conditions?',
          'What documentation, inspections, or timelines does the program require?',
          'What share of eligible costs might apply in this case, rather than the "up to 90%" maximum?',
        ],
      },
      {
        type: 'heading',
        content: 'Questions for a roofing contractor',
        level: 3,
      },
      {
        type: 'list',
        content: '',
        items: [
          'What is the current roof condition, including covering, underlayment, flashing, and drainage?',
          'Is repair enough, or is replacement the more durable path?',
          'Which assemblies are Class A, and what detailing is required at edges and penetrations?',
          'What is the written scope and price for the roofing work itself?',
          'How is any contractor promotion calculated, separate from City assistance?',
        ],
      },
      {
        type: 'heading',
        content: 'What is PRC 13\'s additional 5% Colfax roofing offer?',
      },
      {
        type: 'paragraph',
        content: `**${COLFAX_FIVE_PERCENT_OFFER}** This PRC 13 promotion is independent of the City program and should not be combined with the City's "up to 90%" figure.`,
      },
      {
        type: 'heading',
        content: 'How can a Colfax homeowner get a roof inspection?',
      },
      {
        type: 'paragraph',
        content:
          'Request a free Colfax roof inspection with PRC 13 Roofing. The inspection is for understanding roof condition and roofing options.',
      },
      {
        type: 'links',
        content: 'Official sources and local roofing pages',
        links: [
          { label: 'City of Colfax Home Hardening (official)', href: COLFAX_CITY_PROGRAM_URL },
          { label: 'CAL FIRE Ready for Wildfire: Hardening Your Home', href: COLFAX_CALFIRE_HARDENING_URL },
          { label: 'Colfax roofing services', href: '/service-areas/colfax' },
          { label: 'Roof inspection', href: '/roof-inspection' },
          { label: 'Roof replacement', href: '/roof-replacement' },
          { label: 'Roof repair', href: '/roof-repair' },
          { label: 'Metal roofing', href: '/metal-roofing' },
        ],
      },
    ],
  },
];
