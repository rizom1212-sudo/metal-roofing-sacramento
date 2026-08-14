/** Tier 4 local authority: nearby neighborhoods + landmarks per service-area city. */

export interface ServiceAreaLocalAuthority {
  nearbyAreasIntro: string;
  nearbyAreas: string[];
  landmarksIntro: string;
  landmarks: string[];
}

export const serviceAreaLocalAuthority: Record<string, ServiceAreaLocalAuthority> = {
  sacramento: {
    nearbyAreasIntro:
      'PRC 13 Roofing serves homeowners throughout Sacramento and the surrounding communities below. Whether you live in an older in-town neighborhood or a newer suburban tract, we provide the same thorough inspections and clear repair guidance.',
    nearbyAreas: [
      'East Sacramento',
      'Land Park',
      'Midtown',
      'Natomas',
      'Curtis Park',
      'Tahoe Park',
      'Pocket-Greenhaven',
      'Del Paso Heights',
    ],
    landmarksIntro:
      'From homes near the American River Parkway to properties around William Land Park and Sacramento State, PRC 13 Roofing provides roof repair, inspections, replacements, and emergency roofing services for homeowners located near these landmarks and surrounding neighborhoods.',
    landmarks: [
      'American River Parkway',
      'William Land Park',
      'Sutter\'s Fort State Historic Park',
      'Sacramento State University',
      'Old Sacramento Waterfront',
    ],
  },
  'rancho-cordova': {
    nearbyAreasIntro:
      'PRC 13 Roofing helps homeowners across Rancho Cordova and the nearby communities listed here. Each area has its own mix of roof ages and exposure, and we tailor inspections to what we see on your street.',
    nearbyAreas: [
      'Anatolia',
      'Sunridge Park',
      'Stone Creek',
      'Mather',
      'Cordova Meadows',
      'Lincoln Village',
    ],
    landmarksIntro:
      'Homeowners near the American River Parkway, Mather Regional Park, and other Rancho Cordova destinations rely on PRC 13 Roofing for roof repair, inspections, replacements, and emergency roofing services throughout the surrounding neighborhoods.',
    landmarks: [
      'American River Parkway',
      'Mather Regional Park',
      'Sacramento State Aquatic Center',
      'Hagan Community Park',
    ],
  },
  roseville: {
    nearbyAreasIntro:
      'PRC 13 Roofing serves Roseville homeowners in established neighborhoods and newer developments alike. The communities below are all within our regular service area for inspections, repairs, and replacements.',
    nearbyAreas: [
      'West Roseville',
      'Fiddyment Farm',
      'Sun City Roseville',
      'Diamond Oaks',
      'Junction West',
      'Woodcreek',
      'Highland Reserve',
    ],
    landmarksIntro:
      'Whether your home sits near Maidu Regional Park, the Roseville Galleria, or along the Miners Ravine Trail, PRC 13 Roofing provides roof repair, inspections, replacements, and emergency roofing services for homeowners in those areas and nearby streets.',
    landmarks: [
      'Maidu Regional Park',
      'Roseville Galleria',
      'Miners Ravine Trail',
      'Golfland Sunsplash',
      'Civic Center Park',
    ],
  },
  rocklin: {
    nearbyAreasIntro:
      'PRC 13 Roofing works with homeowners throughout Rocklin and the foothill communities listed below. Wind exposure and roof age vary by subdivision, and we account for both during every inspection.',
    nearbyAreas: [
      'Whitney Ranch',
      'Stanford Ranch',
      'Clover Valley',
      'Sunset Whitney',
      'Springfield',
      'Rock Creek',
    ],
    landmarksIntro:
      'From neighborhoods near Quarry Park Adventures and Sierra College to homes along the Whitney Oaks corridor, PRC 13 Roofing provides roof repair, inspections, replacements, and emergency roofing services for homeowners near these landmarks and surrounding areas.',
    landmarks: [
      'Quarry Park Adventures',
      'Sierra College',
      'Whitney Oaks Golf Club',
      'Johnson-Springview Park',
      'Twin Oaks Community Park',
    ],
  },
  folsom: {
    nearbyAreasIntro:
      'PRC 13 Roofing serves homeowners across Folsom and the communities below. Lake-area winds, canyon exposure, and varied roof styles are common across these neighborhoods, and we inspect with those conditions in mind.',
    nearbyAreas: [
      'Empire Ranch',
      'Broadstone',
      'Prairie Oaks',
      'American River Canyon',
      'Willow Creek',
      'Briggs Ranch',
    ],
    landmarksIntro:
      'Homeowners near Folsom Lake, Historic Folsom, and the Johnny Cash Trail depend on PRC 13 Roofing for roof repair, inspections, replacements, and emergency roofing services throughout the neighborhoods that surround these well-known destinations.',
    landmarks: [
      'Folsom Lake',
      'Historic Folsom',
      'Folsom Premium Outlets',
      'Johnny Cash Trail',
      'Negro Bar State Recreation Area',
    ],
  },
  'elk-grove': {
    nearbyAreasIntro:
      'PRC 13 Roofing helps Elk Grove homeowners in both older sections and newer master-planned communities. The neighborhoods below are all areas we visit regularly for inspections, leak repairs, and replacement estimates.',
    nearbyAreas: [
      'Laguna',
      'Stone Lake',
      'Old Elk Grove',
      'Sheldon',
      'Stonelake',
      'Camden',
      'East Franklin',
    ],
    landmarksIntro:
      'From homes near Elk Grove Regional Park and the Laguna Creek Sports Complex to properties along the Elk Grove Promenade corridor, PRC 13 Roofing provides roof repair, inspections, replacements, and emergency roofing services for surrounding neighborhoods.',
    landmarks: [
      'Elk Grove Regional Park',
      'Laguna Creek Sports Complex',
      'Elk Grove Promenade',
      'Cosumnes Community Services District area',
    ],
  },
  woodland: {
    nearbyAreasIntro:
      'PRC 13 Roofing serves Woodland homeowners across the valley neighborhoods and districts listed here. Agricultural dust, valley winds, and seasonal rain all affect roofs differently depending on where you live in town.',
    nearbyAreas: [
      'Downtown Woodland',
      'Spring Lake',
      'Beamer Park',
      'College Heights',
      'Gibson Ranch area',
      'Pioneer',
    ],
    landmarksIntro:
      'Whether you live near Woodland City Park, the Yolo County Fairgrounds, or Gibson Ranch Regional Park, PRC 13 Roofing provides roof repair, inspections, replacements, and emergency roofing services for homeowners in those areas and nearby streets.',
    landmarks: [
      'Woodland City Park',
      'Yolo County Fairgrounds',
      'Gibson Ranch Regional Park',
      'Heidrick Ag History Center',
      'Woodland Opera House',
    ],
  },
  davis: {
    nearbyAreasIntro:
      'PRC 13 Roofing works with homeowners throughout Davis and the communities below. Tree canopy, older bungalows, and newer infill homes each bring different roofing concerns, and we address them during every visit.',
    nearbyAreas: [
      'North Davis',
      'South Davis',
      'Wildhorse',
      'El Macero',
      'Covell Farms',
      'Senda Nueva',
      'Mace Ranch',
    ],
    landmarksIntro:
      'Homeowners near the UC Davis Arboretum, Central Park Farmers Market, and Putah Creek Parkway turn to PRC 13 Roofing for roof repair, inspections, replacements, and emergency roofing services throughout Davis and surrounding neighborhoods.',
    landmarks: [
      'UC Davis Arboretum',
      'Central Park Davis Farmers Market',
      'Davis Commons',
      'Putah Creek Parkway',
      'Community Park',
    ],
  },
  orangevale: {
    nearbyAreasIntro:
      'PRC 13 Roofing serves Orangevale homeowners in tree-lined neighborhoods and along the Greenback Lane corridor. The communities below are all within our regular Sacramento-area service footprint.',
    nearbyAreas: [
      'Almond Ranch',
      'Madison Square',
      'Chestnut Ridge',
      'Pershing Park area',
      'Greenback Lane corridor',
      'Filbert Road area',
    ],
    landmarksIntro:
      'From properties near Rusch Community Park and Almond Glen Park to homes along the American River access at Hazel Avenue, PRC 13 Roofing provides roof repair, inspections, replacements, and emergency roofing services for surrounding Orangevale neighborhoods.',
    landmarks: [
      'Rusch Community Park',
      'Almond Glen Park',
      'Orangevale Community Center',
      'American River at Hazel Avenue',
      'Filbert Road Park',
    ],
  },
  'granite-bay': {
    nearbyAreasIntro:
      'PRC 13 Roofing helps homeowners across Granite Bay and the custom-home communities listed below. Larger rooflines, tile systems, and lake-area wind exposure are common themes we see in these neighborhoods.',
    nearbyAreas: [
      'Douglas Ranch',
      'Los Lagos',
      'Olympus Pointe',
      'Barton area',
      'Granite Bay Hills',
      'Folsom Lake Estates',
    ],
    landmarksIntro:
      'Homeowners near Folsom Lake, Granite Bay Golf Club, and Douglas Ranch Park rely on PRC 13 Roofing for roof repair, inspections, replacements, and emergency roofing services throughout the surrounding neighborhoods and hillside lots.',
    landmarks: [
      'Folsom Lake north shore',
      'Granite Bay Golf Club',
      'Douglas Ranch Park',
      'Auburn Lake Trails trailheads',
      'Folsom Lake College Granite Bay center',
    ],
  },
  'el-dorado-hills': {
    nearbyAreasIntro:
      'PRC 13 Roofing serves El Dorado Hills homeowners in hillside neighborhoods and planned communities across the area. Open-lot wind exposure and multi-level rooflines are common in the communities below.',
    nearbyAreas: [
      'Serrano',
      'Town Center',
      'Crown Village',
      'Ridgeview',
      'Corte Bella',
      'Marina Hills',
    ],
    landmarksIntro:
      'Whether your home is near El Dorado Hills Town Center, the Serrano Visitor Center, or Lake Forest Park, PRC 13 Roofing provides roof repair, inspections, replacements, and emergency roofing services for homeowners in those areas and nearby subdivisions.',
    landmarks: [
      'El Dorado Hills Town Center',
      'Serrano Visitor Center',
      'Lake Forest Park',
      'New York Creek Regional Trail',
      'Silva Valley Parkway corridor',
    ],
  },
  lincoln: {
    nearbyAreasIntro:
      'PRC 13 Roofing works with homeowners throughout Lincoln and the growing communities listed here. Valley winds, newer subdivisions, and rural-edge properties each present different roofing needs we address during inspections.',
    nearbyAreas: [
      'Twelve Bridges',
      'Sun City Lincoln',
      'Lincoln Crossing',
      'Village 1',
      'Village 7',
      'Joiner Parkway corridor',
    ],
    landmarksIntro:
      'From neighborhoods near McBean Park and Twelve Bridges Park to homes along the Lincoln Hills golf corridor, PRC 13 Roofing provides roof repair, inspections, replacements, and emergency roofing services for surrounding Lincoln communities.',
    landmarks: [
      'McBean Park',
      'Twelve Bridges Park',
      'Lincoln Hills Golf Club',
      'Turkey Creek Golf Club',
      'Lincoln High School area',
    ],
  },
  florin: {
    nearbyAreasIntro:
      'PRC 13 Roofing serves Florin homeowners in established neighborhoods with older roof systems and mature landscaping. The communities below are all areas where we regularly perform inspections, repairs, and replacement estimates.',
    nearbyAreas: [
      'Florin Creek',
      'Parkway',
      'Vineyard',
      'North Franklin',
      'Mills Ranch',
      'Valley Hi adjacent',
    ],
    landmarksIntro:
      'Homeowners near the Florin Road shopping corridor, Valley Hi Park, and Morrison Creek area depend on PRC 13 Roofing for roof repair, inspections, replacements, and emergency roofing services throughout Florin and surrounding neighborhoods.',
    landmarks: [
      'Florin Road shopping corridor',
      'Valley Hi Park',
      'Morrison Creek area',
      'Granville Homes Temple Park',
      'Florin Town Centre',
    ],
  },
  colfax: {
    nearbyAreasIntro:
 'PRC 13 Roofing serves Colfax homeowners and regularly works across nearby Placer County foothill communities. The places below help describe the local corridor, not separate PRC 13 offices.',
    nearbyAreas: [
      'Auburn',
      'Weimar',
      'Clipper Gap',
      'Meadow Vista',
      'Alta',
      'Iowa Hill Road corridor',
    ],
    landmarksIntro:
 'Whether your home is near Historic Downtown Colfax, the Colfax Depot area, or hillside streets off the I-80 corridor, PRC 13 Roofing provides roof inspections, repair, and replacement services for Colfax properties, without claiming a storefront office in Colfax.',
    landmarks: [
      'Historic Downtown Colfax',
      'Colfax Depot / railroad corridor',
      'Colfax High School area',
      'I-80 Colfax exits corridor',
      'Stevens Trail trailhead area',
    ],
  },
};
