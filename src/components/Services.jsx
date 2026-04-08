import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/projects';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span className="secondary-neon-text">Services</span></h2>
          <div className="header-line"></div>
        </div>
        <div className="services-grid">
          {categories.map((cat) => (
            <div className="service-card" key={cat.id}>
              <div className="service-card-top">
                <h3 className="service-label">{cat.label}</h3>
                <p className="service-desc">{cat.description}</p>
              </div>
              <div className="service-mockup">
                <img src={cat.mockupImage} alt={cat.label} />
              </div>
              <button
                className="service-arrow-btn"
                onClick={() => navigate(`/projects/${cat.id}`)}
              >
                <i className="fas fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;