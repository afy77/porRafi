import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle: string;
    centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered }) => (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
        <h3 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm mb-2">{title}</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">{subtitle}</h2>
        <div className={`h-1.5 w-20 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
);

export default SectionHeading;
