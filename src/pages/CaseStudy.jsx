import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="container" style={{ paddingTop: '150px' }}>Project not found.</div>;

  const { caseStudy: cs } = project;

  return (
    <div className="casestudy-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Back
        </button>

        <div className="cs-hero">
          <img src={project.mockupImage} alt={project.title} className="cs-hero-img" />
          <div className="cs-hero-text">
            <h1 className="neon-text">{project.title}</h1>
            <p>{project.shortDesc}</p>
            <div className="project-techs" style={{ marginTop: '15px' }}>
              {project.techs.map(t => <span className="tech-tag" key={t}>{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {project.liveUrl !== '#' && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="cta-primary">Live Demo</a>
              )}
              {project.githubUrl !== '#' && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="cta-secondary">GitHub</a>
              )}
            </div>
          </div>
        </div>

        <div className="cs-body">
          <div className="cs-section glass-card">
            <h3 className="secondary-neon-text">Overview</h3>
            <p>{cs.overview}</p>
          </div>

          <div className="cs-two-col">
            <div className="cs-section glass-card">
              <h3 className="neon-text">Problem</h3>
              <p>{cs.problem}</p>
            </div>
            <div className="cs-section glass-card">
              <h3 className="neon-text">Solution</h3>
              <p>{cs.solution}</p>
            </div>
          </div>

          <div className="cs-section glass-card">
            <h3 className="secondary-neon-text">Key Features</h3>
            <ul className="cs-list">
              {cs.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          <div className="cs-section glass-card">
            <h3 className="neon-text">Achievements</h3>
            <ul className="cs-list">
              {cs.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>

          <div className="cs-section glass-card">
            <h3 className="secondary-neon-text">Challenges & Solutions</h3>
            {cs.challenges.map((c, i) => (
              <div className="cs-challenge" key={i}>
                <p><strong>Challenge:</strong> {c.problem}</p>
                <p><strong>Solution:</strong> {c.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
