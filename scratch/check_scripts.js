const fs = require('fs');
const html = fs.readFileSync('page_raw.html', 'utf8');

const scripts = [...html.matchAll(/<script[^>]*src="([^"]*)"/gi)].map(m => m[1]);
console.log('Scripts:', scripts);

const inlineScripts = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log('Inline scripts count:', inlineScripts.length);
inlineScripts.forEach((s, i) => {
  if (s.length > 50) {
    console.log(`Script ${i}:`, s.slice(0, 200).replace(/\s+/g, ' '));
  }
});

