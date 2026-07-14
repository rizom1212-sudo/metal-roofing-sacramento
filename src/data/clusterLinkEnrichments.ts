/** Contextual in-body internal links appended or patched onto cluster blog posts. */
export interface ClusterLinkEnrichment {
  patchFirstParagraph?: string;
  appendParagraphs?: string[];
}

export const CLUSTER_LINK_ENRICHMENTS: Record<string, ClusterLinkEnrichment> = {
  // —— Legacy blog posts ——
  'what-to-do-roof-leak-sacramento-storm': {
    appendParagraphs: [
      'For urgent help, call for [emergency roof repair](/emergency-roof-repair). After the storm, read [storm damage repair](/blog/storm-damage-roof-repair-sacramento) and [roof leak repair](/blog/roof-leak-repair-sacramento). [Sacramento](/service-areas/sacramento) · [Roof inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'sacramento-roof-maintenance-checklist': {
    appendParagraphs: [
      'Pair seasonal checks with a [professional roof inspection](/roof-inspection). See [how often to inspect](/blog/how-often-should-you-inspect-your-roof) and [inspection checklist](/blog/roof-inspection-checklist). [Sacramento service area](/service-areas/sacramento) · [Roof repair](/roof-repair) · [Contact](/contact).',
    ],
  },
  'how-long-does-roof-replacement-take': {
    appendParagraphs: [
      'Planning a project? Start on [roof replacement](/roof-replacement). Read [replacement process](/blog/roof-replacement-process-sacramento) and [signs you need replacement](/blog/signs-you-need-roof-replacement-sacramento). [Sacramento](/service-areas/sacramento) · [Roof inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'signs-you-need-roof-replacement-sacramento': {
    appendParagraphs: [
      'Schedule a [free roof inspection](/roof-inspection). Compare [replacement cost](/blog/roof-replacement-cost-sacramento) and [how long replacement takes](/blog/how-long-does-roof-replacement-take). [Roof replacement](/roof-replacement) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'how-insurance-claims-work-for-roof-damage': {
    appendParagraphs: [
      'Storm-related? See [insurance claims after storms](/blog/roof-insurance-claims-storm-damage) and [emergency roof repair](/emergency-roof-repair). Document damage with a [roof inspection](/roof-inspection). [Sacramento](/service-areas/sacramento) · [Roof repair](/roof-repair) · [Contact](/contact).',
    ],
  },
  'metal-roofing-vs-shingles-sacramento': {
    appendParagraphs: [
      'Ready to compare in person? Visit [metal roofing](/metal-roofing) and [roof replacement](/roof-replacement). [Metal cost guide](/blog/metal-roofing-cost-sacramento) · [Sacramento climate fit](/blog/metal-roofing-sacramento-climate) · [standing seam](/blog/standing-seam-metal-roofing-sacramento) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },

  // —— Roof Inspection cluster ——
  'roof-inspection-cost-sacramento': {
    appendParagraphs: [
      'Standard inspections with PRC 13 are free on our [roof inspection](/roof-inspection) page. For Sacramento scheduling, see the [Sacramento service area](/service-areas/sacramento). Related reading: [what happens during an inspection](/blog/what-happens-during-roof-inspection) and [signs you need one](/blog/signs-you-need-roof-inspection). [Request a visit](/contact) when ready.',
    ],
  },
  'roof-inspection-checklist': {
    appendParagraphs: [
      'When DIY checks raise questions, schedule a [professional roof inspection](/roof-inspection). After winter storms, pair this list with [post-storm inspection guidance](/blog/roof-inspection-after-storm). [Sacramento homeowners](/service-areas/sacramento) can [book online](/contact) for a free assessment.',
    ],
  },
  'how-often-should-you-inspect-your-roof': {
    appendParagraphs: [
      'Homeowners in [Sacramento](/service-areas/sacramento) often combine this schedule with our [maintenance checklist](/blog/sacramento-roof-maintenance-checklist). When it is time for a pro visit, use [roof inspection services](/roof-inspection). See also [inspection cost expectations](/blog/roof-inspection-cost-sacramento) and [contact PRC 13](/contact).',
    ],
  },
  'what-happens-during-roof-inspection': {
    appendParagraphs: [
      'Ready to experience this process? Start on our [roof inspection](/roof-inspection) page. Browse [free inspection details](/blog/free-roof-inspection-sacramento) and [checklist prep](/blog/roof-inspection-checklist). [Sacramento service area](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'insurance-roof-inspection-sacramento': {
    appendParagraphs: [
      'Pair documentation with [emergency roof repair](/emergency-roof-repair) when water is active. Read [storm inspection tips](/blog/roof-inspection-after-storm) and our broader [storm insurance claims guide](/blog/roof-insurance-claims-storm-damage). [Sacramento](/service-areas/sacramento) · [Roof inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'commercial-roof-inspection-sacramento': {
    appendParagraphs: [
      'Residential owners can use the same honest approach on [roof inspection](/roof-inspection). For homes in [Sacramento](/service-areas/sacramento). Related: [commercial repair](/blog/commercial-roof-repair-sacramento) · [TPO vs EPDM](/blog/tpo-vs-epdm-commercial-roofing) · [Commercial roofing](/commercial-roofing) · [Contact](/contact).',
    ],
  },
  'roof-inspection-after-storm': {
    appendParagraphs: [
      'If water is entering now, call for [emergency roof repair](/emergency-roof-repair) first. Document damage using [insurance inspection guidance](/blog/insurance-roof-inspection-sacramento). Schedule follow-up on [roof inspection](/roof-inspection). [Service area](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'signs-you-need-roof-inspection': {
    appendParagraphs: [
      'Noticing several signs? Book a [free roof inspection](/roof-inspection). Learn [how often to inspect](/blog/how-often-should-you-inspect-your-roof) and [what the visit includes](/blog/what-happens-during-roof-inspection). [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'roof-inspection-before-buying-home': {
    appendParagraphs: [
      'Buyers in [Sacramento](/service-areas/sacramento) and [El Dorado Hills](/service-areas/el-dorado-hills) benefit from roofer-led assessments beyond the general home report. Compare [inspection costs](/blog/roof-inspection-cost-sacramento) and [our process](/blog/what-happens-during-roof-inspection). [Schedule](/roof-inspection) · [Contact](/contact).',
    ],
  },

  // —— Emergency Roof Repair cluster ——
  'emergency-roof-tarp-guide': {
    appendParagraphs: [
      'After tarping, plan permanent work through [roof repair](/roof-repair) or [emergency roof repair](/emergency-roof-repair). [Sacramento homeowners](/service-areas/sacramento) should review [storm damage repair](/blog/storm-damage-roof-repair-sacramento) and [wind damage fixes](/blog/wind-damage-roof-repair). [Sacramento emergency page](/emergency-roof-repair) · [Contact](/contact).',
    ],
  },
  'roof-leak-at-night': {
    appendParagraphs: [
      'When morning comes, schedule [roof repair](/roof-repair) or [emergency roof repair](/emergency-roof-repair). Read [leak repair in Sacramento](/blog/roof-leak-repair-sacramento) and [when to call an emergency roofer](/blog/when-to-call-emergency-roofer). [Sacramento service area](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'storm-damage-roof-repair-sacramento': {
    appendParagraphs: [
      'Document damage for [insurance claims after storms](/blog/roof-insurance-claims-storm-damage). Urgent openings may need [emergency roof repair](/emergency-roof-repair). Ongoing repairs: [roof repair](/roof-repair) · [missing shingle repair](/blog/missing-shingle-repair-sacramento) · [repair cost guide](/blog/roof-repair-cost-sacramento) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'hail-damage-roof-repair': {
    appendParagraphs: [
      'Sacramento-area hail paths should be inspected alongside [storm damage repair guidance](/blog/storm-damage-roof-repair-sacramento). File claims with help from [roof insurance claims](/blog/roof-insurance-claims-storm-damage). Planned fixes: [roof repair](/roof-repair) · [repair cost](/blog/roof-repair-cost-sacramento) · [missing shingles](/blog/missing-shingle-repair-sacramento) · [Emergency roof repair](/emergency-roof-repair) · [Contact](/contact).',
    ],
  },
  'wind-damage-roof-repair': {
    appendParagraphs: [
      'Folsom and [El Dorado Hills](/service-areas/el-dorado-hills) see similar ridge uplift—see [storm damage in Folsom](/blog/storm-damage-roof-repair-folsom) for foothill context. Temporary protection: [emergency tarp guide](/blog/emergency-roof-tarp-guide). Permanent fixes: [missing shingle repair](/blog/missing-shingle-repair-sacramento) · [roof repair](/roof-repair) · [flashing repair](/blog/roof-flashing-repair-sacramento) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'emergency-roof-repair-cost': {
    appendParagraphs: [
      'Compare routine pricing on [roof repair](/roof-repair) and [leak repair in Sacramento](/blog/roof-leak-repair-sacramento). Insurance may apply—read [storm damage claims](/blog/roof-insurance-claims-storm-damage). [Emergency services](/emergency-roof-repair) · [Contact](/contact).',
    ],
  },
  'when-to-call-emergency-roofer': {
    appendParagraphs: [
      'For Sacramento-area help, visit [emergency roof repair](/emergency-roof-repair). Related: [roof leak at night](/blog/roof-leak-at-night) · [leak repair](/blog/roof-leak-repair-sacramento) · [Sacramento service area](/service-areas/sacramento) · [Contact](/contact).',
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

  // —— Sacramento Roof Replacement cluster ——
  'roof-replacement-cost-sacramento': {
    appendParagraphs: [
      'Compare materials on [shingle vs tile vs metal](/blog/roofing-materials-replacement-sacramento). Schedule via [roof replacement](/roof-replacement). [Free inspection](/roof-inspection) · [Folsom](/service-areas/folsom) · [El Dorado Hills](/service-areas/el-dorado-hills) · [Contact](/contact).',
    ],
  },
  'roofing-materials-replacement-sacramento': {
    appendParagraphs: [
      'Install through [roof replacement](/roof-replacement) or [metal roofing](/metal-roofing). [Replacement cost](/blog/roof-replacement-cost-sacramento) · [EDH replacement](/blog/roof-replacement-el-dorado-hills-ca) · [Folsom replacement](/blog/roof-replacement-folsom-ca) · [Contact](/contact).',
    ],
  },
  'roof-replacement-insurance-sacramento': {
    appendParagraphs: [
      'Active leak? See [emergency roof repair](/emergency-roof-repair). [Storm claims guide](/blog/roof-insurance-claims-storm-damage) · [insurance inspections](/blog/insurance-roof-inspection-sacramento). [Roof replacement](/roof-replacement) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'roof-replacement-process-sacramento': {
    appendParagraphs: [
      'Timeline: [how long replacement takes](/blog/how-long-does-roof-replacement-take). Plan via [roof replacement](/roof-replacement). [Replacement cost](/blog/roof-replacement-cost-sacramento) · [Inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'roof-replacement-financing-sacramento': {
    appendParagraphs: [
      'Understand scope with a [free roof inspection](/roof-inspection). [Replacement cost](/blog/roof-replacement-cost-sacramento) · [material options](/blog/roofing-materials-replacement-sacramento). [Roof replacement](/roof-replacement) · [Sacramento service area](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },

  // —— Metal Roofing cluster ——
  'metal-roofing-cost-sacramento': {
    appendParagraphs: [
      'Compare systems on [metal vs shingles](/blog/metal-roofing-vs-shingles-sacramento) and [standing seam](/blog/standing-seam-metal-roofing-sacramento). Schedule via [metal roofing](/metal-roofing) or [roof inspection](/roof-inspection). [Replacement materials](/blog/roofing-materials-replacement-sacramento) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'standing-seam-metal-roofing-sacramento': {
    appendParagraphs: [
      'See [installation process](/blog/metal-roof-installation-process-sacramento) and [metal roofing cost](/blog/metal-roofing-cost-sacramento). Start on [metal roofing](/metal-roofing) or [roof replacement](/roof-replacement). [Climate guide](/blog/metal-roofing-sacramento-climate) · [Folsom](/service-areas/folsom) · [Contact](/contact).',
    ],
  },
  'metal-roofing-sacramento-climate': {
    appendParagraphs: [
      'Weigh options with [metal vs shingles](/blog/metal-roofing-vs-shingles-sacramento). [Metal roofing services](/metal-roofing) · [roof inspection](/roof-inspection) · [metal over shingles](/blog/metal-roof-over-shingles-sacramento). [El Dorado Hills](/service-areas/el-dorado-hills) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'metal-roof-over-shingles-sacramento': {
    appendParagraphs: [
      'Full scope: [metal installation process](/blog/metal-roof-installation-process-sacramento). Plan via [metal roofing](/metal-roofing) and [roof replacement](/roof-replacement). [Metal cost](/blog/metal-roofing-cost-sacramento) · [Inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'metal-roof-installation-process-sacramento': {
    appendParagraphs: [
      'Timeline and prep: [standing seam guide](/blog/standing-seam-metal-roofing-sacramento) · [overlay vs tear-off](/blog/metal-roof-over-shingles-sacramento). [Metal roofing](/metal-roofing) · [roof inspection](/roof-inspection) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },

  // —— Gutters & Fascia cluster ——
  'gutter-installation-sacramento': {
    appendParagraphs: [
      'Add protection with [gutter guards](/blog/gutter-guards-sacramento). Plan via [gutters & siding](/gutters-siding) and [roof inspection](/roof-inspection). [Replacement cost](/blog/gutter-replacement-cost-sacramento) · [Sacramento](/service-areas/sacramento) · [Folsom](/service-areas/folsom) · [Contact](/contact).',
    ],
  },
  'gutter-replacement-cost-sacramento': {
    appendParagraphs: [
      'Scope your project with [gutter installation](/blog/gutter-installation-sacramento). [Gutters & siding](/gutters-siding) · [fascia repair](/blog/fascia-repair-sacramento) · [roof repair](/roof-repair). [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'gutter-guards-sacramento': {
    appendParagraphs: [
      'Start on [gutters & siding](/gutters-siding). Pair with [gutter installation](/blog/gutter-installation-sacramento) or [gutters and roof leaks](/blog/gutters-and-roof-leaks-sacramento). [Roof inspection](/roof-inspection) · [El Dorado Hills](/service-areas/el-dorado-hills) · [Contact](/contact).',
    ],
  },
  'fascia-repair-sacramento': {
    appendParagraphs: [
      'Active leak? See [emergency roof repair](/emergency-roof-repair). [Roof repair](/roof-repair) · [gutters and leaks](/blog/gutters-and-roof-leaks-sacramento) · [gutters & siding](/gutters-siding). [EDH fascia guide](/blog/fascia-repair-el-dorado-hills-ca) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'gutters-and-roof-leaks-sacramento': {
    appendParagraphs: [
      'Trace the full path with a [roof inspection](/roof-inspection) and [roof repair](/roof-repair). [Fascia repair](/blog/fascia-repair-sacramento) · [gutter installation](/blog/gutter-installation-sacramento) · [gutters & siding](/gutters-siding). [Roof replacement](/roof-replacement) when edges fail with aging shingles · [Contact](/contact).',
    ],
  },

  // —— Commercial Roofing cluster ——
  'commercial-roof-replacement-sacramento': {
    appendParagraphs: [
      'Compare membranes on [TPO vs EPDM](/blog/tpo-vs-epdm-commercial-roofing). Plan via [commercial roofing](/commercial-roofing) and [commercial inspection](/blog/commercial-roof-inspection-sacramento). [Maintenance](/blog/commercial-roof-maintenance-sacramento) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'commercial-roof-repair-sacramento': {
    appendParagraphs: [
      'Active leak? See [commercial leak repair](/blog/commercial-roof-leak-repair-sacramento). [Commercial roofing](/commercial-roofing) · [roof inspection](/roof-inspection) · [roof repair](/roof-repair). [Replacement guide](/blog/commercial-roof-replacement-sacramento) · [Contact](/contact).',
    ],
  },
  'tpo-vs-epdm-commercial-roofing': {
    appendParagraphs: [
      'Install through [commercial roofing](/commercial-roofing). [Replacement](/blog/commercial-roof-replacement-sacramento) · [repair](/blog/commercial-roof-repair-sacramento) · [maintenance](/blog/commercial-roof-maintenance-sacramento). [Commercial inspection](/blog/commercial-roof-inspection-sacramento) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'commercial-roof-maintenance-sacramento': {
    appendParagraphs: [
      'Catch issues early with [commercial repair](/blog/commercial-roof-repair-sacramento). [Commercial roofing](/commercial-roofing) · [roof inspection](/roof-inspection). [Leak repair](/blog/commercial-roof-leak-repair-sacramento) · [TPO vs EPDM](/blog/tpo-vs-epdm-commercial-roofing) · [Contact](/contact).',
    ],
  },
  'commercial-roof-leak-repair-sacramento': {
    appendParagraphs: [
      'Prevent repeat leaks with [commercial maintenance](/blog/commercial-roof-maintenance-sacramento). [Commercial roofing](/commercial-roofing) · [roof repair](/roof-repair) · [commercial repair guide](/blog/commercial-roof-repair-sacramento). [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },

  // —— Sacramento Roof Repair cluster ——
  'roof-repair-cost-sacramento': {
    patchFirstParagraph:
      'Short answer: Sacramento [roof repair](/roof-repair) cost depends on what failed on the roof—not the size of the ceiling stain. PRC 13 inspects shingles, flashing, penetrations, and decking before quoting a targeted fix.',
    appendParagraphs: [
      'Compare scope with [missing shingle repair](/blog/missing-shingle-repair-sacramento) and [flashing repair](/blog/roof-flashing-repair-sacramento). When repair no longer makes sense, review [roof replacement](/roof-replacement). [Free inspection](/roof-inspection) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'roof-flashing-repair-sacramento': {
    appendParagraphs: [
      'Specialized transitions: [chimney flashing](/blog/chimney-flashing-repair-sacramento) · [skylight leaks](/blog/skylight-leak-repair-sacramento). [Roof repair services](/roof-repair) · [Free inspection](/roof-inspection) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'chimney-flashing-repair-sacramento': {
    appendParagraphs: [
      'Broader flashing work: [roof flashing repair](/blog/roof-flashing-repair-sacramento). Tile homes: [tile roof repair](/blog/tile-roof-repair-sacramento). [Roof repair](/roof-repair) · [Roof inspection](/roof-inspection) · [Replacement](/roof-replacement) · [Contact](/contact).',
    ],
  },
  'skylight-leak-repair-sacramento': {
    appendParagraphs: [
      'Active dripping during rain? Call for [emergency roof repair](/emergency-roof-repair). Otherwise plan through [roof repair](/roof-repair). [Flashing repair](/blog/roof-flashing-repair-sacramento) · [Leak repair guide](/blog/roof-leak-repair-sacramento) · [Inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
  'tile-roof-repair-sacramento': {
    appendParagraphs: [
      'Flashing at tile transitions: [chimney flashing](/blog/chimney-flashing-repair-sacramento) · [general flashing repair](/blog/roof-flashing-repair-sacramento). [Roof repair](/roof-repair) · [Replacement cost](/blog/roof-replacement-cost-sacramento) · [Roof inspection](/roof-inspection) · [Contact](/contact).',
    ],
  },
};
