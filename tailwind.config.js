/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["COCOGOOSE", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
