import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiBookOpen, FiTrendingUp } from 'react-icons/fi';

const bullets = [
  'CSE Student',
  'Java Developer',
  'Full Stack Developer',
  'Passionate about problem solving',
  'Learning DSA',
  'Interested in AI',
  'Interested in Backend Development',
  'Looking for Software Developer opportunities',
];

const About = () => {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">About Me</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Crafting software with curiosity and discipline.</h2>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-[2rem] p-8">
            <p className="text-lg leading-8 text-slate-300">
              I’m a dedicated Computer Science student and developer who enjoys building practical solutions for real-world problems. My work spans Java, Spring Boot, React, databases, and modern web development, with a strong interest in backend systems and AI-driven applications.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: FiCode, label: 'Development', value: 'Full Stack' },
                { icon: FiCpu, label: 'Focus', value: 'Backend & AI' },
                { icon: FiBookOpen, label: 'Learning', value: 'DSA & System Design' },
                { icon: FiTrendingUp, label: 'Goal', value: 'Impactful Products' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <Icon className="mb-2 text-cyan-400" />
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="font-semibold text-slate-100">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-[2rem] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {bullets.map((item) => (
                <div key={item} className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm font-medium text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
