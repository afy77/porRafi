import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { ARTICLES } from '@/constants';

const Articles: React.FC = () => (
    <section id="articles" className="py-24 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Blog" subtitle="Articles & Thoughts" centered />
            <div className="grid md:grid-cols-2 gap-8">
                {ARTICLES.map((article, idx) => (
                    <motion.a
                        key={idx}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-all group block"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{article.date}</span>
                            <ExternalLink className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" size={20} />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{article.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{article.summary}</p>
                    </motion.a>
                ))}
            </div>
            <div className="text-center mt-12">
                <a
                    href="https://apmgeeks.com/id/"
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read more at apmgeeks.com <ChevronRight size={18} />
                </a>
            </div>
        </div>
    </section>
);

export default Articles;
