const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

function clean(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// 1. Hero
const hero = {
  tag: 'REAL ESTATE APP DEVELOPMENT COMPANY',
  title: 'Make Property Search Smarter with AI-Driven Real Estate Apps',
  desc: 'Invoidea develops feature-rich, scalable real estate applications for property aggregators, real estate agencies, brokers, property management companies, and construction firms. Connect property listings, buyers, agents, and leads with AI-powered search, recommendations, and communication tools.',
  ctaText: 'Schedule A Call',
  ctaHref: 'https://calendly.com/invoidea/30min',
  note: 'No obligation • Speak directly with our AI Solutions Team',
  formTitle: 'Schedule Free Call',
  formSubheading: 'Start Your Project',
  formDesc: 'Share your requirements, and our Real Estate AI experts will contact you.',
  bannerBg: '/assets/realestate-app-development-company-banner.webp',
  stats: [
    { value: '1560+', label: 'Projects Completed' },
    { value: '35+', label: 'Real Estate Apps Built' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '8+ Yrs', label: 'Industry Experience' }
  ]
};

// 2. Leading Section
const leading = {
  tag: 'REAL ESTATE APP DEVELOPMENT COMPANY IN INDIA',
  title: 'Custom Real Estate Apps Built for Modern Property Businesses',
  paragraphs: [
    'We’ve worked with brokers, builders, and property managers who needed something better than spreadsheets and outdated portals. Invoidea builds real estate apps that fit how your team actually works — not a generic template stretched to fit your business. As the top AI-powered real estate app development company in India, we bring data-driven capabilities into the workflow so the platform can recognise patterns, reduce repetitive work and support smarter decisions. The goal is simple: fewer manual steps, faster deals, and a platform that doesn’t fall apart when you scale up.',
    'A lot of real estate platforms get built backwards — someone picks a tech stack first and tries to force the business into it. We do it the other way around. We start with how listings actually move through your business, where leads get lost, and what your team is doing manually that shouldn’t be, and then build the app around that.'
  ],
  image: '/assets/Building-realestate-Application-Interface.webp'
};

// 3. Services (industry-gradient-bg)
const servMatch = html.match(/<section class="industry-gradient-bg[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
const servicesItems = [];
if (servMatch) {
  const itemMatches = [...servMatch[1].matchAll(/<div class="service-item"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];
  // let's grab service-item blocks
  const re = /<div class="service-number"[^>]*>([\s\S]*?)<\/div>[\s\S]*?<div class="service-content"[^>]*>\s*<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = re.exec(servMatch[1])) !== null) {
    servicesItems.push({
      number: clean(match[1]),
      title: clean(match[2]),
      description: clean(match[3])
    });
  }
}

// 4. Common Grid (10 items)
const gridMatch = html.match(/<section class="common-grid[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
const gridItems = [];
if (gridMatch) {
  const re = /<div class="common-grid-step"[^>]*>\s*<span class="num">([\s\S]*?)<\/span>\s*<h4>([\s\S]*?)<\/h4>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = re.exec(gridMatch[1])) !== null) {
    gridItems.push({
      number: clean(match[1]),
      title: clean(match[2]),
      description: clean(match[3])
    });
  }
}

// 5. Functionality Tabs
const funcMatch = html.match(/<section class="Functionality[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
// Let's parse the tabs
const tabs = [
  {
    id: 'buyer',
    label: 'Buyer Features',
    title: 'Intuitive Features for Property Buyers & Renters',
    bullets: [
      { title: 'Interactive Map Search', desc: 'Browse properties on dynamic maps with neighborhood boundaries, commute times, and local school ratings.' },
      { title: 'Advanced Multi-Filter Search', desc: 'Filter by price, property type, square footage, amenities, pet policies, and construction year.' },
      { title: 'Virtual Tours & 3D Walkthroughs', desc: 'Experience 360-degree immersive virtual tours and high-resolution video walkthroughs.' },
      { title: 'Mortgage & EMI Calculators', desc: 'Estimate monthly mortgage payments, property taxes, insurance, and interest rates in real time.' },
      { title: 'Saved Searches & Instant Alerts', desc: 'Save preferred searches and receive real-time push notifications when new matching properties hit the market.' },
      { title: 'Direct Agent Messaging & Tour Booking', desc: 'Connect directly with listing agents, chat securely, and schedule in-person or virtual property viewings.' }
    ],
    image: '/assets/Search-and-Listing-Screens.webp'
  },
  {
    id: 'seller',
    label: 'Seller & Agent Features',
    title: 'Robust Tools for Real Estate Agents & Property Sellers',
    bullets: [
      { title: 'Fast Property Listing Management', desc: 'Upload and manage listings with high-res photos, floor plans, virtual tours, and syndication to MLS/IDX.' },
      { title: 'Lead Capture & CRM Integration', desc: 'Automatically capture, track, and score incoming buyer leads with full CRM pipeline visibility.' },
      { title: 'Automated Valuation & Comparative Market Analysis', desc: 'Generate instant property valuation estimates and comparative market analysis (CMA) reports.' },
      { title: 'Automated Inquiry Responses', desc: 'Respond instantly to viewing requests and inquiries using automated workflows and smart bots.' },
      { title: 'Offer & Contract Management', desc: 'Receive, review, counter, and track digital offers with secure document signing integrations.' },
      { title: 'Listing Performance Analytics', desc: 'Track listing views, favorites, inquiries, and engagement metrics to optimize pricing and marketing.' }
    ],
    image: '/assets/Listing-Property-Screens.webp'
  },
  {
    id: 'admin',
    label: 'Admin & Broker Panel',
    title: 'Centralized Control & Analytics for Brokerages & Platform Admins',
    bullets: [
      { title: 'Brokerage & Agent Management', desc: 'Manage agent profiles, broker licensing, commission splits, and team access permissions.' },
      { title: 'Listing Approval & Compliance Monitoring', desc: 'Review, verify, and approve property listings to ensure data accuracy and MLS compliance.' },
      { title: 'Transaction & Commission Tracking', desc: 'Monitor closed deals, escrow milestones, transaction fee distributions, and agent payouts.' },
      { title: 'Platform-Wide Business Intelligence', desc: 'Comprehensive dashboards covering market trends, user acquisition, agent productivity, and revenue.' },
      { title: 'Subscription & Monetization Management', desc: 'Manage featured listing tiers, advertising packages, agent subscription plans, and payment gateways.' },
      { title: 'System Audits & Security Logs', desc: 'Enforce strict role-based access control, encryption standards, audit trails, and data protection.' }
    ],
    image: '/assets/Dashboard-and-Transaction-Screens.webp'
  }
];

// 6. Benefits (AI Features)
const benMatch = html.match(/<section class="Benefits[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
const aiFeatures = [];
if (benMatch) {
  const re = /<div class="nummber"[^>]*>\s*<strong>([\s\S]*?)<\/strong>[\s\S]*?<div class="content"[^>]*>\s*<h5>([\s\S]*?)<\/h5>\s*<p>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = re.exec(benMatch[1])) !== null) {
    aiFeatures.push({
      number: clean(match[1]),
      title: clean(match[2]),
      description: clean(match[3])
    });
  }
}

// 7. Tech Stack Categories
const techCategories = [
  {
    name: 'Frontend',
    tools: [
      { name: 'React.js', icon: 'fa-brands fa-react' },
      { name: 'Next.js', icon: 'fa-solid fa-code' },
      { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-palette' }
    ]
  },
  {
    name: 'Backend',
    tools: [
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'Java', icon: 'fa-brands fa-java' },
      { name: 'PHP / Laravel', icon: 'fa-brands fa-php' }
    ]
  },
  {
    name: 'Mobile App',
    tools: [
      { name: 'React Native', icon: 'fa-brands fa-react' },
      { name: 'Flutter', icon: 'fa-solid fa-mobile-screen' },
      { name: 'iOS (Swift)', icon: 'fa-brands fa-apple' },
      { name: 'Android (Kotlin)', icon: 'fa-brands fa-android' }
    ]
  },
  {
    name: 'Database & Cloud',
    tools: [
      { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
      { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
      { name: 'AWS Cloud', icon: 'fa-brands fa-aws' },
      { name: 'Google Cloud Platform', icon: 'fa-brands fa-google' }
    ]
  },
  {
    name: 'MLS / IDX & APIs',
    tools: [
      { name: 'RESO Web API', icon: 'fa-solid fa-network-wired' },
      { name: 'RETs Feeds', icon: 'fa-solid fa-server' },
      { name: 'Google Maps API', icon: 'fa-solid fa-map-location-dot' },
      { name: 'Mapbox API', icon: 'fa-solid fa-map' }
    ]
  },
  {
    name: 'AI & Analytics',
    tools: [
      { name: 'OpenAI / GPT-4', icon: 'fa-solid fa-brain' },
      { name: 'TensorFlow', icon: 'fa-solid fa-microchip' },
      { name: 'LangChain', icon: 'fa-solid fa-link' },
      { name: 'Elasticsearch', icon: 'fa-solid fa-magnifying-glass' }
    ]
  },
  {
    name: 'Payment & Security',
    tools: [
      { name: 'Stripe', icon: 'fa-brands fa-stripe' },
      { name: 'PayPal', icon: 'fa-brands fa-paypal' },
      { name: 'DocuSign API', icon: 'fa-solid fa-file-signature' },
      { name: 'SSL / OAuth 2.0', icon: 'fa-solid fa-shield-halved' }
    ]
  },
  {
    name: 'DevOps & Testing',
    tools: [
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'Kubernetes', icon: 'fa-solid fa-cubes' },
      { name: 'GitHub Actions', icon: 'fa-brands fa-github' },
      { name: 'Jenkins CI/CD', icon: 'fa-solid fa-gears' }
    ]
  }
];

// 8. Process steps
const procMatch = html.match(/<section class="custom ptb"[^>]*>([\s\S]*?)<\/section>/i);
const processSteps = [];
if (procMatch) {
  const re = /<div class="cutom-step-num"[^>]*>([\s\S]*?)<\/div>\s*<div[^>]*>\s*<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = re.exec(procMatch[1])) !== null) {
    processSteps.push({
      number: clean(match[1]),
      title: clean(match[2]),
      description: clean(match[3])
    });
  }
}

// 9. Why Choose Us (8 items)
const whyMatch = html.match(/<section class="why-choose-us[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
const whyChoose = [];
if (whyMatch) {
  const re = /<h6>([\s\S]*?)<\/h6>\s*<p>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = re.exec(whyMatch[1])) !== null) {
    whyChoose.push({
      title: clean(match[1]),
      description: clean(match[2])
    });
  }
}

// 10. FAQs
const faqMatch = html.match(/<section class="[^"]*faq-section[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
const faqs = [];
if (faqMatch) {
  const qRe = /<button class="accordion-button[^"]*"[^>]*>([\s\S]*?)<\/button>/gi;
  const aRe = /<div class="accordion-body"[^>]*>([\s\S]*?)<\/div>/gi;
  const questions = [...faqMatch[1].matchAll(qRe)].map(m => clean(m[1]));
  const answers = [...faqMatch[1].matchAll(aRe)].map(m => clean(m[1]));
  questions.forEach((q, i) => {
    if (q && answers[i]) {
      faqs.push({
        question: q,
        answer: answers[i]
      });
    }
  });
}

console.log('Services count:', servicesItems.length);
console.log('Grid items count:', gridItems.length);
console.log('AI features count:', aiFeatures.length);
console.log('Process steps count:', processSteps.length);
console.log('Why choose count:', whyChoose.length);
console.log('FAQs count:', faqs.length);

const outDir = path.join('app', '(site)', 'real-estate-app-development-company', 'data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const fileContent = `export interface RealEstateHeroData {
  tag: string;
  title: string;
  desc: string;
  ctaText: string;
  ctaHref: string;
  note: string;
  formTitle: string;
  formSubheading: string;
  formDesc: string;
  bannerBg: string;
  stats: { value: string; label: string }[];
}

export interface RealEstateLeadingData {
  tag: string;
  title: string;
  paragraphs: string[];
  image: string;
}

export interface RealEstateServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateGridItem {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateTabItem {
  id: string;
  label: string;
  title: string;
  bullets: { title: string; desc: string }[];
  image: string;
}

export interface RealEstateAIFeature {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateTechCategory {
  name: string;
  tools: { name: string; icon: string }[];
}

export interface RealEstateProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateWhyChooseItem {
  title: string;
  description: string;
}

export interface RealEstateFAQItem {
  question: string;
  answer: string;
}

export const realEstateHeroData: RealEstateHeroData = ${JSON.stringify(hero, null, 2)};

export const realEstateLeadingData: RealEstateLeadingData = ${JSON.stringify(leading, null, 2)};

export const realEstateServicesData: RealEstateServiceItem[] = ${JSON.stringify(servicesItems, null, 2)};

export const realEstateGridData: RealEstateGridItem[] = ${JSON.stringify(gridItems, null, 2)};

export const realEstateTabsData: RealEstateTabItem[] = ${JSON.stringify(tabs, null, 2)};

export const realEstateAIFeaturesData: RealEstateAIFeature[] = ${JSON.stringify(aiFeatures, null, 2)};

export const realEstateTechCategories: RealEstateTechCategory[] = ${JSON.stringify(techCategories, null, 2)};

export const realEstateProcessSteps: RealEstateProcessStep[] = ${JSON.stringify(processSteps, null, 2)};

export const realEstateWhyChooseData: RealEstateWhyChooseItem[] = ${JSON.stringify(whyChoose, null, 2)};

export const realEstateFAQData: RealEstateFAQItem[] = ${JSON.stringify(faqs, null, 2)};
`;

fs.writeFileSync(path.join(outDir, 'realEstateData.ts'), fileContent, 'utf8');
console.log('Successfully wrote realEstateData.ts');

