import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-16"
    >
      <div className="max-w-7xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-slate-900 dark:text-white md:text-4xl"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <p className="mb-4 text-lg font-normal text-slate-500 dark:text-slate-400">
              I am a passionate Senior Software Developer based in Serbia, with
              a strong track record of delivering high-quality software
              solutions. My expertise spans the entire software development life
              cycle, from concept to deployment.
            </p>
            <p className="mb-4 text-lg font-normal text-slate-500 dark:text-slate-400">
              Currently, I am associated with HORISEN AG / HORISEN Technology,
              where I contribute to building robust and scalable systems. I am
              also deeply involved in the open-source community and lead
              initiatives at Adaleks Technology and Permissio.io.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Go",
                "Python",
                "TypeScript",
                "JavaScript",
                "PHP",
                "Angular",
                "React",
                "Vue",
                "React Native",
                "StencilJS",
                "Nx",
                "Web Components",
                "SCSS",
                "SASS",
                "Docker",
                "Kubernetes",
                "Linux",
                "MySQL",
                "PostgreSQL",
                "Django",
                "Flask",
                "Git",
                "CI/CD",
                "Webpack",
                "REST APIs",
                "GraphQL",
                "AI Tools",
                "LLMs",
                "Prompt Engineering",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
