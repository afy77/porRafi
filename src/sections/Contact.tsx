import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent (Mockup).");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[40px] shadow-2xl shadow-indigo-100 overflow-hidden">
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
                                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Your Message</label>
                                    <textarea
                                        rows={6}
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-100"
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
