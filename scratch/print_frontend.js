const fs = require('fs');

const sec13 = fs.readFileSync('scratch/sec_13_inspect.txt', 'utf8');
const pStart = sec13.indexOf('id="frontend"');
console.log(sec13.slice(pStart, pStart + 1500));

