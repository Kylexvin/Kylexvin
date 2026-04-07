import React from 'react';
import experiences from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="neon-text">Work</span> Experience</h2>
          <div className="header-line"></div>
        </div>
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">
                <span>{exp.period}</span>
              </div>
              <div className="timeline-content glass-card">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="timeline-techs">
                  {exp.techs.map((tech) => (
                    <span className="tech-tag" key={tech}>{tech}</span>
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

export default Experience;