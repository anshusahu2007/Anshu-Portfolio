import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiArrowUp, FiGithub, FiLinkedin, FiSend, FiPhone, FiMail, FiBookOpen, FiCode, FiCpu } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950"
          >
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.2, opacity: 0 }} className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} className="mx-auto mb-4 h-16 w-16 rounded-full border-4 border-cyan-400 border-t-transparent" />
              <p className="text-lg font-semibold tracking-[0.3em] text-slate-200">LOADING PORTFOLIO</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <div className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400" style={{ width: `${scrollProgress}%` }} />
        <button onClick={toggleTheme} className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-white/10 p-3 backdrop-blur-xl transition hover:scale-110">
          {darkMode ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-slate-800" />}
        </button>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Achievements />
          <Journey />
          <Contact />
        </main>
        <Footer />

        <AnimatePresence>
          {showScrollTop && (
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-3 shadow-2xl shadow-cyan-500/30">
              <FiArrowUp className="text-xl text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
