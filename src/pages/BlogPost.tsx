import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Phone, ArrowRight, Wrench } from 'lucide-react';
import { blogPosts } from '../data/blog';
import JsonLd from '../components/JsonLd';
import OptimizedImage from '../components/OptimizedImage';
import FaqAccordion from '../components/FaqAccordion';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import { PRIMARY_CTA } from '../data/cta';
import { EMERGENCY_CLUSTER_CATEGORY } from '../data/blogEmergencyRoofRepairCluster';
import { FOLSOM_CLUSTER_CATEGORY } from '../data/blogFolsomRoofingCluster';
import { EL_DORADO_HILLS_CLUSTER_CATEGORY } from '../data/blogElDoradoHillsRoofingCluster';
import { renderBlogInlineLinks } from '../lib/renderBlogInlineLinks';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section className="bg-cream py-20 text-center">
        <div className="max-w-xl mx-auto px-5">
          <h1 className="text-2xl font-bold text-headline mb-4">Article not found</h1>
          <Link to="/blog" className="text-gold font-semibold hover:underline text-sm">
            ← Back to all articles
          </Link>
        </div>
      </section>
    );
  }

  const relatedPosts = post.relatedArticles
    ? post.relatedArticles
        .map(link => blogPosts.find(p => `/blog/${p.slug}` === link.href))
        .filter((p): p is (typeof blogPosts)[number] => Boolean(p))
    : blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  const isEmergencyGuide = post.category === EMERGENCY_CLUSTER_CATEGORY;
  const isFolsomGuide = post.category === FOLSOM_CLUSTER_CATEGORY;
  const isElDoradoHillsGuide = post.category === EL_DORADO_HILLS_CLUSTER_CATEGORY;

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
                    return (
                      <h2 key={i} className="text-xl font-bold text-headline mt-10 mb-2">
                        {section.content}
                      </h2>
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
                              <Link
                                to={link.href}
                                className="text-sm font-semibold text-headline hover:text-gold transition-colors"
                              >
                                {link.label}
                              </Link>
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
                    : isElDoradoHillsGuide
                      ? 'El Dorado Hills Roofing'
                      : isFolsomGuide
                        ? 'Folsom Roofing'
                        : 'Free Inspection'}
                </p>
                <h2 className="text-xl font-bold text-white mb-3">
                  {isEmergencyGuide
                    ? 'Need Emergency Roof Repair in Sacramento?'
                    : isElDoradoHillsGuide
                      ? 'Schedule Roofing Service in El Dorado Hills'
                      : isFolsomGuide
                        ? 'Schedule Roofing Service in Folsom'
                        : 'Schedule Your Free Roof Inspection'}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {isEmergencyGuide
                    ? 'Active leak or storm damage? PRC 13 Roofing responds quickly to urgent roof repair calls across Sacramento and nearby communities.'
                    : isElDoradoHillsGuide
                      ? 'PRC 13 Roofing serves El Dorado Hills homeowners with repair, replacement, tile and metal roofing, fascia repair, inspections, and emergency leak help on exposed foothill properties.'
                      : isFolsomGuide
                        ? 'PRC 13 Roofing serves Folsom homeowners with roof repair, replacement, inspections, and emergency leak help—from lake-area winds to hillside tile and shingle roofs.'
                        : 'PRC 13 Roofing serves Sacramento and nearby communities with honest inspections and clear written findings.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {isEmergencyGuide ? (
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="inline-flex items-center justify-center gap-2 btn-gold px-6 py-3 text-sm font-semibold"
                    >
                      Call {PHONE_DISPLAY}
                    </a>
                  ) : (
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 btn-gold px-6 py-3 text-sm font-semibold">
                      {PRIMARY_CTA} <ArrowRight size={15} />
                    </Link>
                  )}
                  <Link
                    to={
                      isEmergencyGuide
                        ? '/emergency-roof-repair'
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
                      : isElDoradoHillsGuide
                        ? 'El Dorado Hills roofing services'
                        : isFolsomGuide
                          ? 'Folsom roofing services'
                          : 'Roof inspection service page'}
                  </Link>
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
                  <p className="font-semibold text-headline text-sm">PRC 13 Roofing Inc.</p>
                  <p className="text-body text-xs mt-0.5">
                    Sacramento residential roofing specialists. Lic. No. 1087153. Articles are based on real field experience.
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
                  Get Your Roof Inspected Within 24 Hours
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  No pressure. Honest assessment. Sacramento homeowners scheduled same or next business day.
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center justify-center gap-2 btn-gold w-full py-3 text-sm font-semibold mb-3"
                >
                  <Phone size={15} /> Call {PHONE_DISPLAY}
                </a>
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
