const data = JSON.parse(require('fs').readFileSync('scratch/healthcare_page_data.json'));
console.log('Page Title:', data.title);
data.sections.forEach(s => {
  console.log('[Section ' + s.idx + '] class: "' + s.className + '"');
  if (s.h1) console.log('   h1: ' + s.h1);
  if (s.h2.length) console.log('   h2: ' + s.h2.join(' | '));
  if (s.h3.length) console.log('   h3: ' + s.h3.join(' | '));
  console.log('   bg: ' + s.bgColor + ', bgImg: ' + s.bgImg);
  console.log('   images (' + s.imgs.length + '): ' + s.imgs.slice(0, 3).join(', '));
  console.log('----------------------------------------------------');
});

