const fs = require('fs');
const css = fs.readFileSync('scratch/style-min.css', 'utf8');

const classes = [
  'industry-gradient-bg',
  'ai-services',
  'service-item',
  'service-number',
  'service-content',
  'common-grid',
  'common-grid-grid',
  'common-grid-step',
  'Functionality',
  'Benefits',
  'nummber',
  'tech-tabs-wrapper',
  'tech-tabs-nav',
  'tech-tab',
  'tech-tabs-content',
  'tech-panel',
  'tech-item',
  'custom-steps',
  'cutom-step-item',
  'cutom-step-num',
  'why-choose-us',
  'hero-form-card',
  'hero-stats-strip',
  'hero-stat'
];

classes.forEach(cls => {
  const re = new RegExp(`([^}{]*\\.${cls}[^}{]*\\{[^}]*\\})`, 'gi');
  const matches = [...css.matchAll(re)].map(m => m[1].trim());
  console.log(`\n--- Class .${cls} (found ${matches.length} rules) ---`);
  matches.slice(0, 3).forEach(m => console.log(m));
});

