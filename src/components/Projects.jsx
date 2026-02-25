import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PROJECTS_DATA = [
    {
        title: 'Nexus Data Pipeline',
        description: 'High-throughput data processing pipeline built for real-time analytics. Processes over 1M records per second using distributed streaming.',
        tags: ['Go', 'Kafka', 'PostgreSQL', 'Docker'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Aura AI Dashboard',
        description: 'A comprehensive analytics dashboard integrating OpenAI models for predictive business intelligence and intelligent report generation.',
        tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Sentinel Auth System',
        description: 'Zero-trust authentication microservice featuring OAuth2, biometric integration, and advanced rate limiting mechanisms.',
        tags: ['Express', 'Redis', 'JWT', 'MongoDB'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Velocity E-Commerce',
        description: 'Headless e-commerce platform with sub-second page loads, implementing ISR and global CDN caching layers.',
        tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Supabase'],
        github: '#',
        demo: '#',
    }
];

const Projects = () => {
    return (
        <section id="Projects" className="py-24 md:py-32 bg-slate-900 text-slate-100 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200">Projects</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-950 text-slate-100 p-8 md:p-10 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)] transition-all duration-500 border border-slate-800 hover:border-indigo-500/50 rounded-sm group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold uppercase tracking-wider group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    <div className="flex space-x-4">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                            <FiGithub size={24} />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                            <FiExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-400 font-light leading-relaxed mb-8">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-cyan-400 uppercase tracking-widest border border-indigo-500/30 bg-indigo-500/5 px-3 py-1 rounded-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
