const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const startIdx = html.indexOf('The Technology Behind Modern Real Estate Applications');
console.log(html.substring(startIdx - 500, startIdx + 3000));

