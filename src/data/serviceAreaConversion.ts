/** Tier 5 conversion copy: inspection CTA + trust messaging per service-area city. */

export interface ServiceAreaConversion {
  inspectionIntro: string;
  trustIntro: string;
}

export const INSPECTION_BENEFITS = [
  'No obligation',
  'Written inspection report',
  'Local roofing expertise',
  'Fast scheduling',
] as const;

export const SERVICE_AREA_FORM_SECTION_ID = 'schedule-inspection';

export const serviceAreaConversion: Record<string, ServiceAreaConversion> = {
  sacramento: {
    inspectionIntro:
      'Sacramento homeowners can schedule a no-obligation roof inspection to identify leaks, storm damage, aging materials, flashing issues, and other roofing concerns before they turn into more expensive repairs.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Sacramento homeowners make informed roofing decisions without pressure or confusing sales tactics.',
  },
  'rancho-cordova': {
    inspectionIntro:
      'Rancho Cordova homeowners can schedule a no-obligation roof inspection to spot leaks, wind damage, aging shingles, flashing failures, and other concerns before small issues spread through attic insulation or ceilings.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Rancho Cordova homeowners understand their options before committing to repair or replacement work.',
  },
  roseville: {
    inspectionIntro:
      'Roseville homeowners can schedule a no-obligation roof inspection to identify leaks, storm damage, aging materials, flashing issues, and foothill wind wear before those problems lead to costlier interior damage.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Roseville homeowners make informed roofing decisions based on what we actually find on the roof.',
  },
  rocklin: {
    inspectionIntro:
      'Rocklin homeowners can schedule a no-obligation roof inspection to catch leaks, wind-lifted shingles, aging materials, flashing problems, and storm damage before they become larger repairs across multiple roof sections.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Rocklin homeowners decide between targeted repair and full replacement with confidence.',
  },
  folsom: {
    inspectionIntro:
      'Folsom homeowners can schedule a no-obligation roof inspection to identify leaks, canyon wind damage, aging materials, flashing issues, and storm-related wear before those concerns turn into more expensive repairs.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Folsom homeowners make practical roofing decisions for lake-area homes and hillside lots alike.',
  },
  'elk-grove': {
    inspectionIntro:
      'Elk Grove homeowners can schedule a no-obligation roof inspection to identify leaks, storm damage, heat-aged materials, flashing failures, and drainage issues before they escalate into bigger repair bills.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Elk Grove homeowners understand whether repair, maintenance, or replacement is the right next step.',
  },
  woodland: {
    inspectionIntro:
      'Woodland homeowners can schedule a no-obligation roof inspection to identify leaks, valley wind damage, aging shingles, flashing issues, and seasonal wear before those problems require more extensive repairs.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Woodland homeowners make informed roofing decisions for both older homes and newer valley neighborhoods.',
  },
  davis: {
    inspectionIntro:
      'Davis homeowners can schedule a no-obligation roof inspection to identify leaks, tree-related damage, aging materials, flashing issues, and storm wear before moisture reaches insulation or interior walls.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Davis homeowners evaluate roof condition with clear findings they can act on at their own pace.',
  },
  orangevale: {
    inspectionIntro:
      'Orangevale homeowners can schedule a no-obligation roof inspection to identify leaks, storm damage, aging materials, flashing failures, and tree-debris issues before they become more expensive repairs.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Orangevale homeowners make informed roofing decisions for tree-lined neighborhoods and creek-corridor properties.',
  },
  'granite-bay': {
    inspectionIntro:
      'Granite Bay homeowners can schedule a no-obligation roof inspection to identify leaks, wind damage, aging tile or shingle systems, flashing issues, and storm impact before problems spread across larger roof sections.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Granite Bay homeowners make informed decisions for custom homes and complex rooflines.',
  },
  'el-dorado-hills': {
    inspectionIntro:
      'El Dorado Hills homeowners can schedule a no-obligation roof inspection to identify leaks, hillside wind damage, aging materials, flashing failures, and storm-related concerns before they lead to costlier repairs.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping El Dorado Hills homeowners understand roof condition on exposed lots and multi-level homes.',
  },
  lincoln: {
    inspectionIntro:
      'Lincoln homeowners can schedule a no-obligation roof inspection to identify leaks, valley wind damage, aging materials, flashing issues, and storm wear before those concerns turn into more expensive repairs.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Lincoln homeowners make informed roofing decisions across newer subdivisions and established neighborhoods.',
  },
  florin: {
    inspectionIntro:
      'Florin homeowners can schedule a no-obligation roof inspection to identify leaks, storm damage, aging shingles, flashing failures, and drainage issues before worn materials lead to more costly repairs.',
    trustIntro:
      'PRC 13 Roofing focuses on honest recommendations, clear communication, and helping Florin homeowners decide when repair still makes sense and when replacement is the more reliable path.',
  },
  colfax: {
    inspectionIntro:
      'Colfax homeowners can schedule a no-obligation roof inspection to identify leaks, storm wear, aging materials, debris-prone gutters, and fire-resistant roofing options before deciding on repair or replacement.',
    trustIntro:
 'PRC 13 Roofing focuses on honest recommendations and clear communication for Colfax homeowners, keeping City of Colfax home-hardening program questions separate from contractor estimates and our Colfax promotional offer.',
  },
};
