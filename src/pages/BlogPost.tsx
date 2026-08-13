import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Phone, ArrowRight, Wrench } from 'lucide-react';
import { blogPosts } from '../data/blog';
import JsonLd from '../components/JsonLd';
import OptimizedImage from '../components/OptimizedImage';
import FaqAccordion from '../components/FaqAccordion';
import { BUSINESS_ENTITY_NAME, LICENSE_LABEL, PHONE_DISPLAY } from '../data/site';
import { PRIMARY_CTA } from '../data/cta';
import TelLink from '../components/TelLink';
import { EMERGENCY_CLUSTER_CATEGORY } from '../data/blogEmergencyRoofRepairCluster';
import { FOLSOM_CLUSTER_CATEGORY } from '../data/blogFolsomRoofingCluster';
import { EL_DORADO_HILLS_CLUSTER_CATEGORY } from '../data/blogElDoradoHillsRoofingCluster';
import { REPLACEMENT_CLUSTER_CATEGORY } from '../data/blogRoofReplacementCluster';
import { METAL_CLUSTER_CATEGORY } from '../data/blogMetalRoofingCluster';
import { GUTTERS_FASCIA_CLUSTER_CATEGORY } from '../data/blogGuttersFasciaCluster';
import { COMMERCIAL_CLUSTER_CATEGORY } from '../data/blogCommercialRoofingCluster';
import { ROOF_REPAIR_CLUSTER_CATEGORY } from '../data/blogRoofRepairCluster';
import { renderBlogInlineLinks } from '../lib/renderBlogInlineLinks';
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

  return (
    <>
      <JsonLd
        pageName={post.title}
        schemaType="BlogPosting"
        blogPost={post}
        faqs={post.faqs}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />
      {/* HERO IMAGE */}
      <div className="relative bg-charcoal-dark overflow-hidden" style={{ maxHeight: '480px' }}>
        <OptimizedImage
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={480}
          priority
          className="max-h-[480px]"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-charcoal-dark/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-5 sm:px-7 pb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider">
                <Tag size={11} /> {post.category}
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
        <div className="max-w-4xl mx-auto px-5 sm:px-7">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gold font-semibold hover:text-gold-light transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All Articles
          </Link>

          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <article>
              <p className="text-body text-base leading-relaxed mb-8 text-lg font-normal border-l-4 border-gold pl-5">
                {post.excerpt}
              </p>

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

              <div className="space-y-6">
                {post.body.map((section, i) => {
                  if (section.type === 'heading') {
                    const HeadingTag = section.level === 3 ? 'h3' : 'h2';
                    const headingClass =
                      section.level === 3
                        ? 'text-lg font-bold text-headline mt-8 mb-2'
                        : 'text-xl font-bold text-headline mt-10 mb-2';
                    return (
                      <HeadingTag key={i} className={headingClass}>
                        {section.content}
                      </HeadingTag>
                    );
                  }
                  if (section.type === 'list' && section.items) {
                    return (
                      <ul key={i} className="space-y-2.5">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-body leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                            {renderBlogInlineLinks(item)}
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
                                  className="text-sm font-semibold text-headline hover:text-gold transition-colors"
                                >
                                  {link.label}
                                </a>
                              ) : (
                                <Link
                                  to={link.href}
                                  className="text-sm font-semibold text-headline hover:text-gold transition-colors"
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
                    <p key={i} className="text-body text-sm leading-relaxed md:text-base">
                      {renderBlogInlineLinks(section.content)}
                    </p>
                  );
                })}
              </div>

              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                    Frequently Asked Questions
                  </p>
                  <FaqAccordion items={post.faqs} variant="light" compact />
                </div>
              )}

              <div className="mt-12 card-brand bg-charcoal-dark border border-gold/20 p-6 md:p-8">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                  {isEmergencyGuide
                    ? 'Emergency Help'
                    : isCommercialGuide
                      ? 'Commercial Roofing'
                      : isRepairGuide
                        ? 'Roof Repair'
                        : isGuttersFasciaGuide
                        ? 'Gutters & Fascia'
                        : isMetalGuide
                        ? 'Metal Roofing'
                        : isReplacementGuide
                          ? 'Roof Replacement'
                          : isInspectionGuide
                            ? 'Roof Inspection'
                          : isElDoradoHillsGuide
                            ? 'El Dorado Hills Roofing'
                            : isFolsomGuide
                              ? 'Folsom Roofing'
                              : 'Free Inspection'}
                </p>
                <h2 className="text-xl font-bold text-white mb-3">
                  {isEmergencyGuide
                    ? 'Need Emergency Roof Repair in Sacramento?'
                    : isCommercialGuide
                      ? 'Need Commercial Roofing Help in Sacramento?'
                      : isRepairGuide
                        ? 'Need Roof Repair in Sacramento?'
                        : isGuttersFasciaGuide
                        ? 'Need Gutter or Siding Help in Sacramento?'
                        : isMetalGuide
                        ? 'Considering Metal Roofing in Sacramento?'
                        : isReplacementGuide
                          ? 'Planning a Roof Replacement in Sacramento?'
                          : isInspectionGuide
                            ? 'Need a Roof Inspection in Sacramento?'
                          : isElDoradoHillsGuide
                            ? 'Schedule Roofing Service in El Dorado Hills'
                            : isFolsomGuide
                              ? 'Schedule Roofing Service in Folsom'
                              : 'Schedule Your Free Roof Inspection'}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {isEmergencyGuide
                    ? 'Active leak or storm damage? PRC 13 Roofing responds quickly to urgent roof repair calls across Sacramento and nearby communities.'
                    : isCommercialGuide
                      ? 'PRC 13 Roofing serves small to mid-size commercial properties in Sacramento with flat roof repair, replacement, maintenance, and leak response. Start with a commercial roof inspection or written estimate.'
                      : isRepairGuide
                        ? 'PRC 13 Roofing helps Sacramento homeowners fix shingles, flashing, chimneys, skylights, and tile with honest inspections and written repair estimates before work begins.'
                        : isGuttersFasciaGuide
                        ? 'PRC 13 Roofing installs seamless gutters, gutter guards, and siding for Sacramento homeowners. We do not offer fascia or soffit repair. Start with a free roof inspection or gutter evaluation.'
                        : isMetalGuide
                        ? 'PRC 13 Roofing installs standing seam, corrugated, and ribbed metal systems for Sacramento homeowners. Start with a free inspection and panel-style consultation.'
                        : isReplacementGuide
                          ? 'PRC 13 Roofing helps Sacramento homeowners compare shingle, tile, and metal replacement options with free inspections and written quotes before any work begins.'
                          : isInspectionGuide
                            ? 'PRC 13 Roofing provides free roof inspections across Sacramento with clear written findings for leaks, storm wear, aging materials, and repair-vs-replacement guidance.'
                          : isElDoradoHillsGuide
                            ? 'PRC 13 Roofing serves El Dorado Hills homeowners with repair, replacement, tile and metal roofing, inspections, and emergency leak help on exposed foothill properties. PRC 13 does not offer fascia or soffit repair.'
                            : isFolsomGuide
                              ? 'PRC 13 Roofing serves Folsom homeowners with roof repair, replacement, inspections, and emergency leak help—from lake-area winds to hillside tile and shingle roofs.'
                              : 'PRC 13 Roofing serves Sacramento and nearby communities with honest inspections and clear written findings.'}
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
                      {isCommercialGuide
                        ? 'Request Commercial Estimate'
                        : isRepairGuide
                          ? 'Get Roof Repair Estimate'
                          : isMetalGuide
                        ? 'Request Metal Roofing Consultation'
                        : isGuttersFasciaGuide
                          ? 'Request Gutter Evaluation'
                          : isReplacementGuide
                            ? 'Request Replacement Quote'
                            : isInspectionGuide
                              ? 'Request Free Roof Inspection'
                            : PRIMARY_CTA}{' '}
                      <ArrowRight size={15} />
                    </Link>
                  )}
                  <Link
                    to={
                      isEmergencyGuide
                        ? '/emergency-roof-repair'
                        : isCommercialGuide
                          ? '/commercial-roofing'
                          : isRepairGuide
                            ? '/roof-repair'
                            : isGuttersFasciaGuide
                            ? '/gutters-siding'
                            : isMetalGuide
                            ? '/metal-roofing'
                            : isReplacementGuide
                              ? '/roof-replacement'
                              : isInspectionGuide
                                ? '/roof-inspection'
                              : isElDoradoHillsGuide
                                ? '/service-areas/el-dorado-hills'
                                : isFolsomGuide
                                  ? '/service-areas/folsom'
                                  : '/roof-inspection'
                    }
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
                  >
                    {isEmergencyGuide
                      ? 'Emergency roof repair page'
                      : isCommercialGuide
                        ? 'Commercial roofing services'
                        : isRepairGuide
                          ? 'Roof repair services'
                          : isGuttersFasciaGuide
                          ? 'Gutters & siding services'
                          : isMetalGuide
                          ? 'Metal roofing services'
                          : isReplacementGuide
                            ? 'Roof replacement services'
                            : isInspectionGuide
                              ? 'Roof inspection services'
                            : isElDoradoHillsGuide
                              ? 'El Dorado Hills roofing services'
                              : isFolsomGuide
                                ? 'Folsom roofing services'
                                : 'Roof inspection service page'}
                  </Link>
                  {isCommercialGuide && (
                    <Link
                      to="/roof-inspection"
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
                    >
                      Commercial roof inspection <ArrowRight size={15} />
                    </Link>
                  )}
                  {isGuttersFasciaGuide && (
                    <Link
                      to="/roof-inspection"
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
                    >
                      Free roof inspection <ArrowRight size={15} />
                    </Link>
                  )}
                  {isMetalGuide && (
                    <Link
                      to="/roof-inspection"
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
                    >
                      Free roof inspection <ArrowRight size={15} />
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
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold flex-shrink-0">
                  PRC
                </div>
                <div>
                  <p className="font-semibold text-headline text-sm">{BUSINESS_ENTITY_NAME}</p>
                  <p className="text-body text-xs mt-0.5">
                    Sacramento residential roofing specialists. {LICENSE_LABEL}. Articles are based on real field experience.
                  </p>
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div
                className="p-6"
                style={{ background: '#111827', border: '1px solid rgba(201,151,0,0.2)' }}
              >
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Free Inspection</p>
                <p className="text-white font-bold text-base leading-snug mb-3">
                  Request a Free Roof Inspection
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  No pressure. Honest assessment. We aim to schedule quickly during normal business hours.
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
                          <p className="text-xs text-gold font-semibold mb-1">{r.category}</p>
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
