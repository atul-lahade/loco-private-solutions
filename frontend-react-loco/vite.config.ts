import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [react(), reactRouter(), tsconfigPaths()],
  build: {
    outDir: 'dist', // Output folder for production build
    sourcemap: false, // Disable source maps for production
    minify: 'esbuild', // Use esbuild for minification
    chunkSizeWarningLimit: 500, // Avoid chunk size warnings
  },
});
