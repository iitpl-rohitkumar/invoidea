async function run() {
  const r = await fetch('https://invoidea.com/ai-chatbot-development-company', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const text = await r.text();
  // Check any inline styles on body, main, or banner-section
  const bodyTag = text.match(/<body[^>]*>/);
  console.log('Body tag:', bodyTag ? bodyTag[0] : null);
  const mainTag = text.match(/<main[^>]*>/);
  console.log('Main tag:', mainTag ? mainTag[0] : null);

  // Check CSS for padding-top or header height
  const cssR = await fetch('https://invoidea.com/service08/assets/style-min.css');
  const css = await cssR.text();
  const mainMatches = [...css.matchAll(/main[^\{]*\{[^\}]*\}/g)].map(m => m[0]);
  console.log('main CSS matches:', mainMatches);

  // Check .banner-section padding-top in css
  const bPaddings = [...css.matchAll(/[^{}]*banner-section[^{]*\{[^}]*padding[^}]*\}/g)].map(m => m[0]);
  console.log('banner-section paddings:', bPaddings);

  // Check header CSS in style-min.css
  const headerMatches = [...css.matchAll(/\.main-header[^{]*\{[^}]*\}/g)].map(m => m[0]);
  console.log('.main-header:', headerMatches);
}
run();

