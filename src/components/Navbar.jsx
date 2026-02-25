import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
    'Home', 'About', 'Education', 'Projects', 'Skills', 'Experience', 'Achievements', 'Contact'
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-lg shadow-indigo-500/10' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-widest uppercase">
                    <Link to="Home" smooth={true} duration={500} className="cursor-pointer bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-indigo-400 transition-all duration-500">
                        Raghu D
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            to={link}
                            smooth={true}
                            duration={500}
                            className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                        >
                            {link}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-950/95 backdrop-blur-md w-full absolute top-full left-0 py-4 flex flex-col items-center shadow-xl shadow-indigo-500/10 border-t border-slate-800">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            to={link}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="py-3 text-sm uppercase tracking-widest text-slate-300 w-full text-center hover:bg-slate-900 hover:text-cyan-400 transition-colors"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
