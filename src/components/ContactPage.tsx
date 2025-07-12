import React, { useEffect } from "react";
import Contact from "./Contact";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const reveal = () => {
      const triggerBottom = window.innerHeight * 0.85;
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-12");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // reveal on mount
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
      className="text-4xl md:text-4xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-14 tracking-tight"
      >
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-12 reveal-on-scroll">
          <Contact />
        </div>
        <div className="w-full md:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-12 reveal-on-scroll">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
