import React from 'react';
import { challengesData } from '../data/ragData';

export const ChallengesSection: React.FC = () => {
  return (
    <section className="industry-gradient-bg ptb">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-11">
            <h2 className="subheading">{challengesData.badge}</h2>
            <h3 className="heading-2 text-white">{challengesData.title}</h3>
            <p className="light-text">{challengesData.intro}</p>
          </div>
        </div>

        <div className="ai-services">
          {challengesData.items.map((item, idx) => (
            <div key={idx} className="service-item">
              <div className="service-number">{item.number}</div>
              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

