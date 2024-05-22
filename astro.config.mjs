import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sentinel Tickets Docs",
      favicon: "/favicon.ico",
      social: {
        github: "https://github.com/ralphkb/sentinel-tickets",
        discord: "https://discord.gg/vhXCzj9S3J",
      },
      sidebar: [
        {
          label: "Setup",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Installation", link: "/setup/installation/" },
            { label: "Updating", link: "/setup/updating/" },
          ],
        },
        {
          label: "Configuration",
          items: [
            { label: "Permissions", link: "/configuration/permissions/" },
          ],
        },
        {
          label: "FAQ",
          items: [{ label: "Common Errors", link: "/faq/common-errors/" }],
        },
      ],
    }),
  ],
});
