// components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, BrainCircuit, Landmark, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full relative flex flex-col gap-8"
    >
      
      {/* --- 1. KATMAN: FOTOĞRAF, SOSYAL, İSİM, İSTATİSTİKLER --- */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
        
        {/* SOL KOLON: Fotoğraf + Sosyal İkonlar */}
        <div className="flex flex-col items-center md:items-start gap-5 shrink-0 mx-auto md:mx-0">
            
            {/* Fotoğraf */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
                <Image
                    src="/images/profile.png"
                    alt="Ramazan Aydinli"
                    width={674} 
                    height={625} 
                    className="object-cover w-[180px] md:w-[220px] lg:w-[260px] h-auto hover:scale-105 transition-transform duration-700"
                    priority
                />
            </div>

            {/* Sosyal İkonlar */}
            <div className="flex gap-3 justify-center w-full">
                <a href="https://github.com/ramazanaydinli" target="_blank" className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"><Github size={18} /></a>
                <a href="https://linkedin.com/in/ramazan-aydinli" target="_blank" className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-blue-400 hover:bg-white/10 hover:border-blue-500/30 transition-all"><Linkedin size={18} /></a>
                <a href="mailto:ramazanaydinli94@gmail.com" className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"><Mail size={18} /></a>
            </div>
        </div>

        {/* SAĞ KOLON: İsim + İstatistikler */}
        <div className="flex-1 space-y-5 text-center md:text-left w-full pt-1">
            
            {/* Rol & İsim */}
            <div className="space-y-3">
                {/* GÜNCELLENDİ: text-[10px] -> text-xs md:text-sm */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-mono font-medium tracking-wide">
                    <BrainCircuit size={16} /> {/* İkon boyutu da 14 -> 16 yapıldı */}
                    {t.hero.role}
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tight leading-[0.9]">
                  RAMAZAN <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    AYDINLI
                  </span>
                </h1>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 gap-6 py-5 border-t border-b border-white/10">
                <div>
                    <h4 className="text-2xl md:text-4xl font-bold text-white">{t.hero.stats.projectsValue}</h4>
                    {/* GÜNCELLENDİ: text-[10px] -> text-xs md:text-sm */}
                    <p className="text-xs md:text-sm text-slate-500 font-mono uppercase mt-1 tracking-wide">{t.hero.stats.projectsLabel}</p>
                </div>
                <div>
                    <h4 className="text-2xl md:text-4xl font-bold text-white">{t.hero.stats.expValue}</h4>
                    {/* GÜNCELLENDİ: text-[10px] -> text-xs md:text-sm */}
                    <p className="text-xs md:text-sm text-slate-500 font-mono uppercase mt-1 tracking-wide">{t.hero.stats.expLabel}</p>
                </div>
            </div>
        </div>
      </div>

      {/* --- 2. KATMAN: AÇIKLAMA METNİ --- */}
      <div className="w-full">
        <p className="text-base md:text-xl text-slate-300 font-light leading-relaxed max-w-4xl">
            {t.hero.description}
        </p>
      </div>

      {/* --- 3. KATMAN: TMMOB KUTUSU --- */}
      <div className="w-full bg-white/5 rounded-xl p-5 border border-white/5 flex items-center gap-5 hover:bg-white/10 transition-colors">
            <div className="p-2.5 bg-blue-500/20 rounded-lg text-blue-400 shrink-0">
                <Landmark size={24} />
            </div>
            <div>
                {/* GÜNCELLENDİ: text-sm -> text-base */}
                <h5 className="text-base font-bold text-slate-200">{t.hero.tmmob.title}</h5>
                {/* GÜNCELLENDİ: text-xs -> text-sm */}
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    {t.hero.tmmob.desc}
                </p>
            </div>
      </div>

      {/* --- GÜNCELLENEN BUTONLAR --- */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* GÜNCELLENDİ: href="#contact" yapıldı */}
        <a href="#contact" className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
            {t.hero.buttons.contact}
            <ArrowRight size={20} />
        </a>
        <a href="/ramazan_aydinli_cv_en_ai.pdf" download className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white rounded-xl font-medium text-lg transition-all">
            {t.hero.buttons.download}
            <Download size={20} />
        </a>
      </div>

    </motion.div>
  );
}