import React, { useEffect } from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

const Hero = () => {
  useTypingEffect('typing-element');

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00f7ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#00f7ff", opacity: 0.2, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div id="particles-js"></div>
      <div className="grid-bg">
        <div className="grid"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="intro-text">Hello, I'm</p>
            <h1 className="name">
              <span className="first-name neon-text">KYLEX</span>
              <span className="last-name secondary-neon-text">VIN</span>
            </h1>
            <div className="title-container">
              <h2 className="job-title">Full Stack Developer</h2>
              <div className="typing-text">
                <span id="typing-element"></span>
                <span className="blinking-cursor">|</span>
              </div>
            </div>
            <p className="hero-description">Building futuristic digital experiences with cutting-edge technologies.</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-primary">Get in Touch</a>
              <a href="#projects" className="cta-secondary">View Projects</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-frame">
              <div className="image-container">
                <img src="/profile_img.jpg" alt="Developer Profile" />
              </div>
              <div className="frame-detail top-left"></div>
              <div className="frame-detail top-right"></div>
              <div className="frame-detail bottom-left"></div>
              <div className="frame-detail bottom-right"></div>
            </div>
          </div>
        </div>
        {/* <div className="scroll-indicator">
          <span className="mouse">
            <span className="wheel"></span>
          </span>
          <p>Scroll Down</p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;