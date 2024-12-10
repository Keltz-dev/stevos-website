import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dynamic base path for GitHub Pages
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "stevos-website";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? `/${repoName}/` : "/", // Dynamic base
});
