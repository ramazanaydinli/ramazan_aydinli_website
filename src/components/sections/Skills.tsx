// components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      name: t.skills.categories.languages,
      icon: <Code2 className="text-blue-400" size={22} />,
      skills: [
        { name: "Python", level: t.skills.level.expert, width: "95%", color: "bg-blue-500" },
        { name: "Kotlin (Mobile)", level: t.skills.level.proficient, width: "65%", color: "bg-purple-500" },
        { name: "C++ / Java", level: t.skills.level.fundamental, width: "30%", color: "bg-slate-500" },
        { name: "Algorithms", level: t.skills.level.expert, width: "95%", color: "bg-rose-500" },
      ]
    },
    {
      name: t.skills.categories.frameworks,
      icon: <Brain className="text-cyan-400" size={22} />,
      skills: [
        { name: "Computer Vision", level: t.skills.level.expert, width: "90%", color: "bg-green-500" },
        { name: "TensorFlow", level: t.skills.level.proficient, width: "85%", color: "bg-orange-500" },
        { name: "MediaPipe", level: t.skills.level.expert, width: "90%", color: "bg-teal-400" },
        { name: "PyTorch", level: t.skills.level.competent, width: "60%", color: "bg-red-500" },
      ]
    },
    {
      name: t.skills.categories.tools,
      icon: <Layers className="text-amber-400" size={22} />,
      skills: [
        { name: "Git / GitHub", level: t.skills.level.proficient, width: "80%", color: "bg-slate-400" },
        { name: "Linux / Nginx", level: t.skills.level.proficient, width: "70%", color: "bg-yellow-500" },
        { name: "Stable Diffusion", level: t.skills.level.competent, width: "50%", color: "bg-indigo-400" },
        { name: "ComfyUI", level: t.skills.level.competent, width: "50%", color: "bg-violet-400" },
      ]
    }
  ];

  return (
    <div className="w-full space-y-8 relative">
       <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 pt-4 border-t border-white/5">
          {t.skills.title}
       </h3>

       {/* GÜNCELLENDİ: 3 Sütunlu (Yan Yana) Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="spotlight-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
             >
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        {category.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-200 font-mono uppercase tracking-tight">
                        {category.name}
                    </h4>
                </div>
                
                <div className="space-y-6">
                    {category.skills.map((skill, k) => (
                        <div key={k} className="group">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-300 font-medium">{skill.name}</span>
                                <span className="text-slate-500 font-mono text-xs">{skill.level}</span>
                            </div>
                            <div className="h-2 w-full bg-slate-900/50 rounded-full overflow-hidden border border-white/5">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.width }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.2 }}
                                    className={`h-full rounded-full ${skill.color} opacity-80 group-hover:opacity-100 transition-all shadow-[0_0_15px_-2px_rgba(255,255,255,0.3)] relative`}
                                >
                                    <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/50 blur-[1px]" />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
             </motion.div>
          ))}
       </div>
    </div>
  );
}