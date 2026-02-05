import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { SKILLS } from '@/constants';

const Skills: React.FC = () => (
    <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Skills" subtitle="What I Bring to the Table" centered />
            <div className="grid md:grid-cols-3 gap-6">
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                    >
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                            {skill.icon}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">{skill.name}</h4>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="bg-indigo-600 h-full rounded-full"
                            />
                        </div>
                        <div className="mt-2 text-right">
                            <span className="text-xs font-bold text-slate-400">{skill.level}% Proficiency</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
