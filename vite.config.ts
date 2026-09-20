import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (
            id.includes("@tanstack/react-query") ||
            id.includes("@tanstack/react-router") ||
            id.includes("@tanstack/react-start") ||
            id.includes("@tanstack/router")
          ) {
            return "tanstack";
          }
          if (
            id.includes("react-dom") ||
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/scheduler/")
          ) {
            return "react";
          }
          if (id.includes("lucide-react") || id.includes("react-icons")) {
            return "icons";
          }
          if (id.includes("@radix-ui")) {
            return "radix";
          }
          return undefined;
        },
      },
    },
  },
});
