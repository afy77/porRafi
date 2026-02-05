import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { ARTICLES } from '@/constants';

const Articles: React.FC = () => (
    <section id="articles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Blog" subtitle="Articles & Thoughts" centered />
            <div className="grid md:grid-cols-2 gap-8">
                {ARTICLES.map((article, idx) => (
                    <a
                        key={idx}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{article.date}</span>
                            <ExternalLink className="text-slate-300 group-hover:text-indigo-600 transition-colors" size={20} />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{article.title}</h4>
                        <p className="text-slate-500 leading-relaxed">{article.summary}</p>
                    </a>
                ))}
            </div>
            <div className="text-center mt-12">
                <a
                    href="https://apmgeeks.com/id/"
                    className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline"
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
