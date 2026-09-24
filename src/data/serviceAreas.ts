import { metalCityOverlays, metalCityServices, metalEducationalSections, metalExtraSections } from './metalCityContent.ts';
import { rewriteHireLanguage } from '../lib/metalizeRetargetedCopy';
import { rewriteLinksInUnknownValue } from '../lib/rewritePublicLinks';
import { type ServiceAreaLocalAuthority, serviceAreaLocalAuthority } from './serviceAreaLocalAuthority.ts';
import { type ServiceAreaConversion, serviceAreaConversion } from './serviceAreaConversion.ts';
import {
  serviceAreaFeaturedPrograms,
  type ServiceAreaFeaturedProgram,
} from './serviceAreaFeaturedPrograms.ts';

export interface ServiceAreaEducationalSection {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

interface ServiceAreaBase {
  name: string;
  slug: string;
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  /** Optional H1 lead text before the city name (default: "Metal Roofing in"). */
  heroLead?: string;
  quickAnswer: string;
  quickPoints: string[];
  localHeading: string;
  localContent: string;
  localSignals: string[];
  services: {
    title: string;
    href: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: string;
}

export type ServiceArea = ServiceAreaBase &
  ReturnType<typeof metalExtraSections> &
  ServiceAreaLocalAuthority &
  ServiceAreaConversion & {
    educationalSection?: ServiceAreaEducationalSection;
    featuredProgram?: ServiceAreaFeaturedProgram;
  };

const rawServiceAreas: { name: string; slug: string }[] = [
  { name: 'Sacramento', slug: 'sacramento' },
  { name: 'Rancho Cordova', slug: 'rancho-cordova' },
  { name: 'Roseville', slug: 'roseville' },
  { name: 'Rocklin', slug: 'rocklin' },
  { name: 'Folsom', slug: 'folsom' },
  { name: 'Elk Grove', slug: 'elk-grove' },
  { name: 'Woodland', slug: 'woodland' },
  { name: 'Davis', slug: 'davis' },
  { name: 'Orangevale', slug: 'orangevale' },
  { name: 'Granite Bay', slug: 'granite-bay' },
  { name: 'El Dorado Hills', slug: 'el-dorado-hills' },
  { name: 'Lincoln', slug: 'lincoln' },
  { name: 'Florin', slug: 'florin' },
  { name: 'Colfax', slug: 'colfax' },
];

function metalizeAuthority(authority: ServiceAreaLocalAuthority): ServiceAreaLocalAuthority {
  const metalize = (text: string) =>
    text
      .replace(
        /roof repair, inspections, replacements, and emergency roofing services/gi,
        'metal roof inspection, repair, and replacement',
      )
      .replace(/emergency roofing services/gi, 'metal roofing services');
  return {
    ...authority,
    nearbyAreasIntro: metalize(authority.nearbyAreasIntro),
    landmarksIntro: metalize(authority.landmarksIntro),
  };
}

function metalizeConversion(conversion: ServiceAreaConversion): ServiceAreaConversion {
  return {
    inspectionIntro: rewriteHireLanguage(conversion.inspectionIntro, 'inspection'),
    trustIntro: rewriteHireLanguage(conversion.trustIntro, 'general'),
  };
}

export const serviceAreas: ServiceArea[] = rawServiceAreas.map(area => {
  const overlay = metalCityOverlays[area.slug];
  if (!overlay) {
    throw new Error(`Missing metal city overlay for ${area.slug}`);
  }
  const merged: ServiceArea = {
    name: area.name,
    slug: area.slug,
    ...overlay,
    services: metalCityServices(area.name),
    ...metalExtraSections(area.name, area.slug),
    ...metalizeAuthority(serviceAreaLocalAuthority[area.slug]),
    ...metalizeConversion(serviceAreaConversion[area.slug]),
    educationalSection: metalEducationalSections[area.slug],
    ...(serviceAreaFeaturedPrograms[area.slug]
      ? { featuredProgram: serviceAreaFeaturedPrograms[area.slug] }
      : {}),
  };
  return rewriteLinksInUnknownValue(merged);
});

export const serviceAreaNames = serviceAreas.map(a => a.name);
