import { FOLSOM_CLUSTER_CATEGORY } from './blogFolsomRoofingCluster';
import { EL_DORADO_HILLS_CLUSTER_CATEGORY } from './blogElDoradoHillsRoofingCluster';
import { COLFAX_CLUSTER_CATEGORY } from './blogColfaxHomeHardening';

export interface LocalRoofingHubConfig {
  category: string;
  label: string;
  heading: string;
  intro: string;
}

export const LOCAL_ROOFING_HUBS: Record<string, LocalRoofingHubConfig> = {
  folsom: {
    category: FOLSOM_CLUSTER_CATEGORY,
    label: 'Folsom Roofing Resources',
    heading: 'Guides for Folsom Homeowners',
    intro:
      'Folsom metal roofing guides covering materials, leaks, storm damage, inspection, and replacement context for local homes — before you schedule a metal roof inspection with PRC 13 Roofing.',
  },
  'el-dorado-hills': {
    category: EL_DORADO_HILLS_CLUSTER_CATEGORY,
    label: 'El Dorado Hills Roofing Resources',
    heading: 'Guides for El Dorado Hills Homeowners',
    intro:
      'El Dorado Hills metal roofing, inspection, storm, and insurance-claim guides for foothill homes. Tile-only and fascia articles were retired from this specialist site. PRC 13 does not offer fascia or soffit repair.',
  },
  colfax: {
    category: COLFAX_CLUSTER_CATEGORY,
    label: 'Colfax Roofing Resources',
    heading: 'Guides for Colfax Homeowners',
    intro:
      'Read about the City of Colfax Home Hardening Program, wildfire-minded roofing choices including metal, and how PRC 13 Roofing supports Colfax homeowners with metal roof inspections, repair, and replacement — without confusing City program assistance with contractor offers.',
  },
};
