import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: 'server',
  buildOptions: { out: './dist' },
  base: '',
  env: {
    schema: {
      SECRET_WEBHOOK_URL: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
  adapter: cloudflare(),
});
