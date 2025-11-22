'use client';
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { ArrowRight, Download } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
    const { t } = useLanguage();

    return (
        <Section className="min-h-screen flex items-center justify-center pt-32 pb-16">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-surface-100 border border-white/10 text-sm text-primary font-mono mb-6">
                        {t.hero.greeting}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        Ramazan Aydinli
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-muted-foreground font-light">
                        {t.hero.role}
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="group">
                        {t.hero.viewProjects}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg">
                        {t.hero.downloadCv}
                        <Download className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
}
