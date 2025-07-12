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
import HomeText from "./components/HeroText";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import HeroText from "./components/HeroText";

function App() {
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

      <main
        ref={heroRef}
        className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 p-8 relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full z-10">
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/kegy.jpg"
              alt="Kenenisa Gizaw avatar"
              className="w-64 h-64 object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <HeroText />

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <a
                href="#contact"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow transition-colors duration-200 text-sm flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Hire Me
              </a>
              <a
                href="#projects"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow transition-colors duration-200 text-sm flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-6 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            >
              <a
                href="https://github.com/kenenisagizaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 shadow-md"
              >
                <Github className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/kenenisagizaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 shadow-md"
              >
                <Linkedin className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
              <a
                href="mailto:kenenisagizaw@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 shadow-md"
              >
                <Mail className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
            </motion.div>
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
  );
}

export default App;
