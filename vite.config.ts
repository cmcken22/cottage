import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "2459-2607-fea8-28e4-be00-fd9e-fbcb-8c33-9c54.ngrok-free.app",
    ],
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/Assets"),
      "@components": path.resolve(__dirname, "src/Components"),
      "@pages": path.resolve(__dirname, "src/Pages"),
    },
  },
});
