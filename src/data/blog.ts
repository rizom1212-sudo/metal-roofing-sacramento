import type { FaqItem } from '../components/FaqAccordion';
import { ASSETS } from './assets';
import { applyClusterLinkEnrichmentsToPosts } from './applyClusterLinkEnrichments';
import { roofInspectionClusterPosts } from './blogRoofInspectionCluster';
import { emergencyRoofRepairClusterPosts } from './blogEmergencyRoofRepairCluster';
import { folsomRoofingClusterPosts } from './blogFolsomRoofingCluster';
import { elDoradoHillsRoofingClusterPosts } from './blogElDoradoHillsRoofingCluster';
import { roofReplacementClusterPosts } from './blogRoofReplacementCluster';
import { metalRoofingClusterPosts } from './blogMetalRoofingCluster';

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

const rawBlogPosts: BlogPost[] = [
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
  ...roofInspectionClusterPosts,
  ...emergencyRoofRepairClusterPosts,
  ...folsomRoofingClusterPosts,
  ...elDoradoHillsRoofingClusterPosts,
  ...roofReplacementClusterPosts,
  ...metalRoofingClusterPosts,
];

export const blogPosts = applyClusterLinkEnrichmentsToPosts(rawBlogPosts);

export const ROOF_INSPECTION_CLUSTER_SLUGS = roofInspectionClusterPosts.map(post => post.slug);
export const EMERGENCY_ROOF_REPAIR_CLUSTER_SLUGS = emergencyRoofRepairClusterPosts.map(post => post.slug);
export const FOLSOM_ROOFING_CLUSTER_SLUGS = folsomRoofingClusterPosts.map(post => post.slug);
export const EL_DORADO_HILLS_ROOFING_CLUSTER_SLUGS = elDoradoHillsRoofingClusterPosts.map(post => post.slug);
export const ROOF_REPLACEMENT_CLUSTER_SLUGS = roofReplacementClusterPosts.map(post => post.slug);
export const METAL_ROOFING_CLUSTER_SLUGS = metalRoofingClusterPosts.map(post => post.slug);
