import path from "node:path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    // Mirrors the "@/*" path in tsconfig.json. Defined here (rather than via
    // vite-tsconfig-paths) so it also applies to .mdx files and to
    // vanilla-extract's .css.ts child compiler.
    alias: { "@": path.resolve(import.meta.dirname, "src") },
  },
});
