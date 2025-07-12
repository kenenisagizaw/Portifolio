import React from "react";
import "../App.css";

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "HTML5", icon: "🔶" },
  { name: "CSS3", icon: "🔷" },
  { name: "MongoDB", icon: "🍃" },
  { name: "APIs", icon: "🔗" },
  { name: "Git", icon: "🔀" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "Vite", icon: "⚡" },
];

const Skills = () => (
  <section className="skills-section" id="skills" aria-labelledby="skills-heading">
    <h2 id="skills-heading" className="skills-title">Skills</h2>
    <ul className="skills-list">
      {skills.map((skill, idx) => (
        <li key={idx} className="skill-item">
          <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
