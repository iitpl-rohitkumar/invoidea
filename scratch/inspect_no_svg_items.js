const fs = require('fs');

const sec6 = fs.readFileSync('scratch/sec6_raw.txt', 'utf8');
const items = sec6.match(/<div class="tech-item"[\s\S]*?<\/div>\s*<\/div>/g) || [];
for (const it of items) {
  const name = it.match(/<strong>([\s\S]*?)<\/strong>/)?.[1]?.trim() || '';
  if (['Llama', 'LlamaIndex', 'ChromaDB', 'BGE', 'E5'].includes(name)) {
    console.log("=== ITEM " + name + " ===");
    console.log(it);
  }
}

