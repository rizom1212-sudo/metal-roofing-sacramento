import type { BlogPost, BlogRelatedService } from './blog';
import { ASSETS } from './assets';

export const GUTTERS_FASCIA_CLUSTER_CATEGORY = 'Gutters & Fascia';

const COVER_A = ASSETS.guttersSiding('1e8ea3b0-e1a4-4e74-97d2-2209fbeeeb89.webp');
const COVER_B = ASSETS.guttersSiding('prc-13-roofing-website-image-hh-2880w.webp');
const COVER_C = ASSETS.guttersSiding('ee8a6aa8-96e4-4a0c-aea7-353daf796d0b.webp');
const COVER_D = ASSETS.gallery('Screenshot_2026-05-20_at_08.52.43.png');
const COVER_E = ASSETS.blog('22dc3636-c588-43bd-a30f-c855b3fcce4f.webp');

const coreServices = (): BlogRelatedService[] => [
  { label: 'Gutters & Siding', href: '/gutters-siding' },
  { label: 'Free Roof Inspection', href: '/roof-inspection' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Sacramento Service Area', href: '/service-areas/sacramento' },
  { label: 'Contact PRC 13', href: '/contact' },
];

const article = (slug: string, label: string): BlogRelatedService => ({
  label,
  href: `/blog/${slug}`,
});

export const guttersFasciaClusterPosts: BlogPost[] = [
  {
    slug: 'gutter-installation-sacramento',
    title: 'Gutter Installation Sacramento: Seamless Systems for Local Homes',
    seoTitle: 'Gutter Installation Sacramento | PRC 13 Roofing',
    excerpt:
      'PRC 13 installs seamless aluminum gutters on Sacramento homes, custom-formed on site. Most installations finish in one day after a free evaluation.',
    date: 'July 6, 2026',
    readTime: '5 min read',
    category: GUTTERS_FASCIA_CLUSTER_CATEGORY,
    coverImage: COVER_A,
    relatedServices: coreServices(),
    relatedArticles: [
      article('gutter-guards-sacramento', 'Gutter guards Sacramento'),
      article('gutter-replacement-cost-sacramento', 'Gutter replacement cost'),
      article('gutters-and-roof-leaks-sacramento', 'Gutters and roof leaks'),
    ],
    faqs: [
      {
        question: 'How long does gutter installation take in Sacramento?',
        answer:
          'Most gutter installations are completed in one day. PRC 13 confirms the schedule before work begins.',
      },
      {
        question: 'What type of gutters does PRC 13 install?',
        answer:
          'We install custom-formed seamless aluminum gutters. Fewer seams mean fewer common leak points along the run.',
      },
      {
        question: 'Does PRC 13 charge for a gutter estimate?',
        answer:
          'We inspect the exterior first and provide a clear written estimate before work starts, with no obligation.',
      },
      {
        question: 'Can gutter guards be added during installation?',
        answer:
          'Yes. Leaf and debris guards can be installed with new gutters to reduce cleaning and overflow risk.',
      },
      {
        question: 'Do you repair fascia when installing gutters?',
        answer:
          'No. PRC 13 does not offer fascia or soffit repair. During a gutter evaluation we can note fascia condition and explain how overflow or pull-away may be affecting the roof edge, then point you to the right next step for board work if needed.',
      },
      {
        question: 'When should I replace gutters instead of installing new runs only?',
        answer:
          'Gutters pulling from fascia, sagging, rusting through, or overflowing during rain often need full replacement rather than patch repairs.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: Sacramento gutter installation should move water away from your fascia, foundation, and landscaping without seams that fail every few years. PRC 13 Roofing installs seamless aluminum systems custom-formed on site.',
      },
      {
        type: 'heading',
        content: 'Why Seamless Gutters Matter in Sacramento',
      },
      {
        type: 'paragraph',
        content:
 'Sectional gutters join every ten feet or so, the joints are where leaks and clogs often start. Seamless aluminum gutters are formed to your home\'s exact measurements, reducing those weak points and protecting fascia boards that winter rain and summer heat already stress.',
      },
      {
        type: 'heading',
        content: 'What PRC 13 Installs',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Custom-formed seamless aluminum gutter runs',
          'Downspouts sized for Sacramento rainfall volume',
 'Proper pitch so water flows toward outlets, not into fascia',
          'Gutter guards when homeowners want less debris buildup',
          'Roofline and attachment-point check before new gutters go up',
        ],
      },
      {
        type: 'links',
        content: 'Related guides:',
        links: [
          article('gutter-guards-sacramento', 'Gutter guards for Sacramento homes'),
          { label: 'Gutters & siding services', href: '/gutters-siding' },
        ],
      },
      {
        type: 'heading',
        content: 'Schedule a Gutter Evaluation',
      },
      {
        type: 'paragraph',
        content:
          'PRC 13 inspects your roofline and gutter attachment points and explains whether gutter repair or full installation makes sense. Most gutter jobs finish in one day once scheduled. PRC 13 does not offer fascia or soffit repair.',
      },
    ],
  },
  {
    slug: 'gutter-replacement-cost-sacramento',
    title: 'Gutter Replacement Cost in Sacramento: What Affects Your Quote',
    seoTitle: 'Gutter Replacement Cost Sacramento | PRC 13 Roofing',
    excerpt:
      'Sacramento gutter replacement cost depends on footage, stories, access, and guards. PRC 13 inspects first and provides a written estimate. Fascia or soffit board work is separate and is not a PRC 13 service.',
    date: 'July 6, 2026',
    readTime: '5 min read',
    category: GUTTERS_FASCIA_CLUSTER_CATEGORY,
    coverImage: COVER_B,
    relatedServices: coreServices(),
    relatedArticles: [
      article('gutter-installation-sacramento', 'Gutter installation Sacramento'),
      article('gutter-guards-sacramento', 'Gutter guards Sacramento'),
      article('fascia-repair-sacramento', 'Fascia repair Sacramento'),
    ],
    faqs: [
      {
        question: 'How much does gutter replacement cost in Sacramento?',
        answer:
 'Cost depends on home size, material, access, and downspout layout. If fascia boards are too damaged to support gutters, that board work is separate. PRC 13 does not offer fascia or soffit repair, and we will explain what we find during the gutter inspection.',
      },
      {
        question: 'Is gutter replacement more expensive than repair?',
        answer:
          'Small leaks may be repairable, but gutters pulling from fascia, sagging, or rusting through often cost more to patch repeatedly than replace once.',
      },
      {
        question: 'Does fascia damage affect gutter replacement?',
        answer:
 'Yes. Sound wood is required for proper gutter attachment. If fascia is rotted, board repair should be handled before or with new gutters, but PRC 13 does not offer fascia or soffit repair. We document what we see so you can plan that work separately.',
      },
      {
        question: 'Do gutter guards increase replacement cost?',
        answer:
          'Guards add material and labor but can reduce long-term cleaning and overflow damage that leads to fascia rot.',
      },
      {
        question: 'Does PRC 13 offer financing for gutter work?',
        answer:
          'Financing may be available on qualifying projects. Ask during your free exterior evaluation.',
      },
      {
        question: 'How do I compare gutter quotes fairly?',
        answer:
          'Compare linear footage measured, seam type, downspout count, fascia allowances, and whether guards are included. PRC 13 explains every line on written estimates.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: Sacramento gutter replacement cost varies by how much roofline you have, how many stories are involved, and whether fascia boards need work before new gutters attach. PRC 13 inspects first and quotes in writing.',
      },
      {
        type: 'heading',
        content: 'What Drives Gutter Replacement Pricing',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Total linear feet of gutter and downspout runs',
          'Single-story vs multi-story access and ladder time',
          'Seamless aluminum vs sectional material choices',
          'Whether roof-edge boards are sound enough for attachment (board repair is not a PRC 13 service)',
          'Gutter guard add-ons',
          'Disposal of rusted or failing existing gutters',
        ],
      },
      {
        type: 'heading',
        content: 'Repair vs Replacement',
      },
      {
        type: 'paragraph',
        content:
 'PRC 13 tells you which option makes sense after inspection. Gutters overflowing during rainfall, pulling away from fascia, or showing rust holes usually need replacement, not another season of patchwork.',
      },
      {
        type: 'links',
        content: 'Plan your project:',
        links: [
          article('gutter-installation-sacramento', 'Gutter installation guide'),
          { label: 'Gutters & siding services', href: '/gutters-siding' },
        ],
      },
      {
        type: 'heading',
        content: 'Get a Written Estimate',
      },
      {
        type: 'paragraph',
        content:
          'Avoid guesswork from the curb. PRC 13 measures your roofline, checks drainage paths, and delivers a clear written estimate before any work is scheduled.',
      },
    ],
  },
  {
    slug: 'gutter-guards-sacramento',
    title: 'Gutter Guards Sacramento: Less Debris, Fewer Overflow Problems',
    seoTitle: 'Gutter Guards Sacramento | PRC 13 Roofing',
    excerpt:
      'Gutter guards on Sacramento homes reduce leaf buildup and overflow that damages fascia. PRC 13 installs guards with new gutters or existing systems.',
    date: 'July 6, 2026',
    readTime: '5 min read',
    category: GUTTERS_FASCIA_CLUSTER_CATEGORY,
    coverImage: COVER_C,
    relatedServices: coreServices(),
    relatedArticles: [
      article('gutter-installation-sacramento', 'Gutter installation Sacramento'),
      article('gutters-and-roof-leaks-sacramento', 'Gutters and roof leaks'),
      article('gutter-replacement-cost-sacramento', 'Gutter replacement cost'),
    ],
    faqs: [
      {
        question: 'Do gutter guards work in Sacramento?',
        answer:
          'Quality leaf and debris guards reduce buildup from valley oaks and seasonal debris. They help water reach downspouts instead of spilling over fascia during winter rain.',
      },
      {
        question: 'Can PRC 13 add guards to existing gutters?',
        answer:
 'Often yes, depending on gutter condition. We inspect first, failing gutters may need replacement before guards make sense.',
      },
      {
        question: 'Do guards eliminate gutter cleaning entirely?',
        answer:
          'Guards reduce cleaning frequency but occasional maintenance may still be needed, especially after heavy leaf drop.',
      },
      {
        question: 'Can clogged gutters damage fascia?',
        answer:
          'Yes. Blockages cause overflow that soaks fascia boards and can push water toward the roof edge, contributing to rot and leaks.',
      },
      {
        question: 'Are guards installed with new seamless gutters?',
        answer:
          'Yes. PRC 13 can install guards during new gutter installation for a single coordinated project.',
      },
      {
        question: 'How do I know if I need guards?',
        answer:
          'Frequent clogs, overflow during rain, or trees overhanging your roofline are common signs. A free exterior evaluation confirms the right approach.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: gutter guards help Sacramento homeowners keep leaves and debris out of gutters so water flows to downspouts instead of overflowing onto fascia and foundations. PRC 13 installs guards with new seamless systems or on qualifying existing gutters.',
      },
      {
        type: 'heading',
        content: 'Why Guards Matter in Sacramento',
      },
      {
        type: 'paragraph',
        content:
 'Sacramento neighborhoods with mature trees see gutters fill with leaves and needles faster than open lots. When gutters clog, winter rain spills over the edge, peeling paint, rotting fascia, and foundation pooling follow. Guards reduce how often that cycle repeats.',
      },
      {
        type: 'heading',
        content: 'What PRC 13 Offers',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Leaf and debris guards paired with seamless gutter installation',
          'Guard retrofits when existing gutters are still sound',
 'Assessment of pitch and downspout capacity, not just surface covers',
          'Honest notes when overflow has already damaged roof-edge boards (fascia/soffit repair is not offered by PRC 13)',
        ],
      },
      {
        type: 'links',
        content: 'Learn more:',
        links: [
          { label: 'Gutters & siding services', href: '/gutters-siding' },
          article('gutter-installation-sacramento', 'Gutter installation Sacramento'),
        ],
      },
      {
        type: 'heading',
        content: 'Request a Guard Evaluation',
      },
      {
        type: 'paragraph',
        content:
          'PRC 13 inspects your gutters and roof-edge attachment points and recommends guards only when the underlying gutter system is worth protecting. PRC 13 does not offer fascia or soffit repair.',
      },
    ],
  },
  {
    slug: 'fascia-repair-sacramento',
    title: 'Fascia Repair Sacramento: Fix Rotted Eaves Before Damage Spreads',
    seoTitle: 'Fascia Repair Sacramento | PRC 13 Roofing',
    excerpt:
 'Educational guide to Sacramento fascia rot, eaves damage, and gutter-related water intrusion. PRC 13 does not offer fascia or soffit repair, we help with gutters, siding, and roof edge drainage evaluations.',
    date: 'July 6, 2026',
    readTime: '6 min read',
    category: GUTTERS_FASCIA_CLUSTER_CATEGORY,
    coverImage: COVER_D,
    relatedServices: [
      ...coreServices(),
      { label: 'Emergency Roof Repair', href: '/emergency-roof-repair' },
    ],
    relatedArticles: [
      article('gutters-and-roof-leaks-sacramento', 'Gutters and roof leaks'),
      article('gutter-replacement-cost-sacramento', 'Gutter replacement cost'),
      article('gutter-installation-sacramento', 'Gutter installation Sacramento'),
    ],
    faqs: [
      {
        question: 'What causes fascia rot in Sacramento?',
        answer:
          'Overflowing gutters, failed drip edge, and roof edge leaks wet fascia boards repeatedly. Summer heat dries the surface while interior wood decays.',
      },
      {
        question: 'Can fascia damage cause roof leaks?',
        answer:
          'Yes. Compromised eaves allow water behind fascia into soffits and along the roof edge, which can lead to interior stains and active leaks.',
      },
      {
        question: 'Does PRC 13 repair fascia and gutters together?',
        answer:
          'No. PRC 13 does not offer fascia or soffit repair. We can evaluate gutters and roof-edge drainage, install or replace gutters when appropriate, and explain when separate fascia work may be needed before gutters can attach properly.',
      },
      {
        question: 'How do I know fascia needs repair?',
        answer:
          'Peeling paint, soft wood at eaves, staining behind gutters, or visible sagging along roof edges are common signs.',
      },
      {
        question: 'Should fascia be replaced during roof replacement?',
        answer:
          'Rotted fascia should be addressed before or during re-roofing so new edge metal seals to sound wood. PRC 13 does not perform fascia repair; during roof or gutter evaluations we note edge conditions so you can plan board work with the right trade.',
      },
      {
        question: 'Is fascia repair urgent when water is entering?',
        answer:
 'Active interior leaks need prompt attention. Call for emergency roof repair if water is entering now. After the roof is stabilized, plan gutter corrections with PRC 13 and fascia board work with a trade that performs that service. PRC 13 does not offer fascia or soffit repair.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: fascia repair protects roof edges where gutters, drip edge, and winter rain meet. This article explains how fascia fails in Sacramento. PRC 13 Roofing does not offer fascia or soffit repair; we focus on gutters, siding, roof inspection, and roof repair when the leak path involves the roof system.',
      },
      {
        type: 'heading',
        content: 'How Fascia Fails in Sacramento',
      },
      {
        type: 'paragraph',
        content:
          'Fascia boards run along the roof edge behind gutters. When gutters overflow, sag, or leak at seams, water soaks the wood. Sacramento\'s dry summers hide the problem until winter rain reveals soft spots, peeling paint, and gutter pull-away.',
      },
      {
        type: 'heading',
        content: 'What Fascia Repair Typically Includes (Educational)',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Replace soft or discolored fascia boards at eaves (not a PRC 13 service)',
          'Reattach gutters to solid backing after boards are sound',
          'Address soffit damage when water traveled inward (not a PRC 13 service)',
          'Coordinate drip edge and shingle termination at the roof edge during roofing work',
          'Inspect for roof leaks when water has moved past the eave into the roof system',
        ],
      },
      {
        type: 'links',
        content: 'Related services:',
        links: [
          { label: 'Roof repair', href: '/roof-repair' },
          { label: 'Emergency roof repair', href: '/emergency-roof-repair' },
          article('gutters-and-roof-leaks-sacramento', 'How gutters affect roof leaks'),
        ],
      },
      {
        type: 'heading',
        content: 'Schedule a Roofline and Gutter Evaluation',
      },
      {
        type: 'paragraph',
        content:
          'PRC 13 can inspect gutters and roof edge flashing and explain what we find. We do not offer fascia or soffit repair; if boards are damaged, we will say so clearly so you can arrange that work separately.',
      },
    ],
  },
  {
    slug: 'gutters-and-roof-leaks-sacramento',
    title: 'How Gutters Prevent Roof Leaks in Sacramento Homes',
    seoTitle: 'Gutters and Roof Leaks Sacramento | PRC 13 Roofing',
    excerpt:
      'Failed gutters, rotted fascia, and poor drainage push water into roof edges and cause leaks. PRC 13 helps Sacramento homeowners trace gutter-related leak paths. Fascia and soffit repair are not PRC 13 services.',
    date: 'July 6, 2026',
    readTime: '6 min read',
    category: GUTTERS_FASCIA_CLUSTER_CATEGORY,
    coverImage: COVER_E,
    relatedServices: coreServices(),
    relatedArticles: [
      article('fascia-repair-sacramento', 'Fascia repair Sacramento'),
      article('gutter-installation-sacramento', 'Gutter installation Sacramento'),
      article('gutter-guards-sacramento', 'Gutter guards Sacramento'),
    ],
    faqs: [
      {
        question: 'Can bad gutters cause roof leaks?',
        answer:
          'Yes. Failed gutters, rotted fascia, and poor drainage can push water into the roof edge and lead to leaks. Fixing exterior protection helps prevent future roofline damage.',
      },
      {
        question: 'How do I tell if a leak is gutter-related?',
        answer:
 'Stains near exterior walls, soft fascia, overflow marks, or leaks that worsen during heavy rain, not just wind-driven roof damage, often trace to drainage.',
      },
      {
        question: 'Should I get a roof inspection or gutter evaluation first?',
        answer:
          'Start with a roof inspection that includes gutters and roof-edge drainage. PRC 13 reviews the water path from roof surface to downspout. We do not offer fascia or soffit repair.',
      },
      {
        question: 'Can overflowing gutters damage foundations?',
        answer:
          'Yes. Water pooling near the foundation after rain is a sign gutters are not routing flow correctly.',
      },
      {
        question: 'Do clogged gutters affect shingle life?',
        answer:
          'Overflow at the eave keeps roof edges wet longer, which can accelerate shingle wear and fascia rot at the drip line.',
      },
      {
        question: 'What if I have an active leak right now?',
        answer:
          'Call for emergency roof repair when water is entering. PRC 13 can stabilize the roof situation, then plan gutter corrections. Fascia board repair is not a PRC 13 service.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: gutters are not separate from your roof, they protect the edge where shingles, fascia, and flashing meet. When Sacramento gutters fail, water finds paths into the roofline that look like roof leaks but start at the eave.',
      },
      {
        type: 'heading',
        content: 'The Water Path Homeowners Miss',
      },
      {
        type: 'paragraph',
        content:
          'Roof inspections at PRC 13 include gutters, downspouts, and slope because poor drainage can speed up roof wear and fascia rot. Water that should exit through downspouts instead spills behind gutters, soaks fascia, and travels along soffits until ceiling stains appear indoors.',
      },
      {
        type: 'heading',
        content: 'Common Gutter-Related Leak Signs',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Water pooling near foundation after rain',
          'Gutters pulling away from fascia',
          'Overflow during rainfall while the roof surface looks intact',
          'Peeling paint or rot on fascia and soffit',
          'Erosion in landscaping below the roofline',
          'Interior stains on exterior walls near the eave',
        ],
      },
      {
        type: 'heading',
        content: 'Fix the Drainage, Not Just the Symptom',
      },
      {
        type: 'paragraph',
        content:
 'Patching interior drywall without fixing gutters leaves the root cause in place. PRC 13 traces leak sources during free inspections and recommends gutter work or roof repair based on what we find. If fascia boards are damaged, we will note that clearly. PRC 13 does not offer fascia or soffit repair.',
      },
      {
        type: 'links',
        content: 'Next steps:',
        links: [
          { label: 'Free roof inspection', href: '/roof-inspection' },
          { label: 'Roof repair services', href: '/roof-repair' },
          article('fascia-repair-sacramento', 'Fascia repair Sacramento'),
        ],
      },
    ],
  },
];
