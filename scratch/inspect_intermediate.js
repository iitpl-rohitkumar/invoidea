const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const bannerIndex = html.indexOf('class="banner"');
const gradIndex = html.indexOf('industry-gradient-bg');
const snippet = html.substring(bannerIndex + 3000, gradIndex);
console.log(snippet);

