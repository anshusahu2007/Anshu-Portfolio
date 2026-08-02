import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'JDBC', 'Servlets'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'SQL'],
  },
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'JavaScript'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Skills</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Technologies I work with.</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass rounded-[2rem] p-8">
              <h3 className="mb-6 text-xl font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
