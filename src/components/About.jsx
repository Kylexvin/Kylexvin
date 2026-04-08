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
  { icon: 'fab fa-react', label: 'React.js' },
  { icon: 'fab fa-react', label: 'React Native' },
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fas fa-server', label: 'Express.js' },
  { icon: 'fas fa-database', label: 'MongoDB' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fas fa-plug', label: 'REST APIs' },
  { icon: 'fas fa-bolt', label: 'Real-time Systems' },
  { icon: 'fas fa-mobile-alt', label: 'Expo / EAS' },
  { icon: 'fab fa-github', label: 'Git & GitHub' },
  { icon: 'fas fa-cloud', label: 'Vercel & Deployment' },
  { icon: 'fas fa-network-wired', label: 'DNS & Hosting' },
  { icon: 'fas fa-cloud-upload-alt', label: 'Cloudinary' },
  { icon: 'fas fa-envelope-open-text', label: 'SendGrid' },
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