import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const achievements = ['DSA Practice', 'Java Development', 'Web Development', 'AI Projects'];

const Achievements = () => {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-black/20 lg:p-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Achievements</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Consistent progress across core areas.</h2>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <motion.div key={item} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-center">
              <FiCheckCircle className="mx-auto mb-3 text-2xl text-cyan-400" />
              <p className="font-semibold text-slate-100">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
