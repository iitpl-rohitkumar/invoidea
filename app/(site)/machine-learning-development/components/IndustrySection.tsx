import React from "react";
import { mlIndustriesData } from "../data/mlData";

export default function IndustrySection() {
  return (
    <section className="AI-powered-solutions-for-every-industry ptb pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto text-center">
            <h2 className="subheading">{mlIndustriesData.tag}</h2>
            <h3 className="heading-2">{mlIndustriesData.title}</h3>
            <p className="text-muted text-center">
              {mlIndustriesData.desc}
            </p>
          </div>
        </div>

        <div className="row mt-4">
          {mlIndustriesData.items.map((ind) => (
            <div key={ind.id} className="col-lg-3 col-md-6 mb-4">
              <div className="box h-100">
                <div className="icon">
                  <img
                    src={ind.icon}
                    className="img-fluid"
                    alt={ind.title}
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="content">
                  <h5>{ind.title}</h5>
                  <p className="text-muted text-center">{ind.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

