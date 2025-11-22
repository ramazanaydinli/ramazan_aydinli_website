// app/layout.tsx
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  // GÜNCELLENDİ
  title: "Ramazan Aydinli | AI & Computer Vision Engineer",
  description: "M.Sc. Engineer architecting high-performance AI models, Deep Learning pipelines, and intelligent perception systems.",
  keywords: ["AI Engineer", "Computer Vision", "Deep Learning", "Image Processing", "Python", "TensorFlow", "Ramazan Aydinli"],
  authors: [{ name: "Ramazan Aydinli" }],
  openGraph: {
    title: "Ramazan Aydinli | AI & Computer Vision",
    description: "Architecting intelligent systems that perceive the world. View my portfolio and projects.",
    url: "https://ramazanaydinli.com",
    siteName: "Ramazan Aydinli Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased bg-slate-950 text-slate-200`}>
        
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <LanguageProvider>
            <Navbar />
            {children}
        </LanguageProvider>
        
      </body>
    </html>
  );
}