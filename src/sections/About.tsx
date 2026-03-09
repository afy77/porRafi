import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => (
    <section id="about" className="py-24 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-5"
                >
                    <div className="relative">
                        <img
                            src={import.meta.env.BASE_URL + 'fotokedua.png'}
                            alt="About Me"
                            className="w-full aspect-[3/4] object-cover object-top rounded-3xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                        />


                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-indigo-600 rounded-tl-3xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-indigo-600 rounded-br-3xl"></div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:col-span-7"
                >
                    <SectionHeading title="About Me" subtitle="Crafting Digital Experiences with Passion" />
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        I am a Front End Developer with 2 years of experience focusing on building stunning web interfaces, architecting UI structures, and seamless front-end to back-end integration.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        My journey is driven by a commitment to building functional, modern, and user-friendly web applications. I believe that a great product is one that balances aesthetic appeal with technical excellence.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Modern UI</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Focusing on clean, minimalistic and interactive designs.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Optimization</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Ensuring lightning fast performance and accessibility.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default About;
