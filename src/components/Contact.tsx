import { motion } from "framer-motion";
import { useState } from "react";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "gjovanovic.st@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-8 lg:py-16 px-4 mx-auto max-w-3xl"
      >
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-white">
          Let's Connect
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-slate-500 dark:text-slate-400 sm:text-xl">
          Interested in collaboration, have a question, or just want to say hi?
          <br />
          Feel free to reach out!
        </p>
        <div className="flex flex-col items-center space-y-6">
          <div className="relative group">
            <button
              onClick={handleCopy}
              className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-indigo-500 dark:group-hover:border-indigo-500"
            >
              <svg
                className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-lg font-medium text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {email}
              </span>
              <span className="ml-2 text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? "Copied!" : "Click to copy"}
              </span>
            </button>
          </div>

          <div className="flex space-x-8">
            <a
              href="https://www.linkedin.com/in/goran-jovanovi%C4%87-11a51456/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://github.com/gjovanovicst"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
