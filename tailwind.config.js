/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { nextui } = require("@nextui-org/react");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#357960",
        secondary: "#90EE90",
        lightbrown: "#eabfb1",
        brown: "#6E260E",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});
