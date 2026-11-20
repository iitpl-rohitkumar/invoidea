const fs = require('fs');

for (let i = 0; i <= 10; i++) {
  const html = fs.readFileSync(`scratch/rag_sec_${i}.html`, 'utf8');
  console.log(`\n=================== SECTION ${i} ===================`);
  
  const classMatch = html.match(/<section[^>]*class=["']([^"']*)["']/i);
  console.log(`Class: ${classMatch ? classMatch[1] : 'No class'}`);
  
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) console.log(`H1: ${h1Match[1].replace(/<[^>]+>/g, '').trim()}`);

  const h2Match = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  if (h2Match) console.log(`H2: ${h2Match[1].replace(/<[^>]+>/g, '').trim()}`);

  const subMatches = html.match(/class=["'][^"']*(?:sub-title|title-sub|sec-sub-title|subtitle)[^"']*["'][^>]*>([\s\S]*?)<\/(?:span|p|h\d)>/gi);
  if (subMatches) {
    subMatches.forEach(m => console.log(`Subtitle tag: ${m.replace(/<[^>]+>/g, '').trim()}`));
  }

  const imgMatches = html.match(/<img[^>]+>/gi) || [];
  console.log(`Images (${imgMatches.length}):`);
  imgMatches.forEach(img => {
    const src = img.match(/src=["']([^"']*)["']/i);
    const alt = img.match(/alt=["']([^"']*)["']/i);
    console.log(`  - src: ${src ? src[1] : ''} | alt: ${alt ? alt[1] : ''}`);
  });
}

