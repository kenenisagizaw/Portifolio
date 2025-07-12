import React from "react";
import "../App.css";

const testimonials = [
  {
    name: "Jane Doe",
    text: "Kenenisa is a talented developer who delivers high-quality work on time. Highly recommended!",
    role: "Project Manager, Tech Solutions Inc."
  },
  {
    name: "John Smith",
    text: "A pleasure to work with—great communication and technical skills.",
    role: "Lead Developer, Web Innovators"
  }
];

const Testimonials = () => (
  <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
    <h2 id="testimonials-heading" className="testimonials-title">Testimonials</h2>
    <ul className="testimonials-list">
      {testimonials.map((t, idx) => (
        <li key={idx} className="testimonial-item">
          <blockquote className="testimonial-text">“{t.text}”</blockquote>
          <div className="testimonial-author">- {t.name}, <span className="testimonial-role">{t.role}</span></div>
        </li>
      ))}
    </ul>
  </section>
);

export default Testimonials;
