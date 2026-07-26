import React from "react";
import { motion } from "framer-motion";

import { ProjectCard, projects } from "./Projects";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ProjectsPage: React.FC<{ advanced?: boolean }> = ({ advanced }) => (
  <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-4 md:px-8 lg:px-16">
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">
          Projects
        </h1>
        <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-700 dark:text-gray-300">
          A full list of selected work
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center mt-6 rounded-full bg-gray-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-gray-900"
        >
          Back to Home
        </a>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} advanced={advanced} />
        ))}
      </motion.div>
    </motion.div>
  </main>
);

export default ProjectsPage;