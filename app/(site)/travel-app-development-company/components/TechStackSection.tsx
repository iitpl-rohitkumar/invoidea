'use client';

import React, { useState } from 'react';
import { techStackData } from '../data/travelData';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section className="ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center mx-auto mb-4">
            <div className="tech-tabs-heading">
              <h2 className="subheading">TRAVEL APP TECHNOLOGY STACK</h2>
              <h3 className="heading-2">The Technology Behind Secure Travel Apps</h3>
              <p className="text-muted">
                As a trusted travel app development company, we choose technologies that are already proven in
                production on real travel platforms — being new isn't, by itself, a reason to use something in our stack.
              </p>
            </div>
          </div>
        </div>

        <div className="tech-tabs-wrapper">
          <div className="tech-tabs-nav">
            {techStackData.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`tech-tab ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <i className={cat.icon}></i>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="tech-tabs-content">
            {techStackData.map((cat) => (
              <div
                key={cat.id}
                className={`tech-panel ${activeTab === cat.id ? 'active' : ''}`}
                id={cat.id}
              >
                <div className="tech-panel-heading">
                  <h5>{cat.title}</h5>
                </div>

                <div className="tech-items">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="tech-item">
                      {item.iconType === 'svg' && (
                        <div
                          dangerouslySetInnerHTML={{ __html: item.iconVal }}
                          style={{ display: 'inline-flex', width: '32px', height: '32px' }}
                        />
                      )}
                      {item.iconType === 'img' && (
                        <img
                          src={item.iconVal}
                          alt={item.imgAlt || item.name}
                          width="32"
                          height="32"
                        />
                      )}
                      {item.iconType === 'fa' && (
                        <i className={item.iconVal}></i>
                      )}
                      <div>
                        <strong>{item.name}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

