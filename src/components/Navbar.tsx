import { useState, useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Organizations", href: "#organizations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md dark:bg-slate-900/80 fixed w-full z-20 top-0 start-0 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
            GJ
          </div>
          <span className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
            Goran Jovanović
          </span>
        </a>
        <div className="flex md:order-2 items-center space-x-3 rtl:space-x-reverse">
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/gjovanovicst"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2c-5.523 0-10 4.477-10 10 0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/goran-jovanovi%C4%87-11a51456/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.683V19.5h-3.2V9.49h3.2v1.697ZM6.891 19.5h3.2V9.49h-3.2V19.5Zm1.6-11.217a1.853 1.853 0 1 1 0-3.706 1.853 1.853 0 0 1 0 3.706Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          ref={menuRef}
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="md:hidden mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex space-x-4 justify-center">
              <a
                href="https://github.com/gjovanovicst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2c-5.523 0-10 4.477-10 10 0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/goran-jovanovi%C4%87-11a51456/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.683V19.5h-3.2V9.49h3.2v1.697ZM6.891 19.5h3.2V9.49h-3.2V19.5Zm1.6-11.217a1.853 1.853 0 1 1 0-3.706 1.853 1.853 0 0 1 0 3.706Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
