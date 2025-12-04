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
      className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block">
            About Me
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={highlightVariants}
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {/* Paragraph 1 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-4 top-2 w-1 h-5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 pl-4 md:pl-6">
              I’m{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                Kenenisa Gizaw
              </span>
              , a Full-Stack Developer focused on building reliable, scalable, and
              thoughtfully designed web applications. My work sits at the
              intersection of engineering precision and clean, user-first design.
            </p>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-4 top-2 w-1 h-5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 pl-4 md:pl-6">
              I specialize in React, Node.js, and modern cloud-ready architectures.
              Whether crafting intuitive interfaces or architecting high-performance
              APIs, I’m motivated by delivering software that works seamlessly,
              scales effectively, and provides real business value.
            </p>
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-4 top-2 w-1 h-5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 pl-4 md:pl-6">
              I enjoy tackling complex problems, improving system performance, and
              bringing structure to fast-moving projects. Outside of my core work,
              I regularly explore emerging technologies and contribute to
              open-source tools to stay ahead of industry standards.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
        />
      </div>
    </section>
  );
};

export default About;
