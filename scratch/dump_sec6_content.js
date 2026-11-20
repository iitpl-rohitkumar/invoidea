const fs = require('fs');
const sec6 = fs.readFileSync('scratch/sec6_raw.txt', 'utf8');
const pIndex = sec6.indexOf('<div class="tech-tabs-content"');
console.log(sec6.slice(pIndex, pIndex + 4000));

