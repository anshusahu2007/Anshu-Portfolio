import { motion } from 'framer-motion';

const timeline = [
  {
    title: 'B.Tech in Computer Science Engineering',
    subtitle: 'SAGE University, Indore',
    detail: 'Focused on software engineering fundamentals, problem solving, and modern web development.',
  },
  {
    title: 'Java & Backend Development',
    subtitle: 'Independent learning and projects',
    detail: 'Built applications with Java, Spring Boot, JDBC, and MySQL while strengthening backend architecture skills.',
  },
  {
    title: 'Frontend & Full Stack Growth',
    subtitle: 'React, Tailwind, and modern tooling',
    detail: 'Developed polished interfaces and full stack experiences with responsive modern UI practices.',
  },
];

const stats = [
  { value: '4+', label: 'Projects built' },
  { value: '100+', label: 'DSA problems solved' },
  { value: '5+', label: 'Technologies explored' },
  { value: '1', label: 'Focus: impact-driven development' },
];

const Journey = () => {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-black/20 lg:p-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Journey</p>
          <h2 className="text-3xl font-bold sm:text-4xl">A steady path from learning to building.</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                <div className="mb-2 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.subtitle}</p>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-center">
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
