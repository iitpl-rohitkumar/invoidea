const fs = require('fs');
const css = fs.readFileSync('scratch/real_estate_inline_styles.css', 'utf8');

const keywords = ['industry-gradient-bg', 'service-item', 'common-grid', 'Functionality', 'Benefits', 'tech-tabs', 'cutom-step', 'why-choose-us'];

keywords.forEach(kw => {
  const idx = css.indexOf(kw);
  console.log(`Keyword "${kw}":`, idx !== -1 ? `found at pos ${idx}` : 'NOT found');
});

