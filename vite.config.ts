// vite.config.ts - Clean + Stable + No Windows Path Issues
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),

    // 🔥 Bundle Visualizer
    visualizer({
      filename: "bundle-report.html",
      open: false,
    }),

    /**
     * ⚡ CLEAN FIX:
     * Disable verbose → removes weird E:/ log paths completely
     */
    viteCompression({
      verbose: false,
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),

    viteCompression({
      verbose: false,
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),

    // 🖼 Image Optimization
    imagetools(),

    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      svgo: { plugins: [{ removeViewBox: false }], },
      webp: { quality: 75 },
    }),
  ].filter(Boolean),

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom"],
  },

  build: {
    outDir: "dist",
    minify: "terser",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.message.includes("Use of eval")) return;
        warn(warning);
      },

      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "radix-ui": [
            "@radix-ui/react-accordion", "@radix-ui/react-alert-dialog",
            "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-popover", "@radix-ui/react-select",
            "@radix-ui/react-tabs", "@radix-ui/react-tooltip",
          ],
          "ui-components": ["lucide-react", "clsx", "class-variance-authority"],
          "forms": ["react-hook-form", "zod", "@hookform/resolvers"],
          "utils": ["date-fns", "tailwind-merge", "sonner"],
          "charts": ["recharts"],
        },

        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/index-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    target: "esnext",
    sourcemap: false,
    reportCompressedSize: true,
    assetsInlineLimit: 4096,
  },

  optimizeDeps: {
    include: [
      "react", "react-dom", "react-router-dom",
      "lucide-react", "class-variance-authority"
    ],
  },
}));
