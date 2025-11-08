import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00bfff',
          blue: '#0ea5e9',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      maxWidth: {
        '8xl': '90rem', // Override default 7xl (80rem) to 90rem
      },
    },
  },
  plugins: [],
};
export default config;
