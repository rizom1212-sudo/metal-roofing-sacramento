/** Contextual in-body internal links appended or patched onto cluster blog posts. */
export interface ClusterLinkEnrichment {
  patchFirstParagraph?: string;
  appendParagraphs?: string[];
}

export const CLUSTER_LINK_ENRICHMENTS: Record<string, ClusterLinkEnrichment> = {
  // —— Legacy blog posts ——
  'what-to-do-roof-leak-sacramento-storm': {
    appendParagraphs: [
      'For urgent help, call for [emergency roof repair](/emergency-roof-repair) or see [Sacramento emergency scheduling](/emergency-roof-repair-sacramento). After the storm, read [storm damage repair](/blog/storm-damage-roof-repair-sacramento) and [roof leak repair](/blog/roof-leak-repair-sacramento). [Sacramento](/service-areas/sacramento) · [Roof inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'sacramento-roof-maintenance-checklist': {
    appendParagraphs: [
      'Pair seasonal checks with a [professional roof inspection](/roof-inspection) or [Sacramento inspection page](/roof-inspection-sacramento). See [how often to inspect](/blog/how-often-should-you-inspect-your-roof) and [inspection checklist](/blog/roof-inspection-checklist). [Sacramento service area](/service-areas/sacramento) · [Roof repair](/roof-repair) · [Contact](/contact).',
    ],
  },
  'how-long-does-roof-replacement-take': {
    appendParagraphs: [
      'Planning a project? Start on [roof replacement](/roof-replacement) and [signs you need replacement](/blog/signs-you-need-roof-replacement-sacramento). [Sacramento](/service-areas/sacramento) homeowners also compare [metal vs shingles](/blog/metal-roofing-vs-shingles-sacramento). [Roof inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'signs-you-need-roof-replacement-sacramento': {
    appendParagraphs: [
      'Not sure yet? Schedule a [free roof inspection](/roof-inspection). Compare [roof repair](/roof-repair) vs [roof replacement](/roof-replacement) and read [how long replacement takes](/blog/how-long-does-roof-replacement-take). [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'how-insurance-claims-work-for-roof-damage': {
    appendParagraphs: [
      'Storm-related? See [insurance claims after storms](/blog/roof-insurance-claims-storm-damage) and [emergency roof repair](/emergency-roof-repair). Document damage with a [roof inspection](/roof-inspection). [Sacramento](/service-areas/sacramento) · [Roof repair](/roof-repair) · [Contact](/contact).',
    ],
  },
  'metal-roofing-vs-shingles-sacramento': {
    appendParagraphs: [
      'Ready to compare in person? Visit [metal roofing](/metal-roofing) and [roof replacement](/roof-replacement). [El Dorado Hills metal guide](/blog/metal-roofing-el-dorado-hills-ca) · [Folsom materials](/blog/best-roofing-materials-folsom) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },

  // —— Roof Inspection cluster ——
  'free-roof-inspection-sacramento': {
    patchFirstParagraph:
      'Short answer: a [free roof inspection in Sacramento](/roof-inspection-sacramento) should give you a clear picture of roof condition without a sales pitch. PRC 13 Roofing inspects your roof, walks you through findings on our main [roof inspection service page](/roof-inspection), and explains whether repair, maintenance, or replacement makes sense.',
    appendParagraphs: [
      'Many homeowners in [Sacramento](/service-areas/sacramento) compare our visit with our [homeowner inspection checklist](/blog/roof-inspection-checklist) and [typical inspection costs](/blog/roof-inspection-cost-sacramento). If storm damage is involved, read about [insurance roof inspections](/blog/insurance-roof-inspection-sacramento) before you [contact us](/contact) to schedule.',
    ],
  },
  'roof-inspection-cost-sacramento': {
    appendParagraphs: [
      'Standard inspections with PRC 13 are free on our [roof inspection](/roof-inspection) page. For Sacramento-specific scheduling, see [roof inspection Sacramento](/roof-inspection-sacramento) and the [Sacramento service area](/service-areas/sacramento). Related reading: [what happens during an inspection](/blog/what-happens-during-roof-inspection) and [signs you need one](/blog/signs-you-need-roof-inspection). [Request a visit](/contact) when ready.',
    ],
  },
  'roof-inspection-checklist': {
    appendParagraphs: [
      'When DIY checks raise questions, schedule a [professional roof inspection](/roof-inspection) or our [Sacramento inspection landing page](/roof-inspection-sacramento). After winter storms, pair this list with [post-storm inspection guidance](/blog/roof-inspection-after-storm). [Sacramento homeowners](/service-areas/sacramento) can [book online](/contact) for a free assessment.',
    ],
  },
  'how-often-should-you-inspect-your-roof': {
    appendParagraphs: [
      'Homeowners in [Sacramento](/service-areas/sacramento) often combine this schedule with our [maintenance checklist](/blog/sacramento-roof-maintenance-checklist). When it is time for a pro visit, use [roof inspection services](/roof-inspection) or [schedule in Sacramento](/roof-inspection-sacramento). See also [inspection cost expectations](/blog/roof-inspection-cost-sacramento) and [contact PRC 13](/contact).',
    ],
  },
  'what-happens-during-roof-inspection': {
    appendParagraphs: [
      'Ready to experience this process? Start on our [roof inspection](/roof-inspection) page or the [Sacramento-focused inspection page](/roof-inspection-sacramento). Browse [free inspection details](/blog/free-roof-inspection-sacramento) and [checklist prep](/blog/roof-inspection-checklist). [Sacramento service area](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'insurance-roof-inspection-sacramento': {
    appendParagraphs: [
      'Pair documentation with [emergency roof repair](/emergency-roof-repair) when water is active. Read [storm inspection tips](/blog/roof-inspection-after-storm) and our broader [storm insurance claims guide](/blog/roof-insurance-claims-storm-damage). [Sacramento](/service-areas/sacramento) · [Roof inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'commercial-roof-inspection-sacramento': {
    appendParagraphs: [
      'Residential owners can use the same honest approach on [roof inspection](/roof-inspection). For homes in [Sacramento](/service-areas/sacramento), see [residential inspection scheduling](/roof-inspection-sacramento). Related: [inspection costs](/blog/roof-inspection-cost-sacramento) · [Commercial roofing](/commercial-roofing) · [Contact](/contact).',
    ],
  },
  'roof-inspection-after-storm': {
    appendParagraphs: [
      'If water is entering now, call for [emergency roof repair](/emergency-roof-repair) first. Document damage using [insurance inspection guidance](/blog/insurance-roof-inspection-sacramento). Schedule follow-up on [roof inspection](/roof-inspection) or [Sacramento inspection page](/roof-inspection-sacramento). [Service area](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'signs-you-need-roof-inspection': {
    appendParagraphs: [
      'Noticing several signs? Book a [free roof inspection](/roof-inspection) or [Sacramento scheduling page](/roof-inspection-sacramento). Learn [how often to inspect](/blog/how-often-should-you-inspect-your-roof) and [what the visit includes](/blog/what-happens-during-roof-inspection). [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'roof-inspection-before-buying-home': {
    appendParagraphs: [
      'Buyers in [Sacramento](/service-areas/sacramento) and [El Dorado Hills](/service-areas/el-dorado-hills) benefit from roofer-led assessments beyond the general home report. Compare [inspection costs](/blog/roof-inspection-cost-sacramento) and [our process](/blog/what-happens-during-roof-inspection). [Schedule](/roof-inspection) · [Contact](/contact).',
    ],
  },

  // —— Emergency Roof Repair cluster ——
  'emergency-roof-repair-sacramento-guide': {
    patchFirstParagraph:
      'Short answer: if water is entering your home, call first, contain the leak indoors, and do not climb on the roof. PRC 13 Roofing provides [emergency roof repair](/emergency-roof-repair) across Sacramento with fast assessment—see also our [Sacramento emergency page](/emergency-roof-repair-sacramento).',
    appendParagraphs: [
      'For active leaks, read [roof leak repair in Sacramento](/blog/roof-leak-repair-sacramento) and [when to call an emergency roofer](/blog/when-to-call-emergency-roofer). [Sacramento service area](/service-areas/sacramento) · standard [roof repair](/roof-repair) · [contact PRC 13](/contact).',
    ],
  },
  'roof-leak-repair-sacramento': {
    patchFirstParagraph:
      'Short answer: [roof leak repair in Sacramento](/roof-repair) requires tracing the water path on the roof—not just patching the ceiling. PRC 13 inspects penetrations, valleys, and flashing before recommending a targeted fix or [emergency response](/emergency-roof-repair).',
    appendParagraphs: [
      'Leaks after hours? See [what to do at night](/blog/roof-leak-at-night). Storm-related? Review [storm damage repair](/blog/storm-damage-roof-repair-sacramento) and [tarp guidance](/blog/emergency-roof-tarp-guide). [Sacramento](/service-areas/sacramento) · [Emergency help](/emergency-roof-repair-sacramento) · [Contact](/contact).',
    ],
  },
  'emergency-roof-tarp-guide': {
    appendParagraphs: [
      'After tarping, plan permanent work through [roof repair](/roof-repair) or [emergency roof repair](/emergency-roof-repair). [Sacramento homeowners](/service-areas/sacramento) should review [storm damage repair](/blog/storm-damage-roof-repair-sacramento) and [wind damage fixes](/blog/wind-damage-roof-repair). [Sacramento emergency page](/emergency-roof-repair-sacramento) · [Contact](/contact).',
    ],
  },
  'roof-leak-at-night': {
    appendParagraphs: [
      'When morning comes, schedule [roof repair](/roof-repair) or [emergency roof repair](/emergency-roof-repair). Read [leak repair in Sacramento](/blog/roof-leak-repair-sacramento) and [when to call an emergency roofer](/blog/when-to-call-emergency-roofer). [Sacramento service area](/service-areas/sacramento) · [Emergency Sacramento page](/emergency-roof-repair-sacramento) · [Contact](/contact).',
    ],
  },
  'storm-damage-roof-repair-sacramento': {
    appendParagraphs: [
      'Document damage for [insurance claims after storms](/blog/roof-insurance-claims-storm-damage). Urgent openings may need [emergency roof repair](/emergency-roof-repair) or [Sacramento emergency scheduling](/emergency-roof-repair-sacramento). Ongoing repairs: [roof repair](/roof-repair) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'hail-damage-roof-repair': {
    appendParagraphs: [
      'Sacramento-area hail paths should be inspected alongside [storm damage repair guidance](/blog/storm-damage-roof-repair-sacramento). File claims with help from [roof insurance claims](/blog/roof-insurance-claims-storm-damage). [Emergency roof repair](/emergency-roof-repair) · [Roof repair](/roof-repair) · [Contact](/contact).',
    ],
  },
  'wind-damage-roof-repair': {
    appendParagraphs: [
      'Folsom and [El Dorado Hills](/service-areas/el-dorado-hills) see similar ridge uplift—see [storm damage in Folsom](/blog/storm-damage-roof-repair-folsom) for foothill context. Temporary protection: [emergency tarp guide](/blog/emergency-roof-tarp-guide). [Emergency repair](/emergency-roof-repair) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'emergency-roof-repair-cost': {
    appendParagraphs: [
      'Compare routine pricing on [roof repair](/roof-repair) and [leak repair in Sacramento](/blog/roof-leak-repair-sacramento). Insurance may apply—read [storm damage claims](/blog/roof-insurance-claims-storm-damage). [Emergency services](/emergency-roof-repair) · [Sacramento emergency page](/emergency-roof-repair-sacramento) · [Contact](/contact).',
    ],
  },
  'roof-insurance-claims-storm-damage': {
    appendParagraphs: [
      'Start with [emergency roof repair](/emergency-roof-repair) when water is active. [Sacramento](/service-areas/sacramento) homeowners pair claims with [storm damage repair](/blog/storm-damage-roof-repair-sacramento) and [insurance inspections](/blog/insurance-roof-inspection-sacramento). [Roof repair](/roof-repair) · [Contact](/contact).',
    ],
  },
  'when-to-call-emergency-roofer': {
    appendParagraphs: [
      'For Sacramento-area help, visit [emergency roof repair](/emergency-roof-repair) or [emergency repair Sacramento](/emergency-roof-repair-sacramento). Related: [roof leak at night](/blog/roof-leak-at-night) · [leak repair](/blog/roof-leak-repair-sacramento) · [Sacramento service area](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },

  // —— Folsom hub ——
  'roof-repair-folsom-ca': {
    patchFirstParagraph:
      'Short answer: [roof repair in Folsom](/roof-repair) must account for hillside wind and lake-corridor gusts. PRC 13 Roofing traces leaks on shingle and tile systems throughout [Folsom](/service-areas/folsom) and documents repair scope in writing.',
    appendParagraphs: [
      'Active leak? See [emergency roof repair](/emergency-roof-repair). Compare [tile vs shingles in Folsom](/blog/tile-vs-asphalt-shingles-folsom), [storm damage repair](/blog/storm-damage-roof-repair-folsom), and [roofing costs](/blog/roofing-costs-folsom-ca). [Roof inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'roof-replacement-folsom-ca': {
    appendParagraphs: [
      'Explore materials on [best roofing materials for Folsom](/blog/best-roofing-materials-folsom) and [tile vs shingles](/blog/tile-vs-asphalt-shingles-folsom). Plan via [roof replacement](/roof-replacement) and [Folsom roofing services](/service-areas/folsom). [Roof inspection](/roof-inspection) · [Emergency repair](/emergency-roof-repair) · [Contact](/contact).',
    ],
  },
  'roof-inspection-folsom-ca': {
    appendParagraphs: [
      'Free inspections are listed on [roof inspection](/roof-inspection). Local context: [Folsom service area](/service-areas/folsom). If leaks appear, see [roof leak repair Folsom](/blog/roof-leak-repair-folsom-ca) and [roof repair](/roof-repair). [Replacement planning](/blog/roof-replacement-folsom-ca) · [Contact](/contact).',
    ],
  },
  'roof-leak-repair-folsom-ca': {
    appendParagraphs: [
      'Urgent flow? [Emergency roof repair](/emergency-roof-repair). Broader repair options: [roof repair Folsom](/blog/roof-repair-folsom-ca) and [storm damage](/blog/storm-damage-roof-repair-folsom). [Folsom](/service-areas/folsom) · [Roof replacement](/roof-replacement) · [Contact](/contact).',
    ],
  },
  'storm-damage-roof-repair-folsom': {
    appendParagraphs: [
      'Insurance help: [roof insurance claims](/blog/roof-insurance-claims-storm-damage) (Sacramento-focused process applies region-wide). [Emergency roof repair](/emergency-roof-repair) · [Roof repair](/roof-repair) · [Folsom](/service-areas/folsom) · [Leak repair guide](/blog/roof-leak-repair-folsom-ca) · [Contact](/contact).',
    ],
  },
  'best-roofing-materials-folsom': {
    appendParagraphs: [
      'Deep dive: [tile vs asphalt shingles in Folsom](/blog/tile-vs-asphalt-shingles-folsom). Install via [roof replacement](/roof-replacement) or [metal roofing](/metal-roofing). [Folsom roofing](/service-areas/folsom) · [Inspection](/roof-inspection) · [Costs guide](/blog/roofing-costs-folsom-ca) · [Contact](/contact).',
    ],
  },
  'tile-vs-asphalt-shingles-folsom': {
    appendParagraphs: [
      'Material options: [best roofing materials for Folsom](/blog/best-roofing-materials-folsom). Ready to quote? [Roof replacement](/roof-replacement) and [Folsom service area](/service-areas/folsom). [Roof repair](/roof-repair) · [Inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'roofing-costs-folsom-ca': {
    appendParagraphs: [
      'Understand scope through [roof inspection](/roof-inspection) first. Related Folsom guides: [repair](/blog/roof-repair-folsom-ca) · [replacement](/blog/roof-replacement-folsom-ca) · [materials](/blog/best-roofing-materials-folsom). [Folsom](/service-areas/folsom) · [Emergency repair](/emergency-roof-repair) · [Contact](/contact).',
    ],
  },

  // —— El Dorado Hills hub ——
  'roof-repair-el-dorado-hills-ca': {
    patchFirstParagraph:
      'Short answer: [roof repair](/roof-repair) in [El Dorado Hills](/service-areas/el-dorado-hills) must account for hillside wind and exposed-lot sun. PRC 13 traces leaks on tile, shingle, and metal rooflines and documents scope in writing.',
    appendParagraphs: [
      'See also [fascia repair](/blog/fascia-repair-el-dorado-hills-ca) and [tile roofing](/blog/tile-roofing-el-dorado-hills-ca). Urgent leaks: [emergency roof repair](/emergency-roof-repair). [Roof inspection](/roof-inspection) · [Replacement](/roof-replacement) · [Contact](/contact).',
    ],
  },
  'roof-replacement-el-dorado-hills-ca': {
    appendParagraphs: [
      'Compare [metal roofing El Dorado Hills](/blog/metal-roofing-el-dorado-hills-ca) and [tile roofing](/blog/tile-roofing-el-dorado-hills-ca). Schedule via [roof replacement](/roof-replacement) and [EDH service area](/service-areas/el-dorado-hills). [Roof repair](/roof-repair) · [Inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'roof-inspection-el-dorado-hills-ca': {
    appendParagraphs: [
      'General inspection info: [roof inspection](/roof-inspection). Local hub: [El Dorado Hills](/service-areas/el-dorado-hills). Follow-up guides: [repair](/blog/roof-repair-el-dorado-hills-ca) · [replacement](/blog/roof-replacement-el-dorado-hills-ca) · [insurance claims](/blog/roof-insurance-claims-el-dorado-hills) · [Contact](/contact).',
    ],
  },
  'tile-roofing-el-dorado-hills-ca': {
    appendParagraphs: [
      'Underlayment issues often pair with [fascia repair](/blog/fascia-repair-el-dorado-hills-ca). Full projects: [roof replacement](/roof-replacement). Alternatives: [metal roofing guide](/blog/metal-roofing-el-dorado-hills-ca) and [metal roofing services](/metal-roofing). [EDH](/service-areas/el-dorado-hills) · [Contact](/contact).',
    ],
  },
  'fascia-repair-el-dorado-hills-ca': {
    appendParagraphs: [
      'Fascia work ties to [roof repair](/roof-repair) and [tile roofing](/blog/tile-roofing-el-dorado-hills-ca). [El Dorado Hills](/service-areas/el-dorado-hills) homeowners also review [inspection findings](/blog/roof-inspection-el-dorado-hills-ca). [Emergency repair](/emergency-roof-repair) · [Contact](/contact).',
    ],
  },
  'emergency-roof-repair-el-dorado-hills-ca': {
    appendParagraphs: [
      'Main [emergency roof repair](/emergency-roof-repair) page covers response standards. Permanent fixes: [roof repair EDH](/blog/roof-repair-el-dorado-hills-ca). Claims: [insurance guide](/blog/roof-insurance-claims-el-dorado-hills). [EDH service area](/service-areas/el-dorado-hills) · [Contact](/contact).',
    ],
  },
  'metal-roofing-el-dorado-hills-ca': {
    appendParagraphs: [
      'Install through [metal roofing](/metal-roofing) services. Compare [tile roofing](/blog/tile-roofing-el-dorado-hills-ca) and [replacement planning](/blog/roof-replacement-el-dorado-hills-ca). [El Dorado Hills](/service-areas/el-dorado-hills) · [Roof inspection](/roof-inspection) · [Roof repair](/roof-repair) · [Contact](/contact).',
    ],
  },
  'roof-insurance-claims-el-dorado-hills': {
    appendParagraphs: [
      'Pair claims with [emergency roof repair](/emergency-roof-repair) when needed. [EDH repair guide](/blog/roof-repair-el-dorado-hills-ca) · [inspection documentation](/blog/roof-inspection-el-dorado-hills-ca). [Sacramento-region storm claims article](/blog/roof-insurance-claims-storm-damage) · [EDH](/service-areas/el-dorado-hills) · [Contact](/contact).',
    ],
  },
};
