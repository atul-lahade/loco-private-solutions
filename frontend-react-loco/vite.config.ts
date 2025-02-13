import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig({
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
