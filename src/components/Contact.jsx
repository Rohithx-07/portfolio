import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="Contact" className="py-24 md:py-32 bg-slate-950 text-slate-100 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none hidden md:block"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none hidden md:block"></div>
            <div className="max-w-3xl mx-auto w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200">Get In Touch</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mt-4 mx-auto rounded-full"></div>
                    <p className="mt-8 text-slate-400 text-lg font-light tracking-wide max-w-xl mx-auto">
                        Open to new opportunities, collaborations, and engineering discussions.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col space-y-6 w-full text-left"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Name</label>
                            <input
                                type="text"
                                className="w-full bg-slate-900/50 border-b-2 border-slate-800 py-3 px-4 text-slate-100 focus:outline-none focus:border-cyan-400 focus:bg-slate-900 transition-all rounded-t-sm"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Email</label>
                            <input
                                type="email"
                                className="w-full bg-slate-900/50 border-b-2 border-slate-800 py-3 px-4 text-slate-100 focus:outline-none focus:border-cyan-400 focus:bg-slate-900 transition-all rounded-t-sm"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Message</label>
                        <textarea
                            rows="4"
                            className="w-full bg-slate-900/50 border-b-2 border-slate-800 py-3 px-4 text-slate-100 focus:outline-none focus:border-cyan-400 focus:bg-slate-900 transition-all resize-none rounded-t-sm"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="self-center md:self-start bg-indigo-600 text-white px-12 py-4 uppercase text-sm font-bold tracking-widest hover:bg-transparent hover:text-cyan-400 border border-indigo-500 hover:border-cyan-400 shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300 mt-4 rounded-sm"
                    >
                        Send Message
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center space-x-8 mt-20"
                >
                    <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors p-2 border border-transparent hover:border-cyan-400/50 rounded-sm">
                        <FiLinkedin size={28} />
                    </a>
                    <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors p-2 border border-transparent hover:border-cyan-400/50 rounded-sm">
                        <FiGithub size={28} />
                    </a>
                    <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors p-2 border border-transparent hover:border-cyan-400/50 rounded-sm">
                        <FiMail size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
