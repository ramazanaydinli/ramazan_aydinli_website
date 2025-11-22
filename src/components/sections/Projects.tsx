// components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { HardHat, Eye, Activity, BrainCircuit } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    { 
      title: t.projects.p1.title, 
      tag: t.projects.p1.tag,
      desc: t.projects.p1.desc,
      tech: ["Python", "YOLO", "OpenCV", "Drone API"],
      icon: <HardHat className="text-amber-400" />
    },
    { 
      title: t.projects.p2.title,
      tag: t.projects.p2.tag,
      desc: t.projects.p2.desc,
      tech: ["OCR", "LLM Integration", "Shape Detection", "NLP"],
      icon: <Eye className="text-cyan-400" />
    },
    { 
      title: t.projects.p3.title,
      tag: t.projects.p3.tag,
      desc: t.projects.p3.desc,
      tech: ["3D Vision", "Sensor Fusion", "Depth Mapping", "Medical Imaging"],
      icon: <Activity className="text-rose-400" />
    },
    { 
      title: t.projects.p4.title,
      tag: t.projects.p4.tag,
      desc: t.projects.p4.desc,
      tech: ["TensorFlow Lite", "Pose Estimation", "Mobile AI", "Privacy"],
      icon: <BrainCircuit className="text-indigo-400" />
    }
  ];

  return (
    <div className="w-full space-y-8 relative">
       {/* Bölüm Başlığı - GÜNCELLENDİ: text-xs -> text-sm */}
       <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 pt-4 border-t border-white/5">
          {t.projects.title}
       </h3>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {projects.map((item, i) => (
           <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="spotlight-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group flex flex-col h-full"
           >
              <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-white/5 text-slate-300 group-hover:text-white transition-colors">
                      {item.icon}
                  </div>
                  {/* Etiket - GÜNCELLENDİ: text-[10px] -> text-xs */}
                  <span className="text-xs font-mono text-slate-500 border border-slate-800 px-2.5 py-1 rounded uppercase flex items-center">
                      {item.tag}
                  </span>
              </div>
              
              {/* Başlık - GÜNCELLENDİ: text-lg -> text-xl */}
              <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-blue-400 transition-colors">
                 {item.title}
              </h3>
              
              {/* Açıklama - GÜNCELLENDİ: text-xs -> text-sm */}
              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                 {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tech.map((t, k) => (
                      // Teknoloji Etiketi - GÜNCELLENDİ: text-[10px] -> text-xs
                      <span key={k} className="text-xs font-mono text-blue-300/80 bg-blue-500/10 px-2.5 py-1 rounded">
                          {t}
                      </span>
                  ))}
              </div>
           </motion.div>
         ))}
       </div>
    </div>
  );
}