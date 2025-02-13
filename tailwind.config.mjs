/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_white: "#ECF0F1",
        color_black: "#243342",
        color_destaque1: "#6B21A8",
        color_destaque2: "#70157A",
      },
    },
  },
  plugins: [],
};
