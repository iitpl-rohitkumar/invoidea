const fs = require('fs');

console.log("=== SEC 4 first card ===");
const sec4 = fs.readFileSync('scratch/sec4_raw.txt', 'utf8');
const card1 = sec4.match(/<div class="common-card"[\s\S]*?<\/div>\s*<\/div>/);
console.log(card1 ? card1[0] : 'not found');

console.log("\n=== SEC 9 first item ===");
const sec9 = fs.readFileSync('scratch/sec9_raw.txt', 'utf8');
const item1 = sec9.match(/<div class="accordion-item"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
console.log(item1 ? item1[0] : 'not found');

