import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      expressiveCode: {
        themes: ["github-dark-dimmed", "solarized-light"], //Temas de syntax highlighting (Bloques de código)
        styleOverrides: {
          borderRadius: "0.5rem", //Bordes redondeados en los bloques de código
        },
      },
      title: "Jetpack Compose Pro",
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
      description:
        "La mayor base de datos de Jetpack Compose de habla hispana.",
      editLink: {
        baseUrl:
          "https://github.com/ArisGuimera/JetpackComposePro/blob/master/",
      },
      social: {
        github: "https://github.com/ArisGuimera/JetpackComposePro",
        youtube: "https://youtube.com/@aristidevs",
        discord: "https://bit.ly/3bmeQvm",
        twitter: "https://x.com/aristidevs",
        linkedin: "https://www.linkedin.com/in/aristides-guimera-orozco/",
        twitch: "https://www.twitch.tv/aristidevs",
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
      ],
    }),
  ],
});
