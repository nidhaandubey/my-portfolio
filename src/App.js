import React from 'react';
import './App.css';
import data from './data/portfolioData.json';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="app-container">
      <About data={data} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Experience experience={data.experience} />
      <Education education={data.education} />
      <Achievements achievements={data.achievements} />
      <Contact contact={data.contact} />
    </div>
  );
}

export default App;
