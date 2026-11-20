const fs = require('fs');

const css = fs.readFileSync('scratch/rag_extracted_styles.css', 'utf8');

const classes = [
  'industry-gradient-bg',
  'service-item',
  'service-number',
  'service-content',
  'common-card',
  'rag-card-top',
  'rag-case-studies',
  'common-project',
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
  'mobile-app-main'
];

for (const c of classes) {
  const regex = new RegExp(`[^{}]*\\.${c}[^{}]*\\{[^{}]+\\}`, 'g');
  const matches = css.match(regex) || [];
  console.log(`=== CLASS .${c} (${matches.length} matches) ===`);
  matches.forEach(m => console.log(m.trim()));
}

