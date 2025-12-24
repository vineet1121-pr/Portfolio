import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Vineet Jethva. All rights reserved.</p>
        <div className="footer-links">{""}
          <Link to="home" smooth={true} duration={500}>
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
