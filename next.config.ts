import type { NextConfig } from "next";

// REPO_NAME artık özel domain kullanıldığı için kaldırılmalı veya kullanılmamalıdır.
// const REPO_NAME = '/ramazan_aydinli_website'; 

const nextConfig: NextConfig = {
  // Statik dışa aktarmayı etkinleştirir
  output: 'export',
  distDir: 'out', 

  // ÖNEMLİ DÜZELTME: Özel domain kullanıldığı için basePath ve assetPrefix kaldırılmalıdır.
  // basePath: REPO_NAME,
  // assetPrefix: REPO_NAME,

  images: {
    unoptimized: true,
  },

  /* Mevcut diğer ayarlarınız (varsa) */
  reactCompiler: true, 
};

export default nextConfig;