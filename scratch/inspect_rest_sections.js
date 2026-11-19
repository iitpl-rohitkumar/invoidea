const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

function show(name, regex) {
  const m = html.match(regex);
  if (m) {
    console.log(`\n=== ${name} ===`);
    console.log(m[0].substring(0, 1500));
  } else {
    console.log(`\n=== ${name} NOT FOUND ===`);
  }
}

show('Benefits (AI Features)', /<section class="Benefits[^"]*"[^>]*>[\s\S]*?<\/section>/i);
show('Tech Stack', /<section class="ptb" id="mobile"[^>]*>[\s\S]*?<\/section>/i);
show('Process', /<section class="custom ptb"[^>]*>[\s\S]*?<\/section>/i);
show('Why Choose Us', /<section class="why-choose-us[^"]*"[^>]*>[\s\S]*?<\/section>/i);
show('FAQs', /<section class="[^"]*faq-section[^"]*"[^>]*>[\s\S]*?<\/section>/i);

