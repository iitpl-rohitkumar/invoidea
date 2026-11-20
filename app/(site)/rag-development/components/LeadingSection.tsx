import React from 'react';
import Link from 'next/link';
import { leadingData } from '../data/ragData';

export const LeadingSection: React.FC = () => {
  return (
    <section className="leading-aiand-ml-development-company-in-india ptb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12 order-lg-2 mb-4 mb-lg-0 text-center">
            <div className="leading-img-box">
              <img
                src={leadingData.image}
                alt="RAG Development Company in India"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 text-lg-left order-lg-1">
            <h2 className="subheading">{leadingData.badge}</h2>
            <h1 className="heading-2">{leadingData.title}</h1>
            {leadingData.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <div className="mt-4">
              <Link href="#reach-out-form" className="btn theme-btn" scroll={true}>
                {leadingData.buttonText} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

