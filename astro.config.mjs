import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Jetpack Compose Pro",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "App bars",
          autogenerate: { directory: "app-bars" },
        },
        {
          label: "Badges",
          autogenerate: { directory: "badges" },
        },
        {
          label: "Buttons",
          autogenerate: { directory: "buttons" },
        },
        {
          label: "Cards",
          autogenerate: { directory: "cards" },
        },
        {
          label: "Carousel",
          autogenerate: { directory: "carousel" },
        },
        {
          label: "Checkbox",
          autogenerate: { directory: "checkbox" },
        },
        {
          label: "Chips",
          autogenerate: { directory: "chips" },
        },
        {
          label: "Pickers",
          autogenerate: { directory: "pickers" },
        },
        {
          label: "Dialogs",
          autogenerate: { directory: "dialogs" },
        },
        {
          label: "Divider",
          autogenerate: { directory: "divider" },
        },
        {
          label: "Lists",
          autogenerate: { directory: "lists" },
        },
        {
          label: "Menú",
          autogenerate: { directory: "menu" },
        },
        {
          label: "Navigation",
          autogenerate: { directory: "navigation" },
        },
        {
          label: "Progress indicator",
          autogenerate: { directory: "progress-indicator" },
        },
        {
          label: "Sheets",
          autogenerate: { directory: "sheets" },
        },
        {
          label: "Sliders",
          autogenerate: { directory: "sliders" },
        },
        {
          label: "Snackbar",
          autogenerate: { directory: "snackbar" },
        },
        {
          label: "Switch",
          autogenerate: { directory: "switch" },
        },
        {
          label: "Tabs",
          autogenerate: { directory: "tabs" },
        },
        {
          label: "Text",
          autogenerate: { directory: "text" },
        },
        {
          label: "Text fields",
          autogenerate: { directory: "text-fields" },
        },
        {
          label: "ToolTips",
          autogenerate: { directory: "tooltips" },
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
      ],
    }),
  ],
});
