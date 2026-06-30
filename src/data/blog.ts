import type { FaqItem } from '../components/FaqAccordion';
import { ASSETS } from './assets';
import { roofInspectionClusterPosts } from './blogRoofInspectionCluster';
import { emergencyRoofRepairClusterPosts } from './blogEmergencyRoofRepairCluster';
import { folsomRoofingClusterPosts } from './blogFolsomRoofingCluster';

export interface BlogRelatedService {
  label: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  date: string;
  updatedDate?: string;
  readTime: string;
  category: string;
  coverImage: string;
  body: BlogSection[];
  relatedServices: BlogRelatedService[];
  relatedArticles?: BlogRelatedService[];
  faqs?: FaqItem[];
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'links';
  content: string;
  items?: string[];
  links?: BlogRelatedService[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-to-do-roof-leak-sacramento-storm',
    title: 'What to Do When Your Roof Leaks During a Sacramento Storm',
    seoTitle: 'Roof Leak During a Sacramento Storm? What to Do',
    excerpt:
      'If your roof starts leaking during heavy Sacramento rain, contain the water, avoid going on the roof, document the damage, and schedule an inspection as soon as it is safe.',
    date: 'May 26, 2026',
    readTime: '5 min read',
    category: 'Roof Repair',
    coverImage: ASSETS.blog('Screenshot_2026-05-20_at_10.49.35.png'),
    relatedServices: [
      { label: 'Emergency Roof Repair', href: '/emergency-roof-repair' },
      { label: 'Roof Repair', href: '/roof-repair' },
      { label: 'Roof Inspection', href: '/roof-inspection' },
      { label: 'Sacramento Service Areas', href: '/service-areas' },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: protect the inside of your home first. Put a bucket under active dripping, move furniture and valuables away from the area, take photos, and call a roofer once the situation is safe. Do not climb onto a wet roof.',
      },
      {
        type: 'heading',
        content: '1. Contain the Water Inside',
      },
      {
        type: 'paragraph',
        content:
          'Place buckets, towels, or plastic sheeting where water is entering. If the ceiling is bulging, that can mean water is pooling above the drywall. Avoid standing under the bulge and call for help quickly.',
      },
      {
        type: 'heading',
        content: '2. Document the Leak for Insurance',
      },
      {
        type: 'paragraph',
        content:
          'Take photos of ceiling stains, active dripping, damaged shingles visible from the ground, and any affected belongings. Documentation helps if the damage came from wind, falling debris, or another covered storm event.',
      },
      {
        type: 'heading',
        content: '3. Avoid Temporary Roof Work During Rain',
      },
      {
        type: 'paragraph',
        content:
          'Wet roofs are dangerous, especially on tile, metal, or steep shingle roofs. A professional roofer can assess whether temporary weatherproofing is safe and useful after conditions improve.',
      },
      {
        type: 'heading',
        content: '4. Schedule a Roof Inspection',
      },
      {
        type: 'paragraph',
        content:
          'The visible leak is not always directly below the roof failure. Water can travel along rafters, decking, underlayment, or flashing before showing up indoors. A roof inspection helps identify the actual source.',
      },
    ],
  },
  {
    slug: 'sacramento-roof-maintenance-checklist',
    title: 'Sacramento Roof Maintenance Checklist: What to Check Each Season',
    seoTitle: 'Sacramento Roof Maintenance Checklist',
    excerpt:
      'A simple seasonal roof maintenance checklist for Sacramento homeowners: gutters, flashing, shingles, attic ventilation, and storm-readiness before winter rain.',
    date: 'May 18, 2026',
    updatedDate: 'May 26, 2026',
    readTime: '6 min read',
    category: 'Maintenance',
    coverImage: ASSETS.blog('22dc3636-c588-43bd-a30f-c855b3fcce4f.webp'),
    relatedServices: [
      { label: 'Roof Inspection', href: '/roof-inspection' },
      { label: 'Roof Repair', href: '/roof-repair' },
      { label: 'Gutters & Siding', href: '/gutters-siding' },
      { label: 'Roof Replacement', href: '/roof-replacement' },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: Sacramento homeowners should check their roof before winter rain, after wind events, and after long hot summers. Look for missing shingles, clogged gutters, cracked sealant, loose flashing, attic moisture, and signs of sagging or soft decking.',
      },
      {
        type: 'heading',
        content: 'Before Winter Rain',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Clean gutters and downspouts so water can drain away from fascia and roof edges',
          'Check valleys for leaves, branches, and debris that can trap water',
          'Look for cracked roof sealant around vents, skylights, chimneys, and pipe boots',
          'Schedule a roof inspection if you see stains, soft spots, or prior leak areas',
        ],
      },
      {
        type: 'heading',
        content: 'After Wind or Storm Events',
      },
      {
        type: 'paragraph',
        content:
          'Walk the property from the ground and look for lifted shingles, missing ridge caps, debris impact areas, and metal flashing that appears bent or loose. If you see damage, document it with photos before cleanup.',
      },
      {
        type: 'heading',
        content: 'After Sacramento Heat Waves',
      },
      {
        type: 'paragraph',
        content:
          'Long stretches of heat can accelerate shingle aging, granule loss, and attic ventilation problems. If your roof is older or your energy bills have climbed, a maintenance inspection can help you plan before leaks appear.',
      },
      {
        type: 'heading',
        content: 'When Maintenance Is Not Enough',
      },
      {
        type: 'paragraph',
        content:
          'Repeated leaks, widespread curling shingles, soft decking, and a roof near the end of its expected lifespan may point toward replacement instead of another repair. PRC 13 Roofing explains both options clearly before you decide.',
      },
    ],
  },
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
    seoTitle: '7 Signs Your Sacramento Roof Needs Replacement',
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
    seoTitle: 'Roof Damage Insurance Claims in Sacramento',
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
    seoTitle: 'Metal Roofing vs. Shingles in Sacramento',
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
  ...roofInspectionClusterPosts,
  ...emergencyRoofRepairClusterPosts,
  ...folsomRoofingClusterPosts,
];

export const ROOF_INSPECTION_CLUSTER_SLUGS = roofInspectionClusterPosts.map(post => post.slug);
export const EMERGENCY_ROOF_REPAIR_CLUSTER_SLUGS = emergencyRoofRepairClusterPosts.map(post => post.slug);
export const FOLSOM_ROOFING_CLUSTER_SLUGS = folsomRoofingClusterPosts.map(post => post.slug);
