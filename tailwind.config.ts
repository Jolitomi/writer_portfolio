import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"], // For name
        sans: ["Inter", "sans-serif"], // For body text
      },
    },
  },
  plugins: [],
};

export default config;
