import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Selfcare Portal',
      description: 'Enterprise application for managing different enterprises and their related Subscribers/Users. Designed RESTful APIs, developed CRUD operations, and implemented responsive UI using PrimeNG.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Angular', 'TypeScript', 'Spring Boot', 'Oracle', 'PrimeNG']
    },
    {
      id: 2,
      title: 'Support Module',
      description: 'Support system for showing logs of queries and schedulers of mails. Integrated RESTful APIs, implemented CRUD functionalities, and designed routing with Angular.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL', 'PrimeNG']
    },
    {
      id: 3,
      title: 'DMS - Document Management System',
      description: 'Web-based solution to manage organizational documents at a centralized location. Paperless solution with PrimeReact integration, dynamic content rendering, and language preference management.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      tags: ['React', 'Spring Boot', 'MySQL', 'PrimeReact']
    },
    {
      id: 4,
      title: 'Adopt - Network Configuration',
      description: 'Client-based application for network configuration. Led module consolidation and refactoring efforts while preserving existing functionality and managing dependencies.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL']
    },
    {
      id: 5,
      title: 'Claptech - IVRMS (COI Module)',
      description: 'Contributed to IVRMS solution for HDFC Bank, enabling automated call management and customer support workflows. Developed client-side features for the Conflict of Interest module under strict banking compliance guidelines.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript']
    },
    {
      id: 6,
      title: 'Medicine Portal',
      description: 'Developed a Medicine Portal using Angular 18 that allows users to search medicines, manage cart, add patient details, and place orders seamlessly. Features include secure login with Auth Guards, form validations, toast notifications, and responsive UI. Users can manage cart items without page reload and complete orders with confirmation.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['Angular 18', 'TypeScript', 'Auth Guards', 'Responsive UI']
    },

  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
