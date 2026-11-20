const fs = require('fs');
const path = require('path');

function clean(s) {
  if (!s) return '';
  return s.replace(/\s+/g, ' ').trim();
}

// Read raw html
const raw = fs.readFileSync('scratch/travel_raw.html', 'utf8');

// Parse Schemas
const schema0 = JSON.parse(fs.readFileSync('scratch/travel_schema_0.json', 'utf8'));
const schema1 = JSON.parse(fs.readFileSync('scratch/travel_schema_1.json', 'utf8'));
const schema2 = JSON.parse(fs.readFileSync('scratch/travel_schema_2.json', 'utf8'));

console.log("Parsing sections 0 to 17...");

// Let's create an extraction helper
for (let i = 0; i <= 17; i++) {
  const secHtml = fs.readFileSync(`scratch/travel_sec_${i}.html`, 'utf8');
  fs.writeFileSync(`scratch/sec_${i}_inspect.txt`, secHtml);
}
console.log("All sections written to scratch/sec_*_inspect.txt for review.");

