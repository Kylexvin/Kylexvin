import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import './css/CategoryPage.css'; 

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const filtered = projects.filter(p => p.category === category);



  
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}, []);

  return (
    <div className="category-page-futuristic">
      <div className="container-category">
        <button className="back-btn-futuristic" onClick={() => navigate(-1)}>
          <span className="back-icon">←</span>
          <span className="back-text">Back</span>
        </button>

 

        <div className="projects-folder-grid">
          {filtered.map((project, index) => (
            <div 
              className="project-folder-card" 
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Folder tab */}
              <div className="project-folder-tab">
                <div className="project-folder-tab-inner">
                  <span className="folder-icon">📄</span>
                  <span className="folder-label">{project.title}</span>
                </div>
              </div>
              
              {/* Folder content */}
              <div className="project-folder-content">
                {/* Mockup preview */}
                <div className="project-mockup-container">
                  <img 
                    src={project.mockupImage} 
                    alt={project.title} 
                    className="project-mockup-img" 
                  />
                </div>
                
                {/* Description */}
                <div className="project-folder-description">
                  <p>{project.shortDesc}</p>
                </div>
                
                {/* Tech tags */}
                <div className="project-techs-folder">
                  {project.techs.map(t => (
                    <span className="tech-tag-folder" key={t}>{t}</span>
                  ))}
                </div>
                
                {/* Action button */}
                <button
                  className="project-open-btn"
                  onClick={() => navigate(`/projects/${category}/${project.id}`)}
                >
                  <span className="btn-text">View project</span>
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;