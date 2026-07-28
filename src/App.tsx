import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  ArrowRight,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectsPage from "./components/ProjectsPage";
import TechStack from "./components/TechStack";
import HeroText from "./components/HeroText";

function App() {
  const isProjectsPage = window.location.pathname === "/projects";

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      heroRef.current.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const revealSections = document.querySelectorAll(".about-section, .projects-section, .contact-section");
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.85;
      revealSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) {
          section.classList.add("reveal-visible");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {isProjectsPage ? (
        <>
          <ProjectsPage advanced />
          <Footer />
        </>
      ) : (
        <>
          <main
            ref={heroRef}
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-100 px-4 py-20 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 md:px-8 lg:px-16"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />
              <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[230px_minmax(0,1.35fr)] lg:gap-20">
              <motion.div
                className="mx-auto w-full max-w-[250px] justify-self-start rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-[0_22px_60px_-28px_rgba(79,70,229,0.35)] backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/60 md:p-5 lg:ml-[-1.5rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="mx-auto flex max-w-md flex-col items-center text-center">
                  <div className="mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-300">
                    Available for Job
                  </div>

                  <div className="w-full overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-br from-gray-100 to-indigo-100 p-2 shadow-inner dark:border-gray-700 dark:from-gray-900 dark:to-gray-800">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-gray-200">
                      <img
                        src="/kegy.png"
                        alt="Kenenisa Gizaw avatar"
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-x-0 bottom-2 translate-y-2 bg-gradient-to-t from-gray-950/55 to-transparent p-5 text-left">
                        <p className="text-sm font-medium text-white/80">Kenenisa Gizaw</p>
                        <p className="text-lg font-semibold text-white">Full-Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/75 p-7 text-center shadow-[0_34px_120px_-48px_rgba(99,102,241,0.65)] backdrop-blur-2xl lg:p-14 lg:text-left dark:border-gray-800 dark:bg-gray-900/65"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
                <div className="relative z-10">
            

                <HeroText />

                <motion.div
                  className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-700"
                  >
                    <Briefcase className="w-4 h-4" />
                    Hire Me
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-900/60 dark:text-white"
                  >
                    <ArrowRight className="w-4 h-4" />
                    View Projects
                  </a>
                  <a
                    href="/Kenenisa_Gizaw_CV.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black"
                  >
                    <FileText className="w-5 h-5" />
                    Download Resume
                  </a>
                </motion.div>

                <motion.div
                  className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
                >
                  <span className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
                    React
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
                    Node
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
                    Express
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
                    Next JS
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
                    PostgreSQL
                  </span>
                </motion.div>

                <motion.div
                  className="mt-8 flex justify-center gap-4 lg:justify-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                >
                  <a
                    href="https://github.com/kenenisagizaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-11 w-11 place-items-center rounded-full border border-gray-200 bg-white/80 text-gray-800 shadow-sm transition-colors duration-200 hover:border-indigo-300 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-900/60 dark:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kenenisa-gizaw-52ba03367"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-11 w-11 place-items-center rounded-full border border-gray-200 bg-white/80 text-gray-800 shadow-sm transition-colors duration-200 hover:border-indigo-300 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-900/60 dark:text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:kenenisagizaw.28@gmail.com"
                    aria-label="Email"
                    className="grid h-11 w-11 place-items-center rounded-full border border-gray-200 bg-white/80 text-gray-800 shadow-sm transition-colors duration-200 hover:border-indigo-300 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-900/60 dark:text-white"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </motion.div>
                </div>
              </motion.div>
            </div>
          </main>

          <About />
          <Experience />
          <Education />
          <TechStack />
          <Projects advanced />
          <ContactPage />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
