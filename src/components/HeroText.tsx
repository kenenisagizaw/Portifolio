import React from "react";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="relative w-full max-w-5xl text-center lg:text-left">
      <div className="relative min-h-[14rem] md:min-h-[15rem] lg:min-h-[16rem] flex flex-col justify-start pt-2 md:pt-4">
        <motion.div
          className="absolute top-4 right-4 md:top-10 md:-right-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-indigo-300/10 to-purple-300/10 blur-2xl pointer-events-none"
          animate={{ x: [0, 8, 0], y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 left-4 md:-bottom-10 md:-left-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-pink-300/10 to-rose-300/10 blur-2xl pointer-events-none"
          animate={{ x: [0, -5, 0], y: [0, 8, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.p
          className="text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-indigo-600 dark:text-indigo-300"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          <span className="block bg-gradient-to-r from-slate-900 via-indigo-700 to-violet-700 bg-clip-text text-transparent dark:from-white dark:via-indigo-200 dark:to-violet-300">
            Kenenisa Gizaw
          </span>
          <span className="mt-3 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
            Full-Stack Developer
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
        >
          I build modern, scalable, and accessible web applications with a focus on clean UI and practical engineering.
        </motion.p>
      </div>
    </div>
  );
}