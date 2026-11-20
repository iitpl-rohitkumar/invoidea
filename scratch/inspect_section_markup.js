const fs = require('fs');

console.log("=== SEC 2 INNER ===");
console.log(fs.readFileSync('scratch/sec_2_inspect.txt', 'utf8').slice(500, 2500));

console.log("\n=== SEC 3 INNER ===");
console.log(fs.readFileSync('scratch/sec_3_inspect.txt', 'utf8').slice(500, 2500));

