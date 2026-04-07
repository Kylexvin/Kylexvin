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
            <p>I'm a full stack developer driven by a passion for crafting dynamic and efficient web applications. I specialize in both front-end and back-end development, delivering seamless, responsive, and intuitive user experiences.</p>
            <p>With over 3 years of experience in tech, I've consistently explored innovative solutions, transforming ideas into impactful digital products. Solving complex problems and building practical tools is what excites me most.</p>

            <h3 className="sub-title mt-4">My Skills</h3>
            <div className="skills-container">
              {[
                { icon: 'fab fa-react', label: 'React.js' },
                { icon: 'fab fa-node-js', label: 'Node.js' },
                { icon: 'fab fa-js', label: 'JavaScript' },
                { icon: 'fas fa-database', label: 'MongoDB' },
                { icon: 'fab fa-html5', label: 'HTML5' },
                { icon: 'fab fa-css3-alt', label: 'CSS3' },
                { icon: 'fab fa-github', label: 'Git & GitHub' },
                { icon: 'fas fa-server', label: 'Express.js' },
                { icon: 'fas fa-cloud', label: 'Cloudinary' },
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