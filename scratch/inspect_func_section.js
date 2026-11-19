const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const funcStart = html.indexOf('class="Functionality');
const funcEnd = html.indexOf('</section>', funcStart);
console.log(html.substring(funcStart, funcEnd + 10));

