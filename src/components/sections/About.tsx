'use client';
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

import { useLanguage } from '@/context/LanguageContext';

export function About() {
    const { t } = useLanguage();

    return (
        <Section id="about" className="bg-surface-50/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                        <Image
                            src="/images/profile.png"
                            alt="Ramazan Aydinli"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary rounded-tl-3xl pointer-events-none" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary rounded-br-3xl pointer-events-none" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                        <span className="text-primary">01.</span> {t.about.title}
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            {t.about.p1}
                        </p>
                        <p>
                            {t.about.p2}
                        </p>
                        <p>
                            {t.about.p3}
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
