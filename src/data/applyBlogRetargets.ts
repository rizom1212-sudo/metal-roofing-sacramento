import type { BlogPost, BlogRelatedService } from './blog';
import { brandSeoTitle, rewriteRetargetedPost } from '../lib/metalizeRetargetedCopy';

const KEEP_SLUGS = new Set([
  'metal-roofing-cost-sacramento',
  'standing-seam-metal-roofing-sacramento',
  'metal-roofing-sacramento-climate',
  'metal-roof-over-shingles-sacramento',
  'metal-roof-installation-process-sacramento',
  'metal-roofing-vs-shingles-sacramento',
  'how-long-does-standing-seam-metal-roof-last',
  'how-should-a-metal-roof-be-cleaned',
  'metal-roof-repair-vs-replacement',
  'metal-roofing-el-dorado-hills-ca',
  'colfax-home-hardening-program-2026-roofing-wildfire-protection',
]);

interface Retarget {
  title: string;
  seoTitle: string;
  excerpt: string;
  first: string;
  services: BlogRelatedService[];
}

const install: BlogRelatedService = { label: 'Metal Roof Installation', href: '/metal-roof-installation' };
const replace: BlogRelatedService = { label: 'Metal Roof Replacement', href: '/metal-roof-replacement' };
const repair: BlogRelatedService = { label: 'Metal Roof Repair', href: '/metal-roof-repair' };
const inspect: BlogRelatedService = { label: 'Metal Roof Inspection', href: '/metal-roof-inspection' };
const hub: BlogRelatedService = { label: 'Metal Roofing', href: '/metal-roofing' };
const seam: BlogRelatedService = { label: 'Standing Seam', href: '/standing-seam-metal-roofing' };
const commercial: BlogRelatedService = { label: 'Commercial Metal Roofing', href: '/commercial-metal-roofing' };
const contact: BlogRelatedService = { label: 'Contact', href: '/contact' };

function s(...items: BlogRelatedService[]): BlogRelatedService[] {
  return [...items, contact];
}

const RETARGETS: Record<string, Retarget> = {
  'what-to-do-roof-leak-sacramento-storm': {
    title: 'What to Do When a Metal Roof Leaks During a Sacramento Storm',
    seoTitle: 'Metal Roof Leak During a Sacramento Storm | What to Do',
    excerpt:
      'If a metal roof leaks during Sacramento rain, protect the interior, stay off the wet roof, and schedule a metal roof inspection. PRC 13 does not claim 24/7 service.',
    first:
      'Short answer: contain water indoors, move valuables, stay off a wet metal roof, and call PRC 13 Roofing during business hours about metal roof repair. Do not walk standing seam or wet panels to hunt for the leak. A metal leak often starts at flashing, a penetration, a seam, or an edge — not in the middle of a sound pan.',
    services: s(repair, inspect, hub),
  },
  'sacramento-roof-maintenance-checklist': {
    title: 'Metal Roof Maintenance Checklist for Sacramento Homeowners',
    seoTitle: 'Sacramento Metal Roof Maintenance Checklist',
    excerpt:
      'Owner maintenance for Sacramento metal roofs: keep valleys and gutters clear, watch flashings, and inspect after storms. PRC 13 does not offer metal cleaning.',
    first:
      'Short answer: metal roofs still need light owner maintenance — debris out of valleys, gutters clear, and a professional look at flashings and penetrations after storms. PRC 13 does not clean metal roofs. Cleaning is owner maintenance or a specialist who follows the finish manufacturer’s guidance.',
    services: s(inspect, repair, hub),
  },
  'how-insurance-claims-work-for-roof-damage': {
    title: 'How Insurance Claims Work for Metal Roof Storm Damage',
    seoTitle: 'Metal Roof Insurance Claims After Storm Damage | Sacramento',
    excerpt:
      'How storm-related metal roof claims typically work: document conditions, inspect, and let the insurer decide. PRC 13 does not guarantee coverage or outcomes.',
    first:
      'Short answer: insurance may help with storm-related metal roof damage, but coverage and payment are the insurer’s decision. PRC 13 can document what we find on a metal roof inspection and explain how a proposed repair or replacement relates to those findings. We do not promise claim approval.',
    services: s(inspect, repair, replace),
  },
  'roof-inspection-cost-sacramento': {
    title: 'Metal Roof Inspection Cost in Sacramento',
    seoTitle: 'Metal Roof Inspection Cost Sacramento | Free Residential',
    excerpt:
      'Standard residential metal roof inspections with PRC 13 are free. Commercial metal inspections are scheduled when you contact us. No invented price list.',
    first:
      'Short answer: standard residential metal roof inspections are free with written findings and no obligation. We do not publish a fake commercial price sheet. Commercial metal inspections are scheduled when you contact us, and we confirm expectations for that visit.',
    services: s(inspect, hub),
  },
  'roof-inspection-checklist': {
    title: 'Metal Roof Inspection Checklist for Sacramento Homeowners',
    seoTitle: 'Metal Roof Inspection Checklist | Sacramento',
    excerpt:
      'What a metal roof inspection reviews: panels, seams, fasteners, flashing, penetrations, drainage, and repair-versus-replacement clues.',
    first:
      'Short answer: a useful metal roof checklist is about water paths and details — panels, seams, fasteners or clips, flashings, penetrations, edges, and drainage — not a shingle granule walk. Use this list to prepare, then hire a metal inspection for findings you can act on.',
    services: s(inspect, repair, replace),
  },
  'how-often-should-you-inspect-your-roof': {
    title: 'How Often Should You Inspect a Metal Roof in Sacramento?',
    seoTitle: 'How Often to Inspect a Metal Roof | Sacramento',
    excerpt:
      'Inspect a metal roof after major storms and as part of ordinary ownership. Heat cycling and winter rain make flashings worth checking even when panels still look bright.',
    first:
      'Short answer: check a metal roof after significant storms and on a regular ownership cadence, not only when a ceiling stains. Sacramento heat cycling and winter rain show up first at flashings, fasteners, and penetrations. Panels that still look good can hide a failed boot or edge.',
    services: s(inspect, hub),
  },
  'what-happens-during-roof-inspection': {
    title: 'What Happens During a Metal Roof Inspection in Sacramento',
    seoTitle: 'What Happens During a Metal Roof Inspection',
    excerpt:
      'A metal roof inspection reviews panels, seams, flashings, and drainage, then explains repair versus replacement in writing.',
    first:
      'Short answer: we review the metal system in front of us — panels, seams, fasteners as they apply to the profile, flashings, penetrations, and drainage — plus attic or interior clues when accessible. You get written findings. Standard residential inspections are free.',
    services: s(inspect, repair, replace),
  },
  'insurance-roof-inspection-sacramento': {
    title: 'Insurance Metal Roof Inspection in Sacramento',
    seoTitle: 'Insurance Metal Roof Inspection Sacramento',
    excerpt:
      'Documenting metal roof conditions for an insurance review. PRC 13 explains findings; the insurer decides coverage.',
    first:
      'Short answer: an insurance-related metal roof inspection is still an inspection of the roof, documented in writing. We can note storm-related conditions we observe. We do not guarantee what an adjuster or carrier will pay.',
    services: s(inspect, repair, replace),
  },
  'commercial-roof-inspection-sacramento': {
    title: 'Commercial Metal Roof Inspection in Sacramento',
    seoTitle: 'Commercial Metal Roof Inspection Sacramento',
    excerpt:
      'Inspection of commercial metal roofing systems: seams, flashings, penetrations, and drainage. Not a TPO or EPDM inspection page.',
    first:
      'Short answer: this guide is about inspecting commercial metal roofs — standing seam or other metal panels — not TPO or EPDM membranes. PRC 13 inspects metal systems on Sacramento-area commercial and light-commercial buildings where metal is the covering.',
    services: s(inspect, commercial, hub),
  },
  'roof-inspection-after-storm': {
    title: 'Metal Roof Inspection After a Sacramento Storm',
    seoTitle: 'Inspect a Metal Roof After a Storm | Sacramento',
    excerpt:
      'After wind or rain, inspect metal panels, seams, flashings, and penetrations. PRC 13 does not claim 24/7 emergency service.',
    first:
      'Short answer: after a storm, look from the ground for displaced trim, dented panels, and interior stains, then schedule a metal roof inspection when conditions are safe. Stay off wet metal. We aim to schedule during normal business hours.',
    services: s(inspect, repair, hub),
  },
  'signs-you-need-roof-inspection': {
    title: 'Signs You Need a Metal Roof Inspection in Sacramento',
    seoTitle: 'Signs You Need a Metal Roof Inspection',
    excerpt:
      'Ceiling stains, rust or coating issues, noisy wind at trim, and repeated leaks are reasons to inspect a metal roof before the next storm.',
    first:
      'Short answer: stains, dripping at a penetration, damaged panels, loose trim, or a metal roof you have not had inspected in years are reasons to call. A bright panel field can still hide a failed flashing.',
    services: s(inspect, repair, replace),
  },
  'roof-inspection-before-buying-home': {
    title: 'Metal Roof Inspection Before Buying a Sacramento Home',
    seoTitle: 'Inspect a Metal Roof Before Buying a Home | Sacramento',
    excerpt:
      'A buyer-side metal roof inspection looks at remaining life, flashings, and whether repair or replacement belongs in the offer conversation.',
    first:
      'Short answer: if you are buying a home with metal — or planning to replace the current covering with metal — get a metal-specific inspection, not only the general home inspector’s roof note. Remaining life, flashings, and deck clues change the price of the decision.',
    services: s(inspect, replace, hub),
  },
  'free-roof-inspection-sacramento': {
    title: 'Free Residential Metal Roof Inspection in Sacramento',
    seoTitle: 'Free Metal Roof Inspection Sacramento',
    excerpt:
      'Standard residential metal roof inspections with PRC 13 are free and include written findings. Commercial visits are scheduled separately.',
    first:
      'Short answer: yes — standard residential metal roof inspections are free, with no obligation, and include written findings. That claim is for residential metal inspections, not a separate Metal Roofing Sacramento Google listing and not an invented commercial freebie.',
    services: s(inspect, hub),
  },
  'storm-damage-roof-repair-sacramento': {
    title: 'Metal Roof Storm Damage Repair in Sacramento',
    seoTitle: 'Metal Roof Storm Damage Repair Sacramento',
    excerpt:
      'Wind, rain, and impact can damage metal panels, trim, and flashings. Repair when the failure is local; replace when the system is broadly worn.',
    first:
      'Short answer: storm damage on metal is often a detail problem — lifted trim, impact on a pan, a failed flashing — not automatically a full replacement. Widespread coating failure, many leaks, or a system at the end of its service life changes the conversation.',
    services: s(repair, inspect, replace),
  },
  'wind-damage-roof-repair': {
    title: 'Wind Damage on Metal Roofs in Sacramento',
    seoTitle: 'Metal Roof Wind Damage Repair | Sacramento',
    excerpt:
      'Wind tests metal edges, ridges, and flashings. PRC 13 inspects and repairs localized wind-related metal failures when the rest of the system is sound.',
    first:
      'Short answer: wind on metal often shows up at edges, ridge caps, wall flashings, and accessory trim. Concealed-fastener standing seam avoids many exposed screw points, but edge metal still has to be detailed. Inspection separates a local repair from a broader problem.',
    services: s(repair, inspect, seam),
  },
  'hail-damage-roof-repair': {
    title: 'Hail Damage on Metal Roofs in Sacramento',
    seoTitle: 'Metal Roof Hail Damage | Sacramento',
    excerpt:
      'Hail can dent metal panels and bruise accessories. Cosmetic dents and functional leaks are different questions. PRC 13 documents conditions; insurers decide coverage.',
    first:
      'Short answer: hail in Sacramento County is occasional. When it happens, metal can dent. A dent is not automatically a leak. Functional damage at seams, coatings, or flashings is the inspection question. We do not guarantee insurance outcomes.',
    services: s(inspect, repair, replace),
  },
  'who-to-call-when-roof-is-leaking': {
    title: 'Who to Call When a Metal Roof Is Leaking in Sacramento',
    seoTitle: 'Who to Call for a Metal Roof Leak | Sacramento',
    excerpt:
      'Call PRC 13 Roofing, CA CSLB #1087153, for metal roof leak assessment during business hours. Metal Roofing Sacramento is the specialist brand, not a separate contractor.',
    first:
      'Short answer: call PRC 13 Roofing Inc., the licensed contractor that operates Metal Roofing Sacramento. We assess metal roof leaks during normal business hours. We do not claim 24/7 dispatch.',
    services: s(repair, inspect, hub),
  },
  'roof-replacement-cost-sacramento': {
    title: 'Metal Roof Replacement Cost in Sacramento',
    seoTitle: 'Metal Roof Replacement Cost Sacramento',
    excerpt:
      'Metal replacement cost depends on size, pitch, profile, access, and deck repairs. Metal typically costs more upfront than shingles. Quotes follow inspection.',
    first:
      'Short answer: metal roof replacement in Sacramento is quoted after inspection. Cost depends on roof size, pitch, panel profile, tear-off, and decking. Metal typically costs more upfront than architectural shingles — often roughly 40 to 60% more depending on profile and complexity. That is a planning range, not a price list.',
    services: s(replace, install, hub),
  },
  'roofing-materials-replacement-sacramento': {
    title: 'Roofing Materials for Sacramento Replacement: Why Metal Is on the List',
    seoTitle: 'Sacramento Roof Replacement Materials | Metal Comparison',
    excerpt:
      'When replacing a Sacramento roof, metal is the specialist offering on this site. Shingles and tile are discussed as comparison, not as primary services here.',
    first:
      'Short answer: this specialist site exists to help you choose metal roofing. Shingles and tile remain common on Sacramento houses and are useful comparison points. We do not operate this domain as a shingle or tile shop.',
    services: s(replace, seam, hub),
  },
  'roof-replacement-insurance-sacramento': {
    title: 'Insurance and Metal Roof Replacement in Sacramento',
    seoTitle: 'Insurance for Metal Roof Replacement | Sacramento',
    excerpt:
      'Storm-related metal replacement may involve insurance. PRC 13 documents findings. Coverage and payment remain the insurer’s decision.',
    first:
      'Short answer: some metal replacement conversations start after storm damage. Insurance may apply; it also may not. We document metal roof conditions. We do not promise a full metal upgrade paid by a carrier.',
    services: s(replace, inspect, hub),
  },
  'roof-replacement-process-sacramento': {
    title: 'Metal Roof Replacement Process in Sacramento',
    seoTitle: 'Metal Roof Replacement Process Sacramento',
    excerpt:
      'How metal replacement typically runs: inspect, plan, tear off, inspect the deck, underlayment, panels, flashings, walkthrough. Timelines depend on the roof.',
    first:
      'Short answer: metal replacement usually starts with inspection and a written scope, then tear-off so the deck can be inspected, then underlayment, panels, flashings, and a final walkthrough. Many Sacramento residential metal jobs finish in about two to three days. Larger or complex roofs take longer. That is not a guarantee.',
    services: s(replace, install, inspect),
  },
  'roof-replacement-financing-sacramento': {
    title: 'Financing Metal Roof Replacement in Sacramento',
    seoTitle: 'Metal Roof Replacement Financing Sacramento',
    excerpt:
      'Financing may be available on qualifying metal roof projects. Eligibility depends on the lender and scope. Ask during inspection.',
    first:
      'Short answer: financing may be available on qualifying metal roof projects. We do not invent a named loan product, rate, or approval. Ask during your metal roof inspection.',
    services: s(replace, inspect, hub),
  },
  'how-long-does-roof-replacement-take': {
    title: 'How Long Does Metal Roof Replacement Take in Sacramento?',
    seoTitle: 'How Long Metal Roof Replacement Takes | Sacramento',
    excerpt:
      'Many Sacramento residential metal replacements take about two to three days. Complexity, weather, and deck repairs can add time.',
    first:
      'Short answer: many Sacramento residential metal roof replacements take about two to three days. Larger roofs, steep pitches, extra penetrations, or deck repairs add time. We give a schedule before work starts. We do not promise same-day replacement.',
    services: s(replace, install, hub),
  },
  'signs-you-need-roof-replacement-sacramento': {
    title: 'Signs You Need Metal Roof Replacement in Sacramento',
    seoTitle: 'Signs You Need a Metal Roof Replacement | Sacramento',
    excerpt:
      'Widespread wear, repeating leaks, and a covering near the end of its life point toward replacement — often with metal if you want a longer-service system.',
    first:
      'Short answer: replacement belongs in the conversation when leaks keep returning, wear is widespread, or the covering is near the end of its useful life. Metal is the replacement system this specialist site is built around. Localized metal leaks can still be repairs.',
    services: s(replace, repair, inspect),
  },
  'best-time-to-replace-roof-sacramento': {
    title: 'Best Time to Replace a Roof with Metal in Sacramento',
    seoTitle: 'Best Time for Metal Roof Replacement Sacramento',
    excerpt:
      'Dry months are easier for metal replacement, but a failing roof should not wait on the calendar. Weather still affects scheduling.',
    first:
      'Short answer: dry weather is easier for tear-off and metal installation, which is why many Sacramento replacements land outside the heaviest rain. A leaking or failing covering should not wait for a perfect month. We schedule around weather rather than inventing a guaranteed start date.',
    services: s(replace, install, hub),
  },
  'roof-replacement-for-older-homes': {
    title: 'Metal Roof Replacement for Older Sacramento Homes',
    seoTitle: 'Metal Roofs on Older Sacramento Homes',
    excerpt:
      'Older homes can take metal when the structure and deck support it. Inspection has to see the actual roof, not a catalog photo.',
    first:
      'Short answer: older Sacramento homes can be good metal candidates when decking and structure support the system. Mixed planes, chimneys, and low-slope sections need honest detailing. Inspection first — we do not invent a “historic metal package.”',
    services: s(replace, inspect, hub),
  },
  'roof-repair-cost-sacramento': {
    title: 'Metal Roof Repair Cost in Sacramento',
    seoTitle: 'Metal Roof Repair Cost Sacramento',
    excerpt:
      'Metal repair cost depends on the failed detail — flashing, panel, fastener, or penetration — and access. Quotes follow inspection. No invented price menu.',
    first:
      'Short answer: metal roof repair is quoted after we see the leak path. A pipe boot is not the same job as replacing a damaged pan or rebuilding a wall flashing. We do not publish a fake per-repair menu.',
    services: s(repair, inspect, replace),
  },
  'roof-flashing-repair-sacramento': {
    title: 'Metal Roof Flashing Repair in Sacramento',
    seoTitle: 'Metal Roof Flashing Repair Sacramento',
    excerpt:
      'Many metal roof leaks start at flashings, not in the middle of a panel. PRC 13 diagnoses and repairs metal flashing failures when the rest of the system is sound.',
    first:
      'Short answer: flashing is where metal roofs often leak — walls, chimneys, skylights, and edges. Repair the water-shedding detail. Do not smear sealant over a failed transition and call it a metal repair.',
    services: s(repair, inspect, hub),
  },
  'chimney-flashing-repair-sacramento': {
    title: 'Chimney Flashing Repair on Metal Roofs in Sacramento',
    seoTitle: 'Chimney Flashing on Metal Roofs | Sacramento',
    excerpt:
      'Chimney leaks on metal roofs are usually flashing and counter-flashing problems. Inspection separates a local repair from a broader metal issue.',
    first:
      'Short answer: a chimney leak on a metal roof is usually the metal-to-masonry flashing, not “the metal failed.” We inspect that intersection and repair when the surrounding panels are sound.',
    services: s(repair, inspect, hub),
  },
  'skylight-leak-repair-sacramento': {
    title: 'Skylight Leaks on Metal Roofs in Sacramento',
    seoTitle: 'Skylight Leak Repair on Metal Roofs',
    excerpt:
      'Skylight leaks on metal roofs usually involve curb flashings and the metal-to-skylight transition, not the whole roof.',
    first:
      'Short answer: skylights are penetrations. On metal, the curb and flashing have to shed water with the panels. We inspect that transition rather than assuming the metal field is the problem.',
    services: s(repair, inspect, hub),
  },
  'common-causes-of-roof-leaks': {
    title: 'Common Causes of Metal Roof Leaks in Sacramento',
    seoTitle: 'Common Metal Roof Leak Causes | Sacramento',
    excerpt:
      'Metal leaks usually start at flashings, seams, fasteners, penetrations, or edges — not in the middle of a sound panel.',
    first:
      'Short answer: metal roof leaks in Sacramento most often start at failed flashings, penetrations, seams, fasteners on exposed-fastener systems, or edges. Heat cycling and winter rain expose those details. A sound standing-seam pan is rarely the first failure point.',
    services: s(repair, inspect, replace),
  },
  'what-causes-roof-flashing-to-fail': {
    title: 'What Causes Metal Roof Flashing to Fail?',
    seoTitle: 'Why Metal Roof Flashing Fails | Sacramento',
    excerpt:
      'Movement, sealant age, poor original detailing, and debris against walls all fail metal flashings. Inspection should see the actual transition.',
    first:
      'Short answer: metal flashings fail from movement, aged sealant where it was used as a crutch, incompatible details, and debris holding moisture against walls. Sacramento heat and rain speed that up. The fix is the detail, not a smear of caulk.',
    services: s(repair, inspect, hub),
  },
  'roof-leak-repair-sacramento': {
    title: 'Metal Roof Leak Repair in Sacramento',
    seoTitle: 'Metal Roof Leak Repair Sacramento',
    excerpt:
      'Find the leak path on a metal roof — flashing, seam, fastener, or penetration — then repair it. Replacement only when the system is broadly worn.',
    first:
      'Short answer: metal leak repair starts by tracing water, not by coating the whole roof. We inspect, explain the failed detail, and repair when the surrounding metal is sound. Repeating leaks in different areas can mean replacement.',
    services: s(repair, inspect, replace),
  },
  'commercial-roof-replacement-sacramento': {
    title: 'Commercial Metal Roof Replacement in Sacramento',
    seoTitle: 'Commercial Metal Roof Replacement Sacramento',
    excerpt:
      'Metal reroofing for Sacramento-area commercial buildings where metal systems fit. Not a TPO or EPDM replacement page.',
    first:
      'Short answer: this page is commercial metal replacement and reroofing — standing seam or other metal panels — not membrane systems. PRC 13 performs commercial metal work on small and mid-size buildings where metal is the right covering.',
    services: s(commercial, replace, inspect),
  },
  'commercial-roof-repair-sacramento': {
    title: 'Commercial Metal Roof Repair in Sacramento',
    seoTitle: 'Commercial Metal Roof Repair Sacramento',
    excerpt:
      'Repair of commercial metal roofs: seams, flashings, penetrations, and panels. Not TPO or EPDM repair.',
    first:
      'Short answer: commercial metal repair is about the metal system on the building — seams, flashings, penetrations, and damaged panels. TPO and EPDM are not the offering on this specialist site.',
    services: s(commercial, repair, inspect),
  },
  'commercial-roof-maintenance-sacramento': {
    title: 'Commercial Metal Roof Maintenance in Sacramento',
    seoTitle: 'Commercial Metal Roof Maintenance Sacramento',
    excerpt:
      'Maintenance for commercial metal roofs means inspection, debris at drains and edges, and timely flashing repairs. PRC 13 does not offer metal cleaning as a service.',
    first:
      'Short answer: commercial metal maintenance is inspection and timely repair of details, plus keeping drainage paths clear. PRC 13 does not sell metal washing. Owner or a qualified cleaner follows manufacturer guidance.',
    services: s(commercial, inspect, repair),
  },
  'commercial-roof-leak-repair-sacramento': {
    title: 'Commercial Metal Roof Leak Repair in Sacramento',
    seoTitle: 'Commercial Metal Roof Leak Repair Sacramento',
    excerpt:
      'Commercial metal leaks usually start at penetrations, seams, and flashings. Diagnose the metal system; do not treat this as a membrane leak article.',
    first:
      'Short answer: a leak on a commercial metal roof is a water-path problem at a detail. We inspect metal seams, curbs, and flashings. This is not TPO/EPDM leak repair.',
    services: s(commercial, repair, inspect),
  },
  'roof-repair-folsom-ca': {
    title: 'Metal Roof Repair in Folsom, CA',
    seoTitle: 'Metal Roof Repair Folsom CA',
    excerpt:
      'Metal roof repair in Folsom for leaks, flashings, and storm-related metal damage. Operated by PRC 13 Roofing Inc.',
    first:
      'Short answer: Folsom metal roof repair is for existing metal systems — seams, flashings, panels, penetrations — in a climate with hot summers and winter rain. Hire path: [metal roof repair](/metal-roof-repair). This article adds Folsom context.',
    services: s(repair, inspect, { label: 'Folsom service area', href: '/service-areas/folsom' }),
  },
  'roof-replacement-folsom-ca': {
    title: 'Metal Roof Replacement in Folsom, CA',
    seoTitle: 'Metal Roof Replacement Folsom CA',
    excerpt:
      'Replace a worn Folsom roof with metal when inspection supports it. Heat, tear-off, and profile choice drive the project.',
    first:
      'Short answer: Folsom replacement conversations on this site are about metal. Tear-off so the deck can be inspected is the usual approach. See [metal roof replacement](/metal-roof-replacement).',
    services: s(replace, install, { label: 'Folsom service area', href: '/service-areas/folsom' }),
  },
  'roof-inspection-folsom-ca': {
    title: 'Metal Roof Inspection in Folsom, CA',
    seoTitle: 'Metal Roof Inspection Folsom CA',
    excerpt:
      'Metal roof inspections in Folsom with written findings. Standard residential inspections are free.',
    first:
      'Short answer: Folsom metal inspections review panels, seams, flashings, and heat-related accessory wear. Standard residential inspections are free. See [metal roof inspection](/metal-roof-inspection).',
    services: s(inspect, { label: 'Folsom service area', href: '/service-areas/folsom' }),
  },
  'storm-damage-roof-repair-folsom': {
    title: 'Metal Roof Storm Damage in Folsom, CA',
    seoTitle: 'Folsom Metal Roof Storm Damage',
    excerpt:
      'Storm-related metal roof issues in Folsom: wind at edges, rain at flashings, impact. Inspection first. No 24/7 claim.',
    first:
      'Short answer: Folsom storms test metal edges and flashings. We inspect when it is safe and repair localized metal failures. We do not claim 24/7 emergency service.',
    services: s(repair, inspect, { label: 'Folsom service area', href: '/service-areas/folsom' }),
  },
  'best-roofing-materials-folsom': {
    title: 'Best Roofing Materials in Folsom: Metal Compared Honestly',
    seoTitle: 'Best Roofing Materials Folsom | Metal Comparison',
    excerpt:
      'Folsom material choice with metal as the specialist offering. Shingles and tile are comparison, not primary services on this site.',
    first:
      'Short answer: Folsom homeowners compare shingles, tile, and metal. This specialist site is here for metal. The others remain fair comparison points for heat, look, and budget — not services we promote as primary on this domain.',
    services: s(hub, replace, { label: 'Folsom service area', href: '/service-areas/folsom' }),
  },
  'roofing-costs-folsom-ca': {
    title: 'Metal Roofing Costs in Folsom, CA',
    seoTitle: 'Metal Roofing Cost Folsom CA',
    excerpt:
      'Folsom metal roofing cost follows inspection: size, pitch, profile, tear-off, and deck. No invented Folsom price list.',
    first:
      'Short answer: Folsom metal cost is quoted after inspection. Heat and access can affect labor. We do not publish a fake per-square Folsom menu. See [metal roofing cost](/blog/metal-roofing-cost-sacramento).',
    services: s(replace, hub, { label: 'Folsom service area', href: '/service-areas/folsom' }),
  },
  'roof-leak-repair-folsom-ca': {
    title: 'Metal Roof Leak Repair in Folsom, CA',
    seoTitle: 'Folsom Metal Roof Leak Repair',
    excerpt:
      'Trace Folsom metal leaks at flashings, seams, and penetrations. Repair when local; replace when the system is worn out.',
    first:
      'Short answer: a Folsom metal leak is a water-path problem. We trace it and repair the failed metal detail when the rest of the roof is sound.',
    services: s(repair, inspect, { label: 'Folsom service area', href: '/service-areas/folsom' }),
  },
  'roof-repair-el-dorado-hills-ca': {
    title: 'Metal Roof Repair in El Dorado Hills, CA',
    seoTitle: 'Metal Roof Repair El Dorado Hills',
    excerpt:
      'Metal roof repair in El Dorado Hills for wind-tested edges, flashings, and localized panel issues on exposed lots.',
    first:
      'Short answer: EDH metal repair is about details that wind and sun punish — edges, ridges, flashings — not a generic shingle patch. See [metal roof repair](/metal-roof-repair).',
    services: s(repair, inspect, { label: 'El Dorado Hills', href: '/service-areas/el-dorado-hills' }),
  },
  'roof-replacement-el-dorado-hills-ca': {
    title: 'Metal Roof Replacement in El Dorado Hills, CA',
    seoTitle: 'Metal Roof Replacement El Dorado Hills',
    excerpt:
      'Replace an exposed El Dorado Hills roof with metal when inspection supports it. Standing seam is often the profile owners want on open lots.',
    first:
      'Short answer: exposed EDH lots are a common reason owners look at metal, especially standing seam. Replacement still starts with inspection and tear-off as the usual approach.',
    services: s(replace, seam, { label: 'El Dorado Hills', href: '/service-areas/el-dorado-hills' }),
  },
  'roof-inspection-el-dorado-hills-ca': {
    title: 'Metal Roof Inspection in El Dorado Hills, CA',
    seoTitle: 'Metal Roof Inspection El Dorado Hills',
    excerpt:
      'Metal inspections in El Dorado Hills for wind, heat, and storm-related metal conditions. Standard residential inspections are free.',
    first:
      'Short answer: EDH metal inspections pay attention to edges, ridges, and flashings on exposed lots. Standard residential inspections are free with written findings.',
    services: s(inspect, { label: 'El Dorado Hills', href: '/service-areas/el-dorado-hills' }),
  },
  'roof-insurance-claims-el-dorado-hills': {
    title: 'Metal Roof Insurance Claims in El Dorado Hills',
    seoTitle: 'EDH Metal Roof Insurance Claims',
    excerpt:
      'Documenting metal roof storm conditions in El Dorado Hills. Insurers decide coverage. PRC 13 does not guarantee outcomes.',
    first:
      'Short answer: we can document metal roof conditions after storms in El Dorado Hills. Insurance payment is not a PRC 13 promise.',
    services: s(inspect, repair, { label: 'El Dorado Hills', href: '/service-areas/el-dorado-hills' }),
  },
  'roof-insurance-claims-storm-damage': {
    title: 'Metal Roof Insurance Claims After Sacramento Storms',
    seoTitle: 'Sacramento Metal Roof Storm Insurance Claims',
    excerpt:
      'How to document metal roof storm conditions. PRC 13 inspects and writes findings. Carriers decide coverage.',
    first:
      'Short answer: photograph interior stains, avoid wet metal roofs, and get a metal inspection while the storm date is still clear. We document conditions. We do not guarantee claim results.',
    services: s(inspect, repair, replace),
  },
};

function patchFirstParagraph(post: BlogPost, first: string): BlogPost {
  const body = post.body.map(section => ({ ...section }));
  const index = body.findIndex(section => section.type === 'paragraph');
  if (index >= 0) {
    body[index] = { ...body[index], content: first };
  } else {
    body.unshift({ type: 'paragraph', content: first });
  }
  return { ...post, body };
}

export function applyBlogRetargets(posts: BlogPost[]): BlogPost[] {
  return posts.map(post => {
    if (KEEP_SLUGS.has(post.slug)) {
      return {
        ...post,
        seoTitle: brandSeoTitle(post.seoTitle) ?? post.seoTitle,
      };
    }
    const overlay = RETARGETS[post.slug];
    if (!overlay) {
      return rewriteRetargetedPost({
        ...post,
        seoTitle: brandSeoTitle(post.seoTitle) ?? post.seoTitle,
      });
    }
    return rewriteRetargetedPost(
      patchFirstParagraph(
        {
          ...post,
          title: overlay.title,
          seoTitle: overlay.seoTitle,
          excerpt: overlay.excerpt,
          relatedServices: overlay.services,
        },
        overlay.first,
      ),
    );
  });
}
