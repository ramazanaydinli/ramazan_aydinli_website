// components/sections/Education.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Education() {
  const { t } = useLanguage();

  const education = [
    {
      ...t.education.hacettepe,
      color: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/5"
    },
    {
      ...t.education.odtu,
      color: "text-blue-400",
      border: "border-blue-500/20",
      bg: "bg-blue-500/5"
    }
  ];

  return (
    // ID EKLENDİ: Navbar'daki "Experience" buraya gelecek
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm scroll-mt-24"
    >
      {/* BAŞLIK BÜYÜTÜLDÜ: text-xs -> text-sm */}
      <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2">
          {t.education.title}
      </h3>

      <div className="flex flex-col gap-5">
          {education.map((item, i) => (
             <div 
                key={i}
                className={`p-5 rounded-xl border transition-all group ${item.bg} ${item.border} hover:bg-opacity-20`}
             >
                <div className="flex items-start gap-4 mb-3">
                   <div className={`p-2 rounded-lg bg-white/5 shrink-0 ${item.color}`}>
                      <GraduationCap size={22} />
                   </div>
                   <div>
                       {/* OKUL BÜYÜTÜLDÜ: text-sm -> text-base */}
                       <h4 className={`text-base font-bold ${item.color}`}>
                          {item.school}
                       </h4>
                       <div className="flex items-center gap-2 mt-1.5">
                           {/* TARİH BÜYÜTÜLDÜ: text-[10px] -> text-xs */}
                           <span className="text-xs font-mono text-slate-400 bg-black/20 px-2 py-1 rounded flex items-center gap-1.5">
                              <Calendar size={12} />
                              {item.date}
                           </span>
                       </div>
                   </div>
                </div>
                
                {/* DERECE BÜYÜTÜLDÜ: text-xs -> text-sm */}
                <div className="text-sm font-medium text-slate-200 mb-2 pl-[50px]">
                   {item.degree}
                </div>
                
                {/* AÇIKLAMA BÜYÜTÜLDÜ: text-[11px] -> text-xs */}
                <p className="text-xs text-slate-400 leading-relaxed pl-[50px] opacity-90">
                   {item.desc}
                </p>
             </div>
          ))}
       </div>
    </motion.div>
  );
}