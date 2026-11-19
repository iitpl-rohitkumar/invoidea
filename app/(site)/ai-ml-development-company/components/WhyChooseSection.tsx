import React from "react";
import Link from "next/link";
import { whyChooseData } from "../data/aiMlData";

export default function WhyChooseSection() {
  return (
    <section className="tailored-solutions-wrapper ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="main-heading text-center mb-5">
              <h2 className="subheading">Why Choose Invoidea? </h2>
              <h3 className="heading-2 ">Your Trusted AI/ML Development Partner</h3>
              <p className="text-muted text-center">
                Choosing the right artificial intelligence development company in India is important for innovative, flexible, and efficient solutions. We are a recognized{" "}
                <Link href="/ai-app-development-company">
                  AI App development company in India
                </Link>{" "}
                that offers personalized solutions for every industry, whether you are a startup or an established business. Here are the reasons to choose us as your trusted machine learning development company in India:
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-04">
          {whyChooseData.map((item) => (
            <div key={item.number} className="col-lg-4 col-md-6 mb-5 Custom-built-box text-center">
              <div className="box">
                <strong>{item.number}</strong>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
