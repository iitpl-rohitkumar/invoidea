import React from "react";

export interface LeadingInfoSectionProps {
  tag: string;
  title: string;
  desc: string | string[];
  imgSrc?: string;
  imgAlt?: string;
  bullets?: string[];
  reverse?: boolean;
  className?: string;
}

export default function LeadingInfoSection({
  tag,
  title,
  desc,
  imgSrc,
  imgAlt,
  bullets,
  reverse = false,
  className = "",
}: LeadingInfoSectionProps) {
  const paragraphs = Array.isArray(desc) ? desc : [desc];

  return (
    <section
      className={`leading-aiand-ml-development-company-in-india ptb py-5 ${className}`}
    >
      <div className="container">
        <div
          className={`row align-items-center g-4 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className={imgSrc ? "col-lg-6 col-md-12" : "col-lg-10 mx-auto text-center"}>
            <div className="content-wrap">
              <h2 className="subheading" style={{ color: "#F79B1F" }}>
                {tag}
              </h2>
              <h3 className="heading-2 mb-3">{title}</h3>
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-muted mb-3"
                  style={{ fontSize: "16px", lineHeight: "1.7" }}
                >
                  {p}
                </p>
              ))}

              {bullets && bullets.length > 0 && (
                <ul className="list-unstyled mt-3 mb-0">
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-start gap-2 mb-2 text-muted"
                      style={{ fontSize: "15px" }}
                    >
                      <i
                        className="fa-solid fa-circle-check mt-1"
                        style={{ color: "#009fe3" }}
                      ></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {imgSrc && (
            <div className="col-lg-6 col-md-12 text-center">
              <div className="image-wrap">
                <img
                  loading="lazy"
                  src={imgSrc}
                  alt={imgAlt || title}
                  className="img-fluid rounded-4"
                  style={{ maxHeight: "480px", objectFit: "contain" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

