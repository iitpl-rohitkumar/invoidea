const fs = require('fs');

const raw = fs.readFileSync('scratch/rag_raw.html', 'utf8');

const title = raw.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
const desc = raw.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1];
const canonical = raw.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i)?.[1];
const ogTitle = raw.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i)?.[1];
const ogDesc = raw.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i)?.[1];
const ogUrl = raw.match(/<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']*)["']/i)?.[1];

console.log("META:");
console.log({ title, desc, canonical, ogTitle, ogDesc, ogUrl });

console.log("\nSCHEMAS:");
for (let i = 0; i < 3; i++) {
  try {
    const s = fs.readFileSync(`scratch/rag_schema_${i}.json`, 'utf8');
    console.log(`Schema ${i}:`, JSON.parse(s)['@type'] || 'array/graph');
  } catch(e) {}
}

