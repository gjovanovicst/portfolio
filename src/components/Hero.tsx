import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  // Find the longest text to reserve space
  const longestText = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span className="inline-block relative">
      {/* Invisible placeholder to reserve width/height */}
      <span className="invisible opacity-0">
        {longestText}
        <span>|</span>
      </span>

      {/* Visible typing text overlay */}
      <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 whitespace-nowrap">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12">
      <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mr-auto place-self-center lg:col-span-7"
        >
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Building{" "}
            <TypewriterText
              texts={[
                "Modern Software",
                "Scalable Systems",
                "Cloud Solutions",
                "Robust APIs",
              ]}
            />{" "}
            <br />
            Solutions
          </h1>
          <p className="max-w-2xl mb-6 font-light text-slate-500 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400">
            Senior Software Developer with 15+ years of experience in FrontEnd
            and BackEnd development. Specializing in scalable cloud
            architectures, API development, and modern web applications.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
            >
              View Projects
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
            <a
              href="#contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-900 rounded-lg border border-slate-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 lg:mt-0 lg:col-span-5 flex relative"
        >
          <div className="relative w-full h-64 lg:h-96">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
              alt="Coding setup"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              src="goran.png"
              alt="Goran Jovanović"
              className="absolute -bottom-6 -left-4 lg:-bottom-12 lg:-left-12 w-32 lg:w-48 h-auto rounded-xl shadow-2xl border-4 border-white dark:border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
