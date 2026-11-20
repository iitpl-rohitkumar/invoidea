const fs = require('fs');

function clean(str) {
  if (!str) return '';
  return str.replace(/\s+/g, ' ').trim();
}

// SEC 0: Hero
const sec0 = fs.readFileSync('scratch/rag_sec_0.html', 'utf8');
const heroSubheading = clean(sec0.match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1] || '');
const heroHeading = clean(sec0.match(/<h3[^>]*class=["']heading-2[^"']*["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1] || '');
const heroDesc = clean(sec0.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || '');

// SEC 1: Leading
const sec1 = fs.readFileSync('scratch/rag_sec_1.html', 'utf8');
const leadSubheading = clean(sec1.match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1] || '');
const leadHeading = clean(sec1.match(/<h1[^>]*class=["']heading-2["'][^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '');
const leadPs = Array.from(sec1.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)).map(m => clean(m[1].replace(/<[^>]+>/g, '')));

// SEC 2: Challenges
const sec2 = fs.readFileSync('scratch/rag_sec_2.html', 'utf8');
const chalSubheading = clean(sec2.match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1] || '');
const chalHeading = clean(sec2.match(/<h3[^>]*class=["']heading-2[^"']*["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1] || '');
const chalIntro = clean(sec2.match(/<p[^>]*class=["']light-text["'][^>]*>([\s\S]*?)<\/p>/i)?.[1] || '');
const chalItems = [];
const chalItemMatches = sec2.match(/<div class="service-item"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
for (const item of chalItemMatches) {
  const num = clean(item.match(/<div class="service-number"[^>]*>([\s\S]*?)<\/div>/i)?.[1] || '');
  const title = clean(item.match(/<h3>([\s\S]*?)<\/h3>/i)?.[1] || '');
  const desc = clean(item.match(/<p>([\s\S]*?)<\/p>/i)?.[1] || '');
  chalItems.push({ num, title, desc });
}

// SEC 3: Services
const sec3 = fs.readFileSync('scratch/rag_sec_3.html', 'utf8');
const srvSubheading = clean(sec3.match(/<h2[^>]*class=["']subheading["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1] || '');
const srvHeading = clean(sec3.match(/<h3[^>]*class=["']heading-2["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1] || '');
const srvIntro = clean(sec3.match(/<p[^>]*class=["']text-muted["'][^>]*>([\s\S]*?)<\/p>/i)?.[1] || '');
const srvItems = [];
const srvItemMatches = sec3.match(/<div class="row align-items-center mb-3">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g) ||
                       sec3.match(/<div class="col-lg-4 col-md-6 mb-[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];

// Let's inspect sec3 carefully
fs.writeFileSync('scratch/sec3_raw.txt', sec3);
fs.writeFileSync('scratch/sec4_raw.txt', fs.readFileSync('scratch/rag_sec_4.html', 'utf8'));
fs.writeFileSync('scratch/sec5_raw.txt', fs.readFileSync('scratch/rag_sec_5.html', 'utf8'));
fs.writeFileSync('scratch/sec6_raw.txt', fs.readFileSync('scratch/rag_sec_6.html', 'utf8'));
fs.writeFileSync('scratch/sec7_raw.txt', fs.readFileSync('scratch/rag_sec_7.html', 'utf8'));
fs.writeFileSync('scratch/sec8_raw.txt', fs.readFileSync('scratch/rag_sec_8.html', 'utf8'));
fs.writeFileSync('scratch/sec9_raw.txt', fs.readFileSync('scratch/rag_sec_9.html', 'utf8'));

console.log("Raw files saved. Now extracting details...");

