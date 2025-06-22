import React from 'react';
import './About.css';

const About = ({ data }) => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>Hi, I am {data.name}</h1>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <a href={`mailto:${data.contact.email}`} className="about-button">
            <span>📩</span> Contact Me
          </a>
        </div>
        <div className="about-image">
          <img src="/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
