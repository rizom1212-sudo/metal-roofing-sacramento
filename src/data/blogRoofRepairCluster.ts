import type { BlogPost, BlogRelatedService } from './blog';
import { ASSETS } from './assets';
import { upgradedMissingShingleRepairSacramento } from './blogContentUpgrades';
import { ROOF_REPAIR_CLUSTER_CATEGORY } from './blogCategories';

export { ROOF_REPAIR_CLUSTER_CATEGORY };

/** Emergency-cluster articles surfaced on the /roof-repair hub (not duplicated). */
export const ROOF_REPAIR_HUB_CROSS_LINK_SLUGS = [
  'roof-leak-repair-sacramento',
  'storm-damage-roof-repair-sacramento',
  'wind-damage-roof-repair',
  'hail-damage-roof-repair',
] as const;

const COVER_A = ASSETS.blog('Screenshot_2026-05-20_at_10.49.35.png');
const COVER_B = ASSETS.blog('22dc3636-c588-43bd-a30f-c855b3fcce4f.webp');
const COVER_C = ASSETS.blog('6998f81b8713f61878709b43.jpg');
const COVER_D = ASSETS.blog('035dfafc-8416-46bd-b5ab-f8c6b6b4eff9.webp');

const coreServices = (): BlogRelatedService[] => [
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Free Roof Inspection', href: '/roof-inspection' },
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Contact PRC 13', href: '/contact' },
];

const article = (slug: string, label: string): BlogRelatedService => ({
  label,
  href: `/blog/${slug}`,
});

export const roofRepairClusterPosts: BlogPost[] = [
  {
    slug: 'roof-repair-cost-sacramento',
    title: 'Roof Repair Cost in Sacramento: What Homeowners Should Expect',
    seoTitle: 'Roof Repair Cost Sacramento | PRC 13 Roofing',
    excerpt:
      'Sacramento roof repair cost depends on leak source, materials, and roof access. PRC 13 inspects first and provides a written estimate before work begins.',
    date: 'July 8, 2026',
    readTime: '6 min read',
    category: ROOF_REPAIR_CLUSTER_CATEGORY,
    coverImage: COVER_A,
    relatedServices: coreServices(),
    relatedArticles: [
      article('missing-shingle-repair-sacramento', 'Missing shingle repair'),
      article('roof-flashing-repair-sacramento', 'Roof flashing repair'),
      article('tile-roof-repair-sacramento', 'Tile roof repair'),
    ],
    faqs: [
      {
        question: 'How much does roof repair cost in Sacramento?',
        answer:
 'Cost depends on the failure type, pipe boot, flashing, shingle replacement, or tile underlayment. PRC 13 provides a written quote after a free inspection with line items explained.',
      },
      {
        question: 'Is a roof repair estimate free?',
        answer:
          'Standard residential inspections are free. You receive clear findings and a repair estimate with no obligation before work is scheduled.',
      },
      {
        question: 'Why do Sacramento repair quotes vary so much?',
        answer:
          'Roof pitch, tile vs shingle, story height, decking damage, and whether matching materials are still available all affect labor and material scope.',
      },
      {
        question: 'When does repair cost more than homeowners expect?',
        answer:
          'Hidden underlayment failure on tile roofs, widespread brittle shingles, or soft decking around a chimney often expand scope once the roof is opened.',
      },
      {
        question: 'Does PRC 13 charge for small repairs?',
        answer:
          'We repair projects of all sizes when a fix makes sense. You receive a written scope and price before approving work.',
      },
      {
        question: 'Is financing available for larger repairs?',
        answer:
          'Financing may be available on qualifying projects. Ask PRC 13 during your inspection if payment options apply to your repair scope.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: Sacramento roof repair cost depends on what failed on the roof, not the size of the ceiling stain. PRC 13 inspects shingles, flashing, penetrations, and decking before quoting a targeted fix on our main roof repair page.',
      },
      {
        type: 'heading',
        content: 'What Drives Roof Repair Pricing in Sacramento',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Leak source: pipe boot, valley, skylight curb, or chimney flashing',
          'Material type: asphalt shingle, concrete tile, or flat membrane',
          'Roof pitch and safe access for crew and materials',
          'Whether matching shingles or tile pieces are available',
          'Decking or fascia damage discovered during repair',
          'Number of areas needing attention on the same visit',
        ],
      },
      {
        type: 'heading',
        content: 'Typical Sacramento Repair Scenarios',
      },
      {
        type: 'paragraph',
        content:
          'A single pipe boot or a few lifted shingles often costs far less than widespread sealant failure across an aging roof. Tile repairs may look small from the street but require underlayment work when the felt beneath has dried out from Sacramento heat.',
      },
      {
        type: 'links',
        content: 'Related repair guides:',
        links: [
          article('missing-shingle-repair-sacramento', 'Missing shingle repair'),
          article('roof-flashing-repair-sacramento', 'Roof flashing repair'),
          article('chimney-flashing-repair-sacramento', 'Chimney flashing repair'),
        ],
      },
      {
        type: 'heading',
        content: 'Repair vs. Replacement',
      },
      {
        type: 'paragraph',
        content:
          'When repeated repairs stack on a roof near the end of its service life, replacement may be the better investment. PRC 13 explains both paths honestly during your free inspection so you can plan with clear numbers.',
      },
      {
        type: 'heading',
        content: 'Get a Written Repair Quote',
      },
      {
        type: 'paragraph',
        content:
          'Avoid guessing from the ground. Schedule a free roof inspection, review findings with our Sacramento team, and approve a written repair scope before work begins.',
      },
    ],
  },
  upgradedMissingShingleRepairSacramento,
  {
    slug: 'roof-flashing-repair-sacramento',
    title: 'Roof Flashing Repair in Sacramento: Stopping Leaks at Transitions',
    seoTitle: 'Roof Flashing Repair Sacramento | PRC 13 Roofing',
    excerpt:
      'Failed flashing causes many Sacramento leaks at walls, valleys, and penetrations. PRC 13 repairs step flashing, counter-flashing, and valley metal.',
    date: 'July 9, 2026',
    readTime: '6 min read',
    category: ROOF_REPAIR_CLUSTER_CATEGORY,
    coverImage: COVER_C,
    relatedServices: coreServices(),
    relatedArticles: [
      article('chimney-flashing-repair-sacramento', 'Chimney flashing repair'),
      article('skylight-leak-repair-sacramento', 'Skylight leak repair'),
      article('roof-repair-cost-sacramento', 'Roof repair cost Sacramento'),
    ],
    faqs: [
      {
        question: 'What is roof flashing?',
        answer:
 'Flashing is metal or membrane at roof transitions, walls, chimneys, skylights, valleys, and vents, that directs water over the roofing material instead of under it.',
      },
      {
        question: 'How do I know flashing is causing my leak?',
        answer:
          'Stains near exterior walls, chimneys, or skylights after rain often trace to flashing gaps. PRC 13 traces the water path on the roof before recommending repair.',
      },
      {
        question: 'Can dried sealant be repaired without full flashing replacement?',
        answer:
          'Sometimes. Sacramento heat cracks sealant before metal fails. We reseal when metal is sound and replace flashing when corrosion or improper overlap is the root cause.',
      },
      {
        question: 'Do tile roofs need different flashing repair?',
        answer:
 'Yes. Tile systems rely on pan flashing at walls and valleys. Repairs must respect tile weight and underlayment continuity, not just surface sealant.',
      },
      {
        question: 'How long does flashing repair take?',
        answer:
          'Many localized flashing repairs finish in a few hours. Larger chimney or valley projects may take a full day depending on access and material matching.',
      },
      {
        question: 'Should flashing be inspected with the rest of the roof?',
        answer:
          'Yes. PRC 13 includes flashing, pipe boots, and valley condition in every free roof inspection across Sacramento.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: roof flashing repair in Sacramento targets the metal and sealant transitions where water is designed to leave the roof plane. PRC 13 repairs valleys, wall steps, and penetration bases instead of only treating ceiling stains indoors.',
      },
      {
        type: 'heading',
        content: 'Common Flashing Failure Points',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Wall step flashing behind stucco or siding transitions',
          'Valley metal clogged with debris or separated at the center',
          'Pipe boot cracking from UV exposure',
          'HVAC platform and satellite mount flashing gaps',
          'Counter-flashing pulled away from masonry chimneys',
        ],
      },
      {
        type: 'heading',
        content: 'Sacramento Climate Stress on Flashing',
      },
      {
        type: 'paragraph',
        content:
          'Long dry summers bake sealants while winter rain tests every lap joint. Expansion and contraction at wall lines is especially common on older Sacramento bungalows with original flashing details.',
      },
      {
        type: 'links',
        content: 'Specialized flashing repairs:',
        links: [
          article('chimney-flashing-repair-sacramento', 'Chimney flashing repair'),
          article('skylight-leak-repair-sacramento', 'Skylight leak repair Sacramento'),
        ],
      },
      {
        type: 'heading',
        content: 'Request a Flashing Inspection',
      },
      {
        type: 'paragraph',
        content:
          'Flashing problems rarely fix themselves. Schedule a free inspection on our roof repair page and get a written scope before approving work.',
      },
    ],
  },
  {
    slug: 'chimney-flashing-repair-sacramento',
    title: 'Chimney Flashing Repair in Sacramento: Fixing Leaks at the Stack',
    seoTitle: 'Chimney Flashing Repair Sacramento | PRC 13 Roofing',
    excerpt:
      'Chimney flashing leaks are common on Sacramento homes with aging mortar and dried sealant. PRC 13 repairs flashing with a written scope before work starts.',
    date: 'July 9, 2026',
    readTime: '5 min read',
    category: ROOF_REPAIR_CLUSTER_CATEGORY,
    coverImage: COVER_D,
    relatedServices: coreServices(),
    relatedArticles: [
      article('roof-flashing-repair-sacramento', 'Roof flashing repair'),
      article('skylight-leak-repair-sacramento', 'Skylight leak repair'),
      article('tile-roof-repair-sacramento', 'Tile roof repair'),
    ],
    faqs: [
      {
        question: 'Why do chimneys leak in Sacramento?',
        answer:
 'Failed counter-flashing, cracked mortar caps, and separated base flashing let water run behind the chimney profile, especially after long heat cycles dry out sealants.',
      },
      {
        question: 'Can you repair chimney flashing without replacing the roof?',
        answer:
          'Yes, when surrounding shingles or tile and underlayment are sound. PRC 13 removes affected courses as needed, installs new flashing, and restores the roof surface.',
      },
      {
        question: 'What is counter-flashing?',
        answer:
          'Counter-flashing is metal set into chimney mortar joints or surface-mounted to cover the top edge of base flashing. Both layers must work together to shed water.',
      },
      {
        question: 'Do tile roofs need special chimney flashing?',
        answer:
          'Yes. Tile chimneys use pan flashing and often require careful tile removal to access the failure. We document underlayment condition before closing the repair.',
      },
      {
        question: 'Is a chimney leak an emergency?',
        answer:
          'Active water entering the fireplace area or ceiling during rain should be addressed quickly. Call for emergency help when water is flowing; schedule standard repair for intermittent stains.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: chimney flashing repair in Sacramento restores the metal layers where the chimney meets the roof plane. PRC 13 inspects base flashing, counter-flashing, and mortar caps before quoting repair, many chimney leaks are flashing problems, not roof-wide failures.',
      },
      {
        type: 'heading',
        content: 'Signs of Chimney Flashing Failure',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Water stains on ceiling corners near the chimney chase',
          'Rust streaks on fireplace face or exterior brick',
          'Visible gaps where metal meets masonry',
          'Missing or bent counter-flashing segments',
          'Interior musty odor after winter rains',
        ],
      },
      {
        type: 'heading',
        content: 'How PRC 13 Repairs Chimney Flashing',
      },
      {
        type: 'paragraph',
        content:
          'We remove enough roofing material to expose the failure, install correctly lapped base and counter-flashing, reseal penetrations, and replace shingles or tile in the repair zone. You receive photos and a written summary of what was corrected.',
      },
      {
        type: 'links',
        content: 'Related guides:',
        links: [
          article('roof-flashing-repair-sacramento', 'General roof flashing repair'),
          article('roof-repair-cost-sacramento', 'Roof repair cost expectations'),
        ],
      },
      {
        type: 'heading',
        content: 'Book a Chimney Leak Inspection',
      },
      {
        type: 'paragraph',
        content:
          'Chimney leaks worsen with each storm season. Start with a free roof inspection and a clear repair estimate from PRC 13.',
      },
    ],
  },
  {
    slug: 'skylight-leak-repair-sacramento',
    title: 'Skylight Leak Repair in Sacramento: Curb, Flashing, and Seal Fixes',
    seoTitle: 'Skylight Leak Repair Sacramento | PRC 13 Roofing',
    excerpt:
      'Sacramento skylight leaks often come from curb flashing or dried sealant. PRC 13 inspects the curb and surrounding roofing before recommending repair.',
    date: 'July 10, 2026',
    readTime: '5 min read',
    category: ROOF_REPAIR_CLUSTER_CATEGORY,
    coverImage: COVER_A,
    relatedServices: coreServices(),
    relatedArticles: [
      article('roof-flashing-repair-sacramento', 'Roof flashing repair'),
      article('chimney-flashing-repair-sacramento', 'Chimney flashing repair'),
      article('roof-leak-repair-sacramento', 'Roof leak repair Sacramento'),
    ],
    faqs: [
      {
        question: 'Why do skylights leak in Sacramento?',
        answer:
          'UV exposure dries curb sealant and flashing laps. Debris in the curb channel and failed underlayment wraps are common on homes with 15+ year old skylight installs.',
      },
      {
        question: 'Can a skylight be repaired without full replacement?',
        answer:
          'Often yes when the glass unit is sound and the curb flashing or surrounding roofing is the failure point. PRC 13 confirms scope after inspection.',
      },
      {
        question: 'Is the leak always at the skylight?',
        answer:
          'No. Water can enter uphill at a valley or vent and travel to the skylight opening. We trace the path on the roof before recommending repair.',
      },
      {
        question: 'Do tile roofs around skylights need special care?',
        answer:
          'Yes. Tile must be removed carefully to access pan flashing and underlayment. Improper tile reset is a common source of repeat leaks.',
      },
      {
        question: 'When should a skylight be replaced instead of repaired?',
        answer:
          'Fogged glass, cracked domes, or rotted curbs may require unit replacement. PRC 13 explains repair vs replacement after documenting curb and decking condition.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: skylight leak repair in Sacramento focuses on the curb and flashing detail where the unit meets the roof, not just re-caulking the interior frame. PRC 13 inspects uphill roofing and underlayment continuity before quoting work.',
      },
      {
        type: 'heading',
        content: 'Common Skylight Leak Causes',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Dried or cracked sealant at the curb top',
          'Flashing laps installed in the wrong order',
          'Clogged weep channels trapping water',
          'Shingle seal strip failure uphill of the unit',
          'Underlayment splits from heat aging',
        ],
      },
      {
        type: 'heading',
        content: 'Repair Process Overview',
      },
      {
        type: 'paragraph',
        content:
          'Our crew exposes the curb flashing, replaces failed sealant and metal as needed, integrates new underlayment ties, and resets shingles or tile with proper overlap. Interior drywall repair is separate from stopping the roof-side entry point.',
      },
      {
        type: 'links',
        content: 'Broader leak resources:',
        links: [
          article('roof-leak-repair-sacramento', 'Roof leak repair Sacramento'),
          article('roof-flashing-repair-sacramento', 'Roof flashing repair'),
        ],
      },
      {
        type: 'heading',
        content: 'Schedule a Skylight Leak Assessment',
      },
      {
        type: 'paragraph',
        content:
          'Do not wait for the next winter storm. Request a free roof inspection and get a written skylight repair scope from PRC 13.',
      },
    ],
  },
  {
    slug: 'tile-roof-repair-sacramento',
    title: 'Tile Roof Repair in Sacramento: Underlayment, Flashing, and Broken Tile',
    seoTitle: 'Tile Roof Repair Sacramento | PRC 13 Roofing',
    excerpt:
      'Sacramento tile roof repair often fixes underlayment and flashing while tiles look fine. PRC 13 replaces broken tile and explains when replacement fits.',
    date: 'July 10, 2026',
    readTime: '6 min read',
    category: ROOF_REPAIR_CLUSTER_CATEGORY,
    coverImage: COVER_B,
    relatedServices: coreServices(),
    relatedArticles: [
      article('roof-repair-cost-sacramento', 'Roof repair cost Sacramento'),
      article('roof-flashing-repair-sacramento', 'Roof flashing repair'),
      article('missing-shingle-repair-sacramento', 'Missing shingle repair'),
    ],
    faqs: [
      {
        question: 'Can you repair a tile roof without replacing the whole roof?',
        answer:
          'Yes, when underlayment is sound in the repair zone and matching tile is available. PRC 13 explains limits honestly if felt is widespread failure.',
      },
      {
        question: 'Why do tile roofs leak if the tile looks fine?',
        answer:
          'Tile sheds most water but the underlayment beneath carries the real load. Sacramento heat dries felt long before tile cracks show.',
      },
      {
        question: 'Do you stock matching replacement tile?',
        answer:
          'We source the closest match available for your profile. Some discontinued styles may show slight variation, which we discuss before work.',
      },
      {
        question: 'What is a tile pan repair?',
        answer:
          'Metal pan flashing at walls and valleys under tile must lap correctly. We repair pans and underlayment ties when water enters at transitions.',
      },
      {
        question: 'When should tile repair become replacement?',
        answer:
          'Widespread underlayment failure, repeated leak zones, or brittle tile across multiple slopes often point to full replacement with new underlayment.',
      },
      {
        question: 'Does PRC 13 repair both concrete and clay tile?',
        answer:
          'Yes. We assess weight, profile, and underlayment type during inspection and quote repair scope accordingly.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
 'Short answer: tile roof repair in Sacramento addresses broken tile, failed underlayment, and pan flashing, not just surface cracks. PRC 13 inspects what is beneath the tile before quoting, because heat-aged felt is the most common hidden failure on Sacramento tile homes.',
      },
      {
        type: 'heading',
        content: 'Typical Tile Repair Work',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Replacing cracked or slipped tile without disturbing the whole field',
          'Repairing valley and wall pan flashing under tile courses',
          'Underlayment patches in localized leak zones',
          'Ridge cap and hip mortar or foam seal maintenance',
          'Documenting when matching tile is no longer available',
        ],
      },
      {
        type: 'heading',
        content: 'Sacramento Heat and Tile Underlayment',
      },
      {
        type: 'paragraph',
        content:
          'Tile can last decades while felt beneath fails in 20 to 25 years on many installs. Homeowners see a intact roof from the curb while attic stains appear after the first heavy winter rain.',
      },
      {
        type: 'links',
        content: 'Related repair topics:',
        links: [
          article('chimney-flashing-repair-sacramento', 'Chimney flashing repair'),
          article('roof-replacement-cost-sacramento', 'Roof replacement cost Sacramento'),
        ],
      },
      {
        type: 'heading',
        content: 'Get a Tile Roof Inspection',
      },
      {
        type: 'paragraph',
        content:
          'Tile repair scope is impossible to price accurately from the ground. Schedule a free inspection through PRC 13 and review a written recommendation before approving work.',
      },
    ],
  },
];

export const ROOF_REPAIR_CLUSTER_SLUGS = roofRepairClusterPosts.map(post => post.slug);

export const ROOF_REPAIR_HUB_RESOURCE_SLUGS = [
  ...ROOF_REPAIR_CLUSTER_SLUGS,
  ...ROOF_REPAIR_HUB_CROSS_LINK_SLUGS,
];
