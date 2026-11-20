const fs = require('fs');
const html = fs.readFileSync('page_raw.html', 'utf8');

const meta = [...html.matchAll(/<meta\s+([^>]+)>/gi)].map(m => m[1]);
console.log('Metas:');
meta.forEach(m => {
  if (m.includes('description') || m.includes('title') || m.includes('og:') || m.includes('canonical') || m.includes('keywords')) {
    console.log(m);
  }
});

const schemas = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log('\nSchemas count:', schemas.length);
schemas.forEach((s, i) => {
  fs.writeFileSync(`scratch/schema_${i}.json`, s, 'utf8');
  console.log(`Schema ${i} written`);
});

