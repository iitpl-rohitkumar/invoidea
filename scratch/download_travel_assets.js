const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesToDownload = [
  'https://invoidea.com/service08/assets/images/background/travel-application-development-banner.webp',
  'https://invoidea.com/service08/assets/inv-images/background/travel-application-industry-banner.webp',
  'https://invoidea.com/service08/assets/images/background/travel-app-build-banner.webp',
  'https://invoidea.com/service08/assets/images/background/travel_core_service_image.webp',
  'https://invoidea.com/service08/assets/images/background/taxi_customer-app-development-bg.webp',
  'https://invoidea.com/service08/assets/images/background/traveler-app-mockup-1.webp',
  'https://invoidea.com/service08/assets/images/background/traveler-app-mockup-2.webp',
  'https://invoidea.com/service08/assets/images/background/traveler-app-mockup-3.webp',
  'https://invoidea.com/service08/assets/images/background/travel-vendor-mockup-1.webp',
  'https://invoidea.com/service08/assets/images/background/travel-vendor-mockup-2.webp',
  'https://invoidea.com/service08/assets/images/background/travel-vendor-mockup-3.webp',
  'https://invoidea.com/service08/assets/images/background/taxi-admin-app-services-bg.webp',
  'https://invoidea.com/service08/assets/images/background/travel-admin-mockup-1.webp',
  'https://invoidea.com/service08/assets/images/background/travel-admin-mockup-2.webp',
  'https://invoidea.com/service08/assets/images/background/travel-admin-mockup-3.webp',
  'https://invoidea.com/service08/assets/images/background/travel-booking-app-img.webp',
  'https://invoidea.com/service08/assets/images/background/travel-app-case-study-1.webp',
  'https://invoidea.com/service08/assets/images/background/travel-app-case-study-2.webp',
  'https://invoidea.com/service08/assets/images/background/travel-app-case-study-3.webp',
  'https://invoidea.com/service08/assets/images/background/tour-travel-agency-apps-img.webp',
  'https://invoidea.com/service08/assets/images/background/hotel-booking-apps-img.webp',
  'https://invoidea.com/service08/assets/images/background/flight-booking-apps.webp',
  'https://invoidea.com/service08/assets/images/background/bus-ticket-booking-apps.webp',
  'https://invoidea.com/service08/assets/images/background/train-booking-apps.webp',
  'https://invoidea.com/service08/assets/images/background/cruise-booking-apps.webp',
  'https://invoidea.com/service08/assets/images/background/car-rental-apps.webp',
  'https://invoidea.com/service08/assets/images/background/adventure-travel-apps.webp',
  'https://invoidea.com/service08/assets/images/background/travel-marketplace-apps.webp',
  'https://invoidea.com/service08/assets/images/background/travel-guide-apps.webp',
  'https://invoidea.com/service08/assets/images/background/corporate-travel-management-apps.webp',
  'https://invoidea.com/service08/assets/images/background/vacation-rental-apps.webp',
  'https://invoidea.com/service08/assets/images/icons/laravel.svg',
  'https://invoidea.com/service08/assets/images/icons/kotlin.svg',
  'https://invoidea.com/service08/assets/images/icons/swift.svg',
  'https://invoidea.com/service08/assets/images/icons/postgresql.svg',
  'https://invoidea.com/service08/assets/images/icons/mongodb.webp',
  'https://invoidea.com/service08/assets/images/background/taxi-booking-wider.webp',
  'https://invoidea.com/service08/assets/images/background/travel-app-development-bottom-img.webp'
];

const destDir = path.resolve('public', 'assets');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(url) {
  return new Promise((resolve) => {
    const filename = path.basename(url);
    const dest = path.join(destDir, filename);

    if (fs.existsSync(dest)) {
      console.log(`Already exists: ${filename}`);
      return resolve();
    }

    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded: ${filename}`);
            resolve();
          });
        });
      } else {
        file.close();
        fs.unlinkSync(dest);
        console.error(`Failed ${url}: status ${response.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      console.error(`Error ${url}: ${err.message}`);
      resolve();
    });
  });
}

(async () => {
  for (const u of imagesToDownload) {
    await download(u);
  }
  console.log("All downloads finished!");
})();

