import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const education = [
  {
    school: "Haramaya University",
    degree: "BSc in Software Engineering",
    period: "2022 - 2026",
    description:
      "Focused on software engineering and web development.",
  },
  {
    school: "ODA Special Boarding School",
    degree: "High School Diploma",
    period: "2018 - 2022",
    description: "Graduated with high score.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      className="education-section py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      id="education"
      aria-labelledby="education-heading"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="education-heading"
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-300"
        >
          Education
        </h2>
        <ul className="space-y-8">
          {education.map((edu, idx) => (
            <motion.li
              key={idx}
              className="relative rounded-3xl border border-gray-200 bg-white p-6 pl-8 shadow-lg dark:border-gray-800 dark:bg-gray-800 md:p-8"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              custom={idx}
            >
              <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-pink-500 ring-4 ring-pink-100 dark:ring-gray-700"></div>
              <header className="space-y-2 pl-6 md:pl-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium text-sm md:text-base">
                  {edu.school}
                </p>
                <time className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {edu.period}
                </time>
              </header>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
