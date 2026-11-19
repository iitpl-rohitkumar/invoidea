const fs = require('fs');

function parseFunctionality() {
  const html = fs.readFileSync('scratch/healthcare/section_4_Functionality_ptb_pt-0.html', 'utf8');

  // Find all tab panes
  const panes = [...html.matchAll(/<div class="tab-pane[^"]*" id="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g)];
  console.log('Panes found:', panes.length);

  // Home: Patient App View
  // website: Doctor Panel
  // profile: Admin Panel
}
parseFunctionality();

