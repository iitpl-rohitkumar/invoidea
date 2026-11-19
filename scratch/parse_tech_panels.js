const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const startIdx = html.indexOf('class="tech-tabs-wrapper"');
const endIdx = html.indexOf('</section>', startIdx);
const techBlock = html.substring(startIdx, endIdx);

const panelRe = /<div class="tech-panel[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
// Or let's search each tech-panel
const panels = techBlock.split('<div class="tech-panel');
panels.slice(1).forEach((p, idx) => {
  const heading = p.match(/<h5>([\s\S]*?)<\/h5>/i);
  const items = [...p.matchAll(/<strong>([\s\S]*?)<\/strong>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`Panel ${idx + 1}: ${heading ? heading[1].trim() : 'unknown'}`);
  console.log('Items:', items.join(', '));
});

