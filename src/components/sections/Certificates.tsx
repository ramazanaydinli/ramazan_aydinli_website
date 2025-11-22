// components/sections/Certificates.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Certificates() {
  const { t } = useLanguage();

  const certs = [
    { ...t.hero.certificates.c1, highlight: true }, // Bu vurgulu kalacak ama Mavi olacak
    { ...t.hero.certificates.c2, highlight: false },
    { ...t.hero.certificates.c3, highlight: false },
    { ...t.hero.certificates.c4, highlight: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm"
    >
      <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2">
          {t.hero.certificates.title}
      </h3>
      
      <div className="flex flex-col gap-4">
        {certs.map((cert, i) => (
            <a 
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all group relative overflow-hidden ${
                    cert.highlight 
                    // GÜNCELLENDİ: Amber yerine Blue tonları kullanıldı
                    ? 'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
            >
                {/* LOGO KISMI */}
                <div className="shrink-0 relative w-12 h-12 bg-white rounded-md p-1 overflow-hidden">
                    <Image 
                        src={cert.logo} 
                        alt={cert.issuer} 
                        fill 
                        className="object-contain" 
                        unoptimized
                    />
                </div>
                
                <div className="flex flex-col min-w-0 flex-1">
                    {/* GÜNCELLENDİ: Yazı rengi de Amber'den Blue'ya döndü */}
                    <span className={`text-base font-medium truncate pr-6 ${cert.highlight ? 'text-blue-200' : 'text-slate-300 group-hover:text-white'}`}>
                        {cert.name}
                    </span>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider truncate mt-0.5">
                        {cert.issuer}
                    </span>
                </div>

                {/* Hover'da görünen dış bağlantı ikonu */}
                <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${cert.highlight ? 'text-blue-400' : 'text-slate-400'}`}>
                    <ExternalLink size={16} />
                </div>
            </a>
        ))}
      </div>
    </motion.div>
  );
}