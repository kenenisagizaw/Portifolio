import React from "react";
import { motion } from "framer-motion";

const experience = [

  {
    company: "Information Network Security Administration",
    role: "Frontend Developer",
    period: "march 2025 - july 2025",
    description:
      "Redesigned legacy UI using React and Tailwind, resulting in 30% faster page load. Collaborated with backend team on GraphQL integrations.",
  },

];

const Experience = () => (
  <section
    className="experience-section py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    id="experience"
    aria-labelledby="experience-heading"
  >
    <div className="max-w-4xl mx-auto">
      <h2
        id="experience-heading"
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left "
      > 
        Experience
      </h2>
      <ul className="space-y-8">
        {experience.map((exp, idx) => (
          <motion.li
            key={idx}
            className="border-l-4 border-indigo-500 pl-6 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
          >
            <div className="absolute left-[-10px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">
              {exp.company}
            </p>
            <span className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              {exp.period}
            </span>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
