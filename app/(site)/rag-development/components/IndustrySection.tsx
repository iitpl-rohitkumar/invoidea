import React from 'react';
import { industryData } from '../data/ragData';

export const IndustrySection: React.FC = () => {
  return (
    <section className="AI-powered-solutions-for-every-industry ptb theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subheading">{industryData.badge}</h2>
            <h3 className="heading-2">{industryData.title}</h3>
            <p className="text-muted">{industryData.intro}</p>
          </div>
        </div>

        <div className="row g-4 mt-3">
          {industryData.industries.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="industry-box text-start">
                <div className="indus-benefit-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="content">
                  <h5>{item.title}</h5>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

