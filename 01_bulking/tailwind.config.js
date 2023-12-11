/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1E", // dark black
        secondary: "#636366", // dark gray
        mainColor: "#064BB4", // dark blue
        heading: "#171725",
      },
      backgroundColor: {
        primary: "#BCFF5E", // light green
        secondary: "#064BB4", // dark blue
        light: "#F9F9FB", // light gray
        footer: "#E9EBED", // night blue
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "475px",
      ss: "600px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
