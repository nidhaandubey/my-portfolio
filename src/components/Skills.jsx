import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
