import React from "react";
import { motion, type Variants } from "framer-motion";

export type Project = {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  image?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "INSA Personality Assessment SaaS Platform",
    role: "Full-Stack Developer | SaaS application for conducting personality assessments, generating reports, and managing users",
    description:
      "Implemented assessment workflows, automated personality scoring, and report generation features. Developed role-based dashboards for administrators and users. Integrated frontend components with backend services and PostgreSQL data models.",
    highlights: [
      "Implemented assessment workflows, automated personality scoring, and report generation features.",
      "Developed role-based dashboards for administrators and users.",
      "Integrated frontend components with backend services and PostgreSQL data models.",
    ],
    tech: ["Next.js", "Go", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/kenenisagizaw",
  },
  {
    title: "INSA Intranet Portal",
    role: "Full-Stack Developer | Internal portal centralizing communication, announcements, and document sharing for INSA",
    description:
      "Developed role-based dashboards for internal users and implemented document and announcement management features. Integrated frontend components with backend services and participated in testing and deployment.",
    highlights: [
      "Developed role-based dashboards for internal users and implemented document and announcement management features.",
      "Integrated frontend components with backend services and participated in testing and deployment.",
    ],
    tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    image: "/Intranet_Screenshot.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/kenenisagizaw",
  },
  {
    title: "Hyperlocal Service Marketplace",
    role: "Full-Stack Developer | Platform connecting customers with nearby service providers for booking and communication",
    description:
      "Designed and implemented REST APIs for users, services, bookings, and reviews. Built relational database models using PostgreSQL and Prisma ORM. Developed customer and service-provider workflows across web and mobile applications.",
    highlights: [
      "Designed and implemented REST APIs for users, services, bookings, and reviews.",
      "Built relational database models using PostgreSQL and Prisma ORM.",
      "Developed customer and service-provider workflows across web and mobile applications.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS", "Dart"],
    image: "/HperLocal_Screenshot.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/kenenisagizaw",
  },
  {
    title: "Ethio Booking",
    role: "Full-Stack Developer | Hotel and accommodation booking platform for users in Addis Ababa",
    description:
      "Developed accommodation booking workflows with REST APIs and responsive frontend interfaces. Designed PostgreSQL schemas and implemented backend services using Node.js, Express, and Prisma.",
    highlights: [
      "Developed accommodation booking workflows with REST APIs and responsive frontend interfaces.",
      "Designed PostgreSQL schemas and implemented backend services using Node.js, Express, and Prisma.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "TypeScript"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/kenenisagizaw",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

export const ProjectCard: React.FC<{ project: Project; advanced?: boolean }> = ({ project, advanced }) => (
  <motion.article
    variants={cardVariants}
    className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-indigo-100 dark:border-gray-700 group"
  >
    <div className="flex flex-col flex-1 p-6">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-xs md:text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-300 mb-3">
        {project.role}
      </p>

      <div className="mb-4">
        <div className="h-44 md:h-48 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
              Screenshot
            </div>
          )}
        </div>
      </div>

      <p className="text-sm md:text-base italic text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white mb-2">
          Highlights
        </h4>
        <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 text-indigo-500 dark:text-indigo-300">✓</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {advanced && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white mb-2">
            Tech Stack
          </h4>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <li
                key={i}
                className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 text-xs font-medium shadow"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <a
          href={project.liveDemoUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition-colors duration-200 hover:bg-indigo-700"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow transition-colors duration-200 hover:bg-gray-900"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  </motion.article>
);

const Projects: React.FC<{ advanced?: boolean }> = ({ advanced }) => (
  <section
    id="projects"
    className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    aria-labelledby="projects-heading"
  >
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2
        id="projects-heading"
        className="text-4xl md:text-5xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-14"
      >
        Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.slice(0, 3).map((project, idx) => (
          <ProjectCard key={idx} project={project} advanced={advanced} />
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <a
          href="/projects"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-indigo-700"
        >
          View All
        </a>
      </div>
    </motion.div>
  </section>
);

export default Projects;
