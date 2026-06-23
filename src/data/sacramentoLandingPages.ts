import type { FaqItem } from '../components/FaqAccordion';
import { ASSETS } from './assets';

export type SacramentoSectionBg = 'white' | 'cream';

export type SacramentoLandingSection =
  | {
      kind: 'content';
      bg?: SacramentoSectionBg;
      eyebrow: string;
      heading: string;
      paragraphs: string[];
      bullets?: string[];
    }
  | {
      kind: 'split';
      bg?: SacramentoSectionBg;
      eyebrow: string;
      heading: string;
      intro?: string;
      leftTitle: string;
      leftItems: string[];
      rightTitle: string;
      rightItems: string[];
      closing?: string;
    }
  | {
      kind: 'insurance';
      eyebrow: string;
      heading: string;
      body: string;
    }
  | {
      kind: 'cards';
      bg?: SacramentoSectionBg;
      eyebrow: string;
      heading: string;
      intro?: string;
      cards: { title: string; desc: string }[];
    };

export interface SacramentoLandingPageConfig {
  path: string;
  metaTitle: string;
  metaDescription: string;
  pageName: string;
  serviceName: string;
  sourcePage: string;
  formSectionId: string;
  breadcrumbParent: { label: string; href: string };
  hero: {
    badge: string;
    h1: string;
    h1Accent?: string;
    subheadline: string;
    heroImage: string;
    heroAlt: string;
    primaryCta: 'call-and-inspection' | 'call-only' | 'inspection-only';
    trustItems: string[];
  };
  quickAnswer: {
    title: string;
    points: string[];
    body: string;
  };
  sections: SacramentoLandingSection[];
  faqs: FaqItem[];
  faqHeading: string;
  cta: {
    eyebrow: string;
    heading: string;
    subtext: string;
    checklist: string[];
    submitLabel: string;
  };
}

export const SACRAMENTO_LANDING_PATHS = [
  '/roof-repair-sacramento',
  '/emergency-roof-repair-sacramento',
  '/roof-inspection-sacramento',
] as const;

export const sacramentoLandingPages: Record<string, SacramentoLandingPageConfig> = {
  'roof-repair-sacramento': {
    path: '/roof-repair-sacramento',
    metaTitle: 'Roof Repair Sacramento, CA | Leak Repair & Free Inspections',
    metaDescription:
      'Need roof repair in Sacramento? PRC 13 Roofing helps with roof leaks, missing shingles, flashing issues, storm damage, and free roof inspections.',
    pageName: 'Roof Repair Sacramento',
    serviceName: 'Roof Repair in Sacramento, CA',
    sourcePage: 'roof-repair-sacramento',
    formSectionId: 'roof-repair-sacramento-quote',
    breadcrumbParent: { label: 'Roof Repair', href: '/roof-repair' },
    hero: {
      badge: 'Sacramento Roof Repair',
      h1: 'Roof Repair in Sacramento, CA',
      subheadline:
        'PRC 13 Roofing helps Sacramento homeowners fix roof leaks, missing shingles, flashing failures, and storm damage with honest inspections and clear repair recommendations.',
      heroImage: ASSETS.roofRepair('roof-repair-flat-roof-work.webp'),
      heroAlt: 'Roof repair work on a Sacramento home',
      primaryCta: 'call-and-inspection',
      trustItems: ['Licensed & Insured', 'Free Inspections', 'Written Estimates', 'Sacramento Local Team'],
    },
    quickAnswer: {
      title: 'Sacramento roof repair: quick answer',
      points: [
        'Leak repair, shingles, flashing, vents, and storm damage',
        'Free inspections with written findings',
        'Repair vs replacement guidance included',
        'Insurance documentation when storm damage applies',
      ],
      body:
        'Many Sacramento roof problems can be repaired without replacing the entire roof. PRC 13 Roofing inspects the leak source, checks surrounding materials, and explains the most practical fix for your home.',
    },
    sections: [
      {
        kind: 'content',
        bg: 'white',
        eyebrow: 'Local Repair Issues',
        heading: 'Common Roof Repair Problems in Sacramento',
        paragraphs: [
          'Sacramento roofs face long dry summers, Delta breeze gusts, mature street trees, and sudden winter rain. That combination often exposes weak flashing, aging pipe boots, and shingles that looked fine until the first heavy storm.',
        ],
        bullets: [
          'Ceiling stains after winter rain in East Sacramento and Land Park homes',
          'Missing or lifted shingles along sun-exposed ridgelines',
          'Granule loss and brittle tabs on aging architectural shingles',
          'Valley debris from mature oaks clogging drainage paths',
          'Cracked sealant at vents, skylights, and chimney bases',
          'Low-slope sections with membrane seams stressed by heat cycles',
        ],
      },
      {
        kind: 'content',
        bg: 'cream',
        eyebrow: 'Leak Repair',
        heading: 'Roof Leak Repair in Sacramento',
        paragraphs: [
          'A roof leak rarely starts where the water shows up indoors. We trace moisture paths across decking, insulation, and penetrations to find the actual failure point before recommending a repair.',
          'Sacramento leak repairs often involve pipe boots, valley metal, chimney flashing, or wind-lifted shingles along open roof edges. We explain what failed and what it will take to stop water intrusion properly.',
        ],
        bullets: [
          'Active leak assessment with interior and attic clues',
          'Targeted repairs at the source, not just the symptom',
          'Photo documentation of affected areas',
          'Guidance when a leak points to wider roof wear',
        ],
      },
      {
        kind: 'content',
        bg: 'white',
        eyebrow: 'Shingle Repair',
        heading: 'Shingle Repair for Sacramento Homes',
        paragraphs: [
          'Wind, heat, and age can crack, curl, or lift shingles across Sacramento neighborhoods from Natomas to Tahoe Park. Replacing damaged tabs and resealing surrounding areas can extend roof life when the rest of the system is sound.',
        ],
        bullets: [
          'Replacement of missing or damaged shingles',
          'Ridge cap and hip shingle repairs',
          'Sealant and fastening checks on wind-affected slopes',
          'Assessment of whether isolated damage or widespread wear is present',
        ],
      },
      {
        kind: 'content',
        bg: 'cream',
        eyebrow: 'Flashing & Penetrations',
        heading: 'Flashing, Vent, and Chimney Leak Repair',
        paragraphs: [
          'Many Sacramento roof leaks trace to flashing details rather than the field shingles. Chimneys, skylights, HVAC curbs, and plumbing vents all depend on properly sealed transitions that can fail after years of heat and rain.',
        ],
        bullets: [
          'Chimney base and step flashing repair',
          'Pipe boot and roof vent resealing',
          'Skylight curb and flashing corrections',
          'Wall-to-roof and patio cover transition repairs',
        ],
      },
      {
        kind: 'split',
        bg: 'white',
        eyebrow: 'Urgency Guidance',
        heading: 'Emergency vs Non-Emergency Roof Repair',
        intro:
          'Not every roof problem needs same-day service, but active interior water intrusion should be addressed quickly. Here is how we help Sacramento homeowners prioritize the right response.',
        leftTitle: 'Call for urgent help when',
        leftItems: [
          'Water is actively entering the home',
          'A large section of shingles is missing after wind',
          'A tree limb has damaged the roof structure',
          'Ceiling drywall is sagging or spreading quickly',
        ],
        rightTitle: 'Schedule a standard repair visit when',
        rightItems: [
          'You notice missing granules or a few lifted shingles',
          'A stain appeared but there is no active dripping',
          'You want a post-storm check after weather passes',
          'You need flashing or vent maintenance before rainy season',
        ],
        closing:
          'If you are unsure, call anyway. We can help you decide whether the situation needs emergency attention or a scheduled inspection.',
      },
      {
        kind: 'insurance',
        eyebrow: 'Storm Documentation',
        heading: 'Insurance Documentation for Sacramento Roof Repairs',
        body:
          'When wind, hail, or fallen branches damage your Sacramento roof, clear documentation matters. PRC 13 Roofing takes photos, notes visible problem areas, and provides inspection findings homeowners can use during insurance conversations. We help you understand what is storm-related versus long-term wear.',
      },
      {
        kind: 'split',
        bg: 'cream',
        eyebrow: 'Honest Guidance',
        heading: 'Repair vs Replacement Guidance',
        intro:
          'A good Sacramento roof repair should solve the problem without pushing unnecessary work. We explain both paths clearly when damage is isolated versus widespread.',
        leftTitle: 'Repair may make sense when',
        leftItems: [
          'Damage is limited to one area or penetration',
          'The roof is relatively new with sound decking',
          'Leaks trace to a known flashing or boot issue',
          'Most shingles remain in good condition',
        ],
        rightTitle: 'Replacement may make sense when',
        rightItems: [
          'Multiple leaks appear across the home',
          'Shingles are failing across large sections',
          'Storm damage affects several roof planes',
          'The roof is near the end of its expected lifespan',
        ],
        closing:
          'Every inspection includes practical guidance on the most cost-effective next step for your Sacramento home.',
      },
    ],
    faqHeading: 'Sacramento Roof Repair FAQs',
    faqs: [
      {
        question: 'How much does roof repair cost in Sacramento?',
        answer:
          'Sacramento roof repair cost depends on leak location, material type, and how much flashing or decking work is needed. Small repairs may cost a few hundred dollars, while larger sections can cost more. PRC 13 inspects first and provides a written estimate before any work begins.',
      },
      {
        question: 'Do you offer free roof inspections in Sacramento?',
        answer:
          'Yes. PRC 13 Roofing offers free roof inspections in Sacramento with no obligation. We document visible issues and explain whether repair, maintenance, or replacement is the practical next step.',
      },
      {
        question: 'Can PRC 13 repair roof leaks after storms?',
        answer:
          'Yes. We inspect storm-related leaks, wind-lifted shingles, and flashing damage after Sacramento weather events. We can also document findings for insurance when sudden damage is involved.',
      },
      {
        question: 'What are signs my Sacramento roof needs repair?',
        answer:
          'Ceiling stains, missing shingles, granules in gutters, lifted ridge caps, damaged flashing, and recurring leaks in the same area are common signs your Sacramento roof needs repair.',
      },
      {
        question: 'Can flashing leaks be repaired?',
        answer:
          'Yes. Many flashing leaks can be repaired by replacing worn metal, resealing penetrations, or correcting details at chimneys, vents, skylights, and valleys without replacing the entire roof.',
      },
      {
        question: 'Do you repair missing shingles?',
        answer:
          'Yes. We replace missing or damaged shingles and check surrounding areas to make sure wind or heat stress has not affected nearby sections.',
      },
      {
        question: 'Is roof repair better than replacement?',
        answer:
          'It depends on roof age, leak history, and how widespread the damage is. When the rest of the roof is sound, repair is often the better value. We explain both options after inspection.',
      },
      {
        question: 'How fast can you inspect a roof leak?',
        answer:
          'Most Sacramento homeowners can be scheduled within 24 hours. Active leaks and interior water damage are prioritized.',
      },
      {
        question: 'Can you provide photos for insurance?',
        answer:
          'Yes. We take photos during inspections and can provide written findings that help Sacramento homeowners discuss storm damage with their insurance carrier.',
      },
      {
        question: 'Do you repair tile and shingle roofs?',
        answer:
          'Yes. PRC 13 Roofing repairs common Sacramento shingle roofs and addresses many tile roof leak points at flashing, valleys, and penetrations.',
      },
    ],
    cta: {
      eyebrow: 'Get Started',
      heading: 'Schedule Your Sacramento Roof Repair Inspection',
      subtext:
        'Tell us what you are seeing and we will help you schedule a free inspection, leak assessment, or repair estimate for your Sacramento home.',
      checklist: ['No obligation', 'Written inspection report', 'Local roofing expertise', 'Fast scheduling'],
      submitLabel: 'Schedule Your Free Roof Inspection',
    },
  },
  'emergency-roof-repair-sacramento': {
    path: '/emergency-roof-repair-sacramento',
    metaTitle: 'Emergency Roof Repair Sacramento | Roof Leak Help & Free Inspection',
    metaDescription:
      'Emergency roof repair in Sacramento for active leaks, storm damage, missing shingles, flashing failures, and urgent roof inspections from PRC 13 Roofing.',
    pageName: 'Emergency Roof Repair Sacramento',
    serviceName: 'Emergency Roof Repair in Sacramento',
    sourcePage: 'emergency-roof-repair-sacramento',
    formSectionId: 'emergency-roof-repair-sacramento-quote',
    breadcrumbParent: { label: 'Emergency Roof Repair', href: '/emergency-roof-repair' },
    hero: {
      badge: 'Urgent Roof Help',
      h1: 'Emergency Roof Repair in Sacramento',
      subheadline:
        'Active leak, storm damage, or missing shingles exposing your roof? PRC 13 Roofing responds quickly to urgent Sacramento roofing problems with assessment, stabilization guidance, and clear next steps.',
      heroImage: ASSETS.emergencyRepair('emergency-roof-hero.webp'),
      heroAlt: 'Emergency roof repair response in Sacramento after storm damage',
      primaryCta: 'call-only',
      trustItems: ['Fast Response', 'Same-Day Assessment Often Available', 'Licensed & Insured', 'Storm Documentation'],
    },
    quickAnswer: {
      title: 'Sacramento emergency roof repair: quick answer',
      points: [
        'Call first for active leaks and interior water intrusion',
        'Temporary protection guidance while help is on the way',
        'Storm and wind damage assessment available',
        'Written findings for repair planning and insurance',
      ],
      body:
        'If water is entering your Sacramento home, call PRC 13 Roofing at 916-761-3866. We prioritize urgent leaks, help you contain damage safely indoors, and assess the roof as quickly as possible.',
    },
    sections: [
      {
        kind: 'content',
        bg: 'white',
        eyebrow: 'Roofing Emergencies',
        heading: 'What Counts as a Roofing Emergency?',
        paragraphs: [
          'A roofing emergency in Sacramento usually means water is getting inside, a large portion of the roof is exposed, or wind or debris has created immediate risk. Waiting can allow moisture to spread through insulation, drywall, and framing.',
        ],
        bullets: [
          'Active leaks with water dripping or spreading on ceilings',
          'Large sections of missing shingles after wind events',
          'Fallen branches or debris puncturing the roof',
          'Lifted flashing or open penetrations before more rain arrives',
          'Interior sagging or saturated drywall from roof failure',
        ],
      },
      {
        kind: 'content',
        bg: 'cream',
        eyebrow: 'Active Leaks',
        heading: 'Active Roof Leak Help in Sacramento',
        paragraphs: [
          'When a leak is active, speed matters. Our team helps Sacramento homeowners understand immediate indoor steps, then inspects the roof to find the failure point and recommend stabilization or repair.',
          'Leaks often trace to failed pipe boots, valley debris, wind-lifted shingles, or chimney flashing that gave way during the last storm.',
        ],
        bullets: [
          'Priority scheduling for active interior water intrusion',
          'Leak source identification on the roof system',
          'Temporary weatherproofing when appropriate',
          'Clear repair scope before permanent work begins',
        ],
      },
      {
        kind: 'cards',
        bg: 'white',
        eyebrow: 'Storm Damage',
        heading: 'Storm and Wind Damage Roof Repair',
        intro:
          'Sacramento storms can lift shingles, clog valleys, and stress flashing at roof edges. We inspect wind-affected areas and document visible damage for repair planning.',
        cards: [
          {
            title: 'Wind-Lifted Shingles',
            desc: 'Open edges and missing tabs along ridgelines and gable ends after Delta breeze or storm gusts.',
          },
          {
            title: 'Branch Impact',
            desc: 'Fallen limbs from mature oaks and street trees that crack shingles or damage flashing.',
          },
          {
            title: 'Valley & Drainage Failures',
            desc: 'Debris-packed valleys that back water up under shingles during heavy rain.',
          },
          {
            title: 'Flashing Blowouts',
            desc: 'Loose chimney, vent, or skylight seals exposed by wind and seasonal temperature swings.',
          },
        ],
      },
      {
        kind: 'content',
        bg: 'cream',
        eyebrow: 'Next Steps',
        heading: 'Temporary Protection and Permanent Repair Planning',
        paragraphs: [
          'Emergency service is not only about stopping water today. We also explain what permanent repair will require so you are not left with a patch that fails next season.',
          'When temporary protection is appropriate, we use it as a bridge to a durable repair or replacement plan you can review with clear pricing.',
        ],
        bullets: [
          'Honest explanation of temporary versus permanent fixes',
          'Written assessment after urgent stabilization',
          'Repair scheduling once the roof is safe to work on',
          'No surprise charges without a written scope',
        ],
      },
      {
        kind: 'insurance',
        eyebrow: 'Claims Support',
        heading: 'Insurance Documentation for Emergency Roof Damage',
        body:
          'Sudden storm damage may be covered by homeowner insurance. PRC 13 Roofing documents visible roof damage with photos and written notes so Sacramento homeowners have stronger information for claim conversations.',
      },
      {
        kind: 'content',
        bg: 'white',
        eyebrow: 'Before We Arrive',
        heading: 'What to Do Before the Roofer Arrives',
        paragraphs: [
          'While waiting for emergency roof help, focus on safety indoors. Do not climb onto a wet or damaged roof yourself.',
        ],
        bullets: [
          'Move valuables away from active leak paths',
          'Use buckets or towels to catch dripping water',
          'Take photos of interior damage for your records',
          'Call 916-761-3866 so we can prioritize your visit',
          'Avoid attic entry if ceilings are sagging or electrical risk is present',
        ],
      },
    ],
    faqHeading: 'Emergency Roof Repair FAQs',
    faqs: [
      {
        question: 'What should I do if my roof is leaking right now?',
        answer:
          'Contain the water indoors with buckets, move belongings away from the leak, and call PRC 13 Roofing at 916-761-3866. Do not go on the roof yourself.',
      },
      {
        question: 'Do you provide emergency roof repair in Sacramento?',
        answer:
          'Yes. PRC 13 Roofing provides emergency roof repair help across Sacramento for active leaks, storm damage, and urgent roof failures.',
      },
      {
        question: 'Can a roof leak wait until tomorrow?',
        answer:
          'Small stains without active dripping may wait for a scheduled inspection, but active interior water intrusion should be addressed quickly to limit drywall, insulation, and framing damage.',
      },
      {
        question: 'What causes emergency roof leaks?',
        answer:
          'Failed pipe boots, wind-lifted shingles, clogged valleys, damaged flashing, and storm debris impact are among the most common causes of emergency Sacramento roof leaks.',
      },
      {
        question: 'Do you help with storm damage?',
        answer:
          'Yes. We inspect wind and rain damage, document affected areas, and explain repair options for Sacramento homeowners after storms.',
      },
      {
        question: 'Can you document roof damage for insurance?',
        answer:
          'Yes. We provide photos and written findings that can support insurance conversations when sudden storm damage is involved.',
      },
      {
        question: 'Should I put a bucket under a roof leak?',
        answer:
          'Yes. Catching water indoors helps limit damage while you wait for inspection. Note where the leak is appearing so our team can trace it on the roof.',
      },
      {
        question: 'Is emergency roof repair more expensive?',
        answer:
          'Urgent response does not mean unclear pricing. PRC 13 provides a written scope before permanent repair work begins.',
      },
      {
        question: 'Can you inspect the roof after heavy rain?',
        answer:
          'Yes. Post-storm inspections are common in Sacramento. We check for lifted shingles, valley debris, and flashing failures revealed by heavy rain.',
      },
      {
        question: 'Do you repair flashing and vent leaks?',
        answer:
          'Yes. Flashing and vent failures are frequent sources of emergency leaks. We repair at the penetration whenever the surrounding roof remains serviceable.',
      },
    ],
    cta: {
      eyebrow: 'Call Now',
      heading: 'Need Emergency Roof Help in Sacramento?',
      subtext:
        'If water is entering your home or storm damage has exposed your roof, call or send a message now. We respond quickly to urgent Sacramento roofing problems.',
      checklist: [
        'Fast response for active leaks',
        'Same-day assessment often available',
        'Written scope before repair work',
        'Insurance documentation when needed',
      ],
      submitLabel: 'Request Emergency Roof Help',
    },
  },
  'roof-inspection-sacramento': {
    path: '/roof-inspection-sacramento',
    metaTitle: 'Roof Inspection Sacramento | Free Roof Inspections & Written Findings',
    metaDescription:
      'Schedule a free roof inspection in Sacramento with PRC 13 Roofing. Get written findings for leaks, storm damage, aging shingles, flashing issues, and roof replacement planning.',
    pageName: 'Roof Inspection Sacramento',
    serviceName: 'Roof Inspection in Sacramento, CA',
    sourcePage: 'roof-inspection-sacramento',
    formSectionId: 'roof-inspection-sacramento-quote',
    breadcrumbParent: { label: 'Roof Inspection', href: '/roof-inspection' },
    hero: {
      badge: 'Free, No Obligation',
      h1: 'Roof Inspection in Sacramento, CA',
      subheadline:
        'Get a professional roof inspection from a licensed Sacramento roofing team. PRC 13 Roofing provides written findings for leaks, storm wear, aging materials, and replacement planning without pressure.',
      heroImage: ASSETS.roofInspection('Screenshot_2026-05-20_at_09.37.55.png'),
      heroAlt: 'Roof inspection on a Sacramento home',
      primaryCta: 'inspection-only',
      trustItems: ['100% Free', 'No Obligation', 'Written Findings', 'Scheduled Within 24 Hours'],
    },
    quickAnswer: {
      title: 'Sacramento roof inspection: quick answer',
      points: [
        'Free inspections with written findings',
        'Checks shingles, flashing, drainage, and ventilation',
        'Helpful after storms, before buying, or before major work',
        'Honest repair vs replacement guidance',
      ],
      body:
        'A Sacramento roof inspection tells you what condition your roof is in and what to do next. PRC 13 Roofing inspects the full roof system and explains the results clearly.',
    },
    sections: [
      {
        kind: 'cards',
        bg: 'white',
        eyebrow: 'Inspection Scope',
        heading: 'What Is Included in a Roof Inspection?',
        intro:
          'Our Sacramento inspections review the visible roof system and the conditions that commonly lead to leaks in local homes.',
        cards: [
          { title: 'Shingle Condition', desc: 'Granule loss, curling, cracking, missing tabs, and age-related wear across roof planes.' },
          { title: 'Flashing & Penetrations', desc: 'Chimneys, vents, skylights, valleys, and wall-to-roof transitions.' },
          { title: 'Drainage & Gutters', desc: 'Slope, debris buildup, and edge details that affect how water leaves the roof.' },
          { title: 'Attic & Ventilation Clues', desc: 'Moisture signs, ventilation issues, and heat-related wear indicators when accessible.' },
        ],
      },
      {
        kind: 'content',
        bg: 'cream',
        eyebrow: 'Free Inspections',
        heading: 'Free Roof Inspections in Sacramento',
        paragraphs: [
          'PRC 13 Roofing offers free roof inspections in Sacramento with no obligation. You receive clear findings and practical next steps, whether that means a small repair, maintenance, replacement planning, or no action at all.',
        ],
        bullets: [
          'No-cost assessment for Sacramento homeowners',
          'Written summary of visible conditions',
          'Photos of problem areas when relevant',
          'Straightforward guidance without sales pressure',
        ],
      },
      {
        kind: 'content',
        bg: 'white',
        eyebrow: 'Leak Checks',
        heading: 'Roof Inspection for Leaks',
        paragraphs: [
          'If you have a stain, musty attic odor, or recent drip, a leak-focused inspection helps trace the failure point. Sacramento leaks often involve pipe boots, valleys, flashing, or wind-affected shingles rather than the entire roof.',
        ],
        bullets: [
          'Interior and attic clues reviewed with roof findings',
          'Penetration and valley checks on leak-prone details',
          'Repair recommendations when damage is isolated',
          'Replacement guidance when wear is widespread',
        ],
      },
      {
        kind: 'content',
        bg: 'cream',
        eyebrow: 'After Storms',
        heading: 'Roof Inspection After Storms',
        paragraphs: [
          'Winter rain and wind events across Sacramento can lift shingles, clog valleys, and expose weak flashing. A post-storm inspection catches damage early before the next weather system makes it worse.',
        ],
        bullets: [
          'Wind-lifted shingle checks along open edges',
          'Valley and gutter debris review',
          'Flashing and vent seal inspections',
          'Documentation useful for insurance conversations',
        ],
      },
      {
        kind: 'insurance',
        eyebrow: 'Insurance Support',
        heading: 'Inspection for Insurance Documentation',
        body:
          'When sudden storm damage may be involved, a Sacramento roof inspection with photos and written notes gives homeowners stronger information for insurance discussions. We document what we see and explain what is storm-related versus normal wear.',
      },
      {
        kind: 'content',
        bg: 'white',
        eyebrow: 'Planning Ahead',
        heading: 'Inspection Before Repair or Replacement',
        paragraphs: [
          'Whether you are comparing repair quotes or planning a full replacement, an inspection first prevents guesswork. We help Sacramento homeowners understand roof age, remaining life, and the most cost-effective path forward.',
        ],
        bullets: [
          'Repair vs replacement guidance after inspection',
          'Material and scope context for replacement planning',
          'Helpful before listing a home or completing a purchase',
          'Maintenance recommendations to extend roof life',
        ],
      },
      {
        kind: 'content',
        bg: 'cream',
        eyebrow: 'Sacramento Conditions',
        heading: 'Common Issues Found on Sacramento Roofs',
        paragraphs: [
          'Local heat, tree debris, and seasonal rain create predictable wear patterns. These are among the issues we see most often during Sacramento inspections.',
        ],
        bullets: [
          'Heat-aged shingles with granule loss on sun-exposed slopes',
          'Cracked pipe boots and dried sealant at penetrations',
          'Valley deterioration where leaves collect under street trees',
          'Attic ventilation problems that shorten shingle life',
          'Older decking or mixed roof details on in-town bungalows',
        ],
      },
    ],
    faqHeading: 'Sacramento Roof Inspection FAQs',
    faqs: [
      {
        question: 'Are roof inspections free in Sacramento?',
        answer:
          'Yes. PRC 13 Roofing offers free roof inspections in Sacramento with no obligation.',
      },
      {
        question: 'What does PRC 13 check during a roof inspection?',
        answer:
          'We check shingles, flashing, penetrations, valleys, gutters, drainage, and visible attic or ventilation concerns, then explain what we found in plain language.',
      },
      {
        question: 'How long does a roof inspection take?',
        answer:
          'Most Sacramento residential inspections take 30 to 60 minutes depending on roof size, slope, and complexity.',
      },
      {
        question: 'Should I get a roof inspection after a storm?',
        answer:
          'Yes, especially after wind or heavy rain. Storms can lift shingles and expose flashing problems that were not obvious before.',
      },
      {
        question: 'Can a roof inspection find hidden leaks?',
        answer:
          'Inspections can identify leak risks and moisture clues even when water is not actively dripping. Some hidden damage may require closer review after wet weather.',
      },
      {
        question: 'Do you provide written inspection findings?',
        answer:
          'Yes. Sacramento homeowners receive written findings that summarize roof condition and recommended next steps.',
      },
      {
        question: 'Can photos be used for insurance conversations?',
        answer:
          'Yes. When storm damage is present, inspection photos and notes can help support insurance discussions.',
      },
      {
        question: 'How often should Sacramento homeowners inspect their roof?',
        answer:
          'An annual inspection and a check before rainy season are sensible for most Sacramento homes, especially those with mature trees or older roof systems.',
      },
      {
        question: 'Do you inspect gutters and flashing?',
        answer:
          'Yes. Gutters, edge details, and flashing at chimneys, vents, and valleys are part of every Sacramento roof inspection.',
      },
      {
        question: 'Can an inspection tell me if I need repair or replacement?',
        answer:
          'Yes. That is one of the main reasons homeowners schedule inspections. We explain whether repair, maintenance, or replacement is the practical choice.',
      },
    ],
    cta: {
      eyebrow: 'Schedule Today',
      heading: 'Schedule Your Free Sacramento Roof Inspection',
      subtext:
        'Tell us about your roof concerns and we will help you schedule a free inspection with written findings for your Sacramento home.',
      checklist: ['Free with no obligation', 'Written findings provided', 'Licensed roofing team', 'Most visits within 24 hours'],
      submitLabel: 'Schedule Your Free Roof Inspection',
    },
  },
};

export function getSacramentoLandingConfig(path: string): SacramentoLandingPageConfig | undefined {
  return Object.values(sacramentoLandingPages).find(page => page.path === path);
}
