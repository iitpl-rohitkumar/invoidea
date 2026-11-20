const fs = require('fs');

function clean(s) {
  if (!s) return '';
  return s.replace(/\s+/g, ' ').trim();
}

function stripTags(s) {
  if (!s) return '';
  return clean(s.replace(/<[^>]+>/g, ' '));
}

// 0. HERO BANNER (pre-section)
const raw = fs.readFileSync('scratch/travel_raw.html', 'utf8');
const heroDesktopImg = '/assets/travel-application-development-banner.webp';
const heroMobileImg = '/assets/travel-application-industry-banner.webp';
const heroSub = "ON-DEMAND TRAVEL APPLICATION Development";
const heroTitle = "Build Smarter Travel Apps with AI Features";
const heroCtaText = "Book a Free 30-Minute Consultation";
const heroCtaLink = "https://calendly.com/invoidea/30min";
const heroNote = "No obligation • Speak directly with our AI Solutions Team";

// SECTION 0: INTRO
const sec0 = fs.readFileSync('scratch/sec_0_inspect.txt', 'utf8');
const introSub = stripTags(sec0.match(/<h1[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
const introTitle = stripTags(sec0.match(/<h2[^>]*class=["']heading-2["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1]);
const introText = stripTags(sec0.match(/<p[^>]*class=["']text-muted["'][^>]*>([\s\S]*?)<\/p>/i)?.[1]);

// SECTION 1: BUILD BANNER
const sec1 = fs.readFileSync('scratch/sec_1_inspect.txt', 'utf8');
const sec1Sub = stripTags(sec1.match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1]);
const sec1Title = stripTags(sec1.match(/<h3[^>]*class=["']industry-main-heading[^"']*["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1]);
const sec1Ps = Array.from(sec1.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)).map(m => stripTags(m[1]));
const sec1Img = '/assets/travel-app-build-banner.webp';

// SECTION 2: CORE SERVICES
const sec2 = fs.readFileSync('scratch/sec_2_inspect.txt', 'utf8');
const sec2Title = stripTags(sec2.match(/<h2[^>]*class=["']industry-main-heading[^"']*["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1]);
const sec2Cards = [];
const cardBlocks = sec2.match(/<div class="col-lg-4[^"]*">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
for (const cb of cardBlocks) {
  const cTitle = stripTags(cb.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)?.[1]);
  const cDesc = stripTags(cb.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1]);
  const cList = Array.from(cb.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)).map(m => stripTags(m[1]));
  sec2Cards.push({ title: cTitle, desc: cDesc, list: cList });
}

// SECTION 3: TRAVELER APP
const sec3 = fs.readFileSync('scratch/sec_3_inspect.txt', 'utf8');
// Parse left & right features and center mockups
const sec3Title = stripTags(sec3.match(/<h3[^>]*class=["']industry-main-heading[^"']*["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1]);
const sec3Sub = stripTags(sec3.match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1]);
const sec3Items = [];
const sec3ItemMatches = Array.from(sec3.matchAll(/<div class="d-flex mb-4[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g));
for (const m of sec3ItemMatches) {
  const icon = m[1].match(/<i class="([^"]*)"><\/i>/)?.[1] || '';
  const itemTitle = stripTags(m[1].match(/<h5[^>]*>([\s\S]*?)<\/h5>/i)?.[1]);
  const itemDesc = stripTags(m[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1]);
  if (itemTitle) sec3Items.push({ icon, title: itemTitle, desc: itemDesc });
}

// SECTION 4: VENDOR APP
const sec4 = fs.readFileSync('scratch/sec_4_inspect.txt', 'utf8');
const sec4Title = stripTags(sec4.match(/<h3[^>]*class=["']industry-main-heading[^"']*["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1]);
const sec4Sub = stripTags(sec4.match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1]);
const sec4Items = [];
const sec4ItemMatches = Array.from(sec4.matchAll(/<div class="d-flex mb-4[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g));
for (const m of sec4ItemMatches) {
  const icon = m[1].match(/<i class="([^"]*)"><\/i>/)?.[1] || '';
  const itemTitle = stripTags(m[1].match(/<h5[^>]*>([\s\S]*?)<\/h5>/i)?.[1]);
  const itemDesc = stripTags(m[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1]);
  if (itemTitle) sec4Items.push({ icon, title: itemTitle, desc: itemDesc });
}

// SECTION 5: ADMIN APP
const sec5 = fs.readFileSync('scratch/sec_5_inspect.txt', 'utf8');
const sec5Title = stripTags(sec5.match(/<h3[^>]*class=["']industry-main-heading[^"']*["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1]);
const sec5Sub = stripTags(sec5.match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1]);
const sec5Items = [];
const sec5ItemMatches = Array.from(sec5.matchAll(/<div class="d-flex mb-4[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g));
for (const m of sec5ItemMatches) {
  const icon = m[1].match(/<i class="([^"]*)"><\/i>/)?.[1] || '';
  const itemTitle = stripTags(m[1].match(/<h5[^>]*>([\s\S]*?)<\/h5>/i)?.[1]);
  const itemDesc = stripTags(m[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1]);
  if (itemTitle) sec5Items.push({ icon, title: itemTitle, desc: itemDesc });
}

console.log("Sections 0-5 parsed successfully.");
console.log({
  sec2CardsCount: sec2Cards.length,
  sec3ItemsCount: sec3Items.length,
  sec4ItemsCount: sec4Items.length,
  sec5ItemsCount: sec5Items.length
});

fs.writeFileSync('scratch/travel_parsed_p1.json', JSON.stringify({
  hero: { heroDesktopImg, heroMobileImg, heroSub, heroTitle, heroCtaText, heroCtaLink, heroNote },
  intro: { introSub, introTitle, introText },
  buildBanner: { sec1Sub, sec1Title, sec1Ps, sec1Img },
  coreServices: { sec2Title, sec2Cards, centerImg: '/assets/travel_core_service_image.webp' },
  travelerApp: { sec3Sub, sec3Title, sec3Items },
  vendorApp: { sec4Sub, sec4Title, sec4Items },
  adminApp: { sec5Sub, sec5Title, sec5Items }
}, null, 2));

