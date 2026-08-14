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
 'Learn about roof repair, roof replacement, inspections, roof leaks, storm damage, roofing costs, and roofing materials in Folsom, before you schedule service with PRC 13 Roofing.',
  },
  'el-dorado-hills': {
    category: EL_DORADO_HILLS_CLUSTER_CATEGORY,
    label: 'El Dorado Hills Roofing Resources',
    heading: 'Guides for El Dorado Hills Homeowners',
    intro:
      'Explore roof repair, replacement, inspections, tile and metal roofing, emergency leak response, and insurance claims guidance tailored to El Dorado Hills foothill homes. Educational articles may cover fascia damage; PRC 13 does not offer fascia or soffit repair.',
  },
  colfax: {
    category: COLFAX_CLUSTER_CATEGORY,
    label: 'Colfax Roofing Resources',
    heading: 'Guides for Colfax Homeowners',
    intro:
 'Read about the City of Colfax Home Hardening Program, wildfire-minded roofing choices, and how PRC 13 Roofing supports Colfax homeowners with inspections, repair, and replacement, without confusing City program assistance with contractor offers.',
  },
};
