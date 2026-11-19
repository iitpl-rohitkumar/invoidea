const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const whyMatch = html.match(/<section class="why-choose-us[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
if (whyMatch) {
  const imgMatch = whyMatch[0].match(/<img[^>]+src=["']([^"']+)["']/i);
  console.log('Why choose image:', imgMatch ? imgMatch[1] : 'none');
}

