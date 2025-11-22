import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statik dışa aktarmayı etkinleştirir.
  output: 'export',
  
  // Derleme çıktı klasörünü, GitHub Pages'ın yayımlaması için doğru yer olan 'out' olarak ayarlar.
  distDir: 'out', 

  // Statik yayınlama için Next.js Image bileşeninin optimize edilmesini devre dışı bırakır.
  images: {
    unoptimized: true,
  },

  /* Mevcut diğer ayarlarınızı buraya ekleyin */
  reactCompiler: true, 
};

export default nextConfig;