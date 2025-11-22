// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // GÜNCELLENDİ: max-w-4xl -> max-w-5xl (Genişletildi)
      className="w-full max-w-5xl mx-auto mt-24 md:mt-32 mb-10 px-6"
    >
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-blue-900/20 to-slate-900/50 p-10 md:p-16 text-center overflow-hidden group">
        
        {/* Arka plan efektleri */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700" />
        
        {/* Başlık */}
        <h3 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-6 relative z-10">
            {t.contactSection.title}
        </h3>
        
        {/* Slogan - GÜNCELLENDİ: text-4xl md:text-5xl -> text-3xl md:text-4xl (Bir tık küçültüldü) */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 relative z-10 tracking-tight leading-tight">
            {t.contactSection.heading}
        </h2>
        
        {/* Açıklama */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed relative z-10">
            {t.contactSection.desc}
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
            <a 
                href="mailto:ramazanaydinli94@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-slate-100 text-slate-950 rounded-xl font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]"
            >
                <Mail size={20} />
                {t.contactSection.emailBtn}
            </a>
            
            <a 
                href="https://linkedin.com/in/ramazan-aydinli"
                target="_blank"
                className="flex items-center gap-3 px-8 py-4 border border-white/10 bg-white/5 text-slate-200 rounded-xl font-medium text-lg hover:bg-white/10 hover:border-blue-500/30 hover:text-white transition-all"
            >
                <Linkedin size={20} />
                {t.contactSection.linkedinBtn}
                <ArrowRight size={20} />
            </a>
        </div>

      </div>
    </motion.div>
  );
}