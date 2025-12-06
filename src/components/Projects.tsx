import { motion } from "framer-motion";
import SpotlightCard from "./ui/SpotlightCard";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "HORISEN SMS Platform",
      description:
        "Leading the development of a high-performance SMS platform at HORISEN, enabling scalable enterprise messaging solutions.",
      link: "https://www.horisen.com/sms-platform",
      tags: ["Angular", "Go", "Telecom", "Enterprise"],
    },
    {
      name: "HORISEN MNP Platform",
      description:
        "A high-performance Mobile Number Portability platform ensuring accurate routing and global number portability lookup.",
      link: "https://www.horisen.com/mnp-platform/",
      tags: ["Telecom", "MNP", "High Performance", "Enterprise"],
    },
    {
      name: "HORISEN SS7 Platform",
      description:
        "A carrier-grade SS7 signaling platform providing secure and reliable global connectivity for telecom operators.",
      link: "https://www.horisen.com/ss7-platform/",
      tags: ["Telecom", "SS7", "Signaling", "Enterprise"],
    },
    {
      name: "golang-auth-api",
      description:
        "A production-ready Go REST API for authentication/authorization featuring JWT, Redis, and Social Login.",
      link: "https://github.com/gjovanovicst/golang-auth-api",
      tags: ["Go", "Redis", "JWT", "REST API"],
    },
    {
      name: "worklog-manager",
      description:
        "A Python desktop application designed for efficient work time tracking and management.",
      link: "https://github.com/gjovanovicst/worklog-manager",
      tags: ["Python", "Desktop App"],
    },
    {
      name: "anywhere-ui",
      description:
        "A comprehensive library of Web Components for building consistent and responsive user interfaces.",
      link: "https://github.com/adaleks/anywhere-ui",
      tags: ["Web Components", "StencilJS", "UI Library"],
    },
    {
      name: "anywhere-flex",
      description:
        "A CSS utility library for flexible layouts, enhancing the development workflow.",
      link: "https://github.com/adaleks/anywhere-flex",
      tags: ["CSS", "Flexbox", "Layout"],
    },
  ];

  return (
    <section id="projects" className="relative py-16">
      <div className="max-w-7xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-slate-900 dark:text-white md:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <SpotlightCard className="h-full p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg dark:bg-slate-800/80 dark:border-slate-700">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                    {project.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 mt-4"
                >
                  {project.link.includes("github.com")
                    ? "View Code"
                    : "View Project"}
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
