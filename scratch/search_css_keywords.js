const fs = require('fs');

const s0 = fs.readFileSync('scratch/rag_style_0.css', 'utf8');
const s1 = fs.readFileSync('scratch/rag_style_1.css', 'utf8');
const s5 = fs.readFileSync('scratch/rag_style_5.css', 'utf8');

const combined = s0 + '\n' + s1 + '\n' + s5;

const keywords = ['industry-gradient-bg', 'ai-services', 'service-item', 'service-number', 'common-card', 'rag-card-top', 'rag-case-studies', 'common-project', 'tech-tabs', 'tech-tab', 'tech-panel', 'custom-steps', 'cutom-step-item'];

for (const k of keywords) {
  const count = (combined.match(new RegExp(k, 'g')) || []).length;
  console.log(`Keyword "${k}": ${count} occurrences`);
}

// Let's also check if style-min.css has some of these
const styleMin = fs.readFileSync('scratch/style-min.css', 'utf8');
for (const k of keywords) {
  const count = (styleMin.match(new RegExp(k, 'g')) || []).length;
  console.log(`In style-min "${k}": ${count} occurrences`);
}

