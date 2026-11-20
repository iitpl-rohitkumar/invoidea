'use client';

import React, { useState } from 'react';
import { techStackData } from '../data/ragData';
import { TechIcons } from './TechIcons';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section className="tech-matrix-section ptb">
      <div className="container">
        <div className="matrix-heading mb-4">
          <h2 className="subheading">{techStackData.badge}</h2>
          <h3 className="heading-2 text-white">{techStackData.title}</h3>
          <p className="light-text">{techStackData.intro}</p>
        </div>

        <div className="tech-tabs-wrapper">
          <div className="tech-tabs-nav">
            {techStackData.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`tech-tab ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <i className={cat.tabIcon}></i>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="tech-tabs-content">
            {techStackData.categories.map((cat) => (
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
                      {item.iconType === 'svg' && TechIcons[item.name]}
                      {item.iconType === 'img' && (
                        <img
                          src={item.iconValue}
                          alt={item.name}
                          width="32"
                          height="32"
                        />
                      )}
                      {item.iconType === 'fa' && (
                        <i className={item.iconValue}></i>
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

