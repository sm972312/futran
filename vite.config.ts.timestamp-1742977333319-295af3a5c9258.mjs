import { defineConfig } from "file:///home/projects/bolt-vanilla-vite-ztao6xpk/node_modules/vite/dist/node/index.js";
import react from "file:///home/projects/bolt-vanilla-vite-ztao6xpk/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///home/projects/bolt-vanilla-vite-ztao6xpk/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/home/projects/bolt-vanilla-vite-ztao6xpk";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};