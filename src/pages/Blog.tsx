import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import { blogPosts, displayBlogCategory, type BlogPost } from '../data/blog';
import { FOLSOM_CLUSTER_CATEGORY } from '../data/blogFolsomRoofingCluster';
import { EL_DORADO_HILLS_CLUSTER_CATEGORY } from '../data/blogElDoradoHillsRoofingCluster';
import { COLFAX_CLUSTER_CATEGORY } from '../data/blogColfaxHomeHardening';
import { REPLACEMENT_CLUSTER_CATEGORY } from '../data/blogRoofReplacementCluster';
import { METAL_CLUSTER_CATEGORY } from '../data/blogMetalRoofingCluster';
import { COMMERCIAL_CLUSTER_CATEGORY } from '../data/blogCommercialRoofingCluster';
import { ROOF_REPAIR_CLUSTER_CATEGORY } from '../data/blogRoofRepairCluster';

const INSPECTION_CATEGORY = 'Roof Inspection';
const FEATURED_SLUGS = [
  'metal-roofing-cost-sacramento',
  'standing-seam-metal-roofing-sacramento',
  'metal-roofing-vs-shingles-sacramento',
  'metal-roof-installation-process-sacramento',
];

function GuideCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 flex flex-col"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-gold font-semibold uppercase tracking-wider">{displayBlogCategory(post.category)}</span>
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
  );
}

function Cluster({
  eyebrow,
  heading,
  intro,
  posts,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  posts: BlogPost[];
}) {
  if (posts.length === 0) return null;
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">{eyebrow}</p>
      <h2 className="text-2xl font-bold text-headline mb-2">{heading}</h2>
      <p className="text-body text-sm leading-relaxed mb-6 max-w-2xl">{intro}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map(post => (
          <GuideCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export default function Blog() {
  const metalGuides = blogPosts.filter(post => post.category === METAL_CLUSTER_CATEGORY);
  const inspectionGuides = blogPosts.filter(post => post.category === INSPECTION_CATEGORY);
  const replacementGuides = blogPosts.filter(post => post.category === REPLACEMENT_CLUSTER_CATEGORY);
  const repairGuides = blogPosts.filter(post => post.category === ROOF_REPAIR_CLUSTER_CATEGORY);
  const commercialGuides = blogPosts.filter(post => post.category === COMMERCIAL_CLUSTER_CATEGORY);
  const folsomGuides = blogPosts.filter(post => post.category === FOLSOM_CLUSTER_CATEGORY);
  const elDoradoHillsGuides = blogPosts.filter(post => post.category === EL_DORADO_HILLS_CLUSTER_CATEGORY);
  const colfaxGuides = blogPosts.filter(post => post.category === COLFAX_CLUSTER_CATEGORY);
  const clustered = new Set([
    ...metalGuides,
    ...inspectionGuides,
    ...replacementGuides,
    ...repairGuides,
    ...commercialGuides,
    ...folsomGuides,
    ...elDoradoHillsGuides,
    ...colfaxGuides,
  ].map(post => post.slug));
  const moreGuides = blogPosts.filter(post => !clustered.has(post.slug));
  const featured = metalGuides.find(post => FEATURED_SLUGS.includes(post.slug)) ?? metalGuides[0] ?? blogPosts[0];

  return (
    <>
      <JsonLd pageName="Metal Roofing Blog" schemaType="WebPage" />
      <section className="bg-charcoal-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Metal Roofing Guides for<br />
            <span className="text-gold">Sacramento Homeowners</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Cost, standing seam, climate, installation, inspection, and repair-versus-replacement — written to support a metal-roofing buying decision.
          </p>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          {featured && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">Featured Guide</p>
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
          )}

          <Cluster
            eyebrow="Metal Roofing"
            heading="Sacramento Metal Roofing Guides"
            intro="Standing seam, cost, climate, overlay vs tear-off, cleaning, and metal vs shingles — the core specialist cluster."
            posts={metalGuides.filter(post => post.slug !== featured?.slug)}
          />
          <Cluster
            eyebrow="Inspection"
            heading="Metal Roof Inspection Resources"
            intro="What a metal roof inspection covers, how often to inspect, checklists, and insurance visits — written for Sacramento-area owners."
            posts={inspectionGuides}
          />
          <Cluster
            eyebrow="Replacement"
            heading="Metal Replacement Context"
            intro="Replacement cost, process, and materials guides retargeted to metal-roof replacement decisions."
            posts={replacementGuides}
          />
          <Cluster
            eyebrow="Repair"
            heading="Metal Roof Repair Context"
            intro="Leaks, flashing, storm damage, and repair-versus-replacement — useful when the covering is or will be metal."
            posts={repairGuides}
          />
          <Cluster
            eyebrow="Commercial"
            heading="Commercial Metal Roofing Guides"
            intro="Commercial metal systems and reroofing context. TPO vs EPDM comparison was retired from this specialist site."
            posts={commercialGuides}
          />
          <Cluster
            eyebrow="Folsom"
            heading="Metal Roofing in Folsom"
            intro="Local Folsom guides that support metal-roofing decisions for heat, HOAs, and materials."
            posts={folsomGuides}
          />
          <Cluster
            eyebrow="El Dorado Hills"
            heading="Metal Roofing in El Dorado Hills"
            intro="Foothill exposure, metal roofing, inspection, and storm documentation. Tile-only EDH articles were retired."
            posts={elDoradoHillsGuides}
          />
          <Cluster
            eyebrow="Colfax"
            heading="Colfax Home Hardening"
            intro="City of Colfax Home Hardening Program context and metal roofing relevance. City program assistance is not a PRC 13 offer."
            posts={colfaxGuides}
          />
          <Cluster
            eyebrow="More"
            heading="Additional Metal-Relevant Guides"
            intro="Storm, insurance, and related articles kept because they still help a metal-roofing customer."
            posts={moreGuides}
          />
        </div>
      </section>
    </>
  );
}
