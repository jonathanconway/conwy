import type { Config } from "tailwindcss";

module.exports = {
  darkMode: "selector",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./src/tailwind-js-classes.json",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Montserrat",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
