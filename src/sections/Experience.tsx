import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { EXPERIENCE, EDUCATION } from '@/constants';

const Experience: React.FC = () => (
    <section id="experience" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Experience Timeline */}
                <div>
                    <SectionHeading title="Career" subtitle="Professional Experience" />
                    <div className="space-y-12">
                        {EXPERIENCE.map((item, idx) => (
                            <div key={idx} className="relative pl-8 border-l-2 border-slate-100">
                                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100"></div>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-3">
                                    {item.year}
                                </span>
                                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                                <p className="text-indigo-600 font-semibold mb-3">{item.subtitle}</p>
                                <p className="text-slate-500 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Timeline */}
                <div>
                    <SectionHeading title="Learning" subtitle="Educational Journey" />
                    <div className="space-y-12">
                        {EDUCATION.map((item, idx) => (
                            <div key={idx} className="relative pl-8 border-l-2 border-slate-100">
                                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100"></div>
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-3">
                                    {item.year}
                                </span>
                                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                                <p className="text-slate-500 font-semibold mb-3">{item.subtitle}</p>
                                <p className="text-slate-500 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Experience;
