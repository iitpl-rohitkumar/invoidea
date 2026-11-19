const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const cssMatches = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)];
console.log('CSS links found:', cssMatches.length);
cssMatches.forEach(m => console.log('CSS:', m[1]));

// Also find any <style> tags
const styleMatches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
console.log('Inline style tags found:', styleMatches.length);
let inlineCSS = '';
styleMatches.forEach((m, idx) => {
  inlineCSS += `\n/* Style tag ${idx + 1} */\n` + m[1];
});
fs.writeFileSync('scratch/real_estate_inline_styles.css', inlineCSS, 'utf8');
console.log('Saved inline CSS length:', inlineCSS.length);

