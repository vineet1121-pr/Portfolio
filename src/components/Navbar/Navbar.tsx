import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <div className="logo-container">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Vineet</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <div className="logo-subtitle">Frontend Developer</div>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
              <span className="nav-icon">👤</span>
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
              <span className="nav-icon">💼</span>
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
              <span className="nav-icon">⚡</span>
              <span className="nav-text">Skills</span>
            </Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={500} onClick={closeMenu}>
              <span className="nav-icon">📄</span>
              <span className="nav-text">Resume</span>
            </Link>
          </li>
          <li className="nav-cta">
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
              <span className="nav-text">Contact Me</span>
            </Link>
          </li>
        </ul>
        <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
