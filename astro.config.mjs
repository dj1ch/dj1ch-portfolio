import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  buildOptions: { out: "./dist" },
  base: "",
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
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
