import React from 'react';
import './Education.css';

const Education = ({ education }) => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <h3>{education.institution}</h3>
        <p className="education-degree">{education.degree}</p>
        <p className="education-duration">{education.duration}</p>
        <p className="education-cgpa">CGPA: {education.cgpa}</p>
      </div>
    </section>
  );
};

export default Education;
