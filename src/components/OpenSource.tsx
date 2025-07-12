import React from "react";
import "../App.css";

const openSource = [
  {
    name: "Portfolio Website",
    link: "https://github.com/kenenisagizaw/portfolio",
    description: "A modern, responsive portfolio built with React and Vite."
  },
  {
    name: "Task Manager App",
    link: "https://github.com/kenenisagizaw/task-manager",
    description: "A fullstack application for managing daily tasks."
  }
];

const OpenSource = () => (
  <section className="opensource-section" id="opensource" aria-labelledby="opensource-heading">
    <h2 id="opensource-heading" className="opensource-title">Open Source</h2>
    <ul className="opensource-list">
      {openSource.map((proj, idx) => (
        <li key={idx} className="opensource-item">
          <a href={proj.link} className="opensource-link" target="_blank" rel="noopener noreferrer">{proj.name}</a>
          <div className="opensource-description">{proj.description}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default OpenSource;
