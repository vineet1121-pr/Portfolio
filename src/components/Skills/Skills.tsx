import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Skills data organized by main technologies with sub-skills
  const skills = [
    {
      id: 1,
      mainTech: 'React.js',
      icon: 'fab fa-react',
      color: '#61DAFB',
      subSkills: ['Hooks', 'Context API', 'Redux', 'React Router', 'Custom Hooks', 'Performance Optimization']
    },
    {
      id: 2,
      mainTech: 'TypeScript',
      icon: 'fab fa-js',
      color: '#3178C6',
      subSkills: ['Type Safety', 'Interfaces', 'Generics', 'Advanced Types', 'ES6+', 'Modern JavaScript']
    },
    {
      id: 3,
      mainTech: 'Angular',
      icon: 'fab fa-angular',
      color: '#DD0031',
      subSkills: ['Components', 'Services', 'RxJS', 'Angular Material', 'Routing', 'Form Validation']
    },
    // {
    //   id: 4,
    //   mainTech: 'Frontend',
    //   icon: 'fab fa-html5',
    //   color: '#E34F26',
    //   subSkills: ['HTML5', 'CSS3', 'SCSS/SASS', 'Responsive Design', 'Flexbox', 'Grid Layout']
    // },
    {
      id: 5,
      mainTech: 'UI Libraries',
      icon: 'fas fa-palette',
      color: '#8B5CF6',
      subSkills: ['PrimeNG', 'PrimeReact', 'Bootstrap', 'Material-UI', 'Ant Design']
    },
    {
      id: 6,
      mainTech: 'Backend Integration',
      icon: 'fas fa-server',
      color: '#10B981',
      subSkills: ['REST APIs', 'Axios', 'Fetch API', 'Http Client Module', 'WebSockets']
    },

    {
      id: 8,
      mainTech: 'Other Tools',
      icon: 'fas fa-tools',
      color: '#F59E0B',
      subSkills: ['Git/GitHub', 'VS Code', 'Jeera', 'Git', 'Chrome DevTools', 'Azure']
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
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.id} 
              className={`skill-tile ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-tile-header">
                <div className="skill-tile-icon" style={{ color: skill.color }}>
                  <i className={skill.icon}></i>
                </div>
                <h3 className="skill-tile-title">{skill.mainTech}</h3>
              </div>
              <div className="skill-tile-body">
                <ul className="sub-skills-list">
                  {skill.subSkills.map((subSkill, idx) => (
                    <li key={idx} className="sub-skill-item">
                      <span className="sub-skill-dot"></span>
                      {subSkill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
