const fs = require('fs');
const path = require('path');

function styleStringToObj(styleStr) {
  if (!styleStr) return '{}';
  const pairs = styleStr.split(';').filter(s => s.trim().length > 0);
  const obj = {};
  for (const pair of pairs) {
    const colonIdx = pair.indexOf(':');
    if (colonIdx > 0) {
      const key = pair.slice(0, colonIdx).trim();
      const val = pair.slice(colonIdx + 1).trim();
      let camelKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      obj[camelKey] = val;
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

  // HTML comments <!-- ... --> -> {/* ... */}
  res = res.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  return res;
}

const compDir = path.resolve('app', '(site)', 'travel-app-development-company', 'components');
if (!fs.existsSync(compDir)) {
  fs.mkdirSync(compDir, { recursive: true });
}

// 1. HeroBanner
const heroHtml = `import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="d-md-block d-none">
        <div className="other-hero-section-v mobile-app-main" style={{ display: 'flex', alignItems: 'center' }}>
          <picture>
            <img
              src="/assets/travel-application-development-banner.webp"
              alt="Hero Banner"
              width="1920"
              height="500"
              loading="eager"
            />
          </picture>
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h2 className="subheading">ON-DEMAND TRAVEL APPLICATION Development</h2>
                <h3 className="heading-2 text-white">Build Smarter Travel Apps with AI Features</h3>
                <a
                  href="https://calendly.com/invoidea/30min"
                  className="btn theme-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free 30-Minute Consultation
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                <p className="banner-note">
                  <i className="fa-solid fa-shield-halved"></i>
                  No obligation • Speak directly with our AI Solutions Team
                </p>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-show d-lg-none d-md-none d-block">
        <div
          className="other-hero-section-v position-relative d-flex align-items-center"
          style={{ height: '45vh', background: 'rgba(0, 0, 0, 0.19)' }}
        >
          <img
            src="/assets/travel-application-industry-banner.webp"
            alt="travel-app-development-company-in-india"
            className="img-fluid w-100"
            style={{ position: 'absolute', top: 0, height: '45vh', objectFit: 'cover', zIndex: -1 }}
          />
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h2 className="subheading">ON-DEMAND TRAVEL APPLICATION Development</h2>
                <h3 className="heading-2 text-white">Build Smarter Travel Apps with AI Features</h3>
                <a
                  href="https://calendly.com/invoidea/30min"
                  className="btn theme-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free 30-Minute Consultation
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                <p className="banner-note">
                  <i className="fa-solid fa-shield-halved"></i>
                  No obligation • Speak directly with our AI Solutions Team
                </p>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
`;
fs.writeFileSync(path.join(compDir, 'HeroBanner.tsx'), heroHtml, 'utf8');

// 2. Section 0: IntroSection
const sec0Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_0_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'IntroSection.tsx'), `import React from 'react';\n\nexport const IntroSection: React.FC = () => {\n  return (\n    ${sec0Html}\n  );\n};\n`, 'utf8');

// 3. Section 1: SolutionBannerSection
const sec1Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_1_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'SolutionBannerSection.tsx'), `import React from 'react';\n\nexport const SolutionBannerSection: React.FC = () => {\n  return (\n    ${sec1Html}\n  );\n};\n`, 'utf8');

// 4. Section 2: CoreServicesSection
const sec2Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_2_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'CoreServicesSection.tsx'), `import React from 'react';\n\nexport const CoreServicesSection: React.FC = () => {\n  return (\n    ${sec2Html}\n  );\n};\n`, 'utf8');

// 5. Section 3: TravelerAppSection
const sec3Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_3_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'TravelerAppSection.tsx'), `import React from 'react';\n\nexport const TravelerAppSection: React.FC = () => {\n  return (\n    ${sec3Html}\n  );\n};\n`, 'utf8');

// 6. Section 4: VendorAppSection
const sec4Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_4_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'VendorAppSection.tsx'), `import React from 'react';\n\nexport const VendorAppSection: React.FC = () => {\n  return (\n    ${sec4Html}\n  );\n};\n`, 'utf8');

// 7. Section 5: AdminAppSection
const sec5Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_5_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'AdminAppSection.tsx'), `import React from 'react';\n\nexport const AdminAppSection: React.FC = () => {\n  return (\n    ${sec5Html}\n  );\n};\n`, 'utf8');

// 8. Section 6: VisualBreakSection
fs.writeFileSync(path.join(compDir, 'VisualBreakSection.tsx'), `import React from 'react';\n\nexport const VisualBreakSection: React.FC = () => {\n  return (\n    <section className="industry-bg-cover-img d-lg-block d-none"></section>\n  );\n};\n`, 'utf8');

// 9. Section 7: AIFeaturesSection
const sec7Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_7_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'AIFeaturesSection.tsx'), `import React from 'react';\n\nexport const AIFeaturesSection: React.FC = () => {\n  return (\n    ${sec7Html}\n  );\n};\n`, 'utf8');

// 10. Section 8: EndToEndSection
const sec8Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_8_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'EndToEndSection.tsx'), `import React from 'react';\n\nexport const EndToEndSection: React.FC = () => {\n  return (\n    ${sec8Html}\n  );\n};\n`, 'utf8');

// 11. Section 9: BookingPlatformSection
const sec9Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_9_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'BookingPlatformSection.tsx'), `import React from 'react';\n\nexport const BookingPlatformSection: React.FC = () => {\n  return (\n    ${sec9Html}\n  );\n};\n`, 'utf8');

// 12. Section 10: PortfolioSection
const sec10Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_10_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'PortfolioSection.tsx'), `import React from 'react';\n\nexport const PortfolioSection: React.FC = () => {\n  return (\n    ${sec10Html}\n  );\n};\n`, 'utf8');

// 13. Section 11: WhyChooseSection
const sec11Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_11_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'WhyChooseSection.tsx'), `import React from 'react';\n\nexport const WhyChooseSection: React.FC = () => {\n  return (\n    ${sec11Html}\n  );\n};\n`, 'utf8');

// 14. Section 12: TravelNichesSection
const sec12Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_12_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'TravelNichesSection.tsx'), `import React from 'react';\n\nexport const TravelNichesSection: React.FC = () => {\n  return (\n    ${sec12Html}\n  );\n};\n`, 'utf8');

// 16. Section 14: WiderAudienceSection
const sec14Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_14_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'WiderAudienceSection.tsx'), `import React from 'react';\n\nexport const WiderAudienceSection: React.FC = () => {\n  return (\n    ${sec14Html}\n  );\n};\n`, 'utf8');

// 17. Section 15: ProcessSection
const sec15Html = cleanHtmlToJsx(fs.readFileSync('scratch/sec_15_inspect.txt', 'utf8'));
fs.writeFileSync(path.join(compDir, 'ProcessSection.tsx'), `import React from 'react';\n\nexport const ProcessSection: React.FC = () => {\n  return (\n    ${sec15Html}\n  );\n};\n`, 'utf8');

console.log("All static subcomponents generated successfully.");
