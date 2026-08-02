import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaJava, FaReact, FaNodeJs } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Full Stack Java Developer | CSE Student
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Building <span className="text-gradient">scalable web apps</span> with Java, Spring Boot, and React.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            I’m Anshu Sahu, a Computer Science engineering student passionate about problem solving, backend development, AI, and crafting modern digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-glow">
              View Projects <FiArrowRight />
            </a>
            <a href="/resume.pdf" download className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-slate-100 backdrop-blur">
              <FiDownload /> Resume
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><FaJava className="text-orange-400" /> Java</span>
            <span className="flex items-center gap-2"><FaReact className="text-cyan-400" /> React</span>
            <span className="flex items-center gap-2"><FaNodeJs className="text-green-400" /> Spring Boot</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
          <div className="glass rounded-[2rem] p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Currently</p>
                <h3 className="text-xl font-semibold">Software Engineer Aspirant</h3>
              </div>
              <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">Open to opportunities</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Experience', 'Java + Full Stack'],
                ['Focus', 'Backend + AI + DSA'],
                ['Education', 'B.Tech CSE'],
                ['Goal', 'Build impactful products'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-1 font-semibold text-slate-100">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
