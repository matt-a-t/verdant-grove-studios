import { defineConfig } from "astro/config";

export default defineConfig({
  // Enable strict mode for better type checking
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
