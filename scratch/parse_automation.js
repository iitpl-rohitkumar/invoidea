const fs = require('fs');
const html = fs.readFileSync('scratch/automation_raw.html', 'utf8');

// Title & meta
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'none');

const descMatch = html.match(/name="description"\s+content="([^"]*)"/i) || html.match(/content="([^"]*)"\s+name="description"/i);
console.log('Description:', descMatch ? descMatch[1] : 'none');

// Schemas
const schemas = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log('Schemas found:', schemas.length);
schemas.forEach((s, i) => {
  fs.writeFileSync(`scratch/auto_schema_${i}.json`, s, 'utf8');
});

// Sections
const secRegex = /<section[\s\S]*?<\/section>/gi;
const sections = [];
let m;
while ((m = secRegex.exec(html)) !== null) {
  const s = m[0];
  const classMatch = s.match(/class="([^"]*)"/);
  const idMatch = s.match(/id="([^"]*)"/);
  sections.push({
    cls: classMatch ? classMatch[1] : '',
    id: idMatch ? idMatch[1] : '',
    len: s.length,
    html: s,
    textPreview: s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160)
  });
}

console.log('\nFound', sections.length, 'sections:');
sections.forEach((sec, idx) => {
  console.log(`\n--- SECTION ${idx} (id: "${sec.id}", class: "${sec.cls}") ---`);
  console.log(sec.textPreview);
  fs.writeFileSync(`scratch/auto_sec_${idx}.html`, sec.html, 'utf8');
});

