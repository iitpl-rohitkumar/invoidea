const http = require('http');

async function run() {
  const r = await fetch('https://invoidea.com/ai-chatbot-development-company', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const text = await r.text();

  // Search for any CSS mentioning header-height or body padding or .main-header height
  const cssMatches = [...text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
  console.log('Inline styles in HTML:', cssMatches);
}
run();

