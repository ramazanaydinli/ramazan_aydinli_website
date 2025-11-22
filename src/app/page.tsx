// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certificates } from "@/components/sections/Certificates";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
    
      {/* GÜNCELLENDİ: pb-20 -> pb-10 (Alt boşluk yarıya indirildi) */}
      <main className="relative flex-grow flex flex-col items-center pt-24 md:pt-32 pb-10 overflow-hidden selection:bg-blue-500/30">

        {/* ARKA PLAN EFEKTLERİ */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 z-0 opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)'
          }}>
        </div>

        {/* ANA İÇERİK */}
        <div className="relative z-10 w-full max-w-5xl px-6 md:px-8 flex flex-col gap-16 md:gap-24">
          
          {/* 1. HERO (Profil) */}
          <section>
            <Hero />
          </section>

          {/* 2. PROJECTS (Projeler) */}
          <section id="projects" className="scroll-mt-24">
             <Projects />
          </section>

          {/* 3. SKILLS (Yetenekler) */}
          <section id="skills" className="scroll-mt-24">
             <Skills />
          </section>

          {/* GÜNCELLENDİ: id="background" buraya eklendi */}
          <section id="background" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start scroll-mt-24">
             <Certificates />
             <Education />
          </section>
        </div>

        {/* İLETİŞİM */}
        <Contact />

      </main>
      
      <Footer />
      
    </div>
  );
}