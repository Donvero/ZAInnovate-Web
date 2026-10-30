import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#08101C",
          900: "#0E1B2E",
          850: "#122036",
          800: "#16253B",
          700: "#1E3557",
          600: "#2B4C7E",
        },
        gold: {
          300: "#FFE07D",
          400: "#FFD043",
          500: "#FFC20E",
          600: "#E5AB00",
          700: "#B8860B",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
