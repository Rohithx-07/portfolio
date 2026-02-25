import React from 'react';
import { motion } from 'framer-motion';

const SKILLS_CATEGORIES = [
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML/CSS']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
        title: 'Tools & DevOps',
        skills: ['Git / GitHub', 'Docker', 'AWS', 'Vercel', 'Linux', 'CI/CD Pipelines', 'Jest']
    },
    {
        title: 'AI / ML',
        skills: ['OpenAI API', 'LangChain', 'HuggingFace', 'Pandas', 'TensorFlow Basics', 'RAG Architectures']
    }
];

const Skills = () => {
    return (
        <section id="Skills" className="py-24 md:py-32 bg-slate-950 text-slate-100 px-6 md:px-12 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200">Capabilities</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mt-4 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {SKILLS_CATEGORIES.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 hover:border-indigo-500/50 transition-all duration-300 rounded-sm shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] group"
                        >
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 pb-4 border-b border-slate-800 group-hover:border-indigo-500/30 transition-colors text-slate-300 group-hover:text-cyan-400">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-slate-950 border border-slate-800 hover:border-cyan-400/80 hover:text-cyan-400 text-slate-400 transition-all duration-300 text-sm font-semibold uppercase tracking-wider px-4 py-2 cursor-default rounded-sm"
                                    >
                                        {skill}
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

export default Skills;
