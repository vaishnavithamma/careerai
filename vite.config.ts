import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  root: "public",
  envDir: "../",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "public/index.html"),
        login: resolve(__dirname, "public/login.html"),
        signup: resolve(__dirname, "public/signup.html"),
        dashboard: resolve(__dirname, "public/dashboard.html")
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
