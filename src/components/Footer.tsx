import React from 'react';

const Footer: React.FC = () => (
    <footer className="py-12 bg-white dark:bg-[#0f172a] border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-display mb-6">RAG.</h3>
            <div className="flex justify-center space-x-8 mb-8">
                <a href="#about" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium">About</a>
                <a href="#skills" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium">Skills</a>
                <a href="#portfolio" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium">Portfolio</a>
                <a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium">Contact</a>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-sm">
                © {new Date().getFullYear()} Rafi Ahmad Ghifari
            </p>
        </div>
    </footer>
);

export default Footer;
