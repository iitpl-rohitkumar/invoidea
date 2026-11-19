const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const benIdx = html.indexOf('class="Benefits');
const procIdx = html.indexOf('class="custom ptb"');

console.log('Snippet between Benefits and Process:');
console.log(html.substring(benIdx + 1000, procIdx));

