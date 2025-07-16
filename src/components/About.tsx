import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="about-section py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    tabIndex={-1}
    aria-labelledby="about-heading"
  >
    <motion.div
      className="max-w-3xl mx-auto text-center md:text-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
>
        About Me
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
        Hi! I'm <strong>Kenenisa Gizaw</strong>, a passionate Fullstack Developer with experience
        building modern, scalable, and accessible web applications. I enjoy working with both
        frontend and backend technologies to deliver seamless user experiences.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
        <strong>Tech Summary:</strong> 1+ years with React, 1+ years with Node.js and MongoDB, and a
        strong foundation in RESTful APIs and UI/UX.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <strong>Fun Fact:</strong> I love solving programming puzzles and participating in
        hackathons!
      </p>
    </motion.div>
  </section>
);

export default About;
