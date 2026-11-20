import React from 'react';

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
