const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const whyMatch = html.match(/<section class="why-choose-us[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
if (whyMatch) {
  console.log(whyMatch[0].substring(0, 3000));
}

