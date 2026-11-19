import React from "react";

export interface IndustryItem {
  title: string;
  desc: string;
  icon?: string;
  imgSrc?: string;
  link?: string;
}

export interface IndustriesSectionProps {
  tag?: string;
  title?: string;
  desc?: string;
  industries?: IndustryItem[];
  items?: IndustryItem[];
  themeBg?: boolean;
  className?: string;
}

export default function IndustriesSection({
  tag = "AI-POWERED SOLUTIONS FOR EVERY INDUSTRY",
  title = "Industries We Serve",
  desc = "Our deep artificial intelligence and machine learning capabilities power digital transformation across multiple business sectors.",
  industries,
  items,
  themeBg = false,
  className = "",
}: IndustriesSectionProps) {
  const list = industries || items || [];
  return (
    <section
      className={`AI-powered-solutions-for-every-industry ptb py-5 ${
        themeBg ? "theme-bg" : ""
      } ${className}`}
      style={themeBg ? { backgroundColor: "#f1fbff" } : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {tag}
            </h2>
            <h3 className="heading-2">{title}</h3>
            {desc && (
              <p
                className="text-muted mx-auto"
                style={{ maxWidth: "850px", fontSize: "16px" }}
              >
                {desc}
              </p>
            )}
          </div>
        </div>

        <div className="row g-4">
          {list.map((item, idx) => (
            <div key={idx} className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="industry-card h-100 p-4 bg-white rounded-3 shadow-sm border"
                style={{
                  borderColor: "rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div
                  className="icon-box mb-3 d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#f1fbff",
                  }}
                >
                  {item.imgSrc || (item.icon && (item.icon.includes("/") || item.icon.includes("."))) ? (
                    <img
                      src={item.imgSrc || item.icon}
                      alt={item.title}
                      style={{ width: "32px", height: "32px", objectFit: "contain" }}
                    />
                  ) : (
                    <i
                      className={`${item.icon || "fa-solid fa-layer-group"}`}
                      style={{ fontSize: "24px", color: "#009fe3" }}
                    ></i>
                  )}
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: "18px" }}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
