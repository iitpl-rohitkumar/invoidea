"use client";

import React, { useState } from "react";

interface Testimonial {
  id: number;
  title: string;
  text: string;
  url: string;
  rating: number;
  verified: boolean;
}

const reviews: Testimonial[] = [
  {
    id: 4,
    title: "Staff Augmentation for Accounts Payable",
    text: "They delivered quality work thanks to their aim of achieving the best possible results.",
    url: "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/231752",
    rating: 5,
    verified: true,
  },
  {
    id: 5,
    title: "Grocery Chain Web Design & Development",
    text: "They possessed excellent technical and communication skills in addition to having a tremendous amount of creativity.",
    url: "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/214536",
    rating: 5,
    verified: true,
  },
  {
    id: 1,
    title: "Website Revamp & Rebranding",
    text: "They understood our requirements well and delivered a high-quality solution with great attention to detail.",
    url: "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/473018",
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    title: "Flooring Website Design & Development",
    text: "We're impressed by how they understood our requirements and turned our ideas into a practical, high-quality solution.",
    url: "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/471965",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    title: "Training Company Web Development",
    text: "Bhavya and the team are just incredible; highly professional and helpful.",
    url: "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/467256",
    rating: 5,
    verified: true,
  },
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  // 3 visible cards
  const visibleReviews = [
    reviews[startIndex % reviews.length],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <section
      className="testimonials-section"
      style={{
        backgroundColor: "#ffffff",
        padding: "85px 0 90px 0",
        position: "relative",
      }}
    >
      <div className="container-fluid" style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 24px" }}>
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "46px",
          }}
        >
          {/* Left Titles */}
          <div style={{ maxWidth: "720px" }}>
            <h2
              style={{
                color: "#faae1c",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              CLIENT REVIEWS
            </h2>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif, 'DM Serif Text', serif)",
                fontSize: "38px",
                fontWeight: 400,
                color: "#111827",
                lineHeight: 1.25,
                marginBottom: "12px",
              }}
            >
              What Our Clients Say
            </h3>
            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                margin: 0,
              }}
            >
              See what our clients say about their experience working with Invoidea.
            </p>
          </div>

          {/* Clutch Rating Box */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "12px 22px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1,
              }}
            >
              4.9
            </div>
            <div
              style={{
                width: "1px",
                height: "36px",
                backgroundColor: "#e5e7eb",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  color: "#faae1c",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  display: "flex",
                  gap: "2px",
                  marginBottom: "4px",
                }}
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.2,
                }}
              >
                5 Reviews
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#6b7280",
                  lineHeight: 1.3,
                }}
              >
                Powered by <strong style={{ color: "#111827" }}>Clutch</strong>
              </span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "38px",
          }}
        >
          {visibleReviews.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eef0f3",
                borderRadius: "16px",
                padding: "30px 28px 26px 28px",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "235px",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div>
                {/* Top: 5 stars & Verified badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      color: "#faae1c",
                      fontSize: "14px",
                      letterSpacing: "3px",
                      display: "flex",
                      gap: "2px",
                    }}
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  {item.verified && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#059669",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.707 6.293l-4.5 4.5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L6.5 8.586l3.793-3.793a1 1 0 111.414 1.414z" />
                      </svg>
                      Verified Review
                    </div>
                  )}
                </div>

                {/* Card Title */}
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "14px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h4>

                {/* Card Text */}
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>

              {/* Card Bottom: Divider & Link */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#f1f3f5",
                    marginBottom: "16px",
                  }}
                />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#e69219",
                    fontSize: "13px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Read full review
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous reviews"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              color: "#334155",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "15px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            ←
          </button>

          {/* Dots Indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: startIndex === 0 ? "24px" : "6px",
                height: "6px",
                borderRadius: "4px",
                backgroundColor: startIndex === 0 ? "#faae1c" : "#cbd5e1",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => setStartIndex(0)}
            />
            <span
              style={{
                width: startIndex > 0 ? "24px" : "6px",
                height: "6px",
                borderRadius: "4px",
                backgroundColor: startIndex > 0 ? "#faae1c" : "#cbd5e1",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => setStartIndex(1)}
            />
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next reviews"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              color: "#334155",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "15px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            →
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
