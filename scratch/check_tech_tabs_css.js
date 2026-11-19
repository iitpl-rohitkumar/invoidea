const fs = require('fs');
const css = fs.readFileSync('scratch/style-min.css', 'utf8');

const matches = [...css.matchAll(/([^{}]*tech-tab[^{}]*\{[^}]*\})/gi)].map(m => m[1].trim());
console.log('tech-tab matches found:', matches.length);
matches.forEach(m => console.log(m));

