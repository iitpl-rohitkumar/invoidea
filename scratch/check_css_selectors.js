const fs = require('fs');
const css = fs.readFileSync('scratch/real_estate_inline_styles.css', 'utf8');

// List selectors
const selectors = [...css.matchAll(/([^{}]+)\{/g)].map(m => m[1].trim()).filter(s => !s.startsWith('@'));
console.log('Total rules in inline CSS:', selectors.length);
console.log('Sample selectors:');
console.log(selectors.slice(0, 30).join('\n'));

