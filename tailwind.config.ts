import type { Config } from "tailwindcss";

console.log("LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "5": "40px",
        "6": "48px",
        "7": "56px",
        "8": "64px",
        "9": "72px",
        "10": "80px",
      },
    },
  },
};

export default config;
