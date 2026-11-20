const fs = require('fs');

console.log("=== SEC 3 ===");
console.log(fs.readFileSync('scratch/sec3_raw.txt', 'utf8').slice(500, 2500));

console.log("=== SEC 4 ===");
console.log(fs.readFileSync('scratch/sec4_raw.txt', 'utf8').slice(500, 2500));

