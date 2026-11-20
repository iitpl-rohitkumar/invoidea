const fs = require('fs');

for (let i = 0; i < 8; i++) {
  const content = fs.readFileSync(`scratch/rag_style_${i}.css`, 'utf8');
  console.log(`\n=================== STYLE BLOCK ${i} (length: ${content.length}) ===================`);
  console.log(content.slice(0, 500));
}

