import ServicePageTemplate from '../components/ServicePageTemplate';
import { ASSETS } from '../data/assets';
import { blogPosts } from '../data/blog';
import { EMERGENCY_HUB_RESOURCE_SLUGS, SERVICE_HUB_RESOURCE_LIMIT } from '../data/internalLinking';
import { PHONE_DISPLAY } from '../data/site';

const emergencyResources = EMERGENCY_HUB_RESOURCE_SLUGS
  .map(slug => blogPosts.find(post => post.slug === slug))
  .filter((post): post is (typeof blogPosts)[number] => Boolean(post))
  .slice(0, SERVICE_HUB_RESOURCE_LIMIT);

export default function EmergencyRoofRepair() {
  return (
    <ServicePageTemplate
      badge="Priority Leak Response"
      headline="Emergency Roof Repair"
      headlineAccent="Call When Water Is Entering"
      subheadline="Emergency roof repair in Sacramento, California for active roof leaks, water intrusion, storm damage, and missing shingles. Call PRC 13 Roofing for a fast assessment when water is entering the home."
      heroImage={ASSETS.emergencyRepair('emergency-roof-hero.webp')}
      heroAlt="Emergency roof repair response after storm damage in Sacramento"
      trustBarItems={[
        'Active Leaks Prioritized',
        'Temporary Dry-In When Needed',
        'Storm Damage Documentation',
        'Licensed & Insured',
      ]}
      answerSummary="If your Sacramento-area roof is actively leaking, call first, contain the water indoors, and avoid climbing onto the roof. PRC 13 Roofing can assess urgent leaks, provide temporary stabilization when appropriate, and document storm damage for repair planning or insurance. Response timing depends on weather, routing, and crew capacity—same-day assessment is often possible but not guaranteed."
      answerPoints={[
        'Active leaks and storm damage prioritized',
        'Temporary weatherproofing when conditions allow',
        'Repair scope explained before permanent work',
        'Sacramento-area emergency roof help',
      ]}
      introHeading="What Happens in a Roof Emergency"
      introParagraphs={[
        'A roof leak that keeps running can push water into insulation, drywall, and framing. Speed matters, but so does a clear plan: stop active intrusion when possible, document the damage, then complete a permanent repair.',
        `PRC 13 Roofing provides emergency roof repair in Sacramento, California for active roof leaks, water intrusion, and storm damage. Call ${PHONE_DISPLAY} during or outside posted business hours for urgent leaks—we prioritize these calls and aim to assess quickly when crews can route safely.`,
      ]}
      introChecklist={[
        'Active leaks assessed and stabilized when conditions allow',
        'Temporary weatherproofing available when needed',
        'Written assessment and repair scope before permanent work',
        'Insurance documentation for storm-related claims',
      ]}
      introImage={ASSETS.emergencyRepair('6998f81bd83aec69908449bf.jpg')}
      introImageAlt="Emergency roof repair in progress"
      introImageClassName="h-[430px]"
      benefitsHeading="Why Homeowners Call PRC 13 First"
      features={[
        { title: 'Prioritized Assessment', desc: 'We prioritize emergency calls and work to evaluate active leaks as quickly as weather and routing allow.' },
        { title: 'Temporary Stabilization', desc: 'When needed, we can provide emergency weatherproofing (temporary dry-in) to slow water while a permanent repair is planned.' },
        { title: 'Honest Diagnosis', desc: 'We explain what failed, what temporary protection does, and what permanent repair or replacement comes next.' },
        { title: 'Insurance Support', desc: 'We document visible storm damage to support your claim. Coverage decisions remain with your insurer.' },
        { title: 'Follow-Through Repair', desc: 'Temporary dry-in is not the finish line—we plan the permanent repair once the home is protected.' },
        { title: 'Written Scope', desc: 'You get a written estimate before permanent work begins. No surprise emergency surcharge language on the estimate.' },
      ]}
      galleryHeading="Roof Repair Work in Sacramento"
      galleryCategory="Roof Repairs"
      faqHeading="Emergency Roof Repair FAQs"
      faqs={[
        {
          question: 'What counts as a roof emergency?',
          answer: 'Active leaks with water entering the home, large sections of missing shingles exposing the decking, or storm openings that will keep wetting the structure all warrant emergency attention. A stained ceiling with no active drip may still need prompt inspection, but it is not always the same urgency as water pouring in.',
        },
        {
          question: 'How fast can you respond to an emergency roof leak?',
          answer: `Call ${PHONE_DISPLAY}. We prioritize active leaks and aim to assess as quickly as weather, traffic, and crew capacity allow. Same-day assessment is often possible, especially during business hours, but it is not a guaranteed arrival window.`,
        },
        {
          question: 'What does temporary dry-in mean?',
          answer: 'Temporary dry-in (sometimes called emergency tarping or weatherproofing) is a short-term measure to slow water intrusion after storm damage or an active leak. It protects the home while materials are ordered or a permanent repair is scheduled. It is not the same as a finished repair.',
        },
        {
          question: 'What happens after temporary protection?',
          answer: 'After the home is stabilized, PRC 13 documents the damage, explains permanent repair options, and schedules the lasting fix when materials and weather allow. Leaving temporary covering in place indefinitely is not the goal.',
        },
        {
          question: 'What should I do while waiting for help?',
          answer: 'If safe to do so, place buckets to catch water and move valuables away from affected areas. Do not climb onto the roof yourself. Call us and we will guide you through immediate indoor steps.',
        },
        {
          question: 'Does homeowner’s insurance cover emergency roof repairs?',
          answer: 'Storm damage is often covered under homeowner policies, but coverage depends on your policy and the cause of damage. We document visible damage thoroughly; your insurer decides what is paid.',
        },
        {
          question: 'Do you only respond during business hours?',
          answer: 'Normal business hours are Monday–Friday. For active leaks, call anytime—we prioritize urgent water intrusion and respond as capacity allows. Weekend or after-hours timing depends on conditions and crew availability.',
        },
      ]}
      ctaHeading="Call Now for Emergency Roof Help"
      ctaSubtext="If your roof is leaking or you have active storm damage, call us directly. We prioritize Sacramento-area roof emergencies and aim to assess quickly."
      ctaChecklist={[
        'Active leaks prioritized',
        'Same-day assessment often possible—not guaranteed',
        'Written estimate before permanent work',
        'Insurance documentation support',
      ]}
      sourcePage="emergency-roof-repair"
      sacramentoGuide={{
        href: '/service-areas/sacramento',
        label: 'View our Sacramento service area page',
      }}
      resourceSectionHeading="Emergency Roof Repair Resources"
      resourceSectionIntro="Homeowners across Sacramento use these guides to understand roof leaks, storm and wind damage, emergency tarping, repair costs, insurance claims after storms, and when to call an emergency roofer—before reaching out for help."
      resourceGuides={emergencyResources}
      contextualLinkParagraphs={[
        'We serve [Sacramento](/service-areas/sacramento), [Folsom](/service-areas/folsom), and [El Dorado Hills](/service-areas/el-dorado-hills). City-specific emergency help: [Granite Bay](/emergency-roof-repair/granite-bay), [Orangevale](/emergency-roof-repair/orangevale), and [Folsom emergency roof repair](/emergency-roof-repair/folsom). For non-urgent issues, see [roof repair](/roof-repair) or schedule a [roof inspection](/roof-inspection). Popular guides: [roof leak repair](/blog/roof-leak-repair-sacramento), [storm damage repair](/blog/storm-damage-roof-repair-sacramento), and [emergency tarping](/blog/emergency-roof-tarp-guide). [Contact us](/contact) anytime.',
      ]}
    />
  );
}
