import { motion } from "framer-motion";
import SpotlightCard from "./ui/SpotlightCard";

const Organizations: React.FC = () => {
  return (
    <section
      id="organizations"
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
          Organizations
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* HORISEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SpotlightCard className="flex flex-col items-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg md:flex-row h-full dark:border-slate-700 dark:bg-slate-800/80">
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  HORISEN
                </h5>
                <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                  "Award-winning SMS Platform & Marketing Software Provider."
                </p>
                <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
                  Leading the development of high-performance SMS, MNP, and SS7
                  platforms. Delivering scalable enterprise messaging solutions
                  for global telecom operators.
                </p>
                <a
                  href="https://www.horisen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline dark:text-indigo-500"
                >
                  Visit Organization
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Adaleks Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard className="flex flex-col items-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg md:flex-row h-full dark:border-slate-700 dark:bg-slate-800/80">
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Adaleks Technology
                </h5>
                <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                  "Modern software, thoughtfully engineered."
                </p>
                <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
                  Building innovative, scalable software solutions tailored to
                  forward-thinking organizations. Expertise in Web Apps,
                  Cloud-Native Solutions, and API Development.
                </p>
                <a
                  href="https://github.com/adaleks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline dark:text-indigo-500"
                >
                  Visit Organization
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Permissio.io */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SpotlightCard className="flex flex-col items-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg md:flex-row h-full dark:border-slate-700 dark:bg-slate-800/80">
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Permissio.io
                </h5>
                <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                  "Authorization, done right."
                </p>
                <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
                  A full-stack, plug-and-play platform for secure, flexible,
                  application-level authorization. Stop reinventing the wheel
                  and implement secure permissions in minutes.
                </p>
                <a
                  href="https://github.com/permissio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline dark:text-indigo-500"
                >
                  Visit Organization
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;
