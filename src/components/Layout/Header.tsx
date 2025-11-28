import React, { useState, useEffect } from 'react';
import { Button } from '../UI/Button';


export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex items-center justify-between">
                <a href="#" className="text-xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
                    Portfolio
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                        Start Project
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white py-2 text-lg font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" className="w-full mt-4" onClick={() => {
                            setIsMobileMenuOpen(false);
                            document.getElementById('contact')?.scrollIntoView();
                        }}>
                            Start Project
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
};
