import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://via.placeholder.com/400x400?text=Your+Photo" alt="Profile" />
          </div>
          <div className="about-text">
            <h3>Frontend Developer @ Vagaro | React & TypeScript Expert</h3>
            <p>
              Hi, I'm Vineet Jethva, a passionate frontend developer currently working at Vagaro Technologies 
              where I build and design modern web applications using React and TypeScript. I specialize in creating 
              functional, visually appealing user interfaces and turning ideas into real-world business solutions.
            </p>
            <p>
              My professional journey includes 3 years at Techkarma Technologies (July 2022 - June 2025), where 
              I worked with Angular, React, TypeScript, and PrimeNG/PrimeReact. I developed enterprise applications, 
              document management systems, and support portals, implementing RESTful APIs, CRUD operations, and 
              responsive designs.
            </p>
            <p>
              Since June 2025, I've been at Vagaro Technologies, strengthening my expertise in modern frontend 
              development and component-based architecture with React, TypeScript, and Azure. I completed my MSC in 
              CA & IT in 2025 and BSC in IT in 2022 from K.S School of Business Management.
            </p>
            <div className="social-links">
              <a href="https://github.com/vineetjethva" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/vineetjethva" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/vineetjethva" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:jethvavinit99@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
