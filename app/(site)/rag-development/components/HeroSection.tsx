import React from 'react';
import Link from 'next/link';
import { heroData } from '../data/ragData';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section other-hero-section mobile-app-main d-flex align-items-center">
      <picture className="hero-banner-picture">
        <source media="(max-width: 767px)" srcSet={heroData.mobileBanner} />
        <img
          src={heroData.desktopBanner}
          alt="Hero Banner"
          className="img-fluid"
        />
      </picture>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-8 col-md-12">
            <div className="hero-content-wrapper">
              <h2 className="subheading">{heroData.badge}</h2>
              <h3 className="heading-2 text-lg-black">{heroData.title}</h3>
              <p>{heroData.description}</p>
              <div className="hero-btn-wrapper">
                <Link href="#reach-out-form" className="btn theme-btn" scroll={true}>
                  {heroData.buttonText} <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

