const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

// Function to clean text
function clean(str) {
  return str ? str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
}

// Extract hero banner
const heroBanner = html.match(/<div class="banner"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i);
if (heroBanner) {
  console.log('=== HERO BANNER ===');
  const h2 = heroBanner[0].match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i);
  const h1 = heroBanner[0].match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const p = heroBanner[0].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  console.log('Subheading:', clean(h2 ? h2[1] : ''));
  console.log('H1:', clean(h1 ? h1[1] : ''));
  console.log('P:', clean(p ? p[1] : ''));
}

// Extract stats strip
const stats = [...html.matchAll(/<div class="banner-bottom-text[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)];
console.log('Stats found:', stats.length);
stats.forEach(s => console.log('Stat:', clean(s[1])));

// Extract all sections with their classes, headings, and key content
const sections = [...html.matchAll(/<section[^>]*class=["']([^"']+)["'][^>]*>([\s\S]*?)<\/section>/gi)];
console.log(`\nFound ${sections.length} sections:`);
sections.forEach((s, idx) => {
  const cls = s[1];
  const content = s[2];
  const h2 = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h3 = content.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const h4 = content.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
  const h5 = content.match(/<h5[^>]*>([\s\S]*?)<\/h5>/i);
  const h6 = content.match(/<h6[^>]*>([\s\S]*?)<\/h6>/i);
  console.log(`\n[Section ${idx + 1}] Class: ${cls}`);
  if (h2) console.log('  H2:', clean(h2[1]));
  if (h3) console.log('  H3:', clean(h3[1]));
  if (h4) console.log('  H4:', clean(h4[1]));
  if (h5) console.log('  H5:', clean(h5[1]));
  if (h6) console.log('  H6:', clean(h6[1]));
});

