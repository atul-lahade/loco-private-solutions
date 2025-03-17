import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: 'https://locopsglobal.com/',
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    reactRouter(), 
    tsconfigPaths(), 
    reactRefresh(),
  ],
  build: {
    outDir: 'dist', // Output folder for production build
    sourcemap: false, // Disable source maps for production
    minify: 'esbuild', // Use esbuild for minification
    chunkSizeWarningLimit: 500, // Avoid chunk size warnings
  },
});

