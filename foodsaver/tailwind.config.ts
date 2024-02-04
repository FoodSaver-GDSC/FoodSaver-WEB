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
        mainColor: "#4FB14F",
        textColor: "#4B574B",
        borderColor: "#DEDEDE"
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
