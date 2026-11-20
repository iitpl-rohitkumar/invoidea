const fs = require('fs');
const path = require('path');

const schema0 = JSON.parse(fs.readFileSync('scratch/travel_schema_0.json', 'utf8'));
const schema1 = JSON.parse(fs.readFileSync('scratch/travel_schema_1.json', 'utf8'));
const schema2 = JSON.parse(fs.readFileSync('scratch/travel_schema_2.json', 'utf8'));

// Extract FAQs from Sec 16
const sec16 = fs.readFileSync('scratch/sec_16_inspect.txt', 'utf8');
const qRegex = /<button[^>]*class="accordion-button[^"]*"[^>]*>([\s\S]*?)<\/button>/gi;
const aRegex = /<div class="accordion-body"[^>]*>([\s\S]*?)<\/div>/gi;
const faqs = [];
let qm, am;
while ((qm = qRegex.exec(sec16)) !== null && (am = aRegex.exec(sec16)) !== null) {
  faqs.push({
    question: qm[1].replace(/<[^>]+>/g, '').trim(),
    answer: am[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  });
}

// Extract Tech Stack from Sec 13
const sec13 = fs.readFileSync('scratch/sec_13_inspect.txt', 'utf8');
const tabs = Array.from(sec13.matchAll(/<button class="tech-tab[^"]*"[^>]*data-tab="([^"]*)"[^>]*>[\s\S]*?<i class="([^"]*)"><\/i>[\s\S]*?<span>([\s\S]*?)<\/span>/g))
  .map(m => ({ id: m[1], icon: m[2], label: m[3].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim() }));

const panels = [];
for (const tab of tabs) {
  const panelRegex = new RegExp(`<div class="tech-panel[^"]*"[^>]*id="${tab.id}"[\\s\\S]*?(?=<div class="tech-panel|<\\/div>\\s*<\\/div>\\s*<\\/div>\\s*<\\/section>)`, 'i');
  const panelHtml = sec13.match(panelRegex)?.[0] || '';
  const title = panelHtml.match(/<h5>([\s\S]*?)<\/h5>/i)?.[1]?.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim() || tab.label;
  
  const items = [];
  const itemMatches = Array.from(panelHtml.matchAll(/<div class="tech-item"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g));
  for (const it of itemMatches) {
    const name = it[1].match(/<strong>([\s\S]*?)<\/strong>/)?.[1]?.trim() || '';
    const hasSvg = it[1].includes('<svg');
    const svgMatch = it[1].match(/<svg[\s\S]*?<\/svg>/)?.[0] || '';
    const imgSrcMatch = it[1].match(/src="([^"]*)"/)?.[1] || '';
    const imgAltMatch = it[1].match(/alt="([^"]*)"/)?.[1] || '';
    const faMatch = it[1].match(/<i class="([^"]*)"><\/i>/)?.[1] || '';
    
    let iconType = 'none';
    let iconVal = '';
    if (hasSvg) {
      iconType = 'svg';
      iconVal = svgMatch;
    } else if (imgSrcMatch) {
      iconType = 'img';
      iconVal = '/assets/' + path.basename(imgSrcMatch);
    } else if (faMatch) {
      iconType = 'fa';
      iconVal = faMatch;
    }
    if (name) {
      items.push({ name, iconType, iconVal, imgAlt: imgAltMatch });
    }
  }
  panels.push({ id: tab.id, label: tab.label, icon: tab.icon, title, items });
}

// Write travelData.ts
const dataDir = path.resolve('app', '(site)', 'travel-app-development-company', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const content = `export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechItem {
  name: string;
  iconType: string;
  iconVal: string;
  imgAlt?: string;
}

export interface TechCategory {
  id: string;
  label: string;
  icon: string;
  title: string;
  items: TechItem[];
}

export const heroBannerData = {
  desktopBg: '/assets/travel-application-development-banner.webp',
  mobileBg: '/assets/travel-application-industry-banner.webp',
  subheading: 'ON-DEMAND TRAVEL APPLICATION Development',
  heading: 'Build Smarter Travel Apps with AI Features',
  ctaText: 'Book a Free 30-Minute Consultation',
  ctaLink: 'https://calendly.com/invoidea/30min',
  bannerNote: 'No obligation • Speak directly with our AI Solutions Team'
};

export const introData = {
  subheading: 'TRAVEL APP DEVELOPMENT COMPANY IN INDIA',
  heading: 'Custom Travel Apps Built for Seamless Journeys',
  text: "As a leading Travel App Development company in India, Invoidea builds secure, AI-enabled travel applications for Android, iOS, and the web. We've worked with hotel groups, tour operators, airlines, and travel marketplaces, and that background shapes how we handle the operational details generalist dev teams often overlook: how a booking flow should behave when a fare shifts mid-checkout, or how inventory stays synced across channels so the same room or seat is never sold twice. Wherever a client starts from, the goal stays the same — a platform that holds up under real booking volume, not just one that looks polished in a demo."
};

export const techStackData: TechCategory[] = ${JSON.stringify(panels, null, 2)};

export const faqData: FAQItem[] = ${JSON.stringify(faqs, null, 2)};

export const schemaData = [
  ${JSON.stringify(schema0, null, 2)},
  ${JSON.stringify(schema1, null, 2)},
  ${JSON.stringify(schema2, null, 2)}
];
`;

fs.writeFileSync(path.join(dataDir, 'travelData.ts'), content, 'utf8');
console.log("Successfully created app/(site)/travel-app-development-company/data/travelData.ts");

