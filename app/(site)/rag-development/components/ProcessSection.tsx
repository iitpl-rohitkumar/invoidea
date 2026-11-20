import React from 'react';
import { processData } from '../data/ragData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="custom process-section ptb">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h3 className="subheading">{processData.badge}</h3>
            <h2 className="heading-2">{processData.title}</h2>
            <p className="text-muted">{processData.intro}</p>
          </div>

          <div className="col-lg-7">
            <div className="custom-steps">
              {processData.steps.map((step, idx) => (
                <div key={idx} className="cutom-step-item">
                  <div className="cutom-step-num">{step.number}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

