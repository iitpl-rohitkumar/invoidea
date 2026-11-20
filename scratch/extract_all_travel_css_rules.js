const fs = require('fs');

const styleMin = fs.readFileSync('scratch/style-min.css', 'utf8');
const s0 = fs.readFileSync('scratch/travel_style_0.css', 'utf8');
const s1 = fs.readFileSync('scratch/travel_style_1.css', 'utf8');
const s5 = fs.readFileSync('scratch/travel_style_5.css', 'utf8');

const combined = styleMin + '\n' + s0 + '\n' + s1 + '\n' + s5;

const selectors = [
  'mobile-app-main',
  'other-hero-section-v',
  'industry-main-heading',
  'secondry-gradient-bg',
  'border-bg',
  'industry-app-services-wrapper',
  'customer-app-services-wrapper',
  'restaurant-app-services-wrapper',
  'taxi-wrapper',
  'industry-app-feature-wrapper',
  'industry-gradient-bg',
  'industry-app-development-wrapper',
  'latest-works-section',
  'why-choose-section-wrapper',
  'hr-management-system-in-india',
  'different-industries-wrapper',
  'industry-reach-wider-audience-wrapper',
  'success-section',
  'industry-bg-cover-img',
  'service-item',
  'footer-form-wrapper',
  'talk-card',
  'project-form',
  'tech-tab',
  'tech-panel'
];

let extracted = '';
const ruleRegex = /([^{}]+)\{([^{}]+)\}/g;
let m;
while ((m = ruleRegex.exec(combined)) !== null) {
  const sel = m[1];
  const body = m[2];
  if (selectors.some(s => sel.includes(s))) {
    extracted += `${sel.trim()} {\n  ${body.trim()}\n}\n\n`;
  }
}

fs.writeFileSync('scratch/travel_extracted.css', extracted);
console.log(`Extracted CSS rules length: ${extracted.length} bytes`);

