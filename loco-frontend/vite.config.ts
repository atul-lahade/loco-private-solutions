import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: 'https://saltpaths.com/',
  css: {
    postcss: './postcss.config.js',
  },
  plugins: [
    tsconfigPaths(), 
    react(),
  ],
  build: {
    outDir: 'dist', 
    sourcemap: false, 
    minify: 'esbuild', 
    chunkSizeWarningLimit: 500
  },
})
