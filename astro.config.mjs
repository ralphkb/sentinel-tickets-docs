import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: "Sentinel Tickets",
      favicon: "/favicon.ico",
      components: {
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ralphkb/sentinel-tickets",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/vhXCzj9S3J",
        },
        { icon: "email", label: "Email", href: "mailto:ralph@ralphk.dev" },
      ],
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
