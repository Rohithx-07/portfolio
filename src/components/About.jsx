import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="About" className="py-24 md:py-32 bg-slate-900 text-slate-100 px-6 md:px-12 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200">About</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                            Software Engineer based in India.
                        </h3>
                        <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                            I am passionate about building scalable, high-performance web applications with a strong emphasis on clean architecture and minimal design. With expertise in the full stack, I take ownership of products from database schema design to polished user interfaces.
                        </p>
                        <p className="text-lg text-slate-400 font-light leading-relaxed">
                            Beyond traditional web development, I am an AI enthusiast deeply interested in integrating intelligent features into everyday tools to augment human capabilities. I believe in engineering software that not only works flawlessly but is heavily intentional in its design and purpose.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5] bg-slate-950 overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.15)] rounded-sm group transition-all duration-700 border border-slate-800 hover:border-indigo-500/50">
                            {/* Optional Placeholder Image until user provides one */}
                            <div className="absolute inset-0 flex items-center justify-center border-4 border-slate-900 p-2 group-hover:border-indigo-900/50 transition-colors duration-500">
                                <div className="w-full h-full bg-slate-900 flex flex-col justify-end p-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px]"></div>
                                    <p className="text-cyan-500 text-xs uppercase tracking-widest mb-2 z-10">IMAGE_SRC_MISSING</p>
                                    <p className="text-slate-200 text-2xl font-bold uppercase truncate z-10">RAGHU_PROFILE.JPG</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
