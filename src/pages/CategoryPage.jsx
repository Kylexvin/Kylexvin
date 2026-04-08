import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects, { categories } from '../data/projects';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const filtered = projects.filter(p => p.category === category);
  const cat = categories.find(c => c.id === category);

  return (
    <div className="category-page-futuristic">
      <div className="container-category">
        <button className="back-btn-futuristic" onClick={() => navigate(-1)}>
          <span className="back-icon">←</span>
          <span className="back-text">Back</span>
        </button>

        <div className="section-header-category">
          <h2 className="section-title-category">{cat?.label}</h2>
          <div className="category-line">
            <span className="line"></span>
            <span className="diamond">◆</span>
            <span className="line"></span>
          </div>
          <p className="category-subtitle">
            [{filtered.length} PROJECT{filtered.length !== 1 ? 'S' : ''}]
          </p>
        </div>

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

      <style jsx>{`
        .category-page-futuristic {
          min-height: 100vh;
          padding: 100px 0;
          background: var(--dark-color);
        }

        .container-category {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Back button */
        .back-btn-futuristic {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 8px 16px;
          border-radius: 6px;
          color: var(--light-color);
          cursor: pointer;
          font-size: 0.9rem;
          margin-bottom: 40px;
          transition: var(--transition);
          backdrop-filter: blur(10px);
        }

        .back-btn-futuristic:hover {
          background: rgba(0, 247, 255, 0.1);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .back-icon {
          font-size: 1rem;
          transition: var(--transition);
        }

        .back-btn-futuristic:hover .back-icon {
          transform: translateX(-4px);
        }

        /* Header */
        .section-header-category {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title-category {
          font-size: 2.5rem;
          font-weight: 600;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 2px;
          margin: 0;
        }

        .category-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 20px 0;
        }

        .category-line .line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
        }

        .category-line .diamond {
          color: var(--primary-color);
          font-size: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .category-subtitle {
          color: var(--gray-color);
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 1px;
        }

        /* Projects grid - uniform cards */
        .projects-folder-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .project-folder-card {
          position: relative;
          animation: fadeInUp 0.6s ease-out both;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Folder tab */
        .project-folder-tab {
          position: relative;
          z-index: 2;
          margin-left: 20px;
          display: inline-block;
          width: fit-content;
        }

        .project-folder-tab-inner {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 8px 8px 0 0;
          border: 1px solid var(--glass-border);
          border-bottom: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .folder-icon {
          font-size: 1rem;
        }

        .folder-label {
          color: var(--light-color);
          font-weight: 500;
          font-size: 0.85rem;
        }

        /* Folder content */
        .project-folder-content {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 0 12px 12px 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          transition: var(--transition);
        }

        .project-folder-card:hover .project-folder-content {
         
          box-shadow: var(--glass-shadow);
          transform: translateY(-5px);
        }

        /* Mockup image */
        .project-mockup-container {
          position: relative;
          margin-bottom: 20px;
          border-radius: 8px;
          overflow: hidden;
          background: var(--dark-color);
          min-height: 180px;
        }

        .project-mockup-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          transition: var(--transition);
        }

        .project-folder-card:hover .project-mockup-img {
          transform: scale(1.02);
        }

        /* Description */
        .project-folder-description {
          margin: 15px 0;
          color: var(--gray-color);
          font-size: 0.85rem;
          line-height: 1.5;
        }

        /* Tech tags */
        .project-techs-folder {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 15px 0 20px 0;
        }

        .tech-tag-folder {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.7rem;
          color: var(--gray-color);
          letter-spacing: 0.5px;
          transition: var(--transition);
        }

        .project-folder-card:hover .tech-tag-folder {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        /* CTA button */
        .project-open-btn {
          width: 100%;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 10px 16px;
          border-radius: 6px;
          color: var(--light-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          transition: var(--transition);
          margin-top: auto;
          backdrop-filter: blur(10px);
        }

        .project-open-btn:hover {
          background: rgba(0, 247, 255, 0.1);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .btn-icon {
          font-size: 1rem;
          transition: var(--transition);
        }

        .project-open-btn:hover .btn-icon {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .category-page-futuristic {
            padding: 60px 0;
          }

          .container-category {
            padding: 0 20px;
          }

          .section-title-category {
            font-size: 1.8rem;
          }

          .projects-folder-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .project-folder-tab-inner {
            padding: 6px 16px;
          }

          .folder-label {
            font-size: 0.8rem;
          }

          .project-folder-content {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryPage;