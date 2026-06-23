/** Insurance claims + repair vs replace sections for each service-area city. */

export interface ServiceAreaExtraSections {
  insuranceClaimsIntro: string;
  insuranceClaimsBullets: string[];
  insuranceClaimsClosing: string;
  repairWhenPoints: string[];
  replaceWhenPoints: string[];
  repairReplaceClosing: string;
}

export const serviceAreaExtraSections: Record<string, ServiceAreaExtraSections> = {
  sacramento: {
    insuranceClaimsIntro:
      'Many Sacramento homeowners first notice roof damage after winter storms, Delta breeze gusts, or heavy branches from street trees in neighborhoods like East Sacramento and Land Park. Seasonal shifts from dry heat to sudden rain can expose weaknesses that were not obvious during summer.',
    insuranceClaimsBullets: [
      'Missing shingles lifted along ridgelines after Sacramento wind events',
      'Wind damage at roof edges and around older chimney stacks',
      'Leak-related damage traced to ceiling stains after the first heavy rain',
      'Flashing failures at skylights, vents, and low-slope transitions',
      'Storm-related roof damage across multiple slopes on older bungalows',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one valley, vent, or chimney area',
      'The roof is relatively new with sound decking underneath',
      'Leaks are limited to a single room or penetration point',
      'Most shingles and flashing remain in good condition elsewhere',
    ],
    replaceWhenPoints: [
      'Multiple leaks appear after the same Sacramento storm',
      'Shingles are failing across large sun-exposed sections',
      'Storm damage affects several roof sections at once',
      'The roof is near the end of its expected lifespan',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Sacramento homeowners determine the most cost-effective option between targeted repair and full replacement.',
  },
  'rancho-cordova': {
    insuranceClaimsIntro:
      'Rancho Cordova homeowners often discover roof problems after American River corridor winds, winter rain bands, or fallen limbs from mature trees near Gold River and Anatolia. Sudden weather changes can turn a small lifted shingle into an active leak within a single storm cycle.',
    insuranceClaimsBullets: [
      'Missing shingles along windward eaves after corridor gusts',
      'Wind damage at gable ends on two-story Rancho Cordova homes',
      'Leak-related damage showing as attic stains or ceiling discoloration',
      'Flashing failures where patio covers meet the main roofline',
      'Storm-related roof damage from debris impact on aging shingles',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to a wind-lifted section or one penetration',
      'The roof is relatively new and was installed to current standards',
      'Leaks are limited and trace to a known flashing or boot issue',
      'Most roofing materials on the main slopes remain in good condition',
    ],
    replaceWhenPoints: [
      'Multiple leaks develop across different rooms after one storm',
      'Shingles are failing across large areas near the river corridor',
      'Storm damage affects several roof sections and valleys at once',
      'The roof is near end of lifespan with brittle, widespread wear',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Rancho Cordova homeowners determine the most cost-effective option between repair and replacement.',
  },
  roseville: {
    insuranceClaimsIntro:
      'Roseville roofs see strong foothill winds, winter rain, and occasional hail that can stress shingles on homes from West Roseville to Fiddyment Farm. Homeowners often spot damage only after a storm when granules collect in gutters or water stains appear on ceilings.',
    insuranceClaimsBullets: [
      'Missing shingles after Roseville foothill wind events',
      'Wind damage along open ridgelines and two-story gable ends',
      'Leak-related damage near skylights after seasonal rain returns',
      'Flashing failures at chimney and wall-to-roof transitions',
      'Storm-related roof damage from branches on tree-lined streets',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one slope or a single wind-lifted area',
      'The roof is relatively new with intact underlayment below',
      'Leaks are limited to one penetration or valley section',
      'Most architectural shingles remain well-adhered and granulated',
    ],
    replaceWhenPoints: [
      'Multiple leaks appear in different areas of the home',
      'Shingles are failing across large sections of the roof plane',
      'Storm damage affects several roof sections after one event',
      'The roof is near end of lifespan with curling or widespread granule loss',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Roseville homeowners determine the most cost-effective option before committing to repair or replacement.',
  },
  rocklin: {
    insuranceClaimsIntro:
      'Rocklin sits in the Sierra foothill wind path, where seasonal gusts, winter storms, and falling oak branches can damage roofs in neighborhoods from Whitney Ranch to Stanford Ranch. Damage is often hidden until rain reveals leaks at vents or valleys.',
    insuranceClaimsBullets: [
      'Missing shingles after Rocklin foothill wind gusts',
      'Wind damage at roof perimeters and tall gable walls',
      'Leak-related damage from slow attic moisture after storms',
      'Flashing failures around chimneys on sloped lots',
      'Storm-related roof damage from debris on exposed ridgelines',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to a wind-affected edge or one valley',
      'The roof is relatively new with solid decking and ventilation',
      'Leaks are limited to a single boot, vent, or flashing detail',
      'Most shingles and ridge caps remain in good condition',
    ],
    replaceWhenPoints: [
      'Multiple leaks exist after repeated Rocklin wind events',
      'Shingles are failing across large sun- and wind-exposed areas',
      'Storm damage affects several roof sections simultaneously',
      'The roof is near end of lifespan with brittle tab shingles',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Rocklin homeowners determine the most cost-effective path between repair and full replacement.',
  },
  folsom: {
    insuranceClaimsIntro:
      'Folsom homeowners frequently find roof damage after lake-area winds, winter rain squalls, or branches from oaks near the American River canyon. Homes from Historic Folsom to Empire Ranch can see shingle lift and flashing stress that shows up only after seasonal weather shifts.',
    insuranceClaimsBullets: [
      'Missing shingles after Folsom canyon and lake corridor winds',
      'Wind damage at hips and ridges on multi-level rooflines',
      'Leak-related damage traced to ceiling stains after heavy rain',
      'Flashing failures at dormers and second-story wall joints',
      'Storm-related roof damage from fallen limbs on shaded slopes',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one section affected by wind or a branch',
      'The roof is relatively new with quality underlayment intact',
      'Leaks are limited to a chimney, vent, or single valley',
      'Most roofing materials on primary slopes remain in good shape',
    ],
    replaceWhenPoints: [
      'Multiple leaks develop across the home after one Folsom storm',
      'Shingles are failing across large areas with widespread curling',
      'Storm damage affects several roof sections and drainage paths',
      'The roof is near end of lifespan with repeated patch history',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Folsom homeowners determine the most cost-effective option for their roof condition.',
  },
  'elk-grove': {
    insuranceClaimsIntro:
      'Elk Grove roofs endure long dry summers followed by winter rain, Delta breeze gusts, and occasional debris from mature landscaping in Laguna and Stonelake. Homeowners often discover damage after storms when missing tabs or lifted edges become visible from the driveway.',
    insuranceClaimsBullets: [
      'Missing shingles after Elk Grove wind and rain events',
      'Wind damage at roof edges on open suburban lots',
      'Leak-related damage showing as drywall stains or musty attic insulation',
      'Flashing failures at pipe boots and HVAC curbs on flat sections',
      'Storm-related roof damage across tile and shingle transitions',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one slope, boot, or valley intersection',
      'The roof is relatively new with no widespread material fatigue',
      'Leaks are limited to a single room or penetration point',
      'Most shingles or tiles remain secure with good granule coverage',
    ],
    replaceWhenPoints: [
      'Multiple leaks exist in different areas of the Elk Grove home',
      'Shingles are failing across large sections of the main roof',
      'Storm damage affects several roof sections at the same time',
      'The roof is near end of lifespan with heat-related brittleness',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Elk Grove homeowners determine the most cost-effective option between repair and replacement.',
  },
  woodland: {
    insuranceClaimsIntro:
      'Woodland homeowners often notice roof damage after valley winds, winter rain, and branches from mature trees near downtown and Spring Lake. Agricultural dust and seasonal weather swings can accelerate wear that becomes obvious only after a storm passes through Yolo County.',
    insuranceClaimsBullets: [
      'Missing shingles after Woodland valley wind gusts',
      'Wind damage along open agricultural-exposed rooflines',
      'Leak-related damage from attic moisture after the first winter rain',
      'Flashing failures at older chimney and vent penetrations',
      'Storm-related roof damage from debris on aging ranch-style roofs',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one area with a clear storm cause',
      'The roof is relatively new with sound sheathing below',
      'Leaks are limited to a single valley or flashing detail',
      'Most roofing materials remain in good condition across the roof',
    ],
    replaceWhenPoints: [
      'Multiple leaks appear after Woodland seasonal storms',
      'Shingles are failing across large sections with heavy granule loss',
      'Storm damage affects several roof sections and drainage valleys',
      'The roof is near end of lifespan on an older Woodland home',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Woodland homeowners determine the most cost-effective option before scheduling major work.',
  },
  davis: {
    insuranceClaimsIntro:
      'Davis roofs face flat-lot wind exposure, heavy tree canopy debris, and winter rain that can stress older shingles near the university and South Davis neighborhoods. Homeowners often find damage after storms when branches scrape ridges or lifted shingles expose underlayment.',
    insuranceClaimsBullets: [
      'Missing shingles after Davis wind events along open corridors',
      'Wind damage at edges where tree canopy clears the roofline',
      'Leak-related damage from slow leaks near skylights and vents',
      'Flashing failures at low-slope patio and garage transitions',
      'Storm-related roof damage from fallen limbs on shaded slopes',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to a tree-impact zone or one penetration',
      'The roof is relatively new with intact membrane or shingle layers',
      'Leaks are limited and tied to a known flashing or boot issue',
      'Most roofing materials on the main structure remain in good condition',
    ],
    replaceWhenPoints: [
      'Multiple leaks exist across different Davis roof sections',
      'Shingles are failing across large areas with moss or granule loss',
      'Storm damage affects several roof sections after one weather event',
      'The roof is near end of lifespan on an older Davis bungalow',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Davis homeowners determine the most cost-effective option between targeted repair and replacement.',
  },
  orangevale: {
    insuranceClaimsIntro:
      'Orangevale homeowners frequently discover roof issues after creek-corridor winds, winter rain, and oak branches in areas near Almond and Filbert. Seasonal weather can expose lifted shingles and worn flashing that held fine through dry months.',
    insuranceClaimsBullets: [
      'Missing shingles after Orangevale wind along open lots',
      'Wind damage at gable ends shaded by mature oaks',
      'Leak-related damage visible as ceiling stains after heavy rain',
      'Flashing failures at chimney bases and roof-to-wall joints',
      'Storm-related roof damage from debris in tree-heavy neighborhoods',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one slope or a branch-impact area',
      'The roof is relatively new with good attic ventilation',
      'Leaks are limited to a single valley or vent penetration',
      'Most shingles remain well-sealed with intact ridge caps',
    ],
    replaceWhenPoints: [
      'Multiple leaks develop after Orangevale storm seasons',
      'Shingles are failing across large sections with brittle tabs',
      'Storm damage affects several roof sections and valleys',
      'The roof is near end of lifespan with recurring repair history',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Orangevale homeowners determine the most cost-effective option for their specific roof condition.',
  },
  'granite-bay': {
    insuranceClaimsIntro:
      'Granite Bay roofs see foothill winds, winter storms, and heavy branches from large oaks near Folsom Lake. Homeowners in custom neighborhoods often discover damage after high winds when lifted designer shingles or tile edges expose underlayment.',
    insuranceClaimsBullets: [
      'Missing shingles or tile pieces after Granite Bay wind events',
      'Wind damage at complex hips on multi-level custom homes',
      'Leak-related damage near skylights and upper-story penetrations',
      'Flashing failures at chimneys, dormers, and valley metal',
      'Storm-related roof damage across several architectural roof sections',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one architectural feature or slope',
      'The roof is relatively new with premium materials still performing',
      'Leaks are limited to a single penetration or valley detail',
      'Most roofing materials across the home remain in excellent condition',
    ],
    replaceWhenPoints: [
      'Multiple leaks exist in different areas of the Granite Bay home',
      'Shingles or tiles are failing across large visible sections',
      'Storm damage affects several roof sections on the same structure',
      'The roof is near end of lifespan despite prior spot repairs',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Granite Bay homeowners determine the most cost-effective option between repair and full replacement.',
  },
  'el-dorado-hills': {
    insuranceClaimsIntro:
      'El Dorado Hills homeowners often find roof damage after hillside winds, winter rain, and branches from open-space oaks in Serrano and Town Center. Elevated exposure can lift shingles along ridgelines before homeowners notice interior leaks.',
    insuranceClaimsBullets: [
      'Missing shingles after El Dorado Hills wind along exposed ridges',
      'Wind damage at perimeters on hillside-oriented roof planes',
      'Leak-related damage from attic moisture after seasonal storms',
      'Flashing failures at chimneys on sloped custom lots',
      'Storm-related roof damage from debris on multi-level rooflines',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to a wind-exposed ridge or one penetration',
      'The roof is relatively new with sound decking and underlayment',
      'Leaks are limited to a single boot, valley, or flashing joint',
      'Most roofing materials on unaffected slopes remain in good condition',
    ],
    replaceWhenPoints: [
      'Multiple leaks appear after El Dorado Hills storm seasons',
      'Shingles are failing across large wind- and sun-exposed areas',
      'Storm damage affects several roof sections at once',
      'The roof is near end of lifespan with widespread material fatigue',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help El Dorado Hills homeowners determine the most cost-effective option before major roofing work.',
  },
  lincoln: {
    insuranceClaimsIntro:
      'Lincoln roofs face valley winds, winter rain, and branches from oaks along rural edges and newer subdivisions near Twelve Bridges. Homeowners often spot damage after storms when shingles lift along open ridgelines or gutters overflow from debris.',
    insuranceClaimsBullets: [
      'Missing shingles after Lincoln valley and corridor winds',
      'Wind damage at gable ends on two-story suburban homes',
      'Leak-related damage showing as ceiling stains after heavy rain',
      'Flashing failures at older vent stacks and chimney seals',
      'Storm-related roof damage from limbs on partially shaded roofs',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one wind-affected section or valley',
      'The roof is relatively new with intact underlayment below',
      'Leaks are limited to a single room or penetration',
      'Most shingles remain secure with good granule retention',
    ],
    replaceWhenPoints: [
      'Multiple leaks exist across the Lincoln home after storms',
      'Shingles are failing across large areas with curling or cracking',
      'Storm damage affects several roof sections simultaneously',
      'The roof is near end of lifespan with aging three-tab materials',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Lincoln homeowners determine the most cost-effective option between repair and replacement.',
  },
  florin: {
    insuranceClaimsIntro:
      'Florin homeowners on older ranch-style homes often discover roof damage after winter rain, valley winds, or branches from mature street trees. Aging materials can fail quickly once a storm lifts shingles or saturates worn underlayment.',
    insuranceClaimsBullets: [
      'Missing shingles after Florin wind along older roof edges',
      'Wind damage at brittle tabs on aging architectural shingles',
      'Leak-related damage from slow attic moisture near exterior walls',
      'Flashing failures at decades-old vent and chimney penetrations',
      'Storm-related roof damage across patched sections of the same roof',
    ],
    insuranceClaimsClosing:
      'PRC 13 Roofing provides photo documentation and inspection reports homeowners can use during insurance conversations.',
    repairWhenPoints: [
      'Damage is isolated to one patched area with sound surrounding material',
      'The roof is relatively new after a recent partial reroof',
      'Leaks are limited to a single boot or valley on an otherwise solid roof',
      'Most roofing materials away from the damage zone remain in good condition',
    ],
    replaceWhenPoints: [
      'Multiple leaks exist across different rooms in the Florin home',
      'Shingles are failing across large areas with widespread brittleness',
      'Storm damage affects several roof sections beyond prior patch zones',
      'The roof is near end of lifespan with repeated short-term repairs',
    ],
    repairReplaceClosing:
      'PRC 13 Roofing performs inspections to help Florin homeowners determine the most cost-effective option between repair and full replacement.',
  },
};
