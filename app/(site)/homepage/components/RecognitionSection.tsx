"use client";

import React from "react";
import Image from "next/image";

interface AwardItem {
  logo: string;
  name: string;
  text: string;
}

const awards: AwardItem[] = [
  {
    logo: "/assets/good-firms.webp",
    name: "GoodFirms",
    text: "Rated top for reliable and innovative web solutions.",
  },
  {
    logo: "/assets/google-review.webp",
    name: "Google",
    text: "Customers love us for performance, design, & support.",
  },
  {
    logo: "/assets/facebook-review.webp",
    name: "Facebook",
    text: "Trusted by clients with excellent reviews and feedback.",
  },
  {
    logo: "/assets/clutch-review.webp",
    name: "Clutch",
    text: "Recognized for proven results and client satisfaction.",
  },
  {
    logo: "/assets/designrush-review.webp",
    name: "DesignRush",
    text: "Awarded for creativity, strategy, & design excellence.",
  },
  {
    logo: "/assets/trustpilot-review.webp",
    name: "Trustpilot",
    text: "Highly rated for service, transparency, & user experience.",
  },
];

export default function RecognitionSection() {
  return (
    <section
      className="awards-section"
      style={{
        background:
          "radial-gradient(circle at 10% 50%, rgba(14, 85, 120, 0.35) 0%, rgba(7, 10, 14, 0) 50%), radial-gradient(circle at 92% 50%, rgba(180, 105, 18, 0.28) 0%, rgba(7, 10, 14, 0) 50%), #070a0e",
        padding: "85px 0 95px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid" >
        {/* Section Heading */}
        <div style={{ maxWidth: "880px", marginBottom: "42px" }}>
          <h2
            style={{
              color: "#faae1c",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            RECOGNIZED AS THE BEST WEBSITE DESIGNING COMPANY IN INDIA
          </h2>
          <h3
            style={{
              fontFamily: "var(--font-dm-serif, 'DM Serif Text', serif)",
              fontSize: "40px",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.25,
              marginBottom: "16px",
            }}
          >
            Our Ratings &amp; Recognition
          </h3>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "14px",
              lineHeight: "1.65",
              margin: 0,
            }}
          >
            We are proud to be recognized as the best website design company for delivering smart, scalable, &amp;
            result-driven websites. Our high-rated reviews on trusted platforms by our clients across the globe
            showcase our reliability &amp; excellence.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div
          className="recognition-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "18px",
          }}
        >
          {awards.map((item, idx) => (
            <div
              key={idx}
              className="recognition-card"
              style={{
                backgroundColor: "#16191f",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "14px",
                padding: "26px 16px 22px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-between",
                minHeight: "210px",
                transition: "transform 0.3s ease, border-color 0.3s ease",
              }}
            >
              <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Brand Logo */}
                <div
                  style={{
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={110}
                    height={32}
                    loading="eager"
                    unoptimized
                    style={{
                      height: "26px",
                      width: "auto",
                      maxWidth: "110px",
                      objectFit: "contain",
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </div>

                {/* 5 Stars */}
                <div
                  style={{
                    color: "#faae1c",
                    fontSize: "14px",
                    letterSpacing: "3px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "2px",
                  }}
                >
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              {/* Divider & Text */}
              <div style={{ width: "100%", marginTop: "14px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.12)",
                    margin: "0 auto 14px auto",
                  }}
                />
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "12px",
                    lineHeight: "1.55",
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .recognition-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .recognition-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
