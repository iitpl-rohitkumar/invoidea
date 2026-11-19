const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const whyMatch = html.match(/<section class="why-choose-us[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
if (whyMatch) {
  const re = /<span class="fw-bold me-4">([\s\S]*?)<\/span>[\s\S]*?<h6[^>]*>([\s\S]*?)<\/h6>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  let count = 0;
  while ((m = re.exec(whyMatch[0])) !== null) {
    count++;
    console.log(`[${m[1].trim()}] ${m[2].trim()} -> ${m[3].trim().substring(0, 50)}...`);
  }
  console.log('Total Why choose items found:', count);
}

