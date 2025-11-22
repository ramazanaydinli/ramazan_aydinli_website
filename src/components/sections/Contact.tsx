'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Contact() {
    const { t } = useLanguage();

    return (
        <Section id="contact" className="text-center py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto space-y-8"
            >
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-primary">04.</span> {t.contact.title}
                </h2>

                <p className="text-muted-foreground text-lg">
                    {t.contact.description}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                    <a href="mailto:ramazanaydinli94@gmail.com">
                        <Button size="lg" className="w-full md:w-auto gap-2">
                            <Mail className="w-4 h-4" />
                            ramazanaydinli94@gmail.com
                        </Button>
                    </a>
                    <a href="tel:+905442474920">
                        <Button variant="outline" size="lg" className="w-full md:w-auto gap-2">
                            <Phone className="w-4 h-4" />
                            +90 544 247 49 20
                        </Button>
                    </a>
                </div>

                <div className="flex justify-center gap-6 mt-12">
                    <a
                        href="https://linkedin.com/in/ramazan-aydinli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-surface-100 hover:bg-primary/20 hover:text-primary transition-all"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/ramazanaydinli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-surface-100 hover:bg-primary/20 hover:text-primary transition-all"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>
        </Section>
    );
}
