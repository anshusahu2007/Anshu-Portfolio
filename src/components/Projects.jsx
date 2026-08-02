import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'StayFind',
    description: 'A rental marketplace for rooms, vehicles, electronics, furniture, and daily rental services.',
    tech: ['React', 'Spring Boot', 'MySQL'],
    accent: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Accident Detection Helmet',
    description: 'An intelligent helmet featuring accident detection, GPS tracking, emergency SMS, video recording, and hospital alerts.',
    tech: ['Arduino', 'ESP32 CAM', 'GPS', 'GSM'],
    accent: 'from-purple-600 to-fuchsia-500',
  },
  {
    title: 'Java Banking System',
    description: 'A console-based banking application with deposit, withdraw, balance, and login features.',
    tech: ['Java'],
    accent: 'from-emerald-600 to-teal-500',
  },
  {
    title: 'Weather App',
    description: 'A sleek weather dashboard with live weather, city search, temperature, and humidity insights.',
    tech: ['React', 'OpenWeather API'],
    accent: 'from-amber-500 to-orange-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Projects</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Selected work that reflects my growth.</h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.01 }} className="group glass rounded-[2rem] p-8">
              <div className={`mb-6 h-2 rounded-full bg-gradient-to-r ${project.accent}`} />
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                See project <FiExternalLink />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
