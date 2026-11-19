const fs = require('fs');
const css = fs.readFileSync('scratch/style-min.css', 'utf8');

const matches = [...css.matchAll(/([^{}]*tech-panel[^{}]*\{[^}]*\})/gi)].map(m => m[1].trim());
console.log('tech-panel matches:');
matches.forEach(m => console.log(m));

const itemMatches = [...css.matchAll(/([^{}]*tech-items?[^{}]*\{[^}]*\})/gi)].map(m => m[1].trim());
console.log('tech-items matches:');
itemMatches.forEach(m => console.log(m));

