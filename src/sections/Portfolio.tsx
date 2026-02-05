import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { PROJECTS } from '@/constants';

const Portfolio: React.FC = () => (
    <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Portfolio" subtitle="Recent Projects & Creations" centered />
            <div className="grid md:grid-cols-2 gap-8">
                {PROJECTS.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
                    >
                        <div className="h-72 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="p-8">
                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">{project.category}</span>
                            <h4 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h4>
                            <p className="text-slate-500 mb-6 leading-relaxed">{project.description}</p>
                            <button className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
                                Details <ChevronRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Portfolio;
