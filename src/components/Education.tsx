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
      className="education-section bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-white py-20 px-4 md:px-8 lg:px-16"
      id="education"
      aria-labelledby="education-heading"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="education-heading"
          className="text-4xl md:text-5xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12"
        >
          Education
        </h2>
        <div className="relative">
          <div className="absolute left-[2.15rem] top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700/50" />
          <ul className="relative space-y-8">
            {education.map((edu, idx) => (
              <motion.li
                key={idx}
                className="relative rounded-2xl bg-gradient-to-b from-white to-slate-50 dark:from-[#1e293b] dark:to-[#0f172a] border border-slate-200 dark:border-slate-700/60 shadow-xl p-6 md:p-8 ml-10"
                variants={itemVariants}
                initial="hidden"
                animate={controls}
                custom={idx}
              >
                <div className="absolute -left-[2.4rem] top-8 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 shadow-lg shadow-indigo-500/30" />
                <header className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm md:text-base">
                    {edu.school}
                  </p>
                  <time className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                    {edu.period}
                  </time>
                </header>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
