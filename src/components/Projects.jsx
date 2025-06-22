import React from 'react';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-duration">{project.duration}</p>
            <p className="project-description">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Code ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
