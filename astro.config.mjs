// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  site: "https://m68k.dev",
  integrations: [
    starlight({
      plugins: [starlightThemeFlexoki({ accentColor: "blue" })],
      title: "M68k Reference",
      editLink: {
        baseUrl: "https://github.com/markjamesm/m68k-reference/tree/main",
      },
      logo: {
        light: "./src/assets/gray-logo.svg",
        dark: "./src/assets/gray-logo.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/markjamesm/m68k-reference",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
