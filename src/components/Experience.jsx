import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE_DATA = [
    {
        company: 'TechNova Solutions',
        role: 'Full Stack Developer',
        duration: 'Jan 2024 - Present',
        responsibilities: [
            'Architected and deployed a containerized microservices platform using Node.js and Docker.',
            'Reduced initial load times by 40% through aggressive caching and SSR optimization.',
            'Lead a team of 3 junior developers, establishing code review practices and CI/CD pipelines.'
        ]
    },
    {
        company: 'Innovate AI Labs',
        role: 'Frontend Engineering Intern',
        duration: 'May 2023 - Dec 2023',
        responsibilities: [
            'Developed responsive UI components for an internal ML model dashboard using React and Tailwind.',
            'Integrated real-time websocket data to display live model training metrics.',
            'Improved overall accessibility score from 75 to 98 on Lighthouse.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="Experience" className="py-24 md:py-32 bg-slate-950 text-slate-100 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200">Experience</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mt-4 rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 pl-8 md:pl-12 py-4">
                    {EXPERIENCE_DATA.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="mb-16 last:mb-0 relative group"
                        >
                            <div className="absolute -left-[42px] md:-left-[58px] top-1 w-4 h-4 rounded-full bg-slate-950 border-4 border-indigo-500 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold uppercase tracking-wider text-slate-200 group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                                    <p className="text-slate-400 font-semibold uppercase tracking-widest text-sm mt-1">{job.company}</p>
                                </div>
                                <div className="mt-2 md:mt-0 bg-indigo-500/10 text-cyan-400 px-4 py-1 text-xs font-mono tracking-widest inline-block border border-indigo-500/30 rounded-sm">
                                    {job.duration}
                                </div>
                            </div>

                            <ul className="list-none space-y-3 mt-6">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i} className="text-slate-300 font-light text-base md:text-lg leading-relaxed relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-[1px] before:bg-cyan-500">
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
