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
      components: {
        // Override the default `Footer` component.
        Footer: "./src/components/Footer.astro",
      },
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
          label: "Start Here",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", slug: "getting-started" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Overview", slug: "reference/overview" },
            { label: "Manuals", slug: "reference/manuals" },
          ],
        },
        {
          label: "68000",
          items: [
            { label: "Addressing Modes", slug: "68000/addressing-modes" },
          ],
        },
      ],
    }),
  ],
});
