import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Vineet Jethva";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <span className="status-dot"></span>
            Available for new projects
          </div>

          <h1 className="hero-title">
            {text}
            <span className="cursor">|</span>
          </h1>

          <p className="hero-subtitle">
            Frontend Developer @ Vagaro | React & TypeScript Specialist
          </p>

          <p className="hero-description">
            Currently working at Vagaro Technologies as a Frontend Developer,
            building modern web applications with React and TypeScript. With 3+
            years of experience, I specialize in component-based architecture
            and delivering scalable, real-world business solutions.
          </p>

          <div className="hero-buttons">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              View My Work
              <span className="arrow">→</span>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-secondary"
            >
              Let's Talk
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>8</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💻</div>
            <div className="card-text">Clean Code</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎨</div>
            <div className="card-text">UI/UX Design</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">⚡</div>
            <div className="card-text">Fast & Efficient</div>
          </div>
          <div className="floating-card card-4">
            <div className="card-icon">�</div>
            <div className="card-text">Performance</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator-modern">
        <span>Scroll to explore</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
