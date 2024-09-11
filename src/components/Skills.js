import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <h3>React.js</h3>
        </div>
        <div className="skill-item">
          <h3>JavaScript</h3>
        </div>
        <div className="skill-item">
          <h3>HTML5</h3>
        </div>
        <div className="skill-item">
          <h3>CSS3</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
