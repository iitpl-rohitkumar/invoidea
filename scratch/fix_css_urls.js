const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('app', '(site)', 'travel-app-development-company', 'styles', 'travelAppDevelopment.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace any url(../assets/images/.../something.ext) or url(/service08/...) or url(https://...) with /assets/something.ext
css = css.replace(/url\(['"]?(?:(?:\.\.\/)+assets\/(?:inv-)?images\/(?:background|icons|banner)\/|https:\/\/invoidea\.com\/service08\/assets\/(?:inv-)?images\/(?:background|icons|banner)\/|\/service08\/assets\/(?:inv-)?images\/(?:background|icons|banner)\/)([^'")\s]+)['"]?\)/gi, (match, filename) => {
  return `url(/assets/${filename})`;
});

// Also check for any remaining url(../something)
css = css.replace(/url\(['"]?\.\.\/[^'")\s]*\/([^'")\s\/]+)['"]?\)/gi, 'url(/assets/$1)');

fs.writeFileSync(cssPath, css, 'utf8');
console.log("Fixed all url() in travelAppDevelopment.css");

