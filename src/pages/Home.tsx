import JsonLd from '../components/JsonLd';
import { BRAND_NAME } from '../data/site';
import { homeFaqs } from '../components/home/homeFaqs';
import HomeHero from '../components/home/HomeHero';
import HomeTrustStrip from '../components/home/HomeTrustStrip';
import HomeSpecialistServices from '../components/home/HomeSpecialistServices';
import HomeProjectMosaic from '../components/home/HomeProjectMosaic';
import HomeContractorTrust from '../components/home/HomeContractorTrust';
import HomeWhyMetal from '../components/home/HomeWhyMetal';
import HomeProcessTimeline from '../components/home/HomeProcessTimeline';
import HomeAudienceSplit from '../components/home/HomeAudienceSplit';
import HomeServiceTerritory from '../components/home/HomeServiceTerritory';
import HomeBuyerQuestions from '../components/home/HomeBuyerQuestions';
import HomeEditorialGuides from '../components/home/HomeEditorialGuides';
import HomeFinalConversion from '../components/home/HomeFinalConversion';
import '../components/home/home.css';

export default function Home() {
  return (
    <>
      <JsonLd
        faqs={homeFaqs}
        pageName={`${BRAND_NAME} | Metal Roofing Installation, Replacement & Repair`}
      />
      <HomeHero />
      <HomeTrustStrip />
      <HomeSpecialistServices />
      <HomeProjectMosaic />
      <HomeContractorTrust />
      <HomeWhyMetal />
      <HomeProcessTimeline />
      <HomeAudienceSplit />
      <HomeServiceTerritory />
      <HomeBuyerQuestions />
      <HomeEditorialGuides />
      <HomeFinalConversion />
    </>
  );
}
