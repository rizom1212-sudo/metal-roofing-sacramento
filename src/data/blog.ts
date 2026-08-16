import { ASSETS } from './assets';
import type { BlogPost } from './blogTypes';

export type { BlogPost, BlogRelatedService, BlogSection } from './blogTypes';
import { applyClusterLinkEnrichmentsToPosts } from './applyClusterLinkEnrichments';
import { applyBlogRetargets } from './applyBlogRetargets';
import { RETIRED_BLOG_SLUGS } from './urlPolicy';
import { rewriteLinksInUnknownValue } from '../lib/rewritePublicLinks';
import { roofInspectionClusterPosts } from './blogRoofInspectionCluster';
import { emergencyRoofRepairClusterPosts } from './blogEmergencyRoofRepairCluster';
import { folsomRoofingClusterPosts } from './blogFolsomRoofingCluster';
import { elDoradoHillsRoofingClusterPosts } from './blogElDoradoHillsRoofingCluster';
import { colfaxRoofingClusterPosts } from './blogColfaxHomeHardening';
import { roofReplacementClusterPosts } from './blogRoofReplacementCluster';
import { metalRoofingClusterPosts } from './blogMetalRoofingCluster';
import { guttersFasciaClusterPosts } from './blogGuttersFasciaCluster';
import { commercialRoofingClusterPosts } from './blogCommercialRoofingCluster';
import { roofRepairClusterPosts } from './blogRoofRepairCluster';
import {
  phase4EmergencyPosts,
  phase4RepairPosts,
  phase4ReplacementPosts,
  phase4MetalPosts,
} from './blogPhase4TopicalAuthority';

const BLOG_CATEGORY_DISPLAY: Record<string, string> = {
  'Roof Inspection': 'Metal Roof Inspection',
  'Sacramento Roof Replacement': 'Metal Roof Replacement',
  'Sacramento Roof Repair': 'Metal Roof Repair',
  'Commercial Roofing': 'Commercial Metal Roofing',
  'Emergency Roof Repair': 'Metal Roof Leak Help',
  'Gutters & Fascia': 'Metal Roofing Guides',
  'Folsom Roofing': 'Folsom Metal Roofing',
  'El Dorado Hills Roofing': 'El Dorado Hills Metal Roofing',
  'Colfax Roofing': 'Colfax Metal Roofing',
  'Metal Roofing': 'Metal Roofing',
};

/** Display label only. Do not use for filters — those match original category constants. */
export function displayBlogCategory(category: string): string {
  return BLOG_CATEGORY_DISPLAY[category] ?? category;
}

const rawBlogPosts: BlogPost[] = [
  {
    slug: 'what-to-do-roof-leak-sacramento-storm',
    title: 'What to Do When Your Roof Leaks During a Sacramento Storm',
    seoTitle: 'Roof Leak During a Sacramento Storm? What to Do',
    excerpt:
      'If your roof leaks during heavy Sacramento rain, contain water indoors, avoid climbing on the roof, document damage, and schedule an inspection when safe.',
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
    faqs: [
      {
        question: 'What should I do first if my roof leaks during a Sacramento storm?',
        answer:
          'Protect the inside of your home first. Place a bucket or towels under active dripping, move furniture away from the area, and avoid standing under a bulging ceiling. Do not climb onto a wet roof.',
      },
      {
        question: 'Should I go on the roof during rain to stop a leak?',
        answer:
          'No. Wet tile, metal, and steep shingle roofs are dangerous during storms. A professional roofer can assess whether temporary weatherproofing is safe after conditions improve.',
      },
      {
        question: 'Should I document storm roof damage for insurance?',
        answer:
          'Yes. Take photos of ceiling stains, active dripping, damaged shingles visible from the ground, and affected belongings. Documentation helps if wind, debris, or another covered event caused the damage.',
      },
      {
        question: 'Why is the ceiling stain not always below the roof leak?',
        answer:
          'Water can travel along rafters, decking, underlayment, or flashing before it shows up indoors. A roof inspection helps identify the actual entry point on the roof.',
      },
      {
        question: 'When should I call PRC 13 after a storm leak?',
        answer:
 'Call as soon as it is safe, especially if water is actively entering the home. PRC 13 can help with emergency response and schedule a full inspection to find the source.',
      },
      {
        question: 'Can PRC 13 inspect my roof after the storm passes?',
        answer:
          'Yes. Once conditions are safe, schedule a roof inspection so the failure can be traced on the roof and documented with clear next steps.',
      },
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
    faqs: [
      {
        question: 'How often should Sacramento homeowners check their roof?',
        answer:
          'Check before winter rain, after wind events, and after long hot summers. Seasonal checks help catch missing shingles, clogged gutters, and cracked sealant before leaks appear indoors.',
      },
      {
        question: 'What should I check before Sacramento winter rain?',
        answer:
          'Clean gutters and downspouts, clear debris from valleys, inspect sealant around vents and skylights, and schedule a roof inspection if you see stains or soft spots.',
      },
      {
        question: 'What roof damage should I look for after wind?',
        answer:
          'From the ground, look for lifted shingles, missing ridge caps, debris impact areas, and flashing that appears bent or loose. Document damage with photos before cleanup.',
      },
      {
        question: 'How does Sacramento heat affect roof maintenance?',
        answer:
          'Long heat stretches can accelerate shingle aging, granule loss, and attic ventilation problems. A maintenance inspection helps you plan before leaks develop.',
      },
      {
        question: 'When is maintenance not enough?',
        answer:
          'Repeated leaks, widespread curling shingles, soft decking, or a roof near the end of its expected lifespan may point toward replacement instead of another repair.',
      },
      {
        question: 'Does PRC 13 offer maintenance inspections in Sacramento?',
        answer:
          'Yes. PRC 13 provides free roof inspections with written findings so homeowners understand whether repair, maintenance, or replacement makes sense.',
      },
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
    faqs: [
      {
        question: 'Should I get a roof inspection before filing an insurance claim?',
        answer:
          'Yes. A professional inspection with photos, notes, and a written assessment strengthens your claim before you contact your insurance company.',
      },
      {
        question: 'How do I start a roof damage insurance claim in Sacramento?',
        answer:
          'Contact your homeowner\'s insurance provider and report the storm damage. They will assign an adjuster to assess the roof. Having a written inspection report in hand helps at this stage.',
      },
      {
        question: 'Can PRC 13 meet with the insurance adjuster?',
        answer:
          'Yes. PRC 13 can be present during the adjuster visit to walk through documented damage and help ensure the scope is accurately represented.',
      },
      {
        question: 'What happens after my roof claim is approved?',
        answer:
          'You receive a settlement amount. PRC 13 works within that budget to complete your roof repair or replacement. In many cases, out-of-pocket cost is limited to your deductible.',
      },
      {
        question: 'Does PRC 13 help with both repair and replacement claims?',
        answer:
          'Yes. PRC 13 helps Sacramento homeowners with storm-related roof repair and full replacement depending on the documented damage and approved scope.',
      },
      {
        question: 'What documentation does PRC 13 provide for claims?',
        answer:
 'PRC 13 documents issues with photos, notes, and a written assessment, information homeowners can use when filing a claim and meeting with an adjuster.',
      },
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
  ...phase4EmergencyPosts,
  ...folsomRoofingClusterPosts,
  ...elDoradoHillsRoofingClusterPosts,
  ...colfaxRoofingClusterPosts,
  ...roofReplacementClusterPosts,
  ...phase4ReplacementPosts,
  ...metalRoofingClusterPosts,
  ...phase4MetalPosts,
  ...guttersFasciaClusterPosts,
  ...commercialRoofingClusterPosts,
  ...roofRepairClusterPosts,
  ...phase4RepairPosts,
];

export const blogPosts = applyBlogRetargets(
  applyClusterLinkEnrichmentsToPosts(rawBlogPosts)
    .filter(post => !(RETIRED_BLOG_SLUGS as readonly string[]).includes(post.slug))
    .map(post => rewriteLinksInUnknownValue(post)),
);

export const ROOF_INSPECTION_CLUSTER_SLUGS = roofInspectionClusterPosts.map(post => post.slug);
export const EMERGENCY_ROOF_REPAIR_CLUSTER_SLUGS = emergencyRoofRepairClusterPosts.map(post => post.slug);
export const FOLSOM_ROOFING_CLUSTER_SLUGS = folsomRoofingClusterPosts.map(post => post.slug);
export const EL_DORADO_HILLS_ROOFING_CLUSTER_SLUGS = elDoradoHillsRoofingClusterPosts.map(post => post.slug);
export const COLFAX_ROOFING_CLUSTER_SLUGS = colfaxRoofingClusterPosts.map(post => post.slug);
export const ROOF_REPLACEMENT_CLUSTER_SLUGS = roofReplacementClusterPosts.map(post => post.slug);
export const METAL_ROOFING_CLUSTER_SLUGS = metalRoofingClusterPosts.map(post => post.slug);
export const GUTTERS_FASCIA_CLUSTER_SLUGS = guttersFasciaClusterPosts.map(post => post.slug);
export const COMMERCIAL_ROOFING_CLUSTER_SLUGS = commercialRoofingClusterPosts.map(post => post.slug);
export const ROOF_REPAIR_CLUSTER_SLUGS = roofRepairClusterPosts.map(post => post.slug);
