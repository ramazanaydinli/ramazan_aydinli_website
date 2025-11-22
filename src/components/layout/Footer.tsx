// components/layout/Footer.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();
    
    return (
        <footer className="w-full border-t border-white/5 bg-slate-950 relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-slate-200 tracking-tight">
                        {t.footer.name} {/* GÜNCELLENDİ: Dinamik İsim */}
                    </h2>
                    <p className="text-sm text-slate-500 font-mono mt-1">
                        {t.footer.role} {/* GÜNCELLENDİ: Dinamik Rol */}
                    </p>
                </div>

                <div className="text-sm text-slate-600 font-mono text-center md:text-right">
                    <p>© {new Date().getFullYear()} {t.footer.rights}</p>
                    <p className="mt-1 opacity-50">{t.footer.built}</p>
                </div>
            </div>
        </footer>
    );
}