import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiDart,
  SiCss3,
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiFlutter,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiNpm,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiPython,
  SiRedis,
  SiSpringboot,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  MdApi,
  MdAutorenew,
  MdBugReport,
  MdCreditCard,
  MdMap,
  MdSchema,
  MdSecurity,
  MdStorage,
} from "react-icons/md";

const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section
    id="tech-stack"
    className={`bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-16 text-gray-900 dark:text-white ${className}`}
  >
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const TechStack = () => {
  const stack: Array<{
    name: string;
    icon: IconType;
    category: string;
    description: string;
  }> = [
    { name: "JavaScript", icon: SiJavascript, category: "Programming Languages", description: "Programming language for web applications" },
    { name: "TypeScript", icon: SiTypescript, category: "Programming Languages", description: "Typed superset of JavaScript" },
    { name: "Java", icon: FaJava, category: "Programming Languages", description: "Object-oriented programming language" },
    { name: "Dart", icon: SiDart, category: "Programming Languages", description: "Programming language for Flutter applications" },
    { name: "SQL", icon: MdStorage, category: "Programming Languages", description: "Language for querying and managing relational data" },
    { name: "Python", icon: SiPython, category: "Programming Languages", description: "AI and ML" },
    { name: "React", icon: SiReact, category: "Frontend", description: "UI library for building interfaces" },
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend", description: "React framework for server-side rendering" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", description: "Utility-first CSS framework" },
    { name: "HTML", icon: SiHtml5, category: "Frontend", description: "Markup language for web pages" },
    { name: "CSS", icon: SiCss3, category: "Frontend", description: "Styling language for web pages" },

    { name: "Node.js", icon: SiNodedotjs, category: "Backend", description: "JavaScript runtime for servers" },
    { name: "Express.js", icon: SiExpress, category: "Backend", description: "Minimalist web framework for Node.js" },
    { name: "Spring Boot", icon: SiSpringboot, category: "Backend", description: "Java framework for production-ready applications" },
    { name: "Django", icon: SiDjango, category: "Backend", description: "Python web framework" },

    { name: "PostgreSQL", icon: SiPostgresql, category: "Databases & ORM", description: "Open-source relational database" },
    { name: "MongoDB", icon: SiMongodb, category: "Databases & ORM", description: "NoSQL document database" },
    { name: "Prisma", icon: SiPrisma, category: "Databases & ORM", description: "Type-safe database ORM" },
    { name: "PostGIS", icon: MdMap, category: "Databases & ORM", description: "Geospatial extension for PostgreSQL" },

    { name: "Flutter", icon: SiFlutter, category: "Mobile Development", description: "UI toolkit for cross-platform applications" },

    { name: "Socket.IO", icon: SiSocketdotio, category: "Real-Time & Caching", description: "Real-time bidirectional communication library" },
    { name: "Django Channels", icon: SiDjango, category: "Real-Time & Caching", description: "Django support for WebSockets and asynchronous protocols" },
    { name: "Redis", icon: SiRedis, category: "Real-Time & Caching", description: "In-memory data store and cache" },

    { name: "Git", icon: SiGit, category: "DevOps & Tools", description: "Version control system" },
    { name: "GitHub", icon: SiGithub, category: "DevOps & Tools", description: "Code hosting and collaboration platform" },
    { name: "Vercel", icon: SiVercel, category: "DevOps & Tools", description: "Frontend cloud deployment platform" },
    { name: "npm", icon: SiNpm, category: "DevOps & Tools", description: "JavaScript package manager" },
    { name: "pnpm", icon: SiPnpm, category: "DevOps & Tools", description: "Fast, disk-efficient package manager" },

    { name: "REST APIs", icon: MdApi, category: "APIs & Integrations", description: "HTTP-based application programming interfaces" },
    { name: "Chapa", icon: MdCreditCard, category: "APIs & Integrations", description: "Payment gateway integration" },
    { name: "Maps", icon: SiGooglemaps, category: "APIs & Integrations", description: "Location and mapping integrations" },

    { name: "Agile", icon: MdAutorenew, category: "Methodologies & Practices", description: "Iterative software development methodology" },
    { name: "Authentication", icon: MdSecurity, category: "Methodologies & Practices", description: "Identity, access, and permission management" },
    { name: "Testing & Debugging", icon: MdBugReport, category: "Methodologies & Practices", description: "Software quality and issue diagnosis practices" },
    { name: "Database Design", icon: MdSchema, category: "Methodologies & Practices", description: "Designing reliable and maintainable data models" },
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
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-300 mb-4 tracking-tight">
          Tech Stack
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-sm md:text-base text-gray-600 dark:text-gray-300">
          The technologies, tools, and methodologies I use to build robust applications.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groupedStack).map(([category, items]) => (
            <article
              key={category}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 text-left shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/70"
            >
              <h3 className="mb-4 text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2" aria-label={`${category} technologies`}>
              {items.map(({ name, icon: Icon, description }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-gray-700 transition-colors duration-200 hover:border-indigo-300 hover:text-indigo-600 dark:border-gray-600 dark:bg-gray-900/60 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
                  title={description}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium">{name}</span>
                </li>
              ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default TechStack;
