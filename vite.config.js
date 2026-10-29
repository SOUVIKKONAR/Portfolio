import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to GitHub Pages at https://SOUVIKKONAR.github.io/portfolio/
// Switch base back to "/" if deploying to Vercel/Netlify.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
