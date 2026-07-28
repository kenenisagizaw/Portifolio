import React from "react";
import { motion, Variants } from "framer-motion";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlightVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="about"
      className="about-section py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-300">
            About Me
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-800 md:p-8 lg:p-10"
        >
          <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I’m <span className="font-bold text-gray-900 dark:text-white">Kenenisa Gizaw</span>, a Full-Stack Developer focused on building reliable, scalable, and thoughtfully designed web applications. My work sits at the intersection of engineering precision and clean, user-first design.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I specialize in React, Node.js, and modern cloud-ready architectures. Whether crafting intuitive interfaces or architecting high-performance APIs, I’m motivated by delivering software that works seamlessly, scales effectively, and provides real business value.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I enjoy tackling complex problems, improving system performance, and bringing structure to fast-moving projects. Outside of my core work, I regularly explore emerging technologies and contribute to open-source tools to stay ahead of industry standards.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
