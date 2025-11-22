// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react'; // Menu ve X ikonları eklendi
import { motion, AnimatePresence } from 'framer-motion'; // Animasyon için

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Menü linklerini bir diziye aldık, hem masaüstü hem mobilde kullanacağız
    const navLinks = [
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.background, href: '#background' }, // GÜNCELLENDİ
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled || mobileMenuOpen
                ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' 
                : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center font-mono text-sm">
                
                {/* SOL TARAF: Status Badge */}
                <div className="flex items-center gap-3 z-50">
                    <div className="relative flex items-center justify-center w-3 h-3">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </div>
                    <span className="text-slate-300 tracking-wide text-xs md:text-sm font-medium">
                        {t.nav.status}
                    </span>
                </div>

                {/* SAĞ TARAF (DESKTOP) */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-6 text-slate-400">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-white transition-colors text-xs tracking-widest">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all group"
                    >
                        <Globe size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                        <span>{language === 'en' ? 'TR' : 'EN'}</span>
                    </button>
                </div>

                {/* MOBİL MENÜ BUTONU */}
                <div className="flex items-center gap-4 md:hidden z-50">
                     <button
                        onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                        className="px-2 py-1 rounded border border-white/10 text-xs text-slate-300"
                    >
                        {language === 'en' ? 'TR' : 'EN'}
                    </button>

                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-slate-300 hover:text-white"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBİL MENÜ OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 items-center text-center"
                    >
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-slate-300 hover:text-blue-400 text-lg tracking-widest font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}