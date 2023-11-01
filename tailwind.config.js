/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        blue: "var(--blue)",
        grey: "var(--grey)",
        darkgrey: "var(--darkgrey)",
        green: "var(--green)",
        red: "var(--red)",
      },
    },
  },
  plugins: [],
};
