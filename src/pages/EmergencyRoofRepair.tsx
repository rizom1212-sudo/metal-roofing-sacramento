import ServicePageTemplate from '../components/ServicePageTemplate';
import { ASSETS } from '../data/assets';
import { blogPosts } from '../data/blog';
import { EMERGENCY_CLUSTER_CATEGORY } from '../data/blogEmergencyRoofRepairCluster';

const emergencyResources = blogPosts.filter(post => post.category === EMERGENCY_CLUSTER_CATEGORY);

export default function EmergencyRoofRepair() {
  return (
    <ServicePageTemplate
      badge="Same-Day Response Available"
      headline="Emergency Roof Repair"
      headlineAccent="We'll Get There Fast"
      subheadline="Active leak? Storm damage? Don't wait. PRC 13 Roofing responds quickly to Sacramento area roofing emergencies, with same-day assessment available for urgent situations."
      heroImage={ASSETS.emergencyRepair('emergency-roof-hero.webp')}
      heroAlt="Emergency roof repair response after storm damage in Sacramento"
      trustBarItems={[
        'Fast Response, Call Now',
        'Same-Day Assessment Available',
        'Storm Damage Documentation',
        'Licensed & Insured',
      ]}
      answerSummary="If your Sacramento-area roof is actively leaking, call first, contain the water indoors, and avoid climbing onto the roof. PRC 13 Roofing can assess urgent leaks, provide temporary stabilization when appropriate, and document storm damage for repair planning or insurance."
      answerPoints={[
        'Active leaks and storm damage prioritized',
        'Temporary weatherproofing available when needed',
        'Repair scope explained before work starts',
        'Sacramento-area emergency roof help',
      ]}
      introHeading="Fast Response When It Matters Most"
      introParagraphs={[
        "A roof leak that isn't addressed immediately can cause water damage to spread rapidly through your insulation, drywall, and even structural framing. When your roof is failing, speed matters.",
        "PRC 13 Roofing serves the Sacramento area with fast response times for urgent roof repairs. We prioritize emergency calls and work to get someone to your home quickly to assess and stabilize the situation.",
      ]}
      introChecklist={[
        'Active leaks assessed and stabilized quickly',
        'Temporary weatherproofing available when needed',
        'Full written assessment and repair scope provided',
        'Insurance documentation for storm-related claims',
      ]}
      introImage={ASSETS.emergencyRepair('6998f81bd83aec69908449bf.jpg')}
      introImageAlt="Emergency roof repair in progress"
      introImageClassName="h-[430px]"
      benefitsHeading="Why Homeowners Call PRC 13 First"
      features={[
        { title: 'Fast Assessment', desc: 'We prioritize emergency calls and get to your home quickly to evaluate the damage.' },
        { title: 'Temporary Stabilization', desc: 'When needed, we can provide emergency weatherproofing to stop active leaks while a full repair is planned.' },
        { title: 'Honest Diagnosis', desc: 'We tell you exactly what caused the problem and what it will take to fix it properly.' },
        { title: 'Insurance Support', desc: 'We document all storm damage thoroughly for your insurance claim.' },
        { title: 'Full Repair Capability', desc: 'We follow through from emergency stabilization to complete, permanent repair.' },
        { title: 'No Surprise Charges', desc: 'Written estimate before any work begins. No emergency surcharges that double your bill.' },
      ]}
      galleryHeading="Roof Repair Work in Sacramento"
      galleryCategory="Roof Repairs"
      faqHeading="Emergency Roof Repair FAQs"
      faqs={[
        {
          question: 'How fast can you respond to an emergency roof leak?',
          answer: 'Call us directly at 916-761-3866. We prioritize emergency situations and work to get someone to your home as quickly as possible. Same-day assessment is often available.',
        },
        {
          question: 'What should I do while waiting for the repair crew?',
          answer: 'If safe to do so, place buckets to catch water and move valuables away from affected areas. Do not go on the roof yourself. Call us and we\'ll guide you through immediate steps.',
        },
        {
          question: 'Will you do a temporary fix or a permanent repair?',
          answer: 'We assess what\'s needed and give you the options. Sometimes a temporary weatherproof patch is the right first step. We always follow through with a permanent solution and give you a clear written scope.',
        },
        {
          question: 'Does homeowner\'s insurance cover emergency roof repairs?',
          answer: 'Storm damage is typically covered under homeowner\'s insurance. We document the damage thoroughly so your claim is as strong as possible.',
        },
        {
          question: 'What counts as a roof emergency?',
          answer: 'Active leaks with water entering the home, visible structural damage from a fallen tree or severe wind, or large sections of missing shingles exposing the decking all warrant emergency attention.',
        },
      ]}
      ctaHeading="Call Now for Emergency Roof Help"
      ctaSubtext="If your roof is leaking or you have active storm damage, call us directly. We respond quickly to Sacramento area roof emergencies."
      ctaChecklist={[
        'Fast response for active leaks',
        'Same-day assessment often available',
        'Written estimate before work begins',
        'Insurance claim support available',
      ]}
      sourcePage="emergency-roof-repair"
      sacramentoGuide={{
        href: '/emergency-roof-repair-sacramento',
        label: 'View our Sacramento emergency roof repair page',
      }}
      resourceSectionHeading="Emergency Roof Repair Resources"
      resourceSectionIntro="Homeowners across Sacramento use these guides to understand roof leaks, storm and wind damage, emergency tarping, repair costs, insurance claims after storms, and when to call an emergency roofer—before reaching out for help."
      resourceGuides={emergencyResources}
    />
  );
}
