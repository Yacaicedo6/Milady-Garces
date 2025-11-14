import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detectar si estamos construyendo para GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  // Hostinger → base "./"
  // GitHub Pages → base "/Milady-Garces/"
  base: isGithubPages ? "/Milady-Garces/" : "./",
});
