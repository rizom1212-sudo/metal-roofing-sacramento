/** Contextual in-body internal links appended or patched onto live metal cluster posts. */
export interface ClusterLinkEnrichment {
  patchFirstParagraph?: string;
  appendParagraphs?: string[];
}

export const CLUSTER_LINK_ENRICHMENTS: Record<string, ClusterLinkEnrichment> = {
  'metal-roofing-vs-shingles-sacramento': {
    appendParagraphs: [
      'Ready to compare in person? Visit [metal roofing](/metal-roofing) and [residential metal roofing](/residential-metal-roofing). [Metal cost guide](/blog/metal-roofing-cost-sacramento) · [Sacramento climate fit](/blog/metal-roofing-sacramento-climate) · [standing seam](/blog/standing-seam-metal-roofing-sacramento) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'metal-roofing-cost-sacramento': {
    appendParagraphs: [
      'Compare systems on [metal vs shingles](/blog/metal-roofing-vs-shingles-sacramento) and [standing seam](/blog/standing-seam-metal-roofing-sacramento). Schedule via [metal roofing](/metal-roofing) or a [metal roof inspection](/metal-roof-inspection). [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'standing-seam-metal-roofing-sacramento': {
    appendParagraphs: [
      'See [installation process](/blog/metal-roof-installation-process-sacramento) and [metal roofing cost](/blog/metal-roofing-cost-sacramento). Start on [standing seam metal roofing](/standing-seam-metal-roofing) or [metal roof installation](/metal-roof-installation). [Climate guide](/blog/metal-roofing-sacramento-climate) · [Folsom](/service-areas/folsom) · [Contact](/contact).',
    ],
  },
  'metal-roofing-sacramento-climate': {
    appendParagraphs: [
      'Weigh options with [metal vs shingles](/blog/metal-roofing-vs-shingles-sacramento). [Metal roofing services](/metal-roofing) · [metal roof inspection](/metal-roof-inspection) · [metal over shingles](/blog/metal-roof-over-shingles-sacramento). [El Dorado Hills](/service-areas/el-dorado-hills) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'metal-roof-over-shingles-sacramento': {
    appendParagraphs: [
      'Full scope: [metal installation process](/blog/metal-roof-installation-process-sacramento). Plan via [metal roof replacement](/metal-roof-replacement) and [metal roof installation](/metal-roof-installation). [Metal cost](/blog/metal-roofing-cost-sacramento) · [Metal roof inspection](/metal-roof-inspection) · [Contact](/contact).',
    ],
  },
  'metal-roof-installation-process-sacramento': {
    appendParagraphs: [
      'Timeline and prep: [standing seam guide](/blog/standing-seam-metal-roofing-sacramento) · [overlay vs tear-off](/blog/metal-roof-over-shingles-sacramento). [Metal roof installation](/metal-roof-installation) · [metal roof inspection](/metal-roof-inspection) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'how-long-does-standing-seam-metal-roof-last': {
    appendParagraphs: [
      'Compare profiles on [standing seam metal roofing](/standing-seam-metal-roofing). Related: [metal roof repair vs replacement](/blog/metal-roof-repair-vs-replacement) · [metal roofing services](/metal-roofing) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'how-should-a-metal-roof-be-cleaned': {
    appendParagraphs: [
      'PRC 13 does not offer metal roof cleaning. For leaks or damage, request a [metal roof inspection](/metal-roof-inspection) or [metal roof repair](/metal-roof-repair). [Metal roofing hub](/metal-roofing) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
  'metal-roof-repair-vs-replacement': {
    appendParagraphs: [
      'Need a decision on an existing metal roof? Compare [metal roof repair](/metal-roof-repair) and [metal roof replacement](/metal-roof-replacement), or start with a [metal roof inspection](/metal-roof-inspection). [Metal roofing](/metal-roofing) · [Sacramento](/service-areas/sacramento) · [Contact](/contact).',
    ],
  },
};
