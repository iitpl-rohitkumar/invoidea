const fs = require('fs');

console.log("=== SEC 3 FULL SKELETON ===");
const sec3 = fs.readFileSync('scratch/sec_3_inspect.txt', 'utf8');
const boxes3 = Array.from(sec3.matchAll(/<div class="industry-appdevelopment-box"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g));
console.log("Sec 3 box count:", boxes3.length);
boxes3.slice(0, 5).forEach(b => console.log(b[0].slice(0, 250)));

console.log("\n=== SEC 4 FULL SKELETON ===");
const sec4 = fs.readFileSync('scratch/sec_4_inspect.txt', 'utf8');
const boxes4 = Array.from(sec4.matchAll(/<div class="industry-appdevelopment-box"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g));
console.log("Sec 4 box count:", boxes4.length);

console.log("\n=== SEC 5 FULL SKELETON ===");
const sec5 = fs.readFileSync('scratch/sec_5_inspect.txt', 'utf8');
const boxes5 = Array.from(sec5.matchAll(/<div class="industry-appdevelopment-box"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g));
console.log("Sec 5 box count:", boxes5.length);

