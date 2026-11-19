import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessSolutionsData } from "../data/homepageData";

export default function FeatureSection() {
  return (
    <section className="ptb">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h2 className="subheading-text">Intelligent Business Solutions</h2>
            <h3 className="heading-2">Custom-Built Solutions for a Smarter, Scalable Business</h3>
            <p className="text-muted">
              Every business works differently, which is why we create web and app solutions customized to your
              goals. As a trusted web design and development company in India, we&apos;ve helped businesses worldwide
              build custom business solutions that make everyday operations easier. Whether you&apos;re expanding your
              digital presence or improving existing systems, we develop custom solutions that work together and
              support your business as it grows.
            </p>
          </div>
        </div>

        <div className="row solution-card-wrapper g-4">
          {businessSolutionsData.map((item, idx) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={idx}>
              <Link href={item.link} className="text-decoration-none d-block h-100">
                <div className="solution-card position-relative overflow-hidden rounded-4 h-100">
                  <Image
                    src={item.image}
                    className="img-fluid w-100"
                    alt={item.title}
                    width={400}
                    height={280}
                    loading="lazy"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                  <div className="solution-card-overlay p-4">
                    <div className="solution-title d-flex justify-content-between align-items-center mb-2">
                      <h5 className="solution-title text-white mb-0">{item.title}</h5>
                      <span className="arrows text-white fs-4">&rarr;</span>
                    </div>
                    <p className="solution-desc text-white-50 small mb-0">{item.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

