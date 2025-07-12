import React from "react";
import "../App.css";

const hobbies = [
  { name: "Running", icon: "🏃" },
  { name: "Photography", icon: "📷" },
  { name: "Reading", icon: "📚" },
  { name: "Traveling", icon: "✈️" }
];

const Hobbies = () => (
  <section className="hobbies-section" id="hobbies" aria-labelledby="hobbies-heading">
    <h2 id="hobbies-heading" className="hobbies-title">Hobbies & Interests</h2>
    <ul className="hobbies-list">
      {hobbies.map((hobby, idx) => (
        <li key={idx} className="hobby-item">
          <span className="hobby-icon" aria-hidden="true">{hobby.icon}</span>
          <span className="hobby-name">{hobby.name}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Hobbies;
