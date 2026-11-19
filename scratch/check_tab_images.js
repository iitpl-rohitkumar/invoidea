const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const t1 = html.indexOf('id="travel"');
const t2 = html.indexOf('id="vendor"');
const t3 = html.indexOf('id="admin"');

console.log('Tab 1 image:', html.substring(t1, t2).match(/<img[^>]+src=["']([^"']+)["']/i)[1]);
console.log('Tab 2 image:', html.substring(t2, t3).match(/<img[^>]+src=["']([^"']+)["']/i)[1]);
console.log('Tab 3 image:', html.substring(t3).match(/<img[^>]+src=["']([^"']+)["']/i)[1]);

