// lib/dictionary.ts
export type Language = 'en' | 'tr';

export const dictionary = {
    en: {
        nav: {
            status: 'OPEN TO INNOVATION',
            projects: 'PROJECTS',
            skills: 'SKILLS',
            background: 'BACKGROUND',
            contact: 'CONTACT',
            downloadCv: 'Download CV',
        },
        hero: {
            role: 'AI & COMPUTER VISION ENGINEER',
            titlePrefix: 'ARCHITECTING',
            titleSuffix: 'INTELLIGENCE',
            description: 'Architecting high-performance Artificial Intelligence systems driven by Deep Learning and Computer Vision to solve complex visual perception challenges.',
            stats: {
                projectsValue: '4+',
                projectsLabel: 'Major AI Pipelines',
                expValue: 'BS + MS', 
                expLabel: 'Double Discipline', 
            },
            tmmob: {
                title: 'TMMOB AI Working Group',
                desc: 'Representing the Chamber of Civil Engineers in national AI workshops and strategic planning.'
            },
            certificates: {
                title: '// Certifications & Badges',
                c1: { 
                    name: 'TensorFlow Developer', 
                    issuer: 'Google', 
                    url: 'https://www.credential.net/28534234-23c5-40a7-99ed-a29c974feb0e#acc.6jGpR978', 
                    logo: '/images/google.png' 
                },
                c2: { 
                    name: 'GANs Specialization', 
                    issuer: 'DeepLearning.AI', 
                    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/BU9JKWNCXXFE', 
                    logo: '/images/deeplearning-ai.png' 
                },
                c3: { 
                    name: 'Advanced Computer Vision', 
                    issuer: 'DeepLearning.AI', 
                    url: 'https://www.coursera.org/account/accomplishments/certificate/5H2BQYH38LXW', 
                    logo: '/images/deeplearning-ai.png' 
                },
                c4: { 
                    name: 'Deep Neural Networks w/ PyTorch', 
                    issuer: 'IBM', 
                    url: 'https://www.coursera.org/account/accomplishments/certificate/EVDCPDVXGUCR', 
                    logo: '/images/ibm.png' 
                }
            },
            buttons: {
                contact: 'Contact Me',
                download: 'Download CV'
            }
        },
        projects: {
            title: '// Selected Works & Pipelines',
            p1: {
                title: "Drone-Based Site Safety Pipeline",
                desc: "Autonomous surveillance pipeline processing drone footage to detect safety violations (PPE compliance, high-altitude workers) at construction sites in real-time.",
                tag: "INDUSTRIAL AI"
            },
            p2: {
                title: "Visual QA & Img2Text Engine",
                desc: "End-to-end pipeline converting geometric shapes into structured text prompts for LLMs to automatically solve visual geometry problems.",
                tag: "GENERATIVE AI"
            },
            p3: {
                title: "Medical AR Navigation System",
                desc: "Real-time 3D coordinate mapping system merging RGB-Depth sensor data with pre-op MRI scans for surgical guidance.",
                tag: "MEDICAL TECH"
            },
            p4: {
                title: "Privacy-First Physio Assistant",
                desc: "On-device mobile CV system for physiotherapy. Performs pixel-level body & limb tracking locally without cloud dependency.",
                tag: "EDGE AI"
            }
        },
        skills: {
            title: '// TECHNICAL ARSENAL',
            categories: {
                // GÜNCELLENDİ: Görseldeki başlıklarla birebir aynı yapıldı
                languages: 'CORE & LANGUAGES',
                frameworks: 'AI & VISION STACK',
                tools: 'SYSTEM & TOOLS'
            },
            level: {
                expert: 'Expert',
                proficient: 'Proficient',
                competent: 'Competent',
                fundamental: 'Fundamental'
            }
        },
        education: {
            title: '// Academic Background',
            hacettepe: {
                school: 'Hacettepe University',
                degree: 'M.Sc. Information Systems',
                date: '2022 — 2024',
                desc: 'Focused on Deep Learning, Computer Vision, and Advanced Data Structures.'
            },
            odtu: {
                school: 'Middle East Technical University (METU)',
                degree: 'B.Sc. Civil Engineering',
                date: '2014 — 2021',
                desc: 'Gained strong analytical foundation in structural mechanics and engineering mathematics.'
            }
        },
        contactSection: {
            title: '// Get In Touch',
            heading: 'Ready to build intelligent systems?',
            desc: 'I am currently open to new opportunities in Computer Vision and AI Engineering. Whether you have a question or just want to say hi, my inbox is always open.',
            emailBtn: 'Send Email',
            linkedinBtn: 'Connect on LinkedIn'
        },
        footer: {
            name: 'RAMAZAN AYDINLI',
            role: 'AI & Computer Vision Engineer',
            rights: 'All rights reserved.',
            built: 'Built with Next.js & Tailwind'
        }
    },
    tr: {
        nav: {
            status: 'İNOVASYONA AÇIK',
            projects: 'PROJELER',
            skills: 'YETENEKLER',
            background: 'GEÇMİŞ',
            contact: 'İLETİŞİM',
            downloadCv: 'CV İndir',
        },
        hero: {
            role: 'YAPAY ZEKA & GÖRÜNTÜ İŞLEME MÜHENDİSİ',
            titlePrefix: 'ZEKAYI',
            titleSuffix: 'TASARLAMAK',
            description: 'Karmaşık problemleri çözmek için Derin Öğrenme ve Bilgisayarlı Görü destekli, yüksek performanslı Yapay Zeka sistemleri tasarlamaktayım.',
            stats: {
                projectsValue: '4+',
                projectsLabel: 'YAPAY ZEKA SİSTEMİ',
                expValue: 'LİSANS + YL',
                expLabel: 'YÜKSEK MÜHENDİS',
            },
            tmmob: {
                title: 'TMMOB Yapay Zeka Çalışma Grubu',
                desc: 'İnşaat Mühendisleri Odası\'nı temsilen ulusal yapay zeka çalıştaylarında ve stratejik planlamalarda yer alıyorum.'
            },
            certificates: {
                title: '// SERTİFİKALAR & ROZETLER',
                c1: { 
                    name: 'TensorFlow Geliştirici Sertifikası', 
                    issuer: 'Google', 
                    url: 'https://www.credential.net/28534234-23c5-40a7-99ed-a29c974feb0e#acc.6jGpR978', 
                    logo: '/images/google.png' 
                },
                c2: { 
                    name: 'GANs Uzmanlığı Sertifikası', 
                    issuer: 'DeepLearning.AI', 
                    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/BU9JKWNCXXFE', 
                    logo: '/images/deeplearning-ai.png' 
                },
                c3: { 
                    name: 'İleri Bilgisayarlı Görü Sertifikası', 
                    issuer: 'DeepLearning.AI', 
                    url: 'https://www.coursera.org/account/accomplishments/certificate/5H2BQYH38LXW', 
                    logo: '/images/deeplearning-ai.png' 
                },
                c4: { 
                    name: 'PyTorch ile Derin Sinir Ağları Sertifikası', 
                    issuer: 'IBM', 
                    url: 'https://www.coursera.org/account/accomplishments/certificate/EVDCPDVXGUCR', 
                    logo: '/images/ibm.png' 
                }
            },
            buttons: {
                contact: 'İletişime Geç',
                download: 'CV İndir'
            }
        },
        projects: {
            title: '// SEÇİLİ İŞLER & SİSTEMLER',
            p1: {
                title: "Drone Tabanlı Saha Güvenliği",
                desc: "Şantiyelerdeki güvenlik ihlallerini (baret/halat kontrolü) gerçek zamanlı tespit etmek için drone görüntülerini işleyen otonom gözetim sistemi.",
                tag: "ENDÜSTRİYEL YZ"
            },
            p2: {
                title: "Görsel Soru Cevaplama Motoru",
                desc: "Geometrik şekilleri algılayıp yapılandırılmış metne dönüştüren ve LLM'leri kullanarak görsel problemleri çözen uçtan uca sistem.",
                tag: "ÜRETKEN YZ"
            },
            p3: {
                title: "Medikal AR Navigasyon Sistemi",
                desc: "Cerrahi rehberlik için RGB-Derinlik sensör verilerini ameliyat öncesi MRI taramalarıyla birleştiren gerçek zamanlı 3D haritalama sistemi.",
                tag: "MEDİKAL TEK."
            },
            p4: {
                title: "Gizlilik Odaklı Fizyo Asistanı",
                desc: "Fizyoterapi için cihaz içi (on-device) mobil görüntü işleme sistemi. Bulut bağımlılığı olmadan vücut takibini yerelde yapar.",
                tag: "UÇ YZ (EDGE AI)"
            }
        },
        skills: {
            title: '// TEKNİK YETKİNLİKLER',
            categories: {
                // GÜNCELLENDİ: Türkçe karşılıkları
                languages: 'ÇEKİRDEK & DİLLER',
                frameworks: 'YZ & GÖRÜNTÜ İŞLEME',
                tools: 'SİSTEM & ARAÇLAR'
            },
            level: {
                expert: 'Uzman',
                proficient: 'Yetkin',
                competent: 'Orta Seviye',
                fundamental: 'Temel'
            }
        },
        education: {
            title: '// AKADEMİK GEÇMİŞ',
            hacettepe: {
                school: 'Hacettepe Üniversitesi',
                degree: 'Yüksek Lisans, Bilişim Sistemleri',
                date: '2022 — 2024',
                desc: 'Derin Öğrenme, Bilgisayarlı Görü ve İleri Veri Yapıları üzerine odaklanıldı.'
            },
            odtu: {
                school: 'Orta Doğu Teknik Üniversitesi (ODTÜ)',
                degree: 'Lisans, İnşaat Mühendisliği',
                date: '2014 — 2021',
                desc: 'Yapı mekaniği ve mühendislik matematiği üzerine güçlü bir analitik temel kazanıldı.'
            }
        },
        contactSection: {
            title: '// İLETİŞİME GEÇ',
            heading: 'Akıllı sistemler inşa etmeye hazır mısınız?',
            desc: 'Şu anda Bilgisayarlı Görü ve Yapay Zeka Mühendisliği alanında yeni fırsatlara açığım. Bir sorunuz varsa veya sadece merhaba demek istiyorsanız, bana ulaşabilirsiniz.',
            emailBtn: 'E-posta Gönder',
            linkedinBtn: 'LinkedIn\'den Bağlan'
        },
        footer: {
            name: 'RAMAZAN AYDINLI',
            role: 'Yapay Zeka & Görüntü İşleme Mühendisi',
            rights: 'Tüm hakları saklıdır.',
            built: 'Next.js & Tailwind ile geliştirildi'
        }
    },
};