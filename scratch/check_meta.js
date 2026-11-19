const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const title = html.match(/<title>([\s\S]*?)<\/title>/i);
const desc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
console.log('Title:', title ? title[1].trim() : 'none');
console.log('Desc:', desc ? desc[1].trim() : 'none');

