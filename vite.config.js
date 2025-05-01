import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  // base: '/mobility/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/slick-carousel/slick/fonts/*',
          dest: 'fonts'
        }
      ]
    })
  ]
});
