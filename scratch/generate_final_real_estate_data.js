const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

function clean(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// 1. Hero
const hero = {
  tag: 'REAL ESTATE APP DEVELOPMENT',
  title: 'Make Property Search Smarter with AI-Driven Real Estate Apps',
  desc: 'We develop custom real estate apps that connect property listings, buyers, agents, and leads with AI-powered search, recommendations, and communication tools.',
  ctaText: 'Schedule A Call',
  ctaHref: 'https://calendly.com/invoidea/30min',
  note: 'No obligation • Speak directly with our AI Solutions Team',
  formTitle: 'Schedule Free Call',
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
const leading = {
  tag: 'Real Estate App Development Company in India',
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
const tabs = [
  {
    id: 'buyer',
    label: 'Buyer Features',
    intro: 'As an innovative real estate mobile app development company, we design buyer features around how someone actually shops for property — browsing, narrowing down options, and getting questions answered fast enough that they don’t lose interest.',
    features: [
      'Property Search',
      'Advanced Filters',
      'Saved Listings',
      'Virtual Property Tours',
      'Mortgage Calculator',
      'In-App Chat',
      'Push Notifications',
      'Review & Ratings'
    ],
    image: '/assets/Listing-Property-Screens.webp'
  },
  {
    id: 'seller',
    label: 'Seller Features',
    intro: 'For sellers, an app needs to make listing a property painless and keep enquiries from slipping through the cracks. Invoidea builds real estate applications that give sellers and agents direct visibility into how listings are performing and who’s reaching out.',
    features: [
      'Property Listing Management',
      'Enquiries & Leads Management',
      'Scheduled Site Visits',
      'Pricing Suggestions',
      'In-App Communication',
      'Analytics',
      'Notifications'
    ],
    image: '/assets/Search-and-Listing-Screens.webp'
  },
  {
    id: 'admin',
    label: 'Admin Features',
    intro: 'Our real estate app development approach gives admins a closer look at everything happening across the platform — from users and listings to enquiries, approvals, reports, and activity. We can also automate routine checks and bring important updates to the surface, so administrators spend less time monitoring and more time managing.',
    features: [
      'User Management',
      'Property Moderation',
      'Reports',
      'Payment Management',
      'CMS'
    ],
    image: '/assets/Dashboard-and-Transaction-Screens.webp'
  }
];

// 6. Benefits (AI Features - 8 items)
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
    id: 'frontend',
    name: 'Frontend',
    icon: 'fa-solid fa-code',
    tools: [
      { name: 'React.js', icon: 'fa-brands fa-react' },
      { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-palette' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'fa-solid fa-server',
    tools: [
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'Laravel', icon: 'fa-brands fa-laravel' },
      { name: 'Django', icon: 'fa-brands fa-python' }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile',
    icon: 'fa-solid fa-mobile-screen-button',
    tools: [
      { name: 'Flutter', icon: 'fa-solid fa-mobile-screen' },
      { name: 'React Native', icon: 'fa-brands fa-react' },
      { name: 'Swift', icon: 'fa-brands fa-apple' },
      { name: 'Kotlin', icon: 'fa-brands fa-android' }
    ]
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'fa-solid fa-layer-group',
    tools: [
      { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
      { name: 'MySQL', icon: 'fa-solid fa-database' },
      { name: 'MongoDB', icon: 'fa-solid fa-leaf' }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud',
    icon: 'fa-solid fa-cloud',
    tools: [
      { name: 'Amazon Web Services (AWS)', icon: 'fa-brands fa-aws' },
      { name: 'Azure', icon: 'fa-brands fa-microsoft' },
      { name: 'Google Cloud', icon: 'fa-brands fa-google' }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI & ML',
    icon: 'fa-solid fa-brain',
    tools: [
      { name: 'OpenAI', icon: 'fa-solid fa-brain' },
      { name: 'TensorFlow', icon: 'fa-solid fa-microchip' },
      { name: 'Python', icon: 'fa-brands fa-python' }
    ]
  },
  {
    id: 'APIs',
    name: 'APIs',
    icon: 'fa-solid fa-plug',
    tools: [
      { name: 'MLS/IDX APIs', icon: 'fa-solid fa-network-wired' },
      { name: 'Google Maps API', icon: 'fa-solid fa-map-location-dot' },
      { name: 'Payment Gateways', icon: 'fa-solid fa-credit-card' }
    ]
  },
  {
    id: 'devOps',
    name: 'DevOps',
    icon: 'fa-solid fa-gears',
    tools: [
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'Kubernetes', icon: 'fa-solid fa-cubes' },
      { name: 'CI/CD Pipelines', icon: 'fa-solid fa-timeline' }
    ]
  }
];

// 8. Process steps (10 items)
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

// 9. Why Choose Us (10 items)
const whyMatch = html.match(/<section class="why-choose-us[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
const whyChoose = [];
if (whyMatch) {
  const re = /<span class="fw-bold me-4">([\s\S]*?)<\/span>[\s\S]*?<h6[^>]*>([\s\S]*?)<\/h6>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = re.exec(whyMatch[0])) !== null) {
    whyChoose.push({
      number: clean(match[1]),
      title: clean(match[2]),
      description: clean(match[3])
    });
  }
}

// 10. FAQs (12 items)
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

console.log('Services:', servicesItems.length);
console.log('Grid items:', gridItems.length);
console.log('AI features:', aiFeatures.length);
console.log('Process steps:', processSteps.length);
console.log('Why choose:', whyChoose.length);
console.log('FAQs:', faqs.length);

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
  intro: string;
  features: string[];
  image: string;
}

export interface RealEstateAIFeature {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateTechCategory {
  id: string;
  name: string;
  icon: string;
  tools: { name: string; icon: string }[];
}

export interface RealEstateProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateWhyChooseItem {
  number: string;
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
console.log('Successfully written realEstateData.ts with all exact sections!');

