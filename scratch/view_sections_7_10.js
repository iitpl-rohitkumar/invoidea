const fs = require('fs');

for (let i = 7; i <= 10; i++) {
  console.log(`\n======================= SECTION ${i} =======================`);
  const html = fs.readFileSync(`scratch/rag_sec_${i}.html`, 'utf8');
  console.log(html.slice(0, 1500));
}

