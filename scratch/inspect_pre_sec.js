const fs = require('fs');

const raw = fs.readFileSync('scratch/travel_raw.html', 'utf8');
const headerEnd = raw.indexOf('</header>');
const firstSec = raw.indexOf('<section');
console.log("Between header and first section:");
console.log(raw.slice(headerEnd + 9, firstSec));

