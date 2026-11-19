import React from "react";

export interface WhyChooseGridItem {
  title: string;
  desc: string;
  icon?: string;
}

export interface WhyChooseGridSectionProps {
  tag: string;
  title: string;
  desc: string;
  items: WhyChooseGridItem[];
  theme?: "dark" | "light";
  columns?: 3 | 4;
  className?: string;
}

export default function WhyChooseGridSection({
  tag,
  title,
  desc,
  items,
  theme = "dark",
  columns = 4,
  className = "",
}: WhyChooseGridSectionProps) {
  const isDark = theme === "dark";
  const colClass = columns === 3 ? "col-lg-4 col-md-6" : "col-lg-3 col-md-6";

  return (
    <section
      className={`our-Trusted-AI-and-ML-development-partner ptb theme-bg py-5 ${className}`}
      style={{ backgroundColor: isDark ? "#021626" : "#f1fbff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center text-lg-start mb-4">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {tag}
            </h2>
            <h3 className={`heading-2 ${isDark ? "text-white" : "text-dark"}`}>
              {title}
            </h3>
            <p
              className={`${isDark ? "text-white opacity-75" : "text-muted"}`}
              style={{ maxWidth: "980px" }}
            >
              {desc}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {items.map((item, idx) => (
            <div key={idx} className={colClass}>
              <div
                className="column p-4 h-100 rounded-3 border"
                style={{
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "#ffffff",
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "#e9ecef",
                  boxShadow: isDark
                    ? "none"
                    : "0 4px 15px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon && (
                  <i
                    className={`${item.icon} mb-3`}
                    style={{ fontSize: "32px", color: "#F79B1F" }}
                  ></i>
                )}
                <h5
                  className={`fw-bold mb-2 ${
                    isDark ? "text-white" : "text-dark"
                  }`}
                  style={{ fontSize: "18px" }}
                >
                  {item.title}
                </h5>
                <p
                  className={`m-0 ${
                    isDark ? "text-light opacity-75" : "text-muted"
                  }`}
                  style={{ fontSize: "14px", lineHeight: "1.6" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

