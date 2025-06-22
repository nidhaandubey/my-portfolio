import React from 'react';
import './Experience.css';

const Experience = ({ experience }) => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experience.map((item, index) => (
          <div key={index} className="experience-card">
            <h3>{item.role}</h3>
            <p className="experience-company">{item.company}</p>
            <p className="experience-duration">{item.duration}</p>
            <p className="experience-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
