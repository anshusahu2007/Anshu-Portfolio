import { motion } from 'framer-motion';

const certificates = [
  { title: 'Java Programming', subtitle: 'Core concepts and OOP' },
  { title: 'Web Development', subtitle: 'Modern frontend and backend' },
  { title: 'React & Tailwind', subtitle: 'UI engineering essentials' },
];

const Certificates = () => {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Certificates</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Learning milestones and continuous growth.</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass rounded-[2rem] p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-xl font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
