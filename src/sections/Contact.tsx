import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formDataToSend = new FormData();
            
            // NOTE: Replace this access key with your actual Web3Forms access key
            formDataToSend.append("access_key", "f6aae66b-8106-44f8-80a1-de4afd03f3e4"); 
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("message", formData.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000); // Reset status after 5s
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="bg-white dark:bg-[#0f172a] rounded-[40px] shadow-2xl shadow-indigo-100 dark:shadow-indigo-900/20 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-5">
                        <div className="lg:col-span-2 bg-indigo-600 p-12 text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-4xl font-bold mb-6">Let's talk!</h2>
                                <p className="text-indigo-100 mb-12">Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and challenges.</p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Email me</p>
                                            <p className="font-bold">hello@rafi-dev.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                            <Linkedin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest">LinkedIn</p>
                                            <p className="font-bold">Rafi Ahmad Ghifari</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-12">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-3 p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Message</label>
                                    <textarea
                                        rows={6}
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg ${
                                        isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100 dark:shadow-indigo-900/40'
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <Send size={18} />}
                                </button>
                                
                                {submitStatus === 'success' && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        className="text-green-600 dark:text-green-400 font-bold text-sm text-center bg-green-50 dark:bg-green-900/30 p-4 rounded-xl"
                                    >
                                        Thank you! Your message has been sent successfully.
                                    </motion.p>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        className="text-red-600 dark:text-red-400 font-bold text-sm text-center bg-red-50 dark:bg-red-900/30 p-4 rounded-xl"
                                    >
                                        Oops! Something went wrong. Please try again.
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
