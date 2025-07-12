import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const TechStack = () => {
  const stack = [
    // Frontend
    { name: "React", icon: "⚛️", category: "Frontend", description: "UI library for building interfaces" },
    { name: "Tailwind CSS", icon: "🌬️", category: "Frontend", description: "Utility-first CSS framework" },
    { name: "TypeScript", icon: "🟦", category: "Frontend", description: "Typed superset of JavaScript" },
    { name: "Next.js", icon: "⏭️", category: "Frontend", description: "React framework for server-side rendering" },

    // Backend
    { name: "Node.js", icon: "🟩", category: "Backend", description: "JavaScript runtime for servers" },
    { name: "MongoDB", icon: "🍃", category: "Backend", description: "NoSQL document database" },
    { name: "Express", icon: "🚂", category: "Backend", description: "Minimalist web framework for Node.js" },
    { name: "GraphQL", icon: "🔍", category: "Backend", description: "Query language for APIs" },

    // Tools
    { name: "Vite", icon: "⚡", category: "Tools", description: "Fast frontend build tool" },
    { name: "Git", icon: "🔀", category: "Tools", description: "Version control system" },
    { name: "VS Code", icon: "📝", category: "Tools", description: "Code editor" },
    { name: "Figma", icon: "🎨", category: "Tools", description: "UI/UX design tool" },
  ];

  const groupedStack = stack.reduce((groups, item) => {
    (groups[item.category] = groups[item.category] || []).push(item);
    return groups;
  }, {} as Record<string, typeof stack>);

  return (
    <SectionWrapper>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-300 mb-14 tracking-tight">
          Tech Stack
        </h2>

        {Object.entries(groupedStack).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">{category}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {items.map(({ name, icon, description }, idx) => (
                <li
                  key={idx}
                  className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-6 relative"
                  title={description}
                >
                  <span className="text-2xl md:text-3xl mb-2" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="text-sm md:text-base font-medium text-gray-900 dark:text-white">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default TechStack;
