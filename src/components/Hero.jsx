import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="Home" className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-start mt-20">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-cyan-400 text-sm md:text-base tracking-widest uppercase mb-4 flex items-center gap-2 font-semibold"
                >
                    <span className="w-8 h-[2px] bg-cyan-400"></span> System Initialized // Raghu D
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 max-w-5xl text-slate-300"
                >
                    Engineering <br /> Software <br /> <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">With Intent.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-400 font-light tracking-wide mb-10 border-l-2 border-indigo-500 pl-4"
                >
                    Full Stack Developer | AI Enthusiast | Clean Architecture Advocate
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Link
                        to="Projects"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer bg-indigo-600 border border-indigo-500 text-white px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 text-center shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] rounded-sm"
                    >
                        View Projects
                    </Link>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer border border-slate-600 text-slate-300 px-8 py-4 uppercase text-sm font-bold tracking-widest hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300 text-center rounded-sm"
                    >
                        Download Resume
                    </a>
                </motion.div>

            </div>

            {/* Subtle aesthetic background grid/lines with blue tint */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

            {/* Soft glowing orb in the background */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        </section>
    );
};

export default Hero;
