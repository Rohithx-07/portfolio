import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="About" className="py-24 md:py-32 bg-white text-black px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">About</h2>
                    <div className="h-1 w-24 bg-black mt-4"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
                            Software Engineer based in India.
                        </h3>
                        <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                            I am passionate about building scalable, high-performance web applications with a strong emphasis on clean architecture and minimal design. With expertise in the full stack, I take ownership of products from database schema design to polished user interfaces.
                        </p>
                        <p className="text-lg text-gray-700 font-light leading-relaxed">
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
                        <div className="relative w-full max-w-md aspect-[4/5] bg-[#0a0a0a] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            {/* Optional Placeholder Image until user provides one */}
                            <div className="absolute inset-0 flex items-center justify-center border-4 border-black p-2">
                                <div className="w-full h-full bg-[#1a1a1a] flex flex-col justify-end p-8">
                                    <p className="text-[#888888] text-xs uppercase tracking-widest mb-2">IMAGE_SRC_MISSING</p>
                                    <p className="text-white text-2xl font-bold uppercase truncate">RAGHU_PROFILE.JPG</p>
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
