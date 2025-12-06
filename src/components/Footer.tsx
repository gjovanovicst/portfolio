const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-sm dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">
          © {new Date().getFullYear()}{" "}
          <a href="https://github.com/gjovanovicst" className="hover:underline">
            Goran Jovanović
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-500 dark:text-slate-400 sm:mt-0">
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline me-4 md:me-6">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
