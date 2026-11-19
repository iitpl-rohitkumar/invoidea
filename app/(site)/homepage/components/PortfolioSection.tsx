import React from "react";
import Image from "next/image";
import { caseStudiesData } from "../data/homepageData";

export default function PortfolioSection() {
  return (
    <section className="case-study-section ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="subheading">FEATURED CASE STUDIES</h2>
            <h2 className="heading-2 text-white">Ideas Turned Into Impact</h2>
            <p className="light-text">
              Every project is shaped by close collaboration and a clear understanding of business goals. As a
              trusted website designing company in India, we&apos;ve partnered with startups, SMEs and enterprises to
              solve real business challenges with our custom web design and development solutions.
            </p>
          </div>
        </div>

        {/* Case Cards */}
        {caseStudiesData.map((cs, idx) => (
          <div key={idx} className="case-card mb-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="project-logo">
                    <Image
                      src={cs.logo}
                      alt={cs.tag}
                      width={60}
                      height={40}
                      className="img-fluid"
                      style={{ width: "60px", height: "auto" }}
                    />
                  </div>
                  <div className="case-tag">{cs.tag}</div>
                </div>

                <h2>{cs.title}</h2>

                <p className="case-small">{cs.subtitle}</p>

                <p className="project-desc">{cs.description}</p>

                <div className="case-stats">
                  {cs.stats.map((stat, sIdx) => (
                    <div className="case-box" key={sIdx}>
                      <div className="case-number">
                        <i className="fas fa-arrow-up"></i>
                        <h4>
                          {stat.value}
                          <span>{stat.suffix}</span>
                        </h4>
                      </div>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-7">
                <div className="case-image-box">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    width={640}
                    height={420}
                    className="img-fluid rounded-4"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

