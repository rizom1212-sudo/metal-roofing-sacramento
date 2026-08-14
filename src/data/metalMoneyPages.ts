import type { FaqItem } from '../components/FaqAccordion';
import { ASSETS } from './assets';
import {
  CTA_COMMERCIAL_METAL,
  CTA_METAL_INSPECTION,
  CTA_METAL_INSTALL,
  CTA_METAL_REPAIR,
  CTA_METAL_REPLACE,
  CTA_RESIDENTIAL_METAL,
  CTA_STANDING_SEAM,
} from './cta';

export interface MoneyPageRelatedLink {
  href: string;
  label: string;
  note: string;
}

export interface MoneyPageSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface MoneyPageProcessStep {
  title: string;
  desc: string;
}

export interface MetalMoneyPageContent {
  id: string;
  path: string;
  h1: string;
  h1Accent?: string;
  heroIntro: string;
  heroKicker: string;
  ctaLabel: string;
  formTitle: string;
  formSubtitle: string;
  defaultReason: string;
  sourcePage: string;
  pageName: string;
  serviceName: string;
  serviceDescription: string;
  answerTitle: string;
  answer: string;
  answerPoints: string[];
  whoForTitle: string;
  whoFor: string;
  problemsTitle: string;
  problems: string[];
  sections: MoneyPageSection[];
  processTitle?: string;
  process?: MoneyPageProcessStep[];
  decisionTitle: string;
  decision: string;
  decisionItems?: string[];
  sacramentoTitle: string;
  sacramento: string;
  related: MoneyPageRelatedLink[];
  faqs: FaqItem[];
  retrieval: { question: string; answer: string }[];
  finalCtaTitle: string;
  finalCtaBody: string;
  primaryImage: string;
  heroImageAlt: string;
}

const HERO_AFRAME = ASSETS.metalRoofing('Screenshot_2026-05-20_at_09.30.58.png');
const HERO_NEW_CONSTRUCTION = '/assets/featured-project/standing-seam-metal-roof-02.png';
const HERO_ELEVATION = '/assets/featured-project/standing-seam-metal-roof-03.png';
const HERO_DETAIL = '/assets/featured-project/standing-seam-metal-roof-01.png';
const HERO_FINISHED = ASSETS.gallery('masonry-roof-project-08.png');

export const METAL_MONEY_PAGES: Record<string, MetalMoneyPageContent> = {
  installation: {
    id: 'metal-roof-installation',
    path: '/metal-roof-installation',
    h1: 'Metal Roof Installation',
    h1Accent: 'New metal systems, installed correctly',
    heroIntro:
      'Planning a new metal roof—not patching an old one? Installation covers substrate checks, underlayment, flashing, ventilation, and panel work so the system can perform in Sacramento heat and winter rain.',
    heroKicker: 'New metal roof systems',
    ctaLabel: CTA_METAL_INSTALL,
    formTitle: CTA_METAL_INSTALL,
    formSubtitle: 'Tell us about the building and we will schedule an inspection during normal business hours.',
    defaultReason: 'metal-installation',
    sourcePage: 'metal-roof-installation',
    pageName: 'Metal Roof Installation Sacramento',
    serviceName: 'Metal roof installation',
    serviceDescription:
      'New metal roof installation in Sacramento, including standing seam, corrugated, and ribbed systems with underlayment, flashing, ventilation, and panel installation.',
    answerTitle: 'What metal roof installation includes',
    answer:
      'Metal roof installation is the work of putting a new metal roofing system on a structure. It is the right page if you are adding metal for the first time, building new, or converting to metal after the existing roof has been evaluated. PRC 13 Roofing Inc. performs the contracted work for Metal Roofing Sacramento.',
    answerPoints: [
      'Starts with an existing-roof and deck evaluation',
      'Includes underlayment, flashing, trim, and panels',
      'Standing seam is one option among metal profiles',
      'Written quote before work is scheduled',
    ],
    whoForTitle: 'Who this service is for',
    whoFor:
      'Homeowners and property owners who want a new metal system installed—not a localized leak fix. That includes new construction, a first metal roof after an older covering is removed, and projects where the decision to go metal has already been made and the remaining question is how installation should be sequenced.',
    problemsTitle: 'Problems installation solves',
    problems: [
      'You need a complete metal system, not a patch on worn shingles or tile',
      'A builder or homeowner is specifying metal on new construction',
      'You want standing seam, corrugated, or ribbed panels installed as a full assembly',
      'You need a clear installation sequence: evaluation, quote, then crew work',
    ],
    sections: [
      {
        heading: 'Existing roof and deck evaluation',
        paragraphs: [
          'Before panels go on, the current roof and the deck beneath it need an honest look. Soft plywood, trapped moisture, and failed underlayment can shorten a new metal system if they are left in place. PRC 13 inspects from the attic when access allows and from the roof surface so the installation scope matches the structure you actually have.',
          'Overlaying metal over an existing shingle layer is only considered when conditions and product requirements allow. Full removal so the deck can be inspected is the usual recommendation, not the exception.',
        ],
      },
      {
        heading: 'Underlayment, flashing, and ventilation',
        paragraphs: [
          'A metal roof is an assembly, not just panels. Underlayment, edge metal, wall and chimney flashings, and attic ventilation affect how the roof handles Sacramento summer heat and winter rain. Metal itself is not insulation; airflow and the home’s existing insulation package matter for comfort and condensation control.',
          'We discuss those assembly details during consultation so heat, drainage, and penetration details are planned before the crew starts.',
        ],
        list: [
          'Underlayment selected for the project and substrate',
          'Flashings at valleys, walls, chimneys, and roof edges',
          'Ventilation reviewed so the new system is not trapping heat or moisture',
          'Trim and closures that finish panel edges',
        ],
      },
      {
        heading: 'Panel installation and profile options',
        paragraphs: [
          'PRC 13 installs standing seam, corrugated, and exposed-fastener ribbed metal panels in steel and aluminum options. Standing seam conceals fasteners under raised seams. Corrugated and ribbed profiles use exposed fasteners and can fit different budgets and building styles.',
          'Profile choice is part of installation planning, not a separate mystery. We walk through what fits the architecture and the quote before materials are ordered.',
        ],
      },
      {
        heading: 'New construction and reroofing',
        paragraphs: [
          'On new construction, installation follows a completed, inspectable deck and the flashing plan for that building. On an existing building, installation usually follows removal of the old covering so the deck can be repaired where needed. Both paths still use the same core sequence: evaluate, specify, quote, install, walk through.',
          'If the real question is whether the current roof should come off at all, that decision belongs with replacement planning. Installation assumes you are moving forward with a new metal system.',
        ],
      },
    ],
    processTitle: 'How metal roof installation typically proceeds',
    process: [
      { title: 'Inspection and consult', desc: 'We evaluate the current roof or deck, discuss metal options, and explain what installation looks like for your building.' },
      { title: 'Material selection', desc: 'Standing seam, corrugated, or ribbed panels in steel or aluminum, chosen for architecture, exposure, and budget.' },
      { title: 'Written quote', desc: 'An itemized quote before work is scheduled. Financing may be available on qualifying projects.' },
      { title: 'Installation', desc: 'Underlayment, flashing, trim, and panels. Many residential jobs take about two to three days; larger or complex roofs can take longer. Weather and material lead times also affect scheduling.' },
      { title: 'Final walkthrough', desc: 'We walk the finished job with you. You approve the work before the project is considered complete.' },
    ],
    decisionTitle: 'When to choose installation vs another metal service',
    decision:
      'Choose installation when the project is a new metal system. Choose repair if an existing metal roof has a localized leak or damaged detail. Choose replacement when an old shingle, tile, or metal covering is at the end of its useful life and the conversation is tear-off plus a new metal roof.',
    decisionItems: [
      'New metal system or new construction → installation',
      'Existing metal roof with a leak or damaged panel → repair',
      'Old roof covering that needs to come off → replacement',
    ],
    sacramentoTitle: 'Installing metal in the Sacramento climate',
    sacramento:
      'Sacramento summers punish dark, aging shingles. Metal reflects solar energy rather than absorbing it the way worn asphalt often does, which is one reason owners specify metal here. Installation quality—underlayment, ventilation, and flashing—still determines whether that climate advantage shows up on your building. We serve the greater Sacramento region as a service-area contractor; there is no public retail storefront on this site.',
    related: [
      { href: '/metal-roofing', label: 'All metal roofing services', note: 'Hub for installation, replacement, repair, and inspections.' },
      { href: '/standing-seam-metal-roofing', label: 'Standing seam metal roofing', note: 'If concealed fasteners and raised seams are the profile you want.' },
      { href: '/metal-roof-replacement', label: 'Metal roof replacement', note: 'If an existing covering has to come off first.' },
      { href: '/residential-metal-roofing', label: 'Residential metal roofing', note: 'Homeowner-focused path for houses and new homes.' },
      { href: '/blog/metal-roof-installation-process-sacramento', label: 'Installation process guide', note: 'Step-by-step article for Sacramento homeowners.' },
    ],
    faqs: [
      {
        question: 'What is included in metal roof installation?',
        answer:
          'Installation covers evaluation of the deck or existing roof, underlayment, flashing, trim, ventilation discussion, and panel installation. Exact scope is confirmed in the written quote for your building.',
      },
      {
        question: 'How long does metal roof installation take?',
        answer:
          'Many Sacramento residential metal installations take about two to three days. Larger or more complex roofs may need additional time. Weather and material lead times also affect scheduling.',
      },
      {
        question: 'Do I have to remove my old roof first?',
        answer:
          'Full removal so the deck can be inspected is the usual approach. Installing metal over shingles is only considered when conditions and product requirements allow, and it is not the default.',
      },
      {
        question: 'What metal profiles can be installed?',
        answer:
          'PRC 13 installs standing seam, corrugated, and exposed-fastener ribbed panels in steel and aluminum options. Profile is selected during consultation.',
      },
      {
        question: 'Is metal noisy when it rains after installation?',
        answer:
          'Modern metal installed over solid decking with proper underlayment is generally not significantly louder indoors than shingles. Decking and insulation absorb most rain sound.',
      },
      {
        question: 'Who performs the installation?',
        answer:
          'Metal Roofing Sacramento is operated by PRC 13 Roofing Inc., CA CSLB #1087153. PRC 13 performs the contracted roofing work.',
      },
    ],
    retrieval: [
      {
        question: 'Is metal roof installation the same as metal roof replacement?',
        answer:
          'No. Installation is the work of putting on a new metal system. Replacement focuses on removing an existing roof and deciding when that covering has reached the end of its useful life.',
      },
      {
        question: 'Can standing seam be part of a new installation?',
        answer:
          'Yes. Standing seam is a profile option during installation, not a separate contractor. Other profiles include corrugated and ribbed exposed-fastener panels.',
      },
    ],
    finalCtaTitle: 'Get a metal roof installation estimate',
    finalCtaBody:
      'We inspect first, explain assembly details, and provide a written quote before any installation is scheduled. Metal Roofing Sacramento is operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    primaryImage: HERO_NEW_CONSTRUCTION,
    heroImageAlt: 'Standing seam metal roof installation on a Sacramento-area new construction home',
  },

  replacement: {
    id: 'metal-roof-replacement',
    path: '/metal-roof-replacement',
    h1: 'Metal Roof Replacement',
    h1Accent: 'When the current roof needs to come off',
    heroIntro:
      'Replacement is for roofs that are at the end of a repair cycle—worn shingles, failing tile, or metal that no longer makes sense to keep patching. The work is tear-off, deck inspection, and a new metal system, not a localized leak fix.',
    heroKicker: 'Replace an existing roof with metal',
    ctaLabel: CTA_METAL_REPLACE,
    formTitle: CTA_METAL_REPLACE,
    formSubtitle: 'Describe the current roof. We will inspect and explain whether replacement is the right next step.',
    defaultReason: 'metal-replacement',
    sourcePage: 'metal-roof-replacement',
    pageName: 'Metal Roof Replacement Sacramento',
    serviceName: 'Metal roof replacement',
    serviceDescription:
      'Metal roof replacement in Sacramento, including tear-off, deck inspection, and replacing aging shingles, tile, or failing metal with a long-life metal roof system.',
    answerTitle: 'When metal roof replacement makes sense',
    answer:
      'Metal roof replacement is the project of removing an existing roof covering and installing a new metal system. It is the right conversation when the current roof is near the end of its life, leaks keep returning after repairs, or you want to change from shingles or tile to metal. PRC 13 Roofing Inc. performs the contracted work.',
    answerPoints: [
      'Driven by existing roof condition, not a product brochure',
      'Tear-off is the usual approach so the deck can be inspected',
      'Repair vs replacement is decided after inspection',
      'New metal is specified only after the old covering is understood',
    ],
    whoForTitle: 'Who this service is for',
    whoFor:
      'Owners whose current roof—shingle, tile, or older metal—is no longer a good candidate for another round of patches. If you already have a sound metal roof with one leaking flashing, start with repair. If you are specifying metal on a new building with no old covering to remove, start with installation.',
    problemsTitle: 'Signs replacement may be the better path',
    problems: [
      'Widespread granule loss, curling, or missing shingles across multiple slopes',
      'Repeated leaks after prior repairs',
      'Tile breakage or underlayment failure that is no longer local',
      'An older metal roof with widespread panel, fastener, or substrate problems',
      'You want to change the roof type to metal rather than reinstall the same system',
    ],
    sections: [
      {
        heading: 'Existing roof condition comes first',
        paragraphs: [
          'Replacement starts with what is already on the building. Age, leak history, deck feel from the attic, and how much of the roof is involved matter more than a generic “time for metal” pitch. PRC 13 documents condition and explains whether a focused repair would still be honest—or whether you would be paying twice.',
          'There is no published price list. Cost depends on roof size, pitch, access, tear-off scope, deck repairs, and the metal profile you choose. You get a written quote after inspection.',
        ],
      },
      {
        heading: 'Tear-off and deck inspection',
        paragraphs: [
          'Full tear-off is the usual approach so decking can be inspected and repaired. Overlay over shingles is only considered when conditions and product requirements allow. Hidden soft plywood or failed underlayment is a common reason owners later wish they had opened the roof.',
          'Once the deck is sound, the new metal assembly—underlayment, flashing, trim, and panels—follows the same quality expectations as a new installation. The difference is that replacement is defined by the old roof coming off.',
        ],
        list: [
          'Remove the existing covering as specified in the quote',
          'Inspect and repair decking where needed',
          'Address underlayment and ventilation before new metal goes on',
          'Install the agreed metal profile and flashings',
        ],
      },
      {
        heading: 'Replacing shingles, tile, or old metal with metal',
        paragraphs: [
          'Architectural shingles are the most common covering on Sacramento homes. Heat accelerates wear on those systems. Tile and older metal each have their own failure modes. Replacement with metal is appropriate when the current system is done and metal is the covering you want next—not because every home must leave shingles.',
          'If you are still comparing metal to another full replacement in shingles, say so during inspection. The quote should match the system you intend to authorize.',
        ],
      },
      {
        heading: 'Repair vs replacement',
        paragraphs: [
          'A metal roof already on the house can often be repaired when damage is localized and the rest of the system is sound. Replacement of that metal roof belongs here when problems are widespread, underlayment is failing broadly, or repeated repairs are no longer practical.',
          'For leak tracing on an in-service metal roof, use metal roof repair. This page is the full-system decision.',
        ],
      },
    ],
    processTitle: 'How a metal replacement project is planned',
    process: [
      { title: 'Condition inspection', desc: 'Document the current covering, leak history, and deck condition. Explain repair vs replacement in plain language.' },
      { title: 'Scope and profile', desc: 'Agree on tear-off, deck repairs, and the metal system. Standing seam and other profiles are options, not automatic.' },
      { title: 'Written replacement quote', desc: 'Itemized scope before tear-off. Financing may be available on qualifying projects. Warranty terms are confirmed in writing with the project.' },
      { title: 'Tear-off and new metal', desc: 'Remove the old covering, repair the deck where needed, then install the new metal assembly.' },
      { title: 'Walkthrough', desc: 'Review the finished roof before the job is closed out.' },
    ],
    decisionTitle: 'Replacement, installation, or repair?',
    decision:
      'Replacement is the “old roof off, new metal on” project. Installation is the new-system sequence when you are not primarily arguing about an aging covering. Repair is for an existing metal roof that still has life except at a failed detail.',
    sacramentoTitle: 'Replacing roofs in Sacramento heat',
    sacramento:
      'South-facing shingle slopes in the Sacramento Valley often show wear earlier than marketing lifespans suggest. That does not mean every tired shingle roof must become metal. It does mean replacement conversations here should include remaining life, tear-off, and whether metal’s longer service story matches how long you plan to own the property. PRC 13 serves the greater Sacramento region as a service-area business.',
    related: [
      { href: '/metal-roofing', label: 'Metal roofing services overview', note: 'Parent hub for all metal offerings.' },
      { href: '/metal-roof-repair', label: 'Metal roof repair', note: 'If the metal roof is already there and the issue looks local.' },
      { href: '/metal-roof-installation', label: 'Metal roof installation', note: 'New-system sequence once replacement is authorized.' },
      { href: '/metal-roof-inspection', label: 'Metal roof inspection', note: 'Written findings before you choose repair or replacement.' },
      { href: '/blog/metal-roof-repair-vs-replacement', label: 'Repair vs replacement article', note: 'Decision guide for existing metal roofs.' },
    ],
    faqs: [
      {
        question: 'When should I replace a roof with metal instead of repairing it?',
        answer:
          'Replacement belongs in the conversation when damage or wear is widespread, leaks keep returning, or the covering is near the end of its useful life. Localized metal leaks can often be repaired if the rest of the system is sound.',
      },
      {
        question: 'Do you always tear off the old roof?',
        answer:
          'Full tear-off is the usual approach so decking can be inspected. Overlay is only considered when conditions and product requirements allow.',
      },
      {
        question: 'Can you replace shingles with metal?',
        answer:
          'Yes. Metal replacement usually includes removal, deck inspection, underlayment, flashing, trim, and panel installation.',
      },
      {
        question: 'How long does metal roof replacement take?',
        answer:
          'Many residential metal jobs finish in about two to three days after work starts. Tear-off scope, deck repairs, roof size, and weather can add time. A schedule is confirmed before the crew starts.',
      },
      {
        question: 'Will you quote replacement without an inspection?',
        answer:
          'No. Condition, access, and decking affect scope. PRC 13 inspects first and provides a written quote.',
      },
      {
        question: 'Who contracts the replacement work?',
        answer:
          'PRC 13 Roofing Inc., CA CSLB #1087153, operates Metal Roofing Sacramento and performs the contracted roofing work.',
      },
    ],
    retrieval: [
      {
        question: 'Is metal roof replacement just another name for installation?',
        answer:
          'No. Replacement is defined by the existing covering coming off and by the decision that the current roof is done. Installation describes how the new metal system is put on.',
      },
      {
        question: 'Should I replace a leaking metal roof or repair it?',
        answer:
          'If damage is limited and the rest of the metal system is sound, repair is often the honest first step. Widespread failure, recurring leaks, or a compromised substrate point toward replacement.',
      },
    ],
    finalCtaTitle: 'Get a metal roof replacement estimate',
    finalCtaBody:
      'Inspection first, then a written replacement quote if that is the honest next step. Metal Roofing Sacramento is operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    primaryImage: HERO_AFRAME,
    heroImageAlt: 'Completed standing seam metal roof on a Sacramento-area home after replacement',
  },

  repair: {
    id: 'metal-roof-repair',
    path: '/metal-roof-repair',
    h1: 'Metal Roof Repair',
    h1Accent: 'Fix the leak path, not a generic roof patch',
    heroIntro:
      'This page is for metal roofs that are already on the building. Leaking seams, failed flashings, damaged panels, loose fasteners, and wet penetrations are metal-specific problems. We diagnose the path of water before anyone talks about a full reroof.',
    heroKicker: 'Existing metal roofs',
    ctaLabel: CTA_METAL_REPAIR,
    formTitle: CTA_METAL_REPAIR,
    formSubtitle: 'Describe the leak or damage. We will inspect the metal system and explain whether a focused repair is enough.',
    defaultReason: 'metal-repair',
    sourcePage: 'metal-roof-repair',
    pageName: 'Metal Roof Repair Sacramento',
    serviceName: 'Metal roof repair',
    serviceDescription:
      'Metal roof repair in Sacramento for leaking seams, flashing failures, damaged panels, loose fasteners, penetrations, and storm-related metal roof damage.',
    answerTitle: 'What metal roof repair actually is',
    answer:
      'Metal roof repair is work on an in-service metal roof: tracing leaks, correcting flashings, addressing panels, fasteners, seams, and penetrations. It is not generic shingle patching and it is not an automatic full replacement. PRC 13 Roofing Inc. inspects the source first.',
    answerPoints: [
      'For existing metal roofs, not first-time metal installs',
      'Leak tracing before repairs are sold',
      'Localized damage can often be corrected without a full reroof',
      'Honest call when replacement is the more durable path',
    ],
    whoForTitle: 'Who this service is for',
    whoFor:
      'Owners who already have metal on the roof and a problem: water at a seam or wall, a dented or displaced panel, a noisy or backing-out fastener, or a wet vent or skylight curb. If you do not have metal yet, use installation or replacement instead.',
    problemsTitle: 'Metal problems we diagnose',
    problems: [
      'Leaks at seams, valleys, or panel joints',
      'Flashing failures at edges, walls, and chimneys',
      'Damaged, dented, or displaced metal panels',
      'Loose, missing, or failed fasteners on exposed-fastener systems',
      'Penetrations around vents, pipes, and skylights',
      'Wind, hail, or storm openings on a metal roof',
      'Corrosion or finish wear in exposed areas',
    ],
    sections: [
      {
        heading: 'Inspection and leak diagnosis',
        paragraphs: [
          'Metal leaks often start at a transition, not in the middle of a sound panel. PRC 13 traces the water path, checks flashings, seams, fasteners, and penetrations, and looks at the deck from the attic when access allows. The goal is to name the failure, not to sell the largest possible job.',
          'Standard residential inspections are free and come with no obligation. You receive findings you can use to decide on a focused repair or a larger conversation.',
        ],
      },
      {
        heading: 'Seams, flashings, fasteners, and panels',
        paragraphs: [
          'Standing seam systems hide fasteners under raised seams; problems more often show at flashings, end laps, and penetrations. Exposed-fastener roofs can develop leaks at washers and screws as those parts age. Both still depend on flashings at walls and edges.',
          'A single damaged panel or a failed chimney flashing is a different scope from a roof whose underlayment or substrate is broadly compromised. Repair is for the first kind of problem.',
        ],
        list: [
          'Seam and joint leaks',
          'Edge, wall, and chimney flashings',
          'Fastener and washer issues on exposed-fastener profiles',
          'Panel repairs or replacements where damage is limited',
          'Penetration details at vents and pipes',
        ],
      },
      {
        heading: 'Storm, wind, and hail on metal',
        paragraphs: [
          'Wind can lift trim or open a detail. Impact can dent panels. That is still metal-roof work: stabilize if needed, document, then plan a lasting repair. Response timing depends on weather, routing, and crew capacity. Same-day assessment is often possible but not guaranteed.',
          'If water is actively entering, contain it indoors, stay off a wet metal roof, and call. Repair planning comes after the home is safe.',
        ],
      },
      {
        heading: 'When repair is not enough',
        paragraphs: [
          'If leaks keep returning, panels are failing across slopes, or the substrate underneath is compromised, we will say so. That conversation moves to metal roof replacement rather than another round of isolated fixes.',
          'This page stays on metal. Historical generic roof-repair URLs still exist on the site; they are not the hire path for a metal system.',
        ],
      },
    ],
    processTitle: 'How metal roof repair is handled',
    process: [
      { title: 'Intake', desc: 'You describe the leak, stain, or storm opening. We prioritize active water intrusion.' },
      { title: 'On-roof diagnosis', desc: 'Trace the path. Check seams, flashings, fasteners, panels, and penetrations.' },
      { title: 'Written repair scope', desc: 'A focused repair quote when that is enough. A replacement conversation when it is not.' },
      { title: 'Repair work', desc: 'Correct the failed details. Manufacturer and workmanship terms, if they apply, are confirmed in writing for the work performed.' },
    ],
    decisionTitle: 'Repair this metal roof or replace it?',
    decision:
      'Repair when the failure is local and the rest of the metal system is sound. Replace when the system is broadly worn, the deck is involved, or you would be stacking repairs without a durable outcome.',
    sacramentoTitle: 'Metal leaks in Sacramento weather',
    sacramento:
      'Hot, dry summers followed by winter rain expose failed sealants, tired flashings, and fastener issues that stayed quiet in the dry months. Metal still needs correct details at walls and penetrations. PRC 13 serves Sacramento-area metal roofs as a service-area contractor operated under CA CSLB #1087153.',
    related: [
      { href: '/metal-roof-inspection', label: 'Metal roof inspection', note: 'Start here if you need findings before authorizing a repair.' },
      { href: '/metal-roof-replacement', label: 'Metal roof replacement', note: 'When a focused repair would not be durable.' },
      { href: '/metal-roofing', label: 'Metal roofing services', note: 'Hub for the full metal offering.' },
      { href: '/standing-seam-metal-roofing', label: 'Standing seam systems', note: 'If your roof is a concealed-fastener profile.' },
      { href: '/blog/metal-roof-repair-vs-replacement', label: 'Repair vs replacement guide', note: 'Longer decision article.' },
    ],
    faqs: [
      {
        question: 'Can a metal roof be repaired without replacing it?',
        answer:
          'Yes, when damage is localized and the surrounding metal system is still sound. Flashing failures, isolated panel issues, and accessory problems are common repair scopes.',
      },
      {
        question: 'Do you repair standing seam and exposed-fastener roofs?',
        answer:
          'Yes. Diagnosis follows the profile you have. Standing seam and exposed-fastener systems fail at different details; the inspection names the actual leak path.',
      },
      {
        question: 'Is this the same as generic roof repair?',
        answer:
          'No. This service is for metal roofs. Shingle and other system repairs are not the focus of this page.',
      },
      {
        question: 'What should I do if the metal roof is leaking right now?',
        answer:
          'Move valuables, catch drips, stay off the wet roof, and call PRC 13 Roofing. We prioritize active leaks and assess metal repair options. Timing depends on weather, routing, and crew capacity.',
      },
      {
        question: 'Will you tell me if replacement is smarter than another repair?',
        answer:
          'Yes. If the metal system is broadly failing or the substrate is compromised, we recommend replacement instead of stacking short-term fixes.',
      },
    ],
    retrieval: [
      {
        question: 'What usually leaks on a metal roof?',
        answer:
          'Flashings, penetrations, seams, and—on exposed-fastener systems—aged fasteners are more common leak sources than the middle of a sound panel.',
      },
      {
        question: 'Do you offer metal roof cleaning as a repair?',
        answer:
          'No. PRC 13 does not offer metal roof cleaning. Cleaning is owner maintenance. Call for inspection or repair if you see leaks, damaged flashings, or impact problems.',
      },
    ],
    finalCtaTitle: 'Request metal roof repair',
    finalCtaBody:
      'Describe the leak or damaged detail. We inspect the metal system and quote a focused repair when that is the honest scope. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    primaryImage: HERO_DETAIL,
    heroImageAlt: 'Standing seam metal roof valley and panel details evaluated for repair',
  },

  'standing-seam': {
    id: 'standing-seam-metal-roofing',
    path: '/standing-seam-metal-roofing',
    h1: 'Standing Seam Metal Roofing',
    h1Accent: 'Concealed fasteners, raised seams',
    heroIntro:
      'Standing seam is a specific metal profile: vertical panels, raised seams where adjacent pans lock together, and fasteners concealed at the seam. It is PRC 13’s premium metal option—not the only metal option, and not a generic synonym for “metal roofing.”',
    heroKicker: 'Concealed-fastener metal',
    ctaLabel: CTA_STANDING_SEAM,
    formTitle: CTA_STANDING_SEAM,
    formSubtitle: 'Ask about standing seam for your home or building. We inspect and quote the profile that actually fits.',
    defaultReason: 'metal-estimate',
    sourcePage: 'standing-seam-metal-roofing',
    pageName: 'Standing Seam Metal Roofing Sacramento',
    serviceName: 'Standing seam metal roofing',
    serviceDescription:
      'Standing seam metal roofing in Sacramento with concealed fasteners, raised seams, and a clean panel profile for residential and commercial buildings.',
    answerTitle: 'What standing seam is',
    answer:
      'Standing seam metal roofing uses vertical panels with raised seams. Fasteners are concealed beneath those seams rather than sitting on the panel face. Homeowners often choose it for appearance, fewer exposed penetration points, and long-term weather performance when edge details are done correctly.',
    answerPoints: [
      'Concealed fasteners under raised seams',
      'Clean vertical lines on residential and some commercial roofs',
      'Premium option compared with exposed-fastener panels',
      'Still requires correct underlayment, flashing, and trim',
    ],
    whoForTitle: 'Who standing seam is for',
    whoFor:
      'Owners who want the concealed-fastener look and performance story, and who are comparing it on purpose against corrugated or ribbed exposed-fastener metal. It is used on houses and on commercial buildings where a metal panel system is the right covering—not as a substitute for a membrane flat roof.',
    problemsTitle: 'Why people specify standing seam',
    problems: [
      'They want fewer exposed screw heads on the roof face',
      'They want a clean vertical profile for the architecture',
      'They are investing in a long-service metal system and prefer concealed fastening',
      'They are replacing another covering and have already ruled out exposed-fastener look',
    ],
    sections: [
      {
        heading: 'Panels, seams, and concealed fasteners',
        paragraphs: [
          'Adjacent panels lock at a raised seam. Clips or similar concealed fastening keep the pans attached while allowing thermal movement. That is the core difference from exposed-fastener metal, where screws and washers sit on the panel and are part of the weather plane.',
          'Concealed fastening reduces a common aging point—the exposed washer—but it does not eliminate flashings, penetrations, or eave details. Those still make or break the job.',
        ],
      },
      {
        heading: 'Standing seam vs exposed-fastener systems',
        paragraphs: [
          'PRC 13 also installs corrugated and ribbed exposed-fastener panels. Those can cost less and still be the right metal roof for some buildings. Standing seam typically costs more and presents the sleekest face.',
          'During inspection we show the tradeoff: appearance, fastening method, and how each profile is detailed at walls and edges. We do not pretend every project must be standing seam.',
        ],
        list: [
          'Standing seam: concealed fasteners, raised seams, premium look',
          'Corrugated / ribbed: exposed fasteners, different visual and budget profile',
          'Both: steel or aluminum options depending on the project',
          'Both: underlayment and flashing still decide weather performance',
        ],
      },
      {
        heading: 'Durability, appearance, and weather',
        paragraphs: [
          'Quality standing seam systems are commonly marketed for multi-decade service. Actual life depends on the product, coating, installation, and how well flashings are maintained. That is not a guaranteed year count for every roof.',
          'Metal reflects solar energy compared with dark aging shingles, which is relevant in Sacramento summers. Standing seam still needs ventilation and underlayment planned as an assembly.',
        ],
      },
      {
        heading: 'Installation considerations unique to this profile',
        paragraphs: [
          'Seam quality, clip layout, and how panels terminate at ridges, eaves, and walls are standing-seam-specific. A crew that only thinks in exposed screws will miss those details. PRC 13 installs standing seam as a specified system, then walks the finished roof with you.',
          'If you already have standing seam and a leak, that is a repair/inspection problem, not a new standing-seam sales page.',
        ],
      },
    ],
    processTitle: 'From consult to standing seam install',
    process: [
      { title: 'Profile consult', desc: 'Confirm standing seam is the look and fastening method you want versus other metal panels.' },
      { title: 'Building evaluation', desc: 'Deck, tear-off needs, and flashing complexity. Overlay is not the default.' },
      { title: 'Written standing seam quote', desc: 'Itemized for this profile. Manufacturer material warranties and PRC 13 workmanship terms are confirmed in writing for the project.' },
      { title: 'Install and walkthrough', desc: 'Panels, seams, and details. Residential metal work often takes about two to three days; complexity adds time.' },
    ],
    decisionTitle: 'Standing seam or another metal profile?',
    decision:
      'Choose standing seam when concealed fasteners and the vertical seam look are the point. Choose another metal profile when budget or architecture points to exposed-fastener panels. Choose repair if you already have standing seam and a failed detail.',
    sacramentoTitle: 'Standing seam in Sacramento',
    sacramento:
      'The profile is a strong fit for owners who plan to stay and want a metal roof that reads as a finished architectural surface, not a field of screw heads. Heat, rain, and wind still punish weak edge metal. PRC 13 installs standing seam across the greater Sacramento service area.',
    related: [
      { href: '/metal-roof-installation', label: 'Metal roof installation', note: 'How a new metal system is sequenced, standing seam included.' },
      { href: '/residential-metal-roofing', label: 'Residential metal roofing', note: 'Homeowner context for houses and curb appeal.' },
      { href: '/commercial-metal-roofing', label: 'Commercial metal roofing', note: 'When a commercial building is a metal-panel candidate.' },
      { href: '/metal-roofing', label: 'All metal roofing services', note: 'Parent hub.' },
      { href: '/blog/standing-seam-metal-roofing-sacramento', label: 'Standing seam article', note: 'Longer homeowner explainer.' },
    ],
    faqs: [
      {
        question: 'What is standing seam metal roofing?',
        answer:
          'Vertical metal panels with raised seams where the pans lock together. Fasteners are concealed at the seam instead of sitting on the panel face.',
      },
      {
        question: 'Does PRC 13 install standing seam in Sacramento?',
        answer:
          'Yes. Standing seam is the premium metal option. PRC 13 also installs corrugated and ribbed exposed-fastener panels.',
      },
      {
        question: 'Is standing seam better than exposed-fastener metal?',
        answer:
          'It conceals fasteners and usually costs more. “Better” depends on architecture, budget, and detailing. We explain the tradeoff rather than treating standing seam as the only honest metal roof.',
      },
      {
        question: 'How long does standing seam last?',
        answer:
          'Systems are commonly marketed for 50+ years of service. Actual lifespan depends on product, coating, installation, and maintenance. PRC 13 does not publish a guaranteed year count for every roof.',
      },
      {
        question: 'Can standing seam replace my shingles?',
        answer:
          'Yes. Replacement typically includes tear-off so the deck can be inspected, then underlayment, flashing, and standing seam panels.',
      },
      {
        question: 'Is standing seam louder in the rain?',
        answer:
          'Installed over solid decking with proper underlayment, modern metal is generally not significantly louder indoors than shingles.',
      },
    ],
    retrieval: [
      {
        question: 'Are standing seam fasteners visible?',
        answer:
          'No. Fasteners are concealed at the raised seams. Exposed-fastener corrugated and ribbed panels are the profiles with screws on the panel face.',
      },
      {
        question: 'Is standing seam the only metal roof PRC 13 installs?',
        answer:
          'No. Standing seam, corrugated, and ribbed exposed-fastener panels are all installed. Standing seam is the premium concealed-fastener option.',
      },
    ],
    finalCtaTitle: 'Get a standing seam roof estimate',
    finalCtaBody:
      'We will confirm whether standing seam fits the building and quote that profile honestly against other metal options. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    primaryImage: HERO_ELEVATION,
    heroImageAlt: 'Standing seam metal panels on a Sacramento-area residential roof',
  },

  residential: {
    id: 'residential-metal-roofing',
    path: '/residential-metal-roofing',
    h1: 'Residential Metal Roofing',
    h1Accent: 'Metal roofs for houses',
    heroIntro:
      'Residential metal roofing is the homeowner path: how metal looks on a house, how it lives through Sacramento summers, what maintenance you actually own, and whether replacement or a new home spec is the project. It is not the commercial-building page and not a profile-only standing seam page.',
    heroKicker: 'For homeowners',
    ctaLabel: CTA_RESIDENTIAL_METAL,
    formTitle: CTA_RESIDENTIAL_METAL,
    formSubtitle: 'Tell us about the house. Residential inspections are free with written findings and no obligation.',
    defaultReason: 'metal-estimate',
    sourcePage: 'residential-metal-roofing',
    pageName: 'Residential Metal Roofing Sacramento',
    serviceName: 'Residential metal roofing',
    serviceDescription:
      'Residential metal roofing for Sacramento-area homes, including standing seam and other metal profiles chosen for architecture, climate, and long-term ownership.',
    answerTitle: 'Metal roofing for a house',
    answer:
      'Residential metal roofing means specifying and installing a metal system on a home—new construction or replacement of an existing covering. Homeowners choose it for long service, lower routine maintenance than aging shingles, and a look that can be modern or traditional depending on profile and color. PRC 13 Roofing Inc. does the contracted work.',
    answerPoints: [
      'Houses, not membrane commercial roofs',
      'Standing seam or other residential metal profiles',
      'Replacement and new-home installation both apply',
      'Appearance and ownership timeline matter as much as climate',
    ],
    whoForTitle: 'Who this page is for',
    whoFor:
      'Homeowners comparing metal for the house they live in. If you own a small commercial building and the covering should be metal panels, use the commercial metal page. If you already know you want standing seam specifically, that profile page goes deeper on concealed fasteners.',
    problemsTitle: 'Homeowner questions this service answers',
    problems: [
      'Will metal look right on this house?',
      'Is the extra upfront cost worth it if we plan to stay?',
      'What colors and styles are possible without a fake catalog?',
      'How much maintenance will we actually do?',
      'Should we replace the current roof with metal or keep repairing shingles?',
    ],
    sections: [
      {
        heading: 'Appearance, colors, and styles',
        paragraphs: [
          'Profile does more for curb appeal than a color chip alone. Standing seam reads as clean vertical lines. Corrugated and ribbed panels read differently and show fasteners. PRC 13 shows options during consultation. We do not publish a manufacturer color catalog on this site; finish choices are confirmed for the product specified on your quote.',
          'Neighborhood and HOA rules vary. If an association reviews exterior changes, that approval is yours to obtain. We can document roof condition and material options for that conversation.',
        ],
      },
      {
        heading: 'Climate, energy, and lifespan—without fake numbers',
        paragraphs: [
          'Metal reflects solar energy compared with dark, worn asphalt, which helps during Sacramento summers. Metal is not insulation; attic ventilation still matters. We do not publish energy-savings percentages.',
          'Quality metal is commonly marketed for 50+ year service. Real life depends on profile, coating, installation, and maintenance. Shingles in this climate often last a shorter cycle. If you may sell within a few years, architectural shingles can still be the practical choice. If you plan to stay, metal’s ownership story is stronger.',
        ],
      },
      {
        heading: 'Maintenance homeowners actually own',
        paragraphs: [
          'Metal is low maintenance compared with curling shingles, not zero maintenance. Keep valleys and gutters clear of debris. Follow the finish manufacturer’s cleaning guidance. PRC 13 does not offer metal roof cleaning as a service.',
          'Call for inspection if you see lifted trim, stains, or impact damage. Do not treat a leak as a dirt problem.',
        ],
      },
      {
        heading: 'Replacement vs new construction on a home',
        paragraphs: [
          'Most residential metal jobs in our market are replacements of an existing house roof. New construction metal is the same assembly logic on a new deck. Either way, homeowners still choose profile, review the written quote, and walk the finished roof.',
          'Metal vs traditional residential roofing is a timeline and budget decision. We install metal; we will also say when staying with shingles is the more honest short-term path.',
        ],
      },
    ],
    processTitle: 'How homeowners typically move forward',
    process: [
      { title: 'Free residential inspection', desc: 'Condition of the current roof, attic notes when accessible, and a conversation about how long you plan to own the home.' },
      { title: 'Profile and look', desc: 'Standing seam vs other metal panels. Architecture and budget, not a pressure close.' },
      { title: 'Written homeowner quote', desc: 'Itemized. Financing may be available on qualifying projects.' },
      { title: 'Install or replace', desc: 'Crew work, then a walkthrough you approve.' },
    ],
    decisionTitle: 'Residential metal vs other metal pages',
    decision:
      'Use this page when the customer is a homeowner. Use standing seam when the product is the question. Use replacement when the current house roof is done. Use repair when the house already has metal and a leak.',
    sacramentoTitle: 'Houses in the Sacramento area',
    sacramento:
      'Valley heat, winter rain, and mixed neighborhood styles mean residential metal is a fit for some houses and not a costume for every street. PRC 13 serves homeowners across the greater Sacramento region, including communities such as Folsom, El Dorado Hills, Roseville, Rocklin, and Colfax, as a service-area contractor.',
    related: [
      { href: '/standing-seam-metal-roofing', label: 'Standing seam for homes', note: 'Concealed-fastener profile many homeowners want.' },
      { href: '/metal-roof-replacement', label: 'Replacing the house roof with metal', note: 'When the current covering is worn out.' },
      { href: '/metal-roof-installation', label: 'Installing a new residential metal roof', note: 'Sequence for a new metal system.' },
      { href: '/metal-roofing', label: 'Metal roofing hub', note: 'All specialist services.' },
      { href: '/blog/metal-roofing-vs-shingles-sacramento', label: 'Metal vs shingles', note: 'Homeowner comparison article.' },
    ],
    faqs: [
      {
        question: 'Is metal roofing a good choice for a Sacramento house?',
        answer:
          'It can be, especially if you plan to stay long-term. Metal handles heat well when installed as a full assembly. Whether it is “worth it” depends on budget, architecture, and how long you will own the home.',
      },
      {
        question: 'Will metal make my house look industrial?',
        answer:
          'Not automatically. Standing seam and other profiles can suit modern or traditional homes. We show options during inspection rather than assuming one look.',
      },
      {
        question: 'How much more does residential metal cost than shingles?',
        answer:
          'Metal typically costs more upfront than architectural shingles, often roughly 40 to 60% more depending on profile and complexity. Lifetime cost can be competitive for long-term owners. You get a written quote for your house, not a website price.',
      },
      {
        question: 'Do I need to maintain a residential metal roof?',
        answer:
          'Keep debris off critical details and follow manufacturer cleaning guidance. PRC 13 does not offer cleaning service. Call for inspection if you see damage or leaks.',
      },
      {
        question: 'Can solar go on a residential metal roof?',
        answer:
          'Many metal roofs can accept solar mounting with the correct attachment for the panel profile. Solar equipment is typically provided by a solar contractor. We can discuss roof readiness during inspection.',
      },
      {
        question: 'Are residential inspections free?',
        answer:
          'Yes. Standard residential inspections are free with no obligation. You receive written findings.',
      },
    ],
    retrieval: [
      {
        question: 'Is residential metal roofing only standing seam?',
        answer:
          'No. Standing seam is a common homeowner choice. Corrugated and ribbed panels are also installed when they fit the house and budget.',
      },
      {
        question: 'Should every Sacramento homeowner choose metal?',
        answer:
          'No. If you are on a tighter budget or may sell soon, architectural shingles can still be the practical roof. Metal is strongest for owners who plan to stay.',
      },
    ],
    finalCtaTitle: 'Get a residential metal roof estimate',
    finalCtaBody:
      'Free residential inspection, honest profile advice, written quote. Metal Roofing Sacramento is operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    primaryImage: HERO_NEW_CONSTRUCTION,
    heroImageAlt: 'Residential standing seam metal roof on a Sacramento-area house',
  },

  commercial: {
    id: 'commercial-metal-roofing',
    path: '/commercial-metal-roofing',
    h1: 'Commercial Metal Roofing',
    h1Accent: 'Metal systems for buildings—not TPO or EPDM',
    heroIntro:
      'This page is only for commercial and light-commercial buildings where a metal roof system is the right covering. It is not the historical flat-roof membrane page. If the building needs TPO, EPDM, or similar membranes, that is a different conversation on a different URL.',
    heroKicker: 'Metal on commercial buildings',
    ctaLabel: CTA_COMMERCIAL_METAL,
    formTitle: CTA_COMMERCIAL_METAL,
    formSubtitle: 'Describe the building and the current roof. We will tell you if a metal system is in play.',
    defaultReason: 'metal-estimate',
    sourcePage: 'commercial-metal-roofing',
    pageName: 'Commercial Metal Roofing Sacramento',
    serviceName: 'Commercial metal roofing',
    serviceDescription:
      'Commercial metal roofing for Sacramento-area buildings where metal systems are the right fit, including metal installation, reroofing, repair, and inspection.',
    answerTitle: 'What commercial metal roofing means here',
    answer:
      'Commercial metal roofing is metal panel work on commercial or light-commercial buildings: standing seam or other metal profiles, metal reroofing, repairs, new metal installation, and inspection of those systems. PRC 13 Roofing Inc. primarily serves small to mid-size commercial properties in the Sacramento area. We do not invent a list of building types we have not verified.',
    answerPoints: [
      'Metal panel systems only on this page',
      'Not a TPO, EPDM, or built-up membrane offering',
      'Small to mid-size commercial properties',
      'Inspection before repair, reroof, or new metal install',
    ],
    whoForTitle: 'Who should use this page',
    whoFor:
      'Owners or managers of Sacramento-area commercial or light-commercial buildings whose roof is—or should be—a metal panel system. If the roof is a low-slope membrane, do not use this page as a substitute hire path for that system.',
    problemsTitle: 'Metal issues on commercial buildings',
    problems: [
      'An existing metal panel roof is leaking at seams, flashings, or penetrations',
      'A metal covering is due for reroofing, not another isolated patch',
      'A new or replacement metal system is being specified',
      'You need an inspection of a commercial metal roof before authorizing work',
    ],
    sections: [
      {
        heading: 'Metal systems, not membranes',
        paragraphs: [
          'Standing seam and other metal panels are the subject. Historical commercial roofing content on this domain still discusses TPO and EPDM for flat and low-slope membranes. That work is not what this specialist page sells.',
          'If we inspect and the honest covering is not metal, we will say so rather than force a panel system onto a roof that needs a different assembly.',
        ],
      },
      {
        heading: 'Reroofing, repairs, and new metal installs',
        paragraphs: [
          'Commercial metal reroofing is a replacement of an existing metal covering or a change to metal where the structure can accept it. Repairs stay on flashings, seams, penetrations, and damaged panels. New installation applies when the building is taking a metal system without that being a “patch the old leak” job.',
          'Access, occupancy, and scheduling matter more on commercial properties than on a typical house. We confirm a work plan in writing. We do not promise after-hours or 24/7 crews.',
        ],
      },
      {
        heading: 'Inspection, flashings, and penetrations',
        paragraphs: [
          'Commercial metal roofs collect problems at mechanical penetrations, walls, and poorly terminated seams. Inspection documents those details and separates a repairable leak from a reroof.',
          'Maintenance between professional visits—keeping drainage paths clear—is still the owner’s responsibility. PRC 13 does not offer metal roof cleaning.',
        ],
        list: [
          'Seams and panel condition',
          'Flashings at walls and edges',
          'Penetrations for vents and equipment',
          'Drainage paths that dump water against details',
        ],
      },
      {
        heading: 'What we will not claim',
        paragraphs: [
          'We will not list unverified building types, square-footage capacities, or manufacturer certifications. PRC 13 is a California licensed roofing contractor (CA CSLB #1087153) serving the greater Sacramento region, including light commercial properties. Scope is confirmed after we see the roof.',
        ],
      },
    ],
    processTitle: 'How commercial metal work is scoped',
    process: [
      { title: 'Call or form', desc: 'Building use, roof type if known, and whether water is active.' },
      { title: 'Inspection', desc: 'Metal system condition, flashings, penetrations, and whether repair or reroof is honest.' },
      { title: 'Written commercial metal quote', desc: 'Scope for metal work only. Financing may be available on qualifying projects.' },
      { title: 'Scheduled work', desc: 'Access and timing confirmed before crews start. Walkthrough at completion.' },
    ],
    decisionTitle: 'Commercial metal vs other pages',
    decision:
      'Use this page for metal on a commercial or light-commercial building. Use residential metal for houses. Use inspection when you need findings. Historical /commercial-roofing remains published for membrane systems and is not this page.',
    sacramentoTitle: 'Commercial metal in the Sacramento area',
    sacramento:
      'Heat, wind, and rain still test flashings and penetrations on metal-panel commercial roofs. PRC 13 operates as a service-area contractor. There is no public storefront address on this website. Metal Roofing Sacramento is the specialist brand; PRC 13 Roofing Inc. holds the license and performs the work.',
    related: [
      { href: '/metal-roof-inspection', label: 'Metal roof inspection', note: 'Document the commercial metal roof before you authorize a scope.' },
      { href: '/standing-seam-metal-roofing', label: 'Standing seam metal', note: 'If the specified commercial profile is concealed-fastener standing seam.' },
      { href: '/metal-roof-repair', label: 'Metal roof repair', note: 'Localized metal leaks and failed details.' },
      { href: '/metal-roofing', label: 'Metal roofing hub', note: 'Full specialist architecture.' },
    ],
    faqs: [
      {
        question: 'Do you install TPO or EPDM on this page?',
        answer:
          'No. This page is commercial metal roofing only. Historical membrane commercial content may still exist elsewhere on the domain; it is not the offering here.',
      },
      {
        question: 'What commercial metal work do you perform?',
        answer:
          'Metal installation, metal reroofing, metal repair, and inspection of metal systems on Sacramento-area commercial and light-commercial properties where metal is the right covering.',
      },
      {
        question: 'Do you serve large industrial campuses?',
        answer:
          'PRC 13 primarily serves small to mid-size commercial properties. We confirm fit after we understand the building and roof. We do not advertise unverified project types.',
      },
      {
        question: 'Are commercial metal inspections free?',
        answer:
          'Standard residential inspections are free. Commercial metal inspections are scheduled after you contact us; we confirm expectations for that visit when we respond.',
      },
      {
        question: 'Who is the licensed contractor?',
        answer:
          'PRC 13 Roofing Inc., CA CSLB #1087153, operates Metal Roofing Sacramento and performs the contracted work.',
      },
    ],
    retrieval: [
      {
        question: 'Is commercial metal roofing the same as commercial roofing on this site?',
        answer:
          'No. This page is metal panel systems. The historical commercial roofing URL covers flat and low-slope membranes such as TPO and EPDM and is not this specialist offering.',
      },
      {
        question: 'Can a commercial building get standing seam?',
        answer:
          'Yes, when a metal panel system is the right covering. Standing seam is a profile option, not a guarantee for every commercial roof.',
      },
    ],
    finalCtaTitle: 'Request a commercial metal roofing estimate',
    finalCtaBody:
      'Tell us about the building. We will inspect the metal system—or tell you if metal is not the right covering. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    primaryImage: HERO_FINISHED,
    heroImageAlt: 'Finished dark metal roof of the type PRC 13 installs on Sacramento-area buildings',
  },

  inspection: {
    id: 'metal-roof-inspection',
    path: '/metal-roof-inspection',
    h1: 'Metal Roof Inspection',
    h1Accent: 'Findings first: leaks, panels, and next steps',
    heroIntro:
      'A metal roof inspection is an evaluation of an existing or proposed metal system: leaks, panels, fasteners, seams, flashing, penetrations, drainage, and whether repair or replacement is the honest next step. It is not a generic whole-house inspection and not a sales visit disguised as a look from the curb.',
    heroKicker: 'Evaluate the metal roof',
    ctaLabel: CTA_METAL_INSPECTION,
    formTitle: CTA_METAL_INSPECTION,
    formSubtitle: 'Standard residential inspections are free, with written findings and no obligation.',
    defaultReason: 'metal-inspection',
    sourcePage: 'metal-roof-inspection',
    pageName: 'Metal Roof Inspection Sacramento',
    serviceName: 'Metal roof inspection',
    serviceDescription:
      'Metal roof inspections in Sacramento covering leaks, panels, fasteners, seams, flashing, penetrations, drainage, and repair-versus-replacement guidance.',
    answerTitle: 'What a metal roof inspection covers',
    answer:
      'A metal roof inspection documents the condition of a metal roofing system so you can decide on repair, replacement, or no work. PRC 13 looks at panels, seams, fasteners, flashings, penetrations, drainage, and accessible attic or deck clues. Standard residential inspections are free and include written findings.',
    answerPoints: [
      'Metal-specific, not a general home inspection',
      'Written findings, no obligation',
      'Repair vs replacement called honestly',
      'Residential inspections are free',
    ],
    whoForTitle: 'Who should request an inspection',
    whoFor:
      'Owners with an existing metal roof and a leak, stain, storm concern, or a “how much life is left?” question. Also owners considering metal who need the current covering evaluated before a replacement quote. Buyers and sellers who want a roofing-focused look rather than a brief note on a general home inspection.',
    problemsTitle: 'What the inspection is looking for',
    problems: [
      'Active or intermittent leaks',
      'Corrosion or finish wear in exposed areas',
      'Damaged, displaced, or dented panels',
      'Fastener and washer condition on exposed-fastener systems',
      'Seam integrity on standing seam',
      'Flashing at walls, chimneys, and edges',
      'Penetrations at vents, pipes, and equipment',
      'Drainage that loads water against details',
      'Storm or impact damage',
    ],
    sections: [
      {
        heading: 'How the inspection is done',
        paragraphs: [
          'PRC 13 inspects the metal roof system and explains findings without pressure. When attic access exists, deck staining and ventilation clues are part of the picture. You receive a written inspection report documenting condition.',
          'This is a roofing-focused assessment. It is not an insurance adjuster visit and not a general home inspection that only glances at the roof.',
        ],
      },
      {
        heading: 'Repair vs replacement assessment',
        paragraphs: [
          'The useful output is a recommendation you can act on: a focused metal repair, a replacement conversation, or no work if the roof is sound. We would rather send you away with a clean report than invent a project.',
          'If the roof is not metal yet, the inspection still informs whether a metal replacement is timely or whether the current covering has remaining life.',
        ],
      },
      {
        heading: 'Storm damage documentation',
        paragraphs: [
          'After wind or hail, inspection records what is visible on the metal system. We can document conditions and work with an adjuster when storm damage is involved. Documenting damage is not a guarantee that an insurer will approve a claim.',
        ],
      },
      {
        heading: 'What inspection does not include',
        paragraphs: [
          'We do not offer metal roof cleaning. We do not invent laboratory corrosion testing. We do not claim same-day reports as a guarantee; we aim to schedule inspections quickly during Monday–Friday business hours.',
        ],
      },
    ],
    processTitle: 'From request to written findings',
    process: [
      { title: 'Request', desc: 'Form or phone. Note if water is active so we can prioritize.' },
      { title: 'On-site metal evaluation', desc: 'Panels, seams, fasteners, flashings, penetrations, drainage, attic clues when accessible.' },
      { title: 'Written findings', desc: 'Condition documented. Repair, replacement, or no-work recommendation explained.' },
      { title: 'Your decision', desc: 'No obligation. If you authorize work, it is quoted separately from the inspection itself.' },
    ],
    decisionTitle: 'Inspection vs jumping straight to repair',
    decision:
      'Inspect when you need the cause named. Repair when the cause is already a known metal detail and you are ready to authorize that scope. Replacement still starts with condition—inspection is how that condition is established.',
    sacramentoTitle: 'Inspecting metal roofs around Sacramento',
    sacramento:
      'Heat cycling and winter rain make flashings and fasteners worth checking even when the panels still look bright. PRC 13 inspects metal roofs across the greater Sacramento service area. Metal Roofing Sacramento is operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    related: [
      { href: '/metal-roof-repair', label: 'Metal roof repair', note: 'When findings point to a localized metal failure.' },
      { href: '/metal-roof-replacement', label: 'Metal roof replacement', note: 'When findings point to a full-system conversation.' },
      { href: '/commercial-metal-roofing', label: 'Commercial metal roofing', note: 'If the building is commercial and the covering is metal.' },
      { href: '/metal-roofing', label: 'Metal roofing services', note: 'Parent hub.' },
    ],
    faqs: [
      {
        question: 'Are metal roof inspections free?',
        answer:
          'Standard residential inspections are free with no obligation and include written findings. Commercial metal inspections are scheduled when you contact us; we confirm expectations for that visit.',
      },
      {
        question: 'What is included in a metal roof inspection?',
        answer:
          'We review panels, seams, fasteners as applicable, flashings, penetrations, and drainage, plus attic or deck clues when accessible. You get a written report of condition and recommended next steps.',
      },
      {
        question: 'Is this the same as a home inspection?',
        answer:
          'No. A general home inspection covers many systems. This is a roofing-focused assessment of the metal roof for leaks, condition, and repair-versus-replacement guidance.',
      },
      {
        question: 'Do I need an inspection if I already see a leak?',
        answer:
          'Yes. Visible water indoors does not always match the metal detail that failed. Inspection traces the path before repair is quoted.',
      },
      {
        question: 'Will you pressure me to replace the roof?',
        answer:
          'No. If a repair is enough, we recommend the repair. If no work is needed, we say that too.',
      },
    ],
    retrieval: [
      {
        question: 'What does a metal roof inspection decide?',
        answer:
          'It documents metal roof condition and whether the honest next step is repair, replacement, or no work.',
      },
      {
        question: 'Is a metal roof inspection different from a generic roof inspection URL on this site?',
        answer:
          'Yes. This page is the specialist metal inspection. A historical generic roof-inspection URL remains published but is not the primary metal hire path.',
      },
    ],
    finalCtaTitle: 'Request a metal roof inspection',
    finalCtaBody:
      'Standard residential inspections are free. We document the metal roof and explain next steps with no obligation. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    primaryImage: HERO_DETAIL,
    heroImageAlt: 'Standing seam metal roof details reviewed during a metal roof inspection',
  },
};
