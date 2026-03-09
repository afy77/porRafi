import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { EXPERIENCE, EDUCATION } from '@/constants';

const Experience: React.FC = () => (
    <section id="experience" className="py-24 bg-white dark:bg-[#0f172a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Experience Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading title="Career" subtitle="Professional Experience" />
                    <div className="space-y-12">
                        {EXPERIENCE.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800"
                            >
                                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100 dark:ring-indigo-900/30"></div>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-3">
                                    {item.year}
                                </span>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">{item.subtitle}</p>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <SectionHeading title="Learning" subtitle="Educational Journey" />
                    <div className="space-y-12">
                        {EDUCATION.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800"
                            >
                                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-slate-100 dark:ring-slate-800"></div>
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold mb-3">
                                    {item.year}
                                </span>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 font-semibold mb-3">{item.subtitle}</p>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Experience;
