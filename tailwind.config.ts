import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: "1" },
          '50%': { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("tw-elements/plugin.cjs"),
    require("daisyui"),
  ],
};

export default config;
