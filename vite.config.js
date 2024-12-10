import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Determine the base path dynamically
const isGitHubPages = process.env.NODE_ENV === "production" && process.env.GITHUB_ACTIONS;
const repoName = "stevos-website"; // github pages repo name

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? `/${repoName}/` : "/", // Use dynamic base
});
