export interface ServiceArea {
  name: string;
  slug: string;
  blurb: string;
}

export const serviceAreas: ServiceArea[] = [
  { name: 'Sacramento', slug: 'sacramento', blurb: 'Our home base for fast inspections across Sacramento neighborhoods where summer heat, older roof decking, and winter rain can expose leaks quickly.' },
  { name: 'Rancho Cordova', slug: 'rancho-cordova', blurb: 'Roof repair and replacement for Rancho Cordova homeowners, including storm leak checks, shingle repairs, and full reroofs with clear written quotes.' },
  { name: 'Roseville', slug: 'roseville', blurb: 'Serving Roseville homes with honest roof inspections, replacement planning, and heat-ready roofing options for long Sacramento Valley summers.' },
  { name: 'Rocklin', slug: 'rocklin', blurb: 'Rocklin roof replacements and leak repairs for tile, shingle, and metal roofs, with practical guidance on repair versus replacement.' },
  { name: 'Folsom', slug: 'folsom', blurb: 'Folsom residential roofing for repair, replacement, inspections, and metal roofing options on homes exposed to heat, wind, and seasonal rain.' },
  { name: 'Elk Grove', slug: 'elk-grove', blurb: 'Elk Grove homeowners can schedule free roof inspections quickly for leaks, storm damage, aging shingles, and full replacement estimates.' },
  { name: 'Woodland', slug: 'woodland', blurb: 'Woodland area roof repair and full replacements, including practical help for older homes, storm damage documentation, and maintenance concerns.' },
  { name: 'Davis', slug: 'davis', blurb: 'Davis homes benefit from inspections, repairs, and reroofs with a focus on honest assessments, roof ventilation, and long-term material performance.' },
  { name: 'Orangevale', slug: 'orangevale', blurb: 'Orangevale roofing projects with clear written quotes for leak repairs, aging shingle roofs, gutter concerns, and replacement planning.' },
  { name: 'Granite Bay', slug: 'granite-bay', blurb: 'Granite Bay roof replacement and storm damage help, including premium material options, metal roofing, and detailed project walkthroughs.' },
  { name: 'El Dorado Hills', slug: 'el-dorado-hills', blurb: 'El Dorado Hills roofing with financing available on qualifying projects, including inspections for wind exposure, heat wear, and storm-related damage.' },
  { name: 'Lincoln', slug: 'lincoln', blurb: 'Lincoln area homeowners can call for same-week inspections, roof repair estimates, replacement planning, and maintenance guidance.' },
  { name: 'Florin', slug: 'florin', blurb: 'Florin and nearby communities served by PRC 13 for roof leaks, free inspections, repairs, replacements, gutters, and exterior protection.' },
];

export const serviceAreaNames = serviceAreas.map(a => a.name);
