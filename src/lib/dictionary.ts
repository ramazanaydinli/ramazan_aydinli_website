export type Language = 'en' | 'tr';

export const dictionary = {
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            contact: 'Contact',
        },
        hero: {
            greeting: 'Hello, I am',
            role: 'Computer Vision Engineer',
            description: 'Specializing in deep learning, image processing, and building intelligent systems that perceive and understand the world.',
            viewProjects: 'View Projects',
            downloadCv: 'Download CV',
        },
        about: {
            title: 'About Me',
            p1: 'I am a passionate Computer Vision Engineer based in Ankara, Turkey. With a strong foundation in Civil Engineering and Information Systems, I have transitioned into the world of AI to solve complex problems using visual data.',
            p2: 'Currently, I work at CareMed, developing cutting-edge systems that combine RGB and infrared cameras with MRI data for medical applications. My expertise lies in Deep Learning, Image Processing, and real-time system integration.',
            p3: 'I am driven by the challenge of teaching machines to "see" and interpreting that data to create meaningful, real-world solutions.',
        },
        experience: {
            title: 'Experience',
            caremed: {
                role: 'Computer Vision Engineer',
                desc1: 'Initial project: Determining the three-dimensional coordinates of the head using data from RGB and infrared cameras, and mapping this image in real-time with MRI images. Several deep learning and image processing algorithms used for the project.',
                desc2: 'Latest Project: In response to the strict data security and privacy regulations in Europe, we developed a system that uses on-device mobile phone models for pixel-based detection of an individual\'s body and limb locations. This technology then leverages image processing and analytical geometry to visualize, record, and provide personalized recommendations for physiotherapy exercises. The core purpose of the project was to build a mobile-first assistant that guarantees maximum data security by processing information locally and sharing only pertinent data with medical professionals.',
            },
            mergen: {
                role: 'Back-End Developer',
                desc: 'Back-end development tasks for the hospital automation system using Java and MySQL.',
            },
            deeplearning: {
                role: 'Machine Learning Tester',
                desc: 'Testing artificial intelligence code related to the recommendation system. Tensorflow and Python used for this project.',
            },
        },
        skills: {
            title: 'Skills',
            technical: 'Technical Skills',
            languages: 'Languages',
            lang: {
                english: 'English',
                turkish: 'Turkish',
                advanced: 'Advanced',
                native: 'Native',
            },
        },
        contact: {
            title: 'Get In Touch',
            description: 'I am currently open to new opportunities and collaborations in the field of Computer Vision and AI. Whether you have a question or just want to say hi, feel free to reach out!',
        },
    },
    tr: {
        nav: {
            about: 'Hakkımda',
            experience: 'Deneyim',
            skills: 'Yetenekler',
            contact: 'İletişim',
        },
        hero: {
            greeting: 'Merhaba, Ben',
            role: 'Bilgisayarlı Görü Mühendisi',
            description: 'Derin öğrenme, görüntü işleme ve dünyayı algılayan ve anlayan akıllı sistemler inşa etme konusunda uzmanım.',
            viewProjects: 'Projeleri Gör',
            downloadCv: 'CV İndir',
        },
        about: {
            title: 'Hakkımda',
            p1: 'Ankara, Türkiye\'de yaşayan tutkulu bir Bilgisayarlı Görü Mühendisiyim. İnşaat Mühendisliği ve Bilişim Sistemleri temelimle, görsel verileri kullanarak karmaşık problemleri çözmek için yapay zeka dünyasına geçiş yaptım.',
            p2: 'Şu anda CareMed\'de, tıbbi uygulamalar için RGB ve kızılötesi kameraları MRI verileriyle birleştiren son teknoloji sistemler geliştiriyorum. Uzmanlığım Derin Öğrenme, Görüntü İşleme ve gerçek zamanlı sistem entegrasyonu üzerinedir.',
            p3: 'Makinelere "görmeyi" öğretme ve bu verileri anlamlı, gerçek dünya çözümleri yaratmak için yorumlama zorluğuyla motive oluyorum.',
        },
        experience: {
            title: 'Deneyim',
            caremed: {
                role: 'Bilgisayarlı Görü Mühendisi',
                desc1: 'İlk proje: RGB ve kızılötesi kameralardan alınan verileri kullanarak başın üç boyutlu koordinatlarını belirlemek ve bu görüntüyü MRI görüntüleri ile gerçek zamanlı olarak eşleştirmek. Proje için çeşitli derin öğrenme ve görüntü işleme algoritmaları kullanıldı.',
                desc2: 'Son Proje: Avrupa\'daki katı veri güvenliği ve gizlilik düzenlemelerine yanıt olarak, bireyin vücut ve uzuv konumlarının piksel tabanlı tespiti için cihaz içi (on-device) cep telefonu modellerini kullanan bir sistem geliştirdik. Bu teknoloji daha sonra fizyoterapi egzersizleri için görselleştirme, kayıt ve kişiselleştirilmiş öneriler sunmak üzere görüntü işleme ve analitik geometriden yararlanır. Projenin temel amacı, bilgileri yerel olarak işleyerek ve yalnızca ilgili verileri tıp uzmanlarıyla paylaşarak maksimum veri güvenliğini garanti eden mobil öncelikli bir asistan oluşturmaktı.',
            },
            mergen: {
                role: 'Back-End Geliştirici',
                desc: 'Java ve MySQL kullanılarak hastane otomasyon sistemi için arka uç geliştirme görevleri.',
            },
            deeplearning: {
                role: 'Makine Öğrenimi Test Uzmanı',
                desc: 'Öneri sistemi ile ilgili yapay zeka kodlarının test edilmesi. Bu proje için Tensorflow ve Python kullanıldı.',
            },
        },
        skills: {
            title: 'Yetenekler',
            technical: 'Teknik Yetenekler',
            languages: 'Diller',
            lang: {
                english: 'İngilizce',
                turkish: 'Türkçe',
                advanced: 'İleri Seviye',
                native: 'Anadil',
            },
        },
        contact: {
            title: 'İletişime Geç',
            description: 'Şu anda Bilgisayarlı Görü ve Yapay Zeka alanında yeni fırsatlara ve işbirliklerine açığım. Bir sorunuz varsa veya sadece merhaba demek istiyorsanız, çekinmeden ulaşın!',
        },
    },
};
