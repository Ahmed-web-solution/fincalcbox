// vite.config.ts - Final Optimized Config for SEO + Performance + Images
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import compress from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),

    // ✅ Bundle Visualizer
    visualizer({
      filename: "bundle-report.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),

    // ✅ Compression for better load speed
    compress({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 1024,
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    compress({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 1024,
      algorithm: "gzip",
      ext: ".gz",
    }),

    // ✅ Image Optimization
    imagetools(),

    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      svgo: {},
      webp: { quality: 75 },
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },

  build: {
    minify: "terser",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.message.includes("Use of eval")) return; // Ignore Lottie eval warning
        warn(warning);
      },
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "radix-ui": [
            "@radix-ui/react-accordion", "@radix-ui/react-alert-dialog",
            "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-popover", "@radix-ui/react-select",
            "@radix-ui/react-tabs", "@radix-ui/react-tooltip"
          ],
          "ui-components": ["lucide-react", "class-variance-authority", "clsx"],
          "forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          "utils": ["date-fns", "tailwind-merge", "sonner"],
          "charts": ["recharts"],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split("/").pop()?.replace(".tsx", "").replace(".ts", "")
            : "chunk";
          return `assets/${facadeModuleId}-[hash].js`;
        },
        entryFileNames: "assets/index-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    target: "esnext",
    sourcemap: false,
    reportCompressedSize: true,
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },

  optimizeDeps: {
    include: [
      "react", "react-dom", "react-router-dom",
      "lucide-react", "class-variance-authority"
    ],
  },
}));
