import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Phone, ArrowRight, Wrench } from 'lucide-react';
import { blogPosts, displayBlogCategory } from '../data/blog';
import JsonLd from '../components/JsonLd';
import OptimizedImage from '../components/OptimizedImage';
import FaqAccordion from '../components/FaqAccordion';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  BRAND_NAME,
  BUSINESS_ENTITY_NAME,
  LICENSE_LABEL,
  PHONE_DISPLAY,
} from '../data/site';
import { PRIMARY_CTA } from '../data/cta';
import TelLink from '../components/TelLink';
import { EMERGENCY_CLUSTER_CATEGORY } from '../data/blogEmergencyRoofRepairCluster';
import { FOLSOM_CLUSTER_CATEGORY } from '../data/blogFolsomRoofingCluster';
import { EL_DORADO_HILLS_CLUSTER_CATEGORY } from '../data/blogElDoradoHillsRoofingCluster';
import {
  COLFAX_HOME_HARDENING_SLUG,
} from '../data/blogColfaxHomeHardening';
import { serviceAreaFeaturedPrograms } from '../data/serviceAreaFeaturedPrograms';
import { REPLACEMENT_CLUSTER_CATEGORY } from '../data/blogRoofReplacementCluster';
import { METAL_CLUSTER_CATEGORY } from '../data/blogMetalRoofingCluster';
import { GUTTERS_FASCIA_CLUSTER_CATEGORY } from '../data/blogGuttersFasciaCluster';
import { COMMERCIAL_CLUSTER_CATEGORY } from '../data/blogCommercialRoofingCluster';
import { ROOF_REPAIR_CLUSTER_CATEGORY } from '../data/blogRoofRepairCluster';
import { renderBlogInlineLinks } from '../lib/renderBlogInlineLinks';
import {
  ColfaxArticleCta,
  ColfaxFactCards,
  ColfaxFinalCta,
  ColfaxHowItWorks,
  ColfaxInspectionForm,
  ColfaxOfferCard,
  ColfaxOfficialSourceNote,
  ColfaxOpportunityIntro,
  ColfaxSidebarForm,
} from '../components/ColfaxHomeHardeningChrome';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = post.relatedArticles
    ? post.relatedArticles
        .map(link => blogPosts.find(p => `/blog/${p.slug}` === link.href))
        .filter((p): p is (typeof blogPosts)[number] => Boolean(p))
    : blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  const isEmergencyGuide = post.category === EMERGENCY_CLUSTER_CATEGORY;
  const isFolsomGuide = post.category === FOLSOM_CLUSTER_CATEGORY;
  const isElDoradoHillsGuide = post.category === EL_DORADO_HILLS_CLUSTER_CATEGORY;
  const isReplacementGuide = post.category === REPLACEMENT_CLUSTER_CATEGORY;
  const isMetalGuide = post.category === METAL_CLUSTER_CATEGORY;
  const isGuttersFasciaGuide = post.category === GUTTERS_FASCIA_CLUSTER_CATEGORY;
  const isCommercialGuide = post.category === COMMERCIAL_CLUSTER_CATEGORY;
  const isRepairGuide = post.category === ROOF_REPAIR_CLUSTER_CATEGORY;
  const isInspectionGuide = post.category === 'Roof Inspection';
  const isColfaxGuide = post.slug === COLFAX_HOME_HARDENING_SLUG;
  const colfaxProgram = isColfaxGuide ? serviceAreaFeaturedPrograms.colfax : undefined;

  return (
    <>
      <JsonLd
        pageName={post.title}
        schemaType="BlogPosting"
        blogPost={post}
        faqs={post.faqs}
        servedAreas={isColfaxGuide ? ['Colfax'] : undefined}
        offers={
          colfaxProgram
            ? [{ name: colfaxProgram.offerSchemaName, description: colfaxProgram.offerSchemaDescription }]
            : undefined
        }
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />
      {/* HERO IMAGE */}
      <div className="relative bg-charcoal-dark overflow-hidden" style={{ maxHeight: '480px' }}>
        <OptimizedImage
          src={post.coverImage}
          alt={post.coverImageAlt ?? post.title}
          width={1200}
          height={480}
          priority
          className="max-h-[480px]"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-charcoal-dark/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="blog-article-shell mx-auto w-full px-5 sm:px-7 pb-10">
            {isColfaxGuide && (
              <Breadcrumbs
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Colfax Home Hardening Program 2026' },
                ]}
              />
            )}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider">
                <Tag size={11} /> {displayBlogCategory(post.category)}
              </span>
              <span className="text-white/30">·</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-300">
                <Clock size={11} /> {post.readTime}
              </span>
              <span className="text-white/30">·</span>
              <span className="text-xs text-gray-300">
                {post.updatedDate ? `Updated ${post.updatedDate}` : post.date}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="bg-cream py-14">
        <div className="blog-article-shell mx-auto px-5 sm:px-7">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gold font-semibold hover:text-gold-light transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All Articles
          </Link>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14 items-start">
            <article>
              {isColfaxGuide ? (
                <>
                  <ColfaxOpportunityIntro />
                  <ColfaxFactCards />
                  <ColfaxOfferCard />
                  <ColfaxHowItWorks />
                  <ColfaxOfficialSourceNote />
                </>
              ) : (
                <p className="text-body text-base leading-relaxed mb-8 text-lg font-normal border-l-4 border-gold pl-5">
                  {post.excerpt}
                </p>
              )}

              {post.relatedServices.length > 0 && (
                <div className="mb-8 card-brand bg-white border border-gray-100 p-4">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
                    Helpful Service Pages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.relatedServices.map(svc => (
                      <Link
                        key={svc.href}
                        to={svc.href}
                        className="text-sm font-semibold text-headline hover:text-gold transition-colors"
                      >
                        {svc.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="blog-article-body">
                {post.body.map((section, i) => {
                  if (section.type === 'cta' && section.ctaLabel && section.ctaHref) {
                    return (
                      <ColfaxArticleCta
                        key={i}
                        heading={section.heading || section.content}
                        statement={section.statement || ''}
                        ctaLabel={section.ctaLabel}
                        ctaHref={section.ctaHref}
                      />
                    );
                  }
                  if (section.type === 'heading') {
                    const HeadingTag = section.level === 3 ? 'h3' : 'h2';
                    const headingClass =
                      section.level === 3 ? 'blog-article-h3' : 'blog-article-h2';
                    return (
                      <HeadingTag key={i} className={headingClass}>
                        {section.content}
                      </HeadingTag>
                    );
                  }
                  if (section.type === 'list' && section.items) {
                    return (
                      <ul key={i} className="blog-article-list">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2.5" />
                            <span>{renderBlogInlineLinks(item)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (section.type === 'links' && section.links) {
                    return (
                      <div key={i} className="rounded-brand border border-gray-100 bg-white px-4 py-3">
                        {section.content && (
                          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                            {section.content}
                          </p>
                        )}
                        <ul className="space-y-1.5">
                          {section.links.map(link => (
                            <li key={link.href}>
                              {link.href.startsWith('http://') || link.href.startsWith('https://') ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-headline hover:text-gold transition-colors"
                                >
                                  {link.label}
                                </a>
                              ) : (
                                <Link
                                  to={link.href}
                                  className="font-semibold text-headline hover:text-gold transition-colors"
                                >
                                  {link.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <p key={i}>
                      {renderBlogInlineLinks(section.content)}
                    </p>
                  );
                })}
              </div>

              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-14 pt-10 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
                    Frequently Asked Questions
                  </p>
                  <FaqAccordion items={post.faqs} variant="light" size="article" />
                </div>
              )}

              {isColfaxGuide ? (
                <>
                  <ColfaxFinalCta />
                  <ColfaxInspectionForm />
                </>
              ) : (
              <div className="mt-12 card-brand bg-charcoal-dark border border-gold/20 p-6 md:p-8">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                  {isEmergencyGuide
                    ? 'Metal Roof Leak Help'
                    : isCommercialGuide
                      ? 'Commercial Metal Roofing'
                      : isRepairGuide
                        ? 'Metal Roof Repair'
                        : isGuttersFasciaGuide
                        ? 'Metal Roofing'
                        : isMetalGuide
                        ? 'Metal Roofing'
                        : isReplacementGuide
                          ? 'Metal Roof Replacement'
                          : isInspectionGuide
                            ? 'Metal Roof Inspection'
                          : isElDoradoHillsGuide
                            ? 'El Dorado Hills Metal Roofing'
                            : isFolsomGuide
                              ? 'Folsom Metal Roofing'
                              : 'Metal Roof Estimate'}
                </p>
                <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
                  {isEmergencyGuide
                    ? 'Need Metal Roof Repair After a Storm?'
                    : isCommercialGuide
                      ? 'Need Commercial Metal Roofing in Sacramento?'
                      : isRepairGuide
                        ? 'Need Metal Roof Repair in Sacramento?'
                        : isGuttersFasciaGuide
                        ? 'Looking for Metal Roofing in Sacramento?'
                        : isMetalGuide
                        ? 'Considering Metal Roofing in Sacramento?'
                        : isReplacementGuide
                          ? 'Planning a Metal Roof Replacement in Sacramento?'
                          : isInspectionGuide
                            ? 'Need a Metal Roof Inspection in Sacramento?'
                          : isElDoradoHillsGuide
                            ? 'Schedule Metal Roofing in El Dorado Hills'
                            : isFolsomGuide
                              ? 'Schedule Metal Roofing in Folsom'
                              : 'Get a Metal Roof Estimate'}
                </h2>
                <p className="text-gray-300 text-base leading-[1.7] mb-5">
                  {isEmergencyGuide
                    ? 'If a metal roof is leaking, contain water indoors and call PRC 13 Roofing during Monday through Friday business hours. We do not claim 24/7 emergency service.'
                    : isCommercialGuide
                      ? 'PRC 13 Roofing installs and repairs metal systems on commercial and light-commercial buildings where metal is the right covering — not TPO or EPDM membranes.'
                      : isRepairGuide
                        ? 'PRC 13 Roofing repairs metal roofs when the failure is localized — seams, flashing, panels, fasteners, and penetrations — after an honest inspection.'
                        : isGuttersFasciaGuide
                        ? 'This specialist site focuses on metal roofing. PRC 13 does not offer fascia or soffit repair.'
                        : isMetalGuide
                        ? 'PRC 13 Roofing installs standing seam, corrugated, and ribbed metal systems for Sacramento homeowners. Start with a metal roof inspection.'
                        : isReplacementGuide
                          ? 'PRC 13 Roofing replaces aging coverings with metal after inspection. Tear-off is the usual approach so the deck can be reviewed.'
                          : isInspectionGuide
                            ? 'Standard residential metal roof inspections are free with written findings. Commercial metal inspections are scheduled when you contact us.'
                          : isElDoradoHillsGuide
                            ? 'PRC 13 Roofing serves El Dorado Hills with metal roofing, inspection, repair, and replacement on exposed foothill properties. PRC 13 does not offer fascia or soffit repair.'
                            : isFolsomGuide
                              ? 'PRC 13 Roofing serves Folsom homeowners with metal roofing, inspection, repair, and replacement. HOA rules vary and are not a PRC 13 catalog.'
                              : 'PRC 13 Roofing serves Sacramento and nearby communities with metal roof inspections and clear written findings.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {isEmergencyGuide ? (
                    <TelLink
                      location="blog-emergency-cta"
                      className="inline-flex items-center justify-center gap-2 btn-gold px-6 py-3 text-sm font-semibold"
                    >
                      Call {PHONE_DISPLAY}
                    </TelLink>
                  ) : (
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 btn-gold px-6 py-3 text-sm font-semibold">
                      {PRIMARY_CTA}{' '}
                      <ArrowRight size={15} />
                    </Link>
                  )}
                  <Link
                    to={
                      isEmergencyGuide
                        ? '/metal-roof-repair'
                        : isCommercialGuide
                          ? '/commercial-metal-roofing'
                          : isRepairGuide
                            ? '/metal-roof-repair'
                            : isGuttersFasciaGuide
                            ? '/metal-roofing'
                            : isMetalGuide
                            ? '/metal-roofing'
                            : isReplacementGuide
                              ? '/metal-roof-replacement'
                              : isInspectionGuide
                                ? '/metal-roof-inspection'
                              : isElDoradoHillsGuide
                                ? '/service-areas/el-dorado-hills'
                                : isFolsomGuide
                                  ? '/service-areas/folsom'
                                  : '/metal-roof-inspection'
                    }
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
                  >
                    {isEmergencyGuide
                      ? 'Metal roof repair'
                      : isCommercialGuide
                        ? 'Commercial metal roofing'
                        : isRepairGuide
                          ? 'Metal roof repair'
                          : isGuttersFasciaGuide
                          ? 'Metal roofing services'
                          : isMetalGuide
                          ? 'Metal roofing services'
                          : isReplacementGuide
                            ? 'Metal roof replacement'
                            : isInspectionGuide
                              ? 'Metal roof inspection'
                            : isElDoradoHillsGuide
                              ? 'El Dorado Hills metal roofing'
                              : isFolsomGuide
                                ? 'Folsom metal roofing'
                                : 'Metal roof inspection'}
                  </Link>
                  {isCommercialGuide && (
                    <Link
                      to="/metal-roof-inspection"
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
                    >
                      Metal roof inspection <ArrowRight size={15} />
                    </Link>
                  )}
                  {isMetalGuide && (
                    <Link
                      to="/metal-roof-inspection"
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
                    >
                      Metal roof inspection <ArrowRight size={15} />
                    </Link>
                  )}
                  {isEmergencyGuide && (
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand sm:col-span-2"
                    >
                      Request help online <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </div>
              )}

              {post.relatedServices.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                    <Wrench size={12} /> Related Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.relatedServices.map(svc => (
                      <Link
                        key={svc.href}
                        to={svc.href}
                        className="card-brand px-4 py-2 text-sm font-semibold text-headline border border-gray-200 hover:border-gold hover:text-gold transition-colors"
                      >
                        {svc.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-gray-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold flex-shrink-0 text-[10px] leading-tight text-center px-1">
                  MRS
                </div>
                <div>
                  <p className="font-semibold text-headline text-sm">{BRAND_NAME}</p>
                  <p className="text-body text-sm leading-relaxed mt-1">
                    {isColfaxGuide
                      ? `${BRAND_NAME} is operated by ${BUSINESS_ENTITY_NAME}. ${LICENSE_LABEL}. City program rules come from official Colfax sources; metal-roofing guidance on this page is from PRC 13.`
                      : `${BRAND_NAME} is operated by ${BUSINESS_ENTITY_NAME}. ${LICENSE_LABEL}. Articles are based on field experience with metal roofing in the Sacramento region.`}
                  </p>
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              {isColfaxGuide ? (
                <ColfaxSidebarForm />
              ) : (
              <div className="p-6 bg-charcoal-dark border border-gold/20 rounded-brand">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Metal Roof Estimate</p>
                <p className="text-white font-bold text-base leading-snug mb-3">
                  Get a Metal Roof Estimate
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Request a metal roof inspection and written findings. We aim to schedule during normal business hours.
                </p>
                <TelLink
                  location="blog-sidebar"
                  className="flex items-center justify-center gap-2 btn-gold w-full py-3 text-sm font-semibold mb-3"
                >
                  <Phone size={15} /> Call {PHONE_DISPLAY}
                </TelLink>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors"
                >
                  Request Online <ArrowRight size={13} />
                </Link>
              </div>
              )}

              {relatedPosts.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Related Articles</p>
                  <div className="space-y-4">
                    {relatedPosts.map(r => (
                      <Link
                        key={r.slug}
                        to={`/blog/${r.slug}`}
                        className="group flex gap-3 bg-white border border-gray-100 p-3 hover:border-gold/30 transition-colors"
                      >
                        <OptimizedImage
                          src={r.coverImage}
                          alt={r.title}
                          width={64}
                          height={64}
                          className="w-16 h-16 flex-shrink-0"
                        />
                        <div>
                          <p className="text-xs text-gold font-semibold mb-1">{displayBlogCategory(r.category)}</p>
                          <p className="text-headline text-xs font-semibold leading-snug group-hover:text-gold transition-colors line-clamp-2">
                            {r.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
