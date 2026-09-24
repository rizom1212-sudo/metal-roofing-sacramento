import type { BlogPost, BlogRelatedService } from './blogTypes';
import { ASSETS } from './assets';
import { METAL_CLUSTER_CATEGORY } from './blogCategories';

const COVER_STORM = ASSETS.blog('Screenshot_2026-05-20_at_10.49.35.png');
const COVER_MAINT = ASSETS.blog('22dc3636-c588-43bd-a30f-c855b3fcce4f.webp');
const COVER_HAIL = ASSETS.emergencyRepair('6998f81bd83aec69908449bf.jpg');
const COVER_BUYER = ASSETS.blog('22dc3636-c588-43bd-a30f-c855b3fcce4f.webp');

const article = (slug: string, label: string): BlogRelatedService => ({
  label,
  href: `/blog/${slug}`,
});

const repair: BlogRelatedService = { label: 'Metal Roof Repair', href: '/metal-roof-repair' };
const inspect: BlogRelatedService = { label: 'Metal Roof Inspection', href: '/metal-roof-inspection' };
const replace: BlogRelatedService = { label: 'Metal Roof Replacement', href: '/metal-roof-replacement' };
const hub: BlogRelatedService = { label: 'Metal Roofing', href: '/metal-roofing' };
const contact: BlogRelatedService = { label: 'Contact', href: '/contact' };

export const KEEP_REWRITE_SLUGS = [
  'what-to-do-roof-leak-sacramento-storm',
  'sacramento-roof-maintenance-checklist',
  'how-insurance-claims-work-for-roof-damage',
  'hail-damage-roof-repair',
  'roof-inspection-before-buying-home',
] as const;

export const metalKeepRewritePosts: BlogPost[] = [
  {
    slug: 'what-to-do-roof-leak-sacramento-storm',
    title: 'What to Do When a Metal Roof Leaks During a Sacramento Storm',
    seoTitle: 'Metal Roof Leak During a Sacramento Storm | What to Do',
    excerpt:
      'If a metal roof leaks during Sacramento rain, protect the interior, stay off the wet panels, and schedule a metal roof inspection. PRC 13 does not claim 24/7 service.',
    date: 'May 26, 2026',
    updatedDate: 'September 23, 2026',
    readTime: '8 min read',
    category: METAL_CLUSTER_CATEGORY,
    coverImage: COVER_STORM,
    relatedServices: [repair, inspect, hub, contact],
    relatedArticles: [
      article('sacramento-roof-maintenance-checklist', 'Metal roof maintenance checklist'),
      article('how-insurance-claims-work-for-roof-damage', 'Metal roof insurance claims'),
      article('metal-roof-repair-vs-replacement', 'Metal roof repair vs replacement'),
    ],
    faqs: [
      {
        question: 'Should I walk a metal roof to find a leak during rain?',
        answer:
          'No. Wet standing-seam pans, exposed-fastener panels, and metal edges are slick. A metal leak is often at a flashing, penetration, seam, or edge — not in the middle of a sound panel — so walking the field rarely helps and can bend panels or injure you.',
      },
      {
        question: 'Does a ceiling stain sit directly under the metal leak?',
        answer:
          'Often no. Water can travel along underlayment, a seam, or a rafter before it shows indoors. Treat the stain as a clue, not the entry point.',
      },
      {
        question: 'Does PRC 13 offer 24/7 emergency metal roof service?',
        answer:
          'No. PRC 13 Roofing Inc. works during posted Monday–Friday business hours. Contain water indoors, stay off the roof, and call or send a message when we are open.',
      },
      {
        question: 'When is a metal leak a repair versus a replacement?',
        answer:
          'A local flashing, fastener, or penetration failure can often be repaired if surrounding panels and underlayment clues still look sound. Widespread coating failure, repeating leaks, or a worn system is a replacement conversation after inspection.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: contain water indoors, move valuables, stay off a wet metal roof, and contact PRC 13 Roofing Inc. during business hours for metal roof inspection and repair. Do not walk standing seam or wet panels to hunt for the leak. On metal, water usually enters at a flashing, penetration, seam, or edge — not through the middle of a sound pan.',
      },
      {
        type: 'heading',
        content: 'Protect the interior first',
      },
      {
        type: 'paragraph',
        content:
          'Sacramento winter storms can dump rain for hours after a long dry season. If a metal roof starts dripping, the first job is the room, not the roof. Place a bucket or towels under the drip. If the ceiling is bulging, stay out from under it. Move electronics and furniture. Turn off power to a wet fixture if you can do that without standing in water.',
      },
      {
        type: 'heading',
        content: 'Why metal leaks look different from shingle leaks',
      },
      {
        type: 'paragraph',
        content:
          'A sound metal panel is not a sponge. Most metal leaks start where the system is cut or terminated: wall flashings, chimneys, skylight curbs, pipe boots, ridge and hip closures, valley trim, and eave or rake metal. Wind-driven rain finds a failed hem or a loose clip before it finds a hole in the field. That is why a stain in a hallway can trace to a wall transition two bays away.',
      },
      {
        type: 'list',
        content: 'Common metal leak paths in Sacramento storms:',
        items: [
          'Counter-flashing or kick-out flashing at a wall or chimney',
          'Pipe boots and mechanical penetrations after heat cycling',
          'Standing-seam end dams, ridge closures, or poorly terminated hips',
          'Exposed fasteners that have backed out or lost washers',
          'Curb flashings at skylights and roof-mounted equipment',
        ],
      },
      {
        type: 'heading',
        content: 'Stay off wet metal',
      },
      {
        type: 'paragraph',
        content:
          'Do not climb a wet metal roof, throw a tarp from a ladder in the dark, or walk standing-seam pans. Panels oil-can, edges are sharp, and a misstep can crease a pan that was not leaking. Temporary exterior work belongs to a crew that can see the profile and decide whether a local dry-in is even useful. PRC 13 does not claim 24/7 or after-hours storm response.',
      },
      {
        type: 'heading',
        content: 'Document what you can see from the ground',
      },
      {
        type: 'paragraph',
        content:
          'Photograph the interior stain, the drip, and anything you can see safely from the ground: lifted trim, a missing ridge cap, or debris against a wall. Those photos help an inspection later and help you talk with an insurer if the event was sudden storm damage. Coverage and payment remain the insurer’s decision. See how metal roof insurance claims typically work if you expect to file.',
      },
      {
        type: 'heading',
        content: 'What happens after the storm',
      },
      {
        type: 'paragraph',
        content:
          'When it is safe, schedule a metal roof inspection. Standard residential inspections with PRC 13 are free and include written findings. We look at panels, seams or fasteners, flashings, penetrations, and drainage, then say whether a focused metal repair is honest or whether the system is worn enough to discuss metal replacement. Hire details live on metal roof repair and metal roof inspection.',
      },
      {
        type: 'cta',
        content: '',
        heading: 'Need the leak traced on the metal system?',
        statement:
          'Request a metal roof inspection during business hours. We document the water path and explain repair versus replacement. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
        ctaLabel: 'Request a Metal Roof Inspection',
        ctaHref: '/metal-roof-inspection',
      },
    ],
  },
  {
    slug: 'sacramento-roof-maintenance-checklist',
    title: 'Metal Roof Maintenance Checklist for Sacramento Homeowners',
    seoTitle: 'Sacramento Metal Roof Maintenance Checklist',
    excerpt:
      'Owner maintenance for Sacramento metal roofs: keep valleys and edges clear, watch flashings, and inspect after storms. PRC 13 does not offer metal cleaning.',
    date: 'May 18, 2026',
    updatedDate: 'September 23, 2026',
    readTime: '8 min read',
    category: METAL_CLUSTER_CATEGORY,
    coverImage: COVER_MAINT,
    relatedServices: [inspect, repair, hub, contact],
    relatedArticles: [
      article('how-should-a-metal-roof-be-cleaned', 'How a metal roof should be cleaned'),
      article('what-to-do-roof-leak-sacramento-storm', 'Metal roof leak during a storm'),
      article('metal-roofing-sacramento-climate', 'Metal roofing and Sacramento climate'),
    ],
    faqs: [
      {
        question: 'How often should I inspect a metal roof in Sacramento?',
        answer:
          'Walk the property from the ground after significant wind or rain, and plan a professional metal inspection on a regular ownership cadence — at least after the first heavy winter storms and after any event that moved debris or trim. Heat cycling works on flashings even when panels still look bright.',
      },
      {
        question: 'Does PRC 13 clean metal roofs?',
        answer:
          'No. Cleaning is owner maintenance or a specialist who follows the finish manufacturer’s guidance. PRC 13 inspects and repairs metal systems; we do not sell metal roof washing.',
      },
      {
        question: 'Do metal roofs need gutter and valley clearing?',
        answer:
          'Yes. Metal does not change the physics of leaves and needles sitting in valleys or against flashings. Oak and pine debris is common in Sacramento-area neighborhoods. Clearing drainage is owner work.',
      },
      {
        question: 'When should I stop maintaining and call for repair?',
        answer:
          'Call for a metal inspection if you see interior stains, repeated drips, loose or missing trim, backed-out fasteners, rust at cuts or flashings, or noisy wind at an edge. Do not walk the roof to “tighten a few screws” on a profile you cannot identify.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: a Sacramento metal roof still needs light owner maintenance — debris out of valleys and edges, a ground-level look after storms, and a professional metal inspection on a regular cadence. PRC 13 Roofing Inc. does not clean metal roofs. Cleaning is owner work or a wash specialist who follows the finish manufacturer’s guidance.',
      },
      {
        type: 'heading',
        content: 'How often to look',
      },
      {
        type: 'paragraph',
        content:
          'Inspect from the ground after major wind or rain, after heat waves that pop sealants, and before the first long winter storm. A useful professional cadence is at least annually for most homes, and sooner if the roof has many penetrations, trees overhead, or a recent leak. “How often” is not a single calendar date — it is after weather that tests flashings, plus ordinary ownership, not only when a ceiling stains.',
      },
      {
        type: 'heading',
        content: 'Seasonal metal checklist for Sacramento',
      },
      {
        type: 'list',
        content: 'Before winter rain:',
        items: [
          'Clear valleys, crickets, and the roof edge of leaves and needles',
          'Confirm gutters and downspouts are open so water leaves the metal',
          'From the ground, look for missing ridge or hip caps and displaced trim',
          'Note any interior stains that appeared during the last season',
        ],
      },
      {
        type: 'list',
        content: 'After wind or a storm:',
        items: [
          'Stay off wet metal; look from the yard or a neighbor’s view',
          'Check for bent eave or rake metal and debris against walls',
          'Listen for a new rattle at trim when the wind comes up',
          'If water entered, follow the storm-leak first-aid steps, then schedule inspection',
        ],
      },
      {
        type: 'list',
        content: 'After Sacramento heat:',
        items: [
          'Watch pipe boots and curb sealants that dry and crack',
          'Look for coating chalk or rust at cut edges and fasteners',
          'Do not assume bright panels mean flashings are still tight',
        ],
      },
      {
        type: 'heading',
        content: 'What you can do versus what needs a metal roofer',
      },
      {
        type: 'paragraph',
        content:
          'Safe owner work is debris clearing from the ground or a stable ladder at the eave, and keeping gutters open. Walking standing seam, resealing every penetration with a tube of caulk, or “tightening” exposed fasteners without knowing the washer and profile is how metal roofs get new holes. When something looks wrong, a metal roof inspection documents panels, seams or clips, flashings, and drainage in writing. Standard residential inspections are free.',
      },
      {
        type: 'heading',
        content: 'Cleaning is separate from this checklist',
      },
      {
        type: 'paragraph',
        content:
          'Washing, oxidation, and finish care are covered in how a metal roof should be cleaned. That article is owner guidance. This checklist is about water paths and storm readiness. Do not pressure-wash a painted metal roof as routine maintenance.',
      },
      {
        type: 'cta',
        content: '',
        heading: 'Want a professional look at the metal details?',
        statement:
          'Request a metal roof inspection. We write findings and say whether repair, replacement, or no work is the honest next step. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
        ctaLabel: 'Request a Metal Roof Inspection',
        ctaHref: '/metal-roof-inspection',
      },
    ],
  },
  {
    slug: 'how-insurance-claims-work-for-roof-damage',
    title: 'How Insurance Claims Work for Metal Roof Storm Damage',
    seoTitle: 'Metal Roof Insurance Claims After Storm Damage | Sacramento',
    excerpt:
      'How storm-related metal roof claims typically work: document conditions, inspect, and let the insurer decide. PRC 13 does not guarantee coverage or outcomes.',
    date: 'April 10, 2026',
    updatedDate: 'September 23, 2026',
    readTime: '8 min read',
    category: METAL_CLUSTER_CATEGORY,
    coverImage: COVER_STORM,
    relatedServices: [inspect, repair, replace, contact],
    relatedArticles: [
      article('hail-damage-roof-repair', 'Hail damage on metal roofs'),
      article('what-to-do-roof-leak-sacramento-storm', 'Metal roof leak during a storm'),
      article('metal-roof-repair-vs-replacement', 'Metal roof repair vs replacement'),
    ],
    faqs: [
      {
        question: 'Does PRC 13 guarantee that insurance will pay for a metal roof?',
        answer:
          'No. PRC 13 documents metal roof conditions we observe. Coverage, depreciation, and payment are the insurer’s decision.',
      },
      {
        question: 'Is cosmetic hail denting the same as a covered functional failure?',
        answer:
          'Not necessarily. Hail can dent panels without opening a leak path. Functional leaks, failed flashings, and accessory damage are different questions from appearance. See the hail article for that split.',
      },
      {
        question: 'Should I file a claim before a metal inspection?',
        answer:
          'File according to your policy and your insurer’s instructions. A written metal inspection helps you describe what is on the roof. We do not tell you whether to file.',
      },
      {
        question: 'Will a claim automatically mean a full metal replacement?',
        answer:
          'No. Many metal issues are local repairs. Replacement belongs in the conversation when the system is broadly worn or the insurer and the actual roof condition support it — not because a claim was opened.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: insurance may help with sudden storm-related metal roof damage, but coverage and payment are the insurer’s decision. PRC 13 Roofing Inc. can inspect the metal system, photograph conditions, and explain how a proposed repair or replacement relates to those findings. We do not promise claim approval, “storm upgrades,” or a free roof.',
      },
      {
        type: 'heading',
        content: 'What a metal claim is actually about',
      },
      {
        type: 'paragraph',
        content:
          'A useful metal-roof claim file is a record of conditions: bent or displaced trim, opened flashings, impact at accessories, a leak path after a dated storm, or hail marks that you and the carrier can see. It is not a request that PRC 13 “work the adjuster” for a new standing-seam roof. Wear, age, and lack of maintenance are often treated differently from a sudden weather event. Your policy controls that split.',
      },
      {
        type: 'heading',
        content: 'Document first, then inspect',
      },
      {
        type: 'list',
        content: 'Practical steps that do not invent a result:',
        items: [
          'Photograph interior stains and the date you first saw water',
          'Photograph ground-visible trim, debris, or impact from a safe place',
          'Do not discard damaged metal pieces until the insurer says you may',
          'Schedule a metal roof inspection for written findings',
          'File or follow up with the carrier using their process, not a contractor script',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Standard residential metal inspections are free with written findings. We can note storm-related conditions we observe. We cannot say what an adjuster will pay. If hail is the issue, read hail damage on metal roofs — cosmetic dents and functional leaks are not the same conversation.',
      },
      {
        type: 'heading',
        content: 'Repair, replacement, and the settlement',
      },
      {
        type: 'paragraph',
        content:
          'If the carrier agrees a storm opened a metal detail, the honest scope might be flashing, a panel, or a penetration — not a full reroof. If the metal system is already at the end of its service life, inspection may separate storm openings from replacement you were going to need anyway. PRC 13 will not inflate a metal replacement to match a hoped-for check. Financing, if any, is a separate conversation on qualifying projects and is not an insurance product.',
      },
      {
        type: 'heading',
        content: 'Who decides',
      },
      {
        type: 'paragraph',
        content:
          'You, the insurer, and any adjuster decide coverage. PRC 13 decides what metal work we will warrant after we see the roof. Those are different decisions. If you want the metal inspected so you have findings in hand, use metal roof inspection. If a local failure is already clear, metal roof repair is the hire path.',
      },
      {
        type: 'cta',
        content: '',
        heading: 'Need findings you can share with an insurer?',
        statement:
          'Request a metal roof inspection. We document the metal system. We do not guarantee claim outcomes. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
        ctaLabel: 'Request a Metal Roof Inspection',
        ctaHref: '/metal-roof-inspection',
      },
    ],
  },
  {
    slug: 'hail-damage-roof-repair',
    title: 'Hail Damage on Metal Roofs in Sacramento',
    seoTitle: 'Metal Roof Hail Damage | Sacramento',
    excerpt:
      'Hail can dent metal panels and bruise accessories. Cosmetic dents and functional leaks are different questions. PRC 13 documents conditions; insurers decide coverage.',
    date: 'June 20, 2026',
    updatedDate: 'September 23, 2026',
    readTime: '8 min read',
    category: METAL_CLUSTER_CATEGORY,
    coverImage: COVER_HAIL,
    relatedServices: [inspect, repair, hub, contact],
    relatedArticles: [
      article('how-insurance-claims-work-for-roof-damage', 'Metal roof insurance claims'),
      article('metal-roof-repair-vs-replacement', 'Metal roof repair vs replacement'),
      article('what-to-do-roof-leak-sacramento-storm', 'Metal roof leak during a storm'),
    ],
    faqs: [
      {
        question: 'Does hail usually destroy a metal roof?',
        answer:
          'Often no. Many metal roofs shed hail without opening a leak. Dents, bruised trim, cracked accessories, and failed flashings are the conditions to inspect. A dented pan is not automatically a failed roof.',
      },
      {
        question: 'Is Sacramento a frequent hail market?',
        answer:
          'Hail is less common here than in the Plains, but cells do move through the valley and foothills. Treat a confirmed hail event as a reason to inspect, not a reason to assume replacement.',
      },
      {
        question: 'Will insurance replace dented metal panels?',
        answer:
          'That is the insurer’s decision and depends on the policy, including cosmetic-damage language. PRC 13 documents what we see. We do not promise a payout or a new roof.',
      },
      {
        question: 'Can dented metal still be repaired?',
        answer:
          'If the finish is intact and there is no leak path, many owners leave cosmetic dents. Functional damage — split trim, opened seams, broken vents, or punctures — is a repair conversation after inspection.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: hail can dent metal panels and bruise vents, trim, and flashings. Cosmetic dents and a leak are different problems. After a confirmed hail cell, stay off the roof, photograph what you can see from the ground, and schedule a metal roof inspection. PRC 13 Roofing Inc. documents conditions. Insurers decide coverage.',
      },
      {
        type: 'heading',
        content: 'What hail does to metal — and what it does not',
      },
      {
        type: 'paragraph',
        content:
          'A metal pan is a thin, formed sheet. Hail can leave circular dents, especially on softer alloys or thinner gauges, without piercing the panel. Standing seam can show dents in the flat and still lock at the seam. Exposed-fastener panels can lose washer integrity if ice hits a screw. Soft accessories — plastic vents, ridge caps, and sealants — often fail before the field metal does.',
      },
      {
        type: 'list',
        content: 'Inspect after hail for:',
        items: [
          'Dents in the field versus splits or punctures',
          'Cracked or missing pipe boots and vent housings',
          'Bent eave, rake, or ridge metal',
          'Opened flashings at walls and chimneys',
          'Interior drips that started after the storm date',
        ],
      },
      {
        type: 'heading',
        content: 'Cosmetic versus functional',
      },
      {
        type: 'paragraph',
        content:
          'Cosmetic means the roof still sheds water and the finish is largely intact; you may dislike the look. Functional means water can enter, a detail is open, or an accessory no longer does its job. Mixing those two is how metal roofs get sold as “total losses” when a repair or no work is the honest finding. If you file a claim, say what you observed. Do not ask us to write the claim for a result.',
      },
      {
        type: 'heading',
        content: 'Sacramento context',
      },
      {
        type: 'paragraph',
        content:
          'Hail here is episodic, not a seasonal product. A cell that crosses Folsom, the valley floor, or the foothills can still bruise metal and accessories. Wind and rain in the same storm may be the leak source even when hail left marks. Inspection should separate hail marks from flashing or drainage failures that would have shown up in the next rain anyway.',
      },
      {
        type: 'heading',
        content: 'Repair, replacement, or leave it',
      },
      {
        type: 'paragraph',
        content:
          'Localized functional damage is metal roof repair. A system that is already worn, plus hail, may become a metal replacement conversation after we see the roof. Widespread dents with no leak and a sound underlayment may be an appearance decision for you and, if you file, for the carrier. We will not treat every dent as a reroof.',
      },
      {
        type: 'cta',
        content: '',
        heading: 'Had hail on a metal roof?',
        statement:
          'Request a metal roof inspection. We document dents, accessories, and leak paths. We do not guarantee insurance outcomes. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
        ctaLabel: 'Request a Metal Roof Inspection',
        ctaHref: '/metal-roof-inspection',
      },
    ],
  },
  {
    slug: 'roof-inspection-before-buying-home',
    title: 'Metal Roof Inspection Before Buying a Sacramento Home',
    seoTitle: 'Inspect a Metal Roof Before Buying a Home | Sacramento',
    excerpt:
      'A buyer-side metal roof inspection looks at remaining service life, flashings, and whether repair or replacement belongs in the offer — not a general home-inspection checkbox.',
    date: 'June 14, 2026',
    updatedDate: 'September 23, 2026',
    readTime: '8 min read',
    category: METAL_CLUSTER_CATEGORY,
    coverImage: COVER_BUYER,
    relatedServices: [inspect, replace, hub, contact],
    relatedArticles: [
      article('metal-roof-repair-vs-replacement', 'Metal roof repair vs replacement'),
      article('how-long-does-standing-seam-metal-roof-last', 'How long standing seam lasts'),
      article('metal-roofing-vs-shingles-sacramento', 'Metal roofing vs shingles'),
    ],
    faqs: [
      {
        question: 'Is a general home inspection enough for a metal roof?',
        answer:
          'A home inspector may note obvious stains or missing trim. A metal roof inspection reviews panels, seams or fasteners, flashings, penetrations, and whether the covering still has honest remaining life. Those are different scopes.',
      },
      {
        question: 'Are buyer-side residential metal inspections free?',
        answer:
          'Standard residential metal roof inspections with PRC 13 are free and include written findings, including for a purchase you are considering. There is no obligation to hire us for the work.',
      },
      {
        question: 'What if the house does not have metal yet?',
        answer:
          'Inspection can still document the current covering and whether the structure and deck clues support a future metal roof. Replacement intent, if you buy, lives on metal roof replacement — after you own the house and can authorize tear-off.',
      },
      {
        question: 'Can you tell me what to offer the seller?',
        answer:
          'No. We write roof findings. Price, credits, and whether to proceed are between you, your agent, and the seller.',
      },
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Short answer: if you are buying a Sacramento-area home that already has metal — or you are budgeting to put metal on after closing — get a metal roof inspection before you treat the roof as a solved line item. A general home inspection is not a metal-system review. PRC 13 Roofing Inc. writes findings. We do not negotiate your offer.',
      },
      {
        type: 'heading',
        content: 'What a buyer-side metal inspection looks at',
      },
      {
        type: 'list',
        content: 'The visit is about remaining service and water paths:',
        items: [
          'Panel profile: standing seam, exposed fastener, or mixed additions',
          'Seams, clips, or fastener washers as they apply to that profile',
          'Flashings at walls, chimneys, skylights, and roof-to-wall transitions',
          'Penetrations, ridge closures, and edge metal',
          'Coating wear, rust at cuts, and signs of prior patching',
          'Attic or interior clues when access is allowed',
        ],
      },
      {
        type: 'paragraph',
        content:
          'You should leave with written notes you can share with your agent: localized repair, honest remaining life, or a replacement conversation. Standard residential inspections are free. Commercial or unusual buildings are scheduled when you contact us.',
      },
      {
        type: 'heading',
        content: 'Sacramento resale roofs are mixed',
      },
      {
        type: 'paragraph',
        content:
          'Older East Sacramento and mid-town houses, 1990s suburbs, and foothill lots do not share one metal story. Some homes have a well-detailed standing-seam roof with years left. Some have a thin exposed-fastener overlay over unknown deck. Some have metal on one addition and aged shingles on the rest. Inspection has to see the actual roof. Do not buy from a listing photo that says “metal.”',
      },
      {
        type: 'heading',
        content: 'Repair, credit, or walk — we only write the roof',
      },
      {
        type: 'paragraph',
        content:
          'If flashings or a penetration are the problem, metal roof repair may be enough after you close. If the covering is at the end of its life, metal roof replacement is the hire path you budget — not a surprise in the first winter. Repair versus replacement is a condition decision; see the metal repair vs replacement guide. Offer strategy is yours.',
      },
      {
        type: 'heading',
        content: 'If you plan to switch the house to metal',
      },
      {
        type: 'paragraph',
        content:
          'Ask inspection to comment on deck clues, structure as far as we can see, and whether a metal system is a fit for the architecture. Overlay versus tear-off is covered in [metal roof over shingles](/blog/metal-roof-over-shingles-sacramento). We will not promise a metal price from the curb before anyone owns the house and can authorize a full look.',
      },
      {
        type: 'cta',
        content: '',
        heading: 'Buying a home and need the metal roof documented?',
        statement:
          'Request a metal roof inspection. Written findings, no obligation to hire the work. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
        ctaLabel: 'Request a Metal Roof Inspection',
        ctaHref: '/metal-roof-inspection',
      },
    ],
  },
];
