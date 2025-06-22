import React from 'react';
import './Contact.css';

const Contact = ({ contact }) => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>
          LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">Profile ↗</a>
        </p>
        <p>
          GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">Repo ↗</a>
        </p>
        <p>
          LeetCode: <a href={contact.leetcode} target="_blank" rel="noopener noreferrer">Profile ↗</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
