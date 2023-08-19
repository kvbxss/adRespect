/** @type {import('tailwindcss').Config} */

console.log(process.env.NODE_ENV);
module.exports = {
  mode: "jit",
  purge: ["./dist/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      beige: "#DCC1AB",
      green: "#1B5B31",
      grey: "#F5F0EC",
      white: "#FFFFFF",
      black: "#111111",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
