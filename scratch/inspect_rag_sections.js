const fs = require('fs');

for (let i = 0; i < 11; i++) {
  console.log(`\n======================================================`);
  console.log(`                 SECTION ${i} DUMP                    `);
  console.log(`======================================================`);
  const content = fs.readFileSync(`scratch/rag_sec_${i}.html`, 'utf8');
  console.log('Length:', content.length);
  // print first 600 chars
  console.log(content.slice(0, 600));
}

