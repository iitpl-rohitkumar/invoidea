const fs = require('fs');

async function run() {
  const res = await fetch('https://invoidea.com/ai-consulting-services', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const text = await res.text();
  const cssMatches = [...text.matchAll(/href="([^"]+\.css[^"]*)"/g)].map(m => m[1]);
  console.log('CSS files:', cssMatches);

  for (const href of cssMatches) {
    const url = href.startsWith('http') ? href : 'https://invoidea.com/' + href.replace(/^\//, '');
    try {
      const r = await fetch(url);
      const c = await r.text();
      if (c.includes('tech-tabs')) {
        console.log('Found tech-tabs in:', url);
        const idx = c.indexOf('.tech-tabs');
        console.log(c.substring(idx, idx + 1000));
      }
    } catch(e) {}
  }
}
run();

