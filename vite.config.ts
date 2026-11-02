import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // GitHub Pages 可能部署在子路径下（https://<user>.github.io/<repo>/），
  // 使用相对路径保证资源在根路径与子路径下都能正确解析
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
