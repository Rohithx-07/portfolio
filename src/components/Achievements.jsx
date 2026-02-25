import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';

const ACHIEVEMENTS_DATA = [
    {
        title: 'AWS Certified Developer',
        description: 'Associate Level certification validating expertise in developing and maintaining AWS-based applications.',
        icon: <FiTrendingUp size={32} />
    },
    {
        title: 'Global Hackathon Winner 2024',
        description: '1st place out of 500+ teams for developing an accessible AI-powered education tool using Next.js and OpenAI.',
        icon: <FiCode size={32} />
    },
    {
        title: 'Open Source Contributor',
        description: 'Merged 15+ pull requests into prominent React ecosystem libraries, improving performance and fixing deep bugs.',
        icon: <FiAward size={32} />
    }
];

const Achievements = () => {
    return (
        <section id="Achievements" className="py-24 md:py-32 bg-slate-900 text-slate-100 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:items-end"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter w-full md:text-right text-slate-200">Milestones</h2>
                    <div className="h-1 w-24 bg-gradient-to-l from-indigo-500 to-cyan-500 mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {ACHIEVEMENTS_DATA.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-slate-950 p-8 md:p-10 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] flex flex-col items-start rounded-sm group relative overflow-hidden text-slate-100"
                        >
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
                            <div className="relative z-10 w-full">
                                <div className="p-4 bg-indigo-500/10 text-cyan-400 mb-8 inline-block rounded-sm border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 leading-snug group-hover:text-indigo-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
