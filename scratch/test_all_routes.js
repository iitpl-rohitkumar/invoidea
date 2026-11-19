const routes = [
  '/machine-learning-development',
  '/ai-app-development-company',
  '/ai-chatbot-development-company',
  '/ai-agent-development-company',
  '/agentic-ai-development',
  '/ai-software-development-company',
  '/llm-development',
  '/ai-consulting-services'
];

async function testRoutes() {
  console.log('Testing all 8 routes on http://localhost:3000 ...\n');
  let totalMissingImages = 0;

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    try {
      const res = await fetch(url);
      const html = await res.text();
      console.log(`[ROUTE OK ${res.status}] ${route} (${html.length} bytes)`);

      // Extract all img src attributes
      const imgSrcs = [...html.matchAll(/<img[^>]+src="([^">]+)"/g)].map(m => m[1]);
      const uniqueImages = [...new Set(imgSrcs)];

      const brokenImages = [];
      for (const img of uniqueImages) {
        if (img.startsWith('data:') || img.startsWith('http')) continue;
        const imgUrl = `http://localhost:3000${img.startsWith('/') ? '' : '/'}${img}`;
        try {
          const imgRes = await fetch(imgUrl);
          if (imgRes.status !== 200) {
            brokenImages.push(`${img} (status: ${imgRes.status})`);
          }
        } catch (e) {
          brokenImages.push(`${img} (fetch failed: ${e.message})`);
        }
      }

      if (brokenImages.length > 0) {
        console.log(`  ❌ Missing/Broken images in ${route}:`);
        brokenImages.forEach(b => console.log(`     - ${b}`));
        totalMissingImages += brokenImages.length;
      } else {
        console.log(`  ✓ All ${uniqueImages.length} images loaded successfully (200 OK)`);
      }

    } catch (err) {
      console.log(`[ROUTE ERROR] ${route}: ${err.message}`);
    }
  }

  console.log(`\nFinished test! Total broken images: ${totalMissingImages}`);
}

testRoutes();

