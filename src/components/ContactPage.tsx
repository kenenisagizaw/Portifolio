import React, { useEffect, useRef } from "react";
import Contact from "./Contact";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // IntersectionObserver is much more performant than listening to the scroll event
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
            // Stop observing once revealed
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Triggers when 15% of the element is visible
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="contact-heading"
          className="text-4xl md:text-5xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-14 tracking-tight"
        >
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full">
          <div className="w-full md:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-12 reveal-on-scroll">
            <Contact />
          </div>
          <div className="w-full md:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-12 reveal-on-scroll">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;