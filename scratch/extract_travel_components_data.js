const fs = require('fs');

function clean(s) {
  if (!s) return '';
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

console.log("=== SECTION 1 (Build Banner) ===");
const sec1 = fs.readFileSync('scratch/sec_1_inspect.txt', 'utf8');
const sec1Head = clean(sec1.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)?.[1]);
const sec1P = Array.from(sec1.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)).map(m => clean(m[1]));
console.log({ sec1Head, sec1P });

console.log("\n=== SECTION 2 (Core Services) ===");
const sec2 = fs.readFileSync('scratch/sec_2_inspect.txt', 'utf8');
const sec2Items = Array.from(sec2.matchAll(/<div class="[^"]*(?:service|card|box|item)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)).map(m => clean(m[1]));
console.log("Sec 2 sample:", sec2.slice(0, 1000));

console.log("\n=== SECTION 3 (Traveler App) ===");
const sec3 = fs.readFileSync('scratch/sec_3_inspect.txt', 'utf8');
console.log("Sec 3 sample:", sec3.slice(0, 1500));

console.log("\n=== SECTION 7 (AI Features) ===");
const sec7 = fs.readFileSync('scratch/sec_7_inspect.txt', 'utf8');
console.log("Sec 7 sample:", sec7.slice(0, 1500));

console.log("\n=== SECTION 8 (End to End) ===");
const sec8 = fs.readFileSync('scratch/sec_8_inspect.txt', 'utf8');
console.log("Sec 8 sample:", sec8.slice(0, 1500));

console.log("\n=== SECTION 10 (Portfolio) ===");
const sec10 = fs.readFileSync('scratch/sec_10_inspect.txt', 'utf8');
console.log("Sec 10 sample:", sec10.slice(0, 1500));

console.log("\n=== SECTION 11 (Why Choose) ===");
const sec11 = fs.readFileSync('scratch/sec_11_inspect.txt', 'utf8');
console.log("Sec 11 sample:", sec11.slice(0, 1500));

console.log("\n=== SECTION 12 (Travel Niches) ===");
const sec12 = fs.readFileSync('scratch/sec_12_inspect.txt', 'utf8');
console.log("Sec 12 sample:", sec12.slice(0, 1500));

console.log("\n=== SECTION 13 (Tech Stack) ===");
const sec13 = fs.readFileSync('scratch/sec_13_inspect.txt', 'utf8');
console.log("Sec 13 sample:", sec13.slice(0, 1500));

console.log("\n=== SECTION 15 (Process) ===");
const sec15 = fs.readFileSync('scratch/sec_15_inspect.txt', 'utf8');
console.log("Sec 15 sample:", sec15.slice(0, 1500));

console.log("\n=== SECTION 16 (FAQs) ===");
const sec16 = fs.readFileSync('scratch/sec_16_inspect.txt', 'utf8');
console.log("Sec 16 sample:", sec16.slice(0, 1500));

