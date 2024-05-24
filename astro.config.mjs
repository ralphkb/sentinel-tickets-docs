import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: "Sentinel Tickets Docs",
      favicon: "/favicon.ico",
      components: {
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      social: {
        github: "https://github.com/ralphkb/sentinel-tickets",
        discord: "https://discord.gg/vhXCzj9S3J",
        email: "mailto:ralph@ralphk.dev",
      },
      sidebar: [
        {
          label: "Setup",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Creating a discord bot", link: "/setup/createabot/" },
            { label: "Installation", link: "/setup/installation/" },
            { label: "Updating", link: "/setup/updating/" },
          ],
        },
        {
          label: "Configuration",
          items: [
            { label: "Configuration File", link: "/configuration/config/" },
            { label: "Permissions", link: "/configuration/permissions/" },
          ],
        },
        {
          label: "FAQ",
          items: [
            { label: "Common Questions", link: "/faq/common-questions/" },
            { label: "Common Errors", link: "/faq/common-errors/" },
          ],
        },
      ],
    }),
  ],
});
