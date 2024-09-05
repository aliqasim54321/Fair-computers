import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import resolveConfig from "tailwindcss/resolveConfig";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      "general-sans": ["General Sans", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0032a0",
        black: "#1d1e1c",
        gray: "#f1f1f1",
        dark: "#1d1e1c",
        "unorganic-green": "#d3f985",
        "sky-blue": "#a6e8f6",
        "shiny-pink": "#fcbedc",
        "almost-orange": "#fbc899",
      },
    },
  },
};

const fullConfig = resolveConfig(config);
const { colors } = fullConfig.theme;

config.plugins = [
  nextui({
    defaultTheme: "light",
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: (colors as any).primary,
          },
        },
      },
    },
  }),
];

export default config;
