import React from "react";
import Image from "next/image";
import { statsData } from "../data/homepageData";

export default function AboutSection() {
  return (
    <section className="about-sec ptb">
      <div className="container-fluid">
        <div className="row align-items-center g-lg-5">
          <div className="col-lg-6">
            <div className="subheading">Your Digital Partners in Growth</div>
            <h2 className="heading-2">
              Empowering Businesses with AI, Software &amp; Digital Innovation
            </h2>
            <p className="text-muted">
              Is your business ready for what&apos;s next? Or is an outdated digital strategy quietly slowing you down?
              If you&apos;re after smarter digital solutions — ones that automate processes, improve the customer
              experience, and deliver measurable business results — we can help. As a leading web designing
              company in India, we combine AI automation with modern technology to build high-performance
              websites, custom software and mobile solutions that personalize the user experience, accelerate
              growth, and support long-term business success.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="image-wrap position-relative">
              <Image
                src="/assets/about-img.webp"
                alt="Invoidea Team"
                width={540}
                height={400}
                className="img-fluid rounded-4"
                style={{ width: "100%", height: "auto" }}
                priority
              />

              <div className="blue-card">
                <h3>
                  We are <span>✦</span>
                  <br />
                  Invoidea
                </h3>
                <p>
                  A software, mobile app and web development company helping businesses build custom digital
                  products, enterprise platforms and AI-driven solutions for long-term growth.
                </p>
              </div>

              <div className="white-card">
                <div className="icon">⌾</div>
                <h4>
                  <span>Built for Scale</span>
                  <br /> Engineered for Growth
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats mt-5">
          {statsData.map((stat, idx) => (
            <div className="stat" key={idx}>
              <div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

