import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Skills data - can be used for rendering when implementing the UI
  // @ts-expect-error - keeping for future use
  const skills = [
    {
      id: 1,
      icon: 'fab fa-react',
      title: 'React.js',
      description: 'Expert in React development with Hooks, TypeScript, component architecture',
      level: 90
    },
    {
      id: 2,
      icon: 'fab fa-js',
      title: 'TypeScript',
      description: 'Advanced TypeScript, type-safe development, and modern JavaScript (ES6+)',
      level: 85
    },
    {
      id: 3,
      icon: 'fab fa-angular',
      title: 'Angular',
      description: 'Enterprise application development with RxJS, Angular Material, and TypeScript',
      level: 88
    },
    {
      id: 4,
      icon: 'fab fa-html5',
      title: 'HTML5 & CSS3',
      description: 'Semantic HTML, SCSS, responsive design, and modern CSS techniques',
      level: 95
    },
    {
      id: 5,
      icon: 'fab fa-microsoft',
      title: 'Azure',
      description: 'Cloud deployment, Azure DevOps, and modern cloud infrastructure',
      level: 75
    },
    {
      id: 6,
      icon: 'fas fa-project-diagram',
      title: 'UI Libraries',
      description: 'PrimeNG, PrimeReact, Bootstrap for rich component-based interfaces',
      level: 85
    },
    {
      id: 7,
      icon: 'fas fa-server',
      title: 'Backend Integration',
      description: 'RESTful APIs, Axios, Fetch API, Spring Boot integration',
      level: 80
    },
    {
      id: 8,
      icon: 'fab fa-git-alt',
      title: 'Git & Version Control',
      description: 'Git, GitHub, Azure DevOps, and collaborative development',
      level: 90
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-subtitle">Core Technologies & Expertise</p>
        
        <div className="orbital-container">
          {/* Central Code Card */}
          <div className="central-code-card">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-filename">portfolio.js</span>
            </div>
            <div className="code-content">
              <pre>
                <code>
{`const developer = {
  name: 'Vineet Jethva',
  role: 'Frontend Developer',
  
  primarySkills: [
    'React.js',
    'TypeScript',
    'Angular'
  ],
  
  experience: '3+ years',
  passionate: true,
  
  build: () => {
    return 'Amazing Apps';
  }
};`}
                </code>
              </pre>
            </div>
          </div>

          {/* Orbital Skills - Only 3 */}
          <div className="orbital-skills">
            {/* React.js - Top */}
            <div className={`orbital-skill orbital-skill-top ${isVisible ? 'active' : ''}`}>
              <div className="skill-orbit-card">
                <i className="fab fa-react"></i>
                <h4>React.js</h4>
                <p className="skill-desc">Expert in React development</p>
                <div className="skill-level">90%</div>
              </div>
            </div>

            {/* TypeScript - Right */}
            <div className={`orbital-skill orbital-skill-right ${isVisible ? 'active' : ''}`}>
              <div className="skill-orbit-card">
                <i className="fab fa-js"></i>
                <h4>TypeScript</h4>
                <p className="skill-desc">Advanced type-safe development</p>
                <div className="skill-level">85%</div>
              </div>
            </div>

            {/* Angular - Bottom */}
            <div className={`orbital-skill orbital-skill-bottom ${isVisible ? 'active' : ''}`}>
              <div className="skill-orbit-card">
                <i className="fab fa-angular"></i>
                <h4>Angular</h4>
                <p className="skill-desc">Enterprise app development</p>
                <div className="skill-level">88%</div>
              </div>
            </div>
          </div>

          {/* Orbit Rings */}
          <div className="orbit-ring orbit-ring-1"></div>
          <div className="orbit-ring orbit-ring-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
