// vite.config.ts
import reactRefresh from "file:///C:/Atul%20Lahade/Projects/loco-private-solutions/frontend-react-loco/node_modules/.pnpm/@vitejs+plugin-react-refresh@1.3.6/node_modules/@vitejs/plugin-react-refresh/index.js";
import { defineConfig } from "file:///C:/Atul%20Lahade/Projects/loco-private-solutions/frontend-react-loco/node_modules/.pnpm/vite@5.4.14_@types+node@20.17.18/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Atul%20Lahade/Projects/loco-private-solutions/frontend-react-loco/node_modules/.pnpm/vite-tsconfig-paths@5.1.4_typescript@5.7.3_vite@5.4.14_@types+node@20.17.18_/node_modules/vite-tsconfig-paths/dist/index.js";
import tailwindcss from "file:///C:/Atul%20Lahade/Projects/loco-private-solutions/frontend-react-loco/node_modules/.pnpm/tailwindcss@3.4.17/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Atul%20Lahade/Projects/loco-private-solutions/frontend-react-loco/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.5.2/node_modules/autoprefixer/lib/autoprefixer.js";
import { reactRouter } from "file:///C:/Atul%20Lahade/Projects/loco-private-solutions/frontend-react-loco/node_modules/.pnpm/@react-router+dev@7.1.5_@react-router+serve@7.1.5_react-router@7.1.5_react-dom@19.0.0_react@1_2pzhyp2qqqjpdk2mvatdpi4m5u/node_modules/@react-router/dev/dist/vite.js";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    reactRefresh()
  ],
  build: {
    outDir: "dist",
    // Output folder for production build
    sourcemap: false,
    // Disable source maps for production
    minify: "esbuild",
    // Use esbuild for minification
    chunkSizeWarningLimit: 500
    // Avoid chunk size warnings
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxBdHVsIExhaGFkZVxcXFxQcm9qZWN0c1xcXFxsb2NvLXByaXZhdGUtc29sdXRpb25zXFxcXGZyb250ZW5kLXJlYWN0LWxvY29cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXEF0dWwgTGFoYWRlXFxcXFByb2plY3RzXFxcXGxvY28tcHJpdmF0ZS1zb2x1dGlvbnNcXFxcZnJvbnRlbmQtcmVhY3QtbG9jb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovQXR1bCUyMExhaGFkZS9Qcm9qZWN0cy9sb2NvLXByaXZhdGUtc29sdXRpb25zL2Zyb250ZW5kLXJlYWN0LWxvY28vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3RSZWZyZXNoIGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXJlZnJlc2gnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5pbXBvcnQgeyByZWFjdFJvdXRlciB9IGZyb20gJ0ByZWFjdC1yb3V0ZXIvZGV2L3ZpdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MsIGF1dG9wcmVmaXhlcl0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0Um91dGVyKCksIFxuICAgIHRzY29uZmlnUGF0aHMoKSwgXG4gICAgcmVhY3RSZWZyZXNoKCksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsIC8vIE91dHB1dCBmb2xkZXIgZm9yIHByb2R1Y3Rpb24gYnVpbGRcbiAgICBzb3VyY2VtYXA6IGZhbHNlLCAvLyBEaXNhYmxlIHNvdXJjZSBtYXBzIGZvciBwcm9kdWN0aW9uXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsIC8vIFVzZSBlc2J1aWxkIGZvciBtaW5pZmljYXRpb25cbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDUwMCwgLy8gQXZvaWQgY2h1bmsgc2l6ZSB3YXJuaW5nc1xuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9ZLE9BQU8sa0JBQWtCO0FBQzdaLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCO0FBQ3pCLFNBQVMsbUJBQW1CO0FBRTVCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLFlBQVk7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNSLFdBQVc7QUFBQTtBQUFBLElBQ1gsUUFBUTtBQUFBO0FBQUEsSUFDUix1QkFBdUI7QUFBQTtBQUFBLEVBQ3pCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
