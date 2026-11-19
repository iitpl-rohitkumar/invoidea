const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

function clean(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const data = {};

// 1. Hero
data.hero = {
  tag: 'REAL ESTATE APP DEVELOPMENT',
  title: 'Make Property Search Smarter with AI-Driven Real Estate Apps',
  desc: 'We develop custom real estate apps that connect property listings, buyers, agents, and leads with AI-powered search, recommendations, and communication tools.',
  ctaText: 'Book a Free 30-Minute Consultation',
  ctaHref: 'https://calendly.com/invoidea/30min',
  note: 'No obligation • Speak directly with our AI Solutions Team',
  formTitle: 'Get a Real Estate Plan',
  formSubheading: 'Start Your Project',
  formDesc: 'Share your requirements, and our Real Estate AI experts will contact you.',
  bannerBg: '/assets/realestate-app-development-company-banner.webp',
  stats: [
    { value: '1560+', label: 'Projects Completed' },
    { value: '35+', label: 'Countries Served' },
    { value: '98%', label: 'Customer Retention' },
    { value: '8+Yrs', label: 'In Industry' }
  ]
};

// 2. Leading Section
const leadingMatch = html.match(/<section>[\s\S]*?<div class="container"[^>]*>([\s\S]*?)<\/section>/i);
if (leadingMatch) {
  const h1 = leadingMatch[0].match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2 = leadingMatch[0].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const ps = [...leadingMatch[0].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => clean(m[1]));
  const img = leadingMatch[0].match(/<img[^>]+src=["']([^"']+)["']/i);
  data.leading = {
    tag: clean(h1 ? h1[1] : ''),
    title: clean(h2 ? h2[1] : ''),
    paragraphs: ps,
    image: '/assets/Building-realestate-Application-Interface.webp'
  };
}

// 3. Services Section (industry-gradient-bg)
const servSection = html.match(/<section class="industry-gradient-bg[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
if (servSection) {
  const h2 = servSection[0].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h3 = servSection[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const cards = [...servSection[0].matchAll(/<div class="col-lg-3[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];
  // let's parse card items
  const cardRegex = /<div class="[^"]*single-service-box[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  // or let's inspect the cards HTML directly
  data.services = {
    tag: clean(h2 ? h2[1] : ''),
    title: clean(h3 ? h3[1] : ''),
    htmlSnippet: servSection[0].substring(0, 3000)
  };
}

fs.writeFileSync('scratch/real_estate_parsed_preview.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Saved preview');

