import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/projects';

const Services = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="projects" className="services-futuristic">
      <div className="container-futuristic">
        <div className="section-header-futuristic">
           <div className="section-header">
          <h2 className="section-title">MY<span className="secondary-neon-text"> PROJECTS</span></h2>
          <div className="header-line"></div>
        </div>
         
         
        </div>

        <div className="services-folder-grid">
          {categories.map((cat, index) => (
            <div 
              key={cat.id}
              className={`folder-card ${hoveredCard === cat.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(cat.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Folder tab */}
              <div className="folder-tab">
                <div className="folder-tab-inner">
                  <span className="folder-icon">📁</span>
                  <span className="folder-label">{cat.label}</span>
                </div>
              </div>
              
              {/* Folder content */}
              <div className="folder-content">
                {/* Mockup preview */}
                <div className="mockup-container">
                  <img src={cat.mockupImage} alt={cat.label} className="mockup-img" />
                </div>
                
                {/* Description */}
                <div className="folder-description">
                  <p>{cat.description}</p>
                </div>
                
                {/* Action button */}
                <button
                  className="folder-open-btn"
                  onClick={() => navigate(`/projects/${cat.id}`)}
                >
                  <span className="btn-text">Check out</span>
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-futuristic {
          position: relative;
          min-height: 100vh;
          padding: 100px 0;
          background: transparent;
        }

        .container-futuristic {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .section-header-futuristic {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title-futuristic {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 4px;
          margin: 0;
        }

        .cyber-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 20px 0;
        }

        .cyber-line .line {
          width: 80px;
          height: 1px;
          background: #333;
        }

        .cyber-line .diamond {
          color: #666;
          font-size: 10px;
        }

        .section-subtitle {
          color: #666;
          font-family: monospace;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        .services-folder-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .folder-card {
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

        .folder-tab {
          position: relative;
          z-index: 2;
          margin-left: 20px;
          display: inline-block;
          width: fit-content;
        }

        .folder-tab-inner {
          background: #1a1a1a;
          padding: 8px 20px;
          border-radius: 8px 8px 0 0;
          border: 1px solid #2a2a2a;
          border-bottom: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .folder-icon {
          font-size: 1.2rem;
        }

        .folder-label {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .folder-content {
          background: #111111;
          border: 1px solid #2a2a2a;
          border-radius: 0 12px 12px 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          transition: all 0.3s;
        }

        .folder-card:hover .folder-content {
          border-color: #3a3a3a;
          background: #141414;
        }

        .mockup-container {
          position: relative;
          margin-bottom: 20px;
          border-radius: 8px;
          overflow: hidden;
          background: #0a0a0a;
          min-height: 180px;
        }

        .mockup-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.3s;
        }

        .folder-card:hover .mockup-img {
          transform: scale(1.02);
        }

        .folder-description {
          margin: 15px 0 20px 0;
          color: #999;
          font-size: 0.85rem;
          line-height: 1.5;
          flex: 1;
        }

        .folder-open-btn {
          width: 100%;
          background: transparent;
          border: 1px solid #333;
          padding: 10px 16px;
          border-radius: 6px;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.9rem;
          transition: all 0.3s;
          margin-top: auto;
        }

        .folder-open-btn:hover {
          background: #1a1a1a;
          border-color: #666;
        }

        .btn-icon {
          font-size: 1.1rem;
          transition: transform 0.3s;
        }

        .folder-open-btn:hover .btn-icon {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .services-folder-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title-futuristic {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .container-futuristic {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;