const fs = require('fs');

const sec13 = fs.readFileSync('scratch/sec_13_inspect.txt', 'utf8');
const tabs = Array.from(sec13.matchAll(/<button class="tech-tab[^"]*"[^>]*data-tab="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g))
  .map(m => ({ id: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() }));

console.log('Sec 13 tabs:', tabs);

const panelIds = Array.from(sec13.matchAll(/<div class="tech-panel[^"]*"[^>]*id="([^"]*)"/g)).map(m => m[1]);
console.log('Sec 13 panel IDs:', panelIds);

