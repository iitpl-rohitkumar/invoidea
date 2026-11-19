async function run() {
  const r = await fetch('https://invoidea.com/ai-chatbot-development-company', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const text = await r.text();
  // Find where header ends and first section begins
  const headerIdx = text.indexOf('</header>');
  console.log('After header:');
  console.log(text.substring(headerIdx, headerIdx + 1200));
}
run();

