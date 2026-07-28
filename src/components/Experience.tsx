import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    company: "Kuraz Tech",
    role: "MERN Stack Developer Intern",
    period: "Jan 2026 - Jul 2026",
    description:
      "Contributed to the development of full-stack web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). Built responsive user interfaces with React and integrated them with RESTful backend APIs, implemented backend features, database operations, and authentication, and collaborated with team members through Git-based Agile workflows while participating in testing, debugging, code reviews, and feature deployment to ensure application quality.",
  },
  {
    company: "Information Network Security Administration",
    role: "Full-Stack Developer Intern",
    period: "Feb 2026 - Jul 2026",
    description:
      "Contributed to the development of two internal platforms for INSA: a personality assessment SaaS application and an organization-wide intranet portal. Developed responsive frontend interfaces and administrative dashboards using Next.js and TypeScript, integrated frontend components with backend services, and participated in testing, debugging, and Git-based Agile workflows.",
  },
  {
    company: "Self-Employed",
    role: "Freelance Web Developer",
    period: "Jan 2026 - Present",
    description:
      "Built and deployed web applications for small businesses and individual clients using the MERN and Next.js ecosystems. Managed the full project lifecycle, including requirements gathering, development, testing, and deployment, while communicating directly with clients to scope work, set timelines, and gather feedback.",
  },
];

const Experience = () => (
  <section
    className="experience-section py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    id="experience"
    aria-labelledby="experience-heading"
  >
    <div className="max-w-6xl mx-auto">
      <h2
        id="experience-heading"
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-300"
      > 
        Experience
      </h2>
      <ul className="space-y-8">
        {experience.map((exp, idx) => (
          <motion.li
            key={idx}
            className="relative rounded-3xl border border-gray-200 bg-white p-6 pl-8 shadow-lg dark:border-gray-800 dark:bg-gray-800 md:p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
          >
            <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100 dark:ring-gray-700"></div>
            <div className="space-y-2 pl-6 md:pl-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm md:text-base">
              {exp.company}
            </p>
            <span className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              {exp.period}
            </span>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              {exp.description}
            </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
