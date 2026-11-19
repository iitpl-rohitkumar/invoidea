const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

function clean(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// 1. Services section items
const servMatch = html.match(/<section class="industry-gradient-bg[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
if (servMatch) {
  console.log('--- Services Section Snippet ---');
  console.log(servMatch[1].substring(0, 2000));
}

// 2. Common grid items
const gridMatch = html.match(/<section class="common-grid[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
if (gridMatch) {
  console.log('--- Grid Section Snippet ---');
  console.log(gridMatch[1].substring(0, 2000));
}

// 3. Functionality tabs
const funcMatch = html.match(/<section class="Functionality[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
if (funcMatch) {
  console.log('--- Functionality Section Snippet ---');
  console.log(funcMatch[1].substring(0, 2000));
}

