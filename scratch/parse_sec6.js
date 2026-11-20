const fs = require('fs');

const sec6 = fs.readFileSync('scratch/sec6_raw.txt', 'utf8');

// Find all panels
const panelMatches = sec6.match(/<div class="tech-panel[\s\S]*?(?=<div class="tech-panel|<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/g) || [];

console.log("Total panels matched:", panelMatches.length);

const result = [];

for (const panel of panelMatches) {
  const idMatch = panel.match(/id="([^"]*)"/);
  const id = idMatch ? idMatch[1] : '';
  const titleMatch = panel.match(/<h5>([\s\S]*?)<\/h5>/);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // get items
  const items = [];
  const itemMatches = panel.match(/<div class="tech-item"[\s\S]*?<\/div>\s*<\/div>/g) || [];
  for (const item of itemMatches) {
    const strongMatch = item.match(/<strong>([\s\S]*?)<\/strong>/);
    const strong = strongMatch ? strongMatch[1].trim() : '';
    const svgMatch = item.match(/<svg[\s\S]*?<\/svg>/);
    const svg = svgMatch ? svgMatch[0] : '';
    const imgMatch = item.match(/<img[^>]*>/);
    const img = imgMatch ? imgMatch[0] : '';
    items.push({ name: strong, svg, img });
  }
  result.push({ id, title, items });
}

console.log(JSON.stringify(result.map(r => ({ id: r.id, title: r.title, itemsCount: r.items.length, itemNames: r.items.map(i => i.name) })), null, 2));

fs.writeFileSync('scratch/sec6_structured.json', JSON.stringify(result, null, 2));

