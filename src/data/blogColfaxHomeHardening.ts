import type { BlogPost, BlogRelatedService } from './blog';
import { ASSETS } from './assets';

export const COLFAX_CLUSTER_CATEGORY = 'Colfax Roofing';

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
    slug: 'colfax-home-hardening-program-2026-roofing-wildfire-protection',
    title:
      'Colfax Home Hardening Program 2026: What Homeowners Should Know About Roofing and Wildfire Protection',
    seoTitle: 'Colfax Home Hardening Program 2026 | Roofing Guide | PRC 13',
    excerpt:
      'Learn how the City of Colfax Home Hardening and Defensible Space Program works, what “up to 90%” means in careful terms, and how Class A roofing fits wildfire protection planning.',
    date: 'August 13, 2026',
    updatedDate: 'August 13, 2026',
    readTime: '9 min read',
    category: COLFAX_CLUSTER_CATEGORY,
    coverImage: COVER,
    relatedServices: coreServices(),
    relatedArticles: [
      { label: 'Signs you may need roof replacement', href: '/blog/signs-you-need-roof-replacement-sacramento' },
      { label: 'Roof repair vs roof replacement', href: '/blog/roof-repair-vs-roof-replacement' },
    ],
    faqs: [
      {
        question: 'What is the City of Colfax Home Hardening Program?',
        answer:
          'It is a City of Colfax Home Hardening and Defensible Space Program intended to reduce wildfire risk for qualifying residential properties within Colfax city limits. Confirm current details on the City’s official Home Hardening page.',
      },
      {
        question: 'What does “up to 90%” mean?',
        answer:
          'Colfax homeowners may be eligible for assistance covering up to 90% of qualifying home-hardening and defensible-space improvements through the City’s program. It is not a guarantee that every roof project receives 90% funding.',
      },
      {
        question: 'Is PRC 13 Roofing part of the City program?',
        answer:
          'No. PRC 13 Roofing is a roofing contractor that serves Colfax homeowners. The City program is administered separately. Confirm eligibility and covered improvements with the official City resource.',
      },
      {
        question: 'Can roofing be included in home hardening?',
        answer:
          'Roofing may be considered when it aligns with program-approved measures for a property. Coverage is not automatic for every roof replacement.',
      },
      {
        question: 'What is PRC 13’s Colfax 5% offer?',
        answer:
          'PRC 13 Roofing is offering Colfax homeowners an additional 5% off qualifying roofing work. The offer is from PRC 13 only and is separate from City or government program assistance.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: The City of Colfax operates a Home Hardening and Defensible Space Program for residential properties within city limits, and Colfax homeowners may be eligible for assistance covering up to 90% of qualifying home-hardening and defensible-space improvements. Roofing can matter for wildfire readiness, but program eligibility and covered work are decided through the City’s process, not by a contractor marketing page.',
      },
      {
        type: 'paragraph',
        content:
          'This guide is current for 2026 and last updated in August 2026. Program rules can change. Always verify details on the [official City of Colfax Home Hardening page](https://colfax-ca.gov/homehardening/).',
      },
      {
        type: 'heading',
        content: 'What the City of Colfax program is designed to do',
      },
      {
        type: 'paragraph',
        content:
          'The City of Colfax Home Hardening and Defensible Space Program is designed to reduce wildfire risk for qualifying residential properties. According to City communications, the program is open to Colfax homeowners without an income limit. Recommended measures can differ from home to home after program review.',
      },
      {
        type: 'heading',
        content: 'How to read the “up to 90%” language carefully',
      },
      {
        type: 'paragraph',
        content:
          'Colfax homeowners may be eligible for assistance covering up to 90% of qualifying home-hardening and defensible-space improvements through the City’s program. That statement does not mean FEMA pays for 90% of every roof, that every homeowner receives a fixed discount on a full reroof, or that a contractor can guarantee City funding.',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Eligibility is determined through the program.',
          'Qualifying improvements vary by property.',
          'Recommended measures may not include a full roof replacement on every home.',
          'PRC 13 Roofing is not the City of Colfax, FEMA, CAL FIRE, Cal OES, or the program administrator.',
        ],
      },
      {
        type: 'heading',
        content: 'Why roofs matter in wildfire-prone Colfax',
      },
      {
        type: 'paragraph',
        content:
          'Colfax sits in the Placer County foothills, where wildfire and ember exposure are practical homeowner concerns. Roofs can be vulnerable when flying embers land in debris, ignite aged materials, or find openings at edges and penetrations. Keeping gutters clearer and planning fire-resistant assemblies during replacement are common readiness topics alongside defensible space.',
      },
      {
        type: 'heading',
 content: 'Class A and fire-resistant roofing, in plain language',
      },
      {
        type: 'paragraph',
        content:
 'Class A describes a roof assembly’s fire-performance rating under standardized testing. It is about the installed system, not only a product brochure claim. When comparing [roof replacement](/roof-replacement) or [metal roofing](/metal-roofing) options, ask which assembly rating applies and how edges, underlayment, and penetrations will be detailed.',
      },
      {
        type: 'heading',
 content: 'Where PRC 13 Roofing fits, and where it does not',
      },
      {
        type: 'paragraph',
        content:
          'PRC 13 Roofing provides roof inspections, roof repair, and roof replacement services to homeowners in Colfax, California. We can document roof condition, discuss Class A and fire-resistant options, and provide clear contractor pricing. We cannot approve City program eligibility or speak for FEMA, CAL FIRE, Cal OES, or the City of Colfax.',
      },
      {
        type: 'heading',
        content: 'PRC 13’s additional 5% Colfax roofing offer',
      },
      {
        type: 'paragraph',
        content:
          'Separately from any government or City assistance, PRC 13 Roofing is offering Colfax homeowners an additional 5% off qualifying roofing work. This promotional offer is from PRC 13 Roofing only and is not affiliated with the City of Colfax Home Hardening and Defensible Space Program.',
      },
      {
        type: 'heading',
        content: 'Practical next steps for Colfax homeowners',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Review the official City of Colfax Home Hardening resource for current program steps.',
          'Schedule a free roof inspection so you understand repair vs replacement needs.',
          'Ask about Class A or fire-resistant assemblies if you are planning a reroof.',
          'Keep City program questions and contractor estimates clearly separated.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Start with PRC 13’s [Colfax roofing services page](/service-areas/colfax) for local service details, or [request a Colfax roof inspection](/contact) when you are ready to evaluate the roof itself.',
      },
      {
        type: 'links',
        content: 'Helpful links',
        links: [
          { label: 'City of Colfax Home Hardening (official)', href: 'https://colfax-ca.gov/homehardening/' },
          { label: 'Colfax roofing services', href: '/service-areas/colfax' },
          { label: 'Roof inspection', href: '/roof-inspection' },
          { label: 'Roof replacement', href: '/roof-replacement' },
        ],
      },
    ],
  },
];
