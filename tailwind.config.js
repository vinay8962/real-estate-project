/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#06a788",
        Secondary: "#2c2e33",
        subPrimary1: "rgba(215, 241, 236, 1)",
        subPrimary2: "rgba(6, 167, 136, 0.16)",
        paragraph: "rgba(44, 46, 51, 0.6)",
        Text1: "#5c5e61",
        Text2: "#161e2d",
      },
    },
  },
  plugins: [],
};
