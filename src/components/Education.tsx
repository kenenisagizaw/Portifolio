import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const education = [
  {
    school: "Haramaya University",
    degree: "BSc in Software Engineering",
    period: "2022 - present",
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
      className="education-section py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      id="education"
      aria-labelledby="education-heading"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="education-heading"
          className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
        >
          Education
        </h2>
        <ul className="space-y-8">
          {education.map((edu, idx) => (
            <motion.li
              key={idx}
              className="border-l-4 border-pink-500 pl-6 relative rounded-md p-4"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              custom={idx}
            >
              <div className="absolute left-[-10px] top-1 w-4 h-4 bg-pink-500 rounded-full shadow-md"></div>
              <header>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium">
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
