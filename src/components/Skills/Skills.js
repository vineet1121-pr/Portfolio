import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: 'fab fa-react',
      title: 'React.js',
      description: 'Expert in React development with Hooks, TypeScript, component architecture'
    },
    {
      id: 2,
      icon: 'fab fa-js',
      title: 'TypeScript',
      description: 'Advanced TypeScript, type-safe development, and modern JavaScript (ES6+)'
    },
    {
      id: 3,
      icon: 'fab fa-angular',
      title: 'Angular',
      description: 'Enterprise application development with RxJS, Angular Material, and TypeScript'
    },
    {
      id: 4,
      icon: 'fab fa-html5',
      title: 'HTML5 & CSS3',
      description: 'Semantic HTML, SCSS, responsive design, and modern CSS techniques'
    },
    {
      id: 5,
      icon: 'fab fa-microsoft',
      title: 'Azure',
      description: 'Cloud deployment, Azure DevOps, and modern cloud infrastructure'
    },
    {
      id: 6,
      icon: 'fas fa-project-diagram',
      title: 'UI Libraries',
      description: 'PrimeNG, PrimeReact, Bootstrap for rich component-based interfaces'
    },
    {
      id: 7,
      icon: 'fas fa-server',
      title: 'Backend Integration',
      description: 'RESTful APIs, Axios, Fetch API, Spring Boot integration'
    },
    {
      id: 8,
      icon: 'fab fa-git-alt',
      title: 'Git & Version Control',
      description: 'Git, GitHub, Azure DevOps, and collaborative development'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <i className={skill.icon}></i>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
