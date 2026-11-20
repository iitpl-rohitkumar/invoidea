const fs = require('fs');

const data = {};

// Section 0: Hero
const s0 = fs.readFileSync('scratch/auto_sec_0.html', 'utf8');
data.hero = {
  subheading: s0.match(/<h1[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim(),
  title: s0.match(/<h2[^>]*class="[^"]*heading-2[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.trim(),
  desc: s0.match(/<p[^>]*class="[^"]*light-text[^"]*"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim(),
  cta: s0.match(/<button[^>]*class="[^"]*theme-btn[^"]*"[^>]*>([\s\S]*?)<\/button>/i)?.[1]?.replace(/\s+/g, ' ')?.trim(),
  desktopImg: s0.match(/<img[^>]*src="([^"]*)"/i)?.[1],
  mobileImg: s0.match(/srcset="([^"]*)"/i)?.[1]
};

// Section 1: Leading
const s1 = fs.readFileSync('scratch/auto_sec_1.html', 'utf8');
data.leading = {
  subheading: s1.match(/<h2[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.trim(),
  title: s1.match(/<h3[^>]*class="[^"]*heading-2[^"]*"[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.trim(),
  paragraphs: [...s1.matchAll(/<p[^>]*class="text-muted"[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].trim()),
  imgSrc: s1.match(/data-src="([^"]*)"/i)?.[1] || s1.match(/src="([^"]*)"/i)?.[1]
};

// Section 2: Services
const s2 = fs.readFileSync('scratch/auto_sec_2.html', 'utf8');
data.services = {
  subheading: s2.match(/<h2[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.trim(),
  title: s2.match(/<h3[^>]*class="[^"]*heading-2[^"]*"[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.trim(),
  intro: s2.match(/<p[^>]*class="text-white"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim(),
  imgSrc: s2.match(/<img[^>]*src="([^"]*)"/i)?.[1],
  items: []
};
const accItems = [...s2.matchAll(/<div[^>]*class="accordion-item"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)];
accItems.forEach(item => {
  const html = item[0];
  const title = html.match(/<h3>([\s\S]*?)<\/h3>/i)?.[1]?.trim();
  const shortText = html.match(/<p[^>]*class="short-text"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim();
  const fullText = html.match(/<p[^>]*class="full-text"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim();
  if (title) {
    data.services.items.push({ title, shortText, fullText });
  }
});

// Section 3: Why Choose
const s3 = fs.readFileSync('scratch/auto_sec_3.html', 'utf8');
data.whyChoose = {
  subheading: s3.match(/<h2[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.trim(),
  title: s3.match(/<h3[^>]*class="[^"]*heading-2[^"]*"[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.trim(),
  intro: s3.match(/<p[^>]*class="text-muted"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim(),
  imgSrc: s3.match(/data-src="([^"]*)"/i)?.[1] || s3.match(/src="([^"]*)"/i)?.[1],
  items: []
};
const numMatches = [...s3.matchAll(/<div[^>]*class="number"[^>]*>\s*<h2>([\s\S]*?)<\/h2>[\s\S]*?<div[^>]*class="content-box"[^>]*>\s*<h5>([\s\S]*?)<\/h5>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)];
numMatches.forEach(m => {
  data.whyChoose.items.push({
    num: m[1].trim(),
    title: m[2].trim(),
    desc: m[3].trim()
  });
});

// Section 4: Process
const s4 = fs.readFileSync('scratch/auto_sec_4.html', 'utf8');
data.process = {
  subheading: s4.match(/<h2[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.trim(),
  title: s4.match(/<h3[^>]*class="[^"]*heading-2[^"]*"[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.trim(),
  intro: s4.match(/<p[^>]*class="text-white"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim(),
  steps: []
};
const colMatches = [...s4.matchAll(/<div[^>]*class="column"[^>]*>([\s\S]*?)<\/div>/gi)];
colMatches.forEach(col => {
  const ch = col[1];
  const svg = ch.match(/<svg[\s\S]*?<\/svg>/i)?.[0];
  const title = ch.match(/<h6>([\s\S]*?)<\/h6>/i)?.[1]?.trim();
  const desc = ch.match(/<p>([\s\S]*?)<\/p>/i)?.[1]?.trim();
  if (title) {
    data.process.steps.push({ title, desc, svg });
  }
});

// Section 5: Industries
const s5 = fs.readFileSync('scratch/auto_sec_5.html', 'utf8');
data.industries = {
  subheading: s5.match(/<h2[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.trim(),
  title: s5.match(/<h3[^>]*class="[^"]*heading-2[^"]*"[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.trim(),
  intro: s5.match(/<p[^>]*class="text-muted[^"]*"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim(),
  items: []
};
const indBoxes = [...s5.matchAll(/<div[^>]*class="box[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];
indBoxes.forEach(b => {
  const bh = b[1];
  const icon = bh.match(/src="([^"]*)"/i)?.[1] || bh.match(/data-src="([^"]*)"/i)?.[1];
  const svg = bh.match(/<svg[\s\S]*?<\/svg>/i)?.[0];
  const title = bh.match(/<h5>([\s\S]*?)<\/h5>/i)?.[1]?.trim();
  const desc = bh.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim();
  if (title) {
    data.industries.items.push({ title, desc, icon, svg });
  }
});

// Section 6: FAQ
const s6 = fs.readFileSync('scratch/auto_sec_6.html', 'utf8');
data.faq = {
  subheading: s6.match(/<h2[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.trim(),
  title: s6.match(/<h3[^>]*class="[^"]*heading-2[^"]*"[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.trim(),
  items: []
};
const faqItems = [...s6.matchAll(/<div[^>]*class="accordion-item"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)];
faqItems.forEach(fi => {
  const fh = fi[0];
  const q = fh.match(/itemprop="name"[^>]*>([\s\S]*?)<\/button>/i)?.[1]?.trim() || fh.match(/<button[^>]*>([\s\S]*?)<\/button>/i)?.[1]?.trim();
  const body = fh.match(/<div[^>]*class="accordion-body"[^>]*>([\s\S]*?)<\/div>/i)?.[1]?.trim();
  if (q && body) {
    data.faq.items.push({ q, body });
  }
});

// Section 7: Reach Out
const s7 = fs.readFileSync('scratch/auto_sec_7.html', 'utf8');
data.reachOut = {
  subheading: s7.match(/<h2[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.trim(),
  title: s7.match(/<h3[^>]*class="[^"]*heading-2[^"]*"[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.trim(),
  desc: s7.match(/<p[^>]*class="text-muted"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.trim()
};

fs.writeFileSync('scratch/all_extracted_auto_data.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully wrote scratch/all_extracted_auto_data.json');
console.log('Services count:', data.services.items.length);
console.log('WhyChoose count:', data.whyChoose.items.length);
console.log('Process steps count:', data.process.steps.length);
console.log('Industries count:', data.industries.items.length);
console.log('FAQ count:', data.faq.items.length);

