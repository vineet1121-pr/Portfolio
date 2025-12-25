import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Hero.css";

const Hero: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const fullText = "Hi, I'm Vineet Jethva";
  const roles = [
    "Frontend Developer",
    "React Specialist",
    "Problem Solver"
  ];

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

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleTimer);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = '/Vineet Jethva Updated.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vineet_Jethva_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }}></div>
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Enhanced Status Badge */}
          <div className="hero-label">
            <span className="status-dot"></span>
            <span className="status-text">Available for new projects</span>
            <span className="status-shine"></span>
          </div>

          {/* Main Title with Gradient */}
          <h1 className="hero-title">
            <span className="title-main">{text}</span>
            <span className="cursor">|</span>
          </h1>

          {/* Animated Role Subtitle */}
          <div className="hero-subtitle-container">
            <span className="role-label">I'm a </span>
            <span className="role-text" key={roleIndex}>{roles[roleIndex]}</span>
          </div>

          <p className="hero-description">
            Currently working at <span className="highlight">Vagaro Technologies</span> as a Frontend Developer,
            building modern web applications with <span className="highlight">React</span> and <span className="highlight">TypeScript</span>. 
            With <span className="highlight">3+ years</span> of experience, I specialize in component-based architecture
            and delivering scalable, real-world business solutions.
          </p>

          <div className="hero-buttons">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn btn-primary btn-glow"
            >
              <span className="btn-text">View My Work</span>
              <span className="arrow">→</span>
            </Link>
            <button
              onClick={handleDownloadResume}
              className="btn btn-secondary btn-outline"
            >
              <span className="btn-text">Resume</span>
              <span className="icon">📄</span>
            </button>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-secondary btn-outline"
            >
              <span className="btn-text">Let's Talk</span>
              <span className="icon">💬</span>
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
              <div className="stat-bar"></div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-bar"></div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
              <div className="stat-bar"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Visual Section */}
        <div className="hero-visual">
          <div className="visual-background">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </div>

          {/* Tech Stack Cards */}
          <div className="floating-card card-1">
            <div className="card-icon">⚛️</div>
            <div className="card-content">
              <div className="card-title">React.js</div>
              <div className="card-subtitle">Expert</div>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">TS</div>
            <div className="card-content">
              <div className="card-title">TypeScript</div>
              <div className="card-subtitle">Advanced</div>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🅰️</div>
            <div className="card-content">
              <div className="card-title">Angular</div>
              <div className="card-subtitle">Enterprise</div>
            </div>
          </div>
          <div className="floating-card card-4">
            <div className="card-icon">🎨</div>
            <div className="card-content">
              <div className="card-title">HTML/CSS</div>
              <div className="card-subtitle">Expert</div>
            </div>
          </div>

          {/* Code Window Mockup */}
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-title">portfolio.js</div>
            </div>
            <div className="window-code">
              <code>
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
                <br />
                &nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">'Vineet'</span>,
                <br />
                &nbsp;&nbsp;<span className="code-property">skills</span>: [
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'React'</span>, <span className="code-string">'TypeScript'</span>, <span className="code-string">'Angular'</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'HTML5'</span>, <span className="code-string">'CSS3'</span>, <span className="code-string">'JavaScript'</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Git'</span>, <span className="code-string">'Azure'</span>, <span className="code-string">'REST APIs'</span>
                <br />
                &nbsp;&nbsp;],
                <br />
                &nbsp;&nbsp;<span className="code-property">passion</span>: <span className="code-string">'∞'</span>
                <br />
                {'}'};
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="scroll-indicator-modern">
        <span>Scroll to explore</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>   */}
    </section>
  );
};

export default Hero;
