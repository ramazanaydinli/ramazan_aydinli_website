import type { NextConfig } from "next";

// Depo adınızı buraya tanımlıyoruz (Başına "/" eklemeyi unutmayın)
const REPO_NAME = '/ramazan_aydinli_website'; 

const nextConfig: NextConfig = {
  // Statik dışa aktarmayı etkinleştirir
  output: 'export',
  distDir: 'out', 

  // Next.js'e CSS ve JS gibi varlıkları doğru yoldan yüklemesini söyler.
  basePath: REPO_NAME,
  assetPrefix: REPO_NAME,

  images: {
    unoptimized: true,
  },

  /* Mevcut diğer ayarlarınız (varsa) */
  reactCompiler: true, 
};

export default nextConfig;