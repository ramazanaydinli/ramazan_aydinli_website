'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/context/LanguageContext';

export function Skills() {
    const { t } = useLanguage();

    const skills = [
        { name: 'Python', level: 'Expert', color: 'bg-blue-500' },
        { name: 'TensorFlow', level: 'Proficient', color: 'bg-orange-500' },
        { name: 'OpenCV', level: 'Proficient', color: 'bg-green-500' },
        { name: 'Stable Diffusion', level: 'Competent', color: 'bg-purple-500' },
        { name: 'Java', level: 'Competent', color: 'bg-red-500' },
        { name: 'MySQL', level: 'Competent', color: 'bg-cyan-500' },
    ];

    const languages = [
        { name: t.skills.lang.english, level: t.skills.lang.advanced },
        { name: t.skills.lang.turkish, level: t.skills.lang.native },
    ];

    return (
        <Section id="skills" className="bg-surface-50/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                    <span className="text-primary">03.</span> {t.skills.title}
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-white">{t.skills.technical}</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Card className="p-4 flex items-center justify-between hover:border-primary/30 transition-colors">
                                    <span className="font-medium text-white">{skill.name}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5`}>
                                        {skill.level}
                                    </span>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Languages & Others */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-white">{t.skills.languages}</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {languages.map((lang, index) => (
                            <motion.div
                                key={lang.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Card className="p-4 flex items-center justify-between hover:border-primary/30 transition-colors">
                                    <span className="font-medium text-white">{lang.name}</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                                        {lang.level}
                                    </span>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
