import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  const experience = [
    {
      id: 1,
      position: "Frontend Developer",
      company: "Techkarma Technologies",
      period: "Jan 2022 - June 2025",
      location: "Ahmedabad, India",
      responsibilities: [
        "Built responsive user interfaces using React, Redux, and modern CSS",
        "Integrated RESTful APIs and managed complex application state",
        "Participated in code reviews and agile development processes",
        "Implemented new features and resolved bugs based on client requirements",
        "Worked closely with designers to ensure pixel-perfect UI implementation"
      ]
    },
    {
      id: 2,
      position: "React Developer",
      company: "Vagaro Technologies",
      period: "June 2025 - Present",
      location: "Ahmedabad, India",
      responsibilities: [
        "Developed and maintained React-based web applications for salon and spa management",
        "Implemented TypeScript for type-safe code and enhanced code maintainability",
        "Built reusable component libraries following best practices and design patterns",
        "Collaborated with cross-functional teams to deliver scalable business solutions",
        "Optimized application performance resulting in improved user experience"
      ]
    }
  ];

  /* Future use - education data
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science",
      institution: "University Name",
      period: "2017 - 2021",
      grade: "8.5 CGPA"
    },
    {
      id: 2,
      degree: "Higher Secondary",
      field: "Science",
      institution: "School Name",
      period: "2015 - 2017",
      grade: "85%"
    }
  ];
  */

  /* Future use - certifications data
  const certifications = [
    {
      id: 1,
      name: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2022"
    },
    {
      id: 2,
      name: "TypeScript Fundamentals",
      issuer: "Pluralsight",
      year: "2023"
    },
    {
      id: 3,
      name: "Modern JavaScript",
      issuer: "Coursera",
      year: "2021"
    }
  ];
  */

  /* Future use - download handler
  const handleDownload = () => {
    const resumeUrl = '/Vineet Jethva Updated.pdf';
    
    // Check if file exists by trying to fetch it
    fetch(resumeUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          const link = document.createElement('a');
          link.href = resumeUrl;
          link.download = 'Vineet_Jethva_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert('Resume file is not available yet. Please add your resume file to the public folder.');
        }
      })
      .catch(() => {
        alert('Resume file is not available yet. Please add your resume file to the public folder.');
      });
  };
  */

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        {/* Header */}
        <div className="resume-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            A comprehensive overview of my professional experience and career growth
          </p>
          
          {/* <button className="btn-download" onClick={handleDownload}>
            <span className="download-icon">📥</span>
            <span className="download-text">Download Resume</span>
            <span className="download-size">PDF (120 KB)</span>
          </button> */}
        </div>

        <div className="resume-content">
          {/* Experience Section */}
          <div className="resume-section">
            <div className="timeline">
              {experience.map((job, index) => (
                <div key={job.id} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h4 className="job-title">{job.position}</h4>
                        <div className="company-info">
                          <span className="company-name">{job.company}</span>
                          <span className="separator">•</span>
                          <span className="location">{job.location}</span>
                        </div>
                      </div>
                      <span className="period">{job.period}</span>
                    </div>
                    <ul className="responsibilities">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
