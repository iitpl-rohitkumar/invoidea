const fs = require('fs');

const styleMin = fs.readFileSync('scratch/style-min.css', 'utf8');

const s0 = fs.readFileSync('scratch/rag_style_0.css', 'utf8');
const s1 = fs.readFileSync('scratch/rag_style_1.css', 'utf8');
const s5 = fs.readFileSync('scratch/rag_style_5.css', 'utf8');

const allCss = styleMin + '\n' + s0 + '\n' + s1 + '\n' + s5;

// Let's find specific rules
const selectors = [
  'industry-gradient-bg',
  'ai-services',
  'service-item',
  'service-number',
  'common-card',
  'rag-card-top',
  'rag-case-studies',
  'common-project',
  'common-project-meta',
  'common-project-no',
  'common-project-label',
  'common-project-country',
  'common-project-content',
  'common-project-tech',
  'project-case-tag',
  'tech-tabs-wrapper',
  'tech-tabs-nav',
  'tech-tab',
  'tech-tabs-content',
  'tech-panel',
  'tech-items',
  'tech-item',
  'custom-steps',
  'cutom-step-item',
  'cutom-step-num',
  'mobile-app-main',
  'leading-aiand-ml-development-company-in-india',
  'our-Trusted-AI-and-ML-development-partner',
  'AI-powered-solutions-for-every-industry'
];

let extracted = '';

// Match css rules with regex
const ruleRegex = /([^{}]+)\{([^{}]+)\}/g;
let match;
while ((match = ruleRegex.exec(allCss)) !== null) {
  const sel = match[1];
  const body = match[2];
  if (selectors.some(s => sel.includes(s))) {
    extracted += `${sel.trim()} {\n  ${body.trim()}\n}\n\n`;
  }
}

fs.writeFileSync('scratch/rag_extracted_styles.css', extracted);
console.log("Extracted css rules length:", extracted.length);

