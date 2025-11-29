// vite.config.ts
import { defineConfig } from "file:///E:/fin/node_modules/vite/dist/node/index.js";
import react from "file:///E:/fin/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///E:/fin/node_modules/lovable-tagger/dist/index.js";
import { visualizer } from "file:///E:/fin/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import compress from "file:///E:/fin/node_modules/vite-plugin-compression/dist/index.mjs";
import { imagetools } from "file:///E:/fin/node_modules/vite-imagetools/dist/index.js";
import viteImagemin from "file:///E:/fin/node_modules/vite-plugin-imagemin/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\fin";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // ✅ Bundle Visualizer
    visualizer({
      filename: "bundle-report.html",
      open: false,
      gzipSize: true,
      brotliSize: true
    }),
    // ✅ Compression for better load speed
    compress({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 1024,
      algorithm: "brotliCompress",
      ext: ".br"
    }),
    compress({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 1024,
      algorithm: "gzip",
      ext: ".gz"
    }),
    // ✅ Image Optimization
    imagetools(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      svgo: {},
      webp: { quality: 75 }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    dedupe: ["react", "react-dom"]
  },
  build: {
    minify: "terser",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1e3,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.message.includes("Use of eval")) return;
        warn(warning);
      },
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "radix-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip"
          ],
          "ui-components": ["lucide-react", "class-variance-authority", "clsx"],
          "forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          "utils": ["date-fns", "tailwind-merge", "sonner"],
          "charts": ["recharts"]
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split("/").pop()?.replace(".tsx", "").replace(".ts", "") : "chunk";
          return `assets/${facadeModuleId}-[hash].js`;
        },
        entryFileNames: "assets/index-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]"
      }
    },
    target: "esnext",
    sourcemap: false,
    reportCompressedSize: true,
    assetsInlineLimit: 4096
    // Inline assets smaller than 4kb
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
      "class-variance-authority"
    ]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxmaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGZpblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZmluL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZS5jb25maWcudHMgLSBGaW5hbCBPcHRpbWl6ZWQgQ29uZmlnIGZvciBTRU8gKyBQZXJmb3JtYW5jZSArIEltYWdlc1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuaW1wb3J0IGNvbXByZXNzIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gXCJ2aXRlLWltYWdldG9vbHNcIjtcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlbWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKSxcblxuICAgIC8vIFx1MjcwNSBCdW5kbGUgVmlzdWFsaXplclxuICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgZmlsZW5hbWU6IFwiYnVuZGxlLXJlcG9ydC5odG1sXCIsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIFx1MjcwNSBDb21wcmVzc2lvbiBmb3IgYmV0dGVyIGxvYWQgc3BlZWRcbiAgICBjb21wcmVzcyh7XG4gICAgICB2ZXJib3NlOiB0cnVlLFxuICAgICAgZGlzYWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVPcmlnaW5GaWxlOiBmYWxzZSxcbiAgICAgIHRocmVzaG9sZDogMTAyNCxcbiAgICAgIGFsZ29yaXRobTogXCJicm90bGlDb21wcmVzc1wiLFxuICAgICAgZXh0OiBcIi5iclwiLFxuICAgIH0pLFxuICAgIGNvbXByZXNzKHtcbiAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlLFxuICAgICAgdGhyZXNob2xkOiAxMDI0LFxuICAgICAgYWxnb3JpdGhtOiBcImd6aXBcIixcbiAgICAgIGV4dDogXCIuZ3pcIixcbiAgICB9KSxcblxuICAgIC8vIFx1MjcwNSBJbWFnZSBPcHRpbWl6YXRpb25cbiAgICBpbWFnZXRvb2xzKCksXG5cbiAgICB2aXRlSW1hZ2VtaW4oe1xuICAgICAgZ2lmc2ljbGU6IHsgb3B0aW1pemF0aW9uTGV2ZWw6IDcgfSxcbiAgICAgIG9wdGlwbmc6IHsgb3B0aW1pemF0aW9uTGV2ZWw6IDcgfSxcbiAgICAgIG1vempwZWc6IHsgcXVhbGl0eTogNzUgfSxcbiAgICAgIHN2Z286IHt9LFxuICAgICAgd2VicDogeyBxdWFsaXR5OiA3NSB9LFxuICAgIH0pLFxuICBdLmZpbHRlcihCb29sZWFuKSxcblxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gICAgZGVkdXBlOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgfSxcblxuICBidWlsZDoge1xuICAgIG1pbmlmeTogXCJ0ZXJzZXJcIixcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb253YXJuKHdhcm5pbmcsIHdhcm4pIHtcbiAgICAgICAgaWYgKHdhcm5pbmcubWVzc2FnZS5pbmNsdWRlcyhcIlVzZSBvZiBldmFsXCIpKSByZXR1cm47IC8vIElnbm9yZSBMb3R0aWUgZXZhbCB3YXJuaW5nXG4gICAgICAgIHdhcm4od2FybmluZyk7XG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIFwicmVhY3QtdmVuZG9yXCI6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwicmVhY3Qtcm91dGVyLWRvbVwiXSxcbiAgICAgICAgICBcInJhZGl4LXVpXCI6IFtcbiAgICAgICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvblwiLCBcIkByYWRpeC11aS9yZWFjdC1hbGVydC1kaWFsb2dcIixcbiAgICAgICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiLCBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCIsXG4gICAgICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1wb3BvdmVyXCIsIFwiQHJhZGl4LXVpL3JlYWN0LXNlbGVjdFwiLFxuICAgICAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtdGFic1wiLCBcIkByYWRpeC11aS9yZWFjdC10b29sdGlwXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwidWktY29tcG9uZW50c1wiOiBbXCJsdWNpZGUtcmVhY3RcIiwgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIiwgXCJjbHN4XCJdLFxuICAgICAgICAgIFwiZm9ybXNcIjogW1wicmVhY3QtaG9vay1mb3JtXCIsIFwiQGhvb2tmb3JtL3Jlc29sdmVyc1wiLCBcInpvZFwiXSxcbiAgICAgICAgICBcInV0aWxzXCI6IFtcImRhdGUtZm5zXCIsIFwidGFpbHdpbmQtbWVyZ2VcIiwgXCJzb25uZXJcIl0sXG4gICAgICAgICAgXCJjaGFydHNcIjogW1wicmVjaGFydHNcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAoY2h1bmtJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmFjYWRlTW9kdWxlSWQgPSBjaHVua0luZm8uZmFjYWRlTW9kdWxlSWRcbiAgICAgICAgICAgID8gY2h1bmtJbmZvLmZhY2FkZU1vZHVsZUlkLnNwbGl0KFwiL1wiKS5wb3AoKT8ucmVwbGFjZShcIi50c3hcIiwgXCJcIikucmVwbGFjZShcIi50c1wiLCBcIlwiKVxuICAgICAgICAgICAgOiBcImNodW5rXCI7XG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvJHtmYWNhZGVNb2R1bGVJZH0tW2hhc2hdLmpzYDtcbiAgICAgICAgfSxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiYXNzZXRzL2luZGV4LVtoYXNoXS5qc1wiLFxuICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdLVtoYXNoXS5bZXh0XVwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IHRydWUsXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsIC8vIElubGluZSBhc3NldHMgc21hbGxlciB0aGFuIDRrYlxuICB9LFxuXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgIFwicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC1yb3V0ZXItZG9tXCIsXG4gICAgICBcImx1Y2lkZS1yZWFjdFwiLCBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXG4gICAgXSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sY0FBYztBQUNyQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLGtCQUFrQjtBQVJ6QixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQTtBQUFBLElBRzFDLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxJQUNkLENBQUM7QUFBQTtBQUFBLElBR0QsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsTUFDbEIsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsTUFDbEIsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBO0FBQUEsSUFHRCxXQUFXO0FBQUEsSUFFWCxhQUFhO0FBQUEsTUFDWCxVQUFVLEVBQUUsbUJBQW1CLEVBQUU7QUFBQSxNQUNqQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUU7QUFBQSxNQUNoQyxTQUFTLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDdkIsTUFBTSxDQUFDO0FBQUEsTUFDUCxNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsSUFDdEIsQ0FBQztBQUFBLEVBQ0gsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUVoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxJQUNBLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxFQUMvQjtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsdUJBQXVCO0FBQUEsSUFFdkIsZUFBZTtBQUFBLE1BQ2IsT0FBTyxTQUFTLE1BQU07QUFDcEIsWUFBSSxRQUFRLFFBQVEsU0FBUyxhQUFhLEVBQUc7QUFDN0MsYUFBSyxPQUFPO0FBQUEsTUFDZDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osZ0JBQWdCLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLFVBQ3pELFlBQVk7QUFBQSxZQUNWO0FBQUEsWUFBNkI7QUFBQSxZQUM3QjtBQUFBLFlBQTBCO0FBQUEsWUFDMUI7QUFBQSxZQUEyQjtBQUFBLFlBQzNCO0FBQUEsWUFBd0I7QUFBQSxVQUMxQjtBQUFBLFVBQ0EsaUJBQWlCLENBQUMsZ0JBQWdCLDRCQUE0QixNQUFNO0FBQUEsVUFDcEUsU0FBUyxDQUFDLG1CQUFtQix1QkFBdUIsS0FBSztBQUFBLFVBQ3pELFNBQVMsQ0FBQyxZQUFZLGtCQUFrQixRQUFRO0FBQUEsVUFDaEQsVUFBVSxDQUFDLFVBQVU7QUFBQSxRQUN2QjtBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixnQkFBTSxpQkFBaUIsVUFBVSxpQkFDN0IsVUFBVSxlQUFlLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxRQUFRLFFBQVEsRUFBRSxFQUFFLFFBQVEsT0FBTyxFQUFFLElBQ2hGO0FBQ0osaUJBQU8sVUFBVSxjQUFjO0FBQUEsUUFDakM7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBRUEsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsc0JBQXNCO0FBQUEsSUFDdEIsbUJBQW1CO0FBQUE7QUFBQSxFQUNyQjtBQUFBLEVBRUEsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUFTO0FBQUEsTUFBYTtBQUFBLE1BQ3RCO0FBQUEsTUFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
