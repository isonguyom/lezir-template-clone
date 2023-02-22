import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import GlobPlugin from 'vite-plugin-glob'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lezir-template-clone/',
  plugins: [vue(), GlobPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
