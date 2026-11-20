const fs = require('fs');
const html = fs.readFileSync('page_raw.html', 'utf8');

// Find main tag or container
const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
const content = mainMatch ? mainMatch[0] : html;

// Extract all sections
const secRegex = /<section[\s\S]*?<\/section>/gi;
const sections = [];
let m;
while ((m = secRegex.exec(content)) !== null) {
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

console.log('Found', sections.length, 'sections:');
sections.forEach((sec, idx) => {
  console.log(`\n--- SECTION ${idx} (id: "${sec.id}", class: "${sec.cls}") ---`);
  console.log(sec.textPreview);
});

// Write each section to scratch/section_X.html for detailed inspection
sections.forEach((sec, idx) => {
  fs.writeFileSync(`scratch/section_${idx}.html`, sec.html, 'utf8');
});
console.log('\nWrote all sections to scratch/section_*.html');

