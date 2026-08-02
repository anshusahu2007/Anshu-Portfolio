import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FiLinkedin },
  { label: 'LeetCode', href: 'https://leetcode.com', icon: SiLeetcode },
  { label: 'Email', href: 'mailto:anshusahu2360@gmail.com', icon: FiMail },
  { label: 'Phone', href: 'tel:+917052773796', icon: FiPhone },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! This demo form is ready to connect with EmailJS.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Contact</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something meaningful.</h2>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold text-white">Connect with me</h3>
            <p className="mt-4 text-slate-300">Open to software development opportunities and collaborative ideas.</p>
            <div className="mt-8 flex flex-col gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300">
                  <Icon className="text-xl" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="glass rounded-[2rem] p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0" />
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-sm text-slate-300">Message</label>
              <textarea required rows="6" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0" />
            </div>
            <button type="submit" className="mt-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white">
              Send Message <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
