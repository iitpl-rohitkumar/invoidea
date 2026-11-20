const fs = require('fs');

const classes = [
  'hero-section',
  'leading-aiand-ml-development-company-in-india',
  'AI-powered-solutions-for-business-growth',
  'our-Trusted-AI-and-ML-development-partner',
  'Why-Businesses-Choose-AI-banner-ML',
  'search-ads',
  'AI-powered-solutions-for-every-industry',
  'faq-section',
  'footer-form-wrapper',
  'talk-card',
  'project-form'
];

for (let i = 0; i < 8; i++) {
  const content = fs.readFileSync(`scratch/inline_style_${i}.css`, 'utf8');
  const matched = classes.filter(c => content.includes(c));
  console.log(`Style ${i} matches:`, matched);
}

