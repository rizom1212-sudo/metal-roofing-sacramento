import { ASSETS } from './assets';

export interface BlogRelatedService {
  label: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  body: BlogSection[];
  relatedServices: BlogRelatedService[];
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list';
  content: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-long-does-roof-replacement-take',
    title: 'How Long Does a Roof Replacement Take in Sacramento?',
    excerpt:
      'Most Sacramento homeowners are surprised at how quickly a full roof replacement can be completed. Here\'s what to expect from start to finish.',
    date: 'May 12, 2026',
    readTime: '4 min read',
    category: 'Roof Replacement',
    coverImage: ASSETS.blog('22dc3636-c588-43bd-a30f-c855b3fcce4f.webp'),
    relatedServices: [
      { label: 'Roof Replacement', href: '/roof-replacement' },
      { label: 'Free Roof Inspection', href: '/roof-inspection' },
      { label: 'Project Gallery', href: '/gallery' },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'One of the most common questions we get at PRC 13 Roofing is: "How long is this going to take?" The good news is that most residential roof replacements in Sacramento are completed in one to two days.',
      },
      {
        type: 'heading',
        content: 'Day 1: Tear-Off and Decking Inspection',
      },
      {
        type: 'paragraph',
        content:
          'Our crew arrives early and begins removing your old shingles, underlayment, and any damaged decking. Once the roof is stripped, we inspect the plywood decking for rot or soft spots and replace any compromised sections.',
      },
      {
        type: 'heading',
        content: 'Day 1 to 2: New Roof Installation',
      },
      {
        type: 'paragraph',
        content:
          'After the decking is verified, we install new underlayment, ice and water shield at the eaves, and then the new shingles or metal roofing panels. Ridge cap, flashing around chimneys and vents, and all finishing details are completed before the crew leaves.',
      },
      {
        type: 'heading',
        content: 'Factors That Can Extend the Timeline',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Large or steeply pitched roofs require more time and safety rigging',
          'Significant decking damage requires replacement before installation continues',
          'Multiple roofing layers, since some older Sacramento homes have 2 to 3 layers',
          'Weather delays because we do not install in rain',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Once your job is done, we walk the completed project with you before we consider the job finished. Every project ends with a full cleanup, including magnets for nails, debris removal, and a final inspection.',
      },
    ],
  },
  {
    slug: 'signs-you-need-roof-replacement-sacramento',
    title: '7 Signs Your Sacramento Roof Needs Replacement (Not Just a Repair)',
    excerpt:
      'Sacramento\'s hot summers and occasional winter storms take a real toll on roofing systems. Here are the warning signs that repair alone won\'t cut it.',
    date: 'April 28, 2026',
    readTime: '5 min read',
    category: 'Roof Replacement',
    coverImage: ASSETS.blog('6998f81b8713f61878709b43.jpg'),
    relatedServices: [
      { label: 'Roof Replacement', href: '/roof-replacement' },
      { label: 'Roof Repair', href: '/roof-repair' },
      { label: 'Roof Inspection', href: '/roof-inspection' },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Not every roofing problem calls for a full replacement, but some do. The challenge is knowing the difference. At PRC 13 Roofing, we give Sacramento homeowners honest answers, even when a repair is all they actually need.',
      },
      {
        type: 'heading',
        content: 'The 7 Signs',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Your roof is 20+ years old, since most asphalt shingles have a 20 to 25 year lifespan in Sacramento\'s climate',
          'You\'ve repaired the same area more than once, which can signal underlying structural issues',
          'You can see granule loss in your gutters, a sign your shingles may be near the end of their life',
          'Multiple shingles are curling, cracking, or missing, making spot repairs less practical',
          'Your energy bills have climbed unexpectedly, which can point to roof ventilation or insulation issues',
          'You see sagging sections, which can indicate decking or structural damage',
          'Your neighbor has already replaced their roof, since homes in subdivisions tend to age together',
        ],
      },
      {
        type: 'paragraph',
        content:
          'If you\'re seeing two or more of these signs, it\'s worth scheduling a free inspection. We\'ll tell you honestly whether a repair can extend the life of your roof or whether replacement is the smarter investment.',
      },
    ],
  },
  {
    slug: 'how-insurance-claims-work-for-roof-damage',
    title: 'How Insurance Claims Work for Roof Damage in Sacramento',
    excerpt:
      'Filing a roof damage claim can feel overwhelming. Here\'s how the process actually works and how PRC 13 helps Sacramento homeowners every step of the way.',
    date: 'April 10, 2026',
    readTime: '6 min read',
    category: 'Insurance',
    coverImage: ASSETS.blog('Screenshot_2026-05-20_at_10.49.35.png'),
    relatedServices: [
      { label: 'Emergency Roof Repair', href: '/emergency-roof-repair' },
      { label: 'Roof Repair', href: '/roof-repair' },
      { label: 'Roof Replacement', href: '/roof-replacement' },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'After a storm, many Sacramento homeowners aren\'t sure whether their roof damage is serious enough to file a claim or how to start that process. Here\'s a straightforward walkthrough of how it works.',
      },
      {
        type: 'heading',
        content: 'Step 1: Document the Damage',
      },
      {
        type: 'paragraph',
        content:
          'Before calling your insurance company, get a professional inspection done. We\'ll document every issue with photos, notes, and a written assessment. This documentation is critical for your claim.',
      },
      {
        type: 'heading',
        content: 'Step 2: File Your Claim',
      },
      {
        type: 'paragraph',
        content:
          'Contact your homeowner\'s insurance provider and report the storm damage. They\'ll assign an adjuster to come assess the roof. Having our written report in hand at this stage strengthens your claim significantly.',
      },
      {
        type: 'heading',
        content: 'Step 3: The Adjuster Visits',
      },
      {
        type: 'paragraph',
        content:
          'We can be present during the adjuster\'s visit to walk them through the damage we\'ve documented. This helps ensure nothing gets missed and that the scope of damage is accurately represented.',
      },
      {
        type: 'heading',
        content: 'Step 4: Approval and Scheduling',
      },
      {
        type: 'paragraph',
        content:
          'Once your claim is approved, you\'ll receive a settlement amount. We work within that budget to complete your roof replacement or repair. In many cases, the out-of-pocket cost is limited to your deductible.',
      },
    ],
  },
  {
    slug: 'metal-roofing-vs-shingles-sacramento',
    title: 'Metal Roofing vs. Shingles: Which Is Right for Your Sacramento Home?',
    excerpt:
      'Both options have real advantages. The right choice depends on your budget, how long you plan to stay, and your home\'s style. Here\'s an honest comparison.',
    date: 'March 22, 2026',
    readTime: '5 min read',
    category: 'Roofing Materials',
    coverImage: ASSETS.blog('035dfafc-8416-46bd-b5ab-f8c6b6b4eff9.webp'),
    relatedServices: [
      { label: 'Metal Roofing', href: '/metal-roofing' },
      { label: 'Roof Replacement', href: '/roof-replacement' },
      { label: 'Free Roof Inspection', href: '/roof-inspection' },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'When Sacramento homeowners ask us about metal roofing, they usually have one of two reactions: either they love the look, or they\'re worried about cost. Both reactions are understandable. Here\'s what you actually need to know.',
      },
      {
        type: 'heading',
        content: 'Architectural Shingles: The Proven Choice',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Lower upfront cost, typically 40 to 60% less than metal',
          '20 to 30 year lifespan in Sacramento\'s climate',
          'Wide variety of styles and colors',
          'Easier to repair if individual sections are damaged',
          'The most common choice among Sacramento homeowners',
        ],
      },
      {
        type: 'heading',
        content: 'Metal Roofing: The Long-Term Investment',
      },
      {
        type: 'list',
        content: '',
        items: [
          '50+ year lifespan that may be the last roof you ever install',
          'Excellent performance in Sacramento\'s heat because it reflects solar energy',
          'Very low maintenance once installed',
          'Higher upfront cost, but lower lifetime cost',
          'Adds resale value and curb appeal',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Our honest recommendation: if you\'re planning to stay in your home long-term and want the lowest lifetime cost, metal is worth the investment. If you\'re on a tighter budget or planning to sell within 10 years, architectural shingles are a great, reliable choice.',
      },
    ],
  },
];
