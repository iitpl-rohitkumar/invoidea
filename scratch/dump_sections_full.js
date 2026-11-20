const fs = require('fs');

for (let i = 0; i < 8; i++) {
  const content = fs.readFileSync(`scratch/section_${i}.html`, 'utf8');
  fs.writeFileSync(`scratch/sec_${i}_pretty.html`, content, 'utf8');
  console.log(`Section ${i} length: ${content.length}`);
}

