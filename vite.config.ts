import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "client", "src"),
    },
  },
  base: '/kite-courses/',
  root: resolve(import.meta.dirname, "client"),
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'client', 'index.html'),
      }
    },
    outDir: resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
