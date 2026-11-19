async function run() {
  const r = await fetch('https://invoidea.com/ai-chatbot-development-company', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const text = await r.text();
  const idx = text.indexOf('hero-section');
  console.log('HTML snippet around hero-section:');
  console.log(text.substring(idx - 50, idx + 800));

  // Also check css for hero-section
  const cssR = await fetch('https://invoidea.com/service08/assets/style-min.css');
  const css = await cssR.text();
  const hIdx = css.indexOf('.hero-section');
  console.log('\nCSS snippet for .hero-section:');
  console.log(css.substring(hIdx, hIdx + 1000));
}
run();

