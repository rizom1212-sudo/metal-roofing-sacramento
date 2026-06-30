import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import { blogPosts } from '../data/blog';
import { EMERGENCY_CLUSTER_CATEGORY } from '../data/blogEmergencyRoofRepairCluster';
import { FOLSOM_CLUSTER_CATEGORY } from '../data/blogFolsomRoofingCluster';
import { EL_DORADO_HILLS_CLUSTER_CATEGORY } from '../data/blogElDoradoHillsRoofingCluster';
import { REPLACEMENT_CLUSTER_CATEGORY } from '../data/blogRoofReplacementCluster';
import { METAL_CLUSTER_CATEGORY } from '../data/blogMetalRoofingCluster';
import { GUTTERS_FASCIA_CLUSTER_CATEGORY } from '../data/blogGuttersFasciaCluster';
import { COMMERCIAL_CLUSTER_CATEGORY } from '../data/blogCommercialRoofingCluster';

const INSPECTION_CATEGORY = 'Roof Inspection';
const CLUSTER_CATEGORIES = new Set([
  INSPECTION_CATEGORY,
  EMERGENCY_CLUSTER_CATEGORY,
  FOLSOM_CLUSTER_CATEGORY,
  EL_DORADO_HILLS_CLUSTER_CATEGORY,
  REPLACEMENT_CLUSTER_CATEGORY,
  METAL_CLUSTER_CATEGORY,
  GUTTERS_FASCIA_CLUSTER_CATEGORY,
  COMMERCIAL_CLUSTER_CATEGORY,
]);

export default function Blog() {
  const inspectionGuides = blogPosts.filter(post => post.category === INSPECTION_CATEGORY);
  const emergencyGuides = blogPosts.filter(post => post.category === EMERGENCY_CLUSTER_CATEGORY);
  const folsomGuides = blogPosts.filter(post => post.category === FOLSOM_CLUSTER_CATEGORY);
  const elDoradoHillsGuides = blogPosts.filter(post => post.category === EL_DORADO_HILLS_CLUSTER_CATEGORY);
  const replacementGuides = blogPosts.filter(post => post.category === REPLACEMENT_CLUSTER_CATEGORY);
  const metalGuides = blogPosts.filter(post => post.category === METAL_CLUSTER_CATEGORY);
  const guttersFasciaGuides = blogPosts.filter(post => post.category === GUTTERS_FASCIA_CLUSTER_CATEGORY);
  const commercialGuides = blogPosts.filter(post => post.category === COMMERCIAL_CLUSTER_CATEGORY);
  const generalArticles = blogPosts.filter(post => !CLUSTER_CATEGORIES.has(post.category));
  const [featured, ...rest] = generalArticles;

  return (
    <>
      <JsonLd pageName="Roofing Blog" schemaType="WebPage" />
      {/* HERO */}
      <section className="bg-charcoal-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Roofing Advice for<br />
            <span className="text-gold">Sacramento Homeowners</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Honest roofing information to help you make confident decisions, from inspections to full replacements.
          </p>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">

          {/* Featured post */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">Featured Article</p>
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-0 overflow-hidden bg-white border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="overflow-hidden">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: '260px' }}
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs text-gold font-semibold uppercase tracking-wider">
                      <Tag size={11} /> {featured.category}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={11} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-headline leading-snug mb-4 group-hover:text-gold transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-body text-sm leading-relaxed">{featured.excerpt}</p>
                </div>
                <div className="flex items-center gap-1.5 text-gold font-semibold text-sm mt-6">
                  Read Article <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </div>

          {/* Roof inspection topical cluster */}
          {inspectionGuides.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Roof Inspection Guides</p>
              <h2 className="text-2xl font-bold text-headline mb-2">Sacramento Roof Inspection Resources</h2>
              <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">
                Free inspections, costs, checklists, insurance visits, storm assessments, and more—written for Sacramento-area homeowners.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {inspectionGuides.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Emergency roof repair topical cluster */}
          {emergencyGuides.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Emergency Roof Repair Guides</p>
              <h2 className="text-2xl font-bold text-headline mb-2">Sacramento Emergency Roof Repair Resources</h2>
              <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">
                Roof leaks, storm damage, tarping, hail and wind repair, insurance claims, and when to call an emergency roofer—practical guides for Sacramento-area homeowners.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {emergencyGuides.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Sacramento roof replacement topical cluster */}
          {replacementGuides.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Sacramento Roof Replacement Guides</p>
              <h2 className="text-2xl font-bold text-headline mb-2">Roof Replacement Resources</h2>
              <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">
                Replacement cost, materials, insurance, financing, timelines, and what to expect—written for Sacramento homeowners planning a new roof.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {replacementGuides.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Metal roofing topical cluster */}
          {metalGuides.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Metal Roofing Guides</p>
              <h2 className="text-2xl font-bold text-headline mb-2">Metal Roofing Resources</h2>
              <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">
                Cost, standing seam, Sacramento climate fit, installation process, and honest shingle comparisons—for homeowners planning a long-term metal roof.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {metalGuides.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Gutters & Fascia topical cluster */}
          {guttersFasciaGuides.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Gutters &amp; Fascia Guides</p>
              <h2 className="text-2xl font-bold text-headline mb-2">Gutters &amp; Fascia Resources</h2>
              <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">
                Gutter installation, replacement cost, guards, fascia repair, and how drainage affects roof leaks—for Sacramento homeowners protecting the roofline.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {guttersFasciaGuides.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Commercial roofing topical cluster */}
          {commercialGuides.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Commercial Roofing Guides</p>
              <h2 className="text-2xl font-bold text-headline mb-2">Commercial Roofing Resources</h2>
              <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">
                Replacement, repair, TPO vs EPDM, maintenance, and leak response—for Sacramento flat and low-slope commercial properties.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {commercialGuides.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Folsom roofing topical cluster */}
          {folsomGuides.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Folsom Roofing Guides</p>
              <h2 className="text-2xl font-bold text-headline mb-2">Folsom Roofing Resources</h2>
              <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">
                Roof repair, replacement, inspections, leak fixes, storm damage, material choices, and roofing costs—written for Folsom homeowners and lake-area properties.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {folsomGuides.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* El Dorado Hills roofing topical cluster */}
          {elDoradoHillsGuides.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">El Dorado Hills Roofing Guides</p>
              <h2 className="text-2xl font-bold text-headline mb-2">El Dorado Hills Roofing Resources</h2>
              <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">
                Roof repair, replacement, inspections, tile and metal roofing, fascia repair, emergency response, and insurance claims—for foothill and hillside homes.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {elDoradoHillsGuides.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                      Read Guide <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Rest of posts grid */}
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">More Articles</p>
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white border border-gray-100 overflow-hidden hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-headline text-base leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-body text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                    Read More <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
