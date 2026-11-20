import React from 'react';
import { whyPartnerData } from '../data/ragData';

export const WhyPartnerSection: React.FC = () => {
  return (
    <section className="why-partner-section ptb">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <h2 className="subheading">{whyPartnerData.badge}</h2>
            <h3 className="heading-2 text-white">{whyPartnerData.title}</h3>
            <p className="light-text">{whyPartnerData.intro}</p>
          </div>
        </div>

        <div className="row g-4">
          {whyPartnerData.cards.map((card, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="common-card">
                <div className="rag-card-top">
                  <div className="indus-benefit-icon">
                    <i className={card.icon}></i>
                  </div>
                </div>
                <h5 className="text-white">{card.title}</h5>
                <p className="light-text mb-0">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

