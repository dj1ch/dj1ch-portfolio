import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  env: {
    schema: {
      SECRET_WEBHOOK_URL: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
  integrations: [react()],
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
    imageService: "passthrough",
    sessions: false,
    mode: "directory",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
