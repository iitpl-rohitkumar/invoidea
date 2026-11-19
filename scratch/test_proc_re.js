const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const procMatch = html.match(/<section class="custom ptb"[^>]*>([\s\S]*?)<\/section>/i);
if (procMatch) {
  const re = /<div class="cutom-step-num"[^>]*>([\s\S]*?)<\/div>\s*<div[^>]*>\s*<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
  let m;
  let count = 0;
  while ((m = re.exec(procMatch[0])) !== null) {
    count++;
    console.log(`[${m[1].trim()}] ${m[2].trim()} -> ${m[3].trim().substring(0, 50)}...`);
  }
  console.log('Total Process steps found:', count);
}

