import type { BlogPost, BlogRelatedService } from './blogTypes';
import { ASSETS } from './assets';
import { METAL_CLUSTER_CATEGORY } from './blogCategories';

const COVER_A = ASSETS.blog('Screenshot_2026-05-20_at_10.49.35.png');
const COVER_C = ASSETS.blog('6998f81b8713f61878709b43.jpg');
const COVER_D = ASSETS.blog('035dfafc-8416-46bd-b5ab-f8c6b6b4eff9.webp');

const DATE = 'August 2, 2026';

const article = (slug: string, label: string): BlogRelatedService => ({
  label,
  href: `/blog/${slug}`,
});

const sacramento = (): BlogRelatedService => ({
  label: 'Sacramento Service Area',
  href: '/service-areas/sacramento',
});

const contact = (): BlogRelatedService => ({
  label: 'Contact PRC 13',
  href: '/contact',
});

export const phase4MetalPosts: BlogPost[] = [
  {
    slug: 'how-long-does-standing-seam-metal-roof-last',
    title: 'How Long Does a Standing Seam Metal Roof Last?',
    seoTitle: 'How Long Does Standing Seam Metal Roofing Last?',
    excerpt:
      'Standing seam metal is built for long service life when installed and detailed correctly. Learn what affects longevity for Sacramento homes.',
    date: DATE,
    readTime: '7 min read',
    category: METAL_CLUSTER_CATEGORY,
    coverImage: COVER_C,
    relatedServices: [
      { label: 'Standing Seam Metal Roofing', href: '/standing-seam-metal-roofing' },
      { label: 'Metal Roofing', href: '/metal-roofing' },
      sacramento(),
      contact(),
    ],
    relatedArticles: [
      article('standing-seam-metal-roofing-sacramento', 'Standing seam metal roofing Sacramento'),
      article('metal-roof-repair-vs-replacement', 'Metal roof repair vs replacement'),
      article('metal-roofing-cost-sacramento', 'Metal roofing cost Sacramento'),
    ],
    faqs: [
      {
        question: 'How long does standing seam metal roofing last?',
        answer:
 'Standing seam systems are designed for long, multi-decade service when panels, underlayment, and flashing are installed correctly. Actual life depends on climate exposure, maintenance, and detail quality, not a single fixed number for every home.',
      },
      {
        question: 'Does Sacramento heat shorten metal roof life?',
        answer:
          'Metal handles heat well compared with many asphalt systems, especially with proper underlayment and ventilation. UV and thermal movement still make quality fastening and trim details important.',
      },
      {
        question: 'What usually ends a metal roof’s useful life?',
        answer:
          'Failed flashings, fastener or clip issues on some systems, impact damage, corrosion in harsh exposures, or underlayment problems can drive major work before panels themselves are “worn out.”',
      },
      {
        question: 'Do warranties determine exact lifespan?',
        answer:
          'Manufacturer and workmanship warranties vary by product and project. Ask for current warranty terms during your consultation rather than relying on general online claims.',
      },
      {
        question: 'Is standing seam longer-lasting than exposed-fastener metal?',
        answer:
          'Concealed-fastener standing seam avoids many exposed penetration points. Longevity still depends on installation quality and ongoing condition of flashings and accessories.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: a standing seam metal roof is designed for long, multi-decade service when the panel system, underlayment, and flashings are installed correctly. Lifespan is not a single guaranteed number, it depends on product, detailing, climate exposure, and how well transitions are maintained over time.',
      },
      {
        type: 'heading',
        content: 'What Affects Standing Seam Longevity',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Panel system and finish quality selected for the project',
          'Underlayment and ventilation beneath the metal',
          'Flashing and trim details at valleys, walls, and penetrations',
          'Installation quality, including fastening and seam integrity',
          'Debris, tree impact risk, and coastal or industrial exposure where relevant',
          'Timely attention to damaged flashings or accessory failures',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Sacramento’s summer heat and winter rain reward systems that move with temperature changes and shed water cleanly at edges. Standing seam’s concealed fasteners are one reason homeowners choose it for long-term performance, but edge metal and wall transitions still need correct design.',
      },
      {
        type: 'heading',
        content: 'Common Mistakes About Metal Roof Lifespan',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Treating a marketing lifespan claim as a guarantee for every installation',
          'Ignoring flashing problems because the panels still look new',
          'Skipping underlayment or ventilation conversations during replacement',
          'Assuming no maintenance is ever needed',
        ],
      },
      {
        type: 'heading',
        content: 'When to Call a Professional',
      },
      {
        type: 'paragraph',
        content:
 'If you are comparing standing seam for a Sacramento replacement, or evaluating an existing metal roof, schedule a free inspection. PRC 13 can explain system options and what drives long-term performance on your home. Financing may be available on qualifying projects.',
      },
      {
        type: 'links',
        content: 'Helpful links:',
        links: [
          { label: 'Standing seam metal roofing', href: '/standing-seam-metal-roofing' },
          sacramento(),
          contact(),
          article('standing-seam-metal-roofing-sacramento', 'Standing seam overview'),
          article('metal-roofing-vs-shingles-sacramento', 'Metal vs shingles'),
        ],
      },
      {
        type: 'paragraph',
        content:
          'Considering standing seam for a long-term roof? Contact PRC 13 for a free Sacramento consultation and a written quote based on your home’s details.',
      },
    ],
  },
  {
    slug: 'how-should-a-metal-roof-be-cleaned',
    title: 'How Should a Metal Roof Be Cleaned?',
    seoTitle: 'How Should a Metal Roof Be Cleaned? | Owner Guidance',
    excerpt:
 'Metal roof cleaning is owner maintenance, not a PRC 13 service. Learn safe guidance for debris, rinsing, and when to call a roofer instead.',
    date: DATE,
    readTime: '7 min read',
    category: METAL_CLUSTER_CATEGORY,
    coverImage: COVER_D,
    relatedServices: [
      { label: 'Metal Roof Inspection', href: '/metal-roof-inspection' },
      { label: 'Metal Roof Repair', href: '/metal-roof-repair' },
      { label: 'Metal Roofing', href: '/metal-roofing' },
      sacramento(),
      contact(),
    ],
    relatedArticles: [
      article('how-long-does-standing-seam-metal-roof-last', 'How long standing seam lasts'),
      article('metal-roof-repair-vs-replacement', 'Metal repair vs replacement'),
      article('metal-roofing-vs-shingles-sacramento', 'Metal vs shingles Sacramento'),
    ],
    faqs: [
      {
        question: 'Does PRC 13 clean metal roofs?',
        answer:
          'No. PRC 13 does not offer metal roof cleaning as a service. We provide installation, inspection, and repair or replacement guidance. Cleaning and routine washing are owner maintenance responsibilities.',
      },
      {
        question: 'How should a homeowner approach metal roof cleaning?',
        answer:
          'Prefer ground-based debris removal where safe, follow manufacturer guidance for rinsing and approved cleaners, and avoid abrasive tools or high-pressure methods that can damage finishes.',
      },
      {
        question: 'Is pressure washing safe on metal roofs?',
        answer:
          'High pressure can damage finishes, force water into seams, and create safety hazards. Check manufacturer recommendations and avoid aggressive pressure washing unless a qualified specialist following product guidance performs it.',
      },
      {
        question: 'When should I call a roofer instead of cleaning?',
        answer:
          'Call for inspection or repair if you see lifted panels, damaged flashings, active leaks, impact dents, or corrosion concerns. Cleaning will not fix those issues.',
      },
      {
        question: 'Can leaves and debris hurt a metal roof?',
        answer:
          'Debris in valleys and against walls can trap moisture and hide flashing problems. Clearing gutters and accessible debris from the ground reduces risk between professional inspections.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: metal roofs generally need light, careful maintenance, removing debris and following manufacturer cleaning guidance, not harsh scrubbing. Important: PRC 13 Roofing does not offer metal roof cleaning as a service. This article is owner and maintenance guidance only; for leaks or damaged details, schedule an inspection instead.',
      },
      {
        type: 'heading',
        content: 'Practical Owner Maintenance Guidance',
      },
      {
        type: 'paragraph',
        content:
          'Most metal roofs benefit from keeping valleys, gutters, and wall transitions clear of leaves and branches. When rinsing is appropriate, use gentle methods consistent with the panel manufacturer’s care instructions. Avoid abrasive pads, harsh chemicals not approved for the finish, and walking practices that dent panels or compromise seams.',
      },
      {
        type: 'list',
        content: 'Safer maintenance habits:',
        items: [
          'Clear gutters and downspouts from the ground when possible',
          'Remove debris buildup that traps moisture against flashings',
          'Follow the finish manufacturer’s cleaning recommendations',
          'Stay off wet or steep metal surfaces',
          'Document any dents, lifted trim, or stain patterns for an inspection',
        ],
      },
      {
        type: 'heading',
        content: 'Common Mistakes When Cleaning Metal Roofs',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Assuming PRC 13 or any installer automatically includes cleaning service',
          'Using high-pressure washing that drives water under seams',
          'Applying abrasive tools that dull or scratch the finish',
          'Treating a leak as a “dirt problem” instead of a flashing or panel issue',
        ],
      },
      {
        type: 'heading',
        content: 'When to Call a Professional Roofer',
      },
      {
        type: 'paragraph',
        content:
 'Call PRC 13 for a free roof inspection if you suspect damage, leaks, failed flashings, or impact problems. We install and evaluate metal roofing, we do not provide cleaning service. If your concern is dirt or organic growth alone, follow manufacturer care guidance or hire a cleaning specialist experienced with metal finishes.',
      },
      {
        type: 'links',
        content: 'Helpful links:',
        links: [
          { label: 'Metal roof inspection', href: '/metal-roof-inspection' },
          sacramento(),
          contact(),
          article('metal-roof-repair-vs-replacement', 'Metal repair vs replacement'),
          article('standing-seam-metal-roofing-sacramento', 'Standing seam metal roofing'),
        ],
      },
      {
        type: 'paragraph',
        content:
 'Need help with a metal roof issue that is more than cleaning? Contact PRC 13 for an inspection in Sacramento. For routine washing and debris cleaning, rely on manufacturer guidance or a qualified cleaning provider. PRC 13 does not offer that service.',
      },
    ],
  },
  {
    slug: 'metal-roof-repair-vs-replacement',
    title: 'Metal Roof Repair vs Replacement: How to Choose',
    seoTitle: 'Metal Roof Repair vs Replacement | Sacramento',
    excerpt:
      'Decide between metal roof repair and full replacement based on leak pattern, panel condition, flashing failures, and long-term plans for your Sacramento home.',
    date: DATE,
    readTime: '8 min read',
    category: METAL_CLUSTER_CATEGORY,
    coverImage: COVER_A,
    relatedServices: [
      { label: 'Metal Roof Repair', href: '/metal-roof-repair' },
      { label: 'Metal Roof Replacement', href: '/metal-roof-replacement' },
      { label: 'Metal Roof Inspection', href: '/metal-roof-inspection' },
      sacramento(),
      contact(),
    ],
    relatedArticles: [
      article('how-long-does-standing-seam-metal-roof-last', 'How long standing seam lasts'),
      article('metal-roofing-cost-sacramento', 'Metal roofing cost Sacramento'),
      article('metal-roof-over-shingles-sacramento', 'Metal roof over shingles'),
    ],
    faqs: [
      {
        question: 'Can a metal roof be repaired instead of replaced?',
        answer:
 'Yes, when damage is localized, such as a flashing failure, isolated panel issue, or accessory problem, and surrounding materials remain sound.',
      },
      {
        question: 'When does metal roof replacement make more sense?',
        answer:
          'Replacement deserves consideration when problems are widespread, underlayment is failing broadly, corrosion is extensive, or the system has reached the point where repeated repairs are not practical.',
      },
      {
        question: 'Are flashing leaks a reason to replace the whole metal roof?',
        answer:
          'Not automatically. Many leaks start at transitions and can be repaired if panels are otherwise in good condition. An inspection should separate flashing scope from full-system issues.',
      },
      {
        question: 'Is financing available for metal replacement?',
        answer:
          'Financing may be available on qualifying projects. Ask during your free inspection.',
      },
      {
        question: 'How does PRC 13 help me decide?',
        answer:
          'We inspect the metal system, explain what failed, and outline repair versus replacement options with clear findings before you commit.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: repair a metal roof when the failure is localized and the panels remain sound. Consider replacement when damage, corrosion, or underlayment problems are widespread, or when repeated fixes no longer protect the home reliably. An inspection should separate flashing repairs from full-system decisions.',
      },
      {
        type: 'heading',
        content: 'How to Weigh Repair Against Replacement',
      },
      {
        type: 'paragraph',
        content:
 'Metal systems often fail at details first: ridge caps, wall flashings, pipe penetrations, and edge metal. Those can be repairable. Broad corrosion, multiple active leaks across slopes, or underlayment breakdown beneath panels points toward a larger conversation. Your long-term plans for the home matter too, especially if you want a modern standing seam reset rather than ongoing patches.',
      },
      {
        type: 'list',
        content: 'Repair often fits when:',
        items: [
          'A single transition or penetration is the source',
          'Panels are largely intact and matching materials are available',
          'Fastener or accessory issues are limited in scope',
        ],
      },
      {
        type: 'list',
        content: 'Replacement deserves a closer look when:',
        items: [
          'Leaks continue after prior metal repairs',
          'Corrosion or coating failure is widespread',
          'Underlayment or decking problems are extensive',
          'You are ready to upgrade profile or system type',
        ],
      },
      {
        type: 'heading',
        content: 'Common Mistakes in Metal Repair Decisions',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Sealing over symptoms without inspecting underlayment and flashings',
          'Replacing an entire roof because of one repairable curb detail',
          'Ignoring manufacturer guidance on compatible repair materials',
          'Delaying inspection until the next storm expands interior damage',
        ],
      },
      {
        type: 'heading',
        content: 'When to Call a Professional',
      },
      {
        type: 'paragraph',
        content:
          'Schedule a free roof inspection when your Sacramento metal roof leaks, shows damage, or you are comparing long-term options. PRC 13 explains repair scope versus replacement clearly. Financing may be available on qualifying projects if replacement is the better path.',
      },
      {
        type: 'links',
        content: 'Helpful links:',
        links: [
          { label: 'Metal roof repair', href: '/metal-roof-repair' },
          { label: 'Metal roof replacement', href: '/metal-roof-replacement' },
          sacramento(),
          contact(),
          article('how-long-does-standing-seam-metal-roof-last', 'Standing seam lifespan'),
          article('metal-roofing-cost-sacramento', 'Metal roofing cost'),
        ],
      },
      {
        type: 'paragraph',
        content:
          'Unsure whether to repair or replace a metal roof? Contact PRC 13 for a free Sacramento inspection and a straightforward recommendation based on what we find.',
      },
    ],
  },
];
