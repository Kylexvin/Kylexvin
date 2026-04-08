import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects, { categories } from '../data/projects';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const filtered = projects.filter(p => p.category === category);
  const cat = categories.find(c => c.id === category);

  return (
    <div className="category-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <div className="section-header">
          <h2 className="section-title">
            <span className="neon-text">{cat?.label}</span>
          </h2>
          <div className="header-line"></div>
        </div>
        <div className="services-grid">
          {filtered.map((project) => (
            <div className="service-card" key={project.id}>
              <div className="service-card-top">
                <h3 className="service-label">{project.title}</h3>
                <p className="service-desc">{project.shortDesc}</p>
                <div className="project-techs" style={{ marginTop: '10px' }}>
                  {project.techs.map(t => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="service-mockup">
                <img src={project.mockupImage} alt={project.title} />
              </div>
              <button
                className="service-arrow-btn"
                onClick={() => navigate(`/projects/${category}/${project.id}`)}
              >
                <i className="fas fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;