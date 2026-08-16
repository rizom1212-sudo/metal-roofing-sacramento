import type { CityHubServiceCard } from './cityHubServices';

export function metalCityServices(cityName: string): CityHubServiceCard[] {
  return [
    {
      title: `Metal Roofing in ${cityName}`,
      href: '/metal-roofing',
      desc: `Overview of metal roofing services for ${cityName} homes and buildings, then the specialized page that matches the job.`,
    },
    {
      title: `Metal Roof Installation in ${cityName}`,
      href: '/metal-roof-installation',
      desc: `New metal roof installation for ${cityName} properties, including standing seam and other metal profiles PRC 13 installs.`,
    },
    {
      title: `Metal Roof Replacement in ${cityName}`,
      href: '/metal-roof-replacement',
      desc: `Replace aging shingles, tile, or failing metal with a metal roof in ${cityName} when the current covering is worn out.`,
    },
    {
      title: `Metal Roof Repair in ${cityName}`,
      href: '/metal-roof-repair',
      desc: `Repair leaking seams, flashing, damaged panels, fasteners, and penetrations on existing metal roofs in ${cityName}.`,
    },
    {
      title: `Standing Seam in ${cityName}`,
      href: '/standing-seam-metal-roofing',
      desc: `Concealed-fastener standing seam metal roofing for ${cityName} homeowners and commercial buildings where the profile fits.`,
    },
    {
      title: `Residential Metal Roofing in ${cityName}`,
      href: '/residential-metal-roofing',
      desc: `Metal roofs for ${cityName} houses, including replacement, new construction, appearance, and homeowner questions.`,
    },
    {
      title: `Commercial Metal Roofing in ${cityName}`,
      href: '/commercial-metal-roofing',
      desc: `Metal panel systems for ${cityName}-area commercial and light-commercial buildings where metal is the right covering.`,
    },
    {
      title: `Metal Roof Inspection in ${cityName}`,
      href: '/metal-roof-inspection',
      desc: `Metal roof inspections in ${cityName} with written findings. Standard residential inspections are free with no obligation.`,
    },
  ];
}

export interface MetalCityOverlay {
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  heroIntro: string;
  quickAnswer: string;
  quickPoints: string[];
  localHeading: string;
  localContent: string;
  localSignals: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
}

export const metalCityOverlays: Record<string, MetalCityOverlay> = {
  sacramento: {
    blurb:
      'Metal roofing for Sacramento neighborhoods where summer heat, older mixed roof lines, and winter rain make standing seam, replacement, and metal repair practical options.',
    metaTitle: 'Metal Roofing in Sacramento, CA | Installation, Repair & Replacement',
    metaDescription:
      'Metal roofing in Sacramento, CA: installation, replacement, repair, standing seam, and inspections. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'From older East Sacramento bungalows to suburban homes near Natomas, Sacramento roofs deal with heat, dry attic spaces, tree debris, and sudden winter rain. This hub is for metal roofing in the city: installation, replacement, repair, standing seam, and inspections. Hire details live on each metal service page.',
    quickAnswer:
      'Metal Roofing Sacramento, operated by PRC 13 Roofing Inc., serves Sacramento with metal roof installation, replacement, repair, standing seam, residential and commercial metal systems, and metal inspections. Use this hub for local context, then open the specialized metal page that matches the job.',
    quickPoints: [
      'Sacramento neighborhood metal-roofing context',
      'Free residential metal inspections with written findings',
      'Standing seam, replacement, repair, and installation paths',
      'Service-area contractor — no public storefront on this site',
    ],
    localHeading: 'Why Sacramento homeowners look at metal',
    localContent:
      'Sacramento summers accelerate granule loss and curling on aging asphalt. Metal reflects solar energy instead of absorbing it the way dark, worn shingles often do. Winter rain still tests flashings, penetrations, and drainage. Metal is a fit when you want a long-service covering and the structure, architecture, and budget support it — not a costume for every street.',
    localSignals: [
      'South-facing shingle slopes wearing faster than expected',
      'Repeated leak patches on an aging covering',
      'Interest in standing seam for a clean architectural look',
      'Need to inspect an existing metal roof after heat cycling or rain',
      'Comparing metal vs shingles for a house you plan to keep',
    ],
    faqs: [
      {
        question: 'Do you install metal roofs in Sacramento?',
        answer:
          'Yes. PRC 13 Roofing Inc. installs standing seam, corrugated, and exposed-fastener ribbed metal panels in steel and aluminum options. Start on [metal roof installation](/metal-roof-installation) or the [metal roofing hub](/metal-roofing).',
      },
      {
        question: 'Who is the licensed contractor behind Metal Roofing Sacramento?',
        answer:
          'PRC 13 Roofing Inc., CA CSLB #1087153. Metal Roofing Sacramento is the specialist brand. Reviews and the Google Business Profile belong to PRC 13, not a separate listing.',
      },
      {
        question: 'Can an existing Sacramento roof be replaced with metal?',
        answer:
          'Often yes, after inspection. Full tear-off so the deck can be inspected is the usual approach. See [metal roof replacement](/metal-roof-replacement).',
      },
      {
        question: 'Do you repair metal roofs in Sacramento?',
        answer:
          'Yes, when the failure is localized and the rest of the metal system is sound. See [metal roof repair](/metal-roof-repair).',
      },
    ],
    cta: 'Request a metal roof inspection in Sacramento, CA.',
  },
  'rancho-cordova': {
    blurb:
      'Metal roofing for Rancho Cordova homes on sun-exposed corridors, including standing seam, replacement, and metal leak repair after wind and heat.',
    metaTitle: 'Metal Roofing in Rancho Cordova, CA | Standing Seam & Replacement',
    metaDescription:
      'Metal roofing in Rancho Cordova for heat, wind-exposed corridors, and metal replacement or repair. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Rancho Cordova roofs see long sun exposure, wind through open corridors, and winter rain that exposes weak flashing. Metal roofing is often considered here for heat performance and fewer surface replacements — if the home, structure, and profile choice fit.',
    quickAnswer:
      'PRC 13 inspects Rancho Cordova roofs and explains whether metal installation, replacement, or repair of an existing metal system is the honest next step. We serve the city as a Greater Sacramento service-area contractor.',
    quickPoints: [
      'Sun and wind exposure on open corridors',
      'Metal replacement vs repairing a tired covering',
      'Standing seam where the architecture supports it',
      'Written findings before work',
    ],
    localHeading: 'Metal roofing on exposed Rancho Cordova lots',
    localContent:
      'Afternoon sun and seasonal wind age roof edges faster here than in shaded neighborhoods. Metal handles heat well when underlayment, flashing, and fasteners or clips are detailed correctly. Wind still tests ridge, edge metal, and wall transitions — those details matter as much as the panel profile.',
    localSignals: [
      'Sun-baked slopes that keep needing shingle patches',
      'Wind-lifted edges on an aging covering',
      'An existing metal roof with fastener or flashing issues',
      'Homeowners comparing metal for long ownership',
    ],
    faqs: [
      {
        question: 'Is metal roofing a good option in Rancho Cordova?',
        answer:
          'It can be, especially on sun-exposed homes you plan to keep. Profile, underlayment, and flashing still decide performance. See [residential metal roofing](/residential-metal-roofing).',
      },
      {
        question: 'Do you inspect metal roofs in Rancho Cordova?',
        answer:
          'Yes. Standard residential inspections are free and include written findings. See [metal roof inspection](/metal-roof-inspection).',
      },
      {
        question: 'Can you replace a Rancho Cordova roof with metal?',
        answer:
          'Yes, when inspection supports it. Tear-off so the deck can be inspected is the usual approach. See [metal roof replacement](/metal-roof-replacement).',
      },
    ],
    cta: 'Request a metal roof inspection in Rancho Cordova, CA.',
  },
  roseville: {
    blurb:
      'Metal roofing in Roseville for subdivision heat, standing seam, and replacing aging shingle or tile systems when metal is the right covering.',
    metaTitle: 'Metal Roofing in Roseville, CA | Replacement & Standing Seam',
    metaDescription:
      'Metal roofing in Roseville, CA: standing seam, replacement, repair, and inspections for valley heat. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Roseville homes often combine newer subdivision roofs, tile or shingle systems, and heavy summer heat that wears underlayment and sealants. This page is metal roofing in Roseville — not a generic shingle shop page.',
    quickAnswer:
      'PRC 13 helps Roseville homeowners compare metal roofing, including standing seam, against keeping or replacing a tired covering. Inspection comes first. Tile and shingle systems are discussed only as what you may be replacing.',
    quickPoints: [
      'Heat and ventilation reviewed with metal assemblies',
      'Standing seam vs other metal profiles',
      'Replacement when the current covering is worn out',
      'Metal leak repair if you already have metal',
    ],
    localHeading: 'Roseville heat and metal assemblies',
    localContent:
      'Summer heat makes attic ventilation and underlayment part of a metal roof conversation, not an afterthought. Tile can look intact while underlayment ages; shingles can go brittle on sun-facing slopes. Metal is one long-service answer when the house, HOA rules if any, and budget line up.',
    localSignals: [
      'Sun-facing slopes aging faster than shaded ones',
      'Interest in standing seam instead of another shingle cycle',
      'Existing metal with flashing or penetration leaks',
      'Need for a metal inspection before buying or selling',
    ],
    faqs: [
      {
        question: 'Do Roseville homes benefit from metal roofing?',
        answer:
          'Metal can be a strong fit for heat and long ownership. It is not automatic for every subdivision look. See [standing seam metal roofing](/standing-seam-metal-roofing).',
      },
      {
        question: 'Do you replace tile or shingles with metal in Roseville?',
        answer:
          'When inspection supports it, yes. See [metal roof replacement](/metal-roof-replacement). We do not treat this site as a tile-repair shop.',
      },
      {
        question: 'Are residential metal inspections free in Roseville?',
        answer:
          'Standard residential inspections are free with written findings. See [metal roof inspection](/metal-roof-inspection).',
      },
    ],
    cta: 'Request a metal roof inspection in Roseville, CA.',
  },
  rocklin: {
    blurb:
      'Metal roofing in Rocklin for hillside wind, sun-baked slopes, standing seam, and honest repair-versus-replacement on metal or worn coverings.',
    metaTitle: 'Metal Roofing in Rocklin, CA | Wind, Heat & Standing Seam',
    metaDescription:
      'Metal roofing in Rocklin, CA for wind exposure, heat, standing seam, replacement, and metal repair. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Rocklin roofs often deal with hillside wind, sun-baked slopes, and mixed coverings. This hub is for metal roofing in Rocklin. There is no Rocklin-only asphalt replacement page on this specialist site.',
    quickAnswer:
      'We inspect Rocklin roofs for storm and heat wear, then explain whether metal installation, replacement, or repair of an existing metal system makes sense. PRC 13 serves Rocklin as part of the Greater Sacramento service area.',
    quickPoints: [
      'Wind and hillside exposure on metal details',
      'Standing seam and other profiles PRC 13 installs',
      'Replacement when patching a worn covering no longer holds',
      'Metal inspections with written findings',
    ],
    localHeading: 'Wind, heat, and metal details in Rocklin',
    localContent:
      'Exposed Rocklin lots test roof edges and ridge details. Metal still needs correct clips or fasteners, edge metal, and flashings. Wind-driven rain finds weak wall transitions on any covering. Metal is a durability conversation, not a promise that wind will never test the roof.',
    localSignals: [
      'Ridge or edge wear after wind',
      'South-facing slopes cooked by sun',
      'An existing metal roof with loose fasteners or failed flashings',
      'Homeowners comparing metal for a longer service interval',
    ],
    faqs: [
      {
        question: 'Do you offer metal roofing in Rocklin?',
        answer:
          'Yes. See [metal roofing](/metal-roofing) and [standing seam](/standing-seam-metal-roofing). PRC 13 serves Rocklin as part of the greater Sacramento service area.',
      },
      {
        question: 'Is there a Rocklin asphalt replacement page?',
        answer:
          'No. This specialist site does not keep a separate asphalt replacement URL. Replacement intent for metal lives at [metal roof replacement](/metal-roof-replacement).',
      },
      {
        question: 'Do you inspect after wind events in Rocklin?',
        answer:
          'Yes. We look at edges, ridges, panels or the current covering, and flashings. See [metal roof inspection](/metal-roof-inspection).',
      },
    ],
    cta: 'Request a metal roof inspection in Rocklin, CA.',
  },
  folsom: {
    blurb:
      'Metal roofing in Folsom for summer heat, mixed neighborhoods, standing seam, and metal replacement or repair with local guides still on this site.',
    metaTitle: 'Metal Roofing in Folsom, CA | Heat, Standing Seam & Replacement',
    metaDescription:
      'Metal roofing in Folsom, CA: standing seam, replacement, repair, and inspections for lake-corridor heat. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Folsom roofs face intense summer heat, occasional wind, and a mix of coverings. This hub is metal roofing in Folsom. Deeper Folsom metal and materials guides remain on the blog where they still help a metal buying decision.',
    quickAnswer:
      'PRC 13 helps Folsom homeowners inspect, install, replace, or repair metal roofing. Heat makes underlayment, ventilation, and flashing part of the metal conversation.',
    quickPoints: [
      'Heat exposure and metal assemblies',
      'Standing seam for homes that want concealed fasteners',
      'Replacement when the current covering is done',
      'Local Folsom metal and materials articles',
    ],
    localHeading: 'Folsom heat and metal roofing',
    localContent:
      'A Folsom roof can look fine from the street while underlayment or flashing is aging. Summer heat accelerates that. Metal reflects solar energy compared with dark worn shingles, but only as a full assembly. Lake-corridor wind still tests edges.',
    localSignals: [
      'Heat-aged sealants at vents and walls',
      'Interest in metal instead of another shingle or tile cycle',
      'Existing metal leaks at seams or penetrations',
      'Comparing cost and lifespan before a Folsom replacement',
    ],
    faqs: [
      {
        question: 'Do you install metal roofing in Folsom?',
        answer:
          'Yes. See [metal roof installation](/metal-roof-installation) and the Folsom metal and materials guides on the blog.',
      },
      {
        question: 'How does Folsom heat affect a metal roof?',
        answer:
          'Metal handles heat well when underlayment, ventilation, and flashings are right. Heat still moves panels and tests details. We inspect the assembly, not just the color.',
      },
      {
        question: 'Can you repair a metal roof leak in Folsom?',
        answer:
          'Yes, when the failure is localized. See [metal roof repair](/metal-roof-repair).',
      },
    ],
    cta: 'Request a metal roof inspection in Folsom, CA.',
  },
  'elk-grove': {
    blurb:
      'Metal roofing in Elk Grove for broad suburban roof planes, standing seam, replacement, and metal inspections after dry summers and winter rain.',
    metaTitle: 'Metal Roofing in Elk Grove, CA | Suburban Homes & Replacement',
    metaDescription:
      'Metal roofing in Elk Grove, CA for large roof planes, standing seam, replacement, and inspections. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Elk Grove homes often have broad roof planes and subdivision systems that sit through long dry stretches, then move a lot of water in the first storms. This page is metal roofing in Elk Grove.',
    quickAnswer:
      'PRC 13 inspects Elk Grove roofs and explains metal installation, replacement, or repair. Drainage at edges and valleys still matters on metal — we do not sell gutters as a primary service here.',
    quickPoints: [
      'Large planes and metal panel layout',
      'Replacement when shingles are tired across a big roof',
      'Metal leak paths at walls and penetrations',
      'Written inspection findings',
    ],
    localHeading: 'Broad Elk Grove roofs and metal',
    localContent:
      'Long dry months can hide wear until the first storm. On a large Elk Grove roof, metal replacement is a layout and flashing project as much as a panel choice. Water still has to leave the roof cleanly at edges and valleys.',
    localSignals: [
      'Wide south-facing slopes aging in the sun',
      'Interest in metal to avoid another full shingle cycle',
      'Leaks at roof-to-wall details after rain',
      'Need for an inspection before a large replacement decision',
    ],
    faqs: [
      {
        question: 'Do you install metal roofs in Elk Grove?',
        answer:
          'Yes. See [metal roof installation](/metal-roof-installation) and [residential metal roofing](/residential-metal-roofing).',
      },
      {
        question: 'Are Elk Grove metal inspections free?',
        answer:
          'Standard residential inspections are free with written findings. See [metal roof inspection](/metal-roof-inspection).',
      },
      {
        question: 'Do you still offer gutter installation as a primary Elk Grove service?',
        answer:
          'No. This specialist site is metal roofing. Drainage still gets checked during a metal inspection because it affects the roof edge.',
      },
    ],
    cta: 'Request a metal roof inspection in Elk Grove, CA.',
  },
  woodland: {
    blurb:
      'Metal roofing in Woodland for older homes, tree debris, standing seam, and replacing aging coverings when metal is the practical long-term path.',
    metaTitle: 'Metal Roofing in Woodland, CA | Older Homes & Replacement',
    metaDescription:
      'Metal roofing in Woodland, CA for older homes, debris-prone valleys, standing seam, and metal replacement. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Woodland has older homes, mature trees, and agricultural dust that load valleys and edges. This hub is metal roofing in Woodland — inspection first, then installation, replacement, or metal repair.',
    quickAnswer:
      'PRC 13 helps Woodland homeowners decide whether metal replacement, a localized metal repair, or leaving a still-serviceable covering in place is the honest recommendation.',
    quickPoints: [
      'Older home deck and covering checks',
      'Debris at valleys that can hide flashing problems',
      'Metal as a lower-maintenance covering when it fits',
      'Service-area coverage for Woodland — no public storefront on this site',
    ],
    localHeading: 'Older Woodland roofs and metal',
    localContent:
      'Tree debris and aging coverings often show up at valleys and edges. Metal does not remove the need to keep valleys clear, and PRC 13 does not offer metal cleaning as a service. Metal can reduce how often the field covering itself is replaced when the structure supports it.',
    localSignals: [
      'Repeated patches on an older covering',
      'Debris sitting in valleys after wind',
      'Interest in metal for a house you plan to keep',
      'An existing metal roof with flashing leaks',
    ],
    faqs: [
      {
        question: 'Is metal roofing practical for older Woodland homes?',
        answer:
          'Sometimes. Decking, structure, and architecture have to support the system. Inspection comes first. See [metal roof replacement](/metal-roof-replacement).',
      },
      {
        question: 'Do you repair existing metal roofs in Woodland?',
        answer:
          'Yes, when the problem is localized. See [metal roof repair](/metal-roof-repair).',
      },
      {
        question: 'Do you document storm-related metal conditions?',
        answer:
          'We document what we find on inspection. Insurance outcomes still belong to the insurer. See [metal roof inspection](/metal-roof-inspection).',
      },
    ],
    cta: 'Request a metal roof inspection in Woodland, CA.',
  },
  davis: {
    blurb:
      'Metal roofing in Davis for tree-shaded neighborhoods, ventilation, standing seam, and metal replacement on homes that see both canopy moisture and valley heat.',
    metaTitle: 'Metal Roofing in Davis, CA | Shade, Heat & Standing Seam',
    metaDescription:
      'Metal roofing in Davis, CA for tree-shaded homes, heat, standing seam, replacement, and inspections. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Davis roofs often sit under mature tree canopies and still face hot valley summers. This page is metal roofing in Davis: installation, replacement, repair, standing seam, and inspections.',
    quickAnswer:
      'PRC 13 inspects Davis roofs and explains metal options, including how shade, debris, and attic ventilation affect a metal assembly. We serve Davis as a Greater Sacramento service-area contractor.',
    quickPoints: [
      'Shade and debris vs sun-baked slopes on the same house',
      'Ventilation as part of a metal assembly',
      'Standing seam where the look fits',
      'Metal leak repair at skylights and walls',
    ],
    localHeading: 'Canopy, heat, and metal in Davis',
    localContent:
      'Shaded Davis slopes can hold debris and moisture longer; exposed slopes still cook in summer. Metal does not skip ventilation or flashing. Skylights and wall intersections remain leak-risk details on metal just as on other coverings.',
    localSignals: [
      'Debris on shaded roof sections',
      'Attic heat concerns during a replacement conversation',
      'Skylight or penetration leaks on metal or the current covering',
      'Homeowners comparing metal for long service life',
    ],
    faqs: [
      {
        question: 'Is metal roofing practical for Davis homes?',
        answer:
          'It can be, especially for long ownership. Shade, debris, and ventilation still matter. See [residential metal roofing](/residential-metal-roofing).',
      },
      {
        question: 'Can you inspect metal around skylights in Davis?',
        answer:
          'Yes. Penetrations are a core part of a [metal roof inspection](/metal-roof-inspection).',
      },
      {
        question: 'Do you install standing seam in Davis?',
        answer:
          'Yes, when the project calls for it. See [standing seam metal roofing](/standing-seam-metal-roofing).',
      },
    ],
    cta: 'Request a metal roof inspection in Davis, CA.',
  },
  orangevale: {
    blurb:
      'Metal roofing in Orangevale for larger lots, mature trees, standing seam, and replacing aging coverings when metal is the better long-term path.',
    metaTitle: 'Metal Roofing in Orangevale, CA | Trees, Replacement & Repair',
    metaDescription:
      'Metal roofing in Orangevale, CA for tree-lined lots, standing seam, metal replacement, and inspections. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Orangevale homes often have mature trees, larger lots, and older coverings. This hub is metal roofing in Orangevale — not a gutter company page and not an Orangevale emergency URL.',
    quickAnswer:
      'PRC 13 inspects Orangevale roofs and discusses metal installation, replacement, or repair. Tree debris still affects valleys and edges on metal. Cleaning is owner maintenance; PRC 13 does not offer metal cleaning.',
    quickPoints: [
      'Tree-limb and valley details on metal',
      'Replacement when the covering is brittle',
      'Metal leak repair vs a full replacement',
      'No Orangevale storefront on this site',
    ],
    localHeading: 'Trees, valleys, and metal in Orangevale',
    localContent:
      'Leaves and branches can sit in valleys long enough to trap moisture against flashings. Metal panels do not make that physics disappear. Inspection looks at edges, valleys, and penetrations. We do not keep a separate Orangevale emergency-repair URL on this specialist site.',
    localSignals: [
      'Debris in valleys after wind',
      'Aging covering near tree canopies',
      'Existing metal with edge or flashing leaks',
      'Interest in standing seam on a larger home',
    ],
    faqs: [
      {
        question: 'Do you install metal roofs in Orangevale?',
        answer:
          'Yes. See [metal roof installation](/metal-roof-installation).',
      },
      {
        question: 'Is there an Orangevale emergency roof repair page?',
        answer:
          'No. Active metal leaks are handled through [metal roof repair](/metal-roof-repair) during normal business hours. We do not claim 24/7 service.',
      },
      {
        question: 'Should I get a metal inspection before storm season?',
        answer:
          'If the covering is aging or you already have metal, a [metal roof inspection](/metal-roof-inspection) is a practical step.',
      },
    ],
    cta: 'Request a metal roof inspection in Orangevale, CA.',
  },
  'granite-bay': {
    blurb:
      'Metal roofing in Granite Bay for complex custom roofs, standing seam, and metal replacement where valleys, skylights, and premium profiles need careful detailing.',
    metaTitle: 'Metal Roofing in Granite Bay, CA | Complex Roofs & Standing Seam',
    metaDescription:
      'Metal roofing in Granite Bay, CA for complex roofs, standing seam, replacement, and inspections. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Granite Bay homes often include larger custom roofs, multiple planes, valleys, and skylights. This page is metal roofing in Granite Bay. Tile may be what you are replacing; it is not the service this specialist site sells.',
    quickAnswer:
      'PRC 13 inspects complex Granite Bay roofs and explains standing seam or other metal systems when they fit. There is no Granite Bay tile-repair URL on this site.',
    quickPoints: [
      'Complex valleys and wall transitions on metal',
      'Standing seam as a premium profile option',
      'Skylights and penetrations as leak-risk details',
      'Inspection before a large replacement',
    ],
    localHeading: 'Complex Granite Bay roofs and metal',
    localContent:
      'Multiple planes and valleys make flashing and panel layout the job, not just the panel name. Tile can look intact while underlayment ages; that is a replacement conversation, not a reason this site becomes a tile shop. Standing seam is often the profile owners want on custom homes when architecture and budget align.',
    localSignals: [
      'Many valleys and wall intersections',
      'Skylight leak history',
      'Interest in standing seam rather than another tile cycle',
      'Need for a detailed metal inspection',
    ],
    faqs: [
      {
        question: 'Do you offer standing seam in Granite Bay?',
        answer:
          'Yes. See [standing seam metal roofing](/standing-seam-metal-roofing).',
      },
      {
        question: 'Is there a Granite Bay roof-repair city page?',
        answer:
          'No. Metal repair lives at [metal roof repair](/metal-roof-repair). Geographic context stays on this hub.',
      },
      {
        question: 'Can metal work on a complex custom roof?',
        answer:
          'Often, with careful flashing and layout. Inspection has to see the actual planes. See [metal roof installation](/metal-roof-installation).',
      },
    ],
    cta: 'Request a metal roof inspection in Granite Bay, CA.',
  },
  'el-dorado-hills': {
    blurb:
      'Metal roofing in El Dorado Hills for hillside wind, sun, standing seam, and foothill replacement — with existing EDH metal guides still on the blog.',
    metaTitle: 'Metal Roofing in El Dorado Hills, CA | Wind, Heat & Standing Seam',
    metaDescription:
      'Metal roofing in El Dorado Hills, CA for exposed lots, standing seam, replacement, and inspections. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'El Dorado Hills roofs can face hillside wind, intense sun, and storm exposure on edges and ridges. This hub is metal roofing in El Dorado Hills. Tile and fascia articles that were not metal-relevant were retired from this specialist site.',
    quickAnswer:
      'PRC 13 helps El Dorado Hills homeowners evaluate metal roofing, including standing seam, for exposed lots. Financing may be available on qualifying projects. Colfax has a separately documented city home-hardening program; that program is not applied to El Dorado Hills here.',
    quickPoints: [
      'Hillside wind on metal edges and ridges',
      'Standing seam for exposed lots when it fits',
      'Existing EDH metal roofing article on the blog',
      'Metal repair vs replacement after storms',
    ],
    localHeading: 'Exposed EDH lots and metal',
    localContent:
      'Wind can lift weak edges on any covering. Metal still needs correct edge metal, seams, and flashings. Sun ages coatings and accessories. Our [metal roofing El Dorado Hills](/blog/metal-roofing-el-dorado-hills-ca) guide stays published for local metal context.',
    localSignals: [
      'Wind-tested ridges and eaves',
      'Sun-baked slopes on open lots',
      'Interest in standing seam',
      'Storm-related metal inspection needs',
    ],
    faqs: [
      {
        question: 'Is metal roofing a strong option for exposed EDH lots?',
        answer:
          'It can be when installed as a full assembly. See [standing seam metal roofing](/standing-seam-metal-roofing) and the EDH metal article.',
      },
      {
        question: 'Do you inspect after storms in El Dorado Hills?',
        answer:
          'Yes. See [metal roof inspection](/metal-roof-inspection). We do not claim 24/7 emergency service.',
      },
      {
        question: 'Is financing available for metal replacement?',
        answer:
          'Financing may be available on qualifying projects. Ask during inspection. Eligibility depends on the lender and scope.',
      },
    ],
    cta: 'Request a metal roof inspection in El Dorado Hills, CA.',
  },
  lincoln: {
    blurb:
      'Metal roofing in Lincoln for open-sky sun, newer developments, standing seam, and metal replacement when a subdivision covering is aging out.',
    metaTitle: 'Metal Roofing in Lincoln, CA | Sun Exposure & Replacement',
    metaDescription:
      'Metal roofing in Lincoln, CA for sun-exposed developments, standing seam, replacement, and inspections. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Lincoln homes often have limited shade and direct summer sun, then winter storms that test edges and vents. This page is metal roofing in Lincoln.',
    quickAnswer:
      'PRC 13 inspects Lincoln roofs and explains metal installation, replacement, or repair. We do not promise same-week scheduling; we aim to schedule during normal business hours.',
    quickPoints: [
      'Open-sky heat on metal assemblies',
      'Standing seam vs exposed-fastener profiles',
      'Replacement when the current covering is worn',
      'Written inspection findings',
    ],
    localHeading: 'Sun, wind, and metal in Lincoln',
    localContent:
      'Limited shade speeds aging on many coverings. Metal reflects more solar energy than dark worn shingles when the assembly is right. Wind and rain still find weak penetrations. Inspection should happen before you assume metal is — or is not — the answer.',
    localSignals: [
      'Broad sun-facing slopes',
      'Ridge or edge wear after wind',
      'Leaks at vents or pipe boots',
      'Considering metal before another short-cycle covering',
    ],
    faqs: [
      {
        question: 'Do you offer metal roof options in Lincoln?',
        answer:
          'Yes. See [metal roofing](/metal-roofing) and [standing seam metal roofing](/standing-seam-metal-roofing).',
      },
      {
        question: 'Can you inspect a Lincoln roof before listing a home?',
        answer:
          'Yes. A [metal roof inspection](/metal-roof-inspection) documents condition. Standard residential inspections are free.',
      },
      {
        question: 'What if the roof leaks during rain?',
        answer:
          'Contain water indoors, stay off a wet roof, and contact PRC 13 during business hours about [metal roof repair](/metal-roof-repair). We do not claim 24/7 service.',
      },
    ],
    cta: 'Request a metal roof inspection in Lincoln, CA.',
  },
  florin: {
    blurb:
      'Metal roofing in Florin for older ranch-style homes, standing seam, and replacing brittle coverings when metal is the practical next roof.',
    metaTitle: 'Metal Roofing in Florin, CA | Older Homes & Replacement',
    metaDescription:
      'Metal roofing in Florin, CA for older homes, metal replacement, repair, and inspections. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'Florin homes and nearby neighborhoods often include older roof systems and mature trees. This hub is metal roofing in Florin — not gutters, siding, or generic emergency repair.',
    quickAnswer:
      'PRC 13 inspects Florin roofs and discusses metal replacement or repair. Older decking can change whether metal is practical. Inspection first.',
    quickPoints: [
      'Older coverings and deck clues',
      'Metal replacement when patching no longer holds',
      'Existing metal leak repair',
      'Service-area coverage, no Florin storefront',
    ],
    localHeading: 'Older Florin roofs and metal',
    localContent:
      'Brittle coverings and past patches are common reasons owners ask about metal. Metal still needs a sound deck and correct flashings. We do not keep gutter or emergency URLs as primary services on this specialist site.',
    localSignals: [
      'Repeated leaks on an older covering',
      'Interest in metal for a longer interval between replacements',
      'Existing metal with flashing problems',
      'Need for written inspection findings',
    ],
    faqs: [
      {
        question: 'Do you inspect older roofs in Florin for metal replacement?',
        answer:
          'Yes. We look at the covering, flashings, and deck clues when accessible. See [metal roof inspection](/metal-roof-inspection).',
      },
      {
        question: 'Do you handle metal leaks in Florin?',
        answer:
          'Yes, through [metal roof repair](/metal-roof-repair) during normal business hours.',
      },
      {
        question: 'When should a Florin homeowner consider metal replacement?',
        answer:
          'When wear is widespread, leaks repeat, or the covering is too far gone for a durable repair. See [metal roof replacement](/metal-roof-replacement).',
      },
    ],
    cta: 'Request a metal roof inspection in Florin, CA.',
  },
  colfax: {
    blurb:
      'Metal roofing in Colfax, CA with wildfire-minded Class A roofing discussions, standing seam, and the existing Colfax home-hardening guide kept on this site.',
    metaTitle: 'Metal Roofing in Colfax, CA | Home Hardening & Standing Seam',
    metaDescription:
      'Metal roofing in Colfax, CA for Placer County foothill homes, Class A assembly discussions, standing seam, and inspections. Operated by PRC 13 Roofing Inc.',
    heroLead: 'Metal Roofing in',
    heroIntro:
      'PRC 13 Roofing provides metal roof inspections, repair, and replacement to homeowners in Colfax, California, a Placer County foothill community where wildfire readiness and durable roofing details matter alongside leak prevention.',
    quickAnswer:
      'PRC 13 serves Colfax with metal roofing services. Colfax also has a City Home Hardening and Defensible Space Program that may help with eligible improvements — confirm details with the City. PRC 13 independently offers Colfax homeowners an additional 5% off qualifying roofing work, separate from the City program.',
    quickPoints: [
      'Metal inspections, repair, and replacement in Colfax',
      'Class A / fire-resistant assembly questions asked during planning',
      'City program assistance is not a guarantee that every roof is 90% funded',
      'Existing Colfax home-hardening article kept on this site',
    ],
    localHeading: 'Colfax foothills, wildfire context, and metal',
    localContent:
      'Colfax sits along the I-80 corridor in the Sierra Nevada foothills. Homes face summer heat, winter storms, hillside wind, and wildfire ember risk. Metal is often part of a fire-resistant roofing discussion because many metal assemblies can be specified as Class A systems — that is an assembly rating, not a promise about insurance, rebates, or program eligibility. Confirm City program rules with Colfax. See the Colfax home-hardening guide on this site.',
    localSignals: [
      'Homeowners comparing metal as a long-service, fire-resistant covering',
      'Wind and storm wear on foothill roofs',
      'Debris in valleys that can hold moisture or embers',
      'Need to separate City program rules from contractor recommendations',
    ],
    faqs: [
      {
        question: 'Does PRC 13 Roofing serve Colfax with metal roofing?',
        answer:
          'Yes. Metal inspections, repair, and replacement are offered to Colfax homeowners. See [metal roofing](/metal-roofing).',
      },
      {
        question: 'Does Colfax have a home hardening program?',
        answer:
          'Yes. The City of Colfax operates a Home Hardening and Defensible Space Program. Confirm current eligibility on the City’s official page. Our Colfax article explains how roofing fits without mixing City assistance with PRC 13’s separate 5% Colfax offer.',
      },
      {
        question: 'Does metal roofing guarantee wildfire protection or insurance discounts?',
        answer:
          'No. Assembly ratings and local programs are separate from insurance outcomes. We discuss Class A assemblies in qualified terms during inspection.',
      },
      {
        question: 'How much can the Colfax program cover?',
        answer:
          'City materials have stated assistance may cover up to 90% of eligible home-hardening and defensible-space costs. That is not a guarantee that every roof replacement is 90% funded.',
      },
    ],
    cta: 'Request a Colfax metal roof inspection with PRC 13 Roofing.',
  },
};

type MetalExtraSections = {
  insuranceClaimsIntro: string;
  insuranceClaimsBullets: string[];
  insuranceClaimsClosing: string;
  repairWhenPoints: string[];
  replaceWhenPoints: string[];
  repairReplaceClosing: string;
};

const EXTRA_BY_SLUG: Record<string, Partial<MetalExtraSections>> = {
  sacramento: {
    insuranceClaimsIntro:
      'Sacramento heat, winter rain, and mixed older roof lines can open leaks at metal flashings, penetrations, and worn coverings. PRC 13 documents metal roof conditions homeowners can share with an insurer. Coverage and payment remain the insurer’s decision.',
    insuranceClaimsBullets: [
      'Wind-related metal edge, ridge, or trim damage in Sacramento neighborhoods',
      'Heat-cycled sealants and flashings after a long dry season',
      'Leak staining tied to a metal penetration or wall transition',
      'Panel or seam issues found after the first heavy winter rain',
    ],
    repairReplaceClosing:
      'Inspection in Sacramento should separate a durable metal repair from a replacement conversation. Neighborhood context lives on this hub; hire details live on metal roof repair and metal roof replacement.',
  },
  'rancho-cordova': {
    insuranceClaimsIntro:
      'Sun-exposed Rancho Cordova corridors and seasonal wind can age metal edges, ridges, and flashings faster than shaded streets. PRC 13 documents what we find. Coverage and payment remain the insurer’s decision.',
    insuranceClaimsBullets: [
      'Wind-lifted metal edge or ridge details on open corridors',
      'Sun-baked trim and flashing wear',
      'Leak staining at a wall transition after rain',
      'Fastener or seam issues on an existing metal roof',
    ],
    repairReplaceClosing:
      'On an exposed Rancho Cordova lot, inspection should separate a localized metal repair from a covering that is ready for replacement. See metal roof repair and metal roof replacement.',
  },
  roseville: {
    insuranceClaimsIntro:
      'Roseville summer heat and subdivision roof systems can show wear at underlayment, vents, and metal details even when the field covering still looks intact. PRC 13 documents metal conditions for an insurer. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Heat-aged flashings and accessories on sun-facing Roseville slopes',
      'Wind-related edge or ridge damage',
      'Leak staining at a penetration or wall',
      'An existing metal roof with seam or fastener issues after weather',
    ],
    repairReplaceClosing:
      'Roseville inspection should decide whether a metal repair is enough or the current covering — shingle, tile, or metal — is ready to come off. See metal roof repair and metal roof replacement.',
  },
  rocklin: {
    insuranceClaimsIntro:
      'Hillside wind and sun-baked Rocklin slopes test metal edges, ridges, and wall transitions. PRC 13 documents those conditions. Coverage and payment remain the insurer’s decision.',
    insuranceClaimsBullets: [
      'Wind-related metal edge, ridge, or trim damage in Rocklin',
      'Wind-driven rain at a weak wall transition',
      'Heat-cycled flashings on south-facing slopes',
      'Panel or seam issues found after a wind event',
    ],
    repairReplaceClosing:
      'Rocklin inspection should separate a durable metal repair from a replacement conversation, especially after wind. See metal roof repair and metal roof replacement.',
  },
  folsom: {
    insuranceClaimsIntro:
      'Folsom heat and lake-corridor wind can age underlayment, accessories, and metal flashings while the covering still looks acceptable from the street. PRC 13 documents metal conditions. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Heat-aged sealants at vents and walls in Folsom',
      'Wind-tested edges on more open lots',
      'Leak staining at a metal penetration',
      'Seam or flashing issues on an existing metal roof',
    ],
    repairReplaceClosing:
      'Folsom inspection should separate a localized metal repair from a heat-aged covering that is ready for metal replacement. See metal roof repair and metal roof replacement.',
  },
  'elk-grove': {
    insuranceClaimsIntro:
      'Broad Elk Grove roof planes sit through long dry stretches, then move a lot of water in the first storms. PRC 13 documents metal edge, valley, and penetration conditions. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Leak paths at edges and valleys on a large Elk Grove roof',
      'Wind-related trim or ridge damage',
      'Penetration leaks after the first heavy rain',
      'Panel or seam issues on an existing metal system',
    ],
    repairReplaceClosing:
      'On a large Elk Grove roof, inspection should decide whether a focused metal repair is honest or the whole covering is due. See metal roof repair and metal roof replacement.',
  },
  woodland: {
    insuranceClaimsIntro:
      'Older Woodland homes and tree debris can hide flashing problems in valleys and edges. PRC 13 documents metal conditions after storms. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Debris-related staining at Woodland valleys and edges',
      'Wind-related metal trim or ridge damage',
      'Leak paths at aging flashings on an older home',
      'An existing metal roof with a localized seam or penetration leak',
    ],
    repairReplaceClosing:
      'Woodland inspection should weigh an older deck and covering against a localized metal repair. See metal roof repair and metal roof replacement.',
  },
  davis: {
    insuranceClaimsIntro:
      'Davis roofs often mix tree-canopy moisture with hot valley summers. PRC 13 documents metal conditions at skylights, walls, and debris-prone details. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Skylight or penetration leaks on a Davis metal roof',
      'Debris-held moisture at shaded valleys',
      'Heat-cycled flashings on exposed slopes of the same house',
      'Wind-related edge or trim damage',
    ],
    repairReplaceClosing:
      'Davis inspection should account for shade, debris, and ventilation before choosing metal repair or replacement. See metal roof repair and metal roof replacement.',
  },
  orangevale: {
    insuranceClaimsIntro:
      'Orangevale lots with mature trees can load valleys and edges after wind. PRC 13 documents metal flashing and trim conditions. Coverage remains the insurer’s decision. Cleaning debris is owner maintenance.',
    insuranceClaimsBullets: [
      'Valley or edge staining after wind and debris in Orangevale',
      'Limb-related impact at a metal detail when that is what we find',
      'Leak paths at flashings on an older covering',
      'An existing metal roof with edge or penetration leaks',
    ],
    repairReplaceClosing:
      'Orangevale inspection should separate debris-related maintenance from a metal repair or a covering that is ready to replace. See metal roof repair and metal roof replacement.',
  },
  'granite-bay': {
    insuranceClaimsIntro:
      'Complex Granite Bay roofs collect problems at valleys, skylights, and wall transitions. PRC 13 documents those metal details. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Valley or wall-transition leaks on a multi-plane Granite Bay roof',
      'Skylight curb or penetration staining',
      'Wind-related edge or ridge damage',
      'Seam or flashing issues on standing seam or other metal',
    ],
    repairReplaceClosing:
      'On a custom Granite Bay roof, inspection has to see the actual planes before a metal repair or replacement is honest. See metal roof repair and metal roof replacement.',
  },
  'el-dorado-hills': {
    insuranceClaimsIntro:
      'Exposed El Dorado Hills lots take more wind at ridges and eaves. PRC 13 documents metal edge, ridge, and flashing conditions after storms. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Wind-tested ridges and eaves on open EDH lots',
      'Sun-aged coatings and accessories',
      'Leak staining at a wall or penetration',
      'Panel or seam issues found after a storm',
    ],
    repairReplaceClosing:
      'EDH inspection should separate a storm-related metal repair from a covering that is ready for replacement. See metal roof repair and metal roof replacement.',
  },
  lincoln: {
    insuranceClaimsIntro:
      'Lincoln homes often have limited shade and direct summer sun, then winter storms that test edges and vents. PRC 13 documents those metal conditions. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Sun-aged flashings and accessories on open Lincoln lots',
      'Ridge or edge wear after wind',
      'Leaks at vents or pipe boots',
      'Seam or fastener issues on an existing metal roof',
    ],
    repairReplaceClosing:
      'Lincoln inspection should happen before you assume metal is — or is not — the next covering. See metal roof repair and metal roof replacement.',
  },
  florin: {
    insuranceClaimsIntro:
      'Older Florin roof systems and past patches can leave leak paths at flashings and penetrations. PRC 13 documents metal conditions. Coverage remains the insurer’s decision.',
    insuranceClaimsBullets: [
      'Repeated leak staining on an older Florin covering',
      'Flashing or penetration failures after rain',
      'Wind-related trim damage',
      'An existing metal roof with a localized seam leak',
    ],
    repairReplaceClosing:
      'Florin inspection should check deck clues before recommending a metal repair or a full metal replacement. See metal roof repair and metal roof replacement.',
  },
  colfax: {
    insuranceClaimsIntro:
      'Colfax foothill homes face summer heat, winter storms, and hillside wind. PRC 13 documents metal roof conditions. Coverage and any city program assistance remain separate decisions — we do not treat inspection findings as a promised payout.',
    insuranceClaimsBullets: [
      'Wind-related metal edge or ridge damage in the Colfax foothills',
      'Storm wear at flashings and penetrations',
      'Debris in valleys that can hold moisture against details',
      'An existing metal roof that needs a documented condition report',
    ],
    repairReplaceClosing:
      'Colfax inspection should separate a metal repair from replacement, and keep City home-hardening rules separate from PRC 13’s scope. See metal roof repair and metal roof replacement.',
  },
};

export function metalExtraSections(cityName: string, slug = ''): MetalExtraSections {
  const base: MetalExtraSections = {
    insuranceClaimsIntro: `Storms, wind, and heat in ${cityName} can damage metal trim, flashings, seams, and panels. PRC 13 Roofing documents metal roof conditions homeowners can share with an insurer. Coverage and payment remain the insurer’s decision.`,
    insuranceClaimsBullets: [
      `Wind-related metal edge, ridge, or trim damage in ${cityName}`,
      'Impact or displaced flashing after a storm',
      'Leak staining tied to a metal penetration or wall transition',
      'Panel or seam issues found on inspection after weather',
    ],
    insuranceClaimsClosing:
      'PRC 13 provides photo documentation and written metal inspection findings. We do not guarantee claim approval.',
    repairWhenPoints: [
      'The metal failure is localized — flashing, one panel, a fastener group, or a penetration',
      'Surrounding panels and underlayment clues still look sound',
      'Matching repair materials are practical',
      'A focused repair will protect the building without stacking temporary patches',
    ],
    replaceWhenPoints: [
      'Leaks continue after prior metal repairs',
      'Wear, coating failure, or corrosion is widespread',
      'Underlayment or deck problems are extensive',
      'You are ready to change the covering to a metal system',
    ],
    repairReplaceClosing: `Inspection in ${cityName} should separate a durable metal repair from a replacement conversation. See metal roof repair and metal roof replacement for hire details.`,
  };

  return { ...base, ...EXTRA_BY_SLUG[slug] };
}

export const metalEducationalSections: Record<string, { eyebrow: string; heading: string; paragraphs: string[] }> = {
  rocklin: {
    eyebrow: 'Local metal roofing',
    heading: 'Metal roofing for Rocklin wind and heat',
    paragraphs: [
      'Rocklin lots can sit in more wind than sheltered valley streets. Metal still needs correct edge metal, ridges, and flashings. Wind-driven rain finds weak wall transitions on any covering, including standing seam.',
      'Heat on south-facing Rocklin slopes is a reason owners compare metal with another shingle cycle. Metal reflects more solar energy than dark worn shingles when the assembly includes underlayment and ventilation. That is not a guaranteed energy-savings percentage.',
      'There is no Rocklin asphalt replacement URL on this specialist site. Replacement intent lives at [metal roof replacement](/metal-roof-replacement). Inspection: [metal roof inspection](/metal-roof-inspection).',
    ],
  },
  folsom: {
    eyebrow: 'Local metal roofing',
    heading: 'Metal roofing, heat, and HOAs in Folsom',
    paragraphs: [
      'Folsom heat ages underlayment and accessories even when the covering still looks acceptable from the street. Metal is a long-service option when the house, structure, and budget support it.',
      'Some Folsom communities have HOA rules for exterior changes. Rules vary. PRC 13 can explain metal profile and color options we install; only the association can say what it will approve.',
      'Folsom metal and materials guides remain on the blog. Hire paths are [metal roofing](/metal-roofing), [metal roof replacement](/metal-roof-replacement), and [metal roof inspection](/metal-roof-inspection).',
    ],
  },
  'granite-bay': {
    eyebrow: 'Local metal roofing',
    heading: 'Standing seam on complex Granite Bay roofs',
    paragraphs: [
      'Granite Bay homes often have many planes, valleys, and skylights. Those transitions are the metal job — layout, flashings, and curbs — not just the panel name.',
      'Tile may be the covering you are replacing. This specialist site does not keep a Granite Bay tile-repair URL. Underlayment age under tile is a replacement conversation that can lead to metal.',
      'Standing seam is often the profile owners want on custom homes when architecture and budget align. See [standing seam metal roofing](/standing-seam-metal-roofing).',
    ],
  },
  'el-dorado-hills': {
    eyebrow: 'Local metal roofing',
    heading: 'Exposed El Dorado Hills lots and metal',
    paragraphs: [
      'Hillside and open-lot EDH homes take more wind at ridges and eaves. Metal still needs those details done correctly. Our [metal roofing El Dorado Hills](/blog/metal-roofing-el-dorado-hills-ca) article stays published.',
      'After storms, inspect metal trim, panels, and flashings when it is safe. PRC 13 does not claim 24/7 emergency service. See [metal roof inspection](/metal-roof-inspection) and [metal roof repair](/metal-roof-repair).',
      'Insurance documentation is findings, not a promised payout. Tile-only EDH articles were retired from this specialist site.',
    ],
  },
  roseville: {
    eyebrow: 'Local metal roofing',
    heading: 'Roseville heat, subdivisions, and metal',
    paragraphs: [
      'Roseville homes often combine newer subdivision roofs with heavy summer heat. Attic ventilation and underlayment belong in a metal conversation, not as an afterthought. Tile can look intact while underlayment ages; shingles can go brittle on sun-facing slopes.',
      'Metal is one long-service answer when the house, any HOA review, and budget line up. Hire paths: [standing seam metal roofing](/standing-seam-metal-roofing), [metal roof replacement](/metal-roof-replacement), and [metal roof inspection](/metal-roof-inspection).',
    ],
  },
  'elk-grove': {
    eyebrow: 'Local metal roofing',
    heading: 'Broad Elk Grove roofs and metal layout',
    paragraphs: [
      'Elk Grove homes often have wide roof planes that sit through long dry months, then move a lot of water in the first storms. Metal replacement on a large plane is a layout and flashing project as much as a panel choice.',
      'Drainage at edges and valleys still matters on metal. PRC 13 does not sell gutters as a primary service here, but a metal inspection still checks how water leaves the roof. See [metal roof installation](/metal-roof-installation) and [residential metal roofing](/residential-metal-roofing).',
    ],
  },
  'rancho-cordova': {
    eyebrow: 'Local metal roofing',
    heading: 'Sun, wind, and metal on Rancho Cordova corridors',
    paragraphs: [
      'Afternoon sun and seasonal wind age roof edges faster on open Rancho Cordova corridors than in shaded neighborhoods. Metal handles heat well when underlayment, flashing, and fasteners or clips are detailed correctly.',
      'Wind still tests ridge, edge metal, and wall transitions — those details matter as much as the panel profile. Start with [residential metal roofing](/residential-metal-roofing) or [metal roof inspection](/metal-roof-inspection).',
    ],
  },
  orangevale: {
    eyebrow: 'Local metal roofing',
    heading: 'Trees, valleys, and metal in Orangevale',
    paragraphs: [
      'Orangevale homes often sit on larger lots with mature trees. Leaves and branches can sit in valleys long enough to trap moisture against flashings. Metal panels do not change that physics.',
      'Inspection looks at edges, valleys, and penetrations. Debris clearing is owner maintenance; PRC 13 does not offer metal cleaning. Active metal leaks go through [metal roof repair](/metal-roof-repair) during normal business hours.',
    ],
  },
  lincoln: {
    eyebrow: 'Local metal roofing',
    heading: 'Open-sky Lincoln lots and metal',
    paragraphs: [
      'Lincoln developments often have limited shade and direct summer sun, then winter storms that test edges and vents. Metal reflects more solar energy than dark worn shingles when the assembly is right.',
      'Wind and rain still find weak penetrations. Inspection should happen before you assume metal is the next covering. See [metal roofing](/metal-roofing) and [metal roof inspection](/metal-roof-inspection).',
    ],
  },
  woodland: {
    eyebrow: 'Local metal roofing',
    heading: 'Older Woodland homes and metal',
    paragraphs: [
      'Woodland has older homes, mature trees, and agricultural dust that can load valleys and edges. Metal can reduce how often the field covering itself is replaced when the structure supports it. It does not remove the need to keep valleys clear.',
      'PRC 13 does not offer metal cleaning. Decking, structure, and architecture have to support the system — inspection first. See [metal roof replacement](/metal-roof-replacement) and [metal roof repair](/metal-roof-repair).',
    ],
  },
  davis: {
    eyebrow: 'Local metal roofing',
    heading: 'Canopy, heat, and metal in Davis',
    paragraphs: [
      'Davis roofs often sit under mature tree canopies and still face hot valley summers. Shaded slopes can hold debris and moisture longer; exposed slopes still cook. Metal does not skip ventilation or flashing.',
      'Skylights and wall intersections remain leak-risk details on metal. See [residential metal roofing](/residential-metal-roofing) and [standing seam metal roofing](/standing-seam-metal-roofing).',
    ],
  },
  florin: {
    eyebrow: 'Local metal roofing',
    heading: 'Older Florin roofs and metal replacement',
    paragraphs: [
      'Florin homes and nearby neighborhoods often include older roof systems and mature trees. Brittle coverings and past patches are common reasons owners ask about metal. Metal still needs a sound deck and correct flashings.',
      'Inspection looks at the covering, flashings, and deck clues when accessible. See [metal roof inspection](/metal-roof-inspection) and [metal roof replacement](/metal-roof-replacement).',
    ],
  },
  sacramento: {
    eyebrow: 'Local metal roofing',
    heading: 'Sacramento neighborhoods and metal',
    paragraphs: [
      'Sacramento mixes older bungalows, suburban streets, and sun-facing slopes that wear shingles faster than shaded planes. Metal is a fit when you want a long-service covering and the structure, architecture, and budget support it.',
      'Winter rain still tests flashings, penetrations, and drainage on any covering, including standing seam. Use this hub for city context, then open [metal roof installation](/metal-roof-installation), [metal roof replacement](/metal-roof-replacement), or [metal roof inspection](/metal-roof-inspection).',
    ],
  },
  colfax: {
    eyebrow: 'Local metal roofing',
    heading: 'Colfax foothills, home hardening, and metal',
    paragraphs: [
      'Colfax sits along the I-80 corridor in the Sierra Nevada foothills. Homes face summer heat, winter storms, hillside wind, and wildfire ember risk. Many metal assemblies can be specified as Class A systems — that is an assembly rating, not a promise about insurance or program eligibility.',
      'The City of Colfax operates a Home Hardening and Defensible Space Program. Confirm current rules with the City. PRC 13’s Colfax metal work and any contractor offer stay separate from City assistance. See the Colfax home-hardening guide on this site and [metal roofing](/metal-roofing).',
    ],
  },
};
