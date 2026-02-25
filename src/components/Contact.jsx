import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="Contact" className="py-24 md:py-32 bg-[#0a0a0a] text-white px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-3xl mx-auto w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Get In Touch</h2>
                    <div className="h-1 w-24 bg-white mt-4 mx-auto"></div>
                    <p className="mt-8 text-[#888888] text-lg font-light tracking-wide max-w-xl mx-auto">
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
                            <label className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2 block">Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b-2 border-[#333] py-3 text-white focus:outline-none focus:border-white transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2 block">Email</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b-2 border-[#333] py-3 text-white focus:outline-none focus:border-white transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2 block">Message</label>
                        <textarea
                            rows="4"
                            className="w-full bg-transparent border-b-2 border-[#333] py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="self-center md:self-start bg-white text-black px-12 py-4 uppercase text-sm font-bold tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300 mt-4"
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
                    <a href="#" className="text-[#888888] hover:text-white transition-colors p-2 border border-transparent hover:border-white">
                        <FiLinkedin size={28} />
                    </a>
                    <a href="#" className="text-[#888888] hover:text-white transition-colors p-2 border border-transparent hover:border-white">
                        <FiGithub size={28} />
                    </a>
                    <a href="#" className="text-[#888888] hover:text-white transition-colors p-2 border border-transparent hover:border-white">
                        <FiMail size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
