const fs = require('fs');

const sec13 = fs.readFileSync('scratch/sec_13_inspect.txt', 'utf8');

// Print all panels in sec 13
const panels = sec13.match(/<div class="tech-panel[^"]*" id="([^"]*)"[\s\S]*?(?=<div class="tech-panel|<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/g) || [];
console.log("Total panels matched:", panels.length);

for (const p of panels) {
  const idMatch = p.match(/id="([^"]*)"/);
  const items = Array.from(p.matchAll(/<div class="tech-item"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g));
  console.log(`Panel ${idMatch?.[1]}: items count = ${items.length}`);
  items.slice(0, 3).forEach(it => {
    const strong = it[1].match(/<strong>([\s\S]*?)<\/strong>/)?.[1];
    console.log('   item:', strong);
  });
}

