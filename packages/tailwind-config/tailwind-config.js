/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Include paths to all components/pages in apps that use Tailwind
    "../../apps/professional-profile/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    // Add other apps/packages that use Tailwind here if needed
  ],
  theme: {
    extend: {
      colors: {
        ultramarine50: "#e7f1ff",
        ultramarine100: "#d4e4ff",
        ultramarine200: "#b1cdff",
        ultramarine300: "#83aaff",
        ultramarine400: "#5278ff",
        ultramarine500: "#2b46ff",
        ultramarine600: "#0711ff",
        ultramarine700: "#0009ff",
        ultramarine800: "#020bd1",
        ultramarine900: "#0d17a0",
        ultramarine950: "#080c5e",
      },
    },
  },
  plugins: [],
};
