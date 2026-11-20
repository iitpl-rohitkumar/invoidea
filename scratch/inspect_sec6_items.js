const fs = require('fs');

const sec6 = fs.readFileSync('scratch/sec6_raw.txt', 'utf8');

// Print all tech-items and their inner markup
const items = sec6.match(/<div class="tech-item"[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Total tech-items:", items.length);
for (const it of items) {
  const name = it.match(/<strong>([\s\S]*?)<\/strong>/)?.[1]?.trim() || '';
  const hasSvg = it.includes('<svg');
  const hasImg = it.includes('<img');
  const imgSrc = it.match(/src="([^"]*)"/)?.[1] || '';
  console.log({ name, hasSvg, hasImg, imgSrc });
}

