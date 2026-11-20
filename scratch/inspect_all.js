const fs = require('fs');

for (let i = 0; i < 8; i++) {
  console.log(`\n======================================================`);
  console.log(`                    SECTION ${i}                      `);
  console.log(`======================================================`);
  const content = fs.readFileSync(`scratch/section_${i}.html`, 'utf8');
  console.log(content.slice(0, 1000));
}

