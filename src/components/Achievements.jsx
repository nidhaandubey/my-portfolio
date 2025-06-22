import React from 'react';
import './Achievements.css';

const Achievements = ({ achievements }) => {
  return (
    <section className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((item, index) => (
          <li key={index} className="achievement-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
