import React from "react";
import "../App.css";

const awards = [
  {
    title: "Best Developer Award",
    issuer: "Tech Solutions Inc.",
    year: "2023"
  },
  {
    title: "React Pro Certificate",
    issuer: "React Academy",
    year: "2022"
  }
];

const Awards = () => (
  <section className="awards-section" id="awards" aria-labelledby="awards-heading">
    <h2 id="awards-heading" className="awards-title">Awards & Certifications</h2>
    <ul className="awards-list">
      {awards.map((award, idx) => (
        <li key={idx} className="award-item">
          <div className="award-title">{award.title}</div>
          <div className="award-issuer">{award.issuer}</div>
          <div className="award-year">{award.year}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default Awards;
