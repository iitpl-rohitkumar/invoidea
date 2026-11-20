const fs = require('fs');

const data = {};

for (let i = 0; i <= 10; i++) {
  const html = fs.readFileSync(`scratch/rag_sec_${i}.html`, 'utf8');
  data[`sec_${i}`] = html;
}

// Let's write a pretty dumper of each section's text and structure
for (let i = 0; i <= 10; i++) {
  fs.writeFileSync(`scratch/rag_clean_sec_${i}.html`, data[`sec_${i}`]);
}

console.log("Done saving clean sections");

