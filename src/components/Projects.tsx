import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Vite. Showcases my skills, projects, and contact information.",
    tech: ["React", "Vite", "CSS"],
    link: "#",
    github: "https://github.com/kenenisagizaw/portfolio",
    image: "https://source.unsplash.com/400x220/?website,code",
  },
  {
    title: "Task Manager App",
    description:
      "A fullstack application for managing daily tasks, built with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "https://github.com/kenenisagizaw/task-manager",
    image: "https://source.unsplash.com/400x220/?tasks,app",
  },
  {
    title: "API Integration Demo",
    description:
      "Demonstrates integration with third-party APIs, featuring authentication and dynamic data visualization.",
    tech: ["React", "APIs", "Chart.js"],
    link: "#",
    github: "https://github.com/kenenisagizaw/api-demo",
    image: "https://source.unsplash.com/400x220/?api,charts",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const Projects: React.FC<{ advanced?: boolean }> = ({ advanced }) => (
  <section
    id="projects"
    className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    aria-labelledby="projects-heading"
  >
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2
        id="projects-heading"
        className="text-4xl md:text-5xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-14"
      >
        Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, idx) => (
          <motion.article
            key={idx}
            variants={cardVariants}
            className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-indigo-100 dark:border-gray-700 group"
          >
            {advanced && project.image && (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            )}
            <div className="flex flex-col flex-1 p-6">
              <a
                href={project.link || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-200 hover:underline"
              >
                {project.title}
              </a>

              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 flex-1">
                {project.description}
              </p>

              {advanced && (
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 text-xs font-medium shadow"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-3 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    className="flex-1 text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-full shadow text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="flex-1 text-center bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 rounded-full shadow text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Projects;
