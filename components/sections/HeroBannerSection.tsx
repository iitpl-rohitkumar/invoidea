import React from "react";

export interface HeroBannerSectionProps {
  tag: string;
  title: string;
  desc?: string;
  ctaText?: string;
  bannerBg?: string;
  bannerImg?: string;
  desktopImg?: string;
  mobileImg?: string;
  bullets?: string[];
  modalTarget?: string;
  className?: string;
}

export default function HeroBannerSection({
  tag,
  title,
  desc,
  ctaText = "Get A Quote",
  bannerBg,
  bannerImg,
  desktopImg,
  mobileImg,
  bullets,
  modalTarget = "#consultation-modal",
  className = "",
}: HeroBannerSectionProps) {
  const bgImage = bannerBg || bannerImg || desktopImg;
  const responsiveDesktop = desktopImg || bgImage;
  const responsiveMobile = mobileImg || responsiveDesktop;

  return (
    <section
      className={`hero-section other-hero-section banner-section mobile-app-main position-relative ${className}`}
      style={
        bgImage && !desktopImg
          ? {
              background: `url(${bgImage}) no-repeat right center / cover`,
            }
          : undefined
      }
    >
      {/* If responsive picture is specified */}
      {desktopImg && (
        <picture className="position-absolute top-0 start-0 w-100 h-100 z-0">
          {responsiveMobile && (
            <source media="(max-width: 767px)" srcSet={responsiveMobile} />
          )}
          <img
            src={responsiveDesktop}
            alt={title}
            className="w-100 h-100"
            style={{ objectFit: "cover", objectPosition: "right center" }}
          />
        </picture>
      )}

      <div className="container position-relative z-1 py-2">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="banner-content-wrapper">
              <h2 className="subheading" style={{ color: "#F79B1F" }}>
                {tag}
              </h2>
              <h1 className="heading-2 text-white mb-3">{title}</h1>
              {desc && (
                <p
                  className="text-white mb-4 opacity-90"
                  style={{ fontSize: "16px", lineHeight: "1.75" }}
                >
                  {desc}
                </p>
              )}

              {bullets && bullets.length > 0 && (
                <ul className="list-unstyled mb-4 d-flex flex-column gap-2">
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-center gap-2 text-white pe-3"
                      style={{ fontSize: "15px" }}
                    >
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#F79B1F", fontSize: "14px", flexShrink: 0 }}
                      ></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button
                type="button"
                className="btn theme-btn"
                data-bs-toggle="modal"
                data-bs-target={modalTarget}
                aria-label={`Open modal ${ctaText}`}
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
