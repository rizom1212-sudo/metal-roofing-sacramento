import type { BlogPost, BlogSection } from '../data/blog';

export type MetalIntent = 'inspection' | 'replacement' | 'repair' | 'commercial' | 'storm' | 'general';

export function detectMetalIntent(title: string): MetalIntent {
  const t = title.toLowerCase();
  if (t.includes('inspect')) return 'inspection';
  if (t.includes('commercial')) return 'commercial';
  if (t.includes('storm') || t.includes('hail') || t.includes('wind') || t.includes('insurance')) return 'storm';
  if (t.includes('replac') || t.includes('cost') && t.includes('material')) return 'replacement';
  if (t.includes('repair') || t.includes('leak') || t.includes('flashing') || t.includes('skylight') || t.includes('chimney')) {
    return 'repair';
  }
  if (t.includes('replac') || t.includes('financing') || t.includes('older home') || t.includes('best time')) {
    return 'replacement';
  }
  return 'general';
}

/** Stale website-brand suffix in titles → specialist site name. Operator body copy is unchanged. */
export function brandSeoTitle(title: string | undefined): string | undefined {
  if (!title) return title;
  return title
    .replace(/\s*\|\s*PRC 13 Roofing\s*$/i, ' | Metal Roofing Sacramento')
    .replace(/\s*\|\s*PRC 13\s*$/i, ' | Metal Roofing Sacramento');
}

/**
 * Contextual hire-language rewrite. Does not blindly replace "roof" with "metal roof".
 * Comparison language (shingles, tile, TPO) is preserved unless it is the hired service.
 */
export function rewriteHireLanguage(input: string, intent: MetalIntent): string {
  if (!input) return input;

  let text = input;
  text = text.replace(
    /PRC 13(?: Roofing)? installs architectural shingles, standing seam and corrugated metal, and tile roofing/gi,
    'PRC 13 Roofing Inc. installs standing seam, corrugated, and ribbed metal systems. This specialist site does not promote shingle or tile installation as a public offering',
  );
  text = text.replace(
    /PRC 13(?: Roofing)? installs architectural shingles, tile(?: roofing)?, and metal(?: roof systems)?/gi,
    'PRC 13 Roofing Inc. installs metal roof systems for Sacramento replacements. Shingles and tile are common existing coverings we can replace with metal after inspection',
  );
  text = text.replace(
    /PRC 13(?: Roofing)? installs all three(?: and explains tradeoffs during a free inspection)?/gi,
    'PRC 13 Roofing Inc. installs metal roofing and explains how it compares with shingles or tile you may have now',
  );
  text = text.replace(/Does PRC 13 install all three material types\?/gi, 'Does PRC 13 install metal as a replacement covering?');
  text = text.replace(/Can PRC 13 install either material\?/gi, 'Does PRC 13 install metal roofing?');

  const held: string[] = [];
  text = text.replace(/metal roof(?:ing|s)?/gi, match => {
    const token = `§M${held.length}§`;
    held.push(match);
    return token;
  });

  const replaceHire = (source: string, pattern: RegExp, replacement: string) =>
    source.replace(pattern, replacement);

  text = replaceHire(text, /(?<!metal )(?<!Metal )free roof inspections\b/gi, 'free residential metal roof inspections');
  text = replaceHire(text, /(?<!metal )(?<!Metal )free roof inspection\b/gi, 'free residential metal roof inspection');
  text = replaceHire(text, /no-obligation roof inspection/gi, 'no-obligation metal roof inspection');
  text = replaceHire(text, /Schedule Your Free Roof Inspection/gi, 'Request a Metal Roof Inspection');
  text = replaceHire(text, /Schedule a Free Inspection/gi, 'Request a Metal Roof Inspection');
  text = replaceHire(text, /Need a Roof Inspection/gi, 'Need a Metal Roof Inspection');
  text = replaceHire(text, /Need Roof Repair/gi, 'Need Metal Roof Repair');
  text = replaceHire(text, /Need Commercial Roofing Help/gi, 'Need Commercial Metal Roofing');
  text = replaceHire(text, /Planning a Roof Replacement/gi, 'Planning a Metal Roof Replacement');
  text = replaceHire(text, /Need Gutter or Siding Help/gi, 'Looking for Metal Roofing Help');
  text = replaceHire(text, /Need Emergency Roof Repair/gi, 'Need Metal Roof Leak Help');
  text = replaceHire(text, /emergency roof repair/gi, 'urgent metal roof leak help');
  text = replaceHire(text, /Emergency Roof Repair/g, 'Urgent Metal Roof Leak Help');
  text = replaceHire(text, /(?<!metal )(?<!Metal )(?<!shingle )(?<!tile )(?<!asphalt )roof inspections\b/gi, 'metal roof inspections');
  text = replaceHire(text, /(?<!metal )(?<!Metal )(?<!shingle )(?<!tile )(?<!asphalt )roof inspection\b/gi, 'metal roof inspection');
  text = replaceHire(text, /(?<!metal )(?<!Metal )(?<!shingle )(?<!tile )(?<!asphalt )roof replacements\b/gi, 'metal roof replacements');
  text = replaceHire(text, /(?<!metal )(?<!Metal )(?<!shingle )(?<!tile )(?<!asphalt )roof replacement\b/gi, 'metal roof replacement');
  text = replaceHire(text, /(?<!metal )(?<!Metal )(?<!shingle )(?<!tile )roof repairs\b/gi, 'metal roof repairs');
  text = replaceHire(text, /(?<!metal )(?<!Metal )(?<!shingle )(?<!tile )roof repair\b/gi, 'metal roof repair');
  text = replaceHire(text, /(?<!metal )(?<!Metal )commercial roofing\b/gi, 'commercial metal roofing');
  text = replaceHire(text, /informed roofing decisions/gi, 'informed metal-roofing decisions');
  text = replaceHire(text, /practical roofing decisions/gi, 'practical metal-roofing decisions');
  text = replaceHire(text, /Local roofing expertise/g, 'Local metal-roofing expertise');
  text = replaceHire(text, /Why Homeowners Choose PRC 13 Roofing/g, 'Why homeowners choose this metal-roofing team');
  text = replaceHire(
    text,
    /architectural shingles, tile, or metal/gi,
    'metal as the new covering — shingles and tile are common existing roofs',
  );
  text = replaceHire(
    text,
    /shingle, tile, and metal/gi,
    'metal versus the shingle or tile covering you may have now',
  );
  text = replaceHire(text, /Contact PRC 13\b/g, 'Get a Metal Roof Estimate');
  text = replaceHire(
    text,
    /most Sacramento replacements use architectural shingles, but tile and metal are strong options when longevity or neighborhood style matters/gi,
    'many Sacramento homes currently have architectural shingles or tile. This specialist site’s replacement offering is metal roofing, chosen when longevity or a metal look is the goal',
  );
  text = replaceHire(text, /Schedule a free roof inspection/gi, 'Request a metal roof inspection');
  text = replaceHire(text, /Schedule a free inspection/gi, 'Request a metal roof inspection');

  if (intent === 'repair' || intent === 'storm') {
    text = replaceHire(text, /\bmissing shingles?\b/gi, 'damaged metal panels, trim, or flashings');
    text = replaceHire(text, /\blifted shingles?\b/gi, 'lifted metal panels or edge trim');
    text = replaceHire(text, /\bcurling shingles?\b/gi, 'worn coatings or stressed metal panels');
    text = replaceHire(text, /\bgranule loss\b/gi, 'coating wear or granule loss on any remaining shingle slopes');
  }

  if (intent === 'commercial') {
    text = replaceHire(
      text,
      /We work on flat and low-slope systems including TPO, EPDM, modified bitumen, and built-up roofing for small to mid-size Sacramento area properties\./gi,
      'This specialist site’s commercial offering is metal panel systems — standing seam or other metal profiles — on small to mid-size Sacramento-area buildings. TPO and EPDM membranes are not the hired service here.',
    );
    text = replaceHire(
      text,
      /full inspection of membrane condition, drainage, penetrations, seams, and flashing/gi,
      'full inspection of the metal system: panels, seams, flashings, penetrations, and drainage',
    );
    text = replaceHire(text, /Blistering, bubbling, or cracked membrane across large areas/gi, 'Widespread panel, seam, or coating failure across large areas');
    text = replaceHire(text, /HVAC penetration leaks that trace to aged membrane/gi, 'HVAC penetration leaks that trace to failed flashings or panel details');
    text = replaceHire(text, /Localized membrane cracks, failed seams/gi, 'Localized panel damage, failed seams');
    text = replaceHire(text, /Compare membranes on TPO vs EPDM\.?/gi, 'TPO and EPDM comparison was retired from this specialist site.');
    text = replaceHire(text, /Compare systems: TPO vs EPDM guide/gi, 'Metal panel systems, not a membrane catalog');
    text = replaceHire(
      text,
      /PRC 13 can schedule commercial work before or after business hours, or on weekends, to minimize disruption\./gi,
      'PRC 13 schedules commercial metal work during posted Monday–Friday business hours when possible, and can discuss timing around your operations. Saturday and Sunday are listed as closed.',
    );
  }

  if (intent === 'inspection') {
    text = replaceHire(
      text,
      /Look for missing shingles, lifted edges, clogged gutters/gi,
      'Look for damaged panels or flashings on metal, missing shingles on asphalt, clogged gutters',
    );
  }

  held.forEach((value, index) => {
    text = text.replace(`§M${index}§`, value);
  });

  return text.replace(/metal metal /gi, 'metal ').replace(/Metal metal /g, 'Metal ');
}

function rewriteSection(section: BlogSection, intent: MetalIntent): BlogSection {
  const next: BlogSection = {
    ...section,
    content: rewriteHireLanguage(section.content, intent),
  };
  if (section.items) {
    next.items = section.items.map(item => rewriteHireLanguage(item, intent));
  }
  if (section.links) {
    next.links = section.links.map(link => ({
      ...link,
      label: rewriteHireLanguage(link.label, intent),
    }));
  }
  if (section.heading) next.heading = rewriteHireLanguage(section.heading, intent);
  if (section.statement) next.statement = rewriteHireLanguage(section.statement, intent);
  if (section.ctaLabel) next.ctaLabel = rewriteHireLanguage(section.ctaLabel, intent);
  return next;
}

export function rewriteRetargetedPost(post: BlogPost): BlogPost {
  const intent = detectMetalIntent(post.title);
  return {
    ...post,
    seoTitle: brandSeoTitle(post.seoTitle) ?? post.seoTitle,
    excerpt: rewriteHireLanguage(post.excerpt, intent),
    body: post.body.map(section => rewriteSection(section, intent)),
    faqs: post.faqs?.map(faq => ({
      question: rewriteHireLanguage(faq.question, intent),
      answer: rewriteHireLanguage(faq.answer, intent),
    })),
    relatedArticles: post.relatedArticles?.map(link => ({
      ...link,
      label: rewriteHireLanguage(link.label, intent),
    })),
    relatedServices: post.relatedServices.map(link => ({
      ...link,
      label: rewriteHireLanguage(link.label, intent),
    })),
  };
}
