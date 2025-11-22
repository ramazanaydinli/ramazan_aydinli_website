import type { NextConfig } from "next";

// Depo adınızı buraya yazın (Örneğin: '/ramazan_website')
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

  /* Mevcut diğer ayarlarınızı buraya ekleyin */
  reactCompiler: true, 
};

export default nextConfig;