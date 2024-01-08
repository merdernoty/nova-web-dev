import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "montserrat-bold": ["Montserrat-Bold", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        "nunito-sans-semibold": ["Nunito Sans SemiBold", "sans-serif"],
      },
      colors: {
        foreground: "#19191B",
        fontcolor:"#FFFFFF"
      },
    },
  },
  plugins: [],
};
export default config;
