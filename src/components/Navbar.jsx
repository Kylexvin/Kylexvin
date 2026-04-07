import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="cursor-outer"></div>
      <div className="cursor-inner"></div>

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container container">
          <div className="logo">
            <span className="neon-text">DEV</span>
            <span className="secondary-neon-text">KYLEX</span>
          </div>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </div>
          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;