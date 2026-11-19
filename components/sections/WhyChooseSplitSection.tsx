import React from "react";

export interface WhyChooseSplitItem {
  title: string;
  desc: string;
  num?: string;
}

export interface WhyChooseSplitSectionProps {
  tag: string;
  title: string;
  desc: string;
  items: WhyChooseSplitItem[];
  imgSrc: string;
  imgAlt?: string;
  className?: string;
}

export default function WhyChooseSplitSection({
  tag,
  title,
  desc,
  items,
  imgSrc,
  imgAlt,
  className = "",
}: WhyChooseSplitSectionProps) {
  return (
    <section
      className={`our-Trusted-AI-and-ML-development-partner ptb theme-bg py-5 ${className}`}
      style={{ backgroundColor: "#f1fbff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {tag}
            </h2>
            <h3 className="heading-2">{title}</h3>
            <p className="text-muted" style={{ maxWidth: "1050px" }}>
              {desc}
            </p>
          </div>
        </div>
      </div>

      <div className="process-bottom mt-4" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {items.map((item, idx) => {
                  const number = item.num || String(idx + 1).padStart(2, "0");
                  return (
                    <div key={idx} className="col-md-6 mb-4">
                      <div className="row">
                        <div className="col-3 position-relative why-number-col">
                          <div className="number">
                            <h2
                              style={{
                                color: "#009fe3",
                                fontWeight: 700,
                                fontSize: "32px",
                                position: "relative",
                              }}
                            >
                              {number}
                            </h2>
                            <div
                              style={{
                                width: "40px",
                                height: "2px",
                                backgroundColor: "#009fe3",
                                marginTop: "4px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="content-box">
                            <h5 className="fw-bold mb-2" style={{ fontSize: "17px" }}>
                              {item.title}
                            </h5>
                            <p
                              className="text-muted mb-0"
                              style={{ fontSize: "14px", lineHeight: "1.6" }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-4 col-md-12 d-none d-lg-block">
              <div className="image sticky-top" style={{ top: "120px" }}>
                <img
                  loading="lazy"
                  src={imgSrc}
                  alt={imgAlt || title}
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

