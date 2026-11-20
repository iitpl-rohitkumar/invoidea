const fs = require('fs');

function clean(s) {
  if (!s) return '';
  return s.replace(/\s+/g, ' ').trim();
}

for (let i = 0; i <= 17; i++) {
  const html = fs.readFileSync(`scratch/travel_sec_${i}.html`, 'utf8');
  console.log(`\n============================ SECTION ${i} ============================`);
  const classMatch = html.match(/<section[^>]*class=["']([^"']*)["']/i);
  const idMatch = html.match(/<section[^>]*id=["']([^"']*)["']/i);
  console.log(`Class: ${classMatch ? classMatch[1] : 'none'} | ID: ${idMatch ? idMatch[1] : 'none'}`);

  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2 = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h3 = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const h4s = Array.from(html.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi)).map(m => clean(m[1].replace(/<[^>]+>/g, '')));
  const h5s = Array.from(html.matchAll(/<h5[^>]*>([\s\S]*?)<\/h5>/gi)).map(m => clean(m[1].replace(/<[^>]+>/g, '')));
  
  if (h1) console.log('H1:', clean(h1[1].replace(/<[^>]+>/g, '')));
  if (h2) console.log('H2:', clean(h2[1].replace(/<[^>]+>/g, '')));
  if (h3) console.log('H3:', clean(h3[1].replace(/<[^>]+>/g, '')));
  if (h4s.length) console.log(`H4s (${h4s.length}):`, h4s.slice(0, 4));
  if (h5s.length) console.log(`H5s (${h5s.length}):`, h5s.slice(0, 4));

  const pCount = (html.match(/<p[^>]*>/gi) || []).length;
  console.log(`Paragraph count: ${pCount}`);

  const imgs = Array.from(html.matchAll(/<img[^>]*src=["']([^"']*)["']/gi)).map(m => m[1].split('/').pop());
  if (imgs.length) console.log('Images:', imgs);
}

