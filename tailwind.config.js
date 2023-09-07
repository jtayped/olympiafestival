/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#eae8e6",
        background: "#030b0b",
        primary: "#00f6ff",
        secondary: "#ffffff",
        accent: "#00ff89",
      },
      fontFamily: {
        accent: ["Bebas Neue", "sans-serif"],
        primary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
