const fs = require('fs');
const html = fs.readFileSync('page_raw.html', 'utf8');

const cssLinks = [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*)"/gi)].map(m => m[1]);
console.log('CSS links:', cssLinks);

const inlineStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
console.log('Inline styles count:', inlineStyles.length);
inlineStyles.forEach((s, i) => {
  fs.writeFileSync(`scratch/inline_style_${i}.css`, s, 'utf8');
  console.log(`Inline style ${i} length:`, s.length);
});

