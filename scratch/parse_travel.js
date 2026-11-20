const fs = require('fs');

const raw = fs.readFileSync('scratch/travel_raw.html', 'utf8');

// 1. Meta & Schemas
const title = raw.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
const desc = raw.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1];
const canonical = raw.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i)?.[1];
console.log("META:");
console.log({ title, desc, canonical });

const schemas = Array.from(raw.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi))
  .map(m => m[1].trim());
console.log(`Found ${schemas.length} schemas.`);
schemas.forEach((s, idx) => {
  fs.writeFileSync(`scratch/travel_schema_${idx}.json`, s);
});

// 2. Sections
// We need to parse all sections between <header> and <footer>
// Or between </header> and <footer
let bodyContent = raw;
const headerEnd = raw.indexOf('</header>');
if (headerEnd !== -1) {
  bodyContent = raw.slice(headerEnd + 9);
}
const footerStart = bodyContent.indexOf('<footer');
if (footerStart !== -1) {
  bodyContent = bodyContent.slice(0, footerStart);
}

// Find all sections
const secMatches = bodyContent.match(/<section[\s\S]*?<\/section>/gi) || [];
console.log(`Found ${secMatches.length} sections.`);

secMatches.forEach((sec, idx) => {
  fs.writeFileSync(`scratch/travel_sec_${idx}.html`, sec);
  const classMatch = sec.match(/<section[^>]*class=["']([^"']*)["']/i);
  const idMatch = sec.match(/<section[^>]*id=["']([^"']*)["']/i);
  const h1 = sec.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const h2 = sec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const h3 = sec.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const imgs = Array.from(sec.matchAll(/<img[^>]*src=["']([^"']*)["']/gi)).map(m => m[1]);
  
  console.log(`\n--- Section ${idx} ---`);
  console.log(`Class: ${classMatch ? classMatch[1] : 'none'} | ID: ${idMatch ? idMatch[1] : 'none'}`);
  if (h1) console.log(`  H1: ${h1}`);
  if (h2) console.log(`  H2: ${h2}`);
  if (h3) console.log(`  H3: ${h3}`);
  console.log(`  Images (${imgs.length}):`, imgs.slice(0, 5));
});

