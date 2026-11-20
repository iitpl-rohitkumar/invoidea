const fs = require('fs');

function clean(s) {
  return s.replace(/\s+/g, ' ').trim();
}

for (let i = 0; i <= 10; i++) {
  const html = fs.readFileSync(`scratch/rag_sec_${i}.html`, 'utf8');
  console.log(`\n============================ SECTION ${i} ============================`);
  
  // headings
  const headings = html.match(/<(h[1-6]|span|p)[^>]*class=["'][^"']*(?:title|sub|heading)[^"']*["'][^>]*>([\s\S]*?)<\/\1>/gi) || [];
  headings.forEach(h => console.log('HEAD:', clean(h)));

  // all p
  const ps = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  console.log(`Paragraphs count: ${ps.length}`);
  ps.slice(0, 4).forEach(p => console.log('  P:', clean(p.replace(/<[^>]+>/g, ''))));

  // let's see cards/boxes
  const cards = html.match(/class=["'][^"']*(?:card|box|item|col-|accordion-item|tab-pane|nav-link)[^"']*["']/gi) || [];
  const uniqueClasses = Array.from(new Set(cards.map(c => c.slice(7, -1).trim())));
  console.log('Classes found:', uniqueClasses.slice(0, 10));
}

