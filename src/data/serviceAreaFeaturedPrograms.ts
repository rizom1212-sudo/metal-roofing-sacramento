/**
 * Optional, time-sensitive local programs/offers for service-area hubs.
 * Keep program claims easy to update without touching shared templates.
 */

export interface FeaturedProgramAnswerBlock {
  question: string;
  /** Concise direct answer for AEO (roughly 40–70 words). */
  directAnswer: string;
  /** Optional supporting detail after the direct answer. */
  detail?: string;
}

export interface ServiceAreaFeaturedProgram {
  /** Visible freshness label, e.g. "August 2026" */
  lastUpdatedLabel: string;
  programEyebrow: string;
  programHeading: string;
  programIntro: string;
  /** Exact compliant wording for cost-share / assistance claims. */
  costShareStatement: string;
  programBullets: string[];
  programDisclaimer: string;
  officialSourceLabel: string;
  officialSourceUrl: string;
  answerBlocks: FeaturedProgramAnswerBlock[];
  offerEyebrow: string;
  offerHeading: string;
  offerStatement: string;
  offerSeparationNote: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  /** schema.org Offer description (no government affiliation). */
  offerSchemaName: string;
  offerSchemaDescription: string;
}

export const serviceAreaFeaturedPrograms: Record<string, ServiceAreaFeaturedProgram> = {
  colfax: {
    lastUpdatedLabel: 'August 2026',
    programEyebrow: 'City of Colfax Program',
    programHeading: 'City of Colfax Home Hardening and Defensible Space Program',
    programIntro:
      'The City of Colfax operates a Home Hardening and Defensible Space Program designed to reduce wildfire risk for qualifying residential properties within city limits. PRC 13 Roofing provides roofing services to Colfax homeowners and can help evaluate roof condition if roofing work is part of a homeowner’s broader hardening plan.',
    costShareStatement:
      'Colfax homeowners may be eligible for assistance covering up to 90% of qualifying home-hardening and defensible-space improvements through the City of Colfax Home Hardening and Defensible Space Program.',
    programBullets: [
      'The City states the program is open to Colfax homeowners without an income limit.',
      'Eligibility, recommended measures, and qualifying improvements are determined through the program—not by PRC 13 Roofing.',
      'Individual properties may receive different recommended measures based on inspection and program guidelines.',
      'Roofing may be considered among home-hardening options when it aligns with program-approved measures, but coverage is not automatic for every roof project.',
    ],
    programDisclaimer:
      'PRC 13 Roofing is not the City of Colfax, FEMA, CAL FIRE, Cal OES, or the program administrator. Confirm eligibility, covered improvements, and current program details with the official City of Colfax Home Hardening resource before making decisions.',
    officialSourceLabel: 'City of Colfax Home Hardening (official)',
    officialSourceUrl: 'https://colfax-ca.gov/homehardening/',
    answerBlocks: [
      {
        question: 'Does Colfax have a home hardening program?',
        directAnswer:
          'Yes. The City of Colfax operates a Home Hardening and Defensible Space Program intended to help reduce wildfire risk for residential properties within Colfax city limits. Program details, eligibility, and qualifying improvements should be confirmed through the City’s official Home Hardening page.',
        detail:
          'The program focuses on home-hardening and defensible-space work. Recommended measures can vary by property after program review.',
      },
      {
        question: 'Can the Colfax home hardening program help with roofing?',
        directAnswer:
          'Roofing can be part of wildfire home hardening when it aligns with program-approved measures for a specific property. The City program does not automatically pay for every roof replacement. Eligibility and covered improvements are decided through the program process.',
        detail:
          'A PRC 13 roof inspection can help Colfax homeowners understand roof condition and Class A or fire-resistant roofing options while they confirm program questions with the City’s official source.',
      },
      {
        question: 'What is Class A roofing?',
        directAnswer:
          'Class A describes a roof assembly’s fire-performance rating under standardized testing. In wildfire-prone areas, Class A assemblies are commonly discussed because they are designed to resist severe fire exposure from external sources when installed as a complete rated system.',
        detail:
          'Material choice, underlayment, ventilation details, and installation all affect real-world performance. Ask for product and assembly documentation during replacement planning.',
      },
    ],
    offerEyebrow: 'PRC 13 Colfax Offer',
    offerHeading: 'Colfax Home Hardening Roofing Offer',
    offerStatement:
      'PRC 13 Roofing is offering Colfax homeowners an additional 5% off qualifying roofing work.',
    offerSeparationNote:
      'This 5% promotional offer is from PRC 13 Roofing only. It is separate from—and not affiliated with—the City of Colfax Home Hardening and Defensible Space Program, FEMA, CAL FIRE, or Cal OES.',
    primaryCtaLabel: 'Request a Colfax Roof Inspection',
    secondaryCtaLabel: 'Check Your Roofing Options',
    offerSchemaName: 'Colfax Home Hardening Roofing Offer',
    offerSchemaDescription:
      'Additional 5% off qualifying roofing work for Colfax, California homeowners from PRC 13 Roofing. Separate from any City of Colfax or government home-hardening program assistance.',
  },
};
