import React from 'react';
import { motion } from 'framer-motion';

const EDUCATION_DATA = [
    {
        degree: 'Bachelor of Technology in Computer Science',
        college: 'University of Engineering',
        year: '2022 - 2026',
        gpa: '8.8 / 10.0',
    },
    {
        degree: 'Higher Secondary Education',
        college: 'State Board of Education',
        year: '2020 - 2022',
        gpa: '92%',
    }
];

const Education = () => {
    return (
        <section id="Education" className="py-24 md:py-32 bg-slate-950 text-slate-100 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-right"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200">Education</h2>
                    <div className="h-1 w-24 bg-gradient-to-l from-indigo-500 to-cyan-500 mt-4 ml-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col">
                    {EDUCATION_DATA.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`py-8 ${index !== EDUCATION_DATA.length - 1 ? 'border-b border-slate-800' : ''} flex flex-col md:flex-row md:items-baseline justify-between hover:bg-slate-900/50 transition-colors p-4 -mx-4 group rounded-sm`}
                        >
                            <div className="mb-4 md:mb-0 md:w-2/3">
                                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">
                                    {item.degree}
                                </h3>
                                <p className="text-slate-400 uppercase tracking-wide text-sm font-semibold">
                                    {item.college}
                                </p>
                            </div>

                            <div className="md:w-1/3 md:text-right flex flex-col md:items-end">
                                <span className="text-cyan-400 font-mono text-lg border border-slate-700 bg-slate-900/50 px-4 py-1 inline-block mb-2 group-hover:border-indigo-500/50 transition-colors rounded-sm shadow-sm group-hover:shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                                    {item.year}
                                </span>
                                {item.gpa && (
                                    <span className="text-slate-500 text-sm uppercase tracking-widest font-semibold group-hover:text-slate-300 transition-colors">
                                        GPA: {item.gpa}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
