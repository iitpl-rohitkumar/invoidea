const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

// Find all section tags or main structure
const sectionMatches = html.match(/<section[^>]*>[\s\S]*?<\/section>/gi) || [];
console.log('Total <section> tags found:', sectionMatches.length);

sectionMatches.forEach((sec, idx) => {
  const classMatch = sec.match(/class=["']([^"']+)["']/i);
  const idMatch = sec.match(/id=["']([^"']+)["']/i);
  const h1 = sec.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2 = sec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h3 = sec.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const h4 = sec.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
  const h5 = sec.match(/<h5[^>]*>([\s\S]*?)<\/h5>/i);
  const h6 = sec.match(/<h6[^>]*>([\s\S]*?)<\/h6>/i);
  
  console.log(`\n--- Section ${idx + 1} ---`);
  console.log('Class:', classMatch ? classMatch[1] : 'none');
  console.log('ID:', idMatch ? idMatch[1] : 'none');
  if (h1) console.log('H1:', h1[1].replace(/<[^>]+>/g, '').trim());
  if (h2) console.log('H2:', h2[1].replace(/<[^>]+>/g, '').trim());
  if (h3) console.log('H3:', h3[1].replace(/<[^>]+>/g, '').trim());
  if (h4) console.log('H4:', h4[1].replace(/<[^>]+>/g, '').trim());
  if (h5) console.log('H5:', h5[1].replace(/<[^>]+>/g, '').trim());
  if (h6) console.log('H6:', h6[1].replace(/<[^>]+>/g, '').trim());
});

// Also find all images in the HTML
const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
console.log('\nTotal images found:', imgMatches.length);
const uniqueImages = [...new Set(imgMatches.map(m => m[1]))];
console.log('Unique images:');
uniqueImages.forEach(img => {
  if (!img.includes('data:image') && !img.includes('flag') && !img.includes('icon')) {
    console.log(' -', img);
  }
});

