import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-slate-100">
          ANSHU<span className="text-cyan-400">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-400">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
            Hire Me
          </a>
        </div>
        <button className="rounded-full border border-white/10 p-2 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-300" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
