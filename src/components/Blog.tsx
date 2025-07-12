import React from "react";
import "../App.css";

const blogPosts = [
  {
    title: "How to Build a Modern Portfolio with React",
    link: "#",
    date: "2024-11-10"
  },
  {
    title: "API Integration Best Practices",
    link: "#",
    date: "2024-09-22"
  }
];

const Blog = () => (
  <section className="blog-section" id="blog" aria-labelledby="blog-heading">
    <h2 id="blog-heading" className="blog-title">Blog</h2>
    <ul className="blog-list">
      {blogPosts.map((post, idx) => (
        <li key={idx} className="blog-item">
          <a href={post.link} className="blog-link" target="_blank" rel="noopener noreferrer">{post.title}</a>
          <span className="blog-date">{post.date}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Blog;
