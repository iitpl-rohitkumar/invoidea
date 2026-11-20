const fs = require('fs');

const sec6 = fs.readFileSync('scratch/sec6_raw.txt', 'utf8');

// Tabs:
const tabs = Array.from(sec6.matchAll(/<button class="tech-tab(?: active)?" data-tab="([^"]*)">[\s\S]*?<i class="([^"]*)"><\/i>[\s\S]*?<span>([\s\S]*?)<\/span>/g))
  .map(m => ({ id: m[1], icon: m[2], label: m[3].trim() }));

console.log("Sec 6 tabs:", tabs);

// Panels:
const panels = sec6.match(/<div class="tech-panel(?: active)?" id="([^"]*)"[\s\S]*?(?=<div class="tech-panel|<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/g) || [];
console.log("Sec 6 panels count:", panels.length);

for (const p of panels) {
  const idMatch = p.match(/id="([^"]*)"/);
  const headingMatch = p.match(/<h5>([\s\S]*?)<\/h5>/);
  const items = Array.from(p.matchAll(/<div class="tech-item"[^>]*>([\s\S]*?)<\/div>/g)).map(m => {
    const text = m[1].replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/<img[\s\S]*?>/g, '').replace(/<[^>]+>/g, '').trim();
    const hasSvg = m[1].includes('<svg');
    const hasImg = m[1].includes('<img');
    const imgSrc = m[1].match(/src="([^"]*)"/)?.[1] || '';
    const imgAlt = m[1].match(/alt="([^"]*)"/)?.[1] || '';
    return { text, hasSvg, hasImg, imgSrc, imgAlt };
  });
  console.log(`Panel ${idMatch?.[1]}: heading="${headingMatch?.[1]?.trim()}" items count=${items.length}`);
  console.log('Items:', items);
}

