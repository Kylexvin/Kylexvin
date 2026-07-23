import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top');
    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="neon-text">DEV</span>
              <span className="secondary-neon-text">KYLEX</span>
            </div>
            <p className="footer-text">Building the digital future, one line of code at a time.</p>
            <div className="footer-social">
                <a href="https://github.com/Kylexvin" className="social-link"><i className="fab fa-github"></i></a>
                <a href="https://ke.linkedin.com/in/vincent-kipchirchir-622890363" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://x.com/kylexvinny" className="social-link"><i className="fab fa-x"></i></a>
                <a href="https://www.instagram.com/kylex_vin/" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="footer-nav">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} DevKylex. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <a href="#home" className="back-to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
};

export default Footer;