import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1: Personal Portfolio</h3>
          <p>This is a personal portfolio built using React.js.</p>
        </div>
        <div className="project-item">
          <h3>Project 2: E-Commerce Website</h3>
          <p>A fully functional e-commerce website built with HTML, CSS, and JavaScript.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
