import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => (
  <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-grid">
    <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-50"></div>
    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-violet-100 dark:bg-violet-900/30 rounded-full blur-3xl opacity-50"></div>

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold text-xs mb-6 tracking-widest uppercase">
          Welcome to my universe
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1]">
          I'm <span className="text-indigo-600 dark:text-indigo-400">Rafi Ahmad</span> <br />
          Ghifari
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
          A dedicated <span className="font-semibold text-slate-900 dark:text-white">Front End Developer</span> with 2 years of experience crafting interactive, high-performance web applications that users love.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#portfolio" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2 group">
            View My Portfolio
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            Contact Me
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block relative"
      >
        <div className="hidden md:block relative">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <img
              src={import.meta.env.BASE_URL + 'fotopertama.png'}
              alt="Developer workspace"
              className="w-full h-full object-cover object-top rounded-3xl shadow-2xl"
            />


            {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                2+
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years of</p>
                <p className="text-slate-900 font-bold">Experience</p>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
