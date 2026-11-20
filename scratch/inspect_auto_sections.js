const fs = require('fs');

for (let i = 0; i < 8; i++) {
  console.log(`\n======================================================`);
  console.log(`                 SECTION ${i} DUMP                    `);
  console.log(`======================================================`);
  const content = fs.readFileSync(`scratch/auto_sec_${i}.html`, 'utf8');
  console.log(content);
}

