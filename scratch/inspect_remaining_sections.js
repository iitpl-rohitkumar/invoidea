const fs = require('fs');

for (const secNum of [7, 8, 9, 10, 11, 12, 13, 15, 16]) {
  const html = fs.readFileSync(`scratch/sec_${secNum}_inspect.txt`, 'utf8');
  console.log(`\n=================== SECTION ${secNum} ===================`);
  console.log(html.slice(0, 700));
}

