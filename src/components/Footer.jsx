import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-[#888888] py-10 px-6 md:px-12 border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

                <div className="text-center md:text-left mb-6 md:mb-0">
                    <p className="text-sm tracking-widest uppercase font-semibold">
                        &copy; 2026 Raghu D.
                    </p>
                    <p className="text-xs mt-2 uppercase tracking-wide opacity-50">
                        Built with React + Vite | Styled with Tailwind CSS
                    </p>
                </div>

                <Link
                    to="Home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex items-center gap-2 uppercase text-xs tracking-widest hover:text-white transition-colors border border-[#333] px-6 py-3 hover:border-white"
                >
                    <span>Back to Top</span>
                    <FiArrowUp />
                </Link>

            </div>
        </footer>
    );
};

export default Footer;
