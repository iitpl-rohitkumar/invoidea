const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

const bannerIndex = html.indexOf('class="banner"');
const gradIndex = html.indexOf('industry-gradient-bg');

console.log('Banner to Grad length:', gradIndex - bannerIndex);
console.log(html.substring(bannerIndex, bannerIndex + 4000));

