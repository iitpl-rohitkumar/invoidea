const fs = require('fs');

const files = [
  'app/(site)/homepage/styles/homepage.css',
  'scratch/inline_style_0.css',
  'scratch/inline_style_1.css',
  'scratch/inline_style_5.css'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const matches = [...c.matchAll(/\.AI-powered-solutions-for-business-growth[^{]*\{[^}]*\}/gi)].map(m => m[0]);
    console.log(`In ${f}:`, matches);
  }
});

