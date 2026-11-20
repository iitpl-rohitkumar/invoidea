import React from 'react';
import { servicesData } from '../data/ragData';

export const ServicesSection: React.FC = () => {
  return (
    <section className="our-Trusted-AI-and-ML-development-partner ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <h2 className="subheading">{servicesData.badge}</h2>
            <h3 className="heading-2">{servicesData.title}</h3>
            <p className="text-muted">{servicesData.intro}</p>
          </div>
        </div>
      </div>

      <div className="process-bottom mt-4" style={{ position: 'relative' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                {servicesData.items.map((srv, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 mb-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="number">
                          <h2>{srv.number}</h2>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="content-box">
                          <h5>{srv.title}</h5>
                          <p className="text-muted">{srv.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

