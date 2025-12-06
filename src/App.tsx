import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Organizations from "./components/Organizations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative selection:bg-indigo-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Ambient Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/20"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/10"></div>
      </div>

      <Navbar />
      <main className="grow">
        <Hero />
        <About />
        <Projects />
        <Organizations />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
