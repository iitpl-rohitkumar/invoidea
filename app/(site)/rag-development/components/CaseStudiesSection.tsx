import React from 'react';
import { caseStudiesData } from '../data/ragData';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="rag-case-studies ptb position-relative overlayy-bg bg-light">
      <div className="container">
        <div className="rag-case-heading">
          <h2 className="subheading">{caseStudiesData.badge}</h2>
          <h3 className="heading-2">{caseStudiesData.title}</h3>
          <p className="text-muted">{caseStudiesData.intro}</p>
        </div>

        <div className="common-project-list">
          {caseStudiesData.projects.map((project, idx) => (
            <div key={idx} className="common-project">
              <div className="common-project-meta">
                <span className="common-project-no">{project.no}</span>
                <div>
                  <span className="common-project-label">{project.label}</span>
                  <p className="common-project-country">
                    <i className="fa-solid fa-location-dot"></i>
                    {project.country}
                  </p>
                </div>
              </div>

              <div className="common-project-content">
                <span className="project-case-tag">{project.tag}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="common-project-tech">
                  {project.tags.map((t, tIdx) => (
                    <span key={tIdx}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

