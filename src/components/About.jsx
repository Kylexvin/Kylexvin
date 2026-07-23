import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="neon-text">About</span> Me</h2>
          <div className="header-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3 className="sub-title">Who I Am</h3>
            <p>I'm a full-stack developer and product builder focused on creating practical digital solutions. I work with the MERN stack and React Native to build scalable web and mobile applications.</p>


            <p>Over the past 3+ years, I’ve developed and launched platforms that solve real-world problems, with a strong focus on performance, usability, and impact. I’m driven by turning ideas into working systems and continuously improving them.</p>

            <h3 className="sub-title mt-4">My Skills</h3>
            <div className="skills-container">
              {[
  // Frontend
  { icon: 'fab fa-react', label: 'React.js' },
  { icon: 'fab fa-react', label: 'React Native' },
  { icon: 'fas fa-mobile-alt', label: 'Expo / EAS' },
  { icon: 'fab fa-html5', label: 'HTML5' },
  { icon: 'fab fa-css3-alt', label: 'CSS3' },
  { icon: 'fab fa-js', label: 'JS (ES6+)' },
  { icon: 'fas fa-paint-brush', label: 'Framer Motion' },

  
  // Backend
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fas fa-server', label: 'Express.js' },
  { icon: 'fas fa-database', label: 'MongoDB' },
  { icon: 'fas fa-database', label: 'PostgreSQL' },
  { icon: 'fas fa-plug', label: 'REST APIs' },
  { icon: 'fas fa-lock', label: 'JWT Auth' },
  { icon: 'fas fa-users-cog', label: 'RBAC' },
  { icon: 'fas fa-file-code', label: 'Groq' },
  
  // Real-time
  { icon: 'fas fa-bolt', label: 'Real-time Systems' },
  { icon: 'fas fa-exchange-alt', label: 'Socket.IO' },
  
   // Desktop & Mobile
  { icon: 'fas fa-laptop', label: 'Electron.js' },
  { icon: 'fas fa-database', label: 'SQLite' },
  { icon: 'fas fa-print', label: 'Receipt Generation' },
  { icon: 'fas fa-wifi', label: 'Offline-first' }, 
  { icon: 'fas fa-bell', label: 'Push Notifications' },
  { icon: 'fab fa-google', label: 'OAuth Integration' },
  
  // Deployment & Tools
  { icon: 'fab fa-github', label: 'Git & GitHub' },
  { icon: 'fas fa-cloud', label: 'Vercel & Deployment' },
  { icon: 'fas fa-network-wired', label: 'DNS & Hosting' },
  { icon: 'fas fa-cloud-upload-alt', label: 'Cloudinary' },
  { icon: 'fas fa-envelope-open-text', label: 'SendGrid' },
  { icon: 'fas fa-chart-bar', label: 'Google Analytics' },
  { icon: 'fas fa-code-branch', label: 'Git Flow' },
  { icon: 'fas fa-tachometer-alt', label: 'Performance Optimization' },
  { icon: 'fas fa-shield-alt', label: 'Security (Auth/CORS)' },
  { icon: 'fas fa-cogs', label: 'CI/CD' },
  
  // Business/Methodology
  { icon: 'fas fa-project-diagram', label: 'Microservices' },
  { icon: 'fas fa-sitemap', label: 'System Architecture' },
  { icon: 'fas fa-tasks', label: 'Agile/Scrum' },
  { icon: 'fas fa-users', label: 'Team Collaboration' },
].map((skill) => (
                <div className="skill-item" key={skill.label}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;