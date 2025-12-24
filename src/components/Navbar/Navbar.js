import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <h2>Vineet</h2>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
              Contact
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
