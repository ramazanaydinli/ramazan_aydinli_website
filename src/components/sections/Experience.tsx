'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

import { useLanguage } from '@/context/LanguageContext';

export function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            company: 'CareMed',
            role: t.experience.caremed.role,
            period: '11/2023 – present',
            description: [
                t.experience.caremed.desc1,
                t.experience.caremed.desc2,
            ],
        },
        {
            company: 'Mergen Soft',
            role: t.experience.mergen.role,
            period: '03/2023 – 06/2023',
            description: [
                t.experience.mergen.desc,
            ],
        },
        {
            company: 'DeepLearning.AI',
            role: t.experience.deeplearning.role,
            period: '07/2022 – 03/2023',
            description: [
                t.experience.deeplearning.desc,
            ],
        },
    ];

    return (
        <Section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                    <span className="text-primary">02.</span> {t.experience.title}
                </h2>
            </motion.div>

            <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        <div className="flex-1">
                            <Card hoverEffect className="h-full">
                                <div className="flex flex-col justify-between h-full gap-4">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h4 className="text-lg text-secondary font-medium mb-4">{exp.company}</h4>
                                        <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                                            {exp.description.map((desc, i) => (
                                                <p key={i}>{desc}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Timeline Dot */}
                        <div className="hidden md:flex items-center justify-center w-8 relative">
                            <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                        </div>

                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
