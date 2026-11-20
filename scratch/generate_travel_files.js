const fs = require('fs');
const path = require('path');

function styleStringToObj(styleStr) {
  if (!styleStr) return '{}';
  const pairs = styleStr.split(';').filter(s => s.trim().length > 0);
  const obj = {};
  for (const pair of pairs) {
    const [key, val] = pair.split(':');
    if (key && val) {
      let camelKey = key.trim().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      obj[camelKey] = val.trim();
    }
  }
  return JSON.stringify(obj);
}

function cleanHtmlToJsx(html) {
  let res = html;

  // Replace remote images with /assets/
  res = res.replace(/https:\/\/invoidea\.com\/service08\/assets\/(?:inv-)?images\/(?:background|icons|banner)\/([a-zA-Z0-9_\-\.]+)/g, '/assets/$1');
  res = res.replace(/\/service08\/assets\/(?:inv-)?images\/(?:background|icons|banner)\/([a-zA-Z0-9_\-\.]+)/g, '/assets/$1');
  
  // Remove bis_skin_checked="1"
  res = res.replace(/\s*bis_skin_checked=["'][^"']*["']/g, '');

  // class -> className
  res = res.replace(/\sclass=/g, ' className=');

  // for -> htmlFor
  res = res.replace(/\sfor=/g, ' htmlFor=');

  // SVG attributes
  res = res.replace(/clip-path=/g, 'clipPath=');
  res = res.replace(/clip-rule=/g, 'clipRule=');
  res = res.replace(/fill-rule=/g, 'fillRule=');
  res = res.replace(/stroke-width=/g, 'strokeWidth=');
  res = res.replace(/stroke-linecap=/g, 'strokeLinecap=');
  res = res.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  res = res.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');
  res = res.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
  res = res.replace(/xlink:href=/g, 'xlinkHref=');
  res = res.replace(/stop-color=/g, 'stopColor=');
  res = res.replace(/stop-opacity=/g, 'stopOpacity=');

  // style="string" -> style={{ ... }}
  res = res.replace(/style=["']([^"']*)["']/g, (_, styleStr) => {
    return `style={${styleStringToObj(styleStr)}}`;
  });

  // Self closing void elements in JSX: <img ...>, <input ...>, <br>, <hr>
  res = res.replace(/<img\b([^>]*?)(?<!\/)>/gi, '<img$1 />');
  res = res.replace(/<input\b([^>]*?)(?<!\/)>/gi, '<input$1 />');
  res = res.replace(/<br\b([^>]*?)(?<!\/)>/gi, '<br$1 />');
  res = res.replace(/<hr\b([^>]*?)(?<!\/)>/gi, '<hr$1 />');

  return res;
}

// Let's create components directory
const compDir = path.resolve('app', '(site)', 'travel-app-development-company', 'components');
if (!fs.existsSync(compDir)) {
  fs.mkdirSync(compDir, { recursive: true });
}

console.log("Helper script ready.");

