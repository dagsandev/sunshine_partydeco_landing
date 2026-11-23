import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sunshine-partydeco.vercel.app/",
  // Astro 7 defaults to "jsx" compression, which drops whitespace between
  // inline elements (e.g. "Por eso <span>te invitamos"). Keep the old behaviour.
  compressHTML: true,
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
